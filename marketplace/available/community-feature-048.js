// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UmcSGTmlHcJFwJTmkCbwxNS7XOB+WiE3Bbji3ed5L1abME43jg9jByGpZAlYgnLevjbmwW8/97L4H+EtenpUsU7PNrXx8urbVL+Z4/bkjOG0ImyFG/+fTyjLG6NJmu43nKnyt8B2wEVQa0Qsy3sRRDYvuuqERYbqryeB93EtfIRf6GsOCDEqk9E0s82xrnId2jTYl2G6xlcr+tXetshYdPRil1Ap+dZpzMGjnin1gF0No5Pb8im8GbMt5h+yQ0TQgReUO3fvVbk6fcsYuD5MWVvL66y39GhFaPTcxfJIw3oBJ8GMP7HAEBtRx4Z060UcyvaCAgitlbOcZm3aiVKkw4YqP0of8s1esLCKbSz2bs9kdXpysdgj3WB+Jx3cBHjdBA981NtYXT1hLVJXylHQwI2GAra/Do2nKiQ2q2DDlSqJTy7x3lcOG5cTRYihxqZKPOocTUkNWTr5fpt1bIN9cjUGEvzr5vi/bG/1Fophsq9RbFojbFHBVXdbEBOesgYAbrD9hGgJEVtTIndrLSDQxHqkQuVB+wZiwCJLKYCV3qDHIbbcERGrPDTVw9bMNVvWRShAJ6IMr/BhS5CgAa3av5KYjx804nD2B6dj15pv1w1r+XuOLkLtNZxlehkFCcIOMj8pFY2l92QDzQoXxjv3JIq3K9dmRb94xa21m4BQaZk5D58LAJU2AyNueTSbqSaBdgEA0rmvN9j1q8eDJtFiJ0Jzqu/zgmZv3Q==';const _IH='d3ec1bf0aa3e7fb7d19c70d8501bbee99edfe8adc207282a3de4e75f2f8b1f04';let _src;

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
