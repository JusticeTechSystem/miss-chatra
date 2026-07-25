// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOaQ62Ru0u5DozYkYnPohFHihOMEY/oC/vFBGSalUvXd9xjmBvbe99RSAO8bzQHgtpFDJrDwhr3shoPmJSaLJL8cK5bEkwT0Ih1HRaFzhyUYMmOKG/412q2709zx6UYiXWzwjEWssx/9GQNGPJTVT39hcjiJH0XBi+gqysWOxXTVZK9VAq1UCXFI3O1QRbbl8r75xJW/lo9YNNYBUsZvjBqR+KICHEdG1fFkQS5fzW/eXzzwS4ngOdAQNzgeTYorj7sSGBO5ZiZLB9Ab6DWt7Brwme7oh4AIEHFxv6NUnCQSLLMUA3222f/O5VZ5YQzpzTooOFnegj73RXuolKFBuzy166KQDsQM0/+aybcEDBBoXQWLrnonWSCvpJD2/cdHBlqZEz4C0gvuEgV8ASrqDHJoqABwZdHvzINBoODf1t3yDLHCtG+N82nzh0K4F48gZ39jdRNZxkDuSq6i4SvbfEkY1qi5ZGW8PJc/l/3exRoVpUMzmBX47IJW0m8ya+vvTUGCoVSSuLeiU7RfhjxX7LBA3eXe9YRIT6P6B8h3D2IyGM0mkTYgAG/XdHMMEAL+co2aWVgffoIDb0JB2nQD8ZNgejyqpT0/b78jZjNFf/W3wTfsmKXm8D+Tu2y+kaSvrLIRUSG+jyqlrBJo7gQd9Xiasc1yW4FUxtOE9mYfmPQbXBg43lMTF/lEp4E7HvejNK4wpBKdpGSyfp/bIJqcNx8O+gt4E/2phWaC51zOcSFRhCnxeVacXELBtQTD6cDPEdsBVJwASnGHW9pF9FXCkRajfhCZ63DXGIdcisNeegwAx1KiCUHq/OGy9054ZkHz6L1QLGyN6QhT0O3M5vvCnM8/B0daadZTvoAHHywiU9V3oFhqfFmwUEKu9rWDgZbr6DTelTSPxnCXr5DIpeh7syYinXpY5l4TQcs5addLqmOi/NUKxvMhdKDePSDH14uGsQMVpGToC74oEeSIqo7L3/4DRknoPLCUG6jJH7wcnKNQeXiWxKaqW1JTqYq6UcXQQjgpvBT18zbnDRVrRr+/N29oX83obYS/i1xIOEJrSJkmmZRNRyrzTX8eL7giHph7fyexLmR6ub0o+zlfvkqN6NR71q47uBk44Bpjxadtp+FdPlueSHyljGt7UZC36G8AqGZdctPKGYQzZkNzvKZlxsTZXgA8rlnyEo0l3UisP3yyO9SXQ9faUk4SnWUbnlE44WmDUBRboFdbQ=';const _IH='cfe5840e6395d8e2484acc4411cc03559e6d407c1834bba02c2cbecf2f45f344';let _src;

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
