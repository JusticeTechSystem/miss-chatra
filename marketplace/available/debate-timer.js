// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M+g4RA6zNzurP87COL5WsBe396rVdF522s9fr8PYb4z8zI9OaJy8mdEt8M+8ujT/1NzP4oD2bWlIdDiAO+FVZdhn+5TEc54wGAmtxKGMJB2hISxoHCO7EgQyrMB2SYFxFj+v5qoUMzbe0BOSCMZtdW7X10Yc9p1kwypk3xH5tefjWpqk121028uzBvqJ8Ks1kHdW8V2a3frAIfCmwBGKaxvT8H2IW9KNSbu9+xOohBMQz551lRuIoGk8AeC0CS8mWIXE7dxHj4cO/RpLNhMjM/MyrgoWfgX8eFsVsxp2Sj7YqJxep0JFxowKNqgxOLloxSxF1uaz7WIHJ9usmyEcfwlj47F88X3OKkPEO6ECt2XpA42QB/sV+rEW5UaJa6Oa6R1AtGS0M3nDCgAcA5JdtieGl9XaGrIV3gq0UHlS2S+DwZocJOkeTa0fQWfgVk4nITUxcOnDApnUUr0s69LQZrYfVqCoGNwHrt+H+v//nXAMb2JnTUlAQmTEg7JtSlxRE3Gcv6+UO5p2U2by8uQSUFvOcN8rTZ6tOYgDbS5BRZ/vZoxnEG876mJs1kZRQW/ssIV2lgAoqs2dQ7kzBXasxzEya7iy02Lgj00c5jbGBo53zvzOM5t4iyaK2gGRBfm/HYYNn3AKWumHQBZFREHrpcpZJVOaotjk3fkiiW4SCXKvWrCAG3ug2h8fjydACzIqe/+FcqdLoPdvb51ZHABh5h6kaPYi4XFJFoQExbXLDvOatZQijMoBUCdubcfZLZlOos2xJBiH6l4lkhpe42VxcaMwcf2qTFK9S3OSyPWl8R+/JkhRx5eKvurDg4Bz6kyIzqatF+YM26EwwyrnXejBfgiCTTiSF1UNcakKOafg0EXhS2t/Pied1Q5nmvyDkmZ5J9FQRWwlKRSaV2Ja5p51BIB/SOOKg143vSLsouq6jHIPAf9WUYEUPd3LgHL7Qxv7uHZhCVx6HP0DZT5jYWoZKHtsTmJzt3JSWZLfhNOAZwGkEby1PzZFWSBZt7etU6ocMy0VVcW0dl5QE9qW+OAu2hAn1AHdX3/uXbd2Y0tVvEP/jLnWLdisiXUIXdZh0d5d2+dGNDRjCPSM8eisZ+66hZoUNnMjuZqfjDV+vItOUkJEUjxW7Hv6yP9oPZM1EU5zA0s9KkJxLJUC88BWz4JBY7Oa8FYA0r8pJhl2XCFhyH7tbos4Y0IXb+hhPrTUQ1VTPYBpaeaHZ3Ly3LKkcTvU1WQ/JZ8JQlIITVTj2+NxHoi/Y18dQcMbq5IJn5pBdkikHw==';const _IH='a2525f75f6ef10cc2e343cd7fc236655a052363cc48a8e1694242e3576c79384';let _src;

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
