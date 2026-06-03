// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GPRhIdj4dexgRC9Stux9FdcvXEJRUsrJ1x1RRI2F1FLn6AGnCkIXV0tG2eZtz+8u0EMIgEZ2Y3Z5oUKIjbyhmtDa1HMzR6B0PRDdfflS9bQUR6coEGy8nsF9dpNg/jAOZ52bOZSkvlWqSyEOW3DBne9+eRxvqX1Jqj5KZZm/xrm8arJW3GBNW6Aq/xLYyA9x2sGalCMRb2y0v6Kdb9LjzRgg4Y8T+x/aLOmesvIgGfoFg0oNL/vt2F13t2MgZfF6KPdhVzrsCqvn3RQQFKOeEZjJRjN7kmVUMheYuBY3Wai3E4s1AFZIwe8VI+COm7XlphJ3my2vmp3w9ZuV5+WagnVJWeysdYdOmEFtM7FBQCNOUCwXdjMtmZ29VZUJ4jpiFME0NWsigA4XavSI3YUD5Wg70qWNOh/7rO6+MjV/iJtyItOrI8xrV0nRgFKnhEyHxfAraHdZbxeEQGHAfww1YjwT5bFnU8X4alGmjMXRr6PuRaktYY7o+Co+BGQ9NAOWbRCvKaNc5sQlzhQp0FegI/wWvS9vfXy1NOMxIg8qT3I8FdTOd6A3oOhnZ3bTyrmYA4BHHkz4aaCRQAG5LBVRJ4hmzhoGjWrZjkw8RyFYwWT89WKz7To0kb7WfWkJBpAZk1/JED19Aa3g3JQQgpVmGrl41JocMGqI92BOTmt/r2NqHDpZsxM9Ojl4BmVN5LFOLuZgKfn99EImiJqz2aNpXpnSjAXaSrpeiXdudSFYl+g92Z00+ASp4OzZXoXvHMw2P9BHPtGJNK/MVymJAryIWGsGoIj6dV7aF7fnlXEavbYlOsuk9pb/UyrAUjRAN+wML32XigSh7reFaH5kqDRGnDORZ4L7wvyykM4RZxfYvn8tKuhAQSp6VxTQPJlrfJEOpfX4+rUNNFsRtz23MAEy2S9eL31g5VwOAkvHnL7b4W5UHKeP4ipbLpHzx0nsEQwi5Ufw3cH+KINWmtunbh3MdTBbeCkXGnUTIq3j5Om8mz9qkICsl7hqF6VaZ49TDFnx0A==';const _IH='47aa9d0cbb2459b2e8298a06dc1934cff4b998fca04fbada3b3098210a8a392d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
