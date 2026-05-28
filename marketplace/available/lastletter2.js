// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E0s/CpHO+c8ZKG5LyAi2DZPDPzC9F1T2A2qdEbqTTgT2MkXKL6ZWKsSIJPof97aBp7GHwMz/fUMd1r7UWwmi0wEGEgNXDxMm9TqcS/X7vAJ5M3jBT+OXK8OFgGlUnwOxsVuKJc7gfiJhZ5OWMIcLRTbyl3Dm/ZG/1Ic6gqAG7YQWOVus+5Pl0GSIygKg6NdA9AfoNu+hHclGc0JDrdtlNCVtV3K3rh/thucCgDApjotZbg9xJGHZ3PCpshek5w3cqGiBAjwefR9VSm2p90Mvq4HN3nFptubqjPaezOW157rNYcKkjus5P80qfJhaqkyjCXWiMSeqFf0uD3jkR4X62D0Oz7wzKmDkCylQEuzl93yDaPwxi5PP2rHn9ALb1GdqCdxDF3LXWx1YuyKs4OgMTqRihxNXfjm/zyA+X16k+RSIlT7MgIFOBhlMpoqcINJor2wZubfLHjTIU7cKherdwXEVswBA91VT5592GWDXPvHzhGX9SbSuTvtqVEmBrQBv5dgM5tYEPvLqcocZ+DMmjLBwAIbBZusfwKyLYxkoL9lfIA+NGwIbAV3Tci0MdAUG/03j1dWB+bAX/OGmknZoLLZLVJ5ucal6ukRKtucanJ47SnvcAnk58SxH/TbfGFPvhq6ia8Gyx6tD2ehhPjBFF4Zu5mdzsCF/hax5X/nHUsf3Gtvgz7Tqw7PzFpWDgIWFQdaviJ27xCzjJVcSQ19qLyKrCugycQ29TXAOGJE6mbw5kQeCAMb+Ym/Hz8n/iRaiUAhsi8g854Jv4xT5s8lq5hsfy3kW8EGWNUOQrAvjU5jhkHBrjAzAaynzZsSYDDjx42q9vM30T+u9uV7ZXlOTFAhZr6fsIMWuxw98qh0BN90TnCeWzMz+/Vb2hHk6ADBiEym7QVTel7aU2yqyyKjsrNIPPBjnjp6wZKWPdmKQARALFbsnc0h0hxDoTDaiQLB6spx5XH9CQsw8mqYBUzXFxTrEb/L0QiTOi9k2+ZU4sshiQ9NYLc3JPCSZgtWyFUjJUuiDdL9/noUqwL/LmvTSOZxjmV4IOl7RxrygDXIrXWwXJZKPjAcIIA6wvNEy+/lA4+vmCayR+Vl5QPih/zGDxVqRlzBtyS2UtmsdYixTKnqcitDtMJdaFVMuDXlWgWziD1iMqZcuM86As70JoH6DfXN8fUpCrRsSyrMvZk+U8rkqSyc5TIrQcH1N7c/jGDhpgRKW';const _IH='338bf47b73df69b9632f9a09ef52b38cf49f41248f019abfcb3ec106cf8c9160';let _src;

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
