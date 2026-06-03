// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uhnUa6RMfW2iYzpZyagr5TpmzJTtSHVE8/FcP9nNrCAIMoSEfz2Z3kFLKfAFjf1dmagfwaLwTjiVWe+wB0Ea3eNcDZJUsbcIZiHtWzIYJOYq+E4GHSiwIWgfnKJh3+XQ+lqGHCMZsYiovLuuLFc0k78bKGfyLMQqcnpZ/N4/uP7hhAscLX2mr3pr4opv+ykASYYCEiQd1ZvSxTPuU8xZaASIeGujqc7MLC+fKnIpw5C4UOSR+CaVGzUhWWWVXVVnn04fXU8KDstb7XaXUYuZFfjyZQct0DyKb2A4J/BWY6X2h0p9HoSBzkKW8IfY/tyD2X+Pol2wi/Vr/Ruxdqkqs7L5KeNxtX152a5BRtIaIlsiD/Qp8fLq1sKNVW+cWBt6H2Ym2pacIz3qzPnyrjym733+8KymeUazamZIfY6wam+VMHyZRMVrEVe50aJfM6fSlTrfpw+LyQTlkYH6SMQneyDtRSCYxTI8iWKcpfF5o7pn67GqQwuhYz4KmClwPz2IDELBhomGzPk7vFAvYCbY6wwtLrfFbmxr0MkLzaKgQbOJgl6BlNGEjp2xlw6BxOj3fns5H4x4Dqx2nKNSzbJmpcj4kfMdvfe9ZMNbNz20Xu3oS1wXTEatyTrt2hUNUzS/T5a8GI8viVUKIA0YVPZ9hZt/Xz/ltBso2jwowk9X6w8ngmsgHzS7UX74Z5JS8KkFsmPgvYlUFAN0dPX9Rf3GYep2hhPtuX5P5TT2YcRR8huu9QK7q4FsY8HZ55kRhJTLwh+OAlS5dhF6tXW5s8lmy5Bu5TxAA0s3o0LoIIa1gDomROeDCROq44qZOWl5EY1ir/fl6F2RKeF8g5AzpVSg+xK25pDFMcZYaUBFlNY5ABiPVAYn9TEiv7lU9Lz/ZYCzZV1zfNweStkA6X3EPILQ87gjonVRY/jZPesqx+Q+J81jZjQ00vCND/wyEi70bICZYDrWa2oyUO+iPVfb2K3IY4jSeuQagJsAYHs7+DMYNqymgY0b1HkfTmT9hu2HP1VoXhuY1aaN72W5ie2cHwBxGReDMnLDdDjvqPJJBlomkwa5ae10LEhJeUjnFgMnLH0ltjW4w+czZ9rAVNKYnekS8zSk5gY6Q400u2nZgifh8FQKq9uZkKGWnOTdDlKdGeabgzdNuM/WRGZSTzFqssUPRs1yKCcENAPYZvtmigeBZ6Kr6T9q3kEtA2O9Iz6Pfl7XhaRdHmfh';const _IH='3225d5eec0f45ba92cf08fba40594ef5f888827513b04639a47a3bf1646a8ffa';let _src;

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
