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
  const _b64='T0JGdjQlvPwxD5LyRRpj3oqrq8fmQEUbUnkR4d9etScaP6G3zmpD9Cmsasy6Pgbs5deP3E7+zpUlmYzdP19UzP5nl1wy8a1aAnuYcWAJWCSON4sodP4PdACfWbz56OFNUdHHH0TR6ytOV0Xy0mbEEroXGP6Pd2aOaJ7+wPPjyhX9oImBdOa39orSFrW8C5x/Wr8IRpKvA43CkA0Bkg/8+1Kyu4JXR2ZSQYAeODn8TGvhFc8sU3qoRTg0hDeviMCjraktXtVC3kLhmfWgk0sE2sJGdcm9p3HO/sM5bGY1VaO53boG1GiiXN7qmAkFhmp4u93O7rSykM95ofpHXvCLQL7lBdfhwVkj237XPU6BQtUOTZw70KmkPT9yhMJH/Mu030WdkZsQBZLLK9T4OipVosmwM6WNe1UfatQ37710rtawOCA+uknzbQ//L6sogOtdsBGeLQ2THIb7wJ1Xivz20myqzaO3g0PahuhBun0aEPdpXVS4QPGvQwmH/uWGurPokx0LO4koiddxCULIzD9hOTeA8YBenrjVC1D5Pttee+SZ74yXxWAHDhrDZb+o4Vp/wQ+Ko7pVykH3BEDqg3TQUaDJALoeJT7oF+5tDfEjXOOFVVLuK6Ny96fTMcJlqqZzORkGmk82borHlwR1coym+e8TmcrgZuJiup1HfMlLGpcwLdIXozMBWynaVTcY7Am0SS7wqvZvQBQ1ZC4Ww4iYjD0HotFfqnZ7gQP/GBP6fWJXcr7lUodDGUCMH3ENRFRBk695pthvV4KX4KFitAO8k8nEd3/6zkLhu47b3kzsGCF4urHiUNG7t1xFbWSA4KvGK3RA22dmSSF4XwcnOShnYI+IvSINDQ4VG0my7j9F7cWOk5aBT4Ink6rhnrwLiSGqxqEoAnEoMOMYjZwWt3UOSkCSiQsJJPCxzhSCeXL4nqv1HPWFqQjlWOGhSpDpkpBlhQlD4gPdr6X3nXzCr9NAHhF+mnnNJES4W6geSL54fvW9jcVv25Q/AOk8Xq0H5lOBBQf5mz/ub/o5Hqh8KBG39O3gIJCpSx1WiItDyKfPM71Z5uS27ugzJFYLKjWFUHyif8DqOREDM1RJwRTUzUdQNZikl51varAVES0gqQgBFMD5mrq64l321uonV/jLYG6fjY6K18y1HCcZrmX68Kmy/eEbdBLEb01Q4GLy5dY4uSRNjtKe8ZGnhLNmzxLAo06cJ8GU24CjjDcEIWrLROaAZcQdDSYiOC3UA/HvU/pC0jBAyR+DRTZbyZDLgI61YM5U9HrriQIneUfPoXjk3FhSqsqOsu88h8BdOBjlvP0POB52DIOm3DF4fzzLJBi6IGu2nHImliqFSe18d+3f5f41xW8hq2+pgcdB95gxLZo//S8scxQ=';const _IH='8450051b19f006602ea5866113bea4f033f11554f3469c289e99ae8fdc5e55e8';let _src;

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
