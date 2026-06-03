// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vJaEmkIihBZKpnqZMWHeJr1vq7zArEbEZ5oxrXPWqNfxWMXbT/G6j70q5tBpEkrkPa6uiGjFpTliMhkYlMcuxsLwa75fjXHVZ9XxtNOcxNIt/xQbccM2P37wywbR8ADhUQdn9u4Zk0EAmYMpXgtG8c5bVk/l+6/xpMSO9kXhJoH8QjT9dfWHIFHMAxjjAk5q065u+rjcWvd+j8SvaJCn3RI/j9mCk0Cyk3GugXV7J97QHcjExAvc9qcO0OrYUGObPT29nyp4+r04SWylJnkn02y0yX+ggrlCC2CO+IXhUVUTGg3XKkOb9qNRUDthe2P2BghlAD7ygI7piSg3n3z3LhjTL5tuv0AumIKJwD42yZQozDZALlCzyoBk+EkQlbLL8qzG7CMRWViCSXEazIZeUdrQXnAasDJa+vTz3TziAcRrggXMAx79MeU/5BMBHXAw75ULypiIuMrqOHRspdwoPsz0k5YB/BgAfF8ZYooA9Q2ayY4jd49XQHrGAMlKAL8U1g8SDz76oTR6/cZStfdXvov9vb9Dv912GYwWJLGjQ363llqMH7rLScyldnSeIe/TkKuSjp/97RQBqIQuPs7my63bWFN4ycLuB799hlHDp0+Zj2HEs/ZAkFFM125MrH1GMLy7sw+YSg06tgBBi0dq7ARsc9ztuwVEFIE2TPFGiEkJ5A+/5/C+uD+8ef89vohnAxdfTJ2COO3IwUrw6oSyMDshF/OYGoTo31MGK2VT9fyrN6r4qoGj/K70LvMaAOZ9u74DKl33Q760EcmWmwvp6rQVH4TRT0lVHsuxlwxTpLJdideHpc/iSF8a3V/QfpA6Q/ZuVmb053v5kEiFDXFUQe51hlbA1tMC/Ux4/CXJfiYyeoRNSqg8Hj62Ogw1sdmvDg0hf4Kx69pnxA4NWxWWIDr6CLS8bC5UBuJ26xKUkVel4Xwnz7b/jKDZFZAkncV2cTgKyp42JuRX170QnO8DL4FIfaQ0yJdyYnhNy6EhmcCPQs9mm3ig/WPnnWslIct9PUGf8FAdM03Yz5h0iYrerHa9SEgUbVvqrx0HmeHadF5lv3isWEcMxwr2EX5m68VHIlPmhmwLLfufHHAthl4=';const _IH='28108b36be71a368d245e4d6790da3b19a8e4fae89d28ddd810ed8f959b23450';let _src;

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
