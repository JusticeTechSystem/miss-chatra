// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHcsh8VLwKZx4vSC9CVhNXxbL1s82QLdvT8HmTBxllqRBjCD32RRbp3JLy+dECyTaPIbryaVrlhMzPyoWwqfQP+qiOo6XJ/rob8VtVMU1G+2JzBLVI4a79Qb0odP4ntOnvjW3dViNCFzbVNW8Z4FC11jaf6AwGFwD3CqZWk6586dIxxZOl0LXDba1+zuP5Imx7CGJerUJO/QAoCN3c0uJLWe/Fl/t54J3n7wWkBflMvI+D7WdoMsnFiIyBltHcMtyc3zgatbu2cvcyWSTYaC6GkWZKlrE0272k+nqInd9VG7LKn3ni6HE4f7E7n5B9Pfqk0ScWkf+xSF8QPSnOYU/Xxg8U5+4QdaCMXYdXXI0Ojcy8yEGEj6ost0dztxENTgp5AK3iPoaG8w+BGwgnRAmdEZsDfelTWMR+nx2HydWJ1m4BolXneZClWPGKOIlIlfJNsgRn4hLaKRnvi4NUo9ap9opi/+eRfyV2pdKfb6vBalAQmhyKU7fmy235y2HM2LD9whjJKSGZ/GSxI7b5yAXXjx8bLciXBLneT5mwTngSvfORsMDAxqHzvWGEBUEz5tl2vmvtRjXd94ZPADvqr7dOswxFUjXjJxMnIs165EBcGxCrevi+Y85pyhfFH5izPG/UAm/VCpHNk1hC6knAVJkv/aH7uYDlpzFny5vGkxTAymcFMWFLI1AfCrC4S8Hk1OvMbQO7sM7R3VqbaTxG89+JrJdac6AM2GcoGdkEZ5dT1Cxp68X637dFITMuq7zxg77hg1GbgrP0lUVaSEUSnwdgCCOGxFT5NyRiedGwV21WQgrep/9QugexpFKEzfOSiZT3LDOZBNyu2lWLYwMsRnjZPTYrmReRJBdH3s+Dt84E4Dbh992m7B4ziyYB8RP2tV0/bfkbh+L3aeikZ2TvOpPAwbMGFX5lr+ODtIe0mcAE6gkm1g5xa7fIsYI1aD8lWzaEJQumV/AUwYVMOFoE74vSld6LAmnfFEq8vreE6+q03N/Tb8SlHXVzZEFdLR0=';const _IH='d16183d8926422e6d1104803ee4a46f70d3f843b19577342202541abd0a7a182';let _src;

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
