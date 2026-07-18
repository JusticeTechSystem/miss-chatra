// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQY5rD+ivrta1Mbssok//95Y0un9K47BWE4HuQMiT1Yt/3LCR+t4w0tYOxHUMIDn7p7JtROkiqTpWFinuzTQT+MuTla69yats8AV0l+JeS3dhjigTjp0J8zZlatiCOIdRjP5Ks8qLmrDLlraRJGIInCBs4tJfBxfs/jhwEYZWODRnOCoLA3js965byhUi/OFoDHJLuqf/AzB01c8VJicSDiJ6UdD1FdVolD6gVAP9ByTmqIix7SAxJlpW9DqgEp5O+dmusB0jBKA14HPov015c+pCbSexYuPe2z9qSXzBclx2xyFULf1qHhztVQ4Fb2k5eo3F52CZbh+6FdGgNeZN38iw4xggeWhkKQVKog4m9JITrf3aO2VeA0k9W8RBiMpDK7EdwgzWMqGG+NpDNacZ4ZxlOms6VlBrZl9VZTtbqQppFDw2NYnjGWEXCk0NBWhxHl4xChHwyj3m5Lwbi0eU/o7BWxmi9PFatpAis5oadX4pou+9WZWIqgXaTpwfb028PP9woFKRehHODHatJdhshGpPBRVq20KyJpU/bJZxPG9wwFhiQ4Z3Mxj56vuPc0nvw9v2vtpTlTh3bEuiU+AmTKljd7fZNalIdHVfIF9O2BsP18JGsLW4CrvqjU8DqvYpzzr3eGlpCmPnY3AAdYa2QMwFxup/LjBSJb3/lWH8Rjtw1vzTX70l/Tm877GsDxzTSd49A91dbb5DxQgnPv+BCdwbHtTbz8XGWdJvr5DzUuHiJTSL+3aA==';const _IH='0cb49d37ad5dbc20c9b9ad9adba46af02fe155a3d6477c31b3fed8e465c76102';let _src;

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
