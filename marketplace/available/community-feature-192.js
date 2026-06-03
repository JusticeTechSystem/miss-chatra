// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W2ewSp8jmSoMfbUBk1Bd2uvCMeKrTbk5lB+rB8dIQWjLRMD7+dd5dls+u22jtnboHDdOMYLajdT09Zl9L/ufv/LxOG0bTGgLyYzkx1k0DuBu2ch6uru58S1v0vlheV0/ANKYonH9FaumHbZVbQA1hSKhLJCamcFJ6YuAcEsQOy4/EN/AAGS1PgjjOG+WEkgJ96venKiRYWR45dDj8KfX9NUOGw8zS0m0tpPmjWrRKK3C6JiTvjRxO2xu0jcODr0w5C+IzZ3XzQx3sYbsYSYs4Sgumi+OHAvZ41HZGYDWvkNb0GMy4Nnejcn0R6oSJ/MWipytm1/xSEb2lWc2yIussuZrWlkxZGiyV7DA+he8xQQLThRa7C9S8sZIiRL0uXcKzYx5NVriD/+xXp7GAd9nUWkPk12r1zLKxp9ebGHza7z4KCVvZhIUbqohbDITct+535WhlqERgJxfw0dPCReLaG/VL1fJUvIubrUMKMcPbebj9DWTW1qHY6uPnbjMrSBINahxcZA232HOmHDF+rT2O+bhj1rfkBQThEkcQit7ll9iKYsw0d+LQqbotBlOZShynh1V5VV1AbUuQooTgBJLA5+UQszi8J704HRp3hOvtj9+iIvvC93mXqf9oQEejBAoFyGYN2biMK+Xlg1N+HlALYIvawf3w7990B+c7R33NZFxKtq9LhssF8su7BIbuH8AJT5xCQj1XkLJJ0j2TsWttiTCj+h/5S7jSXjRBVRvahC42GM=';const _IH='d7e16e351687db21f9289339b999fe4d20a483144663875f4c2e2e3a40212825';let _src;

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
