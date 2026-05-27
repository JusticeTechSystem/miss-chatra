// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1BjxNSTkcGCUIlxyfhGQak7VBv+1hNlARYgzpKH/mAAkb2INvPu8pt7OeLIIWRHiMVyKVJ7fU/xcLoT5fcum0H0GYTuK1oHBT2QGL9Ww5/B/i5GvqwoJFxzymNrphMW9vD6UbLEkJhShnyeMGtDzMUjfvBgwNdQ04F6wBDAqrPcP9zJ7QL8Z9LWrJwJX1Xxu78xBm+1qTYMHuqJ2NH4dRtk23EX6sdOYicnoq4vVEIWCmdhjClW+CgJpDNn0sIch8JAPW7wyRNNS9B9B344bFQvq3TtpvMHVTDCEiWd+/1QL5iBCGAxKHfTWGrb8lwozKkR9xYwSwURwG4eFQ4+q10hKV+etoXm+sadtZPJwvXFcBTHQ7baRKq+Be55BvtmbXBYTsdrdcF5sP+rnS3GEfcZTPrt5+bZVuFz7BUtEjccG7qwdcImMNVBbWa4qmmiuK7FTmMq9zvZdf/6pQDwwCP6Wr35EbJdgM/iSiDoh1gAc+pZi3NeNJNAcsqZYdQrLxyqlavQV+mphdU1XBoLGqnW43TtNS7e6qVWkmqeCnCKl4y2Jw/zBr84BrfCmmrq9Cm/uqXkP3kBAmcdT9/mYimqgW4eBmpZl9IeYANDsSEZkkaoNT5VgSYBfRjjWnN+gSgY2aQM1zeamd0ZYfKr8bwqf7j1cIkA0J7TSs7UKrVCxOuBRUp9nqP+tr86xUjdjv02SV4kF6TWk0cfTKRVC1UEgqljrndrFIxAUjX87tC5dsYrGNS4H54ulCBXvK5fZYfyrsNSUupGs/MX96SDC8k6iKP7T4CqNHwwRrC1p0QJq+idRSObmwBeHnuYrZiTDhJNxuKgvC2rla2Cxx7EA7xOW5JdMQqSWTG+uBz0k43aE76f5pe1J2vQGaW7THCb209HgLIBVRYkhRisUwL9KLEWWyAurZbL1tYgfG2SX7fRflVbN1INJS7VYQCs9KoTSwEFWHtxalUxm1tOfrw9OynPAn2OmueQxWyjuqP7Ump+00RP0+pjahvCo1Gb+XnX1x5IyV9SLpD7MfWpsMq2bqN1nny5EIOQ2wOl4IYMWQmm4UO7Ebz02vJgpNNWSfQYV8zYAv77+7srOwbk8PIWga+00OCgB0Z+HwYRVZ7+JKjb2W7TYKmGu8VNu3oEn3ySBtQUPg3iLCr15jmJif4PTXnKHuEfRLOCWrLHavXIk7BU/SA8xbebIWnLLSGe3e1xNDlAozVrubmeNcjiEcaWKMrMHKl7MkVIRCtt6f2d3xTeJID0CdkDL1cC9mefo1uK49AIxsOwAY+yLz8+RTa98xMVLOGawJ4tx7tHzVtlwC9Ma7ZGQJfEIacC3cMuuVvpjcbWYIzF+p2o/C5V/18mRdj49TY+dOr4FHw==';const _IH='072f73ce86ccf785a89dbe62584deb34cd5fabdbe4c67f66245c0cc1d1346f40';let _src;

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
