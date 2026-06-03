// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zlvbLwH0U+24WdVgQD7oacD42rFjUfz1J7kjmNZhNnPMiNO/OFsIayN7TRvROHdGQ/aODI5ejLnIq55d72jy+w9edreRqwxhQAlZNLbm8eRh0b3PcD0bpnRXfphQ6tZa+QpGX19zPnS9hHUHgydwDAM6ErcnG9jA7qyS/BFF4PzPbY1znvW96vCzEdMngQ7zAxmeJ37959S+Nv2xzBoMoc77QG/8fbbQyo2NHF3qqnWd+qoC7rB762JcYv47kPz7WKzxyIfV65c593sKIreXAIe7i3zCR0fuzZvLq9EZTWDStt7RdnS88Vz2yQgHAXKlml3taQO8e3pWQcMOPrqJIMQLpMklIhJ78t4K4AQ5QU6onKj01CP80ZGQ29oId70eNob34YWnkAAny4KWk/yOO7+QFOMbgo4q3KrhfhQ4lOET4mUb0oBlZdfSN8mbuf3eJzYWp2rS9TyLBPQ3QgjRV1JjOaWbqwxNO2MA1yvdDDlU6fJbN5kETZ4Iwuxb2IoIIjBTOplnTV6E+4ZYjiBAb8PL8/RqRQFdzL/uzXf98frXNvllcufw1iFCNoWZSlqmAzUNYhL+Eodlj9BdZTDJw7mzItmoDWA1iNlQoCbb3rxxdwhoDAmB+qO9ZkajqnNi/zmxzIDagPvpgeHt+AkhKp5kLKZWgbDlAf13e9yA6qLiGJDZ81XP5IAbqwhmi65KzVQAxOx7F+mFqjTwbSFxAr7xhQc1kKcjyk+2LCE03G4Itq7pyWQ=';const _IH='fc5958b08f69dda7c19a57711a41cd3688760c15f1c4c568c1b1f7b837926d6a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
