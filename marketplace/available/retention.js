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
  const _b64='T0JGdjQKKq+J1OPbpeIHTACdYA0wUC3KxnyT4XzVywU+B3D7RISfiMrtOTsyy3bRshNtB5q8hUMfuSSxJEzt2w2RmGfBNtZnEx6u0w+UpQ5fBx3sISNjqKn50U+Y8JgPrAjnItbggwPyh+t+D4V9gG8gosEoKSH+MWt4DZ5dpozawidasYrSs/ZFFWn1gSTrKFIA9PnVnpcxbOwGUm1SRFePLc91gPG0IMEjLT8bqV7hJLlMqaMYALqaKwBJTLcMDDFglvcbvLgr2FRIE6f+E4kNHsUYHha5Bojml8rsSXWoHvRrCl6P2E1GK1SLYbCLnz287uAi8cNQOZtB1o0ex+s3t6gtgw1yqaFlyNIOPN2rdb57ux1uM6b74vuaM1Psu2USTJaMub3SssrpoA8NfQugNy5+r9P6VBEHhWGvPqwEVst65fBIp+1wi5AUGQHiK32YpaMLbOsxBAuQjyWXuaX32p+P9FjrwOj9VxNNkean4WtwG5le5Jv0q9i/u6+pw/TUQS01IXfpYJ0gPWphrYDN5UgKHD0AO4koiTl8V8yxYJ3szp9w1eloKVS4MtC1kBAsMmc3xJ2Qgdkdq7lUZHBIFoBI9Tf6Ra/sk63sjuUlbMDPOcbLqGtz8EiDxRfUSf+JV9k5N4GIlTisb+rdQykNZz6UTfmS7JLmbxq5rsOemH/gVJojSj6TDDONnsZQNcrkMGJqM9eCx7uLbbFK3KHWJmv8bBNCAHzz9xJSf8Dyi7oYtXrathwnrs3gCQxagMXuRETADcLJ6q6bhya9kIPMG9vrtcLpSBrtuz88lMOIUAN1qzpmb2iO6PrKd3nTsTS3x7rH3xGjdNgrXDVuuIJTVt9f225G92/eDhiohIt0VwIAUnB4sSK0/DuL75RNDjbpIse1O9W9iBrPHA0+UcB4wzo6RYjyl6thWCTPl0bK8qBIUEcwp/Gf712uBMWI1+Gps61Fc7FBtGJpwruPSKhu2iIxPhF+pcHzjcinh+Jw8qMiw8H/wU7HCyOK2tiAmzD7hh0pWUWVdoL/pGw5D4bI7CJ6SOlvoN6T5ANd6Mk2aTKfQlnzH3ycTNKeYuWqzF8xz0zdrgtFu7qhjkxR0WpoNVmpYRYwwcgmAwAZn60oGxxnfI94Lp4EYFZb3Zvd4CWl+urlzK7gVf6FS4gDqj7ZQHC+MmmM/thuvUYOeK5q0b9REs+mT128oA3YIkNRE8KtElVMacTAfix7kNSa';const _IH='f9726828e9bba48b19fe1d0159615f1b9abf71d40992e5ab7babb575cf9dec4f';let _src;

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
