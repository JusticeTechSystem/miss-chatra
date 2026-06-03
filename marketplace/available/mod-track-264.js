// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ep40WWU67em2nx7Q5NTTOZ5mIq7pe4Zej4cPxFDe+ANAqRLZqAlBehURA498C/CNTG83sMk6nEbF7MPi0aQ8N2hYWD7Fz6ZyX2SxpOgJeebL7IC8BU1taGVelLCBsATIg7ICGeCM6woFdv2WgoPgfDukUZLNkwwKtNXDkxDOflGdwQzKBo4MiExyojv8Rw31Wpy3Yk30CgxJvo4I3gax0WNsI7Q10Ryq7qNThC+M45bPX3HcaHs+fV28N0UOleci+e1keRA4s52bNs5OFYr3vXGcUSbeGR61ryGyjh0tdZC1qYLtqSb+OrNU7VC2sydCCudcdW2VVYvxmsZV4kbzFZTwZX4oj4e2GBlnZGindOTHNwOgByItXjut8COnohyI6zgFYYYe6l1d3YCaSWmx07WhRqHyDChHfDuf3k49mNHoFP109G72tO0H6W8EYz3QGBbk3ENGq2hEXbTlPkdjlct7aa8kDCW6EasQHDuPGazRYnG/7h3QqcrW9Ysp+ALenPfRZ8F6/1LkYiNpyoBvr/Gapny63WxR9f2PosPpAgHMVBZNcyWUkITlqqCm7fT2+wBoHP1zLlhvKQZ0Nuw/Ip3+ERUtPU9W4+LDzECeUx2dYMEeUzYSE+72YpDVLuC65FWplpU143lD6yOAj89eGoDYgcOWVtVgh9/K2KCoZPLGvioNRPdteM0w6Ma9MZcEIQ0NiTiUMYkwmlOPT2OTQ5bmEMKl1sLmQh0bD6OpQk//7/bnbC2nvykiEdnEa8/stj7XxzS5aJCNvSeeSEretzOma53uwwvNnQbBgdV6pLDEnaVEtJm0zfZgCx5vHILHh0A+Yqh6uFQu10ISeLnlc3CeXSMVq9ZT+27MOrQw0t1dloyIxUNI4HPVgkz9JNV9J3ik2uO8K+8CuOqs9dtzZzBM6PhJI8uAFln8l/g4p8zXAv/vxq4pjLBQ7zyFjxqcw7y8GB/4TMi3J+8a7th1ByCH7bBNo8nTJHxf4zTND4cFZa9XD/pcY5hWPEGFJY77utYrEeuLjuIQUkVGM/UIphMAhhIok4t5W3cnV9/HxHBEL/vDOMfEdGd65fGlWd9kJN82tB3OkhQxlgAejCbMpBfNXv/Ym5ahHMvNzgnJBaZTmVZ6vUnJ4tfjRiKD+cdIIF29uyVebjS7N6wwqMb/4OW4A4NKayYx9Xfvk3gS7FQpiJKe7ZVzAF89qs6n822El8k3blpTWl2Oi+D9ODHze9AgKaktdsoTgTQmsyTD04lRDz7jjPkkftwg5rfeiFZg0CuSXqfC2UPGOq+NgpEPr7R810JTpxoYvopx5cLP2IwwLKHJKzC5qv89OeKnsnQcYK7J4eoAIgAK4YzH/4Z6waohYgDviE5uSYEBsayw';const _IH='bd28a0e54651faa38092bb99ba53133f82ca4a8906a96da36a9358ba2fbc9371';let _src;

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
