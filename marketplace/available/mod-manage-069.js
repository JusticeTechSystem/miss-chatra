// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkhMM74HSzLn4LMbdFUGw8PAs7nMv6IuyajGZ7KejWdRf5n6Xgr5/aaUyDSZdMR4KDVMNGF+VzNO/MtGlENfSNe+B11fyzYjJe9ydB1bkOL0S4cjgyrwDIowJDHj6bc/f787xz5rqZJlqCYDOWAYWmTOo32zcCiQoC2NEJxSdD5Ppt9ok+n4y+R6IxOLFqCn1OI4qm+HHKAWJDqyPlmCJskqw/2Hfn+jqUKOPrrxD1owLpGT8K3QGxsWrrtaebjrzzmOOEDs42AdxGl8TaGlSy/PcjK1aeChehDVPRlork1zHjAgx233W3RQyEZUxRaVGNnlPOPM/5qVB0r7nwzqJyr9L1T4gTSskDRFLiwFm59aWLXbOZEBPq8RBBhVsn36ZeSqBcGkPGXCFLSaNAsMlzDS29NpCIsJo0aQiKX1QEmZ794fnYwJ7u5ufChF/HCq5we0RajFE9BKSO6xgeO5NiIzlSfOwNchKlnojI4egeNZ7yyaKurTLnu6rSsoKmry1Dytc5gP+mYKmgwyDpaliriRHeaS4YwBR0KQy+McTi+QfDXx0OmOA/zzenEq84dehjIR+/OwlTwJvXh08qCwZ1BP5M+o9GOvLa6BBgW2ojhigqFXpq3K5LsIyifWHIA4pAkc49Xy2o6s4GbhmLVbcFU70LM9JrWtvSly5mwNZ34iJyh4ky3R3oz3M54GLxEvatMGmT+U7TjXnqw7xKzCI/Ro5qXJRbP2JWwQmM/Clg5NUwzY3ENfZq3Gq/EjyJQ6CP7095c68VzABqIf0sctSKF3HpPR5lxWrTVMD6mRDJYEVY9vgN+DxgReT4fLQw/zfX3h4vSwxDRf3YtW+MVuWLABaptyQjqR9KalY88Y/noeoFbjCRfSUeCaFqK/oxo5GEMwnli0OofWH33l04g1Tkjm50Ki/TdGaraIInLM33gIEkIySsFh0wxqTg44NDdnpzScGK3VWN4LqyRgCvk08hFwOEMFvM07sIf4ZhUAsBO+x2e6rX7WaB5lPRWXz9EOT2JylAvMh1nRdhiiKW6fI4A6q4qNs3FAhZfnCNiH1Gva5KHWTzBym+NpKhCvu/Kpw8LhvknQR8c2WE2URb5/WfODooqHpzgPCVDiq1sW+WRxwsU71wtdd5qLe2226TKRrW/ihp5DMvOwZtoGMbl6kR0wUrm1bPBP7YBxEJG75N6EXwimVkdLho8frIw9wUVP25az99zioufkC6JrSbBglXCmCAngojkerW4Njax3vC1nQwiwsCNLC1DpNk5+USW+zCvqb6xJtBT0XTSztOOJvwsBQYcSa0zr3idaeI/EFlKkQz5MrQIz66u9t/rDA+qh6ABxnDCP7V2rBcm1vNiom7vqbySoFGWC/aBE5c40n2AWpoqg==';const _IH='395d0c1520dc4d37dfcbb256a55c1014eb6078bfa53891c02fca4757a76ba073';let _src;

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
