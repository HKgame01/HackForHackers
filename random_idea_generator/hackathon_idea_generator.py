import streamlit as st
import random

hackathon_ideas = [
    "A mobile app to connect blood donors with recipients",
    "An AI-powered chatbot to assist in medical diagnosis",
    "A platform to promote eco-friendly products and services",
    "A web app for virtual team collaboration and task management",
    "An IoT device for monitoring air quality in urban areas",
    "A blockchain-based supply chain management system",
    "A machine learning model to predict stock market trends",
    "An online platform for skill-sharing and mentorship",
    "A virtual reality game for educational purposes",
    "A social network for connecting pet owners",
]

def generate_random_idea():
    return random.choice(hackathon_ideas)

def main():
    st.title("Hackathon Idea Generator")
    st.write("Click the button below to generate a random hackathon project idea:")

    if st.button("Generate Idea"):
        idea = generate_random_idea()
        st.subheader("Random Hackathon Idea:")
        st.write(idea)

if __name__ == "__main__":
    main()
