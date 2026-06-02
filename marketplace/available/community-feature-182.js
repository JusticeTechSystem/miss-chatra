// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JFB7wgaUFlWYaGK96GbQFypHsZbl9ZY3wCfM4ZYks+bFp8D9mt567aRUXm6oetSW5KPWLi2JSCZNQGg20y2uvUQA8AeYevZWMNs9Z4NIcFGGToGrKPvPTnypzRxFcuL5gjDGUgkSWVcVJnnJm92RkeDUX0pko7+AKXwqLEo1xWzk8RZVIRDdUJ1B6MmHcvObhF93Mx+/EfF15EfYn+IBtf7+Qk0PAOr4/uoVicXWAzlTnKd0tJTyOAJegM96wkj9sAwAsveRGthtEBxpHXilg9CuNhpKOHM+ZU5WRGKq3nmI8gopXf58uYsDqNxpVc2Bpae7TRo++FlWO62GqFDDjuQSVLCssuBvN5/r+zSHYeum9jiNum2OUk4bXYDt9iJWU0uC9jrC67JQ+HosqARItawtsoOUgAzZbZXmEJ1VrFN40ZBmxJZfgICkse/+nI0A3OTSZyIU4ZMIadIlci9d/W7lt7masbNkCUAa+KwfX2u5TWUpEnZOyzZ0fTzO6nkbkh0nVYS+KqgV3FPs3j7lx7206+BJ8s5WTHg4hEX6ESDsI3WAXJIYpiCNtY2tT6t8KJS94g2lAdZUj/CsFQWYicoFWVJd/Qa3GPhZylDicTFT/lu4fyvGMRw5YwBVul1Qcq35pNvRAiwYeyBX3cSjMkeUc8sJt7dQXHoemsuR2N/8MvxwepkFuYHNIKq12jar6dwtZd06d5SogtLraDj/ORYcWa1Dh65FARmyrQfWOaxE/D8=';const _IH='8f80dd6b7fb8f9de0b71987659528058279d7fa7f34c6a822f80ac9ac82521a9';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
