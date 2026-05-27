// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8g+W4zkderbmwt/o+boSe7+AyNLYUrL8G7wQVf1sKvBQwgBnrN6UZT0urMsApQbwahkeM0QPOeBLj7FmsFc55bNy2CdVUCKHHqC9py4brfoxSjEzLgUSpWNsHvmYceFkIam773lpfzIhezTJWdbDzgmBNMHttNDmFvZgoDwYSHFYZfSFhEw49qTDQKSRvyfuTGBnCGtPNqEoPs+p8UH7lNVL7+ZJlpWii9t0bEpdf5d4NXx8Ek7csx+YjxRQpEG4fGj14N5ugjMIzqPXK5nwRg44FckHmU9pvlUXjwvHGzx1zBcxhM7HdOtjfzJEuJi0AzgrPsrz6wFreDBjQ1NpAwHbhiWXD3eZHDT13ToQYm0UYpMJNFtwVgAvYGMR966E3EZLEdCqnGjf6EwF1yAcNqXAxbXxXPjmYHkboVT1NqlmyMj1FJclo+oKNRmaWpV7uiXp0oL+RhuNKFP6g4vkaitl4uvLqkPuHB+8pw4ta12WFexWN4QV1AzRvwC1uRXfCKye3BRAUDnPp8IBNNeoqx3JlHU7gqfH+qMhieXi1Nq/V5uktorCYMRO/Tt+HVITiRVTUGCy/seASHJZvDwpH98OeBdRlUDCRDZLkXdSP8XoY8i2kmEHCgMYPWx+MIl3lJhW/THBnmnLjQH7x0s8CCrGSgLCCmx/L3HYA7fZLS6LeoNQ/vpM8nrWG85uETX0NVmjwXC3JA7bUbR7MtdHr8nOQNxKXyQE0+YIeuxhSLcYbQO9WL++jI2qgNX1wxMoTajQsIkDfKR/KKlPvc+vcLWj39w8JBgvM7CU+Fiq3EQxi72CO2WAq2bLpi7FSpFwmoSnxIQSbenenNSLbtQiy2aOEaVbyGVNUjFyYBqZhb8FCAD2eO6GGsYhdWFRar2tM5D+0dhLHHKFbRQAV5TxfHaEj7cR5GSAVT6P50UrpzqkYyOkEMtlodEjIvBpoL8ynOH3/4E0q5WFzOjl/uZur6/2ZGUJ6FLKyPRqp1eY5DEj0v8yfDSnLR31ucusx2GicrxT7NpzEotYrdx4mSayaLbRL+QwBDo1yF3sfxyaQ8up7h/SzjIFIWdY3xoz1D8TtjLfhNScSxuqQUsYwq1edgdosmShtkwvz6wESxmuJvH0coy96ML9AS3DDmQvmyoOGrutDxzLNnQe58HU07QHaMOjCABhhOo+x/xkIeUnG/gWKq7AhoSqZTehZmDdIAqnYIFuUmJt2kr3RIrCK6Sfsp6ewivVNlHV5TqKZJ75tzWq+ESxGk3HJkKYPKfgxoSbknlrcyfJqJ1Qi6p3GcC5Tvh6QR1FMMU+NCOhaCJfM3odl3FnOIsbJ/u0+QH136vjUWutQ7iYuXhnTYWKXIFEcYXxKFRwtAraQWLpZOCD';const _IH='d846bbe770df903c19e70851687b04ded559b305bbf203dae6aaa7d5b78e869a';let _src;

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
