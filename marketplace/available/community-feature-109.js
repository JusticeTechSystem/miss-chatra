// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9pZVlFiWLRKeaJsskUhb1ekGKBzdqL4v62ozD53bD2T+EG/oa4ijzf4UbGGUuZ7Ia774wNuvgPjHU/guQAzUrxqCYqJGloClnp3b4z2IwlZP7Nck7kCRudlzv3tN9ny2ggG1GEnZWe6ibhT7KZTyTrdNKpfMYf5e3Aus2l+fcW6hGUh+EjcHdCutaT9wXx/clO1mxAWiwV93KJHeqeuD48aAQ9RbeNSVrtXBPWtIeS/O0ZX3wLgKWjBB129TatfJj0VR/6UFrlDJ9Le2Msjr5MvcINq+jP311njb/uuYiJjF7gOYAZ4aYaHw8N9TWZ5hY8UPNpDHHaFJYrJCsb0LD5UsDvgef8iKKaZiwwTxdrojkJhMhL1MIG5psjQhI88rcsSXMbBiR8Plb5nb2Hl4IyK1ky5iJgIlrh8hhcxZ4ieaYovx+RoQ/yaHd54IJ7r0ZOIn2xoCNzdgWetuDMjA5JL50bwzWPd/8QKPALl3J6baZKtlNg0b8gEZwgwW1qpcpMNw96cppKa5nXKWb80fJrKEXLPp3lupn5I+WOtKFqJcE9vCaO2Ty+Mm4ZsSnT7BJ7WT50MRWHGoWmB4B13c2NgVsN2nzSwhAIPi+grIt6c0D5mEx3GjCgmlrlIJEzNbIewuFILxGN9Q02ceb+rDtyXcCoeaP5OSShCZoeRAqpIbf2s3xjTPFQrxDld905Sf1huRi9Kh4KhDFDUPd+OdpdVKGkNFq1snRWmH9YZFYwLrLk9JexI=';const _IH='df4dbac1e4ec310cb6d3fa9b5ad7239991262dce9d5b99766843a7bac3b4fbe6';let _src;

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
