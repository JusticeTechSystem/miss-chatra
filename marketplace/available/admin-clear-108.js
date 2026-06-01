// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5ucTP/ElIxrp8cujw1sso46dacHvhpTwrr//gD+IgmslPnSPsOjyfUyspDfEZxPWRspgnsn6soELUMs2ntNJ1r13W5nLie1ULF09A/LBVu717aGYev78/Sn1OdFWD4vOkjx0qCeQXRGOCvM5m0+jJ4Vtn3yLRnnpTaRvUKqrI6rxO8Ubjcpwh1+cKX4EGDuaNN086gEYo4zmhVXTMp03WBwHKPFe7ynzcc76q2rwCpzPnu/zUn7uO4t91dKyYw5BomL5h5Jy17Be+SkakTrboUyCLm1nWd7vIRY1NoGhnTvzcUulPj12dyNZ7ACUJNT+pnK5kMDutBRUIeKyUYBRKRNXF4gkbsu6TFIzcWi2fNspifU2OTPGL4/3JdZc5hFdK4Wpd2vmx6zXGlDOOBZHKX6f6ASGpUbeyGWRr9WkrF33meO/AzAJsIGAtrNNUZdfRkrErvrGSor64HNXW/7QT7SdVT4neGqBA1LE4xXNFylgNHCC1f8VC7K+j/SVsn+AySMtZExHmhaXj7Qto28ftASIsxgAgLjsso5Ps2Noa+3DQiuCUzrlr8T13cOfLwCxPPMal/uDQKoxkmx2jINH4j6G/zcXJqh3oq23XlFOs3BSsAXncDWSV2BP2KCq1X1RbXB2ICDLg7pRu6zn6GeGiGB3HJhTDVT1tRR7d4e5hx4J0KJ4a+zSD7rGT9j9AmD3OJW4EkVJK/PnF59Ke7y57EyS98e4+l1LWwH2aWo+NSd3SCzUVa1yC8Rw0JJNWFwjB0idMsWxyK7gCkkKXLbPUw4FB/7RW6kXA48hJoO5hXP6WBLtaUP1eCM0nRJc9Me2uX+DUWg4lCN1sKAqmwstTKkpQTKJlzTAxntDsByfGpxIEbL5aeNLneoG8lxxxQl807SgnGB4MzzAVrgnG42OkbEmbNnfHDdPLyiFttjf0MA3OU2dsdYHBHeAGmo6NfcRKt5bG/PuZkJpHhcaf5Dwb9qKIGXy/46myDXeGeyJQBXnwiu2Mgj51ONhg==';const _IH='8fffc520f9fc79a9555e2006bf1a7509f2c4717eedec7e8c74262827323b4da9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
