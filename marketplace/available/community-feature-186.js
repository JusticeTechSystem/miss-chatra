// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShWR8ZHuuL1mlIhqpx7RaaeXdAd8jGHRdblT3pkncDjp3XosLgM+CrFfYQW3t9sVsU5xymvvT9SMxe9B+qSgEzG8O8P2VF9DOIEGf0sPkpkxO4+CKCXbg+7+CxIbIwTksN7sGpKr1jIkSkqrQQH/m9KyOu2U5daYLMIfYy0MSVaaMIRqUbzfnCx3bLBtzX2XskE2oakl4zoIspSzD+ZKmfEDbADs8R2H0KBigUaAAw4w2Uav2JhlmzJsEFAR20RdMGEoKmnapdPZgIqh+Ngjd8GQyy6XirBndfsu01wyO7t9sXhw/H/Lp2IRXEs9lloauOKU5iHnWR5GITEi7Lc9NC1Ov4rXhygrghUZktDRUUX7jzJQGpwkRnz73ph3fFNpwOzxIrqoV7eQ/QpHvRrPMWCXnePYelVorMar6unJsuxaHcKnBUZc1hyD5hKwjwygy8kitRVhIK4mWDDhpnOIiRWRtQ+IoitzfpPTO/G+AAy2CU9tH7sHWvDh3MXGxOyvLLg3LdvB5ZepC2trI4F5lMzNej9RXqCuhyTPJj2he+yEicqet25iUvwOVsBfZB/dTXtIAkWGckOe421oA7ATKZ1q9CyQ1XqniGC9Y/gepVot7eFIef4k5oaL7A8a03zLdF4A8LfMDgvICWkuQnF1UuQDgVIh1/NwekWrVMzmhtRWhB2UCJOnLjw7zWcxyAIEiQ0R5ZBehpGUO57mNPUCkDfJRyN6Wd8Bg=';const _IH='e5c1044de46005021687e958993fdc6f4bc4dea4406c9336f9bf696f4cbbb039';let _src;

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
