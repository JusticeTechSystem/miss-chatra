// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRle207l10LdAwFiamE71PMGqn7LLK6Nt21sji2V/q1OAPPk8b7+6AbZsmNZ1nWZ7aIQNdBZL1tiYMfAqn5KqdALpSD4QKr1MQDrfxqUia0D2u23fGIygU3h+8jK9sp08CsHXhbwZ0RpFzWUhUYBXLCnHqLA6WPkpxM33Ii4F1fgBGZKMMQvLrCW816WAISuTYcPEtZrzj9SwTFYy7Zz2vYBf+Pxcj2Q4yr6k3kwn3+ZNbfV72NKE4C04P9apo1VXLYfhCORZladb5QEB6AEgUrbMgOsPAMwXR/09/NrKwxnsJn7ODCTmhaTVGlEyM0nAOHjv3BmefrrWKw+e535amcfxix4uTX2yJrirLOTC8IYrQouhsKwSnjF/PGcuRH2oynUIZG/IM9Cezq4nPYIYhLKYLZ9IDUUrROYNlzTXhOxgEwsFw0rvlJps7Osewxo8WQ/kPCZx116bPyyLEAYHYZqJ0b21ULmhKqPebvg1+gO5nHp1kVRXMwOlvfdDgBwHviAjeHdHL0kFsZmBqfQd0UuJFGXwEZarv+/wO15F/eN6fwXJgffa7qoVN/UxOeQUyZqaI/+ZhC84VrjKPLldZrzaeXhEn47sipf8EMnv2rLSAJe4x48+2y5ZLZWADcgya84wE8Wvfat4FfhEfr6hD8Gfby+2uOAp29QKdVgbfHs6+7mbe9CFJSP3CCLdXdeZYGo57R42akXiZop1SXzHA/JEbb5CuO0c64VzLA8kG6GfNXUc4oB4YzoLEsJv86DYSDrQ0CTNoBY7NPbHAbK/FhQdTkRBjunX56cB10Jz/ao5/qtjMc3VcM3/ZbUYlpcG5/7MvkgdrH4sfxhCNDuq9uvvZ/cd2mPIlfEMBZZ8UmmlKWfysYPg48XVXwEl42df5nRjaun+j5JKEl7lERlkgKqOhSsLgBKCFhYvdpYauQfxwN3a+rl/lRK7qwIcJEw/0Y3l/Ex742RbC5uAR5y8Qi2jk5GwwxFAVgsmbZXcH50ngdourCXibnUaeD5gMKIRJpQfW46ti6/Ag8LqFS+Pblzk+3jihmzcDF4nbOm9+Pmn7ZWBb2/e4e7TjinFT+sFRz2JPvQikrSztNqXLdW+BMWSEuInY0QmN6eiBvN+qQuVb5agYLRJxtY5IECU84WqjZS0nluopcZafqo/LQHuePgjZRNV13YSh4zBrRm5M2MfB3wp6uiJRGuQ9hfAjNu0vOmWh1GgLBOYlCAsJUwT/54Gwoas3Ya1N8z2bOaAZQbv5OYV7F07U59ggMXfyydkJbWNlGCGFWngL9e6PV+Pt5onG12Mz6OM7b2fPb+jtuwOyEECFDkr5CSysb892zAjMR/m5A4yi7KHzB0vOEpdlJff54+GyEXDBOj8ZBb819m0V+ibxOBsI';const _IH='e0d86cc2186f5846ffafe166f4f8f76de30ede562de8512dc89f13fafe62e387';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
