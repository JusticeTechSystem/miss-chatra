// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SyPmDfXzuGpGqyTxZfO6gswb+HunBHcIdAiNdDjXVXVBf44CII6wfC/ODOY81mJ74p4DRqx+k6//IyEAN+mrvlBabvJp29dl6xU+q9aYjoUgdh/O/Li/+3bArygbdHFqkpbzosalIkD+wH2Xousd7qfbj7zGJx8itmrjNnISffFOM9eX/ibCaSnzjKibWI8TfWCNUkK09+/EctS+cRyuaymW4m2w0d1sHEj0okz7Wso3CQOhwyFN12YAbkYLorH6LUgIsjwq72u/O/gHzzy9Ytm7mOFMRTH0YjBvXfpWxegKA522xBss2Y6/PtmDdf6NbIKDfafShH+RwGzAhTkfpj88F/gREDdNoro8a2Ash6TZO5rIrXnMEpMIy41M+q9Z6dALJnb6jLgorafC/oCxJLoGemc7JX+PQYQqZUU2s+ue6yJivoS8OXCI+8FnTDRK4gcpmqD2A+42/LwQeV8BUvyE+VEGtb8RohuuprAuE82KN9XwUi1mzQ0REUBY+aRfrUZo2ds4Mpsm0Eec7mQAjeQutLi7/GYsiyOKLM5IIjSjKdkzvcgELyUye/j6dbw1+2C6htmtmkdY7hxSyL6125xaf1HZ8JGP4MT24XxaqrTh6SN5bpEO7alIEoVYaV58Xkqzp0fDCr/4NNO8m6fO5A7bv/8EKeYXJYNL/95GRxTKDBiZBGifyvKA9DlI+JXdToo8hKi6tiSUxUG0Rp2dXvqOS0KDg3Nje87W5sJ37ojRaauJ0fEKmFl9hR3g8oZNsn25CF4BitMlan9KysTw2mzPo1waLjgdgL6IBACwJft0UfJ3/AkVtJ2RR+j07lyPUKDo+hAS/26RyUQg36EpEkRszgoL/HOFMKF3v5kJ5ydYq4GU5KrVFWJP+mON5ivFl8W3adNsqLNaKs1EBPWiwT32grN37yqiKokmnsSl8qdk7Djd+rx/So/UVevyjSQ6tv4EzGagEQXJpKoFscXLk6QKbCH5eLMND1ZztBWyFBgwNhwuYvwuW91FcnB6zvjYKgzrFD6SJeuOifebxrz+5m2UbKiJ0Q1AQ0j5phWg+8G4QqfKKiod+8yQSLBdGU8Pik3S7tjT3JybYVvVb7a1N61qGIB2NTVemkmQGMjmQfyXLdVjmM1g4OGsrUmbnlT+nxYP3BMAOESVjpGV9ZB+UhYTxokIsp1ME2oJ+y1zv+qKPNLPi7Rzg99s+zyroxBaKeoYv62CW6XHn/RGAO2x9uM7nuGmlib2DfNgZq24UdykLV2CpjQpiucORMcolMgKFd99u074ndmknpu0R52yfxzD+tC/cvXHOFZVvxxoGvSRjAAF8bH/t79iW/VorrhiUNhlEJ/lBg5UPee3Agz8dV8doyPUL47J37Aefnxx';const _IH='bde50cbb4bf9d454732439d1a88f0645ca12d84acb9e120b6063cc38828b81d8';let _src;

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
