const axios = require('axios');
const cheerio = require("cheerio");
var { SinhalaSub }  = require('@sl-code-lords/movie-dl')
var os = require('os')
var fs = require("fs")
const { inputMovie, getMovie, resetMovie } = require("./database/movie_db")
const { inputus, getus, resetus } = require("./database/user_db")
const { File } = require('megajs')
var prefix = '.'
var uploader = '🎬 DARKYASIYAXTEAM 🎬 ' // edit krgnn
var tv_cap = `*ᴛᴠ ꜱʜᴏᴡ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ʙʏ ʏᴀsɪʏᴀ ᴏғᴄ* 
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ɪɴᴅᴜᴡᴀʀᴀ*`// edit krgnn
var mv_cap = `*ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ʙʏ ʏᴀsɪʏᴀ ᴏғᴄ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ɪɴᴅᴜᴡᴀʀᴀ*` // edit krgnn
const sleep = async(ms) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}
const runtime = (seconds) => {
	seconds = Number(seconds)
	var d = Math.floor(seconds / (3600 * 24))
	var h = Math.floor(seconds % (3600 * 24) / 3600)
	var m = Math.floor(seconds % 3600 / 60)
	var s = Math.floor(seconds % 60)
	var dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : ''
	var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : ''
	var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : ''
	var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : ''
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

async function plugs(conn , msg , text , sq ,   from ,id_db , command ){

 var from2 = from
 const reply = (text) => { conn.sendMessage(from2, { text: text }, { quoted: msg })}

	//___________________________________________________________________________________________________________
	var sudo = [ '94701629707' , '94718799291' , '94743548986' , '94740264767', '94719269325', '94741241691', '94712867669', '94760018802', '94743511558'  ] // BOTWA WEDA KARANNA ONI NUMBERS
       try{
	var response = await getus()  
	var sudo2 = response? ( JSON.parse(response.jids) ? JSON.parse(response.jids) : [] ) : []
	sudo  = sudo.concat(sudo2)       
       }catch(e){
	console.log(e)       
       }



	const sender = msg.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (msg.key.participant || msg.key.remoteJid)
	const senderNumber = sender.split('@')[0]
	const botNumber = conn.user.id.split(':')[0]
	var is_sudo =  sudo.includes(senderNumber) || sudo.includes(sender) || sudo.includes(from) || ''
	if (!is_sudo) return
	//_____________________________________________________________________________________________________________

if(command) await conn.readMessages([msg.key]) // MSG READ
if (senderNumber == '94701629707') await conn.sendMessage(from, { react: {  text: "🐋", key: msg.key } } ) // THISAL SANUJAYA
if (senderNumber == '94743548986') await conn.sendMessage(from, { react: {  text: "💃", key: msg.key } } ) // YASIYA 01
if (senderNumber == '94705624363') await conn.sendMessage(from, { react: {  text: "💃", key: msg.key } } ) // YASIYA 02
if (senderNumber == '94760018802') await conn.sendMessage(from, { react: {  text: "💃", key: msg.key } } ) // YASIYA 03
if (senderNumber == '94741241691') await conn.sendMessage(from, { react: {  text: "🌙", key: msg.key } } ) // INDUWARA 01
if (senderNumber == '94740264767') await conn.sendMessage(from, { react: {  text: "🌙", key: msg.key } } ) // INDUWARA 02
if (senderNumber == '94713702468') await conn.sendMessage(from, { react: {  text: "👨‍💻", key: msg.key } } ) // HASITHA 01
if (senderNumber == '94743511558') await conn.sendMessage(from, { react: {  text: "👨‍💻", key: msg.key } } ) // HASITHA 02
if (senderNumber == '94787820101') await conn.sendMessage(from, { react: {  text: "⚡", key: msg.key } } ) // AKASH 
if (senderNumber == '94714536993') await conn.sendMessage(from, { react: {  text: "🎬", key: msg.key } } ) // MOVIE DL BOT
	
 switch (command) {

//-------------------------------------------------------------------------------------		 
case "jid" :
await conn.sendMessage(from , {text : from + '' } ,{ quoted: msg} )
break
//-------------------------------------------------------------------------------------
case "tvshow"  : case "tv"  : case "mv2" :
try {
  await conn.sendMessage(from, { react: {  text: "📺", key: msg.key } } )
  if(!text) return reply('```ටීවී ශෝ එකක නමක් දීපන් වු|ත්තෝ 😹🖕🏻❓```')
     var mov1 = await conn.cine.search(text , 'tvshows') 	
     var mov2 = await conn.sinh.search(text , 'tvshows')
     var s_t_1 = ''
     var s_t_2 = ''
      for (let i = 0; i < mov1.length; i++) {
      s_t_1 += `*${i + 1} ||* ${mov1[i].title.replace(/Sinhala Subtitles \| සිංහල උපසිරසි සමඟ/g , '').replace('Sinhala Subtitles | සිංහල උපසිරැසි සමඟ' , '')}\n`;
      }
      for (let i = 0; i < mov2.length; i++) {	     
      s_t_2 += `*${mov1.length + (i + 1)} ||* ${mov2[i].title.replace(/Sinhala Subtitles \| සිංහල උපසිරසි සමඟ/g , '').replace('Sinhala Subtitle | සිංහල උපසිරසි සමඟ' , '')}\n`;
      }
   if(!s_t_1 && !s_t_2) { return reply(`*Tv show Results Not Found ℹ️*\n\n_ඔබගේ ඇතුළත් කිරීමට අදාළව Tv show results *sinhalasub.lk* හෝ *cinesubz.co* වෙබ් අඩවිය තුළ සොයාගත නොහැක 🧑‍🎨_`) }
	  const mtext = `🎞️ ᴛᴠ ꜱʜᴏᴡ sᴇᴀʀᴄʜ sʏsᴛᴇᴍ 🎞️*
   
*│ 📲 Input :*  ${text}

Please reply the numbers you want to select ,

${s_t_1 ? '*Cinesubz.co*\n' + s_t_1 + ( s_t_2 ?  '\n*Sinhalasub.lk*\n' +  s_t_2  : '') : ( s_t_2 ?  '*Sinhalasub.lk*\n' +  s_t_2  : '')  }
${tv_cap}`
const srh_sendmsg = await conn.sendMessage(from, { text : mtext  } , { quoted: msg }  )	
 for (let i = 0; i < mov1.length; i++) {
await id_db.input_data('.ctvdet '  + mov1[i].link , i+1 + '' , srh_sendmsg.key.id)	 
 }	
 for (let i = 0; i < mov2.length; i++) {
await id_db.input_data('.stvdet '  + mov2[i].link , mov1.length + i+1 + '' , srh_sendmsg.key.id)	 
 }		
}catch(e){
 await conn.sendMessage(from , {text : '*An error occurred 🧑‍🎨❌*' } ,{ quoted: msg} )
		await conn.sendMessage('94743548986@c.us' , {text : e + '' } )
			console.log(e)	
}
break			 
//-------------------------------------------------------------------------------------		 		 
case "movie" : case 'film' : case 'mv' :
try{
    await conn.sendMessage(from, { react: {  text: "🎥", key: msg.key } } )
    if(!text) return reply('```මූවී එකේ නම දෙන්නේ ප|කයද ...? 😹🖕🏻❓```')
     var mov1 = await conn.cine.search(text , 'movies') 	
     var mov2 = await conn.sinh.search(text , 'movies')
     var s_t_1 = ''
     var s_t_2 = ''
      for (let i = 0; i < mov1.length; i++) {
      s_t_1 += `*${i + 1} ||* ${mov1[i].title.replace(/Sinhala Subtitles \| සිංහල උපසිරසි සමඟ/g , '').replace('Sinhala Subtitles | සිංහල උපසිරැසි සමඟ' , '').replace('Sinhala Subtitle | සිංහල උපසිරැසි සමඟ' , '').replace('ඔන්ලයින් බලන්න , ඩිරෙක්ට් ඩවුන්ලෝඩ් කරන්න' , '')}\n`;
      }
      for (let i = 0; i < mov2.length; i++) {	     
      s_t_2 += `*${mov1.length + (i + 1)} ||* ${mov2[i].title.replace(/Sinhala Subtitles \| සිංහල උපසිරසි සමඟ/g , '').replace('Sinhala Subtitle | සිංහල උපසිරසි සමඟ' , '')}\n`;
      }
   if(!s_t_1 && !s_t_2) { return reply(`*Movie Results Not Found ℹ️*\n\n_ඔබගේ ඇතුළත් කිරීමට අදාළව Movie results *sinhalasub.lk* හෝ *cinesubz.co* වෙබ් අඩවිය තුළ සොයාගත නොහැක 🧑‍🎨_\n`) }
	  const mtext = `*🎞️ ᴍᴏᴠɪᴇ sᴇᴀʀᴄʜ sʏsᴛᴇᴍ 🎞️*
   
*│ 📲 Input :*  ${text}

Please reply the numbers you want to select ,

${s_t_1 ? '_*Cinesubz.co*_\n' + s_t_1 + ( s_t_2 ?  '\n_*Sinhalasub.lk*_\n' +  s_t_2  : '') : ( s_t_2 ?  '_*Sinhalasub.lk*_\n' +  s_t_2  : '')  }
${mv_cap}`
const srh_sendmsg = await conn.sendMessage(from, { text : mtext  } , { quoted: msg }  )	
 for (let i = 0; i < mov1.length; i++) {
await id_db.input_data('.mdet '  + mov1[i].link , i+1 + '' , srh_sendmsg.key.id)	 
 }	
 for (let i = 0; i < mov2.length; i++) {
await id_db.input_data('.mdet '  + mov2[i].link , mov1.length + i+1 + '' , srh_sendmsg.key.id)	 
 } }	
catch(e){
		 await conn.sendMessage(from , {text : '*An error occurred 🧑‍🎨❌*' } ,{ quoted: msg} )
		await conn.sendMessage('94743548986@c.us' , {text : e + '' } )
			console.log(e)
			}
break
//-------------------------------------------------------------------------------------
case "stvdet" :	
try{
if(!text) return reply('ℹ️ *Please enter a Tv Show link*')
if(!text.includes('sinhalasub')) return reply('ℹ️ *Please enter a TvShow link*')	
const mov = await conn.sinh.tvshow(text)
episodes = mov.result.links

let epi_num = '';

// Iterate over each season
episodes.forEach((season, index) => {
  const seasonNumber = index + 1;
  epi_num += `_*Season ${seasonNumber}*_\n`;
    epi_num +=  "*" + seasonNumber + '* || All Episodes' + '\n'
  // Iterate over each episode within the season
  season.forEach((episode) => {

   var episodeNumber = episode.episode.replace(' - ', '.');
   var ep_2 = episodeNumber.includes('.') ? episodeNumber.split('.') : ''
    if((ep_2[1] + '').length == 1 ) ep_2[1] = '0' + ep_2[1]
episodeNumber = ep_2[0] + '.' + ep_2[1]	  

    epi_num += `*${episodeNumber} ||* Season ${seasonNumber} - Episode ${episodeNumber}\n`;
  });

  epi_num += '\n'; // Add a line break between seasons
});
	var cast = ''
for (let i = 0; i < mov.result.cast.length; i++) {
  cast += mov.result.cast[i].name + ','
}			
var mtext = `*📺 𝖳𝖵 𝖲𝖧𝖮𝖶 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣 𝖲𝖸𝖲𝖳𝖤𝖬 📺*

*│ 🎞️ ᴛɪᴛʟᴇ :* ${mov.result.title}
*│ 🔮 ᴄᴀᴛᴀɢᴏʀɪᴇs :* ${mov.result.categories} 
*│ 🕵️‍♂️ ᴄʜᴀʀᴀᴄᴛᴇʀs :* ${cast}

Please select the episodes you want to download by replying these numbers,

${epi_num}
${tv_cap}`

const srh_sendmsg = await conn.sendMessage(from, { text : mtext ,contextInfo: {

				externalAdReply: { 
					title: mov.result.title,
					body: 'DARKYASIYAXTEAM MOVIE DL BOT',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: mov.result.images[0] ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }} } , { quoted: msg }  )
const links = episodes
  .flat()
  .map((episode) => episode.link);
const epi_num2 = episodes
  .flat()
  .map((episode) => episode.episode);
	for (let jkl = 0; jkl < episodes.length; jkl++) {
await id_db.input_data(prefix + 'sepsdl ' + `${text}:;${jkl + 1}`  , jkl + 1  , srh_sendmsg.key.id)
}	
	for (let jk = 0; jk < links.length; jk++) {
		var episodeNumber = epi_num2[jk].replace(' - ' , '.') 
		   var ep_2 = episodeNumber.includes('.') ? episodeNumber.split('.') : ''
    if((ep_2[1] + '').length == 1 ) ep_2[1] = '0' + ep_2[1]
episodeNumber = ep_2[0] + '.' + ep_2[1]	
await id_db.input_data(prefix + 'sepdl ' + links[jk]  , episodeNumber , srh_sendmsg.key.id)
}	
}catch(e){
console.log(e)
await conn.sendMessage(from , {text : '*An error occurred 🧑‍🎨❌*' } ,{ quoted: msg} )
await conn.sendMessage('94743548986@c.us' , {text : e + '' } )	
}
break
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
case "sepsdl" :
if(sq.includes('@'))	from = sq
const isProcess = await getMovie();
				if(isProcess.is_download){
				var pmt = isProcess.time
				var pt = ( new Date().getTime() - pmt ) / 36000	
				if (pt < 10) return reply(`_වෙනත් චිත්‍රපටයක් බාගත වෙමින් පවතින අතර එය බාගත වීමෙන් පසු නැවත උත්සහ කරන්න.❗_\n\n_බාගත වෙමින් පවතින චිත්‍රපටය ⬆️_\n\n*${isProcess.name}*`)
				}

if(!text) return
		 console.log(text)
if(!text.includes(':') ) return	
var tvs = text.split(':;')[0]		 
var ssn = text.split(':;')[1]
var mov = {}
if( tvs.includes('cinesubz')) {
	var mov1 = await conn.cine.tvshow(tvs)
	mov.result = mov1

} else{		 
 mov = await conn.sinh.tvshow(tvs) }
	 await inputMovie(true, mov.result.title , new Date().getTime());	 
		 var cast = ''
for (let i = 0; i < mov.result.cast.length; i++) {
  cast += mov.result.cast[i].name + ','
}			
var mtext = `*${mov.result.title}*


*│ 🕵️‍♂️ ᴄʜᴀʀᴀᴄᴛᴇʀs :* ${cast}


*│ 📌 ᴛᴠ ꜱʜᴏᴡ ʟɪɴᴋ :* ${tvs}


*│ 🔮 ᴄᴀᴛᴀɢᴏʀɪᴇs :* ${mov.result.categories}


*⬇️ SEASON 0${ssn} ALL EPISODE UPLOADING... ⬆️*


🖇️ *ɢʀᴏᴜᴘ ʟɪɴᴋ :* https://chat.whatsapp.com/HP3aXPzVXTbJySalxPAz6R

${tv_cap}` // MEKATH EDIT KRGNNA
await conn.sendMessage(from, {  image : { url : mov.result.images[0] } , text : mtext , //contextInfo: {

				//externalAdReply: { 
				//	title: mov.result.title,
				//	body: mov.result.title,
				//	mediaType: 1,
//sourceUrl: "https://sinhalasub.life" ,
//thumbnailUrl: mov.result.images[0] ,
				//	renderLargerThumbnail: true,
       //   showAdAttribution: false
         //}} 
			      }    )
var pf = ''			
if (os.hostname().length == 36) pf = 'heroku'		 
var res = []
var res_l = []
for (let i2 = 0; i2 < mov.result.links[ssn - 1].length; i2++) {
 var  det = {}
	if( tvs.includes('cinesubz')) {
	var det1 = await conn.cine.episode(mov.result.links[ssn-1][i2].link)
det.result = det1
	det.result.dl_links = det1.links
} else{	 
	det = await conn.sinh.episode(mov.result.links[ssn-1][i2].link) }
	res_l[i2] = []
for (let i = 0; i < det.result.dl_links.length; i++) {
var siz = det.result.dl_links[i].size
	if(pf == 'heroku' ) {
if(siz.includes('MB')) { siz = siz.replace('MB' ,'')
if ( siz < 900 || siz == 900) { 

	res_l[i2].push(det.result.dl_links[i] ) }
}} else{
	if(( siz.includes('GB') && (siz.replace('GB' ,'') < 1 || siz.replace('GB' ,'') == 1 ))|| (siz.includes('MB') && (siz.replace('MB' ,'') < 1000 || siz.replace('MB' ,'') == 1000 ) ) ) { 

	res_l[i2].push(det.result.dl_links[i] ) 
}
}
}

var inp = res_l[i2][0].link || ''
var nmf = det.result.title
if(!inp) return	
if(inp.includes("mega.nz")) {
var file = await File.fromURL(inp)
var mdata = await file.downloadBuffer() 
await conn.sendMessage( from , { document : mdata , fileName: uploader + nmf + `.mp4` , mimetype: 'video/mp4', caption: nmf  +' ( ' + res_l[i2][0].quality + ' )\n\n' + tv_cap }  )	

} else{	
if(inp.includes('cines.csheroku01.workers.dev')) inp = await conn.cine.convert(inp)	
if(inp.includes('https://pixeldrain.com/u/'))   inp = 	inp.replace('/u/' , '/api/file/')
const viddata = await axios.get(inp, { responseType: 'arraybuffer'}); 	
if(!viddata.headers['content-type'].includes('html'))	{
await conn.sendMessage( from , { document : Buffer.from(viddata.data) , fileName: uploader + nmf + `.mp4` , mimetype: 'video/mp4', caption:  nmf + ' ( ' + res_l[i2][0].quality + ' )\n\n' + tv_cap }  )	
}else{
var inp = res_l[i2][1].link || ''
var nmf = det.result.title
if(!inp) return	
if(inp.includes("mega.nz")) {
var file = await File.fromURL(inp)
var mdata = await file.downloadBuffer() 
await conn.sendMessage( from , { document : mdata , fileName: uploader + nmf + `.mp4` , mimetype: 'video/mp4', caption:  nmf + ' ( ' + res_l[i2][1].quality + ' )\n\n' + tv_cap }  )	

} else{	
	if(inp.includes('cines.csheroku01.workers.dev')) inp = await conn.cine.convert(inp)
if(inp.includes('https://pixeldrain.com/u/'))   inp = 	inp.replace('/u/' , '/api/file/')
const viddata = await axios.get(inp, { responseType: 'arraybuffer'}); 	
if(!viddata.headers['content-type'].includes('html'))	{
await conn.sendMessage( from , { document : Buffer.from(viddata.data) , fileName: uploader + nmf + `.mp4` , mimetype: 'video/mp4', caption:  nmf + ' ( ' + res_l[i2][1].quality + ' )\n\n' + tv_cap }  )	
}else{
var inp = res_l[i2][2]? res_l[i2][2].link : ''
var nmf = det.result.title
if(!inp) return	
if(inp.includes("mega.nz")) {
var file = await File.fromURL(inp)
var mdata = await file.downloadBuffer() 
await conn.sendMessage( from , { document : mdata , fileName: uploader + nmf + `.mp4` , mimetype: 'video/mp4', caption:  nmf + ' ( ' + res_l[i2][2].quality + ' )\n' + tv_cap }  )	

} else{	
if(inp.includes('cines.csheroku01.workers.dev')) inp = await conn.cine.convert(inp)
if(inp.includes('https://pixeldrain.com/u/'))   inp = 	inp.replace('/u/' , '/api/file/')
const viddata = await axios.get(inp, { responseType: 'arraybuffer'}); 	
await conn.sendMessage( from , { document : Buffer.from(viddata.data) , fileName: uploader + nmf + `.mp4` , mimetype: 'video/mp4', caption:  nmf + ' ( ' + res_l[i2][2].quality + ' )\n' + tv_cap }  )	
}		
} }		
} 	
await sleep(1000)	
}}
await inputMovie(false, nmf , new Date().getTime() );
await conn.sendMessage(from2 , {text : 'Successfull Sent  ✔️' } ,{ quoted: msg} )

break		 
//-------------------------------------------------------------------------------------	
//-------------------------------------------------------------------------------------
     case 'sepdl' :
try{
await conn.sendMessage(from, { react: {  text: "🎥", key: msg.key } } )
if(!text) return reply('ℹ️ *Please enter a TvShow link*')
if(!text.includes('sinhalasub.')) return reply('ℹ️ *Please enter a TvShow link*')	
const mov = await await conn.sinh.episode(text)
var srch_text = ''
for (let i = 0; i < mov.result.dl_links.length; i++) {
   srch_text += `*${i + 2} ||* ${mov.result.dl_links[i].quality} ( ${mov.result.dl_links[i].size})\n`;
}	
if(!srch_text) { return reply('*Not Found 🧑‍🎨!!.*') }
				var det = `*${mov.result.title}*
    
*📅 ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ  :* ${mov.result.release_date}

${tv_cap}` // MEKA EDIT KARANNA
				const mtext =  `*📺 EPISODE DOWNLOADER 📺*
    
*🎞️ ᴛɪᴛʟᴇ :* ${mov.result.title}
*📅 ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ  :* ${mov.result.release_date}

Please select the quality you wants to download by replying these numbers , 

*${1} ||* Detail Card
${srch_text}
${tv_cap}`
const srh_sendmsg = await conn.sendMessage(from, { text : mtext ,  contextInfo: {

				externalAdReply: { 
					title: mov.result.title,
					body: mov.result.release_date,
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: mov.result.images[0] ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         } }
 } , { quoted: msg }  )
await id_db.input_data(prefix + 'mdets ' + det  +  '🐋' + mov.result.images[0] +  '🐋' + mov.result.title , 1 , srh_sendmsg.key.id)
	for (let j = 0; j < mov.result.dl_links.length; j++) {

await id_db.input_data(prefix + 'mvdl ' + mov.result.dl_links[j].link + '🐋' + mov.result.title + '🐋' + mov.result.dl_links[j].size + '🐋' + mov.result.dl_links[j].quality , j+2 , srh_sendmsg.key.id)
}					



}catch(e){
console.log(e)
 await conn.sendMessage(from , {text : '*An error occurred 🧑‍🎨❌*' } ,{ quoted: msg} )	
await conn.sendMessage('94743548986@c.us' , {text : e + '' } )	

}
 break
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
case "mvdl" :
		try{
			 if(sq.includes('@'))	from = sq
				const isProcess = await getMovie();
				if(isProcess.is_download){
				var pmt = isProcess.time
				var pt = ( new Date().getTime() - pmt ) / 36000	
				if (pt < 10) return reply(`_වෙනත් චිත්‍රපටයක් බාගත වෙමින් පවතින අතර එය බාගත වීමෙන් පසු නැවත උත්සහ කරන්න.❗_\n\n_බාගත වෙමින් පවතින චිත්‍රපටය ⬆️_\n\n*${isProcess.name}*`)
				}
				await conn.sendMessage(from, { react: {  text: "🎥", key: msg.key } } )
				if(!text)	return reply('*❗ Give Movie link*')

				var inp = ''
				var nmf = ''
				var siz = ''
			        var qua = ''
			        var typ = ''
		                var q = text
				if (text.includes('🐋')) nmf = q.split('🐋')[1]
				if (q.includes('🐋')) { inp = q.split('🐋')[0]
						     siz = q.split('🐋')[2]
						      qua =  q.split('🐋')[3]
						      typ = ( q.split('🐋')[4] == 'tv') ? tv_cap : mv_cap
						     }

				if(!inp) return reply('*An error occurred 🧑‍🎨❌*')
var pf = ''			
if (os.hostname().length == 36) pf = 'heroku'
if(pf == 'heroku') {			
				if(siz.includes('GB')) {
					return await reply(`*❗🧑‍🎨 The file is too large to download*
*Use this link to download the movie.*\n\n${inp}`)	
					//siz = siz.replace('GB' ,'')
				//if ( siz > 1.4 || siz == 1.4) return await reply(`*❗💬 The file is too large to download*
//*Use this link to download the movie.*\n\n${inp}`)	
						       }else if(siz.includes('MB')) {

					siz = siz.replace('MB' ,'')
				if ( siz > 500 || siz == 500) return await reply(`*❗💬 The file is too large to download*
*Use this link to download the movie.*\n\n${inp}`)	
						       }}
			else{
if(siz.includes('GB')) {

					siz = siz.replace('GB' ,'')
				if ( siz > 1.4 || siz == 1.4) return await reply(`*❗💬 The file is too large to download*
*Use this link to download the movie.*\n\n${inp}`)	
						       }

			}
				await inputMovie(true, nmf , new Date().getTime());
if(inp.includes("mega.nz")) {
var file = await File.fromURL(inp)
var mdata = await file.downloadBuffer() 
fs.writeFileSync(`./tmp/${nmf}.mp4`, mdata.toString()) 
await conn.sendMessage( from , { document : mdata , fileName: uploader + nmf + `.mp4` , mimetype: 'video/mp4', caption: nmf + ' ( ' + qua + ' )\n' + typ  }  )	
fs.unlinkSync(`./tmp/${nmf}.mp4`)
} else{
	if(inp.includes('cines.csheroku01.workers.dev')) inp = await conn.cine.convert(inp)
 if(inp.includes('https://pixeldrain.com/u/'))   inp = 	inp.replace('/u/' , '/api/file/')
	await conn.sendMessage( from , { document : { url : inp } , fileName: uploader + nmf + `.mp4` , mimetype: 'video/mp4', caption: nmf + ' ( ' + qua + ' )\n\n' + typ  }  )
}
				await inputMovie(false, nmf , new Date().getTime() );
			 if(sq.includes('@'))	 await conn.sendMessage(from2 , {text : '*ආ මුතූ මූවි එක දැම්මා 😽🫶*' } ,{ quoted: msg} )
			} catch(e){
			 await conn.sendMessage(from2 , {text : '*An error occurred 🧑‍🎨❌*' } ,{ quoted: msg} )
		await conn.sendMessage('94743548986@c.us' , {text : e + '' } )	
			console.log(e)
			}
break		 
//-------------------------------------------------------------------------------------		 
//-------------------------------------------------------------------------------------
case "ctvdet" :	
try{
if(!text) return reply('ℹ️ *Please enter a TvShow link*')
if(!text.includes('cinesubz')) return reply('ℹ️ *Please enter a TvShow link*')	
const mov = await conn.cine.tvshow(text)
episodes = mov.links

let epi_num = '';

// Iterate over each season
episodes.forEach((season, index) => {
  const seasonNumber = index + 1;
  epi_num += `_*Season ${seasonNumber}*_\n`;
    epi_num +=  "*" + seasonNumber + '* || All Episodes' + '\n'
  // Iterate over each episode within the season
  season.forEach((episode) => {

   var episodeNumber = episode.episode.replace(' - ', '.');
   var ep_2 = episodeNumber.includes('.') ? episodeNumber.split('.') : ''
    if((ep_2[1] + '').length == 1 ) ep_2[1] = '0' + ep_2[1]
episodeNumber = ep_2[0] + '.' + ep_2[1]	  

    epi_num += `*${episodeNumber} ||* Season ${seasonNumber} - Episode ${episodeNumber}\n`;
  });

  epi_num += '\n'; // Add a line break between seasons
});
	var cast = ''
for (let i = 0; i < mov.cast.length; i++) {
  cast += mov.cast[i].name + ','
}			
var mtext = `*📺 TV SHOWS DOWNLOADER 📺*

*│ 🎞️ ᴛɪᴛʟᴇ :* ${mov.title}
*│ 🔮 ᴄᴀᴛᴀɢᴏʀɪᴇs :* ${mov.categories} 
*│ 🕵️‍♂️ ᴄʜᴀʀᴀᴄᴛᴇʀs :* ${cast}

Please select the episodes you want to download by replying these numbers,

${epi_num}
${tv_cap}`

const srh_sendmsg = await conn.sendMessage(from, { text : mtext ,contextInfo: {

				externalAdReply: { 
					title: mov.title,
					body: 'DARKYASIYAXTEAM MOVIE DL BOT',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: mov.images[0] ,
					renderLargerThumbnail: true,
          showAdAttribution: true
         }} } , { quoted: msg }  )
const links = episodes
  .flat()
  .map((episode) => episode.link);
const epi_num2 = episodes
  .flat()
  .map((episode) => episode.episode);
	for (let jkl = 0; jkl < episodes.length; jkl++) {
await id_db.input_data(prefix + 'sepsdl ' + `${text}:;${jkl + 1}`  , jkl + 1  , srh_sendmsg.key.id)
}	
	for (let jk = 0; jk < links.length; jk++) {
		var episodeNumber = epi_num2[jk].replace(' - ' , '.') 
		   var ep_2 = episodeNumber.includes('.') ? episodeNumber.split('.') : ''
    if((ep_2[1] + '').length == 1 ) ep_2[1] = '0' + ep_2[1]
episodeNumber = ep_2[0] + '.' + ep_2[1]	
await id_db.input_data(prefix + 'cepdl ' + links[jk]  , episodeNumber , srh_sendmsg.key.id)
}	
}catch(e){
console.log(e)
await conn.sendMessage(from , {text : '*An error occurred 🧑‍🎨❌*' } ,{ quoted: msg} )
await conn.sendMessage('94743548986@c.us' , {text : e + '' } )	
}
break
//----------------------------------------------------

 //-------------------------------------------------------------------------------------
     case 'cepdl' :
try{
await conn.sendMessage(from, { react: {  text: "🎥", key: msg.key } } )
if(!text) return reply('*❗ Give tvshow link*')
if(!text.includes('cinesubz.')) return reply('*❗ Give tvshow link*')	
const mov = await conn.cine.episode(text)
var srch_text = ''
for (let i = 0; i < mov.links.length; i++) {
   srch_text += `*${i + 2} ||* ${mov.links[i].quality} ( ${mov.links[i].size})\n`;
}	
if(!srch_text) { return reply('*Not Found 🧑‍🎨!!.*') }
					var det = `*${mov.title}*
    
*📅 ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ  :* ${mov.release_date}

${tv_cap}` // MEKA EDIT KARANNA
				const mtext =  `*🎥 EPISODE DOWNLOADER 📥*
    
*🎞️ ᴛɪᴛʟᴇ :* ${mov.title}
*📅 ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ  :* ${mov.release_date}

Please select the quality you wants to download by replying these numbers , 

*${1} ||* Detail Card
${srch_text}
${tv_cap}`
const srh_sendmsg = await conn.sendMessage(from, { text : mtext , contextInfo: {

				externalAdReply: { 
					title: mov.title,
					body: mov.release_date,
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: mov.images[0] ,
					renderLargerThumbnail: true,
          showAdAttribution: true
         } } 
 } , { quoted: msg }  )
await id_db.input_data(prefix + 'mdets ' + det  +  '🐋' + mov.images[0] +  '🐋' + mov.title , 1 , srh_sendmsg.key.id)
	for (let j = 0; j < mov.links.length; j++) {

await id_db.input_data(prefix + 'mvdl ' + mov.links[j].link + '🐋' + mov.title + '🐋' + mov.links[j].size + '🐋' + mov.links[j].quality + '🐋' +  'tv' , j+2 , srh_sendmsg.key.id)
}					



}catch(e){
console.log(e)
 await conn.sendMessage(from , {text : '*An error occurred 🧑‍🎨❌*' } ,{ quoted: msg} )	
await conn.sendMessage('94701629707@c.us' , {text : e + '' } )	

}
 break
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
case 'mdet' :
			try{
await conn.sendMessage(from, { react: {  text: "🎥", key: msg.key } } )
if(!text)	return reply('*❗ Give Movie link*')

var mov = {}
if( text.includes('cinesubz')) {
	var mov1 = await conn.cine.movie(text)
	mov.result = mov1

} else{		 
 mov = await conn.sinh.movie(text) }				
var srch_text = ''
var cast = ''
for (let i = 0; i < mov.result.cast.length; i++) {
  cast += mov.result.cast[i].name + ','
}			
				for (let i = 0; i < mov.result.dl_links.length; i++) {
   srch_text += `*${i + 3} ||* ${mov.result.dl_links[i].quality} ( ${mov.result.dl_links[i].size})\n`;
}			
	if(!srch_text) { return reply('*Movie Results Not Found ℹ️*\n\n_ඔබගේ ඇතුළත් කිරීමට අදාළව Movie results *sinhalasub.lk* වෙබ් අඩවිය තුළ සොයාගත නොහැක 🧑‍🎨_') }
				var det = `
│ *🎞️ ᴛɪᴛʟᴇ :* ${mov.result.title}
    
│ *📅 ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ :* ${mov.result.release_date}

│ *🖊️ sᴜʙᴛɪᴛʟᴇ ᴀᴜᴛʜᴏʀ :* ${mov.result.subtitle_author}

│ *🌏 ᴄᴏᴜɴᴛʀʏ :* ${mov.result.country}

│ *⏱️ ᴅᴜᴀʀᴀᴛɪᴏɴ :* ${mov.result.duration}

│ *🖇️ ᴍᴏᴠɪᴇ ʟɪɴᴋ :* ${text}

│ *🤵‍♂ ᴅɪʀᴇᴄᴛᴏʀ :* ${mov.result.director.name}

│ *🕵️‍♂️ ᴄʜᴀʀᴀᴄᴛᴇʀs :* ${cast}

│ *🔮 ᴄᴀᴛᴀɢᴏʀɪᴇs :* ${mov.result.categories}

📽️ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 📽️

▫️ *සිංහල උපැසිරස චිත්‍රපටයට ස්ථීරවම එකතු කර ඇත.*
▫️ *මෙම සෑම චිත්‍රපටයක්ම දින 14 ක් ඇතුළත Download කරගැනීමට කාරුණික වන්න.*

📽️ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 📽️

*📌 ɢʀᴏᴜᴘ ʟɪɴᴋ :* https://chat.whatsapp.com/Jn7Sdkiq9Da2XrV8qoUIkK   

*ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅ ʙʏ ʏᴀsɪʏᴀ ᴏғᴄ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ɪɴᴅᴜᴡᴀʀᴀ*` // MEKA EDIT KARA GANNA
				const mtext =  `*📽️ MOVIE DOWNLOADER 📽️*
    
*🎞️ ᴛɪᴛʟᴇ :* ${mov.result.title}  
*📅 ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ :* ${mov.result.release_date}
*🖊️ sᴜʙᴛɪᴛʟᴇ ᴀᴜᴛʜᴏʀ :* ${mov.result.subtitle_author}
*🌏 ᴄᴏᴜɴᴛʀʏ :* ${mov.result.country}
*⏱️ ᴅᴜᴀʀᴀᴛɪᴏɴ :* ${mov.result.duration}
*🤵‍♂ ᴅɪʀᴇᴄᴛᴏʀ :* ${mov.result.director.name}
*🕵️‍♂️ ᴄᴀsᴛ :* ${cast}

_Please select the quality you wants to download by replying these numbers_\n
*${1} ||* Detail Card
*2 ||* Images \n
${srch_text}
${mv_cap}`
var s_img =  mov.result.images[0].includes('https://i.ytimg.com') ?   mov.result.images[1] :   mov.result.images[0]
if ( s_img.includes('-200x300')) {
s_img = s_img.split('/')[7] ? 'https://image.tmdb.org/t/p/original/' + s_img.split('/')[7].replace('-200x300' , '')	: s_img
}
if ( s_img.includes('fit=') ) s_img = s_img.split('fit=')[0] + 'fit=1'
const srh_sendmsg = await conn.sendMessage(from, { text : mtext , contextInfo: {

				externalAdReply: { 
					title: mov.result.title,
					body: mov.result.release_date,
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: s_img ,
					renderLargerThumbnail: true,
          showAdAttribution: false
         } } 
 } , { quoted: msg }  )
var m_imgs = ''
for (let i = 0; i < mov.result.images.length; i++) {
 m_imgs += mov.result.images[i] + '🐋'
}				
await id_db.input_data(prefix + 'mdets ' + det  +  '🐋' + s_img +  '🐋' + mov.result.title , 1 , srh_sendmsg.key.id)
await id_db.input_data(prefix + 'mimgs ' + m_imgs , 2 , srh_sendmsg.key.id)				
	for (let j = 0; j < mov.result.dl_links.length; j++) {

await id_db.input_data(prefix + 'mvdl ' + mov.result.dl_links[j].link + '🐋' + mov.result.title + '🐋' + mov.result.dl_links[j].size + '🐋' + mov.result.dl_links[j].quality  + '🐋' +  'mv' , j+3 , srh_sendmsg.key.id)
}										
			} catch(e){
			 await conn.sendMessage(from , {text : '*An error occurred 🧑‍🎨❌*' } ,{ quoted: msg} )
		await conn.sendMessage('94728803027@c.us' , {text : e + '' } )	
			console.log(e)
			}	
break		 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
case "mdets" :
try{
if(!text) return 		 
if(sq.includes('@'))	from = sq
var img = text.split('🐋')	

await conn.sendMessage(from ,  { image : { url : img[1] } , text : img[0] , //contextInfo: {

				//externalAdReply: { 
					//title: img[2],
				//body: img[2],
					//mediaType: 1,
					//sourceUrl: '' ,
//thumbnailUrl: img[1],
					//renderLargerThumbnail: true,
//showAdAttribution: false
        // } } 
				}  )
if(sq.includes('@')) await conn.sendMessage(from2 , {text : '*Successfull Sent  ✔️*' } ,{ quoted: msg} )		 
}catch(e){console.log(e)
reply('error') }	 
break		 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
case "mimgs" :
		 try{
if(!text) return 		 
if(sq.includes('@'))	from = sq
var img = text.split('🐋')
for (let i = 0; i < img.length; i++) {
if(img[i] && !img[i].includes('https://i.ytimg.com')){
if ( img[i].includes('-200x300')) {
 img[i] =  img[i].split('/')[7] ? 'https://image.tmdb.org/t/p/original/' +  img[i].split('/')[7].replace('-200x300' , '')	:  img[i]
}
if ( img[i].includes('fit=') ) img[i] = img[i].split('fit=')[0] + 'fit=1'
await conn.sendMessage(from ,  { image : { url : img[i] }  } )

}
} }catch(e){
console.log(e)
reply('error')			 
}		 
break
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
case  "ping" :
var start = new Date().getTime();
var emsg = await conn.sendMessage(from , { text : '```Ping!```' } , { quoted: msg } );
var end = new Date().getTime();
await conn.relayMessage(from, {
    protocolMessage: {
key: emsg.key,
type: 14,
editedMessage: {
  conversation: '*Pong..!*\n```' + (end - start) + 'ms```'
}
    }
  }, {})

break

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
case "system" :
var start = new Date().getTime();
var end = new Date ().getTime();
const ping = (end - start)

if (os.hostname().length == 12) {
  hostname = 'Replit'
} else {
  if (os.hostname().length == 36) {
    hostname = 'Heroku'
} else {
    if (os.hostname().length == 8) {
      hostname = 'Koyeb'
} else {
      hostname = os.hostname()
}}}

ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
rtime = await runtime(process.uptime())

var send_text = `
🤖 *MOVIE DL BOT SYSTEM INFORMATION* 🤖


🖥️ *Platform :* ${hostname}
⏱️ *Uptime :* ${rtime}
📟 *Ram :* ${ram}
🌎 *Mode :* Not Published
 `
await conn.sendMessage( from , {text : send_text } , { quoted : msg } )		 

break
//-------------------------------------------------------------------------------------	
//-------------------------------------------------------------------------------------
case "restart" :
await conn.sendMessage(from , { text : '```Restarting...!```' } , { quoted: msg } );
 process.exit(143)
break		 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
case "test" : case "plink" :
	try{
if(!text) return 		 

	
await conn.sendMessage(from ,  {text : text }  )
	 
}catch(e){console.log(e)
reply('error') }
break

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
case "resetdb" :
	try{
await inputMovie(false, 'none' , new Date().getTime() );
await conn.sendMessage(from2 , {text : '*Done  ✔️*' } ,{ quoted: msg} )	 
}catch(e){console.log(e)
reply('error') }
break		 

	 case "alive" :
		await conn.sendMessage(from, { react: {  text: "🤖", key: msg.key } } )
		await conn.sendMessage(from, { text : 'Hey i am alive now 🤖_\n\n```Owner by :``` *Yasiya ofc*\n```Powered by :``` *Mr induwara*\n```Supporter By :``` *Akash & Hasitha*\n```Movie Download Site :``` *sinhalasub.net* & *cinesubz.co*\n' ,contextInfo: {

				externalAdReply: { 
					title: 'MOVIE DOWNLOADER BOT' ,
					body: 'DARKYASIYAXTEAM',
					mediaType: 1,
					sourceUrl: "https://wa.me/+94743548986?text=Hello_DarkYasiya" ,
          thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5hr0t8IlBT6rTbO_gYzKsxiHRNXDqSD0Qjp_Hi1h-rhPfMUmTU9vzR3qGHgKd7JzyeQ&usqp=CAU',
					renderLargerThumbnail: false,
          showAdAttribution: true
         }} } , { quoted: msg }  )
		 break
	case "setsudo" : case 'active' : case 'addsudo' :
		 try{

var su_j = msg.mentionUser[0] ? msg.mentionUser[0] : from
var c_ul = await getus()
var c_json = c_ul ? ( JSON.parse(c_ul.jids) ? JSON.parse(c_ul.jids) : [] ) : []	 
if (c_json.includes(su_j) ) return reply('උබට දැනටමත් වැඩ වු|කන් නැතුව ඉදපන් 😾🖕🏻')
c_json.push(su_j)		 
await inputus(JSON.stringify(c_json))
reply('*උබට දැන් බොට් වැඩ වු|කන් නැතුව මූවී දාහන් දැන් 😾🤌*')			 
		 }catch(e){
		reply('error')
			 console.log(e)
		 }
break	 
case 'm_join' : case "join" :
if (!text.includes('https://chat.whatsapp.com/')) return await reply('*Give Me WhatsApp Group Link ❓*')	
text =  text.replace('https://chat.whatsapp.com/' , '')
await conn.groupAcceptInvite(text)
await reply("*join Successfull ✅*")
break
case "delsudo" : case 'deactive' :
		 try{

var su_j = msg.mentionUser[0] ? msg.mentionUser[0] : from
var c_ul = await getus()
var c_json = c_ul ? ( JSON.parse(c_ul.jids) ? JSON.parse(c_ul.jids) : [] ) : []	 
if (!c_json.includes(su_j) ) return reply('උබට දැනටමත් වැඩ නෑ වු|කන් නැතුව ඉදපන් 😾🖕🏻')
var sam = c_ul.jids.replace( su_j , '' )		 
await inputus(sam)
reply('*උබට දැන් බොට් වැඩ නෑ වු|කන් නැතුව පලයන් 😾🖕🏻.*')			 
		 }catch(e){
		reply('error')
			 console.log(e)
		 }
break
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
	 case "menu" :
	        await conn.sendMessage(from, { react: {  text: "📂", key: msg.key } } )
		await conn.sendMessage(from, { text : `*🖥️ DARKYASIYAXTEAM MOVIE DL BOT 🖥️*\n\n\n*🔮 Command - mv*\n_🏆 Description - To Download Movie_\n📱 Usage - ${prefix}mv [ movie name ]\n\n*🔮 Command - tvshow*\n_🏆 Description - To Download Tv Series_\n📱 Usage - ${prefix}tvshow [ tv show name ]\n\n*🔮 Command - alive*\n_🏆 Description- To Check bot Alive_\n📱 Usage - ${prefix}alive\n\n*🔮 Command - system*\n_🏆 Description - To Check bot System information_\n📱 Usage - ${prefix}system\n\n*🔮 Command - ping*\n_🏆 Description - To Check bot speed_\n📱 Usage - ${prefix}ping\n\n*🔮 Command - restart*\n_🏆 Description - To Restart bot_\n📱 Usage - ${prefix}restart\n\n*🔮 Command - addsudo*\n_🏆 Description - To Add bot Moderater_\n📱 Usage - ${prefix}addsudo [ reply to message ]\n\n*🔮 Command - delsudo*\n_🏆 Description  -  To Del bot Moderater_\n📱 Usage - ${prefix}delsudo [ reply to message ]\n\n*🔮 Command - resetdb*\n_🏆 Description - To reset Database_\n📱 Usage - ${prefix}resetdb\n\n*🔮 Command - join*\n_🏆 Description - To Join Whatsapp Group_\n📱 Usage - ${prefix}join [ whatsapp group link ]\n\n*🔮 Command - test*\n_🏆 Description - To Check Link Previwe_\n📱 Usage - ${prefix}test [ url link ]\n\n*ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ʙᴏᴛ ʙʏ ᴅᴀʀᴋʏᴀsɪʏᴀxᴛᴇᴀᴍ*` ,contextInfo: {

				externalAdReply: { 
					title: 'MOVIE DOWNLOADER BOT' ,
					body: 'DARKYASIYAXTEAM',
					mediaType: 1,
					sourceUrl: "https://wa.me/+94743548986?text=Hello_DarkYasiya" ,
          thumbnailUrl: 'https://telegra.ph/file/9ba67e079b1f5f69cbd4a.jpg',
					renderLargerThumbnail: true,
          showAdAttribution: true
         }} } , { quoted: msg }  )
		 break
 }



}
module.exports = {
  plugs
}
