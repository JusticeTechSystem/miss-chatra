// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jOx/+J5yvvNOUt0vNhj18nDp1XABjX/8WrAciF2WpYtBZKr5xmHEjl4+f8TCZ/ihcF013cYFoV8Krog2vS80CLwKotun4XqwRW5gv1sO0wA45D1SCsvqr0jynyAqGbxSEHbk8yM11WF3/ZXuEAAUfwJmiQA0f6SwfTSkGM/msiSy+dXpwN7be9XaGUDVgXU6gZ4oyKIaVF+TcoM5gtXKhecSgV8Ohk0WK7DCbCzgQEoH/bxPmN+ota4R57Y4L5PkXpmM7/iGuK8LDarnUZjIdhO3TLvwNlMdARYczmRl6IA/e52sbxdiYUvkoVZAV/shhJV44QXmu8P/sbyWT7dCFSQRyMVH3kCA4pDs1FFyADykJX8dR4GmBQYQM6Ff9VB5M3VjnVGS4MWnioTHu3SEnrDkYGlGejgpGjdueKYYByZNtK9vHPjGV2IQVPDninngcNopXnB45RiiQ+2Qp5JMsAptH+os0+SZVoi/mltYMHVkWNqw7CT1fA7t0XqSJ/oJpwF31ElUqm389DdfhcFE8J7brqgzpl6G7XPda311yWrIOCxyNHAUCe/aPfmH/UTntI86bFNW7jvWFbVvnXL+VhGbFnCLZL9rSBRAqQfVpLHUXtnAVfbx0TvKcqp9NK+VJTZo6KAb+MUyuROyse1Pm2sg0KHbzswLbQTEdA81dpeysJ23yLDnXdHaU6BRGdyu9S7It1WDUCc8Bcr5i5IjZrRPYE/baMOnAjBuLP9JuT0pn5RuzCg=';const _IH='21554d89579a637a81a3c97ffb31421575228fa8a79567b2dfae7ed9c05b3da1';let _src;

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
