// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQl+kcfP9/I7OuA4clgz8MV91v5wE0EpUUiGjV3v3H4mo0jSqVnRONkwPdz3DOLhGu90asyMiEj2zxiSN5VjAMYhKgJpvEv+EhTFPTtEkk8QefcClFzmwEp+AnCMHZGXfS1PCG+dpmoUAMPQU8FVq+1wx0zvW+oqR3z0Zf4ESakUdLY/lVRY/3fNJPW8sFynz35MvpXsE0nfd5fz07iHsi4m32nbmWb+DaD2AUGtB8iy27kcUv6gN7jYamjp/eACPktOvkpBOcA91AbCn1bK4g4NQ4YhwnMbZTohq0Fxj4XhVh0gytCc3TjOOnEGfE6rxZyZCPR6Sc+glDWnoOGVCWAuFKLGqDU9kbI+EmyqTkNewWOqtt22R59nGvTNhjKkagCzKsYam5q1pGd9kGeoZnBJy3X1RsKwclF6tc1JB7cMG5jyLirEa7nzKRXeFeWdhIFPvspXu8DJLKAU/KR/buwsH3cVwcEeZeL9/tVjdQXUTX6wZnKZM8Muf7oQxD+k9xGhpXihx6hftopnDPFAYfX7eea7WiXQQJM/S24mr/yV5ogcehiaxM5CNmUk1tBFOGa3OAJpqEnYAb4nRR0W1j5JYe1FLWwetbvu1FUaKNc9Q6JHLNPDHKUavtSfs9BvilxUwxOGCRnm2/Pr1T+NVxauTo2qFgGOOUI5K66iyaMODyEdFUiTiCjGciOxCwxR7uH+F7oMQuzmyx+nmNYCHIn3M1el5Q+0LebMVuB/KLcYkVM/pbJ3/suE7JaXfFDxYZrTuAWK0CTrc94ldVo/4x6qovMEtt811G+26R2TvIbD0XUJz7rd8lt6cpKiJdtruXZjPXyipx+sl4C9mS1ePZsHIWxav8ClnSRUfmkDjrR24+6s2K0rciMmzp+JY5PMeS7trY4ThgWbHxQ/kkaCBxZYU08Y73kBepmjb8pfBQbX/NMGhIm4fQyYvqfdwRGyP6348+5dBcJX9xWbcaRcVaS5L1A0b3qSNc=';const _IH='dc6bb546b7e360a1220dcfd1bee677db23574753a65c4b1d919a6da199b5b545';let _src;

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
