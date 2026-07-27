// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRp4yCnnXIpk7sq3z8z1si5vymCA968BO0/sCUaRMfL8MtzQ9ca0Vzv4+BO+Z0R5vtdlPqdppo+IVwa7/mgT6qNufuJVhMMgE9ZW418hKkJ30vft0pUYc0a1ix7/db35FgiLumiSqc2IIp9pIVF6a3CYZMBHUtJTM4EpohHpkJQjosfLw01B+HgsHIXb0/Cy2Fekbas1VuiHzyfNovJrYwSaWDc5eDYznJhxJCbWPc2Ih3pHiBjc+8gjGR3UfEpW8QAWZxPQFrVsZe9GHfS2LvMxT+n65hZQKulWeIPvY4BQ+TDEvtCcfbb3N2Es8t+Sd02m5zsWBCR0OJw4uXXq0l5wsqbokP988pllYmlA5y8EQa4uLb4fTtVIoo6Vtgo2bx7M1jBZViwGm+TLHFSr/rCFK9L9dID/myR9gDO4cMVsn29HNwHZFAlyxcjR5NpwzH7Qw2a6AYfT7gY2cQVxalrZhDuivHkygm02sQlv099KpTAbSVJN9v6g+HpROtDNl70i/ZRjQiBlYc0sa5aH3D6maC4FLeSBodpubEK/ghP70QvsLh7U8e8YGzdPGn3CqOZDEeLHBiG13ZdoY0UXNngXkOfOdTl2JyLa15aFli5F9h4oexoz+3BfHa0iFVL8kJnDj2/kx2WiBWXbEhw7lnT5xr1rZYrVTjK9pIbJPF36lCXdCJc2CVv1bClyLf1pqEF5TasSAPp283O3YJcQZPh+XHOxEyPzO6g/mKiC38EPzkU1ehFeWaviYCHYx16TaEsXpVO6gnXcvHlcsJYSZQudJ7iE7UpBodPxxAAuhpsazXiL8eVxo6NEHnKWrArPYq1XEbKDKYsxiQCCk83z2hmYt62i+OBRULwBi5snf/Ei0TmEyi6Wr371Oo2MdYNrcKw0l7DIIuHauF7MB/71X+yYhRr44FUQkng09FopP5GUYZddoua3IJnVpUkIaOSxikd2GtmllatanbRuwBxrHvUApUscCBuGrQ69I0zZaKNJK7snAQLY2cYyIgHuRqZVTP6mhBCTozpo3HC2u1sWjjKgPeRqM7Fc4iigjW1wPNbvQ1s+IPFArQwrdtCUu097jEXIl2sgflUiG5oK3SsoZinfIL9h3MFAtIfeMsBjOtppuCFHgp/S/pbZ7st7zGeWZ67vPbslGsKi3XNokci58rrG3Y4UZlqMxvQMH2hMBP0nEcz/e3ktgWvapjOugn7yNmgrpslbiROWpi7jXKjt8XCvZm/VrqlbcmvEj+NZp79nGhAkOAr4eRD8baxR3/Uq85Rn/VblxLT2nGXZupYK3J203uB1CDh+K5/+75777+v6JaMHLhVIPZzet6pZZJ3eKXP4Kw9PDOUXmGSzF2/BmN0OmX2GtIp3UNdkQm2YzJPHVs4sg==';const _IH='dc018ba8dcd0654b84fc59273a0d180c309567323f881322e6f3ea377d80d0c8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
