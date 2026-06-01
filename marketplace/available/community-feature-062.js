// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3kdA5ViBttcOcLdFh19O68NhWE0lNOwb4hfNW16jQWs8jkIOWcw2BtEN2oM2po5YOWciWVVksg1IwZCeI2SscsruXKg+DytYTqSOnAdJKvGI7sir0pwLyO+W5mIyyy5w4gpgMQyfdx9qraGjP52srSy0Id69MlRfHNQXX+6kx9DV/+Ss+1GFpdryn1F3VHC7FM0tFFMp5kbyqrXQi0/1q8rHkL4rzFtc0Fdev3iNTDf/9+BPOPI/mYx4dSGXwotgmuc4Lku/cltYJXmP8zHOG78c3nF3BxGe5b2lNTgvZh3u2q2nIEoFzHcj8ba1YfPqQsiZNlkbv8K1Ejbn0eb9+Y6ndd7qKEGKHyWGlxaUcWku5l8VG4A3VvXP+vnfiAiIvxPd/EqJv0sK0Wq9mwDJeaQYSILBNuXADdfyURsfoDypJdXPXzrBJ1Q/PQPqPZEHBkTdXHYtJD5zO7y7BwAjI7Az2NxrM8uI5Hxz/WQG3X5feQaDg6W1wlILdMVwl8fCMmWjyYg5PKNiX7RzM16afaOEuC4OFbJV4fEy2ENmk6pIZ2bkTQ7lWF7Fwc0C33EHdvCcuOlhKPdbaK7EsvIbgu6iIN8B4V6lN982Yjaw4BUZ+WBHi6ojEBmzGV4+ZK+azwB1sVF1VlJOsiqH9mcc4OYH/3Y5GDJNEj1yHG6amvO893wa9sL/oSTWBbC9pE3l0hSaqsmuGp2wiS1rWE4X+s87FLvybCGbUKfyq3Ot4A=';const _IH='66e7f6904080bc8994878974b71d337f51cce72e9c61ea81a78ad3966c9158a3';let _src;

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
