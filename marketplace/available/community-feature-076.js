// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FCG7UpZ3EA4Y3TV/pNzK8hi6JobjSxOSQ9Sgl7WrOi40nF1MciNXZjDXMb+yVo9dXdCi1jnMJq38UrKD6ZczupLtp/aJZQnloX9BNgi7u5WKA4KwaCNjx0tn+QmbxVEp9H9DSHdeJYdJfWmKng5CoUKzrDL09YwJAA9r1gy8hjB+BFALSGpiIANPKlIwW+kWcg7flSkLgzGzNeE4wsOlMLUqKe+jfWFyFHkubO0PCnUXFuNVqm00g1MRwRlDvJF1aBH64zmWloXcvgotePAtbG3F4Smj+yqH5hacne4dke2FD4lQe6oT5+SrI4tnaNjIzlqR0tevgO9THmdwkEqp1OBkH4WNU9Qqos8SEIXv7E/ldIWcM9Dih7GNANTeyBSSclh52cmzFcE5Z3dc4pURmGV8EELa35H3+MXcCJLkvJ2alJewvXkgxI4fM0gJ9sS54AlEuaPhY3ghdCPGGfgs8aPpW+577QmzJLjSr36riM6g5Yb3uYcfoROSCq2nuJVHN8kskCAGe/BrSdD7krrkuMvxZV+mhv0/5cd9yVYCBeYzCy9m0VxnB6Pq0meTPgMTS8aOsq+CkSTuMBjHURvetCpVcbpDvghOjc9r7c3MSLKH20jRzs8GEQbU9uAJVmZU2MEMcRMlbqxYAXIsX1leGNB9i/Em2XTAvobFCfocDgzY+GRJjd01YTvuqulyuzP0f3L1QlgFHaoZezeJHq7UQh4W5cY=';const _IH='4ae03537ba8802079684fa74aa98a7d760857cfdaa7c782bd7a115d9e68aa375';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
