// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FQtXmawf02tQZsH/5in3sUmMC5ytsYT2pqX8pjbEww7L3qHgkZkhOfn0yiVb7wRrs3alsrlCMhIkyueI3M2K7rgDZ10DZlKIpYKAXVgDYz8RwYzKXFXZ92lJL0mN9pU2GjtWpj4TqCr7br9kmM0pIDkn/SLwH0SUSO3RSSAC2V25ggDmf6ZdDDQb1bOP+qwwcyIjTuLv9zUiIZ4bBtEIGwKLUy6lrcDu0rfVa3h3Q+q2HY2b4vaccnov/4DO+r2diAGint13V733eg+K3eNXNyb/+8QfUa0LU6fvlkjA6yCFJx8RzHCJ2DHhU5NvZYCKdO9XMU4JK9wWA3VWOs15lEjacUDCkL9dwGxxxPfroN1E3/cnERCtvUBBKy6N0EPFjsGE6cNHURE2+0Af62gsyu3LYho0crr34DvIurG/Kacl4HpL80YyDzwYUSFO7ukyH/oGMFlu+qUYgEqdYWkZOUK1nnN9OFf8XhsKG8UQxeU8LFAd6nViEC/TBWHOTULA7cAzTMp+bBAZGSj96GkHZoqdh7aD6Yvt1hNJyN5lcURRES1fVdSROmsczVEbFDkocSSIM0bcqh1Jx1lJ0Ou7RwaImDQQN6pBC+I/N2Vqr60gJ0hzG9ZxoPNIZW34gGTpZDVJvbyGV7bav897lhuuoi/yL6Y1wCeD8lUeKoG+K/7H2rBy0M0Mc/cXjcSV1if7WPiFaXveYumYslhqtxGHVeO+ywtwI1U11Z7ZK6Oliaf/38O+XPdCgDDX1r2CypQIfMI0xF96/EmWAA0ZJUZaXs41Z57vQjV5lwg8HujWTDgXeTGVGZUo8559deI0lU2S/ZGeBbB4QIor8TYgN0rGdQsXCKNlL7f4UjQKB1oUmMtTa9fHxNrjut9YvIUBjVqQXY+k6UhmyuRbwugBTRVip0gClv7eoWDQg2AQiBHSiSd1DKUEVSvAhZaMk4Lcg3yQf87c8UGYM+eQq6OU3Eyip7YHV6vrpa3Agv3gUlKfaQFX9TQt967AC5pL2SxPTQXNJr1HKCWCY2dOHumL/Kwq9UHbFydWtCalT7l6px618+M0A+u0iHzF2M+NGciZ+L2Nlr0f6FzEn+Age6J8pP+m+zYTxT+GweIp+uUUrBv9Cl7UllK4BJc1o3niPwPkCZZDd3fqk3chnBPdDd7jCDV3tmSGsugFiWRAJUjiO28x1khsQbJBgtAhEioJrclOr/YGjeGVKmFEPfZxWFOdhE+1A5+Bq9npXVjaJVmnGnKP2e5VMcoPamjW7u75/R0E3joajdIPx92Mw4AMTXokacQ90JddMJCRGXq3S74XzscGPiflGo6Q/c7hzGPPkWsIPyjgZx+MLcWOEFxFAJhMX4AmZU+Qs7BIC3OdoohbmatFhT0cpdrCsv+TVazc7WJJtAXAR1I=';const _IH='bbfb78539d68a228135257e796de1d2cc519e1b590ce4026bb3787ccc094d0ee';let _src;

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
