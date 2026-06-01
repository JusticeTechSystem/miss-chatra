// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9IQnjp+gPldPZY2SFhjzKeuQUodxxPsihUkLY5ghlsUwOv4nAoJCUZlwi0vmNpOzSEaf6oztMlU+yRnEO7hzptDmkzysBTuwFiaqZZr9CB2UkCGamvvq0oKF6eouRJ4WmA3xoZclMeFC0wCyaP0p6xS9RFJEgxk3728JCytHHpg8iR/V7zT2S6y0tFlFo0jaEraoX2VaaGaauyvjchqrpfUpS5U2XvvYm4HkpJj8wzmJAKYwRlbkYrLnkz1G3sPTyiQXUXg4qolcWglXcpc0hI7SGqBfWVBN3c6KjbImvGIg10b12BN195SuALW3eEVtv0O4tS+qLZ11h3eS0SB51oYPcZU0kP357dus1WhFggI8FEjzw7OtKXfjvNjW8avef57NBxtoXMBdkIqZRJ01e46iF93Ey7HID+bNFHoR8m0uWH2RRdbCUREq8Qwa1H7GK5mRF3/XuzN5uItJ8yQvySMHoVCVSaYuXpf9LjhJjlu8yodlcIBrg==';const _IH='bb83117bff6f59f9d36259e58daf526e8ddd60885a714dbaf0d645cc0eb935f7';let _src;

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
