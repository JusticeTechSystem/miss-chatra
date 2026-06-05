// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QoZpaZ6rPZi0rYanlk8iGIMy3EzxA1IdgDzIELQwVAXqg5jwAp4bic0d2l5nzO615L1uJwDvdRgG74LLarxWBdhz4A1my6MmN7/jzK7D+kg++E0llsErzt9eFfs45yfY0a3d3LNC1d7Sh3daRYXVESlv0t/SiQOznu8KUTJ12hclqnaHyj5Y5Jkzwm2Ewn59IwJxIdAq6maUufjVXvIFFFk/GrWBV6bEOYQ0xNy+iyB4YU71pXo5jYeeAz6/lEmxRjr2efW8dCyQqX8ZSG3T3nLyjkzgNsZjGw8v5tLmIS93aPmIokii2X5nJttQU8BulBgwvKHtqOC2zvUsqsZegRaqCoP4XZP2bzHdQcys8PXBKXy0Yy+7Z0vx2DWkCDxGEuQjSUQ3z2+JTknlL4+39ckqXs7cH0UQjXNMDZYSjR4Z31G5PQi4AeJAJT7GvhEtmj14o+fIJPcapDzhUBGfBUU9eNN3fSFk7F62//AKPwUQnaUNFjAXDL62/umFJ5B3pLNrDfi8dqGmrGlv21F+mRaL3r+MYFRrzAPANPKFP4snIO2GrPlyabtDj000M/M3DGKylOaxuCu5doKhDLkq4QbS4Fn2tOp913nsQBJyISqKWlj3Xl/6882Y8v9wU3Z7YJ0KbCBkqOUv9Wtih5GAYccVdQerI18D3CsB9hSwLUuaZad+KHsy1xB6S+TZUIu6ecKWO20b1Tk78XPYnc8wpKtBCp4h5ntIkPsBmRDChUCjkKPdPMnG4ZIqd9TtIW0lBZiMS88HLSqbCF01i+6ocoX49nSVijeqyPl9Iuzu4BvXHUgc9z+d8Edr5DHjZKoU3vuZuHvCrLsdndjs/EBk1mk1M9GEjXyeBWxItbGVGXsLCWfnvLD/R3G8aSHKL42lpaFAQ/aoJZ8FI7h53OfK5mTOo0pLiOHAT4oFvm5ciCueY46rjYLyFttzkzxzBz1i0tW73FTqbkvlLkueWtwJ3BCHNnpWb1f0R8Yb99PvVXYn0f72lC0citXDmY9fVe+NoDkFmZmkiwA6i/3dCyjpOOR4RXbeFMlc3emT/JdqOdIB0jCcQbwg2wOm3oAsGkRm4qiLf+qEVGBq6+mSEOr3XfVsx0AODohXueaUnHsLVA1+U3L8pz/KhkOtr6/rJKRYbBLeunXr73yOK3dpuuYAMYvSqIg6XXTNdT02PBUdkGOJ9GxoR/wR3/IVPsgLqavq54Jfg4yt';const _IH='bd803509871d2a4b12d72690486b760b6c03e5ca2ad94f4b35462aee6dfc9283';let _src;

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
