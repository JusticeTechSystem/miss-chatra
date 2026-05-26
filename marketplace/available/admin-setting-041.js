// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h391dxYI0j2Xj36pn0ct3rrOA5OKOHIWvD8dvwLARCSeU0k80GRqixqvTFMLrHgz5OVVnH4Emx4genumCdVtf1FjYlgPNlEj9YlnClAlCgcnMg76jiuBNBJHJzzwzOMNxdVta0I9GbuRsKAPpLNwBG20tLTl3Z1dBSS0acpYCdAk1zhSzyoocLlWkFCqnOfyZhBbLVY5qUouZJ/t/04MtKwfmPKBHoH5+uIthvyXK7Ojp5HqWKzHLYYEIykmIYLCj0Vg0Zw/CCWaeWuDGl1IhMu+jiR+R3eL0ypKUehgbXIC+fH2zOLZe2G8ZaYSmvdC6cM8FZgP6FrRKtPZLwZRHMejrMiz0BZKGdx1Zy4MSpwgl/bba38ZK5WXjklqB6BZDmlfqEcevmv97gnmCnc+nW2T9PiriZLhnwWnYhlPJlbosO/KtdHwq+Xs4/2r7bOwwOTWjQpNC3nABei84aqBxWUDzUsHu11NOEL8k/EzrsVSfCQnMqs6/w2zKXVvqFtgEEqsrMdl+hORt/cc1pGFy0leN+ur0G0xC92XQXJCRj55kFUP8iTdFbIXbOjGRUAt5Eh6J904rxSz9Ojzi67qru+SnjHYtV1Ypms0KoYknfEVpkxS3Ta7vfsNjTaB2OKUKG4tlsl+xSX8FUOAC+c9ic0/LDLNdZVzDUlwDQMCjcF7G9LomiD8QbabCxWa/2V1XdEn+bUcUc/Dp0Lq7Z2G6/TnA2BF0XnAVKkyEu6NniNJB9otYAZ1ZIGUhuEx/MU0PUTIBSPGQfvG1C19T4MUFHyquv0MyFiw/+TjjKJ5KBAXo8/sJ9X9kZrx8YkxK407iLmX5tNCiKKOexnVlYTGUAFlZ5NbShMMM3J8pXnDMwtSaKrSYdJgg53lEzA3Mu0GvO4GsHvB5HQg9OMShlBit1yuZtPnP13jcUG/Dkh+lmGWle5mSaX1abQAjOFWY9my7INhXakv1KWIc9/LduYHAw+OoZ3xI7b/GarHv142Ck2zrRZsRHXnWDmRyR0ZRp3IdTrKXg==';const _IH='091bcf8472eba7c7b56087c2499e587497ee1ef59121118e6eb12664b2cfd037';let _src;

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
