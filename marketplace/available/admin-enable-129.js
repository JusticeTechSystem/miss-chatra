// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FhppjcQTJmYRj90Mepi6k4G1h7k1omDXmcgVD5cID++H6lItk6BgPUX18voftvhlV/cPHjmn2WyMogPwwlcI+yYv4G1hwp3UWCDfIBnJnf17r1kqXxoWz/4U/8DmBtsVLNm3362ZBVrP8B5jxG+uahknuumAgAFQD/7GYg30Ekceju5BQkPstTkn1+b0uDqS2DpIkLx3OsyV6C0hY7KWuIUe6zEAHbFGXfl8L3rqS6Y3z3pECY0bJjWJhaIaZ1rLX/ZJWQIgBpOvzA7Ca/WdLEaaib4jPY/5oVE1Hamr5OCs7BlSdnwVmpGhWKSDhoTxPWpOEvgaofffBkHAeNvrAN9G06HdLvkilzfslftSBZfPL1/OW40Lht0t3hTGiGa+cD/dL6GeKSa6hd8AiaiHI4tNE9UbpsO6aX5vPI7rr4MoQl7bNITdZf6vPdYYfm66FN43cY1vae4XxjWKmXgAa7jCKaAU6PxGvS3uXcyDATZcEntRf/LoUfwKvEHiUeNZCEiAdgypuTUpTuxWc36kYrVR4NECStm7ClH9GDRclJRkRk3GvQpUo5oJNd9Fg8dNTwubglRyJC6CCh4kHOC6q+5S21BVkRspi0cIwZgpGMjaBFeKf1b6gwFULqgsRRFpYeIr0obzhhOgr9/pKkeQPqhxYRXaSz9Elsy8j8ZGTa9NfrQ0/AjSppF2sGPD2pBajeObFel0DHLE6TEqpSoR4BC2rZaPp5W+NdyenaoDpzhT11ffwNOohb6neXFSHN5yjD/n1IfCfSQ+wrEVTfrua8MVzhLpQojaRin2agvMmkn7H23YEzhcCEshfWLZ2aho0f64XkZPUTcLkdk082XfWns4n5+ohlHXA6KK+3OODOdmcOoOrK8tQR4RfweqsScjkakwcZICUMrjbFyCLm19JeeBADTmDyEmu9FtHzzd/VCwW65xD4E8iVCfSuUfTXJq2LqLIefzfJcOM+Ng0h7IaOyGd+0VKlgt7Ky5GpKXwa2/ruCM0UO0KXCUIKjLfM3wQw==';const _IH='1b7a3fa452c43585d0f898f0f43dd5298a5307040a98a91a303b342aa52468ab';let _src;

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
