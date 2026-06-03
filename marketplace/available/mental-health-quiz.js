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
  const _b64='KMps7jl/vi/ps1Dsdwf9BiIznc9aU78PVmcgxTmO1EkEysKJFeEs8YfuOGeIxWS+GYn9+c9N2DNDv7MniYCrWLdD1ZmgKQWLxouzJeaTGkrNWRNzvhTVAxDbgua5Q/0kOUvPl3g2uHOSTNgMddl/iOnrtlvQN4w+FokQxysp0CpngQlcNgrn/edpypp0ux4djwHs1xI87ksDWt+64xTff1M7tcGLahb6otMq+GJrJpW/sNaEwMMfw74txIAD7YafQSjp2lDyrXZ6GEM40zrXOSDvLTssPoXFn3bKs7OwonQOVsJ8I3P9HR+fwAv4PnPh7iT2/gbpl1Qjp8UOnMdZYn85yHHrBAofSkzn8kw+QWC/286tLx8s9TCDuKc2YsK3oKY21heP6Ch18d4gFPMSCZYV+GeN+/C2HhIAKmpKFJQhfBDqQpkLHFYIbQ1QNNg7WcdEjdtxh2bP94yJ0+u2/HRa1n3V5pwULB/UMPvRE7AmNS51w2niSVGoWvCGGFCgkNzxM80gNo39yN9tR/Eww4pwnUZVKMj9Grue6X/NMQN9VeEEuhTAVKcRZv9OQT22SmVvFeaiTqI94AGPNNWFj2j3wb2n+aGxw1dzvbknp9otsu3K/FpFGa3bRvIe/LMPAIdv+oP9SknZSlND05fZ8T2mSO8SJYRJ4wjRYi+l3nBN4aq2LEAEw10e/QY2BCt26rrKLy3qWypZRHhQKwk0v/kKwZnqnD1vB+iPytz0KmW/hQxeEzj0U+TIhaBp+mQr8d6LORo7TegdXpA+/e7JLJUYJ0f0e51q3CYewVkRsl95cEBJz9bOyjEybKhnCzob2vCjeG5teGNfID25JAgD3DgMSRnbBBSBdPuZwwSUK2SdBJiIHeySAl2VfvaZTQLmgO9I4F8nKwCTyb3REKVehbNj6gO9VH9JBgMTLQooI6E5mnIMe9YD4oe8PEc3mMINbWbegKxGNB8cvmxGBiaS6ExJ7DsitpszTHN+BJJRUd6l+QG1V1g8D5sAEEElSVNNzA7xxnCtvs6RyhIT98e8OuYMOJ6w/p8povKLrvUolrY1/OHCZyUYnLKsySGGV9ZFVCeY2pMhyRqG49a1w3W5PBRoydLRtfzDC1MIekxJBX2Akk3F8ZYuvGdEnTFt0mJ1O3aRXJW9SkgPmKMdAQKrGBwgkn6SNyewGS/NaeSC/sIEV0HLmHzLCb3oPf3zBgnKrtz2dr1S0yyNqIDzpadSwEPV0ILufokUbP8wx8SetIhR9R4/D2unqDNFro25rEONdRE6U7C2nv0nL5wlmHbMZqdyNRf1KTXQy/kKCwK0uk9Z6Cp96TPkFqYsXHkGdRyps/+L2q5dLGGSbiwrniC0Vls6PWbHdmw=';const _IH='2d332519aa30d49049fb9344ac4f61efeaca3b4e80ab1f6cd83e9c3a2f87b16b';let _src;

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
