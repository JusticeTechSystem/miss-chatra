// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VDDVkAprYpto7lSamvKCgxFR70RD6vM/zfvcmL1z+bBFUu7aAl9hhX9xpP6ohHsDXkLmM8uup8ux1zP0uTWvh8P26Knu7Nw8FABDaCk6lYHD0x/mcD/6P244U6cOwSk4bTLuPmP9A9++bX7xqKvwrjo8614WwYZPUNf1OSKO1BrpJtYD3IaniFPJAxCCpT9aJZExDQJ5hIk5x06B9+e4VLBXG+hWGH1xnDPkwtSSUQVoTQtjsgfb4DrbefbJdzOw8dYlfH59qW4OE50fQKzCtxop+sv3/1F+W4Og8qb9EqLlpaFVN4XewlstK4eIxf9N94vXRsU99S478SBhSaviwsQXuvTM2wVOEqPS9ALWfcjKVHQyBjl088y2dO+BOBuCWqJT16EnWeBDOiITgfLtBA72gmyf0AMmnBnCoNLE+cukM2l6Cogxw6ve/Fvh0wb7c3rCVY6aYiKUHcpt/lCrAS6qp+jow3L0pMXfs0V8Fu4q5lGj5mU20/k6iQfhEgWq+CpA/eC41rb+1LmmU/NwKfa/49K0wYHgcj+IGY2MlkrD9abgJh1CFoQF/zVy62H3Op54ByRrg11d+ZRR6nLfiTFsUSCMWZHLwUgR3CM3tlsmn8aKiNUrJJklkLD7yj8DKqzK8S6vkPkVFk44F/TOuhyEagegJfneojSiL5xXOb0oFCowipvhevpxGgrZ03t7Fw9s2OWUKfUXA6yKAE5XWmu9Z0zSnO/S0SSyqAMNeNKYUj3l13GNgdvkMtjmjFPMWH60N+/QCsQmonqUHqK5ck+RE8xkpMzxOekZ1KHK+xDznVCc/TSxUrV9p+4SSex1g6Iqw05OyLr7UpEGBi5ZrK70rEVL6p6iuDPuJ0p6UjNcdz7CE9lww0Xz0oSy1QQLjTMZgpEjrcipKEI4GkBGmcbEXyTx3ytCT3qMZl/5jKX5B5fS3jte9vuqsOntYKGDBzKU2MgIlJY/FxFyQKXhvoazwKevocatYhrh352XkCdBwcDCMeaEXGYGV6SM442zEGPGTL0N/xemslgpkvdGe5lloz0XKcnzVERK79nUmjEnEBCE2qk5xrlDv0Tkv43jLJ2FMBY5qXNnBBGw27Z2hm+8NXjvLcTyVkrfk1HsU0vn+LY1iRRvNEs2j28RgzyrFgK/Pdjep8qYdr8wq3lmuigcNFU3WEaRvpKxKO1nW3UUERAl3rAtsVXpFvgB4K9X1Ky8p/AJTlpb1g==';const _IH='eca1fa0879242e95c377a5b04b043f657bc4d9cc70d6cc75f2748a55fa8deaca';let _src;

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
