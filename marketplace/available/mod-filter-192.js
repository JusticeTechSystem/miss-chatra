// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEAu+LJF7qt/fQEMe1L1779IA8eGdLsFNhFJoU4F/tUIR/Pw6WUvAgThWFss0znN+L92AGyXy9JkthFXxPcGLUAwiVzoId/rh+A/9Qq1Hf49CPync6JHo3xN0Y0Xmhd9BPAtvVetix9CCRWVCudSEiCv3jdiL+x7lDi+NB2kJhe0vN8cyuFquGL/ct0HaT//aSnf1Ks0snn9R6HgiOZEXJdmKq2kzZS2yF0cN6/BVcDkvg8j9sfhp6WfY0Ox9zXI8XfB89SNqaQnBETWlLk2NfRPMIR4NAb/0Nek1CGxDUnlkKdCL4AbnV00HC2kp06MnI1Fr2rY9WbuGmVrpqFei5kT++XabHHiRqQPc4kwsd/0a2tM9stq8ZKVfa5XqUM2SuRjTJ50feAJCSPAbpsKGJRDh8tQQXGOw3SVI/4lwcAohKSp+DmWioEGCC94+JMfm01EhQLlwQpcwT8xi1LqZ+AVHj0KWc1Ys3em2AxSm75EDvMeWw4Fw5wBZVeRNI/CPlv8r14fBtZ9p9Y3VzfPT7qRc29i/6bPYSPbZn72c9yMTv7VDrh3tokQhMX4HQJYsifsuaTsPOAQUhLb0vxsgA0hxWbM6VxUSiDPE0BX2XLqrEoSuoezPrDWtz5/ZwHqoczzIgfOPD8xShW0ygpG//L6SoZuezqe4VRg31lkhIu9+d7PWm6lS0OVnpMH25KS7y8dCrRCwJoMmedwYvO/aoislSdW/xx7PishlRrlKatUpr7N9cQ08S4/m1MfC8UxD4ztdpgj9KcU0R4L9WdZKdPZst3dorjx3pabBxJjhWWKWqDP1PGAKJyIKj52s6+nxOYuoqfoUM4l8wn2YowFWp9WyBqLMI+qFJ4gbrh3HzDsEEScjhjsFljQruASdfeWcuQGaXRqwZpBFWYEjZ4warOovg+2NLpzrPs5Y20jpZ4m7Pa9Q0u8aLulVabmDgtZSWHzrKNWj6DkljCLxAUR8CjVgL8U4grDSep8dp27UrxWpcfkTNbZtTfp5kRAxDfnWYMwCj7VpKr3PYicmEiYyUGGtc7kR7CgvNww9OZenJNtd08tphDYEon5ukxsEfHXlY249AFCa9S5KHM2JbYPlzZKwmn/+zKjTVW5/v3wxLFXxKdon8dbOigWJaucZdaexAscys6OlnVqVYBxrgcu6sqVQ6kY/dqKbhj4Nw72S/aJ0OtotVZt2mJ7UOEBYajSnYMy32adjCFLetZCZ5gizjOdVXndMOETQ8PFmWk0Okn2MMq9CXlFJnhASf3FKTxrdy7WT3dzONKrjBkcFfPCC0gbIIUfkBVl6e+7KsMUdGe/Qa4mcfVue1y0K7f/llIkMzTicZQYbWA7KgrMp/cjJx5Ffdnkd3QT/dPccFewMOw4nQgv+cIvTG';const _IH='c9ac9791faf90a275f35a3429446331280d75c43e94045a08c7214aa91c7d330';let _src;

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
