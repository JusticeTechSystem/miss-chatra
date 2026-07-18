// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRycB3/bHDUNi15Xp9ZHn4Jsxxr2NR7zPXIKL/3dD05uGMCCKs/kAobaT44iuQ2MT8jpyTIz531MNXykDiCg6HibPj0kF4crhe9cl/IF13P2bK/fnWm+Xn7zNEedZkj21dBD3c9B2SeWF1Aw2B3DzmBWyUkocucFVYEJQMx2vmASVdlMuGkmpKLLxXg5iAGdrZcgp0O6ICVvNdbgVZovYBGtoG3gt6Ct82YlTq/RyoDzXFLCYmJNBHLo1a/Casys0gdtEzFiLYxy+m8eYLEDPdhLX5+8bNu15qhdQ6pMOZL6B3HAZI/Vz3d+Wb37y5j+ZYUK+2jHf0Xug2ok2yFPkAAX/2HBoTAa3HEKPn003FGgg8ZtMHM6E67JcHV248AwfYjn+E/kuW8KnO2TLXPJDja3k2gY7jPgL2JYRhPxSeG2oQINATp0kAsPaNbC9COC8biNaro5H40OGIbY2qQ/U7FTDfxqrkpM4pu25MVwCqkvgptq3hTr0ZHXDMOCN7J52P0b2B8iQve8/MKeWBU74QLOR2skFZ7DfqjozNdizB3s9A3LS9KtQxGXSSHjMWyChMGB51/yMmdNKyzYmVcZkqDYYRd0xfy3Ctpx22+728iUk8tk4vMPKlxM9mP8ZBthE8g3GoEKtv0GcVTvNGClw6LIsFIYdQXFr8sBmr8+Io379x6DPsmWHFDsQBH6zrB1ZcTw0ubNqrm1cSj6QCngIlJiic1RS5nkl4ChqvCw4bJVPpEfIJ5AvqFioieD515wAQWzRHB7XSdgrkbQi8LehZAQsAACN0os/EgowGecOTyusbGDy0ETl3m3GWH7NLoJz748FxlRpAVisAzXmJpkz+DimOuDDgfU/38HYdoP7QOnayu+zU+XMwrwzKmclBrJNv4gvW6a0hmN5bo22IaHDkqlYPw4eLosleM/AaW9lMA1nay57Bf0SPmdHx9hquV95pWCbLen0VSEBTotIlC560OyRWzCI2x4UgecjDjs/r5PQPtRty21uSJ5lDsd/dTSecjcz+DXZrRS+SKLRWY4cxkQRSr+NORnrMMEyz+NV7pIgvhm/pW/zYER5vi+2z0qM9zVpvsZKT1T+ghrLjjYl+vlJKM161sDOqSSg1HFbuepuaJv0fxCiRhwowTcf8PgE9wgSUPfUJ8PNTf22MSvXk+eFuM91WYA38x2wml75GmU9bNAB7sVuxjkQl2a00M49eh9+NhGZzg5EE=';const _IH='41d0ecb2fedde1d39d0a2459353a972dc3710790dbdc90c3218c678cba0d3cc4';let _src;

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
