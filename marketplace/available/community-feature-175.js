// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQaCyWAjpX/gA+fzcWWiP6OOpoCCInEoqn342UI5rn1/VwQHChBXWPl9URxCyMa433Sh9ICcOq11fIldqJP5a0klR0mwBeQ7malmRIUoC+PnpD9U11j4r7i2SBYZfu0lbtiQRtjUn8/WM+ac59gz30RdXqgY0c9SILaEN4eD8sSmx5HoF9S6w0KP4oGl1XNegJLyObqMACLsJosLSNpu3UO6M2GAQxIEHMzUX5xpj2ZdLpbCexzXpZ3MC3cYsooYCaPgbG2tIKbni/rD7lLNe8ppyySTLqlAO4U2ZwGNjqTbQPHOC1jmlF7p1Q1Npjryld4cWNjwYlt/gVUw86yehRikoKEqU0SRL2mdcAQj3UugBQ4n/RbP1O0wAjSbgAfk/IjDI43zs6x3M3Lg1F4coqtLIyJr3l4L0c7Dz/8jStwCDHR3jx3VzuDdTBZqUGnECgL1YWRyw/aHfHVUs8dJc6wsZcmC021hWEcEj7NbrVEAxawMp1taGHL0sXxmEHS7taAMShLac6/xAbPONFMg71x+SiNo0s+qvBLb6QE64dJ3q4U+VccmL5DmEMTMEIzQ6QCppGdDZVUerIuUxUwtTOJjW1+/OG4Auy086Wlg7wkv0bvCTHRovlLOPrd4Ijk3EstQ7TdL/28RZ77lVlAUPnYe/0BvzyWZe2GpnOE4V3K1lKEJERj2ofQJGggbRgdLcfpaYldRtf5YrD2jNPObfC86/UjsOGB/pL9cBWvqiMEvsvchguiAw==';const _IH='d6fd9bf65eb24befc5188133c867643b9765321062fdcc73b4e1baebd48299d0';let _src;

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
