// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T4hauewumbOzF8XwOCiBeqjQkz1zx02x0/RkNJpQOEEs96karoTphYeq5J+6Gm/BwDRutzv8On/uMAGbJuLHlUmzpGdztFDJsok1xJt1xNqZjEArmGH2AUWH7nmt5ziRc4Ggpe3thH/JrF7fsWE/Mpqz3g/q3GEK3VCTp1gk3mdylUyHrBexXLdKrVdngISifxMSw6V3YIBP6X7gL3Ucofp4+Qz7AZhYbhI+Lmmk6eOa7mBeuPqXDX3mK83myZ7As2/dQJgZ7IPMaI3M81A1J/cB7qxmr3BCIaBSAZ7tJCAtm4Yy46agDezIHjftITOHVWiFzVo0ER3mTeiaE68GQl1hIN0pEMI9unn6bJ/selQ77+fN93bQdZaD4sE4n8NPw1sJZWbSHlOH+HPP4euiSKQ0aT9/upugi+XmP4tQGHiKonZXxHjS6m6+scsFJEzfstOL01yuCbudux9W/it/asuJ+m2C1zZxFtY/29F0KDr830EiB/qps18UZNWxD+nqtDCT+/WwDwtxKSRAo9oEjIrjAsFgvZp6zra+EjP+zcl1jMFtqVcRH+iokNfW51Y/BqcRxZM2mXPkjyU4st96VYuXH6ZFCR4EmsK1aNJ7O/yBpeFc8uH/riUB+UXIxFbA+tjx2pJKypXMRdJa+nQq4dfpoegrQ6gWiWvtyT54NyrMRFcIkYgnm7Q6Hzu3hYLIG5OpjBQFnmcl7/f6fXSRjdrRYw6Dpl3Zyt0cvOKkQGcAe8M2jest03pdOzF7pU2eTW+rFyIBEoJ/a6csh4guUHbElHRejlzyqfmpwslTTJ1HEKvsg6u/Hs/dBxkjlV7MucjMFBZq2t9A/cF7ceLr6nOGMa3HMfsNz9mJFdDMdbY6SE8nLECDfUZk/kJVJdawwWrGmBxit9TXFMYiMAWOkth7XfQ5x8mbd2S14wmOqYq7aPym/8UZEgebOfDfjxWJ3OIgqA1vcyJ4OERXYDpuAvC7N04vFnjLo8xrNmBrCW+9+Tsmvyq8Rz4MtOT+LEFn5VlBAAwJ6uE=';const _IH='6bf4492cabe6566fbaad080f59f01a83058a2271baa391b3df856d10b6b88771';let _src;

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
