import openai
import os
import discord

TOKEN = os.environ['BOT_TOKEN']
API = os.environ["API"]
openai.api_key = API

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
    `?randomidea` - It will generate a random idea
    `?idea (your idea for yt video)` - It will generate title, description and tags according to your idea
    `?communitypost` - A good YouTube community post for your channel
    `?script (video idea)` - A script for your video idea
    """
    
    await ctx.send(help_message)

@bot.command()
async def about(ctx):
    await ctx.send("This bot is made for Hack For Hackers")

@bot.command()
async def idea(ctx, *, user_idea):
    rawidea = openai.Completion.create(engine="text-davinci-003", 
                                       prompt=f'tell me a good youtube video title, description and tags according to {user_idea}', 
                                       max_tokens=1000)
    idea = rawidea.choices[0]["text"]
    await ctx.send(f"The best title, description and tags for your Youtube Video after reviewing your idea is\n{idea}")

@bot.command()
async def communitypost(ctx):
    rawcomm = openai.Completion.create(engine="text-davinci-003", 
                                       prompt=f'tell me a good youtube community post for the channel"', 
                                       max_tokens=1000)
    comm = rawcomm.choices[0]["text"]
    await ctx.send(f"The best community for your Youtube Channel after reviewing your content is\n`{comm}`")

@bot.command()
async def script(ctx, *, video_idea):
    scr_waw = openai.Completion.create(engine="text-davinci-003", 
                                       prompt=f'write a script on "{video_idea}"', 
                                       max_tokens=1000)
    script = scr_waw.choices[0]["text"]
    await ctx.send(f"Here you go:\n{script}")

@bot.command()
async def randomidea(ctx):
    prompt = "tell me a random idea for hackathon"
    response = openai.Completion.create(engine="text-davinci-003", 
                                        prompt=prompt, 
                                        max_tokens=1000)
    random_idea = response.choices[0]["text"].strip()

    await ctx.send(f"Here's a random Idea for the hackathon:\n{random_idea}")

bot.run(TOKEN)
