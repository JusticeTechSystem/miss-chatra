// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='isB4I3LF4gZo2URP7tJzQrj3QYAK5URzVBhwFnGX4oYxPGlYCn18yIs7tNZoH9aLE6Zp5dVZ4EC7PTs04lr243nDzey3XxS3/PaTuG/sUJpyn14y3ysTZaA33wINqH4pwQpn+SdmRu1qg9ZF/Ajbx9X210KEl82yS0Apu9Az1P8Jbdu14C4F2DuQ3TNag9UebWq3wRNjg/GC+o+wZ/WdFryjrl5EdJoBTZU+2i/s1LjrgMgnR4iBZSL5B/OMbYr0aQBggDcSqSv6CuH0+K7UgsxF1NO8UpmsPLXpVt3K75FE2RtM1FK96ivoy9raAdR/bzmIynXTkr41tIOQ8jaNJC2oWw/UnP5YtUAmfudAExsA9uiUQaU2v+JSmHioCb49zJTG2CtftyNJoC3qy6r6zL7o70ar9PweJkHAi1XUUV8wyXty8AlSCIo/RqqvRdC7dbxUc1e71x0uO9YLlb3s7+A8hpkCK6rFiGYUJsdSmTd38txddorqVgHj3idvmheokYNNiClONF4+LBFK2grBaBDky93shJC6RH9Nho3DkdSK4O5NQ37UID/aA/z4ZNjrvsb3Y3Is3aczIfJMYiwIsWCnx3yEMemUCack7vDSXYk9P077Sr4BYKvVwvfhTo37PQTYkmJF71a6HKrsESOcLLcQQ7FfhxjbILywvcY2wTgRmEMx8Hcc9pGUyUlm2gVuDYmCo1VRipdvtyiRzjk2ps8d3sYFwybn663ONGJF2FyYuahdwRNbledUdz/H0ea0nXOt94/T63VTJpGDzi+dkIzULEfzEIKitFALXgkwywMZvCVqjXZB+LBmGaCTNk0RT0TxDfRGuyWFeFMQw6qJS3fE9Zp04eWGpFXBBKmRJEpMo3+n43HUvqekI0Jxu0t2VL/aUV0WahgKrHVChIZy0tnt/xRjfo4+CKGHWukCESjGf4oOCQC++gkGieY+FYAaDxfwG9dNr1/shWII2BiBRGJghv7fkomCTUiXhNdF/sPFXXgCChFgALy8GY8FM0pE//TOrQ0fodC8RBM2Ana3gVHblaan7RU2i6S9dBdOkVoko9WxLpkrztlaD718WPUlvX4ym+BzRSHzfvSxSJFSt0WYwDHhozHLwRvkuugnAX53NeBoMOwDKlRDJ0BWBtyhkHxmDY7tbAuqpCTPihPw31FJOTtpz3nc0Zi6NIfzP9+dfH2jT12lFhajW8Xf7NhvasxKwf/nuY8C+6tUDmuwRhnLEHb88LLiEEAYEFL029ck/O/XQBzmyeoZLphELmN6nf1QqtyU4cPaJGL8purvzYwNMzXKKrE1vcELKYnBEBGGv/vcINOKQXNT4fjMw2o0e3Z6AQ9+XfiUVMhlZv9Ipaw1bYSeQE2qYQ==';const _IH='1e58655ddd571366c9fd561d1333ffe50d972fe5616720419416b027b621e263';let _src;

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
