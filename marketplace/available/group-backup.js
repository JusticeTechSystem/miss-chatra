// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vNLHWthzQwgfGzKHBPNeIm8sz3OXUnYl5DhqmjUQ8a7HB9V9hCBtkjzdPpgqKhNheQvWpmUWx9Eu67nK+jvmbXJZzk2drstMb/tqrOt+br8CB1cSJjNEO8KjQZl1Hvz8uA/3/fiEPRQAg/yZuaVEAsSvECQJxE12S6MkGElHXYvAcDVgv0br1V+8MyZwQBTMhBpkacm3ypg5/nlbpc9tBY8+7xjn1QTMmD1ybJvacdqzyrqRrRcxfvRdNR3fy6Bw8NlVyWErHDlahczLruarGaxi3WEjL+Tkzit7893o6OTYuNKAxXjL+UWaXTdKxkCALBQUMJS454MzLrV8/XRZ0MFqqe/IAnMjOXAiJAnHx2l5Ic4nm+NsVbc/oMtnlFmXxE+Q/G95fKo/4xZ21v7xDP+uy6+HpKiJ3oiy/nALphXrDBIjIJgWX8q5XN5KDPpol+e2UBVNnS67L8IU5jrUcqtJQjs0pXL8HR/i5+WRl4L1EmEbrQpQQRy1mj2tSJ7V4eP5jiOxYfnThcN4LtLgtQgCZ/7bK0h8E4uaJyayPf1uKX67mbXPaHzFx0klZg0QK6zkW+aHgetYSaehPxFnTyrlauj2PGvE+4pJBJl8XXdqT2YDbM8iXYJWVdyABzPBEC/McZb0IvQP6gksMm6zkMia+0OBrzrg9RT861W14xa8yGqlD0VxrnLdkn7wSiqX2GRJdEHstWnYtGPbrSfKmqNBN93jFkHv16Y1uJEonFPQFp8PohDlt1Qpglb0t6urEs1L8P92esC8tznNsgerVrBBZhtLmgbhl04KGe5RG/YAHa0YcbiwofJzBdFkyIN+BUoDeGJiZGpmc1Wak114zinhFdYRMKvwMp8tYJiICk6hk84XAP7ecbl6vwcreCXySsNjjeKbjJxbZEWLnFpjswJEwQA3YjfgJyy2Lkjp9btesmsT7CGeGU3mYfpAu1WwMj71MblcvhYEeijUV91bqybaBmroqu8PYFbhvSXsT+/V1j/C4o1wR02/0fdGJpIok0Aa4ukAbGGTmq2Pju9S2pRxYRGmzrH6/8TujMaT/ykFUjrfcq2+5qkyXkCez3rNa9qZf5AtAEioHIelV9WSIgJXblYFzg3VVb6WwHPQ7FtMHaHM+J22fnJg/EjIqNdR0l4LJIxuJLlFr9iNGehdBRIO6FwCEOw4CG5T0OJTbSBurw82266r0PEWjTfDWvF9RrAhrTWU1aXoPP3Yrc3wL/mYhbkF1SOVL31ZORdcm3IDUkYIrSyUZd7xJNOn7MZm9Vg7zSopp8vxEbFqg+O+g4EUvlsUj/WQOzo5GGhc9QWPUy49Hz7GuYqXRcZtzhqVDoKLHRxKyU65c5Q25WMB4jweJP5sMb4fXlhBBYYL0b0uGUNOD2ufOWw+iKIcHG4v2G63ty8qZOKQyJb48Y+vOIgg55BFVvPTdv0R6ZPFMOw1aHWWw84oRCO2k07cF9Z2lNb62yQzKuhh8rjBWB3TTDvUUWSX6/ISZGhbYM4FQ6oYEdSCz8UpOFCA/55KqfURbBeLIUQX/BwLPMlLAW1FhEUGcC7EV3GyJmTTleccm0kgWf37P6DZC3C1FS0YXlA2LeTy5s76+ToV4cT5IMFBV0+ggLOswtpdPRZxWhwrcMhbb59epSUJHWPvHlMe1bSRHdrMeSIjOGUyEh0EDcmhVJkTOzc0yY7rP3bRkhIOBJGClFKbTTNWY8s=';const _IH='84b415c4189c925bba4e0ff6fe0450ca2508dd933bccd83911a92683eb08bbb5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
