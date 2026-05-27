// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jsHPMuTau4TdBdAkg8/5q9ZvJN0lLrqcXghAAkjFv3DNhMhN2uEFSgiyNwfvSiZ12obju5n0Xh3bt56BSr27MMadnhkYnGwFmrwPy5en8ksidGqz9w9teyy24uwnIYYWDzt8lDDjuvwOpLeyCvipuMq4zv6ktS3JgRM8kJcauTxHAdW/ThMmzpoP3Sp5lAzAPztC44OFALGI6eQ+ympg8h4kENwslPBJHPHF1KMae7gc6LdAcy3HNj5Omm/bmQk+b9fCbHTDqmcDfExKqRz23babJnyHv/L0Xb8+5U9eYPVz4gt7UndXgAXM0f7hASMlCGcwEejn+4qgg4x7pyjYLSYHh4/jjwP0A9HnoP6BEM6U0PoYa15Lx/jR3p+MViXtSn1+OSIu1XOS4/j8SZA+haaph8Ujz8jhcWmgqN3c0jT0n+WDT+jRu7OQMprknpBOoiPdimUy1ZvF0zOpVpsOhx8+B2OwCYacv5mNtWjZGPskRKYjuLePpDj4cwYR1eaDPVd1d/GqnQosZcfXDFIkt5Tpqd6x82LI280uheimobA2reLJKTFLmnogfy7TQs8C0UHqqEAP35iTsrmoP+rLkGfzKp00SrWCefPkOPlIWZg8uKiP2kdYUJOa9bP6yAUAu9z7+oKbrZgyoe+w+31SGd79YBNU0pK/9diMlHFLx8DhS7jZRP8UjDEBcxu5iH78eV5bQde5ctCkNBhKoguMQ3jaUVsFDXwcZuGIBMg403xNu20N+hlRyspaqcCcEgZzRYC/AI2ORGb0WlP1m5TEE5g8H0+oY8xkwb4HtDQIsNCAjgp8fAeLv9ZibbplhviOTv9yNOuj0QXYJw0qqnlMDgU11/cXklBK46K0cdtxVgT7Ja9CiEZzBdo0enXEwYwb14NihecwOIXNqHbw2ILO4yxUQnVfyRXte1RTr8iko6pqmj0SKvK9DQ==';const _IH='f9f0be6427a8edf980a2c989ef787c9c7c42826d1c7b463e4fe250a41bfca8a7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
