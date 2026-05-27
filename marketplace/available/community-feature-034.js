// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='njfgLra2JjwCRP6SE2wNRZ8VqXVWsplZVkUiSsDTKf6sduiK4zVJ/F8lfXNRY6cxh2oXEwOpsDjrNR5irEnlWZ9UVv09IA0EvMeGDD5hsulhj28C4IaMhoAdNEXLncnnAZ2/5VD/yR9SuHHlmQiknCbQ6RRm/A8w8rU4jgYVFS/VnJEn3pWEHek8r1zZUbgcI4SWYz2RgA8a9J2pfofd8u2puH31pdo4HtuTH+krlIkUzapib/oyUhJCU2ZyPNgEVT91zTsH2hlheFgW6mUMK5xv5mRdtEkSfxGzZje6a3jVx3CgsNzHv66Hai/skvFwRcqmpb2C1O/AI3Vcb8+ibyT8LYq0QK+83r7ErvyhJ1/cPRs/3Ecn2BfOj7GA0GgG3R6IvYDqftwIDA6vpZKYNZbwrGTZvgrMcedC8GAWVYML3SSd6MtLxbDMkWGo3pmavLnKaug9LnxMr68MbwPj6HTymdDpVMwY2PysbXCzi+dhmmBqol53v5BLy0j4aDqtJafprdvk16FZfdZYJ3ODQow90L9zypLz5wG5Z5lXpHJCsXXbUPm+n5x+NOX8IRDjBVuTNMogmoX+F7/G64nFX285dX60cVNoZwuIKsUBowmU7OVwv+RDnUknUD9iA5NyPcAwVX2r50JhyrDwA/vwJB8g6ZX+CU6nXIUC4IzgtikkezohX5pQL/6SY/Qzwha0E990iIFrMRERSqqjSUvnV4w+we/ub8jkehEl2Px4jOCeXQ==';const _IH='abe00f644784c8c16e84bd9d82824b52cf93a3f3763e1a2a4e4c9719c55286da';let _src;

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
