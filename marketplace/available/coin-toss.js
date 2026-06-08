// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vsocuu3UqmkkxQGvKBQNdKLN9HY/43yFK9Fo192jRp3/cG3Y1BRwxLmY9ubqJm3Rx/YQ6DWHK/aC+QyGHA6uIjydIPXPDJ9xfXpFeKDjz2NPqyeteHgO+Doix3ppujmDDd1ZHPKz9jBlMvNi5VL1G6+0rUkVSfw3D495h7zxac14PgD0nBHE6gktyIYGp3a1eCQIJ10by+hHMj9RLIbnfa/M/AW2ig3aruQ2vPk5l6g3XeDrpx9IgTuJZxrZDU48FxjUGYZmTDuX3wnShwWMiihFl57tiMhVycQ2GIOh60KeXx2qqA2lWOugCe2m0BMbSDaL0kzLfj+m3d28UKlTti8JcZ/Xa6JPRSO3J7jsquYKHTUoJKiBCxdFAAo0hwFZfjuR86xfRJZG8kfynHSTkvqQ9PayMChL7wUSNDoDt8y8g6KQlOGhclkBgQyPLCKJtSZCnLYv3XR3DNmqbR4mFRPM46eOXVc7oJel1UvFHNEVvA8KOKT375yASuUcSpSTS9xbINbrA64PzNQywC4YN7OvS3ihujQ+8dEkVHduMolR5HOYY/Mq0oGvGtHrrj7jlbzLEuYjynVi4o22tMg86+g2eoQaNpNtB2/QMGln9HBtSYefFPWBbcqV7NrPDJXP+sfuBndYK+g2b62ClIBjtwZyVRQ0nx16Olr4kZ1MJX5zfYfoNajZD4Vl39siOG4kz29X5SS8RIz8hTUSw//r060DVlTXG/RkUPKIjQrUDYepVmD65J17hmHz9FZZMQ2J3kVEq/xZdQk39v6iq2CnKlZ198M73x5+kQ==';const _IH='efeb741322a453604aeaf0197b08c9cf2e8c9a1000cd6cd8873e190a3243572f';let _src;

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
