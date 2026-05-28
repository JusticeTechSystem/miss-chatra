// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bBCJ2ZLqh/RCOmngOccMQp1Kcw3Pk5MSgqXZJk/WHV0og5fFNXzAypXfDPLCtX+wgFUPO054zDi++o/dq3PD/3ov5VlOqWGBcUndNibXcCyTTByWnu/yz0qGrPAqtyd2mzB2rsmvyk2dOq/y4ghdTjrGNjgqgGNODlm9W205V615oJSLX6/88e8sQFX/McnbfAS/Ny9gGaWX0aNPIqzit9s0XSCQPJ457ZGrLM4RHo26Q987OWQyYUI9YzhLORle0A6Dh4YUvWvKsjFVCJpJkKGgMzX8U/l94RSwy+2zAHmbD/QQqrxbtNEP+mFp7WkMxvN7j4CNQxMVJhJdxHsibf0cnlEt0Iy+H6PE0OKJtEmXZOBM9eEUDRqissjCBu+SmlfQL6PcbPm1Lstm5rIdp8Ymhq9JpSGPhETJqGDrgqNFmduYNNrDxs/2gXt24V/IZhEjDVtRlvpLZ+AWtq06URlDeJYFYzWMHnKefYcWHWMEbF1/U//DiY9y5PIe+Vaf/KfgpvedOSj607O71rMDKXwTbKuODVcNJiWY2E9N1OdKVB2bzTGzeOGFx0fiZm55gSAj4he3qL/lRm2ujCdv6iNXFcjlPWy9A+e/6cQXsC6SJT+bhN5FB8q3Haf/2t3ajUcOZ9JP6r3V38f/RQVKNmTCvZ9W2CPxHLLyyHw2oAiYo1rwiFt9rXbsamIvM0uCzdGWVHQ9T1qSiLXwb9b0aXCM/jtGlYv6dnk/ZF/E+gZrBc1Tauqu7+/y3umHXCEiRX+m78kNf9LHQ1+yQ6NTQnd+vatNotFm9VpNMLdswk1fV5elUftHi/+MKYW87NITQpomWss50gsq4GKWviWOPZh2aNIP0UZ2/Vmuk4iOy8Xbpz3M8OSn9hWmNIQVrZ0YsihLGGly65gd+4pV9HEn9FkVqUPwll6QzeRx/31XuZz26O+dJ2W1tRW+6u1FqBt3wi3OE2YkMENFGHbdcSb2wLjYdCAQmI33QdDWAbZ5Ytuug9Rcp1VPDLp262okyR3+Dbe7J/1JHUFfkEfP0tjrhGjDHBTVqAdz8ljkN1napGnoHNDcHiGKVDg+GyW+OBbIMptgRCTJbmhg+3YZUWNosHhReo22qj5Ks31nEj0I8rFqB4P+eeD+3ZVxXofr8mGjBwzMtZ6ErW8FRQoYfIj5YM+484xlzkYmVIIfupgSzkewW8S3DLCb2EP/M7RyUFM5GOkUsA==';const _IH='4800921c72ec18adff94df08d2ef905d5179df5811a11718237430dc320474b9';let _src;

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
