// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XNLHcSewDVlAcKJB+0gS7DJWpjeO2p5JPoypMrkLagseK1eU90LHrFe8SuB6mhCBaiTsKYDYDnFURpKukWv1MllYU7nySINdYiYiYZI3SDipaGsr3IfKjzHvP2wX5kPzbbNl19mMeTQWSaq0jRyQGgzAu2hxNfopzPaM5i2owKMPGoK7y71m2QT2ySgiPf+Ej6MwAf6hP1Wwq4RyLUX3qnp4Cq2H9sSnH5Q37hji5+sjAzJHdtC4g1wnrMxB5AZkQOK1QyK3RRJmSJbjO3V+86LjqCdlJnzZPCaPobMk64D4UT49h8Uoyyi3HeusSXld/psnUQoBQeVyBukvfcL0IwRHBWJ+Usuew7mnhqjrS8/T+IEvHVoqVXPbZmM4ULdgMSC8Ww1MsWgPkdewAHHXCGpV3wKEJ8dzxwRsfjjrBWYt09ER6rtSt7K5Bk7UqZo6yxTGJ+5cctSVvm5pwG17wQAAELQO7byBZUgaifyDTlNFa5bLrLXjBm4jrI4TcPc/C/aQJYtFrX3ir3FExk/+in3eivdQ2ztbCLHHG1VKyUWEt5qCgcL9qhlqYLH9GSVfRREkEwfCrEuy3MqI2IWplaKZmWSTOtPlB8zbidzvjgCMyPIxe6D9tyyr8tTWxduRLTn8Jp/5VP3+2hF9UJlJhZV/JBLGoHOLdS8gqYNsAzxXk3UUS7WE4EdHFR0M4qzpxcQvFAtke1VhiUPJtzHyoGowY3W888Eus67RUtLesdu+0w==';const _IH='e2c8a4ac28226901542dffab2ac9ad16f7056218ee9f3228c2c5037a44404ba2';let _src;

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
