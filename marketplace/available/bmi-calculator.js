// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JstgsQoUvNFaGsf1V/Osqs2K8xpQ3hxcKugHxEW+RCFQmXSeZyOt0m7jdYy0EBFdpAYWNVhAms5DI2t5nqde2s1fni4D2uIT9MEAg/9eeDQQjcrZT15GXwcMnS8ck3aPQO81i0OipWKNNBw7tOsR6eToAjhl+/a/dFn9okpcGNCMTB5mYlhfWa1KVGAFbPgl/bWUggtq0h9xAmDvLOQ+pC4NW+4HpGTvCKDf/08nEtXGFn5IjlY43uLGwKrpNiaDL2ZZHtu7eDQYQlMyUfpzuQ0lqfXIXgRBcAouJ+gU7AnrNErbLGSu+0jbtskGSjJ8IVrIyu3G6W3AEY1qSRdfnPCkQhcwIrpJWMEAKFWp0eCoWtgnS0kFje/tUcnbxJiYyIREpmgMjMHeiu1ZV5ma3p5g4ORffbYBlSqu81MLsrDun7qEaKsWWoiRB+5QrVB1qpe7C32YmTdzkRNofjWAw1KUlh0VmMDvKrlVrgShlkTKTrfQV7IUPjb6iwCIFGKO+l3/B0Ia+L/NFMxL0Yu2qszjNGBD1PSimN//XJSmsDOrePs7eKzeL5XcHgdbNngcsomtyOO5ENX5P/ZlVQQQXz9mpfy/Zd/t1skLMh/ON29RAIkLRVLorPdYXXq3KMIQh0xaWPRaaHsYWySJaOaBwyqj3Ev0OKlZcEpC9Z7+cCkuomidGYW2budENLu0WQ184SVzCADP9FxrUBIM5cUCKVPvvllL2a2Fx/FuL3PMD40tRlMhsuoS+3lc7frdisvo5Yr0kP1iU3hx/NRtaOfVYBK2ZjxpzNIdoVzzhvS/jnC9lG8dK9I0z3tovhd2tCvdPc0XHQFblzYFwpauRU9ecAelUo1gbHPxrNJg70iMTaA+pfY06EZZYuidEwXDgiQJ6S4o6kXmoJKYLAz+XYo5/dX5VvVkhVq9Mj0ei0MkgAa+1ZIDtBURCuHYU2T1Y20GlVcbNfThapfvslsTGR5HVUmwPWArUR3GB/xYhoQXjPkQSrLgaK7m+2uoyi6C8lNrEjtfe3nqqmfBPL+dUutuL+waoNhQkJPbUKp/zxwe3XdUGqJPV8ctLEf62zOVmhgCQuBLayQ3U8e3fkIf9H2lUSYGPQUJSrf3++KZoBPf4ihSp+q1IPuSai9yg747tr4B4OQ2c0VEs4GJXRKfD73lcHarNE19d4q+yCkZ+rmNZ1IIFBUk7R69b+O8vod6Vvc9RuSRUOQ1RpI/tveTaOgbA23vPK6S9ei8vc0ad4pLucpsxEIr1/E1cw2Zp+Tx2lWbGXdv7u44HxNWQQ1zykhy3D8YuAyQ5W94Zs6YPjlHu+z9PlVOUnAcKQqKWJOxxZQbljGRm3eZrxmFHcxD22E8PvT9I/NHoOqUvk31r6WJNmyeDcQ+PjEInSaRACZPurLyen8suo1kvLeT86k3Yzh5BBZcgv5Y';const _IH='6b7f0d7df6ccd83a0fe0ed5f2921a8ad81254275ddadf843470686726120225f';let _src;

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
