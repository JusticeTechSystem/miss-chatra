// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O4w0am78bS1A5u9TtEcOwAkn5j1fvoigPMSFwABTVOWVTfAAdcq8UABUCW9yH9Dna/6/RBoB+yH0VZNevzUvrAMEIWBYZUn9AJNipJf/Z+TiwuK9SmoGUyaS7822xK72RPyqmaVThgdVx3Gf9FNfl0DIvlNe+IoFIefXZqu7MRUXIesJgsppJcptiPbmI5CcgwDv4dGF3u1nGB+K6oKQ2MzIjZA1eyPGEorVbjFXdin4WcV00ej2utNcKCQMmTsYXyhokscf7wCaZSSaSbJb0yWTzLRBrdxWWmBVx6yirU6AikovV+QlaTUKAurzXdBi+daQ74X402bqPTsUJpq8eLFUTNX9UiQft9m5y0CcZWDa3zfQBFnEIScCXPoJn1yfct8KpALyi9EGtIqeH7l8acoDhmq7OPenZsz2pQQt8/s6HGW8X25sVQ3AheP+jRQ1r4jKKVp5XiyzufXRUp4KcFr3umepHqTHKh0bd9lQtZMri54fgFLPJc0BBZQipAcQDA3uGdAG04jFE40DTkbKFoqO3efc0bZdJilunnIJeCqShB3KmY8y9cJ/a/+jFBYvKYPhM4y9JctWP5nN+dmILxXOHYE0yEWZhZiiOPr5QeD39vNRFiSJjPv1lieCZKjsz5Dbf/xRn0lh9uBROMty7+mUZvH72iMqb6jPArRP+/8szQa4HkK7svnyGoqJf7O2DvmVx34eJ2CH2XKjrLsaIJgBmOH7Katpvmp9bte8gom8ORnfoWOFupIhskGRgOT+MjRpU08DOqj9UhptzOSwdhYQOPB2BOSTaYrtBu5mOxMaFGetYHfJxvh1cyTGrFZIqG4buuw3/nifdxO87FIItZOkcHoGj7egfvZHqgC7MEY4Z+DfugDOOVKKvN7DekVamMQbbd7X3qYrNA7ovR29GLh9XlfibjVn7yybUFATb/UNZyWM9jGXpxppvttmJDxKI3vl+4fawJA3f0Dk4As8zb2owFTOTTNY6V+IpVmycwUls4IOIw0Rjz+GlEyPtT4Qno+9b/jUysgAj1N06QlbIrUbwxKTiGl8cWwGCUizUN4eBf6WUveUIf+dE2SI4Q4bGHRuIIsV07WJsuejQfhgxp7xew9aLwmLSzxl9Q2tcVj9UetZ1oIvcyvl69BP0iMz9Son9QrOIoZ0W9AOqpwAIoFP7A6li8NnlVpkaDcSGt7L1IH0N4WLg+VHXmyn/OCDs7Vd19a+/eBQv7A/wswObJEHk66zW7n4VF8ruBoEspDcbfvgsHh2+xC6po6THaDHm010AJXkX6tStvPl0ErNUdBtn49F4c3/U0nCyQuL9/7r6m5TsZqZ0ZOurG/mIZ3CFlUQpGdJ41bSUA==';const _IH='c141830ceb0a1310ea25fde8fbb08e9f3957ab203729e4393f1af948ebfb223c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
