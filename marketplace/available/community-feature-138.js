// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ceh46pZne7+c05dLjkK3ZQxIZtTc0aM24UQzG1CqU29PTQDYOMODbe0UQZb+nDMKH1LgOCrHV31Bwmb89H/HN1ATbIepDnqBDVuQmUVrdjgfIg1p1xouv4UzRI3RPucZXwNNqvO1X43ppDeS8IDtW0Xd9ldZwleedWSOFTBTqMBk016xnJv9yjZ8W8cIEiSuQGIZnAMK8tv+iXwzFrE4ZPqq8nQ3YUpBZHXDxCZvn4FKI+2DleFjJ89VWOF+RP4mkTMccveRyl6ImjpP2VUTdnFJmR8aDY266YwDoTyRILsqK5DhwNWb/VNLjIUaPOpMBxkkcieFofFRH2N1pMfoumihzncWV3ytpFRF2kj6M+IJwPqYuJqkWYNF5RjxZI8zRmWr0AaZo3lHa8gtQi9eZPP1QWrdXvhkNYP744b7K/gWIO1QGSzSlNMuzD+LzmcaJj9Eu47KTrh1B4XWd4PAsY8UJRHotiRIhCKI6LSJfQUtRcDivYBWAc0llMh/8/ONxwDQk3iee3nJJyCj6IYLmy0SwH2LrUax31ehhmh2lsngAZSxRP3IKjWW+5jp7/BSK5vLVBrxuyP9kfkDJukEImpPMRkocMrBJ8zYaVcJciAYegkvcjaO+n/lAj0Z+ZwcQh5wE51SOXV7EsVUMgPvzsoX3kZsMiE+uylx+7wsZwl4eai/PldXZTWdm0BbdYCEd8T9whR1x6X7vSaoW/vDFv6+MEYQ0Qdi7pFKdFg=';const _IH='1ca66bf7e65cf002579733f2fe8a09ecfa88065ae9a447e8bac29d7360295a4d';let _src;

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
