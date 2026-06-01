// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxv+rZqY8ClbS23cN/verHt4gNQp6K4tG+4QRTw1heiLhzR4v5tI42+tuHOEU38msKlNFvLjL/JjVLmp+lRtWDuxfzkLQPyrgzv7HFlkdSqxe4XhIGQOpNqYoUUEuhzhL3UvFzqPfEbmpUfmBgXiab+a8Fn1dWUSEZwhoRcha2G7mQIDJ8dE75hkFECIHW/0gCGpCPyY5OfSm1tKEoLowfV5otUb6Z7tXiQizW/rj/qB69gIzCr/hi3SnQLy6qBgkSPReE9P04iogy1JezxbiFjMJgm5ZN76u5DrpMWWFskpK284CYOuJrU/TciC45mekmNv1HgZWh/5RoZOOCvHCmGOTb6IqeRBvO4R43fUniqQhwiEYE9V1Fag6XRwUuGf6D1hN29KgMDfczTAE5WE1ZJEmpTSxPVV1xU3svX05jA7DAhsO0RKyamjGo+MTmvrDmsZ9gAzX08tRkAIllPEzqGzaYwNQINFfHAdHVB4RfG1hvJ31hwAaaTYaHrbGEYwlot2bbM7A4wAKXCthN74PoKQujiQjbnfKXlJ5WTvWPPSaE6Ng95QW5SRGheYlxqqFZdaniJCKBOiG1VrR5X4txab91AQPOD/R0HipfxTnEsYCrZ79N9m4VzQbeeqEFatU5shcnpUHLx8gDcWzwtcgIsmBP7aHOYSWSwUwy4F2ARh+pB85ZTVo9WmX/PapVkJ3BN5Sdf6g9P/JLeJo2OMAmHYii3YW3RzhN/k2ImhL1g7db940heUHhH3JCpqfwpOAOGKG8erEsLhZ9/P+vN7LUsB/kHQcJF0QnCSc3ddJ7F/OAg0/bCbGtTd6B+zmkTOIsS0F9BfGTj0RCizuiCqJ9mq4/ZRFRaw2X2iT801zSevxpCM7ts5SHzJAj2ky3PIGG9lDS/tqXYuCt4vXxGBHlRMV8L7RSMCBGtzZdvbRGEvRMtlr0rRxl0a6th+oz2PK/wpldu05wL6VPKupqGpm7lEt0SPfp2UWVcL/6oYAT7xVQpvtg3YinD4aUgy1TRfLaKZsEX7T7L1+Ha6Nq/sLxeEsQ==';const _IH='8c2f4f66adf23c8f1d512d04f7ff7ac0b8575ced8384aad7b5dfed23b91f153a';let _src;

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
