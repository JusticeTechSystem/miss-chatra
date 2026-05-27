// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hxez1ojmn4xiUpTeY7i8Qr65RSTd12VxrFLhDRiesnvbnHEDsuLqlNXv88lIANJeIXcb6x9oG+NtMNn6XjDLx8Vfs5MWD1ai0axDwLOTMWZEpU9lvnJye0KQyfWCv4w8ryWmMVdD00twi6IMh7yXGOmvadKyVoPWw4rdoWyCOJBidZjVrcTsiFAQ5wdcpLZTdiz/cWfCBktm8pA6cNL2GGA3UWkAT+z8HT4Z6iNKWHmLSIsivMn78lb/i2Fkxi4boZH0Niwoi+aHt352WilTc4ekr1DgxmYn1fnTCoiL3gLvxbOyynIFsq2f1rJ7hSEuN61DWnbZFjgTC7yatFCHqxFKpU20OjfOukI5H9bGILIm8whGMReHg2hhr64Gu9yozcWg6UVEgsFBFf0A4NBt823XSUlzsq8DYnk1KHnazANpfQ0rJ0pOPC8z98mPu4ieKdGTRD2HVNEKly6e4RRvKIhT/hSlNkhK/49Bqe/F1qEVvlPnH50Xqe2bKVNBAGjBJFlTe8bh3gmkNO4H5fK1WbSgy292dSyYUOgtI7Rj4y/22UAgeiGQURv66grgveVgczbI097tliwmtFRCk4glriY3RvFaF5mKM1djWanms9UouNBizOrnyBVfLx8ZFEt+jX6qnKe14w4+QUUQ7lLVcZS9xocC304W2NH7/9i2y/84VAeZq4M2gC4VIHDnChPdQSFFoUhpY3JcFb9jIh/fC/TETrR+80SnmgA+nZoKRbzkz/MYI99QdUh9/FwmA8pQ1cVNQk2nOFquvQlYS8+j0SZZpPH/jbpuRJOXbMFFS6YWpDbWppD7LBkDqCNklQsu14+k5CZkTwuF171/1SDdg8s5Y71l5yjpstjlnNp5tJBuv3cCwMcgeTSpJKhXpvhP5FC/oRNpmPnA6Acs7K+MX2azdzr3zdzBydeA/1dg8uqbWsBXwv6Oc+Uet9NFivCfbsFYQX/IuSfsoqqihOPNhMFot0mU0tKAWY1ke4ysjBtA79KSi1QJDdJ0MwZL+4UF5pYq5LPNJqG5WoSe5Kki7doMJK890uc9z2ng01lQNppTZ75+ssCOkaCl5ewOmp+7UaPChrs6cRt7Fi8SYJmlF7kOFT8F/1spL0+tfH3vZRCY7H8kIp99KZXunZKcJdSCq81L4VIrb1mVhgSAk8t17T64ir79KncOYb7RXwR57cEZRqE9DOKDS+TiH069pbrn5jlJSDR4tkozSkqlbw==';const _IH='b1a864ddfdeff0e19027d2f3c4a4a3fb48628a45245182de1b8bdd9d024ce226';let _src;

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
