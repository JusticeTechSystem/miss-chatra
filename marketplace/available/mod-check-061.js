// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q7uckLChOjqFkH479rjNEuFHXxLkQZQjFXeQp+ykjR1v5Bvm5pxE8VMSgL3/dGaA8IKC9d6Klqrj/IPP7GRTzNPjHFWLJcXNQiRtyNAPT/lC9bp/5srSIzuEaAjOjy/q1JQL1ZBeIHWlWFnifthOmXXxF64vSofqnLWDIIVS8vh3NM3zqTzd9Lcw7SVi48kuqqNTJFijTb6C3UjojqcuUAPTXC8JHl/JOxYDyHJdUxlWY4LC1YZZ3aq3PEMujEVZF+h46CO3JPARMbPPmXEHX5wZhLdc+bUUK6V4VuNkz/+Zm7HAGFUWS+5dcsFKmefr6YSprCkAW++9J6MbJcZ5aM89va6zf5PF4v1kcrpEE8DA9v6ieuQFwbj8mMbjIMj/tM5LMlcXGnWJ6dJm8bERSNRFMkIwzYA6BZCxvusqkkqXDz4tV0oa2GQXiQUY+9OaVUCUeYIklqzRMTVdT3zDWwL/V/awo4hDqmT44pEJ6bieiISo/gfn1HQF6keax6/tdi7tucwBe8zrDN+r9AwBR74ajN3oK1K4TyeutVOCJ+RavOcy90+tbpiE/dYtI6R+S7R62P+PDCCQ3SxGC2k0v088YSlSrhpqbhbTGS7TNvIW2KHXiqak4UAiPqFaCraNyasOko88Qa0KcmXVgOyu4/2tmxsA6VvPiG/7e6uwG+Hn8Patk0eDKr9//k11niK7T1lw43VxImo6vb1lVBFb5jybCe/4JRAwu5dGMQUux9FOmEETJKmlGASad5O/yYYHKR8fShBBcypLXzzS49FmEjNKhW7l83jaqRdyGhw/pHvsE3DgRnMC8nbttViYvcTEL4tV47Iu7juJZQoGz9MMxfQcZu2oxV7e2Y2eHJUiNLz0QyvEnzcPEhINkWMCHD6lG2GA8guRBeMMF8tSIDkkAX/O6gZGF4O/BLzYgmYmCQEIV0r+4aaSWOxIuvTWjtahEYGYvaEwOj3e/itlzBLWPFgkYwaRlXRWZctEJzU2mhvZSLqGjfuhn97wRUaxaXK6L4u6WXgXm51QLMDRI1QkCPejL17EzbGyqUN0jBKZp7I4Aa7N8wSjKCFJscgIDxJ6ql1W6H99Ucy3l4fvKgdCQHKo6lTdLt4WUc9xkk6kZN92+1k37nNS42errZofxnhp/vuCeFPm2pHI4bXc9WcSNp+Y65ElNQg8r5cl9NAjh8f3UyxcvAiO6BVDHvmV3L81WdgGuugPmsEwWTALIhCA3E3+frcIKJvxGvRoe7ueUhw7Hj5ZsWeHmleRLknoHPndhgZ0o0OYx50UI3K1AWclVkIMIUaotyyzmh9ucXlbOaj/erZ8b0eZjFrNEd75YvDqaAobWNoByQIS1yfn8s07o/Kk5JROpkePtw==';const _IH='dc349bbc48ac7116b4e592efc4a874758190e3670456cdcdc9f6ffb91801927b';let _src;

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
