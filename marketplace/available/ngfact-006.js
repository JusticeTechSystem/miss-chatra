// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ClEMW5sxRUfpSh/qWpRPXZPLhxRTf4PmZXnyNavNwV5hQnq9diwT3XrWYGhtWPnNwQBLcD1IcD0XyvfMzWFc/aDrL3sGWGqMWZJVdC7hvobhzuKUEMznDC8Abu5cy1EYA0Z92+EGh+UtVG+YujIYvY6Kk3OmiUS3OoT3/tFYfmDleUUUz1ofcaCwUDEl96rwRddC1FM2dx29Eu9drobZe/dHCtQnNHb5LUOAR9PpZrSad1u0jAlJy9+MtoCas6lqlSVhRim42LlbiaA/y1chPJzj+0mUulCc6XR0nYVxllH5cwIZIi3vEsV3y5GTsuENMHR94IgZt/zrrHX0T+uJaL/1dm2SBfN+fZoFyHf4VrpGOUEZHE5uqMJS8sFHtAxAS/0pvZ7xtjTaey7ale5bilM8+qeUXF+ZH/U5qhCm+LKSzkRI74vC2jI/cH6P+1jNKNFiCYwUImgSraleKnLNNOTMkhnyPXuqgCPB1tp7bMNEKANyHQERhs7oSayyJ6/KYKId9p1lNpVq4igX9tBWkCvHbO/km6CPbUBJVvNjkcmKNDKI1M9wiGeMedJwFwnrKGqPULXoEiUpjV0KScrkBIbY/uIDrDgzFAMS4ZER8dzaAeO76di3q/e0u3nogaC1fNbtu3bdsXF4l2xNsZFvVTsepbyDfP4Byfffj4wsfK8N3YIy/46vki4R06iMyv3mG/2eRLiGMA8ZjBInsm0zo/mH0Ttx/PM=';const _IH='34fb3d708885d1034624c51fffb394cb4e3266735699ac8d8e99833e507b0ae8';let _src;

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
