// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sfgxPkspKae4zcfgMOo10sVUSys4HvmPrxOc4U3phYzs1DAmfIj0+q8Lam+L9LRbFhTQiZojP34UOn4rM2YTT7XV2lMBA8dEh2GmpOApTrOPtbnlM01KoOrSsBiZrP7EJlkpeRKozWOlutMhtYrWQCO4SAu5AsFR5UIt2YxEMiTS0dBkh8pcLzbBgu+zZbGs8+9/cU8gIFfBenMh6+ww5ela88jjz6XmsXCSY/DfSiAUJUFjW0u+nRvm4bwtahCBks6IpyJw0zoJRlmCB1LG6IL+y2p+rcbk+XdJYuAD2cElbdu6a0Q9fbZ625s9flsOON4Obsp3d4MNG7SQU0ypKO2NmjYWlBRjrUgzJImJVYkDEkyE3HCUWBwrJjZFOcm7ygovnmwPE1LLzhvoF5iQJlFRNC/e+ZG6i/Ifisca7cXwRqdQ54HTrky0avHdhi4t9oJcpFnY65zyI8UvdIjN8VDXgqjTHlwsMb6BiJqK3h7XKWet3LBxHJ28JGIt6KMsdSXiuV5nm1Phb0MkUae+oqTMd2U6AVtsF4YWfKU5+RtTYqR/GZPGi/gxT3xzC7YMgLpsqxRNdAqavh1UlSW9Xr6jNWQvj6+IFUntcnHmRFvvvaj3CM/FbUWl0WrIN3shzqV6YVfmpL47DUn/g9TaYUlI6Nd/ANM3OFpQRK70LE8SHriE54uAWgTQe2UeDQHAXeVaGH23VenBvI11wL9+k4XzYGgXsntWNAZm6uZOt9JM+LqRyDar/zmSegdz6G5jXxcKbAC0H8ccnEpGy5LTiupE2Wo740D3OkFzlmP1exjBJZnZeiSNC5rSAw2070kXdvMLsyTDMUcpYkWDbWmmxyNsEa4qjH/1fKfATFofBXtrBVxjo9w8y6HDBwsnGbviy6/mhO2cCa2/Cza77c4XWOC1cusT75hff2uEGQgrsFtFS+JT14fYZpdBzDvLUFRFsH3fQfTlAGArekygWfQmpjeoez6bStLdYWC/aj3zGcwDsyghAGJPf2Gfqb+NIMvk7jN3SgnqFocK9vSw+jCAXZkPTjuS1D/OM0XqqalIPwcistcS/DQ153FEgA7r5xteifuHyMTkfF12FZo/1ZvZK8PPBqNaVGDcn74Db6f7swAz9jITssuiIgo3mQHJ5c600l2LOhkgD/ZT5hrW9drDTYHaO6JadL1CORFde9GiWWhEXy02vydgVYWYmWfGQm9gTeYl9dL/59EJPnVRZkZstEp2+vaRYYXIC7OolJ8Bs36sEBUbnc8ko4zPkcffUwSL3zOhrZQtWflOXhbDluNUgsG05M84mQqKS/h5UIDiufMafb0v7nqFXRmdrPIsGg5QYhC3V9b8wuR36ZY6DDF3Lxa9hG049LnniCPofRSr7EoYTmY=';const _IH='6adf8fb087e35cb21530f22fc2e88b4ad8ef4991cd9d2df95a0332a363fa40ca';let _src;

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
