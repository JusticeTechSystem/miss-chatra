// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wh3jIzOXG9db4CPQKvK4IPpPT8P6ZUtuxzOAxnjghQ23NFa3lU5BWnJUbiq42r9ouXawqaBHS5tdvPeJsI109uAiX6MPiyu9nkwHz4vKn8lnw3SJHjYEMTyScE2IUc3p6Hwkztc0eQRaWz3b9SJERj8cPKSKVWB47JiXWUK8bJETPv9Hb5HB5zNWS+fWlrdj2kNHLpgUGUxi5/U23K5b3jFjcP5vSmnj3Yd//mkV6fSfkFGuo6CLypqqs0lvLrLmp9MXdmET7omgN5QGunaZUDM/LfJ/zJBasZycfO3CXjxqHnsLaW7SiXU1hhFANkd57k5BUVTFaX10nZfq6UWASE4GMSGHIi4UyAd4V95Z3Dchw7f4hMjTZmXN+v9q3iK+7taWLbK1KhvO2rd3fB32DEX/2ezdHXw3qYs71/VCIFgPJCHUF/gDS2X8pRTaH0NPIgdByfMepLroJ0pNXwdSrnmq7J/53QI9xgFCdzzL0kBysG0lgGtcnRwsVc0rfsgXD9tf34yNzf/kQM+PFeSzGYpSi9imQrfHhxkbsjhMP/QoBQI0+ANGWi7VUX4x+Vt/Vdo5MeeKvCN4CeRIpQlkw1z4lQAV/dDHX2DZAlDM+Jil7wv0SWcBDY5VYW0/hVqvlr6rBMY8aAbJSfKg3ha4YBhqxz/X1zViAUIZ/NAKNBufmB3xWGLFeZCJUFoBAp22vXQFOvY7FaN+86gNWTK7R1N0O5RElaCppVYjlgC+PbWnzbG3v9hclmuStlwQ4jrN8kuxqDhVxP7gtPtI+Rrrr4z0qV+jkYMLvwitYO0iu5ELsUevBC+9Lc1C7S/0530aIqZtLr7o49qEDtFnm8DaWQ9vDg8RXZBoJql9rQo/zJbTOyxaAF1cfl0oaQeCQbZfibc3hNQ96BH0mag8KzE+WLpZwDI3PVcwHeRR7zojJnc+aZoUOIlkfXYrV+5rJF6h9Vbn6YcZA5RNDR0vqeS8W8bLtT3B+vYfkjxpt21D+JJE9W40BIv8GAVhn9klS+xnlk6pAx8QKY9UnkZ8ysWZeWKlyV+wU8uocYk50Vu+DGaLT6lMjp8CE186HhBvkd6o8HCtM0jt5iPSwVmz0aFxFxrdwu3tGkrKyNm9FS9LbjET3pNCzQjJA+8qME50+gKV2tUlZpRARiXjvtm6v04KR5r+Q4xlk8E+AsYYz9voeKIAAKPmF/qMSgftTqBJpWNppTugFr757tY=';const _IH='3955eb9facdce5fccc88c0596b5957c0c109e003ddd08e831f1196047d14dbf3';let _src;

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
