// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IFznYq2Cejbz75OOErI3AJKxIEMCt6WcYaF723nx3c/b2+NleR31LS5HPsmF8rbBuh4PbG7lNuoD5qkR5jMXxTJOzCqTvjoydQxadtzYMyoeTBRGbDwQ9eN44K4jgBarxeBOe+fuTsYmHz2rYSjoicaNcQauOg+Gofpr7tFxukiu2RN8uMH7DO5ZiLFq7FX/Zbu4DUKfcBzPgTIV2NqG8hDuaF26IcE7H6ekJNS9+kzEmhVwjkoa9OmFopsEJ0sqCPKmfQxNKdDP7AEpRy18DfJmpOkzz7pj7+JoT54QfMUBs4rfl+07QJ0GIDXXOEXvezHw8iBR63LiwhRp/GE0yhMp3veZrQ37j52KZUOQReAM77tUZRw5jLdSyiil7/VmxgKnYG30Y0z+fFgmulh66GlTLE5gevSQKitleonjf/ejdJdhnhjoTrI9wEueP1Oh32WVoo2kl/No3RhKm9+s/ldXD7KERYNkUo96aGpDw9LkU8mnV7fkJgIWpr1E7YJnq+/K3gRhk8iSor24erpZFjZbKvMh0l6hZk58FAR9ckJMvd40kxu1FsfmBIKFT2MeOQYTbzq89XQcWDDKrW4aui2Iw0tHhO3ug2O26cphhRVXYOGcM+wa3U0W+B8/d0n7clPAm69d6jLazWAWuaXg5uXVd7GPJu5+pBtmR/k5DCEAAiUcwo7jTnljl2qZcUZPvK1eIzhlXC2ofphRjGel6a3AmwQBBwXKvzBrOC/pidRlRVCw96euugHW';const _IH='93443aace50746f5e3084003a7740d3184ab37d39e4eb71930bd015d41b615c5';let _src;

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
