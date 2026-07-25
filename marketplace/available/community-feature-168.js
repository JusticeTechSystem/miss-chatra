// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsDQViAphbrvvXoieDabWfLZjdyS3gP3puetPqHvPVKK9D8ZEHW/f0lXnuzEeD8yRtEa15aXQOq/EYCH0Hb5g5ELkc1HLOeNtmfL9vD1OOXFICk2mhAz0zqvJDSN5OmVkqSIsAK2G+MPQsNVGlzR4+Y+ae6sHoQGahuczEtoLHhtlElem7tnCcBzwZK22rD0ohIMpxHvTVMGZ7SQBAhzBhSbYXfquspmU1LVoB2w5BOSmXTbP6TDZEmTYnxP4BhFUi+nilm3hGIFCQi7DaaEfjVpeM7gUsBKcyrzoA/+e3OxIi1+eS7alpmiKEZlaUhxb4GDdSfkZES06pgINoDy3XJHWCi7As35CVYQhOMasnTJB1OMNw/iasFGCrqeRqrrOHf2BN0b1WMt5bYZQlPUCw/2BpY9hqJz6YB8dlM3qxusQj5Ic0QciNtg0/HspNJt2WZeyODdIM/IXP7v4Ro0G9F8VH5w7ahCFXFAlbJ5d9FdCsNe7TZHGvMCPbUR/7yGBDyl5t5N+2zAAmdjZzQDii8Ad0VKR9nu4Wb4AsSYe9F8ugcxhgYPFbC6vvu9IPS1chLVa37yFd4E/BH3YdZqYVkCgNm2qOm26KlntYgrwhr3ag0F48k90HVouY1UsFRnzMR6anQnaL230TspuUQh2QO8Idavmnb+uusjY2BxoLxAs/K8iHwylgXYKmoSFlNYSDxwdVo50d5isUAIkqeStJBPYkgnaB0ebKZc6zkg==';const _IH='d8b55e7c06182c5bff82b7e856f1494bcdcce77122b217bb0c4f153ce79f5e2b';let _src;

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
