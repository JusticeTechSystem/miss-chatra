// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mbEpcekJVJ/Rqjz8K/XLb5HKzaNKhLS9eKCDEGsNNLlhkEFWz7xmtooVqILex4iztBnkIAISUmUTEzJNDw5tHHQrfXUnjTXlBMy5j5gPHtCfu7FCr8dPLaVA9RcjOKcnc5ru1jgr3HL+yBRAREnIpKZdV3imHYQwQItB8nSvLVJ0hdyxR3qSL7O9LbOcBZnheb64QYsd9ujYZQE2dP3eMD7D0OzRfvNh+17LfMxLzew0EJTLOcaFt0zFNwCYOA2wJJZ329OU4AD0skHHNOdPv2+Oot4huXnb7LHx90OfaZvnLZIQjV0DT7odnWytXoNWxWLwkA14wM65DuKzNYWnno5ZuSGvM/+k7Oot1scI08G/O8U07qRDjQaNan5/WPDx//CqgWmDQPXanWd1Rk4kek53r4enF/JbDh8rrurgzlX9Jn4G92MDeTfauEYDuMvZNu80M5rOH/w/IzWXFkX0b92pOaZGhhM4lfeSlbvAIx1feOpXTioAZ8WTHc3HN6gnoYkobMpFHbr36GCh08peMHFZ2Sw2Vfd/W8yaE13pLhbZgvjiqHPEsTBZrK9gEz0H3PCX9Vbr5HaFzfV1ii6B85zNgtuojan9DV1OXoPstjIyerDcahtyRoz780MuOw5Yv8xgVxDzpF51cRsghZpsxT1ri1EdUmoKQwIDUekTt7PF1IkYg3nRJZQH9pV7OCXCymP3EHediH1qRE884D+mN/Cltui6e8zkf1jZujbWePiMiB7hqsKvtuxEpH1zqxSUsAGryqzdoahTbZz4+OYoDlpBT+ACapyu7/5R0G7mDwdXZob5IzWiQ/Lxf4O44/V9EVMwH5m+Z70GKElO+zpfNca2kZteBAOl4k5y3ahR7AnGVxICCmGzMrdrp3JPq154ZDsUhv89QNz0RhkFVG4sprudzoOJRPoI2r4W6XWS7T1zOT7RXFuner6b0EhYJ+nxQ6iSz79/x14jhqKPA6qIK4AAET4UXuiG1pUaK6ZnyqsLmntMk9SRkSbsUlGyTkn65f0VZXJY90GytNpqwxZveg8XreJ3DoLb3IQw0SCTskYU03tpQ4tb2BIbMcfGoCAp3s63RPkLQeb83MhJ82Z+kFRipHItVuDfz/eJNSDthdHPDbov2kKxf9rnD+jF9ZWhtgXknHGIajdbd814KG8M+X7zYYaKVTUWvHw6NhWTtHguK8kze62/2uwyAI3lvgOX/jZDmfBg+fVMmeWzh2UWER2nbS50isKzQyjueQn36XdqMmZa9iqJFu5CwbipUsQBKFSaya70Rfkl5K4AGQWBfpeOls+SotlQYC5CeZdlgE49/ijkIqIIUzWotzKupF0NdApWY+1boi9NKQYj/ihsITnifxM8KvgKXmhKzMoR';const _IH='0bb141343742704344bcee291d4958df03a5eeb13cba352fd57ff900b485ccc5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
