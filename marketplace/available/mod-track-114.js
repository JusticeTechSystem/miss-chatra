// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mRhAMFuVHhPWnqQX8w1d9EhcEkWl9f2Gz8pcBUcdVUHSCcND8svIr0IJV9CHh8HcgrimDk0aikjmFabbTw5F/WhZvF87pt9iPj+RmyLhaYJByrDz4flmly8H7V8+eEskI6Vf0nco31fxF7QYgTWeV+scv6Ntd5jDAi9erSv8GNM58bcYOQlcpaZgXXMcGcvkgoQjkJ0YzeLXdWI2ls3PM1sjqi6hbiGnWWbHZyPXDn5q1wYI1IeCz06az9GMmEk60y4sPOmuJyAFP02ITqeW1yiLiLTzCpPE7eVqdW7TI0febsvdWKtxUBXMmeNdOmRTM0i3NeRa8rDaJMPvX2W/4EzdOGCT4gERPx11j1Rr7hRxYBYIhXSNjpA5z8QbhPGbaLBAXUwDngDRl/EudOdh4leasRYzsa7grzq//1b6UYArM5RtLtuSPY8ZWXLkzNJt6lDlPYUtzfkCthaq3LuIOo0g+uTJYmKz7kaY2PMx1dUVd7Ubu+rCGUsqE3g0qPxw6qmU864U2w4f5LhLm7oUnY8eohrCwlqSfTDIwiR1SFCWsjzcEtv7yI+SqXNT663LzEVh9rTIvzTy3uPKRoNB7Iu9RoGm7hK61ROqzLYg7nr8z80tXCIyqWSEjUufgmCLf3pb9vm1gMJe1jOmLEt8rBQRNyuUfox9+MNFpFG1UNSmCD2X3ScAUL7zUD/rDGijafM4vN11p4P/1uLas9FCQFsC1RapSsrmnPT73ZVV9cwm8mzm9FXBiF+u9Rv+0oAqjTY9irlOUM63+VrSldDP0eSoGGZ/BpUROmcSiHDL55BJTdl7dj80IvdV5ysXJvAtuQX1pelT8QokAtIp1FBiWceH5VF9QGoAdgNK1iIg5RkmLC1bRAriIORD8eE2H4bxd5ULJAz/3v7lJucsErHBLL64rZaaC1EaUt1yAZx14YcNDit1Jxx/a/BcAKWFso8Yxmv0zO5D6YLGByePCGa+dQ9ThZtE+c4Ntx3cxxqx/zYgE2eA1T21b3maQKrcAr3Pg+67RzHJhrrsKCqtyGzz67U2ycSOCDPi97tYZnMToPVSK765BLrmA00uWFymgFrZ8bU1A+YmXOEmvII17S3GDLfVSEw4uYPd098TdmuG8MPHvB81NwBGZHO8Q/gGaDMoMXBsf0cm2+FzU+oTZceLlNk4a5hANIqRTauj5HiZoncTG7P2UhDIPh6+Jo/tJIDewlpYr8raBD+oIuBdsnxT68L72nnga3GgInt7yb9IiR7w6E1cViyWGXTyp5oQUEU4xtIpo3gihq0r4EZRFisM7nWDvL7sMBRdxpHDhcSFeq24Iz0pgataPvxpkhMI5H7wwpCkSZRPIEUvVth44oXs7a/uL+WxD6DRYEYcfTbo';const _IH='71a676233a05918703cd6321d8e58cf741f4cc265bcbf3a0a28bbfd1cf3ecbaf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
