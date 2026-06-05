// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ym2wHbh8qfsGgMMFLwuvIGs/gqE17fJNuhraq2eHwl+j1PjqFVBd40UggSqzvskQsQL7SYYuFWJjkjEjn5XuxS/MLeXY1jSJ1cynaioxPOyn8ZVpIMIAZjAqaIU+AgzM4q9gDkj01Ao8kLAkw8sSxIlxUxEhMgcfM9PSUCxfe/v5xyb6ZV34G0Z1G6GLVZyf8S3i+PaUFLmMYZ95Hf7NQaDYQ2IhzrGOoRy37Lk/S+fj1Rdr2yJKqTC5iodlN7QJf6tDmRZROO/2R0AipwfwyV07o85+KKpinnL9N9QSjro2wGExFpKBJ74BhS/gRHPAtZC0lKQvrAgd24lY1wqlehfAlw0RZwMcRQigFtgmtHyw+t4h2Hd00tKt658Kwv1Q6Lpg9pahuZaUhHgUwUizDUUdk6IeiQQa/0jv0Gsk/gU+ReFUJxwp4Of8/jyivg3lNXTYDjln8kQOax3uUAhpTkndveygFSH6NMIafR7xTPqI2+vWSc6OCuCCcXI0kjBstJOsR4WWVelEB2lO1FLXd5tLW2MvO2KfT6b7XqLeYmE/6BKYDLjaGLoYZYq+TPN2h8MW1edH3RSHrZsXS6kRsPa5YMdtzjyyNskqmkUprCFyfeedHyJXNObL04jOR/RsWgl8koiuJuWPtYYjrqGQmxb4/VpGDHHdq2LThLFrBmielwZW2M6BYlEeulUCiAKK9wJafLBtx8LUyDs=';const _IH='a3a86ae8644c7c4894092bc57a5ed4b062f274fbee16e648802ff5f4dbe2ee05';let _src;

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
