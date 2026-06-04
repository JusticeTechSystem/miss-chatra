// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KCMretrrh7zPJjLLSeHvLUMyYEKt/RbXYowf9MyEBoJ8/MEpP727CWQYur3GueibVPToUc39Ct9rVBOeOqRYSfBx4uEkBmlYVa/hHWaipyNyl1zL6YXy2H3s8QQ2E1LuM+SbpXsF/egTbtaTl+ToXHFgROhpb6eWWhQsq93Po35WTLr6Ou2csIoYglFbGmyIUFTD1ZmDkGwz6ywcZwnL+GcU303AfvLhvdMwAZyHLSlKUhWnL0amzQGWETsF9PKInRJDEKbez0neztzNdFs6H+KI2aYwVKPITdjdpy9YJtISJGYqYJccinzJ13T1PjbJ7Qe1p2u34Zqjh4mkTeQH4zBahTJ4lLvuJh4UCDpCzfSqy0bqilMrtYCNgK9JwCyA+4sgSKtFZ2HznqCrjzCJ9eI/6TZKo7DCDVUQBhLLEF1Z9FgQr1miwCsDvBxV1C82gbUMVAiqtC9c98DsVf++KUueACnHeq97ATOhtplA4DJ4d8LijDP4IYpssKQKB0SbBr0Jk9zg0Onqxu4GU/rjFpM3NP1e1Ds8z8ZXzxQjxlO7PkNFfr7SJEsX83UYBBUhwIAY7tS58ii6rROPBvh+tJjdWfYAffenxOuwIMhDnmvVhsQPVQDE8EtDbSA0PPWfWYYQRc4Rgigj5RJW4auLwVZ0nLZNArlOW5j8ndbCV7Ljqn5CrueuH2bgQrVVZmdZYA+Uim7K3mDXeH6O+NqULoZZ1sAIONtuNqQy3Yk4tt39b58=';const _IH='22920c1dedd6152305ca48cdacbecffd70918d377ba187ebc4d66d194db44b01';let _src;

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
