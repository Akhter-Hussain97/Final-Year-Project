from rest_framework.decorators import api_view
from rest_framework.response import Response
import google.generativeai as genai

# ✅ Add your API key here
genai.configure(api_key="AIzaSyC23IreBIwLLMfHWLT7GxhxdK5aF1zi2rU")

# ✅ Load model
model = genai.GenerativeModel("gemini-2.5-flash", system_instruction="You are a smart travel assistant for Pakistan. Suggest most visited places, packages, hotels, and travel tips.")


@api_view(['POST'])
def chat(request):
    try:
        user_message = request.data.get("message")

        if not user_message:
            return Response({"reply": "Please ask something."})

        # ✅ AI response
        response = model.generate_content(user_message)

        return Response({
            "reply": response.text
        })

    except Exception as e:
        print("ERROR:", str(e))  # 🔥 check terminal
        return Response({
            "reply": "AI server error"
        }, status=500)

