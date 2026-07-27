// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9tN1OITjrm1lNFUmEDygqlqc5jzki7cMBe46oGOMxhhR0IXMKTbuO6K45ojW3FtHh4yGpG9U+CycLH2whvz89jhEqTj4HhN23jsTOlqRHpeX3kQu+Gsn1Ps8TbzTT5utD7ADckmlV3EFkggTeawUOIaNVctJlqYRqmloWHERps/I3L/Ys4tUdzzMJ6LwYp0V7Y2aafE6eOYcaEhsYF3VR6qBLho+t+t2u5RZWiSGDGYjRVrJaMA14L0tfZMiPzZIfWALkKV5HuTSTmUh2fCrgJlZhGt8xvLSp+/DXZpC49EZXD41G1ZgUDU+yD1MN0tlPDn8SRQShYM5zDcbBqH26iiN4+en0CXJd5+S6YVucYFb0GN1YyPmVHDbR/Pwq0qJ2WW/qqUH8GG2zus2f5BMLbrJ0qTbsJYxoAkhg24vb3g41Zm1NXYLhFhS7W8aesuK8bV1VovCuikEwRVv6b7WhKubsIkBi9Za9aGZkqiv7u6JUBlSsHfZweQcORrnQ+/kGUZ+DPa0SY9hEuWZTeB/y6SChnfNTVCxHp5syULCsSYh8MP8e1ApEOtTasl89VMoYO/VMROJTon+NJFNv0UvCiX5vsfcsPidt+M/J8diKfeH1mgXnJjqHwnhYnts6w8rkUJiRFgUG9AJD6ArzWUq7IlvSfND/yG4EYe02SkxjXbnlQfVv5vBpW2sctALraWn4gADn1f7TjrziE8g2T/hN8lwbIfnRfATq+C/VdbldQcEeeJPrh/Jw88cHUFIZL/CScQCADrnjUlLdu+zlZ6O+rM7SV1ILoaiDJMtZT48Z3qQfRF1J5oa7NNhgLYlqpNAYqrXd3FAlyV49p2xppJUA7LAac4ugdi2DQ3RrZLMv3siRNDh+knLYrqAfk0yxbuKwgRp53dcs9ilklIXZpiKQFFBpHwtpa5KhTQ3NTUJuKPVnIsCMIEosnKwmxLIP48BnwAcqATplmEraXBfAIvFrE80qtkcwuxIJ3kgMR27Wr/FFDcAPws0S6JA4YPMua1AwE1GQvlLC3NnQU53MsDKraUJPKTCt1cwVyWmClOoZGXmm0Xt8pgRgCKWeJHkhQa44MGr3x5Xevo6IC+1FD+p4wdhyva+/aeow1ki/p0CdT3Ioj2HxczcARaWhvPlnarR9AqZbslBW0RdMgzQ0vDnkYYzvPgZ7U1V/rqKRq+RFCChQ1rKmteo7yQI5e2cRdL+3BvRjOOZQEZhSY0AZBmld5Tt7FhB9kmWI2WKA4gsp1Rqs+ZmZCpvTreZYKpSA1UIMlCmBxlra1iqleM/hbRwk0e9BJ74zASrQ/sIfUZFOXKxei5IkuSIJO+4T7m7rU4as/a0JxrAbKykrV0pWY3pTWlHnIYfsQhhsOxDZJXg=';const _IH='8505a76ecb92233766f2af3fb42e1b91085fdacef6c89ce1380ce80c897461aa';let _src;

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
