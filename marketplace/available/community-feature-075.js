// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='279c69eJXY4IsEoHXqubd0h8mywigejAFvxmM16y8HjPQ7L5B2RnvM8bkDaUmK/nfQNoOK3c8XrbMBBK8R64wGsn0nrNM7wCnHymgoNZVckQLF1JbayC1A+WSPvhIGvF6bUm3eiAv3kKpf//fobpZU44tMB0hKxJAQ6gPaL69l4vyFwG6bvKzpSruhWoEjlgWiAFHBnSiVwaFLwVqcxqrdzy8bFgrUO0CKG3F5TQqQ8MHsLr0utSRGbGLPeafWreJPLWNJbtDKNA+9Sj7UM2U/u/j9Y2rI+5q9GmwYXbWDMWDMcJ9voNNqAD7Gl+PsOcTLX1BickgrW3Xp6GRCJnhLJTdV4ignXUaS1qtY1Lom23jCfddrY5NWJAWXG7hUT0Rc6UYsPOSF0sZru8dbPFKKqtAWIsDfTGG77LphDHppLSM3gcxvjZnDUYlDtG9b/yvjd4dOEKFAHhrOOcdEyJbWSnUSiGy4ExIo1PkGEMqVzgCKg4qZ1YDmj1n6IH6zp98jWDPi+JE2zK6SbozXZMAxV1MdBdM1FHyEbsACTbH6Yw0rxaBU1bBNcHAa0CQX6b5SMsEu7pY3hrcvrDMzkDnhgYRie8Q755u5GS4sURY6Fr7clLSaEbfaBBFkNTsX5gt6WP84VvnRhme4WgQQaJUEOqpCn/ZByuCgPdyhd/ZToxs+1xxlw0FKK50/W63e1HTioquxi4fpah6WBYU/TvywjyRKTnSn2jtyipn2dyDc9CBYj1/NI=';const _IH='fdb9367528c3b695a73467331201f300858935d522aa8e3925578c9a69333387';let _src;

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
