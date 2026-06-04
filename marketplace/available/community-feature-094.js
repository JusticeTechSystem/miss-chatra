// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uS1UPpdsTyO0PwUT76CCgdoqPMqEboGu7H2rydCbzvljKhu74yGKl5Lh5WXMzSriPmLM4tFtzXnlGpCUyBGzHNArB97TIBdzo4mly+tWl37i2MeXcq7aMjrIKXPDZf6FfGkxrysK5ymwjpVICMy4begs91Rwxv56Zcrmy9YYt9f0JofP5UWxuSl6Ow2v343e8rREMHjHDRFRu51p6+6JyDW6KyTHhwLebr91rnM32druTydUd7tf2YRu4/tw4A4Fpg39NzdI9FTgxjm16k356JCnc+uHLl0P8JKw4ND8pllb0Qm9QGxFcdxcbXO+tVNHFTwR8tGUkKDkGEM2S1vqNDYKY/kJiJQ4ThrS3C6aPNHxv6R1sGBbwc6AbqhNNVVyqyiND1B3gEcMkFCIsqhRFB9vYipe+shXqWDQobIy5Hzfw8YWsEW803F0gYkatOhboPZA0p6uwU/+9nssTZD0z4bZGz7sDXZVhzJfvxAVEu5ZT9MkGFnR7dMLwZq613X6wmx9OCPoGuusogo1750GeJ5Uf9fT2QLNK/D+uf463hfEWkL2RFLmSPfgndQWj7ctwSqzU7mRCBV3xEKf/Zq7krYe4ClwUaZud1xSZAxcFzxRfqZc2lA4ZtaRHFubGN3br1Zq3AdI11OCa07GSpMbw7C29hydVvi7u5aYU0f1lMNpYqQKmUzzP+2lhwBKudECJqczSrXLEkE+myT1gsAEFMXGvxD2LXQl7N737OG1V9Ef0A==';const _IH='df6bf8cf541d5a38f2ec5b6dc2cb3ef1bde2397e0fe09c0f0059cba271dc8d6e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
