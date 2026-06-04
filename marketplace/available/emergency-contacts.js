// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ns7xfOMLMwQSza3yNgU9HdOWb28ai4hXWwMkts9TmQ8Q/H1jRvBMrV9ta+0HqD90h2o1gl4Lzq0NVpFApDHszXuk3XMjgKOkCzk6uEdX03vEICVh6o4/Zv/IEu/0tYHp3+J3tXdr+kmsrtBpmMB6lEqNeBb/sF85K3qZyvDOBbkeqR5Jh4kp0THCPGZwNBX/Ec5aHI5ngR3E+619Da5iegYyQpygKuKA7xPvHlA2igEC+ERi1Sp8zIc+Xtl573WuetDxEnta8j8hLCOFao/6G9UYAbAvRlH+pofPJSKV6fRUpahclKvk21D0GthM5LaRQtRZZpkY5dbr4V0ObmE0jdcFWVW1vz4r03dI5TYQnxjSlQZ7gio+wksZHV7Blvi6FXMO7w+dqIPn1KpOdXzcU4kba4DbDkaVZp85pr81oZLLBc6BPl76CGU4GB7O22pBPHu7oQ+CSwArSocCa4AQwur/vjmh/+v6A3+LxcDW0h53I2McTNxKim6PZsR7zyE7BVs9XBk8ROa90w/hWphM2LPu0Huqz7+7DkkVjnSCwtDiNzptQ8BeOGoPl0lfGtaVHKkoA4hkoe1t6wQZjxaHAFIFZV9c8UMvjocbSfKo5vyz';const _IH='28f72937e2c608eb428a90197ec50ab8bc37adaf56e316d5e5761b065a80b94b';let _src;

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
