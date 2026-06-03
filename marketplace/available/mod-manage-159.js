// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZDI9vyGpxls9YWmzvhfww/MELKejzX35ZSFH/OV7GbyBtWl2P0lTVmoFds8lQ1HSIzlg+IeXPwJav3AARscb6L3yQeg4CQG1HG+flaLYEJVPXmS2VfsQ1UX+lITCAEzsXSVCr/1eIaTGQLGa/K4BYRKTc/9ph89TJLhSfbTR8pV2WlKx7MssUsQ/di0Fe+DQv9mcvWMUlwX0nWQ6WK99Oxys8cQNJ0an2NIYzcZQl756f2jOj55DWY6IqwXdYUd4pY6WxQLFeZuux+1PcweEGI7O+wZF3fgVTKrqTgLKj7r8JaY8nBHBR1Sprrh1/I+/QKxmCye3IoM1L299I80925gk4iW607EhKU0k5CtOwGKFWPsMGyJr35nU/rfrx0zNVGQ1cDS7DIW+JXVUOCupnZMEoVkhNGXcRHiY4KYZRs2duqHucwh0KpAEWLToPpmuZzGLMHJ1HTzbsORgmIB2ki8yS27ydEni8nJ0BnF4I4G+YPB9FqdsAK/1SZg6uVdZpdqr2UMSdAfR7lfVQLtpaJ+WPWikYa00yd2I+gUKusZjpHU7WKEsYaSdj6k50iyxKU7NA+bbkPuSViaVq48z4UiYO4uu+b1T9acp9dh2EF9BXajl6FnTGab64RUIK6gRWx5+gPSqx7EnQZIcNjb/pLpri4+fgLmsH3MZg3mGt3HvlwUuJhVcCOnVrha2iBMhyO4ZTjrorqHvTjtk1pMF3ErOPoSFryQQrPxkWTFhH8vFgPhs2uFLf1lLSo5L4mXsNHpAe4aXHLb9HNLtrJhoY1YKF5gViCg5xBUoLSRy2Xv3ZrlnBp7gByEaGsu4NpthDuTupcKZYpTFKRTkRg3SoNvQYZlTPBInt548YPhDeQNV4Fbc2C72lN1srUu5qztMu86vbPpPNbrq0SH1OBQYoBGmWxESaUgWptyg0Ly1v5JPHGf9OKbX1NXfw7TCS80Oe7WF2nC9AVCvr6bJPGfn50cY0vWmTjg7oBMtD52IcKE1onbGK1A4xk7WpTNk00eKusewI2CFvgycBWFrtzGW7F0h+Nrfq/YKgiKjE4zznIibpUmuPjWzrZCJa7nTunXL6wF8nmu34Oef40W/H4pCF2cp3ceRef5eb5/uc7Ps1bExVGdRw1XpfqMXQRq3oZZ37lYJtSz6WFCfL2xGdpUsL/SqmFf1i8p385etGytz9FQrzExvGRfsbTYtJm+hX2YkZleHDRVKJaXZhmwD4yJUCuG2+8Ujlu0G0TFXmrQT9t2AOZtqGLTJICR/DhWBe0mqrHi6c0Rsub97sll9M5SC2V1VdNZtBEXToY6iiXt+UlvM92xnhEdgOAgeu0zyVdZaAVnpp68y+2OLG6jGhvqZovUmvhJZQSxPyDt131I7d30l3Rs6Bo8Jaw==';const _IH='7fd982a7a3543081b7dab51d03d88a8d38f20e50d2031b33ad2c3c1163a26e21';let _src;

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
