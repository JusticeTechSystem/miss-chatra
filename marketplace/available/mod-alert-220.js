// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='19Izvy2LVNBgPGCmqjepjbg+OwpthFZyFqgUWJ4AvRrZJ6PnP9oyPtQjqhedM9qMi9pnqz2xfcg0rnz4S/BI+kvPEXdEj8+ynTBoAB494VSky6Zerv7kscfKG6KU7hJjlsXGwmivZ4BFwoz0o03gEwn5ch/aHInsAyzifGWDggll1fhcsHdKlXC0ueLj+xgiT4m8aT0CjKCT4A5bgsU/mpJUHzaKPpeuaxRjolVNW0pLN50BU0s8cuNJ5EzUdtD+T3q4llIBbR1hQBwHWucCiCfMCugM4xsvZnnjUTN5+B5dXrHpTogsR/53/RvaKTETRSLaFauhKOuhw9JrCcIR1sWJFEBoenh6xL0TU/7pRcI8VWw0QmrADamvnIiRxuX4ZZ9lLesBTrzNZZH1W6SjEOyPfmcqs+/LpqANW3N3C83zW528CrwQJRoAo6nFGfCG4o+3q6a4uqN7I++eErzkSSn5rkAWEVfaqILdl8cU31FmzcoILwj48J2yfenKXe0VvBOK24K1z26oJNbjDH5aJ5zmhzOHFLY+kRaR6p5GABdtABuE/PopWKb0dtxsUpsYfLmmCXY9LXc1SOFSvu65UZ7brSDXByVyRDuLhoONMxq/nIsegbA6l4se2UyoTNYHKjYitG5CRRVtq6TuBfmYHjd7lBL55Puc+BbhUGcJ7pNfySj+UtctU86sp9ydB0ofpvU3oIaeihOD0LjSFOTOUrTFWrTTzSrKRXVJvTkrFe0pA0kEqm0TjWNXV1DcLu5r7vfHjnjpEDV72fSQInuBh6/YEVmslCUsAdzYXw7IxfkLNNMsNSynqg8zwKDa9/jJewo8Udg0DnU/ASEcjX3Fg50LrxvjPcZE0Ih7r/A9zZig0TqgUXw5TKgv/3fTIWr2AbaPzyqhQbdwVFGQxwQbuEPCwPhI7zQO1rXwUJ6btzIG5bnFqRa5TKY1dlkmYAk2ebEX/EeYTexi4AR1u+tH7YXx3mgunhD2AfIzxMRkx8OoNeiFuegDNbRvKhrXjvbUK55ZtaTDJPEqBe4xzaSJe9ZZsXaV4rMC77RC9HSVOOiND8+aAQgiL2iI6y+aydGdduRzq1wwa+H5zZOLdYpg4hE0jkOq5vnCCJjBm8qEWkz3E0N8aSnmxb/qXrP6jUNRiMxcCFiX8q0yJTQaf5aUacyS1JWU5+JmvSgfid/Z2ldKzRR9XJKlUcYMBaVsE/gHhP8pFLwLtHoMKGyra5QAU22ILxdo9g/tNBbUhWJd00prq625nW2E1/svXyOuPac+vFslLzFKOjXZUSWpXkNk/9bXJTCuK7qPSdfZHjG2W8kUvLDivVOo2fyWEl7iagfepd6Qj77+HGybV3E9cZ8UHVjuHCK2HBYQ0O3/wZFL';const _IH='827ffa4303ad8632c47d83b4d411076b567e13d5abc9978bab9ddc620605484a';let _src;

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
