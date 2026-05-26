// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rG3V4wCPzNX+KkOga1uGDjjIj6/hD6SjwVniVJYJgQKPAJIp50o3t2TOOViqJDwEgk5WLSUWBgAiFwHv79eVEnTrDXnu/5rDJ0Xev0e5IMEfkzDLEVPFUQT3ncsDlC4N1R7RQiS5rJvDbbb+9guzG0XSk+flx2Cb6m3GIk8BSQYtctFcd44HsTwzw2I6yf9jCtDATNTvhseOFolQ6Chs/k9RX3SOjA4VIvhFGwnBqG+XmIRF4A0NB+AqAr6iJN8RIFwh8wEtnsBj1WVcifQvfISRxLdYPB13Yg0vmCfuQefJlZ5icMT2q/gQgnE3YqO2yinybTYIX9P5JJo+CyyEK4jBa1XhswZOwI3COPVB/nZI/1O8wPADGoPSOtuH303ljEtA2Y1DSZ7mAOmMkdBLMMmmSI3gs2MmenywOmR8NOCCfOZdKC226qFDYiacUhNeR02qwwQM2Cxonee09NUvvaNZPak7jmikTigvGFJxrWrGAG7mm4Kmj0za0e2DjFKoHkMF/3EIQn0MHCUXcYN6JaPTWvwdkEkDO1YpXwTwbfZyAFbv3uuaMU9EHwTLgeqYeDTvX0F212mpA4vyIJctA30IoVZxn0D7YZKhBSL2Uf7zdTYD4dsZV4aSjYDJTCL3crbyvrZFTFtK1XoUV1aeEwXX8kjd4+F4qjFv69qU0fAAFdx/58opwMmu7KG//Iz+Na6W1Wwfn3bElTXcjJdvvKnxiJ9X9y4/Z0eCmNhJ5KG7+N0=';const _IH='dade5728cfdf6f3d6b1430e25dc58b9e7b803378c63717ff62c603a0ac410938';let _src;

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
