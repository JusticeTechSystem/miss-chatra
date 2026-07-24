// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBNhIC1WQ7fYYpjxw5/5dYFMZ1TmNxY2OHi5DWO/kXKWVECxYAck9n359vGMwG1WHfMGAu/QwF/+7iwHZrl/Brt3E6vEJvy9YFqOrMYlSyDw/KG02IYpkEL7xBp5Rdw64uSzuzI1fCfLCA0wxJiTG2hJKCnIKddRHr5/QYMQiTZP0k1qPulVSVq8DWg9EnUBwoNnHzq1s+b/U/9GXsLn2PxNdMaZ/ucjuagEBIYdBW4/Pt14ZsgJJCp6geJABgWMpXsMYiTefK9bZX2OZnTf2xbYyDcsLKF75mUAe8GdcqIn0sDSQeLHLOvpFMJmLg4AOhOiYkvQsuAGuoNL0laktA2zhd/EqZfpRHF6G8yfohJqzEPSBYrl2pPR3yogcvqQtYU1Rn6XwNvw/gqemATDfy6TdqMKocDcArbbTW8ByAy2/Fu7xmGlzzAb2n+wh8GrYphpPr2WMAGf2ZgY7K3tR9hn8bJwyjJppQcZ9GkchkGF2z52iVJ64aUTYBVsdbP4quOBMOzKQPMCnvuU875EmfkTxcLduqVvyGpULgVgkgJ3L4ePairH1JCYg/zy9v+PgAMJWdWlw1NA0t1XCLfs9tRwzdz/KxNz01+QxVQD+udnga8SV3Sdtj9gf9e2mQVxD4Aaj0soAe9UeMiYjqrZ/1qE5sncBaPl1muGg29LJVm9OxSdNs04I5ovkI22uF3ojTaZnH0JcCHy0Z9STBADlA8wcb+kkJMbPsiB6LvFajLUtlso89S/DhqQXX74/30IHDZ824DGM6tsBeQDAvLVB1x5mQXku1AWgEc1u1LytwNO1skxevRt8Y4Mrkbj/kmz0KzINA91BO5bz/kAZ/oMy/eS0TwTlvb7yKWdwRgirX4v4GU8u7i9UCALkSXFHjf3vIWJtwdSGCzNOKwfkaxWujQ9p6CAPyd3G3wf9imlj/eh/tVUGR/vlCDWnDQElqUZRKlDRHgvr70Tu37BRtyHkCXQk58kCIKQZfMMmfRsQg6bzACfDt+S4Pr60pjWgHGJFxXQVicJUAc50XYmgUkCgipSFTCS44Xrly61gRZ3gXdlx8K4pOj9bbNbdCFgBoJyMXPLb2tZQKshArBnZ2V9z/3QHCDp2hHT76pWv2nUxt4vxrq10REv++4rHRT7v+nAnhurmsQ1HL8/tfOZGpIy0OiJAkAacpZ/DbWojmqdimbo1el0LpFFLXHUQN9KJbhQ4oGVSCGr18juxW0VKp';const _IH='88f15c5be3cd583e49e28066f78b470c33d620432edb6a0a348ff85d24a2ef8f';let _src;

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
