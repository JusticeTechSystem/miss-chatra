// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ARUjbfPMTMfZ9ih226UWuhCJwubZkLQgnh8iPjSiul7TKmrpys1sFwFnr1gBxiYag2EKHCw/qwliGx1jVYjcIs2lxzN3jKTlVwf92tXqbkgYuTb/AeVbDwhfX1gnkr3Ki6sCLts3lS2uI0rNAkEI6giDevTZE7qChOXPeljyr/Vx+Frh1mMo0iagvnNV9tiZPMhS2uyV8NHfKYGk7Uld5FV1aHXGpFKZ9a/zqY5B9+MgBMUnpqKw5HdxZQRQ+YzyC091NEG0R8PaBuwaJtK5Dd/un4KmKBhDxDO3sAlKcZO2ciGdFi5+sKk2HJG/IJMIsuzCBUJN3miG+HrnDXclgnvbnGl1hs/2HSVM6QQGjLbfD2VgTFdMJblwh8YPzlLz5mOTGqE4nK5rRjBAcn1oZ+/cokoh4qqw3jCV0AZ6IJjQAwy7OBwEb+lQsJOTh7r43WpH4cx3XFviBKfL4zHKMzuZSGXleClIGJir0d8AmbczV+Eu8e9kr0V/yPCI800eIfG9iBSs0NpqTcWjrjvTSZtG/s9PzaYEckAdvrcx7LwIBBb6eNp9hiYOTnXiC0e//XrExqyvlPa0/Aqw6UKohh/K8SSV0F7shi8OuThIWxV2zwZfa6kpCZp1JddhyakpYsmdghg6wjCpBIjliHrQH7CqRIUr5VDUiwnvosPxszpjVqXQyrHQ7FHJlS7CRJliWOn2G2Qw92LBtNJRsLFT1D7gAhB7tNRb';const _IH='005ea8e933b17bab5932add4b9c2b486a7e89d60c6cfc13d23a299b5d34fd8c1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
