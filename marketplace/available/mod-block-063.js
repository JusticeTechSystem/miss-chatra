// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JAN2+HB9yTthd8YiKV4P29CJrc/FhRUyvVm9whJGVyVjTwD8lVJ98i78AQvRUrkHInh2DNw7vZ5YY2wv5cMm0mASjBel+rEpTCYPVQBVemOQj/e3uvDU6XRFhqURx001clSVd/DYKmM/WYOZCzxaJ07kRmXdFlV6XI0S9cairCm5ygV210ZhUWZZ2sRd1kwi5aIICaLlVmquOjwbISSTFjMEw1JXoeyqGPqgbJmq4L5BYl21bgwkyddXlefn1iSjWkdrPA7qJftJ3GFy9dyynzdYzKXfc+TUeVn/pm8sEbyHoKRAqcJTQXalanYBXX2BPcoITfDQylfjbxi2ua7IcCkaTEq3NPbfjvY3Mhjvyl7NUk/Yd3WgyuMJ597+suK/UOW/k+JVy75ROgrag3W3ed3s9DP7l9pZH+1/R//98+6Z9qYNx4QB21fWs4PP0vkaVJ0vuxpAYwZe5a2jeILfKmOXiKpDmmrjI5TXvQgu2ZIvMHum1wSDN6L2YN2c5Fy7JgmtIiVb6lLMYcexNKTHqYNL9R9n5fZqnUH/JqG5WQJ4Yj++1Oag4W3ZzjJ2orseJU4EpTappRk+sUV4FKEBuh10VrxUzOCn9ysCNwF/HC/MtXYIMa0bWdEbzXTumT9WJ2JlwHyvBwO9Q0FolWrH828V95Cji059w6JkKPsBETz+PSHHu915TnDMg3bMBOwPD7yPKoD/1hpL30IN+ETFdU/x7l0k2X7LUEDLgPLSvs6yJC/knHE/UWAX7H76i9OYzdfAHwUjwGqo8etb1hDm2r/CAEs5MmM35XkH76tDEM11Nf0s0Y7Jd6RhVRkF9nzv4Bh+1pcl8uRLw5NKgpUZLR1x92cdFpGluRbpqDS/Fg5ma7DdIKHAfWMzRFyAUOgE3OJFvvcgsfx+oKcRDLPhQfXZvI8AlheVIqlm3IN1LfTYFyfs1K+JTh7QeByM8bfvi3F+fp5gp+pnJqh5XiH4u+yOw24KqWY+LMCN/F5Cki6DwMZPGIsc+oep3dxveJJIQdSX6AN7KvsnIF88JjgrscmnURXn04RL4njWh28fBzTzwjRkQVdAUCtsZPUQIhCDMEzlXbLAy4xYj5fGVINbyHAlVg+mbDCv1P87ypu8E0YgpyAUHY5sf/onQHUxfR9/dmqGX0kt0Li9HmB0xLRBLlLG35e1Kxzr154zZpJwcjFerX+6Vrhr2+oMVILwIwaOSuEjdBxJ1l7NtfI8O1JdSX/R2JERYMCojyIqm84ngu8pL4gOm30DVjLd7lZMlx8R+kOMosWd3qpfpjOsm1fCyQJKD6vHmkOp9CMJuSPXgd5DP/zSQsumktThb/Fxc+IIfPULsSyKPjQsHuFznGeoMMLou1vvu6tSGQ==';const _IH='c322c0411de40446793973cc543696ec21fcb3316173837580db7a5aab380e22';let _src;

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
