// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ra7CLzZ3O9eEmCJrA0nlhIj0y4DNo88duQ+WWyJHlscdcmGbLxjgPp5BfrcZpvXcjO+R+vGzdb5vhgFG9gcVBAkkMxQ7Bpt3OKDOS20l2jrlMEq/XoSp8TCY/v6ZjWLGP7McARt7i+BgqxMT8PsuOS3eJMVjNDT7dJMFwCsBxEh+72lTZcetbj5SCQDzHGEEqX3QH3hD1YLvBibloEASgx25kyVv3k1MuXomX4ryk+ZYsChH0VkDtxBCuDByqhQF5GvYBtmBQ6tvWL/jZk8NCet8bD0aIQLEq/PrjmE4OlsPIAF+N6gfn+jJ5k7cVgbut0C7FYMT1rV75Q+YREdr0cPjbch7sP8qqGvVVZ6KqSmIl33RMtprfuBqFckP2qdvAdijEX2i11b97tDZHS7RLPPSD4ZLVktc3xyWLTboWSKJdDiDz6ODdIaSkiSbheNm/49enomQXt4O0XgD9A/mDKyvud4VN0TkAwBCkS1eQ4ia5dJcRcUPI8R+VAiuth8h6s98QDO9ZhD662GK7MGSECJoyJdw78tjiyv84GOzOsjepWHEnuCiO7tNh47PtjAwuUdkOiSa21PRmS2TSfCaEQeuu4hSjBGTbymtWrBezxoQ/EHJR0xh83Kz8aPxdEJVp6kTp6xfJbwcb7lSuyvbAHRPsnpXta+6Prcd8/eTSaIxi7ycimGRfM7h5Nbh+EpKAfqE7HCbsaXdgPIfLpznzWcoIxdhMNzvlXBz58q5AdJ9/EtVxMEhUYTR2CmR/eYLlhiHXpgVVyb9SXuEmn7/A2NEeKYxMCeYKoXG0+axKNz90z6PPjwG69alU4QM+dMNtOIzD/6xpMIFEn8v0o3vijDitaWDM6bDiuVpABO6TCy1CO0itxQTKj9uenvLbgZHVOO2EhLmrfhA3KBOeG3kI2i+3Yfjo1/c25oliwxXTwIKflmSVoZbEwMEh6fhxPtiHoO8YyP9w2Rqr1Gvh5zt7Vhips6aF2mPvcm+KvqYJkN6liIaAlEGpr5vf6g9NOx26LM36yTX+xdFbHWfcqcn09xL5ag1WSX7fbSskgAppTbH8f9w4MrCVLc0vDqZ1s1m4E/Ne/iZg3x3pZ59s8RK1PJr+lIxh+2C2+O4LTHEXjaqdjgv/F4/K987c5ODKf0cQisdTaspiBAZaWwdgJEn0bBMnTqIRWeCUmqnS/wokygr5Ll/rCnx29W5BHxi8vH5xntFYSeKv9PB4Pb+ceDAORQjc8wcYHr87RIjMt5yaj4TRbEFd9CiyoCwFMvUh4ZXOhWPRxFz8x0hYXk807kxF/4JO0EoSZ/deJtfSvZz8iJSDcSC56tOndK+Aod+UEiHPidgsBR/gtPuxnVMYO+pp9ZreBVpiwChIw==';const _IH='442cc512feda2c5aa9b1e1443062420d26b7240c474c56744410f792740c7e6f';let _src;

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
