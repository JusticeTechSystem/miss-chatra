// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQR8csVArIoK7nBqZfNX+iwB22mnqBNohO1NXUvFIuGBWF52NyD+lBWh70wHmxCSQS6sHBzh+L9orR79BOKCJA1nK45FYwbMk2q9bLh98ng7I/v8fJcWgKi9NoeOa3r7Tcjlhb2XcrcJMHgnOJsGWm2syPqF0b1f0ITQTEL2Y9G4aZdSuKaY3KXgNGV/yxq690WIrRimpyOaruXjet3jrUsocuvkcN0B4YJDAjrsg0ZCJCYBB7EHAjqWf0l3arSogJfpvOSxhaxBcr/LbnNMMGbPJixK2TxHsWD/busTYCbxinBhIGqjBy6J8VjZ8hsycIaPPT4zXnl+xc6XEPr4bM33JiY47OFiyehBjBWiskxCIIVfjM0laHc9cQtcL17AZs/DTIFiEKlkSNlbohNv1t8EH2nQrVVelzewdvD4o8NSXthj5EtJwQc6LVeDO3SwANVFw8sgkaNBsggYaMf4I5r9vikiNH0tCg/iERO/lGL7demXPNyhBK7TsiK1zeDsEb5J7Af4Xt4PaD4n7kPC9qArKgWkMFCg7v7aK+73RpwZeAZv5NJ5gGP6ekuO+qZ3H7mFB9UfFWq4fB5bszkjw7qM5w/j5A93bc1oRCXfV3vfSmjXX68M6VETonaEu3ND2RPbA8wjLeo0MTrmANPTKtV4Rt1LbmdcbiwcNt8wc2TN6TSF/ZOvXIW2xtRD6xriSjTgNcEeZgZlDKIhdVC8O0Xzqti9h12LbJh6TFNjNVP+g9whRXPygFaVSz4Sn1V1RErHIF6C1AigOgavi4OEbZbXFoNJAqdNf3XnnAhDpRWcwfoQQhm+JXDacHgTWeBwCPBL+293qmOLaxlQuReXfqYAa4uFQJ8/QQM6bonpWi7WdRLPtF8mZpeJumVZk/0KcOmi5vNpkj2mG4E7yuCUEmcVWlqSgxfEkOMApTmoRvIEpETtykfLk38bCuyoxKGgvwtu/ieA6dU/CXVKktwwrdZDlQ7XAj/jMuR6nwkDvhgLMVSh9VHau6nuq17lhbwkAhH1myPe1rlQ1Ll4MNWtPJMwf8tleY90T5bUThHOpSClGrCtvuzMCSw63/6D3rnbxmXF6kbsTDr5Neqez14w2Zx6MSYQTcrc/mWhN4FRBRf8KTtyj4c4TVxpTtXjyTFFmc9uYQm4OeZ3+z6fuf/PC//smRAymSolz34Bv2r0viBlIw+L3/0QAca1wJQ94x0xBfOxuZbH2Z2zfA1xCqRAnOiWxLFwPpneXjkRSbET2+dzilwiycWlQncwFw+lscPv8dFacOk33GQRSz6Iob2yp+nLWOF2hdRKLmJ+warVRFlDKBNmOrMuYCf3RqvGmyEK3NXgzP/J8oNPItDUEriEc8I0liIseGoHVpCtgtoNg01TcS2yoNJMIfa6lv271irLU3UYOHIUsPqeQQBPRZLZW0Rga2BTV7Rwc79kzDKicvNi0ureINSDzqeDz4JlSfvrn1ux9XGQNfFqju/4RBUyxtwyF5mZgptsR2nl5ZPwC23xXCV6sRjPLz+rgqkqCkK/k5PrXkqxyYM+qUai3CkqGDM+32kriHnxNKF0X5ZUtZVnZ62C5VFLHmlZ8cB0/Ugw+xXWpI6KElR1jFxmkDpCIP3oE3iwwNz2MdSm68iygPXi8U5OOtteYaryZUAWlip2FrvEnCrKZlYzGroOmnHrNeuny0R07RqUZyFiQuXx3FiY1E6';const _IH='659f3f6fa8d9a93d2b492c3e47652f1df5d061bb93958717b71730a6a23f72cb';let _src;

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
