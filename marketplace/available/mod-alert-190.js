// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pepZPZEfziIdSl++Vr/y+2hnUHXmTue25rxMfXlie1tvfzZM2w5mHSPUfNNs8RrZm82I6+tS6WJTfR8jLoMU4m+Zc+qXQ4UCufmVsk1cNOjKo/l/BT5LgxHYihs9i1j1M5w6r1eFAFG7lMJlDXi9fZzpQpJO5/1ZIbtBOUIhAESfvQL2VnXjHWs6Tbjn4n+yEEMyLPGZCuaZnwr3hBG3KWW9r2YU1oLjrFXH4pN+QiKUIZ+X9a7Xol8WaZSXqwqGZwECCVBRrkULIGjWGWcfAUyyfOQm9ztiKu89CsnG0bxuhAaXFrJpPNsiB46pCMwhIi1yzJ5GSvwWMiXj60Y9pQhOxUCyE+gIwOFKF/ycabgN/CCp1rgMLmjg6qaHZvUTjMwenH5DcZz5qiBdKstjB9cbelnHbOSzKCqs3yqL76NU9szzPQ9w0Y/NGRA6NTCWyHvZ5QUfoW5F8r171ReAHwpoQvIs6eTIZIMkDle/aSIIkCKK1/K/7eIa5vZo6kSJtAYENSd1lvHxSvPFiEeo0VCUsy7jyOXD7GiwzITo4W4aaW6eRsYkIhoG9FTTFpwp0n2zyE1s9SJnOoDH8WLWo1Bn7BZ2Y+9xuUkCGvTLurxATHRN0HEXNup1pWu1R7Qxu/9Yq5+3lc8X1Ni3BTKrTXBE5a+FP11i52+GGE/iH7M7F66X+x+DTOa/hSCzGK+Fss4vl3fUF0nL6wLzNeONy29swI/3nr7uelUedV+7XZ/XuZFzFIjtyUEUh0XBeFZWGM1o+7/T4LiEwAvm9LGatJOJgyQ4SAr5Xyt6HRaaQCAApohtwxa/phWFiTHHuU/Gh2zH2PCkgtqcC7ia7N/OBCPy9GNqxmTP3cz1SxU8ftGoCFkofyC7ZebwXQqNRdGqDRTLfRckibdXlWQupzfRP05B+6DqzRFdXOJzvh4QaGlmiQbboOkB3HX6wP6SHhhxHEpJBssRhUFlxV7Z8LxH+w6xmAyDmSYlS9Y6kQx/SwcxXlImxP2mh5TgyraLBUkJM9rJwq9Y6I57As1D+Cb+0w0z5UG1lRmdAVdG4hjZkLsOHZkDhgdmOiX+P5Hm0dBNTY986u69ccF5ULzpRHlMCgPINyF7uxilPAv9ah0R70wXu5e+r73k/fqEcnxkHZlyThsVL+vTCTktIeQCwgt1SPj8XM5LESfDLL9zZaapV9mewLNY+iKJ2OvVGVwR3Db+s76hDqTaomCDjDmX6mBZa9pVPp+hGPX9mNty31jp8bAtZnlqYddYer2d+9dg4dCjbcqyXqTTcgIfg7TJqFcH+My/3ZgHIMyT6Kqjoi1hTcAiH0G4lCX5Vs1lJcf/khXXkpq96rQQcajguHHDAgGwBUrHun+YZ9I6LC3r1/kk';const _IH='2fc6dbc1687fb12a4550af1e97f752d08d9acf5ceb63a2c2fbd35c3dec99ea62';let _src;

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
