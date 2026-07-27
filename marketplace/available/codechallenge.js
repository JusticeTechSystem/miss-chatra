// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRCkULuprofbUuUhWOSaRRKCEXwOmhx6OT4B5X6ch/Wv0Xm57NeU6TWaMhAL4CN3dJQLbVswS5gv8hhdUOocwErwUiGcjjsjTnKTjmPPwYq+hNbyo5NYK7bcCOukVUmn0OOV2tVFQloB/+UM17wvjmamFWU0StUiBXbn2RqBTzPOcCr6PZfBlXNV5IOTvFbuHOP1q53jPZrZjWm6cIumQkMwu9Z5s1cOvl6gs2VuA3VaH5XkqaUkcEGM3QMPdl27g+OnJQ59NWz/bTOnfSXGCbMQDZSf2HoJd6+Gf3p557omSMjERUg4g7dB6yoGfU72JxIW/fVgA+q0E+LGy3w+t56AMR5PJw+sh3xRr0yxK/bzjcF7wxresi2NCye2ZDrP+q9Cb3TLkQkBsJEFdk9ER5FkDoNqn0/1Al8RryLuDmX6dbKehyOKBrzH7i3+qr3umA+/7yaun71pry5U+dlDqFU+vlEvNUvac/K4tkcTmFMy5Pjmmq+BQsy5rVYPnK0wYibZONgkD/JA1JsQCY6BWWVmdNDXEGL/SvVIi3VUbQoMNlgSdgnLUtaF3XOsC7vpT+CtxYBy5L/po74q9uiPX8xi9hX3rMPVSxj9aVNPLWNqJ1tGe92235dp/cyZli1WiI2LWGkJ/Gawx0Y96vXspq0EBO5xzY42hL9NfSdXyWKCyLovxDep7mCQrH+ZJkQhTwjytJ2f4i11/uZ27LO/lbvEQeaT8CAjTrreqepN3kanLs01GmVJq8iFRe/IzGUlPvbkyPswuwHuZhuUTC5z6LNQxGY2GbloQ8wC0+DHCrxETcCPzXXKNVC4GnnXO/ROc5aZ0rrnXeEf8VsBmb7mDvvR+xknf1i/DwIkgNsbnSK0CKlzB92kGhiotnmILk3qFGEEoyV2uj4reW5Zk0bnCGyaALBPvtwv39LNda8diATILBnpQGQ7dWdJXUYPY5bOGbUNwDWBMhcWppnWmR0qB7B4ma/RoZnpsMw6Ccrkyi/nX0BkP7a4ZSg9zovD+5VUYmm0U707J7VToVqnyUq+y7EsyzO1kwRBd57Em9szV55yWnb2lJLOH5UfheIevGhGIMvQaRGnXq+LfR7N6xkkS577S3sd14ARJ2TuQzn88zyEuiSDyEqFn05roq7VUdmBfWnM55HL2DqJls4EOLDVJ56UmHVVao8BL4C3nGJQLdoFDAi1N2ub0jxsM/xh2IrLt3eKODa10fARMayMb7jEOKilRL';const _IH='9fcbbbd6d1f7ed7d3def02761e93bebfc72f3e0d96392f492e87882dca30794b';let _src;

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
