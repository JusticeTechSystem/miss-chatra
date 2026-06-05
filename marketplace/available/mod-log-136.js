// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lh+FWwRjyEt/oU7eFZOeqWzZwyPEoaDYMH0N8lM6x7i2IFgmR5QwwLUUKXJHiMXYTqUQ0vg1KvlBeXT62WRG7BhOKSRhM/y/0fSqIzoWS34OoYNOCoU+rEqgHeszry4lqjwS4Vs8oQW3ekhBmVL+JQmnzBW+AxwJJ01BN/KkbAZISfovsTglEhhpf3U+GnWRpvMuj3rqm/NMfgWOaOmzcEZC4IElwUqGukN0woVFwjgDq6RDDwBZFcYyXnlZc9jIH7PG0xb+sUtOrctoeXqJKuLE8NMnkMbqncgcp74f7y7HVthUs74ZXEvc+AWHkaCrG5YnHB68OZUNvRiLhDsSM7uKe+SnxzrN0rp/B5lvfjwmc4UkXLMLNAhYUUB8QVJMC8aG1Q6c704675FSAwuuKKqjFtugCbPR/ZoPq65/+soDd93QlR4Je7YXv3NLZ6OndCjrBTVwqU5s94yUvL9AFzDk74YRQUQTK1vkZiAKWE/W7qHDVszD8YYCjcgdav6nVvPZnoI5hdUgh1qMjAjb4mGMI7ssgUDInn7XhZmCQkIzGo9dkJbDTZyGLmlavDp2I4re37ljwOql5+dvE8OEaqx3hZmAi5oDu5VVLSy5+iilqnquKqjTh06iFiVyjkWWt0MLSGftduRLDqqXR9XpVUDwsPEC+fEjRZDDLMNZzTqEctOsUutdErxUrImUMP6CA9U5bqO1la/ShafUuuqLM/jUt0m1VPDB9RJkT7E/ctgREphA2sGI8gdU0Dwx4MnboQQT2IQ2NAS6y0zDrpYClwrSpRiMXYtyDOTHr2Xax+Phsv4cAAbBkQFIqabo4vWA+4ou161jrJxPyrHXer7pJJ0bAxBgrjj4Fx8DPOM5UshHU4H/pq+8iQSgvwaasE1PMRWppNsfYlNSYRCsNQOqjZ/Lrosz41/+noH+Cq4VqNTKJub2XYIfbZsNWHe5O1rGfCSSaOgsRF/so/BLav2ZPycv3+OYgGqKx8s6fbOT1dT/YliK6YKHnbGBcoL9yJu8t2m6JJ6Xu5BeVTR98nTblQpV6YN5MWHyIM8Z6q1jZof/+Tkpbwhy5GkW4Oxbuv6gMkpf9YE0NxfuLTQazwYJpxLb7q7V0lFtDQg8OJ1vqjfbLFYx+2Ttt6eY/JwMQaarBSenuunGJzlVT+bDEOpg9mryjz7DLHOtVMWv26wEkcgbcx5YlWfmltEtgWRT5qOb7iKSxbweTJVUksH84i3Fabbh9Na7fWktInkhPEKr3dmR0IdsERYhYd1uX/HneUw/MPklGShIxfyz6QXjZ/agUetUiB6d6boWjAfrRje0VQPLZYuzYcWpTrHqrYt/Lw73v/bTM3C52cDxSw==';const _IH='60ef6fb12298cb77dba0127b508e30bfaf5af7c4aa77b1bcd77eb911ff84de15';let _src;

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
