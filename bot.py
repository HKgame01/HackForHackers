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

@bot.command()
async def start(ctx):
    await ctx.send("Hello, Welcome to the bot. Please use !help to see the available commands.")

# Help command
@bot.command()
async def help(ctx):
    help_message = """
    To start with, tell us your idea:
    `?idea (your idea for yt video)` - It will generate title, description and tags according to your idea
    `?communitypost` - A good YouTube community post for your channel
    `?script (video idea)` - A script for your video idea
    `?randomidea` - It will generate a random idea
    """
    
    await ctx.send(help_message)

@bot.command()
async def about(ctx):
    await ctx.send("This bot is made for Hack For Hackers")

