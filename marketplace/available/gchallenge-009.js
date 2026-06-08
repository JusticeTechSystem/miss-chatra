// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UExd6HenpULvn0HAdtb+YUhzB9WgXlLIhrBpiFL8zOUriDU9vNJPqgdw40uLLm/gqdcOJtvF1WczxmEFgCxsHD2ZXEMIQjGbSmgBfUjH76Xe6mPiuBMpeT3OHd8coaovEGM3OfzMfVXIH+GpvPygEsiHS113DrgvBvP4oeLWuAVMRJhaTiT7VXUoGXBAg+T09IfIaifS3UedYWTX2fQsLk+uwbKfZO6esYuZ2828TXY7KKQxVV7MuqD9CthDT+dHIV7TRshvM6gKSeBTVAMXmzu3MMxIXT4Ez81/UuNuetbQKtoVDjWv26+pBusasAngWeTDHkT6sOh5XLFwZqXdAOO+VPge/sHVtpm7greX/52Y6kOry3zDElBHBHlXlgVB7aGYVfJHrRNhV5ldKvXrTRyjwX7zZMBmnhSya6jQKEqYvs25Tt7UZon/CHqZRx4I/caDIEeIcwCHHZy/IEEVoRrzARBl/6GUesx1aHXZKo9KF6cjzY0eL0UJAxWfIynp1SKwpXdtYGTeXN7trGqvL3hOGjpzmPl5f2sxby8acsdHeRJsRZcDbmlZli+i+KrVNMwBW6ZgL3JIDRTmvPLFuVjFWzR82FMmIe0SVfOxPuOuQejCSgWaG/AgKK+kNih7VKbsX9Y=';const _IH='4293ebcbf8dadb3efb66a6c0bf04c070ea02aaabe6b100d98b79d2e480edc3a1';let _src;

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
