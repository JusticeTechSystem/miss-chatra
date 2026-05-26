// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TOm7jkF/ijRr9j8/NwgyyaOjeG3idpx01MNxttuyyaN+1bJI99kDr9RWF4fVr2sfZ3AwFSUXAwywMs56B9gPSOwliV0FCReXJU+pXnudQ2rfdakCfq4SWCsrzKegVhbtLHUb5rxCu5nliv2lkhpClMlPNnoVpQJfb9dghDqcuF6gQEuibekDlVVzT8GMY3ClA7IgyVYkGSvB6gJmNSEPlmZM9oKuxhL2Y9nYqO2Z4xULC/iDpBuBax+/QoqtSGTIZc8bfVqI0Pye4KbooX0FNopfhx3a1XlQ7tOPaSCy+nX0bLyiF+a4tTacYeB+hLpmf6FM/l94bg8gZK9pcBOyEtfY4RwbGmBRoGBEDagvo7mgf4ZjzLWnPsEsOOTS2AxoJ6DKaQxHiZoSQ7er5sDGFyIco4hSvsDRWI2wmbyunG2wi+SSxoDYw7EAy8G/tkZH+vqMlMB3dv7NNI7nI5EeLh6Dgrzz4YA2rgKecnMh5b9GaOXAKa60U9KNeMNG0RwiiYV6tDLqQGH9GnZa1NQ/zQD/zt46qgQqv7TJRd0qBqqmp/8CZ5rgDyloJv2HgzBYBEgjyzT4CYiCsJRuswABVWYtd3dFJrTsmB6XKFobNSZyJzuaxes3eHt0l/CT0kfI+AFSOws4ewSIuG0srTrFW0wVR2wZSvvwjd8PfXT0v4FVOhEVtUYjfNS1VE1X0pUpfEj7/YOw6hEYgvl0cFvkpbq77zX17I5f1kUckuSorGRwXlSLNkvzM27PojYN93t6rxrE8HjfGugrQT0EMh0vjin0Ih6B1XDC8hN783OL1+hUy422bd8OYCxEoTU/KJJOWJEGqgAYANiY37NMVQSK1WfRqPsSOwIg0nGQs81wt5lLRHtf2mHGZ0ntV559jyyv3+p47UD+KiUifCf6slnJytTv78jTtcOQ7kHkSRrNZW3wfXBOBeLyhwmnN8eILlARnCCEFmfbTuuKyNSDDpMo8yOZO/LEts/SYT9pz4T0u7/3rubw7FqhmlYH6Cvl02vFk6B9tDIOx0xn9f1QxcniNti8sWp7JR9O3OySTrg93csgmA65mgHeEoO3DpwfmeVJG9LU2wAfPKBHeRzZrFv3ydWkjoZ1985kxo3S6jjWk3HPtDMe+T3jskgFEPoXrAU+HkqDKtNfc5FZsIp+Mj+L3izBLrzO40eSlMC3oTuHsVvG9qhmIQ8XcklvovH41k6GRBkq/gc+twRG3sNny4rA0pmN5zFqM1UtAu+hAHqizsS7fNQJdu7KSsk4oftLWjDw8LuitUyKdanN/yFFmdtfIXURfDL2H9JDqIs1RADhqRUdfRycGnk1Wjt+iDFCpFV3bSItwU0WeU4ZVLnETWgQzsyY1bFACcEJve5tVBRbGUjZKxr1DE6x12iAobHODjg2zyR5CMGXet502xjp4eYY5Idbro/Rq3G93puO410l+mdSAXWBFJSRl3lVE6tZAoFFeYH5uzMQLEEXteLb37C/bqSNXUGRyEdBnVbIVl0ApKBwnpNb+2oHT77tev+m54ow+EaebV4SMkMAbPjWAv3HeptQ569KR9hzv7DyKcohL8dVHKNSvUvoMUfaU7kkjIylXAnQtE+GjAx4SrcF3EX6a31vEML+c7iJH+MZ115upBM+QEdncEQJJ28VoOLmBz93hJEvzLtAExu37MLPcf6Py2U/R9JjWMJoqJrgeBxHiAYenyyIA9DQe2SHtLJqCCOSOdrV7aFJETX5SsZs8EURNl9aFLtd2UqErkIqSrFrTprcuvhdKLfOzrbDGIdAYxE+ZNsnNxhuHv6v5f9mcU2g5W69bN08KiOXQY4VRklCEAZfZTa5Kf4ONaRkfAtOyhjqq23tVfR9NA==';const _IH='ff618f3674f9870aa665edb354a671f86c0472bb46a76e4dce50a4a0f481b7da';let _src;

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
