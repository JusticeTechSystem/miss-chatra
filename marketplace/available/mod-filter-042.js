// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B5VKfnY9GnfjAx4ThzzQVpjh6I43BI95FwBRmmNt/YloDVSp/m1j7u0WzU6l8i5+SXRlqjgqD0dJb3JGT8zFUsovtxEa7QrIGtbeJ6U0iLkLUMQqzORXRYdSZB8QS6ZTRE5z5sox2ayNYyQxePOtxIjMLkD6sdvdmcSyvpYEfMw9p99B1JMQSBPkEoWQIb2t9UdjCcgp3hAl9sZynSkOkuzmnTeahNQ41BQw3X68D1WJnDV1yKRxxsOBAXGnyJL3L3hTxuI9VFfy/Mbsv7uiZJelgLFpNPkQdzESmBYOQG+KxFNKwX4KUn1Wr08zgFGbx90PwMB0eRT3pFd2/8jdPlSW4JDbYKCgNZEvHdcK9NSG684mlO+BAZLN9pL/dFkyRChno1w+CVtb3yLU1JqTgoySQpimF6OaQHmCPrA2TRUHebFDnq2PJclNhbaMiFPMCpqFcruiKBEQ/EFaoF8i4SNRvvzndNM4zbREFg3iUVNkyurJ/r7uR/mHwuGZfuCZfn4sK1oYD9erA1M0J/VDbiLtwHwcmMD+7pDaNzJXjo0egT7D3k07kYdO3bEDXUIDcb9t41ePFycttGHnUYSPTmQUTK23zORnqXGzgnGt8R5gfFd1niB4gZ5m3iTpYi232SVm2BPLPHFO2ypyef1Xu3ErieELauNmAnNKLxfjr2ekbL2oCzH3ZetYpRH1V1NPqmk1AGLBU1S3BYiFTt/cQvJuqwGxQQ2ssv+Y3/M5YlF+9nRlxzglvxxbWgmje3vFjTt165ssSdgrxco72IzdhGQWAdHjSbhfsnMZEBF+q8PKOcW63dwLFTwjulgpc04inmWc7UrDziNO0MNlUjlVWv6Uen4VWDzHQo+/Rmc3qow/TTAA6bLHTJsaCjxYDiLVyJWZi8S0gPnYlDNWWeKYZqrY30tHkDxLbJZortdAjJsahF0AdVFfJVlqXgs59tg+TTtk3yqMCfJgOTiSQeszj3QgHZUsShdgilDyPmmHWn+MX2qyUoHX2mBovNpS6qEhhsSBBc7Q8DhKE35r9WLmyvFA6/AyBX3v37g2/1vTmsGAjuqDFp2n0BIN72op1VLDurZfE1PV+QL2OsswJuZWVGmUJYWoinZHKRTHbIM5Y6Z+LeX7KDS7Sv5CDX7rKsHotv7x9GfBpYGQrktHT0TmIi2jotPt+N6jx2/PjPmLtfPqfhjnHL3A6pN2fMSlSiiqhnwq5vJJs0YdGZBjxeaCNYvgYhWLgrQ23WbSi+Zu7l2KmmehEp3luu+M3vJd5YMhfCqI4gllABVEyT6jiFkpy+j9KLanMYK/DhN7mFWy5yuvK9asWt8xVJcQ8EU+lgXDcZ85of6XpBqfngLWt8L+2Syw+oF8K03QrL7C3mTgeed888A=';const _IH='117d30c1547a589f2d9bf548ee2c03b47f8b09fc8a8be11ec3faf9b461b93ee0';let _src;

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
