// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gQpNieDg+uphlPeT0wZcAzLfHV0+nt/xULe7jxcXz1EX3yy8lY4Wz0K16N6vFn9rGE38axScTgXG2F81j212J15tUEtsT5HJfiP5qMeB6HQP70+KRZIPkr2mRkpv/304aDTc90QyJnZYDz9OXIv+Nxyqc2dzofBQuyQMUMXo15UdIA6vIgpsMwh2pe8zxVP+wzCKlpfxrwRSls7TLbzApHuU+XXUuCBB7xb39kTSm5FO3c5mYN2dnLhk9aPdYv9Ef8sn9vBdqwFg/nuPW7M4Fx1kUMPJ9gyEIqe8LYsmQJs07ILVlJ26ApE2XsYXHZx1fEBdqYZx1JNM5tu8rHcF0a6XHsmzMIOhRHHnnXPP9OSYtcWsYd5+xe/qb9oS4/wvNAMA6QW7QWzv0MgWSU2mlK2Y2Z0gKBXP+ZAPk+jJSUnwyKtacnx3b+cuuqCvhpSEUzNWSmQXHxLvjvuD19tsc6QhuwvnObFU5nygbQ2DRZlGdtdvctXK2U5slOdwgDAL1b2YyyEMYkyAyWXuG+1ERisISKnhPpmFaFMhLu68LTG+Q6JI4euSaT1tcew9WuPIZp3pM+BtfKYxvoXkbByPYA/srOBfITOxViND2ROPVSezvHyiVS1otoZhrve2vDdI25+XNqsAZeNaHm8eKGyqCWV11RH5zIuAiZR9/iAv8QobazaPMnd0ecKexTbylYzvlIS4JV0kqbmgY0pyNhnoDex+0j4Jkq2GZFzLX1ooBtyAPYPQ9tLiXzV+Q9WtKQAxP/HVUJExd8y5vWqYN5VW6OajED2SJttyBM856UuhD8GhLWcPG0dcJscancwsTrIoUJ6HNtad7FtlZ/4TTRZqFH8LRUHzL4yoH7nL7LFrs9P4D29sY0+2twBcACuZ4a6tqx3egBbRrY4fdq2XCVwNh1O/7CEMpU4k2fHvqHnqNw3FwIH0UcD5tBkw8yAhDYvNXywAPKOrtOf6Qv30z3cD1dxovp15ELy0Ks8znxiuoQ4QbnWZOrubsYcVWZvjxeYaS9Ucz2mhPMiCEJwF4mcnB1+cn0RHq1gz5YoYn2G0UVCS2DNbFb57nHGHSt+K7UA0CQuG4gKctLJjWDHj57eii+VqO/VpSsJ4qwG7dpn9R4DJE7UrMd/MDaN8TkKE4SVfZn5Rr5pDKRJIRTWkl+36MO6Ykq7zuNXuuD+Xph4QplqKciEJIXibPA/iuYp3CuwyUE+VLRAu/KFQgAQA4foMJ1jsr5MvCeX8mOhVygfa0bM+0CVZF08cQHE3dPpmaxHjWognaYVwKPekmIQ5KpHDGLS9FtReJ7guU5sfluzAIDc+62xMUzYKQyW7Yx27xxgwKVBUhXxd5aYO3PyAPHJ0A/C8jDxos6a3hpNORKFEFHkNddoSJmCv5w==';const _IH='fcd3f67a8525cb1f7447e5a400faed9346e7ebf4aacc6669ff5d71edf2ad987c';let _src;

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
