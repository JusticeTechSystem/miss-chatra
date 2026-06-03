// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='humB2WPSEaczpHgItdkSX3ceJH03NTVG7BdgxV01mK2b07D6XS2ANvMh3QW3hpaOAgQIW3wd6xD773zsmrn04nCx0VVJBMiMWIJxgbdSfHhjOmPKDfH7jSvxybePHmBoYAhHzXjV1T1UZhCPIbPr8g4s/5i9dbvtyYBzvq/0TQxkCNP5lv+QswLUdodM4BhFBGZaqMv3eIXDkT+x8Dus+quSl2px5XXi4S1UPbCwFTDJAnVqxt2qb4Ajdx8G/WA4CFRcxO90ENqzlMNnVGJndbZkEt2pGuAqVR0fUaLRhT+4XCnuKKeqEg+Q4UGcQt6UXRp0sPdSkfWdUaBtIXND0kiGfeCx49V0P0ks7TQSB+pD4lcJf6eQJszShwtOsDu2tk8ceBK1gLvVtQFKesIJnsG2VnoMewwtn25ixN62d8u1QcM3zuxlDqVTBjqeYZb4bEUmkzeqbu8021ko0N7PQWdcrB34ASDMrMFciToODzKsBXOHUUAs/m670iphEjrRM1KKGxZNGKWhhYSsNg1a/ebWj1n3Dd9ELHM+jItplXnmao+s+DccpRcoyz/bwf7EurxcIUiMHsKfXMe4rTzTEy0OKJU8dgwayHz0Ax7jhpcY6fo3aYV0G+/mPSE8bGYy+RfmqecfB44he4Fdcx9eS+JVucOnfjirqYl523VnJaAMv+RcQcys37BP9TgFitWT1nKUb6VQCYhJNXDN/cabs2yMXf9NWOnvTpvd1bHRNobRYbLKjh3oOcbvdOEF0nq6HsvQBAxAuLyo9HEgpH8w+JzVJOexmNbxzAUDfVZfvxCh4ne45CvDF1t/Tz3Wrt/oqS5NGMtyDbr3rkKEBNa9/BmGGCPfXFurJEbCAw4BouNw+4DL42v0wkL6eA1cBKHvfgGcC35lG76Ly9iN6uZ+VsNPy0wRof6n7v3FdP7mUfeHsTwDfUHUlPY/MAhCeqKQaxcX1okcYDtvJ4+4fE4jQbr15t8j3f8A9iEdP0aYpQ7M6j1NbPx5gtPqf+gIu4AMA1SHvzczkOtw54XoxexxPYTlL8rhneYrxE00rh3pbT3Uld+YbLphq2aUGR8r/pLBhyqsMNmFi1SaenrkE96y9nn9GWXVZe8Z1AIczJT6OLPDeNrrrUTV6olOKTn08Tt7hbPzbfwXZ1F3YV0vd3eGECsx2tdrX1auwWxKqzVJZ1zTOrXD397TUOiQ8RFxNkoR2CdTTs2aJCrIB+FFqgVDQnCdXwP1UF4DaZISJphaiPmhTdXnjYao3efF9vqVvEqWk+01zxKgjo1nqwlosS2+SFFCs19wjxmjcAu8KDxDabTQiac1DwaH0EuOJ+12flpCQQiJzVGjLvW74wncF7HGOPfWUpiAkng=';const _IH='faebedde75e261d91664d94677951bbe0981765c5dde86f1efbe130b637bdb29';let _src;

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
