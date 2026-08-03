// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaVT1mLDRtwrTxpmY7D+QO4Ygyrhe8baXNoDZASYiRIKWFCUfM91nlryDsqk9DScGluv6pa6XM9e2I+KWUXbTdpFFICP9o6HZKb5kCB2vH5Yxg3qtsBxdDCoaG+huQ0AgDfLI9g55ypZGjnjD7L485kNMQssUYUa5HCXuTrGkFoLmSoz2iRrJfKlYUPrmJ1DgrahRy+hzEsymahY3YdoTTdvcL8A6lpWjdPCfhwEZLrcyFbQ25fOoo52yENPq+1FhrbrWjqYIt0CpEgt2AaK7oUGGud9vZzz+SLqWwZI0f4Zrtoyk3ixCDwHoHSKX5Oo//VO1FrGBdUtfVn7Y2sdVUKBz5bz24Qj4FdlAd+MBUB3eI7hBEHv2DO8Z3PzpercLZ5CB47yGtf3vCMDbgxsojSRNhLLBFjI2EwMhUy1S/HHoAPKkP0GX75imJR1aeotEwG4ASWd2/bEh4W590cf3dxidHw0l2gpfyONLFPVB+wvLCqzpIxd0IKwgplzGpxm8fGi8lyCp4lGSPX4az+mh7Q9z40yhfGHF/BjvJqZVHrP64lJndqtXH1jBYGRyYyZy4tsJAlwPVAz2SyRRlTlJ+OaGX5QlCPfKmnrr5AWrAsxRWCNZPpgiTBs6rw3IGrQ0eecBEFkPWHBJnM/2jI4pEV7s37Iecxxod8/qvId3senUHDmzSPnXjBxsrrLD8g8yi/fxAHTYyosG+RlNv0Tla7fM7vbRRfig4T/UUXmcAYCU+UOmAUqtIuhdg0n17zI0mkyOwo8jz+NN2FosrpRPG85anOrJUqoq0nb6hznCHdBeKnRrJv6cFgxNRUGPhIoXMd2YSqTRpzvcnGWyqkE0oacwHCp70qBAx5jwoaTJxhHhTf6V3jpCJ9UGfoeD7Ez11wRS9oy3pqglCs2wwuAtBarx9h5QTjC1Mw1z3tWK6SZiPgD2D4HX5sZVK039FncwPvAEjeEWyaSK6XfxvRnMGAYiamt6dIjTiw6w65OmeaJSqzUEISn/9QvUgqYPZ7dRbK6O0BrzWC7sUPwWXk19f';const _IH='dc983a4d78bb0afd18d9d085073a5898dadd0a802d80e4fb82e425bb39b92ecb';let _src;

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
