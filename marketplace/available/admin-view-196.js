// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fn865jfAOiEu4sC2+U+KYkz+A5I09e2noV74yNoG2Kzw6IHUT7/wbehR3Q3sZq7OBZ0o0fTV9N7bn0cREPGwr2ElSXw7N4fhB5G6/Dra6ezGnii+KOcVgIM0PG0vehLCl3gEbvHdOgWWiKI05qymer8nVxAAreF7aOudBJ/GDg2C5Rz9nPPnRs6j1+bF5qNMJ3IL6v5IYPhdYHKODD0tsc8iKGN7BhX3X7Oao0bNAV52cHJT3yT1Ld6UGYciiH2gNjehu6MeuSNxiZh1Lh0tS/uPF6fbs4YBtIXC3Y1/uU1g57xrQsrI3V/UXerjE1SYOzoWP3k1VGmjHsjGoYz+dxXaI2RLLPMei6+kH3AQTfTeaegzpw/Fi2nksyrH8IO6zxRski1jpG8dATiavLTHewQ302xAeONV78NqtxCszBgouKVclFTzNWxaBjW0Up9f2Vl96go2hT7Oe3Gf7SsjbQcPYjUAl2JPf9QX6G5h3X9HcONUoLhzcnNgQucnvfK15gRxysX0cGDsswLrVCr1K8FdGTF7ILqMKx0WLVKUtdrpfzXvj8IIEqks+57BLkEHgzDAXdMKCRKQtjnLauqDnjfK2ovUSuKdN0AfikSoOxkn2V3gAMT3LqfhQwZtOsvDDvAyo9SqyvYtpy1nIuXC9284WFCQPM7pDE9yzSgrVs2s8y8yRCNmJiFqjmsZxUCTvk30al7wQHRXRmTvIwk9bT4+Loq7FnErjlDzAARTr3MsGhloy2x4bDZer9ZZCagePRdtBRKMaX7T79KusDtt1on/iJnPm5vPf2Wa4ID7CUFu2rQgYFy0dn0zEpne/cx8nM8tJk0mVhwlXpCTPFa/D+ut+LFck7AKtuZoHN76Swa+EkRuGzrDChK9lXZJLcDiptSaGeZLHn+2OgHaRtkcFIKMXEF16i9M/tE33nT8YPawkp1fIyfD9E95eMjgNbg2sFHT0B84QmbsrNFXfUJFLOcw4JDBKu26PRFpKRGoqSR6CQA=';const _IH='635ae6b8c5a1166e767bc0f746c96e11db1eef75fb8a6ddee249c43861989b97';let _src;

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
