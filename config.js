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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_35_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSZVZXSkNCU2c2TUllOHVhT0ZHbWFzamY3aERJUzNzZ1BBTi9uTHc4ZlNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzY1NzA0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM1MkIzMjUyNTVGNEFBM0YxMzNFNEFEMDgzNTgyQzA3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkyNDkxMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzY1NzA0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQwMzJCNEIyRkJGOTFGNkQ4ODZFMjEyM0JGMDMxREVEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkyNDkxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrdmxoLTV4S1FlcUR0OVRrT0ppbTZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzYTFiMWU0LTY1YmItNGRjMC05YmVlLWVmZDYwMGZkZGQ5ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICAyMzAsXG4gICAgICA2OCxcbiAgICAgIDIzMixcbiAgICAgIDI2LFxuICAgICAgMTUzLFxuICAgICAgMTIwLFxuICAgICAgMTU0LFxuICAgICAgMTE5LFxuICAgICAgMTEyLFxuICAgICAgOTgsXG4gICAgICAyOSxcbiAgICAgIDc4LFxuICAgICAgMjM0LFxuICAgICAgMTgsXG4gICAgICAxNTIsXG4gICAgICAyMTQsXG4gICAgICAyNTQsXG4gICAgICAyNTEsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDIwMCxcbiAgICAgIDk5LFxuICAgICAgNDQsXG4gICAgICAxNTUsXG4gICAgICA1LFxuICAgICAgMjI0LFxuICAgICAgNDUsXG4gICAgICA5MyxcbiAgICAgIDcyLFxuICAgICAgMTUzLFxuICAgICAgMjE5LFxuICAgICAgMTg2LFxuICAgICAgMTg2LFxuICAgICAgODIsXG4gICAgICAyMTIsXG4gICAgICAxNTcsXG4gICAgICAxMTMsXG4gICAgICA5MSxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4WThQWE1ITlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNjU3MDQyMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzgxMDgwOTE0NjU5MzQ6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5iRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUt3M293Q0VPYmoyTElHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOKzV1M2V3WFY2eVBrWStvYU9YdmJWZVFHU2dYVUlMUzdPR0ZrV2U4d3kwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlp4MzloRkpwUSt1d1RoVTFBS2dDV2ZkV1k1Q05lemJGTkhQNEZFeUdKdGxwQ2JVWTF6eFNhdHYvUmwwM3h4YnVqb1IzOXc2b0ZXQVFnS1lYOWZnN0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1FS2QzVFBpOHpDdGl5bFRHQkRTQWVHVjlFVWxmU0kyVjdBMFgzQ3ZvalhKWXdNRHMyMkRNVFBmdWhCRkllNGNETjRaRmFHemtYaUFNTVo4YlJtQ0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzY1NzA0MjM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjkyNDkwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlBYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUFiLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWlmTTFyWXJ6S3A0ZThpbGNyYUFwR2NFLzlTYjluM1FvVWUrYnExWDAwWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjM1ODI5NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjkyNDU5NDcwMFwifSIKfQ=="  // PUT your SESSION_ID 


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
