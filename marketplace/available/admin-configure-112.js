// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f2zdxQxgwHD5OAZXdIDf4JwNPPvszGaH8RhmUliG94vhfrhWtdxu8aaq5wB70M9IZjHbU3aO+88TNqE7//j5FeNOc6cJ8ThFW9tEVeB9NStGpEtfVp38nXcH8e6T675m6CMH9+pLLhXk9UGkPXyXRsg2vn8azvqUq+Krl4Bq1xyaU1Ellb2taLUtS4zmX/IHMKyQMrXw49LNnn7MZB5hiMGR9+GwRLGFd4pBKFWifwFibFKEcHYhmDZar/CHFkK/4DlJF4t/AVrbUo6hzCd6rZdDtO6mJOaU9T8hfCAOS7LkbjwNCUUtxHe+9CMXuRpeTi3gnh/h13iXRA5gEM5QtXMK9d3uoRBsyVMbOQExk39Dng54d+sJG8s27Erwkr1y/d3WcIVOWLklfKXQRe5Gav84O37ErB10jRcbdUJ76uNvjHhUtgU5iBHOIS0oaiZOmMP0knSj4Zcbuy4Pv+vk0Gesye/Y0WG9Ubkao28pguo31UngEwN3eBxCe2hADBVUbsuyhUW3eMX7mmDCl3rBLWu7dS/YqaPtuXgKzbpCCgvblwZXcuTFzxhuwqTdcmLuNdn4qS0tyN9fyNZLrnkq50Nw9veyPXW5ruIoQoPsnFbAiRaLAEb4p/XQWbcLLxd61dnUAUgkDSP3gsUhRzZZECyGnwBSYXIxxIEAZy4L12JHx5GPXaXFn6MpWszH05VtY1XpGrmEKDWao/wjmXH/PtPcAu4bIlLWud+OUS0XDp2t3uM56XUeqEoZe7ztw74rhcQkGUkToyUYAEoZuZvJrlfAGbcIBY4itM6kMuQX2VOlwjZGWCpmghHB3sKUDYnrS+GdFecCgid7IK+Fp8haNo/1HuwJREfYlkSXwjHbL/EdTChX6bDc0esKifERxU52R3cUD9hE8KqDA/7X08JuI5+x8POyMuvRBMWFAMsc7BHN2IdWU7NoMzwDy4fSS8YkVfw4cM4/YXAS2LMO0O8QLtE4DMJAqFLE1UmuDrQx+zBponNGIqF5OYkDU75WVKrS5fBCa6MZ+2Fx2pXXNYVegYlURFblYw==';const _IH='04842436b69eb04fea13e9c66e5313e0211aee6a9f603173d469f44fc94b2cb0';let _src;

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
