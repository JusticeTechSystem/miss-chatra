// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rVRcSfELeoYQk2qtBJULBz+BotfNHFhg8Yaby9hizd2vlS0Hm0+CGaCwmtHQwpmhBD4NMThcWvXVH8Q2ibWHheODewSHT60ekviUPozBERU5ptHlBDjmRNSOCMbi1HZU66CDA/2YZodXypgv3iScweFsW8P5nhRJAhSXlzkXcLwsj8Fh8eCKsNMQaYmp8HnVIuHGz3h5P1Tnaq3MB59DJjbalFHHTinQnuJ/s+0IAHoKnEv9zT5y3DkH5lKu6VKW6hK5BW0EQITkPal1JXt5dJElFiZ4dkIVxel/Tt+QaTejhzti2H0qYgmj01y7UZm4f3VLNrobVb5aarhE+NnjH39HIhoHZ2rzD2EVWSYu5HLaJRLyJUqBpQHFvtRvcP0jMC/uZhKV50xXKk185yIsCvmHLj8JiyItegrcUyDuWaiIZEP29P6k+b5F3myuJeeY6nPwt0Hh8YinrdsYQ/4XP7oXMbDQDY2o2MOkPMMQPhtTnT2JoQHvp03kupzp5V2OUgz9FZ9xQNVL/lPm5yH8iz4imXKQ8YV5LurltuUrTcXHclC9UAzwqsEsOJbclmKYDPDoS45KN8i/NAk4d2Y6F6LQqRcmozaf6vd12VGHJeZcMNxcgpJ1Y58KBk7ovYYxsBkdCCsXtDPxolI6MJ15D3svZyIn/i+82W/cH9OCGRUuQwCoxk62qEq12qDDl3izC6Lwl5dT6LdA02W20/jiPnRJlJJo9o7BGh41kPBExG2/tVMQbDzAvIxgcBRCVldzf0l3rrtROXVsGoU1VX0RYpFloNmkt+mph8q+g5RVgucA0Q3f4RzNPoAwEFMO+4s8zdcovJv5pdUgZu883JiiiTzXv5/rqVo4Zlq1z1UlS1wZcJjVowgs7NSRSbk0ba5YMAalGeEMo6kekQZgN5nFRFXOUf5fXqM++nQoJUYSMLpDWcIMbdSBJZ0/fLNMTP7gMBJrTkFTcfrCZESUVYoJ+t8bUvW7ToRIf+LvNcLhUyzTsolwdEIaPKGtimA1EjH+3+asRTpnbdxv/vVrQ44b6Vns';const _IH='9005a79f6cb8ba9589a6863b28a93956d7ec80bd0ac0031e940610b6504102b6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
