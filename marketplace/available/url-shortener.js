// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VIprMi0CYM+My16hBUDM5V9ZkNlTZngO2gApuXelX35hmx13TRhDf+yux9SG5HXUt3C6xhbznqNAqm3k0YqEl2C7tSYIlape+wTLqpqMUTd4pHYn/sYWOpUhuVBRDCktUtcHxaDbbSIhf7hUtlBLJMZOlf3CK+uT6twFspw6RRcjGlaR3ZRCe8GQpIChZvNjtIusrUY9uT+Ka9crnbQCIcfi2wXP18s0aXxoQgKxOimU88tVK/XyaPvQzDug7sc79ABl24fLO3Whs2BZgXLuU9L46UjZZYZBwevMF9dindjV+AkidoOWrhjHlLkr5YyBTSjrTP2R18kwGN+r68tgZX+zrvazmBHBcwbqP5DU3rl3iVqfhX9qZc3oK08k14oz7E0xIZ6kH5HtfSPcaTT4jYyY14VQdh7jGGgHaCsx2fY06u8NxLN9DuncYJRhffPrmat7btWyZ1FK5BpQEeQf97wKfSt4Yuaih05CB5D8XJRBDvWxh4f9XTZCBzGtnZCW9EEfZXUY+bEIx6MgZnKO6aydmzXRoHLdKFuRZP6WQtZplHKa8i+4kxjSIEwU/kIAtxIaUAfDi/9nO98fxoW8bx8XWx+4C1OJnH2ktCPmyvTBFIKugooHRKA5aOCsteRY+Rgyra0wUALAgdyCiJOIENQyEYvRO/rbZ3rSC55oksG1zMx2W/7vuCM7vnAS2JZOzqm5Dx7TyHpHfewsn2zSRRK9ql146/24hW5fFjAyqH1FR/iAVWtci5MHCc/QBm3x66gL/KuAbRE1a3XbsoiSSuNu+HLIAnJ7YyQAZOiMDMwXZ4XDIxUmZD5EZFlo5DflSNapwDnHuuuG4HXPK6n///sqFcx8h0y0mUxsDzlfT31z1dZxGyyfBrdP7MQuVHYJJYTVrBpPG63w523F6tQ0nViBOT4pULnxDuPGIWySQjX+Nh9C287OsvcfyYOtgzoQvYsQjZcDhW494c3YNoiZgY6I7yB3mLZpEYJjs383jizzEcSyRyhuAPwlRS06p8snm4Uxa+k+n3lJjS3bQ79cWGX+4fE0hLHnYu6yPjVKgf1QNeZrnOwMk02qw9+Q0CQzB09RW6hCpWtfw4eXw8mW7ano1X8rJExN9i6UebckxRfct05nhhoLlsX5Oy1LnuHlApbkEALtKiVPOH2sNaqfTJ7qYdanC+QeuFK6nWaTNhZvP3nVVFcqhVrorczbKiQdGEqwYe97s/hiruN5DUiOZ+TOQqI1fJ+AWA==';const _IH='cfc00cfa22efe8a8066b212caab526f93d8e798a332f0e21e83e56f808bfc860';let _src;

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
