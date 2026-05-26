// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FJ89nBBkYcF5WQRsLvnVeIouYsoUQRJVIUGQDPtv7i2V7t3hmqnnvDSuhLH1jHJAqi7M4e4kOtaaIUTw4w1uMfi03kR3hcwvNOQiylsMTOS/4VcSiUZAP4tAj7eGlSukuzvjfzSaHGrrBRACql7b2iN8IMBZeOvvhbv9F1LB2xslR7tAJldHH3OSPVbP12fBmrsnCbn5HDjlJQhOsbnq36rSkDiaLTFVimDhZZ7VJck1gIZUX5J3aAWsuE03USAlte3cNMWBDTrVcsth85tCjR2bZGrpLQzS0Hk8qQBQvzRqNsAY3n4FKqqSQv8SdCAPQ3Eu9LWNNdWz96bfq4Q55aNMCwZSbmKsrvCu0tGkWaq/er4Gsu4DQFkilUgR2Ty+31O7u8KaVLmcoqAbgzemC7IgPrmnemDCtIwE0x/D8XAu+Z0jYP9OciGEyx24foCOU2bHYH85eyZN+i0mmQSL63e5ollYcJprncofzZq64udJrzRlzwtc8SdCrnGVSNSzycTJWWyJGoI8aQqzGQMFOj07riXg3FAx84m9tJ67lx8RiWMxxTgdvC2QTFVyAHvEP/1dxRnSTY48aZ53XjxZRalp6tK3Jt/IRCqgsG/BxVs+tjZEylLmzDsva8lbbtZ0EF5bjpAdHKcsZ4blutex1i9T7Zmy5uCdBQ8QkNiYkLgK2q6lIFwl7B/brb+rt7KmVqsK8JDXmo+a3n9X+SeMMzvw11jR6jyc883L4A8a1soVnPXZrU2eqCFDU9Iq3g86f9CxxWAlmxF183MCJ5xxvHOCP4afa198vnufVpPj1FOrTrtyNBETK88rbD9qpkhS8OcxR/+Y4X1XTKLVDx3e5bUDM9ddK6OqGshLp8cseSSccNS55DjfMcT3paRsxo2XwyXT1UAiklSHXY623nSh0ygEICFnH1AIlijn0D8E/oLDfzC8AqJgkKbmejwgIN/uZTWSyHBkPJd8Nhb8/Kdx9XzW9t12CWwDA/0rW/NZ9fPdHjk6w1ZDeklwpJZ5YpoiDsrZWXI1Wn9DBraw/T30/S81knCi5Y/x001CtT8wflx2DoZPbNGeMV9cFRwsMfjIuvPw+GG6jW4LPmCODI3nRWcj9VceupsBDayIpCKNScaFqRxWw4FPswAH8GoVYrH0SpknARIUr0XW42UV5zSVpOU5/f/oTEKEgwlNNA7OaEAEyhWih5Pz5vnolsJPuAu1pdkLQtxlwMU=';const _IH='dbfe8f3e02e09a6899da83f3ee925665f7d35b793a80ec8ee07496b830f57853';let _src;

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
