import openai
import os
import discord

TOKEN = os.environ['BOT_TOKEN']
API = os.environ["API"]
openai.api_key = API

API_KEY = "API"
bot = discord.Client(intents=discord.Intents.all())

@bot.event
async def on_ready():    
    print(f"Logged in as {bot.user}")

