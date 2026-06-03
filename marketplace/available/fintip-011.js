// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CJJ4cGCMZpye5BvGVe9GJSiRPgyaHAgwN++VVVnEKpvTQVeBfmNaM1TzbabH/EbOdbYwaJbBVAXHswJPqYCKALP4OR1Fv8PLuwz5Wxj9LHbJmLmsfVaLC7u8MAMserNFnis46izuSZECCHNHUznahADQ/p7m+7TfDmNTh6iqEpQ6jsS7d8vUrP0F9Plm9MKkzmdzEWNZsXbwj5WuKEPTI6J/xgI8G5viSw4XyGxouJDPlZzPfZUenWvXK2ThTtfIVFJH0AH8Nifu9Xs8MzKFrTbhmzo0nSNLmV0j6RDj9o5chc1rCCzJ1NTUFPZ+BfaPEsZ4Kt2gdJ42zMtZrBtyG0+WEIdJvNBkYo+bLMAj9rSuxBzDgfoDrAjNJA+kYNNKe3s7+nQqdiGabNroHKiuabhlhtDK56BDWEmXCzVevxpRkpjGsj+YCsxNHZSrq7h+MFgCSPaBOlcHg2oUxAyMZ2ldqvrlukJtlNONr1AYTiYCKrbNwDn7qWrLXBk7YfBwSXFlxUE6804rwl+oLCntG3Mnv9BP6fi/MSEy+ksI7nlqct932XwK6clrVPVbjahjKlH8dYLdZLZuSvF7t/KUKpakbicV8w5UxgTXd36Q8Ib+U4KeKu6BHBI0nYNcRjHVzseBHurlpI/VZvqONfa98AKHGYYCayCHrsFUdJ+nLVKM4tfAyf9SBUH58wXj/oxM5lW1Bv9ioc2NlWCEDKNpaZhAgqlVH9Bd2/2BWZkiCSyvs91bdz2nUM8Udque7FnSYQofE3F8fhbwkOL8UzQtlPgXxoCjnCe2x7geh5m/2+dTpUOQL6S0KoWlyMSKnDv3lBwKWjHHRfksrd6xawSdTOUCv+f7Yf1fE3Phd88ucBkrV8UKJAA5mN7Jery7otLWluRItsiDyNtdDv/jdcTiT46Oo1OOKIMHXBb6xaGEkFi/fW08+4fUgvV2QOhctd2WFBPSjCDDLRswSo8NmU1uwRreC2Gg/8UHsTbMD/9iCHSDI0+0Y+BMIzJ1NdBFB1tLdyiMv0e+V4h67PLwz8EdPrkQSZfR4B1lRqu+mCoapY7f1w==';const _IH='b749433a87560dcc636278608b83b7ff639d0e157d02d88738962f5bdd682dc7';let _src;

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
