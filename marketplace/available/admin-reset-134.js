// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQg7PqBbzo5aAKE9xf7P6tI6XvqPWWjzuv/T06i289uR8DJNCOlEei84mxz9YemB9vld2CDrcqh0EjdDf5FbO77pB0jsVXKU+FbNcouRuozbHhp5OEGRToFdRillrS34DKbPTr00qaAgJkTH3unymqQpbI5JYETyPd834AhkjWVtH6b4nhr0DxwbKSILTIdkC8q9BO5cu15Lk4dYG0wwLukb9YH/8H+Qf1dbCUY57VmdDO8AkQiElvTntiB+YOXyb3nnqgKFbak4LPHnXPWfLuYIsyZe1q+J2U5aJKkw+FL29u9GTF/FTThKmzBB6vI+XJgGHE1fHXffw14YULUvkT0gOOuPhldZTmuEaVnKbcaX9Oqm4KNenYQn8gXy8iCBJIqP7l6CRJOOjNIsIQ+YZtvt8HJnxIYQWBqeHnZUa6odpEqsyLnRdUKCAwLEWqQ2Jtz+j3PLi9UGYiy1ohFXwo1thzeAEYgZbbOroJ3NF3G5gVZm2ttNY0Uh57n9fCBjgVKA9P7UOXsXVk89/eAUsI/Txkr3JmfpefFQ9Acu20XbJReCrxCMtdTQ1Mwtn9EBOKmKY6bxJtV4NvlfjA76hyFKq4RVs9rB7s4qyIkVwDLd+VPFuJYwoHFp0EpiqIVB8bqu9S6O9lcVwwS1nZ7uSQuuKC5zt0nf7e2DZq+NlQvEbET03MC/DPyLhEI6wWSjhy06rmtYfJGMpDkePrPmNgx37O2s8QbZZ83MhIGzwEbZ2u80mDr4ur3r3Y7CR+AESIqJyczVQnKw6McmrejG1lY0wG3F0ll9gjBQ34el2HxBIDIpdJ/x+5v6ZZcZHY+mPBQiFw+9T3DNoWxxFes2No14vve9/8Ctteq9ebMKVDizEHvtCCR1pknJuk7K9OSnXoNZjC+l92hlpPJwQV+gUOWn5ta91fhfwzbUtnO7632IlMiTzD2PK+3RZN35KUtCkVpYDF50d++tFrl5qn4SbxW8rYyCNK6yR1nZ7dEaieizvW26ldHYHnXdic=';const _IH='e59a0b47c719c4f18e574396d02226b4feb0a36b81de4011877de51b56b495e2';let _src;

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
