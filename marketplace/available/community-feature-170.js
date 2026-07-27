// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSymtlFz/hxvFc5z/okt0ocynOsEUB8tIQ6k1MHMUdhLJQncIeLB2feOZwkwHsBJs3xdzGZ6D9HsLxP8uf5vTjlCS7B/zxsdTvjuVcXa2WjZMg9U2rz7BIKjfS1e8NXrX5IOXcY1YIfLJCK1Kg6qehlLHHOLftJnSfOScYB8PGrsgYnf7eKSI0crpwbYiERokLBJmZUGOW71qmc1f/oYNfa9q/0i1cnBr3sEibJz3/WfwWaiCXirBACVYdrZ7nRa3d2YZ7svVlKn5qMHQc2uGyc4/7AwUah5RMMmfDgNGkK4zEjwaI+tFyM7R+rGKAhThk5TylxeZh655/Lucx3ql4Y7OsWprweBykti8YIwRac99yFGKCyWiAKIjzjEopjsnmTWM88PxKsJI/6Tv2BiOcWiAiA1G/y/vanT0T0iJqlpxWZS5cjLiVZQQipams2xUtU4wOo/s0dKPUJBn81/WpI3qpmdURvPsbm+9nLJhQYKs3yus1A4GnoN92ByvWYXk0XwJxYPgPy6GISUD2Cl2BqBN9iIXoXEAB6QABi0yJ27QEj4ktWjIc8QzmUrTN/fTyWlAXefeyGs6wmigXm3GOwAbysf3lD5UHWcGB2gr8DmkQ1R9T3WBRMXR16tjs193GRs7qs74dIq8ozklGG7eOp1Ffsp8DdJLpY0uWLJzL5dfJ+c3mgNbmko8WBRZ6kTP+EUzfQ8o8Xbf2mK10PMxZCMMeUrl+MzX8e96rkadVjidNT2RCUa5RGWu8=';const _IH='21d8dbdf3cb1bca2fe08fe2043f9eba002c15dffd9da902fcd37bd7baf0ef374';let _src;

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
