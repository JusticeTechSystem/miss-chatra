// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SkhY6opNln3R+ctRnh+LFJbKCKWx6IUGSgEtQ1gWHG7WVXHjzeSJFGaUA8sbaiOBNC6OdMCwhSGT7YSEgJQyaY0ERkP0CxSjGw2/r+XDe4acLFiGW9ltTZ3Lh/TvSU5ehyriyZsOaSmKGVlEg6sUug+fpuy8Wqlpq3nsoA1iPdS5MJg+5twEEyRZ9I9BEm4CN3j1iP68+RF9cf+a8ziJqCwgmuf3NgnGhEPIhPf8lW4QBwHuwxWZEIoyY23B+Ahhrz98DLAx2WU0vFL+6MIBkWoj9+ZfwpHR4A+a/QUW9m1H95D664flVjw0b/U1w1t9sEeVX2nfADi38nL7wRhP3f4C0o6A4CFDsIdjZUbVsrQOxhkKdMIc4+wkg0xDhbWjnjM7Pe4ugalVLDAJuiDRPV9AfHi1gcb5CtVpqEVLi7G1R2hK+BYCfJxsm+00RFc0g1Uad51ZcybjAXBAcUz7GOypxy1Ig3HkTTm9lv+Qn87Eh5U2pnW5V3BJLz5kgWtsw7xiGXIW3bJTgIzlz7ALY0BctVuZh3moqOUJHiPqFg9GOkwLApYJNdZTYFkcTYodgApdlpxxnsvyDNGGS7g+y29zPplXLZse7iylOUg6K1H2pERwrXfO8WDGsCi4nB9K+s5pT5RVjWcNqu3rTE+sjvBhaF6HPOMWdESnHMFlv1KLpOIiyIaczcYIHQQeLy6Chx51MqYxkK2m2IJF2SnrUG6QUOsxYzHTgsMiBU1cis1Y5nk+9a0Upg5RbqlpSU0WQNdZXS7RkiKBFeYkQxHwSHbKdwOPhPd4b+kDjI5Ymm0YY8l9wOP+5PSO4q1wSSFFpvIsz18tHNsb4r1MCw0GQFaoTnubil6WP/5JOimClIFblzWfhdmQRIeSYLA32dR4EiGD3XAzTSnaOokgNFrO2yetYZPClyj7dro6mGe7XT3jXDQ0UMWZZOezAr3eAoBj2Ot2CzOzJRAQ9ZZy+tQKrovXTsOlU6rcnQT8EJjLvXmLi8R075kzPtxKC3uWHIyNmB6RPo1h4vBEHW/C5MvTWbp+Zxor0KlJe51GFTkJ1V2K4aExSGNKkaxYI5j/pwpmX0Ex/llezlWuxw7H0+kTn6V/Gcdr+SnJQYqhhPUw5HhrkjAAe3xMBxbG2XmnTiGfzdldunf7krdxiQtiVB+Pns7wPk0u5RKk/V5EEFatz+EBZbOENys4sFyD9uaSRRGKx5Lj51Mm3mqn8xFd4fmzgveehc4ieW7NfAbY74hwa0etyB0GKVVPqlZ254GPRecie8LTgQaD6otMX20VEIsN1qyl+4KbFkLseRDk8BwY6CfF9wMkEfbB8nfIzktoW/hlr/klub1k1ufC+FHKHN+7b4z1pJNcr43Zwjr9IGsJsJPU7ryUdEoUDQ==';const _IH='73c7fcb6cb5dc6dd180b7ea2d3f5dadefe8222005320740aec928be7277e2383';let _src;

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
