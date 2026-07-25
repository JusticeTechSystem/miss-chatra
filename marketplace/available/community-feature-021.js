// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRahF58no4LD1erljWJwRE9zWHDGJoQ+sDGVmn74b2t+5jQXaMAchLypRg4bSbKQyI91aVV0VlWbWQ/qLWI1oIez6tBAVv4uthk097vTgG1g7KABFbkpz+x04ZDaM7sF5TccBnHiVTBLz++07UOtuCvIgbxlO8ktAQGpMk+1OA0H+SKxlOvhbRurevsmvkpTnqjYuDf8t4dIseB2GlNa7d61aVaDEiq2u+5jcDlnKSHU5icQulSoUtkPIjVP3W/CDEnm4PrJnsHVUn2oLqWpGg8o31q76ChAcoG516wn/B5OGRtcXvLcEaLJIKUyQwXjwIf/omsvPME/mS/kaV03W6knjsf7aVfcBzKdDSYyyWEp3/BmzwDsw4zvMZ+i59w5XBRr9Kepl2ehFz97cOzyNs8fi4RiyDrSnUtF44ErW8PL9D8LCFiMueEBZAwqppecJEBRuGj/hjplBgW1S3tcAFypUF6m8E5hRt/oFQWR8mHSehe/Z+gUtHfeG68j/b57bnQJGG0Oj9YC7sHRofVpJTBGEY0kyW75ZB8uANUgWN/1nChahwzooMqfDWJJ+JvRZPFGcFM0HjEZYYyY6PEHMwuOQCmtq9XLDBK9B3XqWGkKQpe8HSCmXCI0uaUqf7wXaGBG9/a8oNrFdt1pxfkgJrT7mm8PMf7JLW+LE+okSSB6rYjyp1Qx7CNz2L6O+0JT2G2dzlX2U17a+bcbrwmFstyNzXbQg==';const _IH='1d56a4613ec060c5f5ae1afbe77122b5c3822d05d7561ad3a1c99c46c54272f1';let _src;

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
