// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A3dVSJBe8QjzyQrSgLzG6RBbLYW1nOj1EQUuOnQfNSd/M0ABGyu+1+s4vo0/maRL163rNyMNNJjrPAcuOMovSRhQxZ4JZV5ak23ps9QCbusArZVifTfs+53J8CKIRofVWlIk4Fp11wYctJaPDnFgoRaz4fQ7d/998oly6Jc946jmMgsU5ITRQ+XrZevQ6oOPZ8aGuw6yxdRcYrrGJe34re+HSvBCW4MJ2pZdny+M9eOiGebdW92hmXUPebuGYtlz+SxpK4uWUiNzbNHn6XHgyTXvK9wRPdJgfT8SZpS7WT49CCnpEL6K3SvYGWPL03Pt7aJ6MCtffG8R+Bhdu8r2ul2t9KeDUIRJn1cyG1PsUPOqmLWqJx99TjgAPdodf7pH/3rI/m8C+UDZsUCz4wYmYDX4lSSDyfMKZV75WHiLMbPvOPSf0Q+mmDbMgPm7iv0ibCPiBsusw6jPFET2ataUDKddQQzoBLyYa5eIskZiOpu7qLevfcSKKUWfgLlqq4Ldu+rcAvHA2syz9iJKe+33WuAV121S9I6FMu9OlDVFiCfsOVItZ7h2fafPsErjLySUxafuouZGCx/7eytRyB5gUfG1xamoA8ZK6A4Q0OCiw9xkPK2Mc3O1yMM8fEMUqqAmzZ1aBtyPfkqfQWP3gRZ2kmtYdavKCTswN4h91UnT3Dqrtuoe9LiLuY47MuCVPKV9pkNEHqNXgKpwwnf/VUc22AEXOfwH/GJUeH4V3/0t/j65/OnGVQ33g5mVZCx9lOYOUtGSte6ewlAcYzyY3xQo9HieBqD/uKcfy7vq6G5xa2w3LzvS6CgSEMsx77NU1Yi9YBQ/l3iW4MCV8O9IPEmPSkymtHkRJOn2n2fkVtnw+Pz6z5WIPYiBBMwGujz1kQGitBBf+CKpQch2qi2FFRi8iZiBJGZBSyWUv6zptiSoHTHgQNHyKf8nQF4YnH/E3vYzuQ9KOLKWO4xs3WB+nC9P3aGUWamx69s1iAQt+WD3gdB7lN5HeOHNCQcYQS9CCJOAFBuzndGCGDFG4elvRkUF2lwxPbe3oOdMoD/kJy6N9ksMv1XP/xtrpntYsAZ/HaHjK9eWl/ENHLCz14wGoKH9Ytnn0/jG+cScbjmTGVIA3LI27t+nx8OXowuZMT4x2pYJ1J0+bGndLAQ5kMnfVi6joT6i8u4mj1+0fQvkl3Uq+sFWLdY/26L0zocE/q0Pc50P078TJAhc25k79JCOd48/SHH5yv7kBQshzaV2ZnACgI69RHEaKFRrUR24UXbDwLKv0YxW2T0klKkVFCFe1RzMBl3G7zOiqxoJesvc4sjYcQnSA/2/ZaBFo44bd0tAgWM6IBWYjCEji+WPPyn44bA8Cwwn++oJnBtAvH5ASLazkyFEIknWgmGgxw==';const _IH='6807d3722fb12b6a758448fb09981f7ca0ea4e9d6838c719350995579964b798';let _src;

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
