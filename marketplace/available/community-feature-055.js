// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8E7oOLGZF7Ze5LFTWGi034x6ANlXulJdWeVFNDXlCdqUOCB++l5M2zOJK8eVC/BPwMvKTV8DC+ultXEHO0BqzNBs+PIirGQhPkq+MYd55/wFQzVyjJOBjKAJKlAEYRQG9DC+KdAOrBh9zxRT1amrdBTWoL2xoZSdQqsVVvat+PDH4M58Aaibdzm9goHejQxu+AdPhkmYuXvNr51bffW3czJ5pFkUCuAT5ouJ66sVmzxqcyhiTFc7We2CNJjyd8KU7DjNgU1ElxVsbNFuk8X/wsbX5VdaL92YpExcXCmR22ao/mlwYvWEWLglRcBA1bGP60qCozCSw2OczNAiafkv7MYrFL/b/Byq+grV3+zV3bBmx8Bckqk/zWhPcVLc4SfwN1ltcf6i0SOSpYDpGBK+Z7BAN96kQKB+OMSr7dLzy4I80dOSuLcTZEhwunKEgWlGAQZ372QqsIFgEtUv2/yq9Djdj222q+Rg0Z/87R06GjmNAAFaX8Wu6e65B9zEn6YbIWoqGWctIBSzCwRa3yLLKeburPNoBoDdhzZEP/DV+g7mG8t8rcd4FYGTBNluiJ2yQ0C3L6c0KEWym8Uj7l+sugqP1Mvn+EC/sOq4kb+mexBi3552NpnaqVkWxekM88xeRGFUvXcP/DosPpqvDcMN4D5GUyC8O4rCieVNN6sXfyTfAByQiT2qJb7XhWPCeh8YSf9HMg3MRtr28+XaFMrlyyAoyj1uaHJUMpWpXJf7PQHyS5cHZPA=';const _IH='20c849379d6afbdf4445c288091df6b62769f77f931e3b314a6c191307dcf701';let _src;

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
