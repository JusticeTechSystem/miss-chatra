// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qYUU2At+iXBmQgu3XaiNCfDd3VUyvSKXjwjbOtrPIy4bGR4x9O41adn6u0noy2E9t0dM7GDWPz5Exm0gYXDE0KcL2bTQvrGvsiRT+TK5+4snR11WBlIPXFM4Fgd26xwkKkbDTtjtqvRJen/WPm/pEaW4HgH7zLZn1MZyV/JBSZXpXqX6U6yVtihx6V5hMHVGWZC0oeWYWKluxF6D19umwCicsno7dymsI1uwdXnEk5IeXn9FdxZcyAyLaSHzYMeOfA8bJj0kdQMZ6iTikCKbU1BlXSOm0tJSaNX645FVYyTGZRebzmSzCaP7XdTa2KjNCFmvbNKhJznd/br95BZP5NpKuwGaq/ioKwuGdt3Iqjs6b2gCFiFD2tjygt97DfUJMWBHSFcDNwQeNShMeDM8fdTe0NJSKYJgYa/4db6CbBqSX1JxwF8ZpzhYo5OpGRqGAYVS81jVGECNQZEwU46lJsUWnN15fSiM1WIcG47skcdl440ynaSMhYyMEqsBGh+lyk01B2Gpbh58EkTchg1IWV1VyDwnBRyECU8JWiPRnmvn0RtzsHow9Mso0sUK5NCvL8UFwkl8OYpXSx48jsLHfpfbvvZOSiRT/Lb5EfQWPoSbA1bRXkBS3JsskddiFjI08QZa5m+FIOJ7us6Ko8hO03U5Q7ihX2JDirbLguh69Z4ywyheQzLGuzSqiggbX/qSZMTrRDspLaNc3v66ikqtalInpB9a05pcuwuuQHPFmHBv2SPUfBXBSGjqLhppkn3o0e0szppjZsFWTRChg/tGKErJvf/GdNFhWOZoCTpzmt/lXDeOd3drGw3LplPKv5tJLZrepvgaRN8gLYVpgAMAGkOnLcCNZ12lIAxNkiGSQ4jON8DCazBxxPgU72F4tYoaqrlRtGIAum3jHx/K0ubUYe7N/lzkGTvFu0HrLOQmH39teOUGUi4B9phXpIRsXpyDxdiI3Jr5xB90+Gy7Y6mXOy7QAvNsjTp/yGx3TCiv4Ki/UtGxC1Ygy+X5Rz+ociisRUeKkKUF+evfz/T/QJnKNz0LORm3eMwVRyBWq6sszrHb0YQ0DvfZbvxxLo383Mqcs66KRRkU3R1hwk/8vVnvaedf6PWuMydT3DQeXbUdoYMDmH23p0riy3n51QG3ddRj91MKM122KXK9SY7CKp108X0nYahnZ0MEflDB8AT5nx5aAXlnZag7zCoNhnUQGRUGqrszrbP/EXT2IIOALurFxRN56o3e1GobVCpTbGsH/JscQbTWQUz0DIbVxvLiJIZl4h2Ti/FoiuE9hcB8dzNBUVY3f8TkmRbQQtIZAUyH3f9xt0z9a73fs29wOhgED9QX0Pu27bsHsf57NVNgmSpJ+wPYXTU+AXVtxw==';const _IH='d5f3282daf6135cd9013fd111c81962f88b65c42610d4c0444a6fa66f0bf9e85';let _src;

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
