/**
 * Gemini API Configuration
 * 
 * ⚠️ IMPORTANT: Replace the placeholder below with your actual Gemini API key
 * 
 * To get your API key:
 * 1. Go to https://makersuite.google.com/app/apikey
 * 2. Create a new API key
 * 3. Replace "YOUR_GEMINI_API_KEY_HERE" with your actual key
 * 
 * NOTE: For production, store this key securely (environment variables, secrets manager, etc.)
 */

// ============================================================
// ⚠️ INSERT YOUR GEMINI API KEY BELOW ⚠️
// ============================================================
export const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";
// ============================================================

export const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export interface NutritionInfo {
  calories: string;
  sugar: string;
  fat: string;
  saturatedFat: string;
  carbohydrates: string;
  protein: string;
  sodium: string;
}

export interface IngredientAnalysis {
  ingredients: string[];
  additives: { name: string; explanation: string }[];
}

export interface HealthImpact {
  pros: string[];
  cons: string[];
  longTermRisks: string[];
}

export interface BiosafetyEthics {
  safetyIssues: string[];
  additivesConcerns: string[];
  ethicalIssues: string[];
}

export interface UserGuidance {
  whoShouldLimit: string[];
  safeConsumption: string;
}

export interface LabelAnalysisResult {
  nutrition: NutritionInfo;
  ingredients: IngredientAnalysis;
  healthImpact: HealthImpact;
  biosafetyEthics: BiosafetyEthics;
  userGuidance: UserGuidance;
}

const ANALYSIS_PROMPT = `You are an expert food safety and nutrition analyst. Analyze the food label image provided and extract/analyze the following information. Return your response in the exact JSON format specified below.

Analyze the image and provide:

1. NUTRITION INFORMATION - Extract all nutritional values visible on the label
2. INGREDIENT ANALYSIS - List all ingredients and explain any additives/preservatives
3. HEALTH IMPACT - Provide pros, cons, and potential long-term health risks
4. BIOSAFETY & ETHICS - Identify any food safety concerns, additive concerns, or ethical/transparency issues
5. USER GUIDANCE - Specify who should limit consumption and safe consumption advice

Return your response in this exact JSON format:
{
  "nutrition": {
    "calories": "value or 'Not visible'",
    "sugar": "value or 'Not visible'",
    "fat": "value or 'Not visible'",
    "saturatedFat": "value or 'Not visible'",
    "carbohydrates": "value or 'Not visible'",
    "protein": "value or 'Not visible'",
    "sodium": "value or 'Not visible'"
  },
  "ingredients": {
    "ingredients": ["ingredient1", "ingredient2", "..."],
    "additives": [
      {"name": "additive name", "explanation": "what it is and its purpose"}
    ]
  },
  "healthImpact": {
    "pros": ["benefit1", "benefit2"],
    "cons": ["concern1", "concern2"],
    "longTermRisks": ["risk1", "risk2"]
  },
  "biosafetyEthics": {
    "safetyIssues": ["issue1 or 'None identified'"],
    "additivesConcerns": ["concern1 or 'None identified'"],
    "ethicalIssues": ["issue1 or 'None identified'"]
  },
  "userGuidance": {
    "whoShouldLimit": ["group1", "group2"],
    "safeConsumption": "advice for safe consumption"
  }
}

If any information is not visible or cannot be determined from the image, use appropriate default values like "Not visible" or "Cannot be determined from image".`;

export async function analyzeFoodLabel(imageBase64: string): Promise<LabelAnalysisResult> {
  if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
    throw new Error("Please configure your Gemini API key in src/lib/gemini.ts");
  }

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: ANALYSIS_PROMPT
          },
          {
            inline_data: {
              mime_type: "image/jpeg",
              data: imageBase64
            }
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.4,
      topK: 32,
      topP: 1,
      maxOutputTokens: 4096,
    }
  };

  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Gemini API error:", errorText);
    throw new Error(`API request failed: ${response.status}`);
  }

  const data = await response.json();
  
  // Extract the text response
  const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!textResponse) {
    throw new Error("No response received from Gemini");
  }

  // Parse the JSON from the response
  // The response might have markdown code blocks, so we need to extract the JSON
  let jsonString = textResponse;
  const jsonMatch = textResponse.match(/```json\n?([\s\S]*?)\n?```/);
  if (jsonMatch) {
    jsonString = jsonMatch[1];
  } else {
    // Try to find JSON object directly
    const jsonStartIndex = textResponse.indexOf('{');
    const jsonEndIndex = textResponse.lastIndexOf('}');
    if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
      jsonString = textResponse.slice(jsonStartIndex, jsonEndIndex + 1);
    }
  }

  try {
    const result: LabelAnalysisResult = JSON.parse(jsonString);
    return result;
  } catch (parseError) {
    console.error("Failed to parse Gemini response:", textResponse);
    throw new Error("Failed to parse analysis results");
  }
}
