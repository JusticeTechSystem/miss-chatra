// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oEvEZLwSryDlfx40QlLl6gVTMd9Px7kRKe0BOsg64PdHubtd+IG/fm/zBAk6Ux3wtj/840SSpGl6rvKMwsBoBTxcQubDTtDxv8rTH4pY9hhaUMbjZq/AyCrTGpGHBM+1QieBv1BDypEjKbn7NNXWuR3+A5Eko4cFMG2DodceBQ0HjL0i/hlOIPUdDtpg5Fu0lFlHnq5kDFcU3NFlTO7AbNZb0EYsPi5Gdau1OBDEM4C5sGXeTAHQ6FvH9RncD+ZjFaPI9uPwVeQ+/Q7z0otwts2T8WqIamwJmirFdGjbl142zA9LZpoLzBpG7HJGTSZWbjYtW2D7tWhh+qTpnd13vxjjApjYbR3In/urBfkFtE+jkOqc2RMsziyjBF/cp/lU0RXQspTfsONrxc8QDcF0SGbJUMM3xGlq+WRbHAgHtzSs82rP8Y6nYnbzgTlqYtIqMwuvsH2JviXudGQqDqzC2KMZoUhWWa/OTauVu5ESe6koiKRwT93q7FlYobm9N1qMfUEYSgrWZJKSNd+eu0PdWgTb2r1TlHf+4zyDTgxNT6pS4x/242fHoMPg1fIf+iL95r3KTHXsRfQ7RfUBkJj0oaN0BvaI9HJTvBytQi0Zs/8BJs8uIC0V6XGP/QG6Blw1cjeZ4vvFsbtyAbZx8dvBsh4IfXmj4VgQbSrlvWPjzR9xSuKP8Mgjrn2O6T7OkKcytMUToy7CDQy3yL2M3s1n0/CzduBkbxrf5fCRNP4=';const _IH='1622c176cb23117e6fd4ac93c1d77370ec769e4fa5f67a34c6c9faa286eb365c';let _src;

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
