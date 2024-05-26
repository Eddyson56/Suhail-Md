const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Eddyson:Êddysöñ@cluster0.ysiv0x0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_32_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgNixcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3LFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMixcbiAgICAgICAgNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDI3LFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0LFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGVTdGbkJ0dU9kTXZTWmhkc3RrZnFrMjFlSmt6Y2E2WVY1QmdtVzFnMk13PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzY1NzA0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNFQzM1OTM2RkUyMDM1QzNDRDY3NEM2MDFENkZEMUE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjc1MTkzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzY1NzA0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVDMTY3NDRDOTMyREY4MTI5RTA2QzQ2NTNEQzdGRjA3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjc1MTkzMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3LUlUTGg1TlQ0YXl2LU5Sc2pkU01RXCIsXG4gIFwicGhvbmVJZFwiOiBcImVkN2U3MzVlLTlhMjYtNDUyMS1iMWM0LWQyZDZjNzE2MTZjN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICA5MixcbiAgICAgIDIwOSxcbiAgICAgIDIzOSxcbiAgICAgIDIyMSxcbiAgICAgIDIwNixcbiAgICAgIDMyLFxuICAgICAgMjUzLFxuICAgICAgMjQ2LFxuICAgICAgMjEyLFxuICAgICAgNDUsXG4gICAgICA5MixcbiAgICAgIDg2LFxuICAgICAgMTA1LFxuICAgICAgNjksXG4gICAgICAzLFxuICAgICAgMTU3LFxuICAgICAgMTY1LFxuICAgICAgMTM2LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDc5LFxuICAgICAgMjcsXG4gICAgICA1OSxcbiAgICAgIDI0NCxcbiAgICAgIDIzOSxcbiAgICAgIDIzLFxuICAgICAgNjcsXG4gICAgICAyMTgsXG4gICAgICAxMzgsXG4gICAgICAxNzksXG4gICAgICAxMTgsXG4gICAgICAxOTAsXG4gICAgICAxOTgsXG4gICAgICAyMjUsXG4gICAgICA1MCxcbiAgICAgIDIzNSxcbiAgICAgIDI1LFxuICAgICAgMjMsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBRUpSUUw2RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNjU3MDQyMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzgxMDgwOTE0NjU5MzQ6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLDimRkeXPDtsOxXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUd3M293Q0VMS2N6cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOKzV1M2V3WFY2eVBrWStvYU9YdmJWZVFHU2dYVUlMUzdPR0ZrV2U4d3kwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVITDFRNitIdDlaT0JwaGFHUGl6eHRJQVc2T0RWZzBMM0dnbnVZQVNLY3pxdlB0UW5YcFcra0xLTUhxSEc2QUwwa01CRHNvdFU3blZ4T1dUVk11ZkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkgzR1FDU1VUdlBvR3NQeWd0ZUFXSXVuU2FQRmJvNjNBd2hLaE9RWGU1N2hGa28xMy9BeTQ1V1docnNpdTF0VkdYVGtJTnJsditUdmhlbkdicG5DZGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzY1NzA0MjM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjc1MTkyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFTZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVNlLmpzb24iOiAie1wia2V5RGF0YVwiOlwieGVWVTZBT3RYVnRBZTM1cnh0QU1DcDl6SmVEcE1MMFJYUm52OURaSEx4cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3WRcIjo1NjM1ODI5NzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjY3NTQ4NDkwMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
