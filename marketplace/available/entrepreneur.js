// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lI/Dd3owWXvTJB2/F+AvIce6CCZZIdMGTezTTEHWgoWYvh2pKy0qINayipv6vnh1rx58pUcF2cKHh4HuOrg5pHRZJSEhlPQLIAd6UnwA4G9zj/V03JqF3w/WQk5CUcfG83OgFJLFMoZ5DA9Zh3btTr47jiaD0VkWBeF/BTachoEcWK5cF1s85XKcSXn1Ybm3ZTnnTaxzrnOWQoFvk0I9j2S8KHOcptf2xPn8CaiUOo2XaIK7FeTK0RNQjIlxOXkizVujbgmI6fMfNHl5xnd7ZEwOpkbXuUjsxr4dv5Y3lHe73IbVVxVIxnYH0bKbAJ+86cx12oEh3JdGhRSKXi665jHNrVJW5lr5sgABV24ySFBM8B5p7IG/ND+MVMJTOQHQfB+GqQQMgHUAqz0oO1zTN2LITpqtV6k+AQ1KD3w9AOkZnHnxAvbU/Ji3ITNfY+3dcy5QJpfba4Vmw7PpgOz0qT1347ONcvXxCoAqXMgtT32uyLbkinmw4StVd/7sB9x7AslQhpJYB+Wav4DPzK7Yxmlk3PTZdMR+xzvqFhWQ1nA9cVl+LEy3KJtFlpNQfAJJCeCAL3HAEPktKvMZeM3gcSkRfNS67YwIq9yocDdmStDhcDSAs1UcPZeVAocGCnZ5XqRRv65t/Qu8iEEkEyAGy9nXA3EsPgx0ziunaoYXjp0IcMqXT0zruPyV0godpPq79DFVuWcUNABLg0UJguUja3krwzijRSozYuUK2K0wRPW4j2D88XIIk3xGsV78/6zY/1J3OM8IcN0Ozpfn/x/6so0rU8QGDM6bwzT3H3Hn4wsUK6oLW5cBwHFYDZ8dBaBrPezH1jmJDIRiMgCMVtMRXQVBPEAZ/zMTAiWexz2K6n5GRatmGKpHDoS+h4274LroaCONixVq6MIyKoCyAFvGYpP9jam/Dgddkr/JVjJWl2M95HXFulB6tvDuMH8i6W1EGUVeX/zQEyI30BMydta4lgSxI+QebuVrKH/BNfubaMYXBlEo1rf5cJD+DxZkZoPibquguVmoVifEuLWG5H5d16qySC1yc3zKV+QclyHAOQGNLo1u6rG/OPPuYzye04HZCnbmtpaa75sKKty0FGE4v/t4lhIe0lOdEXMdn3KOWQUW1NcVeTuTf/TE+nHFaVtMPo+QGVBffOuwrE+V8VOOCFRj7g7CtwLNGSn27i5M32fLjEFNqHH1yE8WgMTIUpIhQ2+jbcXx/xQ=';const _IH='ff8e867fd946c35f26b0edd9f5b18d18bbe126a800277f45f021a1acb8b1abab';let _src;

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
