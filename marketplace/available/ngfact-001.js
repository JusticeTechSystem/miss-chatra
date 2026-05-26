// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BfwBPGOphJQ2pB374z0YKXXXiVL3NzbcWXiyHOCPJO1PkJUkWqazjm/6y7lv2WlAUf+Is3liK0JppsIHtlc3uSViG6EI/J6VuHKDxKRE0140Oy6//EUFFNQEn6bOjHaGL1djnqwcCdd5WO3W6k3Bvd+PM6puDOz3S/gy37uJV2H2lQ+eSTlcmjI/I+LZeeuxsawSQ4hgBA1IcrhdajeyMjSmpE9rm/Bb8ABb0+/8TpUZR0/2UpPwoUSYh+QRmYrJ6dAmTmpyX+3BMa42zrN2RLuWqlfOorZ5p/TdIvkWvnnSCHCFHY3utZ1U+7hFxLQ19GGn0G4Yv/2gS7bxoMUjCPZBN5bDGwoNN8Ay2BoRmSUtmc4T/Tnhn7fuPM0A5qKr4lZ14iBlspePs4zfk52JLgf2esb4jrqEhYDKzSQclHZo1qjJfAn0C72jZ1aYKJoZvTHWDv+wW/PRfdeal/vWpdNdGD66p6LkhtbEAcuUHe22ZAlZ9GWko/C1oTzvcnz3bS1h37isAbPmiKoWwcL//35HuQ0YGg5j9shRea+o6WTHCK73xVDG14bziPhBsf6/kvsE1ijd9jWXzIlxScKtxL4LdvOfAfyLYzuLHb52D/xlipN5Xvzcs2CPrpWUxeARWmMLU1yQH3PKNwy9duwzffdzD4w8M59FX7aq+fjEQ+KaY0KPJKcgYi4b6D0IUQ9nM3tRWGszljVyKZE=';const _IH='5668072ad2e4e511ca7541623f07eec8da7107b86d301fe6630ae2360ec86fbe';let _src;

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
