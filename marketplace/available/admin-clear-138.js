// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tOZxA4FO5Q6LwuJJkSGQtk1+oIPOYHwMRV31aPoFNJTCVX/wespz226Hh9Ogf6/OgMDinYF2h0clM6TXEnpjuZcvQ4FbgtVT5HLyr0Zx2LC+M0vvnEukVJdS7ycY+bEhRo2EFjZF1I6KQD/e2IJOdUy2UuhWH3/Ds14zHt9ZOLZuVCk5GoViAysP6iI16ZiaRsbd7F3ULpLXfDSZ5cL8m+WNwCP4qAh49zv5U2GRe5tlms/fgdHNWZoKXrXErvrOTkLyXskAnqpn2s67yhEYAioQYw/LwNVLyeLNO5DmQ8zt3M0tRRHJ8mndMnYu8jTQMYywkrrG2gcE/4Kj+i4cgGhbdgnPKqJlzdAXtoOCg212nhh2QX5eL10IqrRgCnliFsRApJwzC6/SVHmQkglrl4HQFN7qNtcyi9OJmJMmpMM1JA4U8csTX4kZmXjKhdYY5U9jUWoZMdpT3TewJ/253X+N5aNn+rbcr145K0QkUTWAurwApa3phgIg2qgNrqx5JQVZfezp8Zbvp/werlKS76veMJRYxE5q6G9X3a65GD1jByKwiMq1uD8nonprTL4DP0JwEoTeWWv4OwRcCBo2wKiG7B3kGb5qhATYQuJs2Kyo5RRaKtutHPWTz5of4A2UpRhdEciiN1/+/Vp2OzhueqegJq5mQKuXZ/75U6gEK+AhyduIzfznwMX3woQCJJd7cAaCBOFseaCN6NNs3RXGMO/1bu7r1MIu539tW3xXSLFmrek6bMVV5uRsR/DADFqQagsduZeaVw/tGjPNXOhpJtbjVUOjVinG32gOW2QCUzI6OqWolmVj/BQLlwXB1D/G/7ZGOdFbEyFWMBt//1A4E0/GAieQGtSbwaBLZr0g8ftj8vORyJS7hGc3WV2Q1FGKS6Mh80Oux2GBfyzvajmUt3Y8wouFmTRFE68tFBhy+d9GLilJ/ik5g4z9uhsHXWxDsDNK639bsg6LXD5Pc2QJeDJRwEcbjNy5PeNmIbzvmZbPwObXaTEugucH';const _IH='27e7579ea75cc20703b168bb08151d1d4005a9dc1463cbd7164cfd7a39e49901';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
