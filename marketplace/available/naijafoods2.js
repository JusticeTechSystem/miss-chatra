// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fN36RvezeFwYp+FnQEV/ZpGq9PQGp4LM1/nTm0XPe23OVh7RVg3cvt+4qD+QxHmpiVhUBiRUPiexi9SMDN7Hx+iFLy0eeYEgzfUx2a/FnuChwFF+0Yu7EDCWh++TIJ0lYtgbqfDRyTgwpdbXWrxsyv2N++yHFBckzPAHEV3mKWXkRhIao9AdG1L6p+WwOp/UTA2B0ojlN0T9lvY7FOOWVM1V+e+HnEC2eI0KkrZ0XcJOxyIxbBBd3SzQiobp54q5J4ubDAfxUgvF3Vs4pTyI7gda3aoqL/zJ+xzKMSFK3LJAFETl3tbpWY0gkOBZUqD82i6CjXu+SqqNfamEE7a1/8mZT5XPhaumQWJQ4Z10vgFz7PK0dskZMl1eFDk/yXmSbYEIrUJgXMchzyA/u8YA/Kf5AFuYvua0XhXUUcOl51DfgVgTE/NEdAsk16gMcH04gxDYPFHR14m7Ksgp8WSpFCkZYuJWuqSoqQivuPYMa0+hyOjlnsEScFhCSiCletLFIu7YhBY4D+bSefQ86wZNxb1Xh8+lWzBMgoQkbpn5GX/NfzrhgV3Sx8zKqpU1GiXd7XOdCw1gYCwBhnoWw4fFxlyeOy4sRy9ma91ecNlaZ3AaE001B/prduu5PCRb37Wla3t9i9Ijher+2+Kxcfp8fW+CnZA5F0KrYzY5/uN++mT+JTBGiy780dqEstarb41NdneR4+P1kUbky1j5F4U23lpBgzIQyyu6c7iyLRiNp7QMYk/3YBFKlJNns5nekrH3niOJP8OcVNECXKGKb1mhP39UWNWNsTTXN7SMqrIgEQRK9kR7B3YUH5ZY54SQuqngJ8QvSMnw2895MNRgtqlQtn0rgecPlS5RMrxz/ZmNLEy/neWfGlA3rZ6Q07Ptx+Bo/N1IIH+jlaLbcS+3aJM32CeorrhPfXb1do71D+LILr4+MnebXjROxWMJa34UarTXvC3lUMeOT/ViCy7GBxg2K08LJuZWB9FsViohXK+ZsN8dx0+AwHrz9Bpc3oH94m05nxs4qvJUqfEY11WWlNoa/ooeoBx91EwjJoznpi8yYNmjZQMoxSPS6VazKPvaW5OsfDcDYDPdQ2nEncqpONGnCzUGrkZJ4L2377+0YIQih9gy1CCCE9TpyETp0UdjBu1bQPSp+9/5/2sqi1U1RbN7znR68tAK6dbZgs0pNqdrjxJ1zVyrdbPy0z/vYlN5MrXFA2FGQxywXOogfab4G7QXmgOu';const _IH='242ecfbcc6a4cd0526472b1737c11e6f1c08ae437bf7de8662d6932ad6e22394';let _src;

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
