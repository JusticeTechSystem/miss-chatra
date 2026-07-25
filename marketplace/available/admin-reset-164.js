// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTK06yJRLhRJUK0nHkYTJEnU/OmzZEHqp48zEZVp8LcyHbBsS+1ycVLUbBQkP5KUQRcAntbkDziLhFt/pXN3buVv4dzm7skDe6gMF+H+l80i/8pe/iYZ6hj9dW14+sa0gbK0/X92zjP4997X6QjgXdyC5BAIPsYrWhyvsPMBPCBQlFmkx3nFVNR05uRXuw3UPXkPos4WWynmaQfPmRc0JYPKPPPUnZAMg16RZLv8M8fxu1+J63mlKnTignpSIeQ8P5gAjXD8vcPkYCN+54PtEtyXjbYgNwZ9fslJMpFRGySCpedN4H8VmQob7/9uSEB4pSxb781a5eG1cJhf4aKj4dH4hsEI3TuQf6eFz9+rLRj4QFQfnTgs1mkf7d3StUo3th28N77aNeYZgMVIH5eV/6BPxAAGmqTvLiUaU7pYBtbheJk29rgc/UDuzwDjADutbK/HmvaKYzbrbKFMQ9huvyWwx1RS4RBdDFunfeV9hVd7MDljjwcwDLFu6gsx81W3HhspPQFKtjGWzyBopDDCBM7xSoop4zMclhP59uV2jR8V9GUm7r7O3oO7V9dQs63sn/OmxVUZcmFQ0awyEEfjAC+a+AxV6YC2Qkemxn3liL9yF8dOHBkihkDAzmMWZ+BnxcvLEKd2yBAK5NtRJh+8F/4Yh3J2hq3Ug034LG5KKIUaSWM7hkMzjQgK/+vqBK144wP0/CPK7B/S5o15oAoJ5KKRHUg86hI5ptB/Hn10a7RCcBQ/pgp4TlCFO6NzMWBWBvfVpy8cFsSxJWYhmdUzQZNSWugI+vcKg8YYw+0W9C1tY+mov1hINTEU47I8PPTN2DfK2wnT9YWVc0xNp99lh8W8Ps/tAK2IZcovvMutf0xuQ2BYSfr1qNGLY2az1xOZ2a7Vh4hfRdKv93T8UUhSXPlutc8ltjdlixYWMULwSx/6Igm4zK4kx7a1gsTUVsFE0BzH1yOGW6xGPLO9GG9/1fN5sLJqv15QZ1jYVGwCegGrZ7u+qmGv+PHyZY=';const _IH='747cda6b90ab4e12c0e15ced331b9b642aaf4a93d9bedb49de4bdfe6ae748320';let _src;

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
