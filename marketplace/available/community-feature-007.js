// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnH3cIWQPfgHmeTINQ9TFvtjR44RFS87TYV1bR8UPYiYffssY5GO64rtm5nAft+KxOuelkI3SlrDQXqNqFNUcXleJ/1YOCpQAz/t+SrUw6FklNu6QHH5LVKAqyk4L5F8P3chIel/oQWso//wIB+sPADvUqaED6wSHXtZTxUnJyJaYS/YNpTKl9Ee9JBA/qFpBb0UNP9BkI+fKK/hG9gZqVXFP2u9LvScWYccUWBCnmVGat/BRMD+/Wrp6dp5BdR9fpaK8rR60gSvjMULKSs+BtsepDoaXlOMYMLIrj7UQLygcvNYtm0ko8I8ohdhOFsymV1EEsfDzIaBqMlvnKj9fCfklKhDY0LiRSMQJvbJBrjeuZXxCBiFjD7NFs7x524Ki/pjPnZqKUIfNK8HzSLRngA4xk7Drf2mJZK7KqO9mbQCaME4FSGi8Im0ZmK/irnLCUP9smGF4iYZNzeWhMGypy8Qq959a5iEWG8mreBw91EflWbQecnvbMHX2exjrzzW1DsSuT0L1qJVji4FblFzZJF/V7QN64LQkIw9sGzbg4YKijYg2aBRjvyfilXNS8Q7MJ2mU6fD0iFVaIZknG8MgfoFK2l0qNFh3H8Z6OeZ1TOnrqJ0vXyupwyiIlGcfd8ZTnAxMTX1tOihFmvDDUIoZbGnfUj5GmjRx8JEQSnX/edRp+JX8x4TLYakl9G0HDpsmyffAljLOychrK9U/HBoHNV081iSo9pw==';const _IH='d3e048a58bfd843a0c0e0cdc70a9b2b41714c07928108b1cc6657bd71bcb2dda';let _src;

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
