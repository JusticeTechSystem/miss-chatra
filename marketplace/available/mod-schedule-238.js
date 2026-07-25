// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwe5e5Pdjo1Yw2sqJRQXvG1ciFXPqAActjxH+/J6gErTEhxEbXsbZ5RwAWY9FiIHatWnuwAGpSeC0+QhTOBGljLdWVRG0cK0SyEWQcUmnH/zao+ECbCGshBAVc3AULvGWi02UGI1a/JXGgW/zlU9QiYGf544ojnFrTsEkt+kyO5BQVHjvYn6/nDsMkdVUDLxLvaNRCggOGOv1ms5kEvgnFYBNdeiJVhWyxHh/uE+lnJyTQuvMxefx67cSndN604ahROW4hIu0bUIfB06L71Kw2dvmNR3DqUpjKeMZ/9QEJ/laz5rSOMB1GYdtjMHq/TGXPxs2qrOyXtCoxN6kan6MbZk/13naH4nLigJN4BxiWCn2Bee2A2URo/rHQIXC+4dfjY4HVKjQjYgJROURoPJA5eB4COJhK/T5/J6yFphJNE80o0Ei4TOx3NXCW4LD9qC4YuFk7hC1aKxc+Z+dvj0bnS8B4YHCWc0JKA9+Gp+fhn9NKnXnrUQf0UKlEAq73K/p+rxptKNl3RnQ4MLE4FBsAmfxIZ24b92WeIqYbUpPr5Gc44DtkQAE/mSQ+t8iPLwnTwVNf0R12zNX5+uLZtzH2zlfQdvtvj6hHjeFwBVw4VgE2MkT7a1/qhZQIaih70zqg4iopRxFboZn1KjQXwm6+2L/uPPLdiraCj2zNv13BUWH3lnNsauYzlsH893PkOhsOqYbluimqTHm8x5QwP5lA+8TKbodL/lxMt33SLcHD2zCuTe3MG2HDF6uHuWSvSdy4YPerZZ0HNZ/+meEAWH7OHdwWWCgTnUrW4ZjWfcVh9yZJmCndA0+JGyqJS6SGkPA80YVaBAvkXw7wjEiAZ5Zhv+RRuxmLSn5b+RP6NwZkyGRsjcviODYmfFM+MFgElX5AZuWRubgK90EPLdMxi2Uv28UiSBeHiTQp+ng5yjhJAKVxgVqvsQggHTXRhunV/miZ0z75ZYFHBCCKEG4lRkbZxTwT0Nj3b0FkL6ZDpcOGT5uNo6NDNt1DwfceClTDRe/IitD9RAu7Ifb0bnqhwZHsxtdLstKUHl6oIaWntsMTsUYD8B5l1dqiP9i5iRNMLG8lwbkBs+FhDavz2XcFPw5WNFu0a8n1ywnjGBRwoD+/nTqiTpY1c1sIyDj1dtdDM//HnCxg9cwnUQD10c24XeUt7/4GlKdbnWQcuX7i60N4eFgMUqWP8VSKalxXQllz9Z+WnmnfhvKAgEI81pRWLdEnjh901Pw8Nf+Xi2VfHorUNVgHOl8X55dKEgmIClTahylWrB7nz3webmsljztn29XFiyTq9D3YcM8lXUmzjftXYgNh9YhKhUVX9fjGyVC0tmG+0PhdhMS4FiX/69yrXfFiR7sS2I9Rrks0W5JJHsj61iDVQSGoWpa6i44qBmAc561qRP3eGVh/6lYnOo8=';const _IH='81461553f3e513c9cfc2883f1653e6f25758b3dd0f43a3f7766117df499c9f89';let _src;

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
