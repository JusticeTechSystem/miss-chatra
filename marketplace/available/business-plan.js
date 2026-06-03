// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qJnqUylzo3FPT+H30y6mttyvE/8dy8+GMHdhUMpENZPbL3kbw1ieESFNGnEdLOiOMLwS7Cs2vqjbmy1SwgVIZQGyykGxgFagz+hdieKhY1mUFf4tpku8CsAt3/pKCQD+whQYqio02KZJABSUIbrm9cfpWiK7h8Hkk7/lG6+ml6Bas9bPLOR+HnQuNUaBpz0xdGivBHh5yiWE4wiBzrPzSZdTOOjv9zh59WkQ6g/pNckYZIIqQIVpjdRyYOAcb9EpQFXZ1DJWMNBGhHV7A0SgsB9YfyCb/bCxaHToYs9aqbR4xITjvk0QwBI8Ul9sKZbSFN0YBQQCDA9G2Y8MN7hepC3prXmoRPNVCegvYOlNOFOPmIbcudyh5LIJxypI6aqqnnLU35HBshdHFOomv+Lftvf2HVwXMvxV7l5/QJ1i/PGNkf1lwEiSjDaLLgIMQ9R5uyZlXt7vKpVZIFLBcQUe+13SJE/mKWlsM2SGJlwSbnzxCfg8qPeOg5D7ObNR481lOS1t7d4hjk+UxNAATmMN8Z3U2M6JRnKlhBq/dcb/O5GRMj24GumAWECTUoquHDPF/U4m2B1WrzdeT10J62O+OMXDqDPNvcrciCD/doabs7jLNJ1/oz6MAsPx3BfoYywUbfQmZt8OH8qGgTFdpoiC7VVvmksVMOXZxOBrMWMCcfWC3LT5HoSGwYJjOQxZWHI0SCYWox6O038lDpqwSINnxAwsDN5JoOkaMAF+ARAKLk54UsZFvWURvU2tHkGETEAKcl3zBu4VYo3EbGqsp1to5MH8K2kHiFa4O/Wn8CQfWXkode3xg9MMSqi01UmoOTnfjxGVMDMjkCaOsetA+8zi2CT70hsZDaQO9ijZ5O1wtVE+CvoFR/rCBl1wEOUxwv70Jp8oqRqRK3q77CQ99xzT76lh/4dZ1r2F0c0yYbBQXcxP1QLD0FbzLsA9PC8tJMtcrvJR6zUzvJEJhf8W8QMX6gziWQIry9yT+pCZ+qWddWyzIjvSZs35PdzJqKwqz7q3QMNZMp3O0JCLRMYZuqIX8KJ5grILkvZdlRJoJwoSJmqw5e0PG/u+AUSE0Ds9WJUom9gNJrfXwLcLWeVc7v6+ICZkJfBF4EZ+MpWTXQC1zZlTJn/PgdAP1tfJA7YhdhEidtOIELFTAKwqIuZgBwIgUe3oSkhB44qmdDAVbiNvbsFOFaxv/syJR6z3C6oN3+LWsyTzmW7pQMFU1FKB3tI2NPaPvzZTmHjWoE8BbBCah77BVY7qUobDFjOkIIkAKZKZLz+1//JHSbhuOrsksWa28HbjLaWEYKtT2YgFF2JPGRTyuBOWel02/hzrXojMK4fIXfp+sLMedj0461quCE+6uKv9sMHCMmSQFx9ESL/T2J0zoU4fitOFPfnnXsHheJU+uPMhz9tWVikex83wZ9exintxiDYRZvJ+c9z4YQjyOlZUUcpuSfkoRMikYcS2Pze9Q/gtz2QLZ/xKMmG2sCzNd3OgsYNja4w8xlv7Vwr0DTH6XgHhpOsv8Lp9rPRELy+GXp5kPrmsxLyxyjKDhoQFjCR6fLseJgktd+SFhbOP7RKEfBZq3oXou8DGW6OBPrDlZxGrHdaR7eaqc/DSRnyhg8ZYzRmKvWx4GATvURVNHrrjIgZ2R73nhVgPsAa/r1In/PyDfOtWgz7XUS+lTSL5cq8UyeEprWcTuF3CBTvQDC8Hnu4hv8bEOw5UYxoTiwTubNqjvI8IP3ccKJaN44tO9H0ZMaKH9ojtEq9l/+3MtAutth0FR0XJqU8ekXFkg+E=';const _IH='d4637db2bf6ec994181ad329297faea4dbbd92d1c577436187987723cdb64fdd';let _src;

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
