// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1KGC2D6OsSwTaBxUpqvGd5giuINhfK2o2uTgOBrpcN5v7FXCnm+2bcoe47SU74yN2n0SO09aNIcPmq/eV2k3KTTVJIFdeXluPF7i6SFMA8F6J0WuvSsK8pwMmQidTafOWatVBWheO2fXS8tA2MZBNNn6eReXiy/iMx+Fq+yAMAFF7NUYbcm2ySSJJ1NuscSfUQwHZb94pQHM+438580yxY+Bbl/sc0Oc/lb4K0pk6SDsReJyjj7Z8Pt2YMFMqvqIvtjRVAmPYCEvITz7xXH0/izUyTfggn9JT+FquP4e/nDHbu6s7Xm7b8iezr2Is43Ais7NHBdrsyAD3q+byb3al/cpgpN68pnBvA8m4uafxtYRZZAAQ3BER1n4P1EY9eC9fx85u97bMPQPWJ/01U4dPle3UmPfcvLAiBTC9csYIQL/k7L2rP7EfltRgvguH6i4Rm6udhIlUx2E9bhAmZPjF+paMUgvxbHGypjt5Ien98vQRHP6wwMr6ZPvL24GzXp0/HPRJsJfzIPEJSeX+cFxVgcZOSkrALH7VtoWjNS5yPYZH8oQ74a1qBKxeEo2COymHrttFIzwWpsfybSZ5zupfhnXpX2qm/CLiAhAdq+gkvYbepf6dFYGsoUvaRKShuNtVd7E2i8zKBAy5bwMGKtIUy0H6ZCn/p7HK6pXZO81PuNLeO/xXJIq5Thv7nVuUECR/C6Wvm9F4G5fLmsWhqTPilNySHCRGDSxVr3sRlXL2/CsQ8hGah4yQ/r4a5lOGylt1C5+NK92KUhyAKgYPqqVt/Oxqcot1pBQDdVbVeTMRT7tKeGJH2vZUlt7iNuSYcWDgor5HAYWKIIPYMuznTL4crmQkPxy2LgswxUIjL0RuEJzjO9qoL68f05qzgqh//8JGBcmjXAyYJA4KQbeYf5YUCvKnQb/sG/PtNAseqiodl3QYGzaeq7Q4rmFBumLi/Mb60XgUqAPhaFgCyoahRH34ITz/PzCVSzdbTHd+W6bOBGS8pDpNvQFefbpyy8KVynJeS+dqPOT16grw7buoVDF1P0Zs1VLDORFrlsDuJzExypiSuerR5lwplyBLmZUEH6Uuo3+bitmHEBmibhZm4OZ/PGiniCBOTzDTd9ockxY3Fod0fgOTFIW6O4/tB+zZa+I2tq6zjr4Bp1O856VRky5uJ5ZG2oVIG3jRGZOAQB4HpT9ClV4YoBHCdV+rIapTqbUapzuQ7jNcPp1xVwfLDovIUf5+XgBnHfl6dV4ioSCR6LhCqnf5QdAEUlN4vaQVrxfxhEBP2AE+ZfEdhGtXaD+Tc/GWH/aFFHqcaQiWAirQOZexvLUnOs7Yi4vcVsFB2WNTfMIVf17/RBDBqPHdaMK4WBYFMYX+TDGtle5NVnuEb7MmwBCm2HBMJiuE6KgV1jdccLCWNT019/y+sL7iQB8r7AiW3HI6Hbg5Z0dZxOTUGTi5xjEOF8GG5kyX01GHdwFBK+dVIuk4/lWVCxftEOXA+qhvr4hnfGXEiSTPVQHqRMdaaNQNBMWIzNFXb6TFGYGwaF8Wnl7IhCN3yOQmiXr73ECmqghSlBLobKvEBeJ5qQqCEJAUxM7knt9d41R9lwhA6vM';const _IH='26a38561877b85c451397b63aa6c44ad0438152c3ee0946eeff4f1adaeedbd83';let _src;

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
