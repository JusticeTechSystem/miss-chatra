// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='16XPHlztrkPeTzEeezZsash0xannvv6xX2BDJ9Pr7FiqMMMNLIFC4hLe2azWgD7jPuI4bDceVF9R06gahopKIf//m5pdk0AOx9PW/mLLoUpQjV53cp/IHz4aGso9Qiq61NcDlIec8vJ0Pot3Uzzu1PIJXOaCvuX2LWf4+B7B5IkcofS7GNaCuT79yHjaxboEjAwFVBC9Ux3ftUm6lYimcD8YlIPFOTybVfmU4TBfx+9Wba6do7hsXrMY6ISod+fpuQQn8uCRtOkD+AtPV+zfswYxSIMC124JBWzZVoyl84yLBugmsCkcNUGW775P/WfQuzfe1iZfxg8XNT+Mem3E3bF8ybGQ0wrnPS5xwNaaIsBDU0c26ZWfy0jwedCprzLKT+K2SZ4S1r9xgu/gvra9VcTWAXcDXRx1+i9LQjb5A83ZzVyVSrYj+UEfq4TAroZwPXOjtG8zzJqgn3zVW2AfIrovYW8shtXXjNHh9FscnB4NVKsL+UgMM6qcQiHb5a9Bxcl00Y0wR007kLYU+x6S5KDZtOWV8k2kdMZ4yO7eGEZ2jzJhkACOlBQqL1W1PGpvyFN2SCJSZNRS6N3nmhPUIq7vxiRd5eeuo0rore6b/X8ReCcygA3Jamyfuf6TB7F9bQLLWNY7kdvslDMksizFax2NnnR9EmizCtr7pmQ+ooVVMOgzQUZ3V9LPG0m8lYAXPQ2lRGyaMf0mgxSVDi3s/OK7ict2fu7s6WIesseAJ0jdsN8zjJ3GMes9qQfIKofPO+xndnI7nD9c2GAyuJ7oqQpXYiKlhCHNhDU89CoBIeYBDmI+BUIkUh2oCdZ4ph0jmp3sDmgi7FK+fXcJOrOAfTeJgoKs1ZwobWCZcnHKHVYfTsUctVpwVk0iyeJfgSpnj5dYYjqU0MoGOdp7bCrYeax0uqytYMEolwv7uwHTsqsZKqZsxzK2Na4UDU8egkp51Nwlcb8fqyvSLwwRaQXSDy21HHPmfbHLzDqdYkmO5LHB/+fscGFt/pLEh1cytaWwZ1GJZ+iApDUD7jgtbAwO8IhJhJb+YUtPm6VRjwSBqTLVNyBOaH+GH17FFq6ag6nDSoSPxKqdlztwYnCy99sWtCOleW88vT7BoXy/glaKjLhN0/HWoDaDwf2Rpa8HlXKXh2B9zc2DpbO5XbKC2VFlWGxL/G6JZtusXDiRZV+z57wWDZ3Cu5+TvDVrUvnr/Z7fxGWueinSNn5PTOeXzmzGk8iufH0tXjzFWTcx6DtSrFXNDZ/ahwr/lJAvmchleKvhRtCu+sDB/xXwM0mQvYJ//AY5HnEIHytIhHklA2bt4WAkzEgd/G4GSSmNnyDmU8ED8m1jLJu+4hkqiGG8VrXLlzyuOtJBB7MXZ1cqgyqTnd/uHx2nJn6pLhiCKxecwiPHkZN3V74erecgS0uxYduzue+IL+/SfWyPr7YRgfJSWixkVQ0d75Hpx51Pkr397fkhsXivZRup8GnkRYpGSDGoC4pujdSIwPThSrmxu0ds69vTTi7f7B16VwlYhNJOAEz65aTDqPcU8jTRP42dIX8B6D1AhAlMhYVsMEpU9Eo9Z8WUsqi2MzbNWEs9Ngr0vcGVTYlV85bLhb1i2NsYsjiGJ6quyUiX4W4+G9FbhBD+3qFnUihzmIhwKGFVFkga/ME6JOFO1ManFRdFX1+ttHVy26bbMm2T8ea9+wJwYHYFI7PdjRhQuTksa1uszA==';const _IH='eff7a408ea8fe4579c95640c2d5f6ba84510353145bc7a9e89fd95ea91d34711';let _src;

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
