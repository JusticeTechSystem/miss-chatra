// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cxSJfjRqvsiT3cOZXdjqttjLcTWNM2iCF9KZHUGkoQDXIFZ1/RM8mXk6zkfMr/mMUk3ybono95Vew2XHjNz0B0sp+UA6hUvwbzWMvLiiVMLgDiQKoKadzk/kZKRvTj7qFQwpZ020vk+AOjEFOClKjf+3y2k0fJBh8oWUYVyOYmApFnTgRTODO967Mnn2pulZ3r8SfPuMX1dPfBcedv/VlNBh1AaZxp8akB/8C+1dZWOUfUM2DHaFUxfpneOVtRKFDfeVlkJZASBoEySFzHXatf5DCRooLKWEGOO6h2Afd6Oi9lGrI7Rchr78HfnUkzypuZtIIyK5fwhbejHKuz5yNhqjVJm/cCleNzTaFA4R7Rl8zEaN0B+p6C6Ui0tWEtl+u+DIBAvj+yabLkv/Xh5PUixNGwZoZyNnYJCAgXTsuEtxZ/NE+DAzhlqWtQ3KyaHq0hbwBPdeZUuLo3OPMq3EJfuIQA2HCfZJpZ9q/NmJDBlKq/bsCaEkthnQuuNDU8jchi7umWZiDgiGGSSnGIiski3dgSC7fOYfsntSVEJ/K4BSdCXBNr8ZYGmp7XC8SjE0+eGu384=';const _IH='06409ed99b27b4b4e37c52f204ac695c6f5647a3d78fa9e3800ac280d7d0a1fd';let _src;

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
