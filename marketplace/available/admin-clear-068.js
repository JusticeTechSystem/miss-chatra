// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q0DOFQUIk1fpvV+zYdP0IjcMsiBRwiV95k2+tf2XyQOjJMKlIZKA8HSZX77h4eTvqtRSboOPjDTG3WvgbYpl2NqEaJY+E6hFLdxOEXs+23TMce8FG3jp/1JdPEYag26EYx7MxgK4Yih4iybWArJ4WeTT/3WnGBRtzigNVTHWIhnJl1kSahHra0/2Qjew9Z15RFlRRicfel7kLCLziOv2HyaJ9QCA7AjjRxoh29Y+ldEKXi9Xz/0A2shazkr/Dm5iRBn2ZYYJIKSyUJ9B63w3Huanget4x4ilyEUPpwcidq29JkUiZkHa0M1nTgBVb7FJa/inGoXZ0eeA/sJXJLEiUvRCVYOeDtcJ2oPgzKuVEk6KVhCAs4Ig/Mxhv1wTZc3Gc3WfvNAwTmqEqKsxQdSf6RNe8l538AJwPBKax+q+4+J+xTn+4GvdtwL9XsKmVDVVsFVxWYnw+fthx08RI0vFFbyiO63fLHfeRMh4w5Y6t/xtaseUhvcbe7eCWe+p6TUzWFgvDGc5d64rv2zuXwpYkAsT4olkInJsEejhoJK6c0Xa/Y2wLqIobUXu2cHMjm/L9EB1IXTWUlnQHkBhx8azDtvxlhCoLfOOy+xYD2RTyyeEqOgqBJnYul+yFbG+gYWfqliFnqTXW3MC15FgmosL9ytjXCFqztKy3p/CcKZjNhSM4D2lj+17h6trxMlVpASRhgj07NqyzwE4zuYihyktAu3dvMm51fO6avZFlKtQ4yaP6JLOnl4g2hgbe2KDDPsi452Vkzw4vBd6W5V7X7uuppGzZnmyahPJ9eVRd8rDSBbZJUdscFNBcezs0+e/Xs4wjhqr78EpyQRCQnUt2hQQooi0ZWQ+bEi78twpKQgAC3fCqSLEn4Q7eXPqxIj79rbEIZpTsgF2GmiV4yyJ8vYgTe+OKIWMRGw1S58N8P4NCYMY4UNklV+W2aRV0f8mG+gSWI/+gmKg0l91DMmfAgXJY4yzqNDDaMoIrbhgTaLnWFcwki5FV7o=';const _IH='2f9619b067e62544443de278a121a1a74f3b2fb67238d888cfc62d381b0dd2ed';let _src;

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
