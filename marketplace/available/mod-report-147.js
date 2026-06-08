// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PTy/6xhHG6EGe3vRGL+S6rRwxMlJJWj+9P4iOEfaRn8Wc96hs71N8l+A2B6rUWHfVHZLb29qrDnpyeeP+v6t+oiYG3nb+Lp3eU6IFaPhqthMajBnIV4KNhcDEyv6t9KTIj/rfa99VKmhYYTJNVdkQ1FsZlEW8e5ibUrY8L+siktavxSndA2rj8Z53zbP5nd5cDjbiW7MJAvHiTh5P25lk0VPSggtCKYiygEnKk/O5yPM2aWDL1Cpqqx8zfnUtxqA0c2FtZJFL69mvfsJ7FsmeRfQPK4Glj4VCXY+4NbkF4TeTm5Xmt1llzdcMfoxFy6LGG8XcvIa83pnXtY0nehZxMdB7CJMqE1rRq5lhbsHb/yyZbP9HBYeWa2/A7PgUvg4EwHkXAfgbDNFfxL97hfKCtDM3/a0aCzWAsYrt4MVCQMMER6ej/LXOgYZ2asXfzFBiEvjVPGKpJVbBuqwGyJz5TjS//zo6ZBPJ/mFlTcGKMDqLRmQ+C8u7c9+nhnO4vEnkoxVNgxJ3vRi1Q6HoXu+8bEWdncdKdYRwBXine2BVnAH4v1IAO/nyux9LHxBbj7xs00gFubLpNWOFRsgSs9CUP1+FZF887FM2gNMVNcHuCgEwLprk4oZu7417kIRjNsY6ByzpAj4I2StAshhFvq+lJKtF6A2npeElJe/wQvXrHWJKzjh273awXGme/7y69ZxKkL+rQqge4dpDPXru5tpvAqDrTD8j6igf67C3ynndK12rANJC/34oFWen3vxdWQvbEHFqwQUxr8ov97n39JMrCwQwUNsAghzOvrkzw1zmfgy13UHxaaf/gWOatW4KrjFA/4izFbT/gaxqOHMiS/m6YQuKZXQu6FPMHBGBTeAK8SWQ/CZh5UDhdf6ntq7ZuUcric/ovk/QNRGFVWgQnvaeVrpn72uGCTQ7pfPnmMFhdGa6/YI1uXJ+7V0227eNS1FW5hwXakNfpgGhIVyn8+sjYvSuXQM2ewJGD2+AnAAa/ZGM6nV+U7wAxfMiGj2TWLFPkJSYKuiSU6QNiqoUbQVDXTkdeVjNv/aDSIren9QQRfIHtlE1DYRwrzxUfLVQgStKKzlw6gHSey2nmoy/pPo1Wsz68+k6bTor+tfTEk5BvebYGj1+iwObGL5NeNaAuEUd6m0cEYO169tOTckDHLB4BEBE5pUP2/ke40D/0sV2rqh9vCWqSgoyHf/67m9BcJSdRiwaJiZM5JErjrAUd8Ux53AECRvGOHQIiflIxUTEE9cW4MVl5R5zkhgd0ovXwgJMspfMHLARP7GDzbB72XejpiughHGu9ewyqUJ6h5jc2VZtp5EyUKcdPidHXr/e/rJPmr0QDvLR2dcw2GKoiRB/hOq4y3eYgApLxmnQn49cxUhZznOu/Va5Q==';const _IH='396f893475c06071ce6ae2bdda423c538945e515491e5f03338335bfad3c7430';let _src;

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
