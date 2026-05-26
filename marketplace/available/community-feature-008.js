// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7mlnq48uF9drgL9A28LiSUd/ePKwK2OgjfC2G0uZZGDTrB7Piq4QRnC7GepmoSn2mBTDJMWeJbPHpyoSvKgetQEyXf7ZOhz95+W6YRdYstcYPvDFy8JauUIE4mt2f03FfNepkCwuVepoe7ZdHdiNSHXYSHQfN7ydxcTF8uOc7g9zBwGWYGuREjmdQqG5J2UERK1qYcoAh06i8GO4TIAI0Dk6qkJ7hzfBuhVEnxVU1TkpzTdlfEzHwZD48mRc9l49gf7RITdal/HqmlICgPgsArDT0/Bmb5/iIbrK70WVT/EyM/PZsPYxcZ/xjSaTsaRQmp3U8NM3AGeoOCan38anzfO32PEc5mrlxxL85QdW5tIfKDrWvbmGLNmLIyqGvoE1app+S56SFI0TL9a5PGW12l98u8cflo/eIWAXyLqho114EXxmYFf0IVMHaR7wuG3ZbGqpvZnGgCI2AXezgnLwPR92poypxd+SGya4XKHr9wKZt0iXVHVjlYLsjJxPURe+VADXuOv3Xujm1EbXPaehwp70Kw/CCt9kVJM3K8OtZYnZmZbRlczTuYAAluIXf3aOztGfhLphImOJmsKVFO2x3FfF6okBusBzBsxEYO/vbrNRuIJTO2ylSuMIpj2jJO2Gsw/vkMlNVaTnIhVHY2Fmg8cg5AB9tVbuFsvBVGEHTSxbh1UhpWL7p7YMhE68Au6Clte/gVLy0ytjFn9DU30ylBICRLTS';const _IH='7b9554fb6745f347b7ef24795a94af54251ec6cf9a88ee108fa46e5ea9d981de';let _src;

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
