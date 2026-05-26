// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U3gg43Z5ZR/EIG9rlT1+IXcibSMoAlAwdlkNGHGKSM5S0BU6dyuEg02zJDt/I9GBf+x9uiVJd0LlaM+GthTYjR2bF+KqtPDGHJEe2GA4GMjrnKeslK2sRxqmgIUcb6s6JI9M4ucUw+hzEE31heDRKTdxOycWZXLdV7rPLjTgF0tPygzoB5N4AJp4t9E8D7hAoN4KH8eu6+5gbasnh8C1lrEc5YcY+TB9wbPJlksgM0/z0IzAWFtHFU2zakurlusS4iQ0Ore1Z5FZaB1EwEqK/TnBPq0fjAam+/wZglKwcCir6Dp9EcdhWuoMxMP7TwlKzLY3rwDbSORYQr88COiVtOASZ0iCspeBASd4u6JR0OnMA5M7otM5wA3XCFvSj+BKZCsPyNiM5UcsWCc+zk8Wd0PrYxAOBZRHUscFAH5HsFtkFB92dQ5zkQKBnABlQLRpV4PK0UGIkeIJ5qncBEkcdUc5qP44kH8VWIOPvF6rvT70C1iivEpi3g0moWrxNIEbp9VJ5NiXSf2dm2Lx8vvFuDF65o8DYPAyvpQJ1XDtFkyfn8ElVZ4sL8Ft2SwVx8A/jIu9wlPnJYVLwa88XShWUGU7X1/Q/ZYjFrXr+05NWkgw0sDAM+CsaCvhqd68uLAHLDioxYUldXYPf6k8IFJbzyOfBtBaSl3A/E1q7LY0biM0OURCAQ78QM6womlAxmFBN9o3sMcXVc95B/NNnSTq2aaYuf3077K1LH6YMy6x9M3GjSxOuUKSbtCxsEgBimS3utuJOJWOOrvhiAyKh44BS62FIvAwPhh2or32hIgGqgygVM+XLKE2PN47WDYP5Dj06njv1itwDuY7vUgizMd1uUhWsdZF/b1d+Ue/fnatpDpzshlZZdMa1uuXnOZN+u/xtkQPpuFtOhIA7HWyWYibis329niTqkBlPETYls6+DXFglUHSMSOF+chma+CO4453GSGY6cepfTOrSouB+lB6E0T1fgjfBDTSQ4bS9YfZi19xASIOyM9ET1G2EecU4AjXKJmAwMLWz0GXG1Yyv+Wqf/IZaEfzeXgl4b7pdaZacbTqXudhFtT95kSI2HcgK9C9+9Lxn3pDHi7wfWDMHj0d+SM/WNkYj9M2CXKFgO4rT94ix6jXMK+b5yz0iqcLMe0XH5goWJeW9dUWEpmu/2PeEPAqkUBZHSlZrbM33Ba137NEVlB6t2YfEZ8wc0BoJ0LpiDwOEO9rOaEUxMpfKc2XA8J5OkqYS5+f5FyjQb7RQ4OtzrxQvDt71v/kBmfS7MOa29fNh5RIOH62KDfsPH+AIUO/tHj2OfvQH5o31esVjZeM0dtgs5y7exKRJnAh0xUk4hKNn9rv9dPZE2/hRAc9eAM23AuHgC4P79vn2xsbOpDvrsw+UuBadT9d3fp+vr/nOlQ=';const _IH='27c503b16cfd0a90da4c785cd8e36c251d0b5c56eaab833ccf9d48641c6db03e';let _src;

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
