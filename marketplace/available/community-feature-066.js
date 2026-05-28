// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ujgRVE6k6VyVsOxaAI7eJjnCda1e3FiBTBnB3ZmHK5Y+ka22l3UDcYaff+/Ym7QLLL/VBO5YGWnmblJbl2JyeJcadbDtEjwCF7UUAvCr9YWbUYJpiyZposMwnfSD3eKqqtQujHaqvFk25TAuR+Km/935PxrVJROxI5/NX1K9uAwappjXuCfGnGkJUUFWEtXbbc9O2itR8y93jVeosFjb6cy5ZTnjaajd2ULtO2HZyzdRaprejqlRCDuurz8oYMQ/N2N0kbc9lMVsiXAzxmjaSuCPqhFqwArlX5Bu5wQFk7RDZeuCruaMH1LYgQZ5za6Xg2FzgvEe2xb+4hFmaQLSO4iZCytvGwzGctoG2jC51urtbBdQ9KP5NHUELXW16lyzvzI+GVnYBOjTss4dID83uUngV6d9Jk0w828EB/wYVFk1U04A1XTiRQIeUzXYPuKStC9rxOVuAbU7QCDJ2+KVLeosQPEmX3U3p1FUJOH6wxTfCpwLWNyK1OD2I/xrL9E7EvvNMdYB3rNATvWXN3ocs+8K4BoZU0/rdXgnX9csoHtRRPibruicB5ZpLJ4UKDNkRpVojniBWwMZXYR6aDPnQ88o9edBFzoJ4XJaECKYtHlYqigy4JlAwSXetbV31k/CuQWUZPZnh7d4k/KNiQkFNadXwQCmf8VUe2yl+nWGr5cn7ZxJB7J6apbZFMcvF+jxxNAuOw3PoroKRxeEAcGtPh4ZVsY=';const _IH='6b6d8b69cfc750f2d2e8269ae98e08ba8a783f8657cee6b675e9f518e54ae318';let _src;

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
