// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IytkF7xIDqpTpB+mYSWlt2JBApqUQ+aQBLE1EvAj2AmCoT8Ngp7zR//IScPPSzh4EFzUciKm7G55lX5UixsWrm9id2ifp50fnKwqsog4j6M5EiBUA0Lln6u8ABBFNrPiGP21nV2XtDrq11q1XItRllShMtkzp9Yf7ybhh2nF07Ei/g02OFrCD/08yyuVeC5f1hGZyEDJGH8cqvktB1RtKcLDCzQSIDvtkoSpHKBCslHjISz1BaRi7Gic09Wp8ZuKWl+5PhzHdp3kwC57INoBfsSJfZJCPRSipBhYLqPVm+pC+32NOr58+9ECQen4FZ6Gqih2UnBsKmlgq04U4pPyLsVg1pZRVrCUYiip7uqVyqkXOHQ7swtufJXJK5lNeALcJcS9JYQhMYjODKpPMKB1igB4fwGnmhPbselyTuiX8GMYUeISARhD1AYaMiJPFjiUU7IO0PkQxaye8X0nKY8SCAfukXL25ERt62axzshKoUrprCj/mqQ5+N2grerS8trwz2nbkmhuiOXaCjCVqEOvNfMPDj0lE9taI2pI3mO0TvbyWGzdfcS1MocawWVGlVp/o05jCgIyCPZMK3YHTRU0xi2Yu59qEzg+iBzM8cNj1fLedAZly+n0+CiyHbpahwNqkd9hZxdeYPKiDW/c7HCQScNzVknudoh7HUWFemYkZ5YE+gZup/l5LopWhoIytl6amWLwsn96FIkwYY1AxQJhp2msVRfVkNOv4HbPo5909DJy+lExPP2rdcWLEmStbyBrEPIqb9kaL9xehPq5FUUaGE+ozLBYn8hqm2hlTY89yTbiW2Xot0bn5cJdez+gIa6zXwbvOZX7/OGXRZPivN7htQHTAiaMpQxR92ZknC1S69OznkYzkY33h4wvmDNP/38yGeTzcx5Etsz19/sUuk29BouB3J5C9FenBSrdSzonGnkfIoaptsndseX1m8OHx+PrUnM7AmW1GVeE61RKwdTyTI4Bq62ZyLMwgs6NjQmqwuT4E4Y47vy9U7vUUPjOD6ZAQA==';const _IH='d40b85ae1bbdf08254d74b51aaa4d188f7638ecef98480a3fa79a83d2130e824';let _src;

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
