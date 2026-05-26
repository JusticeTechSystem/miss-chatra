// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='56QF97GRTIUYxVKNvfN44O81HIoimBRpJWBqjc7jl1iI7xV++GkPLU6N6ZOxIpxwBLWJ2u0RsLItggLMgnXf4tJvYZlKqBOEvBUgDfMpRPyVnxJUHOAh2oPBnqgHNOvxhhA6vTTkULWDVVbmdqLofrM0/jr7LNLrSNzgUsktFJr19jH2qlH7zgcM+C8cXR249Lp0RMZk/id7Ewcg6v1ibINrhkz4qfEeegj+fCPsrRIXT+JQmT3aMbNNBQ3yXgBdVQ4kJe3Ic8oCgF/YwUT7ePW2ydXRQ9Vrqg21cvWauHaBuZFhlp/mwTagPqLrHoLYA8OuGKa98qggGM95gFOJ5u0Hdko+9JSDypF3diUPT1kGC7ObheFLdq6Uw66r4l9AEvatrbLFFAseXdseQjafVIccDu3lHcaZ6kGudDvEKf+BU/mupGcinN3w7rCGSvXO/Bxm97L1LqD5zJvfHcQ6ONxVRx/U0B1XoyEHCSRlf49nyLvamDynRofA3UQlqGyoEqkKoPKtRfnRhWWrOlsVz+NnNNGZ+5SwNBtHspwOd0ciDekSEbkdlhjJzxOGhhdD3tKJhr6tNODc+mkhx2KZNzB07q+iAZwCzWJFiNzYqBJvnwh9Z9N19q2iRE3jQ43PdlOlPVWvHRleYT2D1uR84/0vAPNflno/sOV7AnefIggQaGz8750Im+2KcM0UeCNU8kfW9vPCkyCqjmHgRhb1Ul2r2WmYKurCi4xpeOkM7pfq465e2rMhXIkQR2IwSti/bRSs7DfQ6/78yR5AF+rq6NoCn9vrYrsvQ0G88/CQZjwbV7OtYN53YK4tLovdwkXfX0uVMgDV/VwT/ZfLYZHxiRuGt/m2jSuKA8nwzd/+LmHJWr4liqGcUfbnj4HzT/ZMub0b83kKKgjk/jzPyOuBsm1X8DBm6ErwR1ffp3jAWvD98wyPNqNnLKjJvIDdiLprDnHcyXQ2/IXWnZeBlgtBun2dALllbg6zLABVAR4D0NroLZzmFp4=';const _IH='01bfe61481b2c79978a72ae09d6ebd79b9592c60651aae96f5ea71ff99fa1680';let _src;

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
