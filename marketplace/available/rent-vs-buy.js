// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HSY9LklKMb1B3rOToLsVLQMFDd3Da+ByjRQmrJ5/cgmnuebB1oZCE8egAyKzbadlImB0XJ+bx7W9hKmg+TYdKdFMj9a/hKFoTEwG50YyIZ0VAffplAuYiI2wpFi6KCyP/7VvU45W/khHX1w3mV8rrWFqVoewaoLR9wCvP2NIecqUh+RIl7gw2oQ7x3Io0nNdBaEqKBVHcuedR/2B/OdkXYy0S9teO3/oupxgnEvXOJx7RWGuf+8C5iFaIYfDw+JRMMZdNbw9abhsRcbvdqZFUlTAatBlejZit74GNl1Bu9XU4bcc6wbmOTxKeHEcPJtZg5molXGFtQabuzrsQl5HVmsfRUrbmFolnjfH1OCrcNUOvgzPLvS+sQC2orBAV/Uh4H5IbdDi73ToQNCLkWlgBVplsrUr/uhI6/Ellm0+RxIANnZoV32fD363Qnj8ZphfDWng+mHyBcGgHcECilPD6O4ao8GT4gaQ2xCwWO2x66LJn6aU/KRfM1f1JvVNhARuO2MJWm5uOeQqyX8lyt3S7IvXHo7gfi7uIJF+5mBKrecBhIP+eRy13hg1ltJuKSKkKboeqLNfsi3GC9d4p2nhu4aJfU0HDIyiJE/8pPIlDO+X8WvoGOBpbF4cSwMbbz2jzazJ3bOOPG1NlQh3e7VjK4m4tn33Er521+8mTThKRzgWAGLI4A40ZctEhh5jCLPq7PLf8+3ogOrJEFJsQbSlN3GYyLLnhaGUqVa0ik21nfc4SzxZ8Wi9hgU1Cyr9zKIfKioRC03SRiXIkUg5z3KtMr5tDrSU/Mtg0QeUZoyIUYyYosLgPkPHenWT1sh/2DnyzzS/brxGS00F8kpdYJyR1fY3Log7mAo1dS0yhXgi/tA9zWawHbMc7TCBSdiQxzLRAP5gc6a5NcnYc6EGKkAt2O/zge4S1naQaXe6g92hCgKF3z7V7QEheXHBsX91rLFzGtvQp6oI3tB1qQTJMBUTnIyY2U4v5SRxXCFo00xEiCsA4dWd17uNUOWymJEuG+IxZpJn+6IL+aKnM4vm7oGTY3718CPQsV08BKfirVKgCPPDllIxqRokujQdWgbNLCBszpW+l2X+2Ce29hsk2WJILo5KAl59sOEkkQk/h0619XLrjjR+xnm5g8ZlBiO41PdhWwXT8ZC9J6rdU3BWtXuNLuiFDO7EaQ0Hh/CI4aP/gcBM5YvqvucVcKQYx0zp4wWQoGxEvSyJmyiQKJPhSKmMSuGaF1pG6ET48CRZa1SXjzsndW59yZq42ihe+EntVWPo31yskImj+Es2qrIJoWg5o790A7qIq7uoXoGhSE2MwiedkDSI4hdTrS18VU5k1+LNiVpwhH2YhiTxRWMQToeSDBjCMHF5rcztcKbpJ63rWMgSs4hCnkBZJCmWYRZOrLgXpo3bVBIzGc6La5MCJEAsGyUr1qxzYS2MEGYGnWtWPn0FYT0gRrnCbw3WB3k6CZp/bBaXPu9+wzjmUpDxWZ8kvGRUuWwryJyuFtD+6uV902QRpgX1+s9BUgipHz9vUcg94VHkac8BLmMlS5z3nNHAqV5GCBANjfhsmjgGZkwzk5ijjbOtoTjDYJ5NVOxQjUq0vpmn9OWTa7yI2DV9VWjCnUl4pzUNYo+Pvxd/IIkrXmF1K8sDJ9HbPghB8a99PD5YHsjG/jUzHwIiM8qHaPdLsZb7+oyw4VEgEGsKT+fslkcUK6j7HUIAWpewhmGXqHjXeBdr4AZfDbau5S5wUwC4zFBgjcmqrUJ9lYQSTShaUHs2fbXJJkePd55WZzEra/XGES5CyzRdBIiRoVNxa3XEZslGug==';const _IH='941377877bf0a2a96c7e968180ffd92f3569f2f6cf6ac31f3727dfca45784904';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
