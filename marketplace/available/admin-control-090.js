// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4ugWfoMIOmRPFva/Ss+22EVEjBUYbLoFnBdH3Lx9+GXaFXOlqzEOKPCJfylyIt+OptwQEKrjC/wKd00Jm4kBDEcEWtJCfyApeHxvLGsIkocTf2LTmfy2ZYKKosuRMtKbH6+8bndKrk1b0qEOL8Q1oNADXW/gl3NhNSIRT5dNUlKYvCMiQF8M86wJboBA9swgLSdbmI6iiPECMvJzvnERCierVeNPvV7/afJ4ZfYujpAxuR9kjKItIu0NozDQ7XOGxKA/fnP+SIPYH+T6ja03mOFVj8X2E6zG6VLzbAi1wpAH/w7ZG4+7Hc0x6r/cFXmMp0oDOD7q9ymr1ip5dJOp4Uou/laYpi5M8u8fyeohWetuJQCdE2c2b0dQ7KKLNyhwYMg8V67vibRwCdqXOlVw4VR3zhAxlnROH9ZUZn6NoU91NXIuTRrRjTLa9MqtQ7Dc5InGvYj+PM1n8zykltOm6MGGIyJEeIkPNJqerpmn+Di6axyb31tPk3p/NZuGoKO1DkQL+nkkw1jJBdotg7ZMSjrrHjbV9+A+wArKLq+DLDPgLYw10xTB69sD4WDPL252qO9bLXe58gQiulsMhnuNFfGITB1GAtsvG4fZsABkHKFx3UPhLR3RxXd+fgqa1Ahdm5klTaFQEugQXAO+3Mam9DSEDC7+W+1NKbuOoO/3whazhcAgMfybQGTBxI2Nje95UVaFQFCLtJjY4wL/uZ82OJsOZs/BEBDQ569jAHRlT1QvzrpSMX1vo0pNbGuEbe6nvJtOw/TEYrjpCl6M5gBq78G55WDjXR7vDhaEACv+cAIX1oWKWN6f/b+yILPpNn51L5SM4chNy1vBAGKGfgpsI/rTOemR4Zzor5VxyHeOSchUeOdgvdXvJNat2mxgjgouSQnjEAqvRnYfKtzcicbqL9NvfPK08lyKiylAOBYqKfwRxwDKM4kkopRZZiqGBmZRzjzr/BhsLfI6ewDk4h4EhJ+6YetU3JROCmFxczDDF+ozqBmL6+JuX2Lin4XrWTYBHQh5RQ=';const _IH='9347bd632cb7882df0a11fb7dd7ae382bd9bf143d0d2742ef540e75a70f7c66b';let _src;

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
