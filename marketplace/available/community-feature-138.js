// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4wo9EhMU808z1lCEbhiBrSCwOfieu3nPs7nI+cl3066EeY0B6mO8XbnJ2XIdDE3WvYY7/coRGGZCPROx5LUgKT92welWClYhKyDbRpXPE4+zbnCup5nugRm/RDhUWGQniFlENLvAhRH7U71yfZcyXnwmJnk32BsR++6dKeLaJWdaiih9baUhMslNvjQTR5VdxN+r4zAOllvvKQn3u3nvhM3tYhIOGk/pc0I57bzZgBkxckPcwg0E8hy5YMIzMOoEbDQMDElWu9CWx3XY0z7PhheTQRXrQFMR2TTGIA+/emBr6fGnViYkVy6qhlfisMsZwHkW1pL8YnBqUYXujQ9GyCalNW+9L3iOkNfiv5d00Vvc/w5CZDUx2d29LPnMNflgFM4a9yzPYAvuuoPqbH2kztCQOGJ5fyQ1Yo3/R0UTdaIx7izYksCTwdEunXTtIhFlh+kDyBcxfUgcf8gMcjr2tSs0Kk8WAg+FOxdocPzFc3P8anSJ0EBvV84kcA+8c2QMU02EnUYx2UStYL05VF6r+BJTB8YnhIzRlVT/Tay8J+EysflFM4AC2lEf3PJmQk6kb86J+t3ssitlvmb3QHX66eInO46KCwuCeYm12FDyC3N3lXuq6OJ5WW8nxhtE7Yhqr1DTUdDpa3JvRiucD1Tj3MKfn3N/c9wFbg+Zmq49pRlE8wiMQvOgL294vWksm/az93w3BlHjYi1ZM69sbs67R6a6ovmNZ1GfZn3K49o=';const _IH='f3eab383ede084f1152a4efbe4c46dcaa046a0f65f8f3b50fa2a07edb1f69389';let _src;

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
