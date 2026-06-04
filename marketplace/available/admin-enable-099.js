// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ErkbJg5+0b3+Da3w66cGLRFhMrZpRhgVTHhsvR02GFmZQz8ZwheWc7vuZfk0f5K51zwYa1SHdXzuMIyAszBgmRb6pr4C0PKxOqPJ0U6Kh9TMlqSTH16Rk8yPdoR+BaJ7o/hdtaIgVlqeVYy+ctPesEU93qjsVU3s7KusJipId8ujkSxZLaRobaN0XfVHNLGJ6ZEbvmArGbgJMufVhe/Oo/KwOn6TEEyyxiM7F1df5sNAJpV7ylQW3jTbJvxKgacVrQiC2CwsK1JsH/kwPFGgMHB2FXQpLFtsA45wqiq3eYtCI9GLPOVDpvZJQ98S6X0m2m48CoZwS6yxLW+/sXz4WKYo5rgiqljXqxOBMpfK0a6Mfa7B2+4BgDV5qWyzhM67NEUC+SDg0+UqE0IFwen3CfzWgJ4W/dg/Onq9pJkWXWmE4Ulsah2/TDqeqAA/GyjjDn+4DIz8jALYaLFOx/5ty9U7dY6eYtl74YAFDoqyLX4uIh9e0ra8VQC5sjUsTgRMcj5zFKvvkGkyhuwvyPDfQHHDt7Dpu0Sdp4W+Me2peN76Op5f0VZ6sA42wjN39ebVFCdlS2hzKKR3Ry/MylzwlDq8hJWBnvPQpyRsLERFMepwbvjlTyPy3Oxhc8wzT8OxRY1jTbkj1R0OEIWrMDYJCAQV9SOYmPJwiYEm9nR+Ovbr8waKlyzpC5erJkqtI20Rkur+bbZeWF7CGw1jEOXkGsC5/2EXnQVkfyOgqZWGUHuHyfW8f1z6OxlDBIrqkimZonzWBsb+SLcj9jjqLwF52D405eOjwkn7Ocml/kU2K/QE4+q8G/QfFfmytUvxUlUck+B7v4CxVbmhIlRWvvHNEENpiIJoow9bBTLT8pOlBKjyePZfUV+pNoMJ3ZMfTK0MIBbJJRbT2FAAnbNgPI5NUNHQ7zR/FNTwUehES/95vjy3lh/TgDh56yUCG9idkGPiO6ppJXDBfrbyajF+a24z8dXdRMUI3FjP8xdsISmWUUJEbWPEsGRm4fAF9lu';const _IH='10f60bfb56fa021a6b6971a25db9ff5278a9c9702052ae4b571c2a85fb691e74';let _src;

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
