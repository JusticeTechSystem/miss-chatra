// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVNJaFiGoK6zM5WPBPuy3BKngPtCZy1q1jH+WbMqbbZrRoqu2qVEZtF3SLuoqB21bwPdbbFyFyjLj1cJo1bT2jE/qNaqW043wySVdSmDGRsRR1FxULKLfUH9JWs0l2MfA4V38HfL12n0NHRuWdogjeX26VF9iH/vggltCf39hafHl3E/5UOJY7fhdTW4rgDNU/AbLlJRUGocfqjquRRiimlTRMKjrqwSLo2z7KQ6O3yugxJmDIzVLtBcQfnzPlPYoWJKCT6p02uV6DQ4V0RSeUzdKz5ShsOSoSz1pP74cIvb95wm1q5npPXnO26DqRSd/apScRy1TzUV81pa8eGEM8S4gYLntkeaJdaPKBnDhVrDIE6MLfxFIRbYF//OLixM+i6JmoRscZzQ81U2J4z9HMUo4ddh4BwEzRCn+UFgkOfpt2CDvOdzW3ksB/M16YTTDJKXMojR4hU4uXLRF1w6L3Nnnwb/jPXfyTlhnZGrU0dFDeXbjbaOcROogrkrkyo0pyPCmHSNW72RoaUPziKL0fOsk64IAlmCH1TCuI6YnID3lcIfXkcVby0D25ucYsPe3ekQRU8S45iCXDrAXVWO+ub+fk8PYSgEPSlUsQu+rrAkG9T6T9fpnS77g/gbLwwdO7ZFubW3kalNx9xM+rWKiuq6ew3uCoMShosDWP6VSxPDuWl49G35GKOOIcVeOQmx9OwGd2Ehfs1xfZa73effy7qynKyPotCaG/BHio5ynHi8RaLgddDdUH/O80TC3ZywSDM439Q1wmAkf68/EHrksGXmRsiOsV67e4cxWrZrtKlUawF+G6/Xoq+ZYCQw7aZqROwSbJS7B7BG5q04sL5GFMECYrNMITLHX2VZrV4fmIlntoa2zhXkO6aur8hpDgd+xQSgWw6TxNs7jUzOFxj0CaJP2Fk1hw0UStUGRNWwln/MD/bmvGx+vtHUHoX+WPrr8+a5FQR8koApIjFOHXQ0YYa5qxvEZrDEaV9niQoidnuYdNY5lUAwjPymti+Fhmfs+XBxGnIO4wRV76kUSMG+hY1NeCr0zhXclMl2GzIRLF27rLZzCP8cglgr3sHzLf/akaYYWOMzs3mfnyRwR7BYGVspKHaJknZEPBPhhAm7p2yfOCppARhU4oKytYRZw+qZi/AeOiAvxKhS08fY/BKt2DENQdGQt3UPQlsZrQFpIp2r7bGg3JsuAFYETxvASD5JRa/LaSidtsz+htoP5Uu0S+dYoqjKWrFU4blWsBVNlLMA9xPl/WSSukpx9FFuBFsaN/OzQ4GTSomzG+OmGHAF4bG/dSjBUpS9GdWzGI4upzUcDKAUR/c6pHSJJMGCIsJ9zNa3u16GxpFgiik4SHOP8R9quZUF3mBWNf2KTVAC5SzIa8h2bD4TJz0E+u3tHIi14TYUVvz4NvUZhtytoaMtMqq11E/ij4/xxc9thfsrRXpU/if0XxP9RmuQanqPxZgDMJFsvRS2O20b54EbQVg50E1jVqjk3b7XX9zESo0ZKmpFM3NfJDof8evft6xcSzPWdplBMRJJ+atHyrWD7DID9YsP1GEoeAG0Tl37kJXPGIEEa4WH9tt1esYdKrR5O2J+/R5ReeaHgDqQuhm7mFDVkUE44XthOPfI8B+JxdnzgJXBKAFpxgXLswqXugRfjr15j8BKcC+Ots6/bXmFuRwqCRUl/hilVzRND4';const _IH='37027a72e5fcb279a9a92ed81e12a839beab6d9ccdfbf7b3d9f94e01b214976b';let _src;

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
