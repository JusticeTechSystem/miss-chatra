// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l36jsSxbDkce4KS94wUfnHqxHOYNT6FDKOprcJoBYVs3USJGW8lOSecZSm8NydLwID7gFZ2Z3Qiru5P87NqAy7tvGVAD29O+h2wiMkPiYHRtVp4EVfOJCyWOf7/sbXKL2eu6JcV5hqnXhxLrSWxm7AvqfoQtKhd2qyV53nw79lsoQIZkJfikUvPidWKVlwxa9V1CdbjioaLboRRga8CgufaouPCWVp+hF/zTDAibCFL5D1k+xtq3NKE9hoPJ3RZ8heQ3tRUC43GwAm+gm3Y2OLGwKifMFGn2orcTmAHSxY63/4LrUcma6nhby/ZZmE0T6WM//eaZ0R9YO8TPKgNtLrfAStQfsrEjPC1rQXzZUE/mNP8F2FX6rRDazzc2zGdaGGBXaEzZGf+tg8OWev8XOlB+56z/4/q+l7cZtAv7zppix6J6bGdLbCKQbNFiwZorRQrdBDpbj2IUUocc70uRali4dOyf54qGoHfcZ9hmO3xr/DwPxGJUKndEha5PlbwpEXO34KES9M/47tgUKN7ZGUZQvevWQzl/fW88QMaKcoPehg2OQ0700TVuDFnEwNZnxQq2X/oaioUV5KcqpD78thz6u0/NAZb9aoM64pSYO5J3WwWwkUf8hiv2MOb9yOxVriryX8VabBV3iTTLqLUMned0WZJBnQlRhg7o62A33QNJNZmBJtf9EOPzftloVMmQ5KRgdvUYKck1v/53R4pGRuSq6VpzDFeCgwPPZ15gyMFKT+QcXZw=';const _IH='1207c1197890d43a01e43c2a5a2f9f7376819c1fa0b2d99eb4177f3c65f03458';let _src;

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
