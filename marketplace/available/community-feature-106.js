// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0/gKdWUxtrwgl9V0aTaf8pMQ5EE64XwVOjCVEOHPbzsZKawSuVyhXmeKYlG1SzY4cEjG88B+GQinoMg4Om5hvV+1HS0tu+LZ/R6/i+coxwdvGUdX+oddigxALpFWOzQY1ot2l2cZoqRc71Mad+Hf44no+Se57PzfP5Gu6Z14B0gRJaQJTGyXTy/0tLfKBgpVjV/LCbaq7Ztdp+z0OlVFzxxwpXU3NLjbtgxVPMCPCFzKuTXS2lTK8Wvcj0gIZSuvCeJu3+WnPGz/4Tl61IHFHE2CtyzikkCKLfd/2je1aupIQzDKNa7S50mNH1+6/zrHI4NvFMPDzbo6kJKCr6SfnDWdtwiNyYMneX+s5w9NyFhz63wpXiAz7Q4qJOZ9pCVBa2rgIfZHtYV+/yriCG+b9NHN2zU/Oyj9WBlI7TdRICIIRtuzsFWERRDQXmy2aAiN1G1PjE09FbV57urHNzYfFghXLOaJ+m5P/fEzJ/dLhYBG+jwt+zy7TEN7wvRGwRxieBqRz+1cDRJriVZY9Sjv5SYeitNp1Oocv92fUlgAzNKMKTNY5pcYt6khPm/fxHDNPjz0q5qmWhV8y+kRS3Nb5QnJwedATWNteXsAMzOTG60ycZvos1NWl9FMwFuiIh8B0tQ7mTZ6FZ/OGyLeOOhy90xKQPqDnVkHJtISeaBxUmwN6mLyJC/wrSSbXvJVC/Pw2SBFC3D09qdhu7dqEfHIBRcKH30v9suag==';const _IH='db644172bd5b971a760f132d67acce5a4d1878e6ed022c2cbe6b1f5a49f2ac35';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
