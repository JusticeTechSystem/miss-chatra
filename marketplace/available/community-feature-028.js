// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQb6ew0jH3XnH9jIVLc31vjA6CtvUfXogCARnRBMreAes2P6ivjWfG310L1CqC4QJwdWNjcsYNxtdiAzPDzSxWaYvyyFkwOGTi/CkI734VJyT3NsVaTNoeJ+tgnX3LVGNTgtKNC+DvaRrYAEEsWW8NReQK2F0QPXwnytD8qsVi18Amce1nH9wbMyjPfhoJGuAG89HhFzRAy/lyecZBiWP9XdqXuHzm+96wBmYdsp616HQVlVNCC9mWd9pYV7Z4zM175u6YoObsXmTDvwVsZH4DTRH3EtBdt1kMK/jBb7H0GTFxrkvBZkVTtB3dCPlGzPvnA4PhP3am19so/E6lX/210TjkCYjb2RTUslY++QfFaEJ5XSvAR64uuY3iu7uEQd9Khc4CF77h7rLs7pAVjqVhmobvFMX7kBjbl1WIFgBoqa3HjaIe78HI5ASLL/LOCPvM0rIGXxtSwJJ5NUydXzL+wuG50hegJMun2g2QCV3mEo+BEyXGBCR55zQWLmoEQiQBhWyDoQCloWufaActcjOrZ1Ip2k+CFPKOJ46lix/b1pqeGWSGxxq7qwmkdKkeRm6HteydqVle+OLzGIFrg5snGBrYlqX4lo0VFZzJcRlmog2SJUXRC//Lfae2DQrQ5KU2U/wKg7tbw/bG4dSEX/N/6y7cAHrPMxIPQy2+eHgK90bz5aY5F6AcGI6s8Y9TgM8HXXNxPIzeGLU04NZxWhWfO6sAmAUmWYUx+';const _IH='6c9383f8784008eecd56ae31ee0ac9ea1aea622f983c88d6abc10e64d34d2e36';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
