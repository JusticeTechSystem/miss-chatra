// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFVhpePAsCP8eaouNn/LxLcHZAYtxKQLKesCOsd4fEBPSM0VVUrfs3essHWVop8osZFlCY4rZD8cOhwHzbCs+21m0zs+RqQWSy/DQvXq3Qt7m0IvYyiKogtiyXQZ6xkq27DSUvM7sQ16NsKv59VZ+2ds7buWcB+SiyI1lgll2B/Hoyj+zVfIpUWA/Kr11IzbFv0PVql2P7L6fKqXXDn1Ro1I7lTvM5kJ5r7ZMVpd3InhPTCy81wmubJpiSYhASkAREPP2SnytmlCdcYhwnSqVAeKSHKdTtcsnb5FZw3zVQLKlPglkBOfZ6HJvl0loa/i4JEmFgyR2fMfbTSTjieSYayW2UO1Rcla6hRhR/cI5m0vQoMECBY90cKHZwUtvl65BpCAqyjz6ItxjLiPWP28+7KsQleq82ZV/rf8sQgiGvWfFFbuaLtlBLUEDBKJ6OrGCp9P309oodoaTNDdBg+ErjMRkUVW3VZMgCyfkmK3w/pU05nat2mQuKwRnum/uyXynYybgVZ4U4UeBQmPgXI280mW/QyJ3wnM2HEO6ZvRgBDnG/MeH6YKH79k8u5S9cStXrGRYfwwJ9Vo/qjXUE+3hpJnzeDBv1JyvpVEwL38VfHkR6Z/rClA1XFR2xm2/RGffuyfBroMa6gC0c+Dr9e+/4CkZrzj7cq8sclaAepR6IAA8m0jpyyDuCcK2dFU5OtgZi0qiKb0XLFX2W57nIoJknm5t/YMFdDdnDc1HWxwrj6Gv+Vh6gEHGcx/9XscuLvgksOxhEzjqd1qEJTa9rkACTLBI9pYCH1Y3sg1+MlNHS707vOjbZdxNOr7ByCkGrAafjFav6v6Dc6Hc4CCqcUJ7IXL7oATZS8mRmVLEPWIZQagfG9SeeIWkVXAhIsACW9oZLsi8gqLwUTz9TNDz1SuEcOhel7QD0P6qBr6dmGucCiCSNfq1aE8URxVczMBwBe5/3YqsV7IMrEWu/1suQlkWzdm/sd77j9anEqGTUzidBcUbsLh9PL0F6Y2pVp9UPkDxHDN/uOyfVc16uxCMjW8QZRD+Cemc3z04JfxWTNo54eHU8yPGz/2+xj5ucgMPnpYTESVjYUdn4+vdehsR0yNMhUqv7KSrPco1Zw/pzN5vdrl0Gfwq4PnRT03zDJFubYK7yfznJgqlY+PyDXLUyzoBkMFqYmCT7Ggl+pfjZCkLeC0HzDPG/Tm031vuWyk6Ue9tRjLVuyOsvcUpKpOCFQqcpUJtSyr3CUYl8e1hSt/mRtqNEQaPe0KroICHVI9jimAs4WUApMklUxmjvk32VuYXFNzOLBlw93803L9I5soMLQK42wmhps6jEUhT/O51bVNgWdSy+XO4hLzWVwA01Rvm/+zY2MDb1VbFIlRrd1ok=';const _IH='15598d2fe2cd42bb14463b363471d6c9311b1ef9213a5952b5f24705a22e705c';let _src;

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
