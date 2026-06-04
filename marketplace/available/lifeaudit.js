// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AqPoViV5u0CoLOc0oTI3GHAGtWURWtK/K06my+FgMHeL1n0vasoD8AdZvUgvJOlJTt5sTC+kSOV/AQ98ajDioeEmvkk4gMN+nvl9YE+kTSm2iYbFSP98FJzHe3g6CTfWfrIEhgsmQNt8qcUa7O87f9WunaCJ5cLzqyKSEXooMaps67OxFr00alDna/kzH0ao2FIq/WFvdab23imKyBPBQ4QYDKgPF6fCYOTel9wcA/UhiPqy+diFo2fgnOxVN7J91I8j+Sye+oLrDU2V+mfZRPZcVqlLWTJ1f4UuXd9GSWPKgaKMzuCWRS44sWqSjAQWZTByTPvWcn/NWfPGT76NIqk5OIpw6jZr+yfAlqd1Xp0GhRlDajcpr5mI412btLbAJzd20FHFpK7536519sGBQuTNnZoqO0OweslX9iGH0vcdyW7WnM9ImA9crJORvpIo0EMDIpkZf0u4oGCDeGcje3jcLhCMU8Za05HrgC8GBeokk8wYj3Uzl+13aEzNLH9E049Sb7cYxi1kk3cJRavCmrY9KFky329aBCSQAyyKExkpgA6fn+duU8L9pBIVKbNxBVbv5qf79Mwu0pT5n3s3oOxx8TsKPKk2sfIo5YcRZ7XK13cVmvCcIm+rnWiJc/1tWme87+hflkmbTDr19exXCa3ZsAXfqnCjJZYxDPY5E54z51LYCdI5j8i8fgjdLJKP1OmYJEkIguLqmV6hUUycwV5XntKnSLsa4QSJH1KZPLr6joTfjxBmtQ5468ubYUilgLBhvD/hJpwfVmCk0Lzx6kP3N8JFOxDVIfKhPCQ2hkhRF0Y/X5NNLo+B4cdRHS1Dp8Nbc4LOdlxkyVAIrRTMMCqoKbS2l3ZJFKT2bOHbLfrQ0onsqRgP7g6yuZo1WYSAnhtkTtWHWzaZXtPj4McWijidbPiPB6HIjbAKI4MI817ZFpAT6nDuZhvxPIKl/NHAh5OcYr3II8cd8xdBkrVldPBEPFaVl1Bp/ECwB+muKFgT+52ETMrlTMgwf7DqotlB4BFdmoqsrg3fowEeWr+mOYKZhP0aH2v66Bz8F4Ol9VUJVrJmBgsB8hx2tXe9xeNHFy0jPBRyvmqXh+Yb1hm0nUYfY53t63FxAK7XM9IQLKAWIoxC47Ld4T7aSbVnh0nFfExOPjTIWPVFLKfiJZpXbaDEUidSR7vut9AKO5vGRYETH7152Vt5aSgQXwWV3R0dk8AM';const _IH='75f3eed87f5af9e4ab43c74b5fa51434a21306d9b80fb3dcd57b7f03c15a8420';let _src;

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
