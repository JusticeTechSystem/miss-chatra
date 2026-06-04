// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hNIzUT5b0VWWYSWmh70/5Yc1XQy/i/iKL4Fj+AGWKuRhTY0frA0Hyj3e+nmvN12Txl5kpxdQgokbXCbLnAMT3vvba5DPYFwhEnNIF+sUn9MGqhJBJNM7DzruIc7xPKL6K9nNTYrJjAfOyU12ssIFVCE7z2DeUf40t0z1ztberU6M++XsvVD/uOTtvBGsKz5E8/+RVOBhSIzhfYltsmJNqlmYC2CX4HutNInyAM2pEICYGWwDrDcKY0yvmJedOCqjCKywutjrb+nJOwQs+LJa776ubPk2kqKIiDCmipZtrQysR2L0VcvaYSrk3+C2moVe9Fxg4iWzHfwupd9PDcZQzZPfS1hwbOvE9Sx8Kb7qm6/nvZDKnAzC2du5Nz5Axvteo6I9zewunH1i3vGV1cnLMZ9ae40f7QmgbeldS9/u+p9Y4+qRELbxqS1VbV5oNJLf/gaLRBRJN07o5S6T4vz/sLkUzIUbaaTDSzDHgpTI2RbGxg6fPofuQL8pgiQEL5+MpPHqHjBBt+3yWLX+k5Gt31jADHpFKpwq4cDRNvvYl3EgexL6RXVCx6LpjY3Sp7uqPlfiRS+7arHLbTYLFUo4A0iSuT0TTpc53qbVq9XKSRE2CejkMQT8Y9CWhxe7ksgKAfJZFdckqOcyV2xepFjGlDdRSOqlBrvZatAev8EcrE9/Z/gP+SrfBz5BG5gJFe2tJ+U2iUjsXp8TCpztQL6hXaCOXA2XBRG7dAAJ3X2g7dvIPmNQ6YedVxUa0vQEcWI1JXjD1lGAjSrhrxRF6q6CpeuFQZXsXrn8C4flAuYzBXScftCa966U9SLCx1O8v4SqrvuB6ptyraHlHtNLrr1hbWq2bGVU5YF3yjmBfX3XAAV4Y3anwXrxrIsfIz2bNslcr0XumQfEhD6Oh5QUEp1I2WpChlgYAD7y8KkotPrYsf7AxJysrchtK7Of5YxtmBb6d2MmIl9qK56cQsh2nECPvYe02ibU1RLw2iotiODbsH7JiP26NXNnxVJ/eRZWA8DWhQ==';const _IH='47a972f8c405058c0a93a080bca3f90d96fffe02ac215eae6850422d39f9d72f';let _src;

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
