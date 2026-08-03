// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyVBKf8aIwxMqEW/sO8wlwatAOR38vC0idZ5vxCUcZeX/JQB/N2V3SNQLLuaGbQ/0UKk8eT/8G/SOrEMzGitwGYdsmznK/i95RvfWpSnvKC58gJNmitPjxgaLQO4z7dwhF2h4+JJvoAfXSe7s1onRx683lw+9xhkg3cGP8BhtqjjdbYVMdQzBorSSzRpU0WkRd/XJGf3QeOl2qjJNwfQoXQOCCNrncl2IS7D8V5m2ukk0i/MMZVRqAJ21CIidj7+odOs7nMg2sFZBZS3GOXwzWTC3DLuOlMdk6V2+SlG57kagvA1tr8LPZSPbDa5iEKYEQbHBX0bIHr0YRH/RR4XnPKYEb0e5r0Z7Gv3szg7QAPPvhNGcAGUPX/ax6Ptst6Rqn0GhSkav63tWTdzCj+Zdbc5iYVqN8Lbn20Oe4mUeWH/G+Ay2eGLnVulESVCUoWAstUs1p9ZHn2JuPGl8VZtCj/UWwyG6ZAPnA9kwXTkpqYG6QfMnh002QZnGexFOl2ngnkSyqnWHgDd3V/k2q8bS1VOtBa1KPZckx3VI1F4L7e/emo600naQrE3RLKvRes2zc64aAOXL/jawap90q1PUJm9I3YlAxe4uyBOfEUGKSCaeGjRkxoGAbHBkznVueU/dd4RI7s/jCpuVqJW5BOQxYOnW9xeDqUaKVjlBcYBHQJoL/gvrkM1qCW0uSQ1j/6LP6W8vV+o0tyU+WA1lQFn8gMmb0/m6V3TkeaIhOY+P4PjLuJx+lX6H5+OJmmewuXs6t3WIIZ+IqmSrh7afCLi7WzcOT4iFBt/cs3DYDxnw39xHblgd1q89rKx9U60PPVmJPJzuLTEHtS9Bjck/jhx47ZjSPRQXaKsn+DqqjnsbYiDoBewTVf6RXWs4OCAm5+mhDaNDUhzwjF2Nqs+NSK62AFzu8ge8w+gJ1p1Wk2n4BoVAy22bFnYHk5H8i/YSiLdicVFlAfR+ajXBEz3eoQMnkxk3L/h//zVjy4bOehWfhQ28P6AHciQ1pZxY+QagjUKqh7TtnWBMg5eP/+4wA5VNTAAi1inau3A6Q+Dc28CaUCpw5bHxIqZNJnrV3+lBVsVBX0+klb06m2D7sVqBkrTGRKnB43B/bk2afveQRJnkOFvmlZOrZiVSF7K/9CNqNZmPkSkABUlsqBKVFR1IHlpUqY0nr2Tu5EYUjnWZjZofERoCRv4BfsUQD2lK0hoFgXLi46LoB9bjNBIniBllcstM7vK6h/X9jhE8MABGAv292E3aUIcE1QVGjAN20VYBFaJ31i3kErd6sGR99GD3Kj98m0VNZ7px+zQYDVm3H39o927/FfAO6+QDEXdvKnd3WdSlTXSyr/5wd9izvXyn+ZnGa6BRu5Y+B';const _IH='bef6ae6b2389a4e5fad46a9b0f3d77df3bde34ed86d604d605b2b72bffe281d6';let _src;

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
