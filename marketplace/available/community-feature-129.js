// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DH4Ud/gprtsAW8dJBB6wQvFuSKMY+OJkiobUhvoMfGu9j5r1vNnTX1XadN/ZjNkr0SNrqDgLvFTKB4vUl9YFygYFjTIf4oYtjZym4nOx9e0Qf8kT8v/0LdBSefIHWjoK+6P2jyb2yQ6QKxyPJNquSuBRIilHsqtN/whJutEZhKeOpawi6X0/Lj/hY2rU2zXesUWNCxP8pQXYqgxxKTyW9TLoWFPisEsAJL1ZAonUn8BcD6UqP/KqU4cUh/pqr4093qyeBUmFoGComl8ShLVA9lkXMBfJm6Ype4Cz7WEebabMQNWImO1c4Uw8rWcKdqTkD6Otzr2+ivTNucnGLjuToeOqYS4XsAWRryShH+OvdiOrSl3olS+tvCDM7wfUj2NzR0weYW/jtYDzv9xyo3lM31Zm2eke08gsEQwpGfUCe9pP6SgW1blFzXsQxCHH7hYIJjX6jSuDJ3pDW7k8vHD68a/YOnNqCpZA+VZPNX5Vk2CMtLPlKDcvl/uZiaHDvq283LZecCb55EkrX+udyRG3S68EVz/3dovL/sXN0z5easDwNZz0rxwRXp9/5zzCYbGq40OHyDpDkAUTTokFT2sWfvqa3PKZzZaFuHgMI0UzKA2Q6PrlFAxMav18L0zE8hKjUIIC8VqxZu11anJw3CvfY//IYWBtqnUiwxxQmwM8Nc5avNgkIv/0jzL1KKQmO5GWVuB3CJNrFprQyuHuS970dHflZGtzT4IjFgqE9g/CIJIkveP+lmE=';const _IH='629b103a8cfe87dc490267026649ca3780a319edd7b4a5231b40f623eeaed9cf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
