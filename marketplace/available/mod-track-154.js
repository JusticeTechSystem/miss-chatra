// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZDeiJEYoCpobY7CTZM2Uj0tdXHcj/h3kQsZlgUixv23tMkGQcrUUKJRcKYxLbh/+ZXjco9aD5IbEgHsDN7tm8dxJZ4wGRvMiCA4w3NUDR8dZQN2fDa01gXbIp5YJasJimpaOXxcGdfzMCPlqXqRmZJCpbBp396kBJT2evNDVC1pmBdUeR1oK3uTq5oIcrtEX8B5Nmtmb3FQBE0XSBqSiNl8avFbNjLGwrF45a3tffegShN+SVwJZPSd70NkFPNoi/doEJqMRAsXSCA8k3y+8bP7AtfuJcldugew6wU6IPviatetmlj9petWzcwh9xcbQzlq82cJzOlbmMQpd614zssAkHODKy6DDYOHHsdh1EElsep+mia8/NC5IJkx+eYPbqMuc7N8j/IFsm+ym1TlbPWXxeA9ULLZMK7cKoVHO+n6Uktdg7RjiZ5M9tm9arrHVPGYo2ZJ+zrQ14Y0FxkyUe9IA/ZimL6f/pyUI0veRqhzM9+bfmKM5pP7QE+/vZI1d8/GwzSuAv1ny5UN7DypepryEFkgTq552IiU6/8yRy5SWRZnn7EPcXs6f4ejSaKf0AYEm/xZsKGJJdlKKBJmTXgWT+FiCdgpqN8EbsuemPlbI7WYcX3v11NFHuyogpwQYcJ0CLPchnC56lSB2tCBqGGlR0F58ZTZWsqzIFVM8ThGy1pXLAzjN3gNHtBzI2Dxs20KBR+dJ/zEMq3oVWCVeFEE2AHydNy0NwDuDsbD1myM0DLmAJzO+G4YKnoWB6OX0pePgGdqTv/vRZXiBinXDDndT/UBBLx8tYJmE7Iz5sSDbuT85XGsCESQQrnF4FY8EsSHCf9Fu93HgjANnPnu8tlHEVKJ0DXtgUZkeK5yG3QfuSwTr4Pz+dbXBvZOi06pVBfa+j9Zp78EqN1wu+epZ2xIrT6r30xzsd/kUmQYAupvvTBMeq5ur4kzT/ZONzeymEZzpGYH99kJ9Ul67XYF2ruvgjG6QbQZIWflK24tBqnoo+2EXkh3KgfxdegOqQGGIKjtX8yVbcaeqRFXfxtQu2q665918ocsngF2g/WwAlaxABn6NUC0cN/HpRLl2HEI6eO4hBYde45KaclKX/752YxOJuXq2CGVWIxKdDxNDcgryPPgB6by559tepnBPJQOwrxodPPzFSFTztB7vricTgq5hCmuSfyQ8bhQwXxg6S1Rgesgm1RxjyDve5dquEW4A4rMfT2qTSip/XG+OR/GbH2s3+uiIsBpywg1SKfkoq+crQez8xHZxSpJQ12GGwKWYLW+IHRWSihHx+FjcffORutD1nym42B7XnEtAcpZEkbYjYbjvTSHHaXQl5Ll15l97JWEVYAv+8COv88Z23DjQzfTrZgLHdBJ6vJSjSaXD';const _IH='69229e7b4b27eed3005fae67353aedce21630beb648cbae9bef9473852829089';let _src;

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
