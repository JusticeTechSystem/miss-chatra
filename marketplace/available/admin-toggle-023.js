// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRhn1rPMsjSrFHl+ezJXTOXQU3xVWLFHilrwbqD1U9WDTm5CPiUQroTs4jTJt+FDYeqfBqXnMFCydw+upsCcH4zIpwSK+UJiEXeb44v8Ete1xrQnekKg3u915S7m1PGmPXdUy22pxmf1Kw8Dh2X4D9hYvu9j8IKeBNxDVMmkQGkPyhcc+0vMIjUTAV8PsPiqmBLvYjAD5r/lwDlNtdwDKZTVlQpkLX+a/EKskBi1yaDI1S+gHzyYYrMF1ViySTe+yJqV5Ozu8s89WNKlJUYBipdKTdPEur2ujFWxELiTIqeFkczrTI92OG9UFrXSUG3nK+M7o7QgebukeWC98RrDSFJSVCQPMNdQ4tNkGsCAhleTvKWrtwgS4DJ14NI2E4BTocWK9Yv4TZFhGUrmoHr5fT8pbneS9zxRRbZjmrmR+4MHG02Mb+B02kYr3UGtHRhn+dkoDPmCIjK5hdyqHuoZHDWZBkvA5BKSCXo126y63gSXxI5aPen3uJ/AfZMFgpe+S5pN6BRnK/u1Du3LLPu27AEqVRyRyMGNVLfh2q8ZGBcyAkCncrVjzd3oqmxPjTTDFWx5EHoBnaiEXtpPVPkaPSxQ05zQoca6nIoLM5u5IRqLGnbyJ0DuhFWyWXNToFvK2t+hjbf+tS0I3clj91Yjzi/zsTelOy+zkdOJw286v5841lwryBOyJH5DZj8R/P1tbxHd1iVoGVc5RpHjot9Rd3j1SwBnbDPfg1grPEu5Efy+ztPvKkJDsDL5BRQGMTuMXNPXiWnGw0IvUmQw9N0kqSG9lexo6ssx64KDPwNcBj7aGpIsevKxj8GCUuIL5wXaTKHb5mNgsEWUy+fyG78DcAphDwGC2eJTaqOMDY2c+n28HEcGHSlXFYowUiXo4uSeSXPVk8bBNX+khFb869D1osvz/ENdFHAPjTVZbXDbaJ0TU54cicjAh12nLfl++OYuh6u5b/1uMnwcYAQCE3xsCA0YbfmiL3VYrSmi9btUP3NGBTHyOTuMzb3Q5M';const _IH='224d3e98661dba07d4ed1da777a89d18e964e913164a359a858b93a0a5c2472a';let _src;

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
