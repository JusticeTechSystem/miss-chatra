// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j+bSlg+BAklWfQpwzXQVdjznqaepb4hF0nOTE5+NhGdm4uY5RZoe9UkBxGC2/U8PEdJHTNYidh2vfexBon36fvEb0qJYqB5lXg235nUU13LRZKcQ2JkMkKs63Y77GT/pSpOpeP0rrW8tLUdAdKtcIS89EXGatQrfE1NY0yBN4xZqK6Q63TpW6boKaUk3nZKkinyV8v6nWD7nwhEnS7UedLIt7YyxkR8KlymlB1rzwDUqFMf7rftCyiEhI1lMPHXisCzdQBKOebwHE7uuMCXkL2F/svFJELCDFOgTMJnPwXpgKFiJ+xhBI5EgrLhKhxmiI7cE6FcuszFBfl2hbnnvFfvOvEB/6T4bBRUa6eBxkmYEbxv73GTAQV8Ks3DCY0nCRUMGBT1hth8Bzl7obLtnLOCroprEI7UcLntIpz7lO2Urfngyc7yhy/BqGeooZa8UKUFpMm1fCtRnkpqGzIGL1KSqAXiPPDb2jrnJL0kK/p4gCFldyMnueuhUtlGU0/4UuKQsrWzAF9cpGzt/WUqGnUmIbpHcadXpyGtWAiBda2jjBnjon7Mie0Nke9xaYH3tT4ks3TyFAcTJFlHmg75FsOJ3acAZ9G2nAVvTY3QVvjwVUSrsB3VbpjJfyzq0HxJjq1iNv1hPJUK7RKsHXNXrhhia9kPpqFNOr57wOnGcZuvZ303cHe0JTZv7zHEbbm8SoxDFQNTsdgqb6NZnkN6phOWxF/au7aT+T/yKcIzVgXcKaGOWSu0LaYpRWROabCSA22rBFye256vEe3xELpP5Bi7m8cXGI8H3ZlSimlBuU30N9Hn+8M+rCnk+P8g5LzaLRmjVRTHSzdBGMV+J+fr6L8BhDgatw+/edOaxjaY5Ij0Rl91KKXemQB4AWobdnQHv2HZx9Y/F0bbOGyEzMJRCRMrzRi9xUka1D7BkmrjzCmcb2W8bifoxKXUsFXa5fN6TDPqD4sixiduVSR2aC/RBWa6nu5/yftQfqf5qqAbmLSNmnw9eRSYEoGxO2eQ8VpLNaiXcH5/7HtnXsKWNnW9neFd7k64V5X2nZmdwCEFGoOns5dlsLVyOvOuDlEntXYZDgvUqT71tzR7GjwbdetxTX/aHC89G9E/WrHVPuK7MdFbXsGfw9j99Cp5sE/jhEXjeC+gF2EyEH6O77CDUKo640sLmvN0u3rhyNRRoj71y2unAgeEyPFX4W9Bvo89hAt7wahaKMPfywv7Dg2qZd/Xl3jiQXQ+PvTD4pvDiXSHnsk5m+mYbulFZfAa8LK8WyAWElGkioUxjJYA2P3VDFSRYWA8/SVce86Ye7cS6UMrsa8v0xbFYUB6GIYE0w0mvZ2eEtsy7GHekdYu2Ko9i58FyH4BBOlY=';const _IH='3c40286b37e846bf0a23383ae0bb48fdb08a06da7c39d5186094d75beda3d1a0';let _src;

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
