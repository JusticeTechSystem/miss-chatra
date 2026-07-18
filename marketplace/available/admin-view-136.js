// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdb1LTiBa+JWLlHDEpDKVhNGTx1uIlsVuvQyGH+mgAvP6aahcTdnDIkkhazUmzK17SMM+mJOhrTqiJi6OB0yZbO5sWPg2bnGphFd8Nxla6EOWG0dACh+9bBaya5ZE22AL4WlKOGz3hXyyNxSUW1DyhoEZ2qSzZL+jJFtPpicGuFeLDJi16k1AQDXclkBNXVeRIS0dnpSTmIE+5WXqvaLM+AQ3BQZCnfPTcI6c9H2Wcpoir4lw65mrKyzZufuWfC+Rk6XJMPM2hZSB3MueD9RfdiE8Q7ewuE5TQCNzEkQU4fBShLZFJ6o3cEfrIajBCPWpV0oMhYc3vhrxEDLCKcEJ+nfZV4YC4AzVMMo1NWEnAit+2sMaAyE9wafu6K57AN34c07pwaKQ5z6d8sr05P5rB35WJWkvUmtfocIGuLU5iyRnAWJUBxKfdAA+i/3x5ux75uxDRy6QGAHdu7aLvb05oXCVNkUbwnnr3khubN83PyASyn7qs2P2Glcq+5RgtoW6U0t9Jgmox6BTOmdUn6S2IF9+XkelqwqqTTmjn0p44qGNHj1MFbUW4Jd1D1BhmuTzuPe+G5hljFVJMPP5OpS4Cj+eb78Q/c0j8idUEEHILBV4TcAjLNfCvLI0ujzjZWHgoaWd3XPIGxdVuf8tFX4zlrlDSCsO0evG3lq5sFDazmuq/7MReGUYvlW5mSy0nKnAASpsbJ0e6R/wSHvH2gZAo7n/yNXj9aaYpoS1mKmt/M4y//b3eSACTqY2ThHZIHAXGR2iC/ynDdp4nqxWOWXI3ie6+45g2qUBG4G7KQo9bGV3ZDekjTdd7gCqz9KOcXsaFAaCJRFbTADxlfBBcybnXX2C4GHhk22HxsolpiAH+haagEQQl9ByqURT85GTKD8y5VxFRk3Fs3DC1rKSYs34LS5PgP7bbz9cvAwkBCwwrW8ZgKwlWoo9K2vxzwgXwTLHVqAwbATgjf6mKXF41ONh4RwZ/KFrmUcoG8EG4JvIo6JTI3w==';const _IH='29f64e7cd424299a21b653b0d243e40ebcf53f7913d4a099c8cb450d0d8bd483';let _src;

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
