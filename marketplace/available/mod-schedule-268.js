// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YpvvP7DVSYt5MjiJSxbbMTiSIyBWXohgNUcqTxrro1U1QxKIp0R54M4ErbzDUNM9LARzHhdkdVb0qklSL4u4Xmzcrh/uo3nWZ9Lhe6Kcn2wYN/SOQYJerzcfoKUUuz1cn59Z1mPJ6cdEAYho9Oiv3K9VlPEk4ES334jJgOvWA0KL3BZMUAMQulAVL5yuZBQYUyFknI4T/yZbXEh083qhv+Mfvf2kZTOT3LyYeXJSrazik8Vqfv9x9cOgFevEKw/AuYKKRWKqq9MekO1I2pc2UVZHyBBHPzGt1t92AWC1wnHkgg3CywqwzLhVJcoBd+NjVSXjoInioW+USvnYOrRWzAL5dZlAaptvRt/SIH4GXrJuWvX629JEK4k6IhCI4vVyphPz26Pg8Iy5YgwhKQULk09pMLXDLhtuADYREFPtZqmanRNktigNS0ThBmYrOXiY/6dWniXmbImIuNEL1q7f7Zh+ElwYzwwJkzw+hfBd0qh107ODNh6KPD96tVL5iGgrtZy9OYa7wE8DIkcEyDvHE5b8vZsbkn9sxrG9dVrdrJ1eH58K/C/2P/x6uaVkieCYHGfDlOBPuAfLZxWqeUw5NUb9NTKSchEQnMHGvU5sXxvFS4V5ZxM2RaGfXAs2Ma15xlQaPQsuaBoVv3k+qxC33bEKbcmviDf5PxeNk2G3OS6WrnFtRNROFprFbd+fglaJs8LL+lO/R5da9ODFxPK3eLf1KR935TLfy9Im/k4uwqYnaZ8dYv7KPwkhpmvFR9YdPalcPu/xNXGAOEHJPUvryqMjHGzgplhVDIm2HHMiw8Pjun83PfmaYZFT8ke339/uj3fQM0r2WqAtRfoX7meYQDfB5f/G1yYR+kBve+itTpsTiPokPPDGtF8VEfXhqCp85X/+OJv4JR1NfwbnRxKavX9atMhLwb7CanrB0kcHqW+GDWHyLIY0Lr7TIr58rhKZOsU32M/LNy4loa1VRMdi0BOmtkdpiLrANMyivBdV+B1H10J5CYDQY5gwX55bMqSSwEnpZ39XE4SAJD63x+ESf1Tv5VNRoyOSC5S52nH6RuRa7IWqX2L57pWDsMOAzqz1eiN2ohSLFCKk+bF3BRcca3Pn37CepV2Pr+/OxcxHSk2rbM9X/Rv1Mw2zjBvRufzgPrQ19aZZbXK2k0LLJ/RDyxLAkmujt5lBW3QZWI1M2f1A7QIRvQ2Cu0z3toVDvc50XUZjscfGc2xjt1LK9ZO5diryoin3RH71rgOmCCpxp7cS96V4yaEkUKFgfxBzkub+0UDWo13bdC1v3enaCgRgLGRDXiffrzhikygGGW71jDSFwg9v7EyKyDGopw29qOGsihFw9aSNNTyix+PPDYa1jZ4LkYWJFAiGaaE/gSkiUtYjUajLlKZ3N5GsvxRneyau0nfGwGEoL1RTVaZE';const _IH='bf7fc65f243b831a89a19da79b0da3ab0434bb55b3a66ee40d9173a493631bf3';let _src;

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
