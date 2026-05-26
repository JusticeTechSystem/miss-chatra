// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PVSQUSNkRuGvRBTB23ElLxyydTOHLVAq3z2HyNKvgRHNpjG+MoxOWhp9OZsNaLuawrpmHjoHoLQVvsv3hhyoAGy19GO9K8oJt4ZiL1CRjq2gmRXowlsjKq2CtwtRW7LKA1p1oJzZJLY8y04I2EQwopgTIcXzkq5ti7zZjiMmznRaAg0uGjdGpkxA9BcF6MtCR7mBjmJht2mqyUMs3XYtNCct2QBuz0ACWxDM2Yo9z6Y6GpOlWmJN7380UwZq0Lo08Uol+QYSjJul9NqmP4K9Rh3UVebq/CZ5vfA8ivlzVDAE/FrhOVMHA4RVHjANNgdowUW5XY8T8jePsYZbwsHeYFW1zSNkGZ58nas0WY+FMYOCRj4HzLCEQe0eda//l+A5v1hvrPaGZloohFYloC33xRzrC8O0JW7u0rWz9+WHYfvQpvVCalCetVqVAX3OSbeYK70IKN4Jyv0z6P5nWLd9S4YL10hd8wcK2EAxCcNbBQJjVvg004lNyNYxaAf9C0IfXJPZ53gzLl+DqHTXvs0M0YW7BU/zi3dVIAR6S9M9MVYNFqL6TZpT+TW8Gm6MV9UmV5iiGi2nTsVsnFWUCZ1+pD2lsq9MH5ulm7iPQQKfIKkP0z7b2N8cFpDgJoT8XVM5IqnjmpmgASM04V6UJm1u5jdt9MdCReSNxrt6nmMDTuNykf8+ihcd4q6bNbToZ2RcGM+3aCio+/x6xIFNvM2Uc8WOOK2MIomnTvcupvVTJBOklqPdUCI=';const _IH='181c123ba069afb1c31b52443c1a22a4e013d32704f8790bea4100bd47ff1211';let _src;

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
