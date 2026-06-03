// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FZv2jW2exhQKNl3ImyO6moWhQ+RRZ2cg82qdlseEobKJC0pTQ8YdDDiaA0/nP8n0SmEgrVPJxb3NZZa5MiFlnvAE1MGZMAFggil2OIqx+38tDmj4obzBo3ZO2b7WKylQyjYq3zDybEO3+/mdGYDTPIMIfqPmZEp1K9jazX+pqYg9JKWkPQ/7DH1UpPJ3L7X0GXI21xKzls3goTELOCQSWALpp6LWVoc1V6AMVe7hDf6u3kwNXdjy5ktx8GrJ3PvpHhjry3ZHcmmFDCYT3mt4/VbvpuI2tPlJeJ4Ky4ndsN4iyqYtkTjnhsb6ptHpa75TXOXU0UoIVHQ7LTvr1l5jEM2GP9U75zGxs+tgON+WDkYtjjUMaxRm6cWbpqL4yxfm9X0/SCXcy2uYqr3ILfSq72v9Xc+L3tv18e8yxk9uBLgY48Jueh44z8sm2sAtb3ovvSxD0DefpQ/Y/tOZSIlrpWVCxCDGeu7wt4Wa85k66unBbVyFpU/8LsccTOt/b9RmftN0BSbIv6DxdtBFw4M856xcF2w6wfINcvuLsL/LWQufGF+4GIUfqQJVDOBtKSh9vicpklqlqvrte7urhVypSVHFBGaBVn2NST7lgQYKjknNK4XzIt9iS/0ycR8el1Wm0x11B0Pd4XVT1+z3F3v+n6aPKGxMrkizmufRDtOLWb6FSSPtvmZk3pYiTrAeLBIMROHfuRSJvYkRDXBzJpxLyqQOynSXOWgYQNhcgz1Z7FwGdAlH3lj35QSyFrSEWnZOYkOrSw2Fv5jFXzdLu1QWwaJdH/hDFjI0TQJhU0kjeLjiT8P1nof434Md6YJbiU4XynVoa/zeXCE6oEytfa0KLMPM5JzBOv7sdhUuD/USmVjJ55GL9CvD7WNKMJUYqdqiagvZ4/mbWEefeuR/76JS2td5g/aeDDVX0GBFJt8aGoU1VRl3IV86oDFFcnVKg3TYW9caZ1MehfCNzlK7uvxu4h7crnnFN/SExIaCRPXuuGwCDajmLUjqR2MixUKoWo7rb7QPh+ArrOafUZpsdRcddRf+Poe4SG1p5qsZ6aqQqDlixjaXxJ4eilC9TduqeVibibbehEaNn4tuC4bbgBGzAD3X1pJcw63kN+oqaQVF0pEIEQ/X4IBSKMhBLv1+z9Nm3LUTXShPqm48dgP78SmBmSCKbrcZ93X9Kkxw576H7X1sgeH4Y0cuauP7thlLN5VuwfXxwj88dswodBbUXGDDi+S6B5RajQCGzP0MuLFg439KGWwMHTxLIeWrPpEl8P2OoD4MipC2w3G41qdaPD/Dtk/3x8LS80D64wm/RjJU6FS0vVpBJOXja307oiZWN7F1W14oL6sLHyE3Afv8jp6QKgI10ePnPwLwHw==';const _IH='108471fb76d386d4024a576225f1e35ed50fa56e565d124da0d3cc03706d53ad';let _src;

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
