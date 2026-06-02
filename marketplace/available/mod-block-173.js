// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NUbNM58xSfZEwbgYJz2Vir0Ut+rg7ZaOwSm4/CYVJqRbI8OECmjjI7UY5KanJfRYtOoaVY0TsA6sShuH1IVMJrJlxyIsWhyWI7Knzi2eLF0GUmvEaodlpxSyzm4G4E486fnN6XqRrt8jkJF3ChP2JezPpEMBE7L4oV2c//rI4SXmYP6zvA2Blbfc1ztwTkGE1Ps83w0Gw7aZurzO8MJqhDMqZDle2+UQKcCSzFx3tpZDNpYm+zgHEjnwRyeWgAZf3tm+R/U3FWsmtCrAUpYZRxnGD0Lxd2IEqkgyOewAkJD0NtqTTrLFst6ix2f+YmppUdbgaNiuAJyLJ6dq5i30d0tb+X7OnANqOxDoBYBMsfotEl6dcp7l/zzrUa4iztHo9SJz7IhKIzLRWUkW2byP2TM+vwkPKv20TJ0JjqHnu81JKd19dUZXSV3RMMoSEACQYwc1RJ6vL8GyP2yysMDnYwzIZ68if6KcNxM4LBsIn/f73MEw2nph5J8vjin8Nw5JsKaAkp2WbmcksFmeMxx7cKIrZND7r0n+WLDxatTnr+5T+a3hnjuoUAzFzOWS1NqVe92rmV8/jR+276e8r1Pd1F0dHF27NhzEsrvfqcvYs9dcqUzMcR8bvf7DlwId82ij6hYJG0srx5c6xeGcD1kEVBnF15xglKfMRn7ZG5TH7Pwfz91RDvBGpWHXrn9UL0g/cPkVxuCtb6BExR66WTx3/4WRBRzKJUDfAjzS28evnQBq/lKjaVHXtWY3nH+gBAhD8McJHSvtS3DeiP57whDA2JhSjt86MBnNsDLZZE3KyCvHojCoE5lbwfWtnmQZgH54ZUG923mHNmfQrTJXfxBNndvMV3qB1MY+TVjDrm1sn0qx+gl3sa8JR+efG7+vLsoQqn5wHBSU1sfRboICV/MFdeN0/uliPzZXHDBHkHK5d8U9+zRxWThFJ94xhtMSkbc1mg50b2yS5FVEQxzCUPUqdSKccvaFHj0SN66rAT9T7EbgqJ6kaf0WJlZgvkEgv8qR+aDkGn+jCChYlZUafl07XUn+tCxyY/pPXu0HNplsMVivzVzi1MZXEQwDNO3ngEpVcQcPsv3Eb6mywR12S2fwL66CFJjaZVaFCR+0aIRKTAesLwbDyqYkqFDDSH7rjsE+QqymSY/ZeMnX4xORKo7qa8eASLNNjXK7YalDAyoGKx0JWDCKNG9cI0dgUucBCBXGErrWw4YF29kr9+1AuEghSvkG0cMOhONEaN/eTWgNzaOjcEHYQm5KmTL6Du1wlLtoPP5wBrVWPaGadq9/SFtHMIquNSGtxP/++FNF41KdpJN7SIxxMwlL4Ga/9eP9FxGBkUQTIHCb7KDryNHWLfZSr3V5V1sEtS72uLzL+vL5';const _IH='77104b3db317a4e7acfe82f65006863b971db8768d074599478c7bda01787574';let _src;

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
