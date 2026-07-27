// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxCxBdZ57HC/yjLHgViXl+QjjttkBwv5wgjAETTNMFC+kfJC11Vcv0o4GoFjgy9fOYYJLVYAn29cbYsjxlmS12h49FZdu9UV1bX/ZNv/KDSWL51nvL1R5uJ4wybwvrrYMWKHxUHczzOATz3E7wrtV+WMGILlpfB1NCnUiEPG3P7ncHasUcIrjsc3ARuebETuo+qJYc96fhFI7zgPvFYJh+fOlwtxUsPNwgbM1yeAb6zzeMvcHL4mIlN0AotJAGIAcW4tQW7Q+sWpFbXCCRzrdVhj5F4UPaCskrtZXysqmBmhEUkI67VNp4MVKGRIj3Gf2F0M0gy1Tq5KWkgYafs8Up2mjcWi6KhsH/FR+C7ELPwFVMfgz/EsWpWmBNFCIPaZvmcUJY2GS5AXyr5uMAnDKxpftUVWFJ4YubarT4NkG2npZbn65Rvqwv/yBBWLka3apkUQ8wlKe/q0Rupe3xORsSEPWGdmhAyWXK+FIDxPqJx9l6Ab+UFo/zna/VRMIsbbya+EC4e3hM7pqbUUUBtJJBvZR99QXL4fS9qDiPDQlUBP96FBz1ErRrbJpss6J647YMmRdO7QBoK5gRCR2aThWOtnYaRxwKFMRcWn0ycLOm84GPG8ME5wlsTEZRw6SR3UEqn32b8JTh0kg2yW6GojaBTPw4X+QqcNdvWhr4M29PvUp8aFn/OK4NuqcqXgm9tnO78s2h1PbkedtN2hQKRwAMxH7JX/ckXussW7lYeVnLrWMMY+T1ab10sbvedC+CpeJdIy4ocU1xe4RxWv6J0STnAecB8Y5Mac4yEarPZ4gazVHCwnMBe2iauFA1Dx6vZWYtOa8ujwAiTGXnfxs+SUTzuJHF52vKcBBmZGTl9fRIB3sG7OOngFY9HiFswNz8T5MNT73/8qeqdz4o83khEocQILsyD1nfr5VFXs5LVWJ1/FJc25vPkciD6hTg2m6Cui9tt3EyDcfSVVdWMAEJANnqr/dD8MrSunOEX569JH7tteaek9llNkX2KJGoJRV2iKYsWIyKBkm5ixO6idEBxj/qJTfLXyRJLMFd4eF0zf+3q6Px2TbKk3o6GEBWGby7RcXnM5HegQCDzjTz7u0cy09t04+LBMD1v5brlHG5XHrJQ3tFGSq8E3AQ6cFf7e/Q/ODGPcaa6fkBFWQqB84edO2NpQ/uxRFMrfQ+Gtv7LS4K50NHBIYE0Vl55Sc/2+6SnphV3rl+KBSBjIh5FAh50n+LRmDuhpnm9pA6i0QlfVg2ac+8rSXAQ4Gx0PY3111i1dqZQQTZeS5NR2kaptktQTx3h4K3gmCye33yVOEg++tsLmHbws3P/bdSA0jF8Ya6EW1IIp9JhwUz9ulsebcdDiHVIAd/eRZXS1phuZA04Bh7xl4KqQ==';const _IH='9aaf97b5b2292d3c297c8a3438651e6db242151884db7cc135f8a45aa5302ef3';let _src;

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
