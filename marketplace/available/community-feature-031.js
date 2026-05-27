// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='faSN85wiylFxuIKG8s4NM1uxls5MFWMOyT/yl2fR777vmwNS9jzUv/1jK9LRxMV/liF5G81Cy9qnNiv0J5SB/pbhGH9NUuEZXkPFadu9bKdCt8Zef6ncrXxMRa0rMvk59LpUmgrxzc9kIqb2xO9Vhly7JiOPH0Aosn5IBAkbuw0v9TKV5N6PxD3d8NXqsg9+WtkQdW/L1E+hko1j7b4XAY0vH8qN5SQdlOOMu0b8ZJeE2uP8ulhxTimLBZzZ0HkK76F5dYWfJPP6VkMjp8OorXO+p53m5kLyhJhPn1pACn598K09vV6hJoSu2sszTbElONez8x1lG4L3nqiVlp4FCoS3vo62LdnU3e2C6UJzuvUAoNKiboGMrCgm0uRC7nt72J2ZGCfCPOy+pTzQKglx21q44S0p50enFNGj0Rja0fVKdww74sw1tegyDW4szLQkBh5DU8VC5TaLOkJMIuzpoZIdTTHAGf0jOY6Q6Ip/fsl8SNHrByngV4RbYreUZYpmfmxOupJp+KpREkDpNZEGJEDrC2ZtCulPSxlyAYfkACtCsTM4h7p/vCkdU2yekcUnnjs3a+KjxJ9ptzpJsNQGH53wI1Wh7psWDHit904KlHsxHFMY5KUA4uGqfwHv6C2/wFKHxZMzzkYnefqTPrODMLaJfVLD8Oy+KY6mCkrtfE0l5peFZohVuqbf314ckEOIPYglL8K680GkEN7FoBu66nhyyiM=';const _IH='a066bad5f1206b791d1681f6dbd6e5ae30ccbe3e1a239cbf0c3551efc6521485';let _src;

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
