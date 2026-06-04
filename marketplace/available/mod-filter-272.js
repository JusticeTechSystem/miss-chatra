// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0vJ543wrh2G+CN/uTZ/a4AeTdfKUCF63Y6gaJjaCjmYsA6UqTAk954eKtwpZTdVIAbxb9DsBd22k1JD7ZARgmJKQflQ0U8s3lddFyM2i6T7zKGJpaELwhzwEr8n+8y1eCVLIBN7aKGthNxdED+mVmaRDQ/EmxRycmGLPORzeALboE2vJ2WuPv63+qUMMUOQwfyqdJxgAtXz69OEXXObo7jUVKrGZ/73sBluTcRndzpZDei37OlCUquO/GShKfQmsHZIrdllV4WvaeDnPBGKLDTcWauEGY/7Uhu2HVynSfZSyICKAqYBIjdqEGtA5Vbw0k5QmWE9TzEKeZOmUVnchU75Nul36ofVczcijfZAv3ubb/wSVLS+pmRE7lMOyxnJcciHkiGB7Ln5mDY8TMB/hpZ6L6PmYQCppGlCyUz9op+wmcV+E0ami5nkKX6t9Lfhf8IWlyQQ4kWmNjjgQZ+M3YoX0fC0I0LNcGAng2HmEz2EMJPp4NK+Zz1O144+Vkg6F5gonyWO/M2O3xzPh4WecMvCmPtYQ08g3d+h2lgDR5Op+ht917CUvJ6GC2Su6MD+XgaM3+WL5+1LOKrzKAY0dJxwO+wcZBW9EFkMz6MWsZF/QT7kB43rUa2NCOmGlOmEzHiWkFeYaY+NWqOar3k3PAtHx36sQjw3CuUGbFygUeKfGkokzRxMgvzzDJhQiVYmIqssn++bf+EOCZsSrTQ/uuGajuAxii0UrQs/ovSUnIU33ORE/4kiE53SZBPNFNcpeCfTrqx1EWHkzPQfH7/2Op/n3aaqMS9J43DLX6I3jTcj3zfKD3UkFqHNWEnxYKSOMJty0jYPUwlznHppUT+TfUwok+8nHSS2E/rxqcFldotz/CTBKQRT/y9MuzhUBNkiL9NU3W52P5gS9LTKuX4lZ8HhcKRxjpeXT+ceakLgMo+fGs9dXjFMWbYXQmkjuUPfjhn/1IFjbN24nPCodB6m2dJcUrwRIxV3rTZVqpicad6XKAdLS7Slklm20M+xPesdP5+Jjj4+k7EOIFI+9KhpMqJdZqjUI5SIGsI2gNEzsPS52xIZyl0q3xj1z68NO1Oq9mUHaSfy59Rt0JHp6n/TPNachiGs7bA2OYxeM7OOu5ImtsxzEiv7mHRbXMpYAix57NEYNgLnnOn5tSKxarP7NLgQ2PcvF3IMhh/rJUeVU7ePjAGe/UZEhuE81cpwHHP6G8Dkr5EKa2nkHZsWyvQpOllY5Z8LA/GcoWgjWfl6dpBhRzemFyqs8MQvp9XLatYzmhibgpzl4mcEg5jonqGYvWQG/HNXBqawm/lRk3GTtHhmTYknj6xBiZ8eJQ6NdNfVbLLX9YqFA3Gd4VZg6GkCsNVxGrVBgqzJUf2OpOT9Y+j151ZNpg/Lk3Q==';const _IH='73d4e6eb45057a75cdf26af6ecb24fed016eb5fbce72a5722ba899b2b925f585';let _src;

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
