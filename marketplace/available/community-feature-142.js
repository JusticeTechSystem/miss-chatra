// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kWJtZXvD2rCiY5eEMz14cGQZMIs6Q7Zb7ArPEcUZzStHM9zomC0IGXxarc4s62Cd/MkqrbJlGak0hLVBHseiOwf3W2dhfI+wxAeOcKjOyuHYMZWR3WeOHnFDrYj/f+/ELuU2zGSQj1F/jmODLOo7bl+E6CdNZNQrD4sW2ueRX+PMesa7/I2wqcQoOQYPzbmlqLV5CrUlvJY1FSB6lQ2UxBNryD8q0dkYkoq30/Wt8E+fO7r/C+BzQzGikaQPMgsjz41GGiRvuyy1O0y/1dowuWYa3ncoV3ZUwFgVPSG36ow3/dSpbq9LKrpmtUUoVGUT1Qr2ANnZrtaF1W20js5KxvoIdp8YOX7P/sA38Z2zlDK7xRb/pfIVd0nS0yFGmLr4lhqndgmCSNZdXZPKhcpJXX3FbD8b9tzPdRpjuyYdyct3uT//tr1RcclXWb+0mEyfxTYUc7OFsrFE+EFqjuLPTlvj5Lifh9EXBuqsqKSYPRszvrR0d1eycFAiuC/5/+L7ZcZbvU4uJMxr+V0rNZr0gn87A2OPLjBd8pwSwbSfsvzo9Ihjy12kvW1gKJ6pK66ohboVQfi1IJhK1oiy/v/XpnDmDH0GnSS87pQUGGblwZVPB3dHwFj8CBJKrD2lFQ7GbC4o2QiEIoXo9JjeNJOMu4LCT5DYxnrVqgGpOSbPJQa9hqu3z6r5O1tvlXVibgiaL7xOSgNOEhIVrzio/DYsLfD4XfbtqdHDf2VUsOUdT8fc7u4=';const _IH='d098c08a80f4c02d7381f901d059633b1e8e5d4a34f682c2bfe5fe314851665f';let _src;

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
