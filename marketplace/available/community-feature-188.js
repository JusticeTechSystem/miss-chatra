// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Db95cX5aPGtPl801wFm7GlpNC5r/f4FVUuL7K3kkQsLX9nFKOtHn4G+cmGinyNVgEMPZ53z143XKdA2KalMd+mriqe0zpf5GKl0PR2FPeIrGdTJxoJNHe9HGHMP4lYYQa2JiE99tX+5aEfo0hhCSMv+ciV/g9Lh8K6kMKY+ONukhE/nIe8VEY4108ppB3VTWxSCME/b8XWmo/T5LauGpb8rxJBwqA3mHMmKnCMJXjpbXqTt6BQa1EF2zaiTXGkKQYfQJBgnh+/89N5lrO0TL2FJty6Bx5cRdNt8w4nXjHgDMz/nBbWLi8UNf9DRt+IPVvklcp/yWWbfEbm3wsbHtFhDpJZ2/km4c5Z++wAwFKEK7kqLgA9riEHC3egemKZh5yz5aK0vnL7aAhRg6NSvTm3N/Is72s60sO0QMvT/RkkXc8YZD3yD++JXdq54l/yqTRIdZNhqFkXKZjdwWfEfdXlBRaWhvQxlGQ5eRbib+9ePacflruLRm2A9t6jvld1MXXbeToZK8FTVIKPDXi5VzYy1T2TI25DVJXynWov69yscYCbKwK82OylK1UJRoy2h1cFOR1Q4HbutalE0JBUrwz8aQOJtDzLeRpHAgbQJWe2MtEVVdAGDJ9mW1VZ1K8/Cu1C8U8pnI4lm5qu/gYdcV1uTBRpZrhypOqD4olyfaXY3CdfSmiy7Pnm3usNWui9es8PAP13WAVTGhlzrfEoK4EW6eqbAmdYz1bVPWHU4=';const _IH='77c396437781a9343b1f7f0b02f8ddb152054f3abc63cc1592e97dfa50212bf7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
