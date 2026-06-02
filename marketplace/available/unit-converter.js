// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+VlSkuFUM5n0bNAip8LjDQFNr+Il+eCja4slrq9GF0Wlh38KsW0ulouqMAppo5gWhRc0R29p3eb1PgvyS10x4qFvDDsAcB1m2tdVgzXEvBvw7kDWF5jv8eWWQcpZHM90XIPsDH55GeUFqKacFS0Pdbj7okO8T7/xDi53IfONJXZZh1NzUQRnpDi/asraHA0AQ/GSsr3uTY1bm7h+YeubTZ4pslFA0aBAh+0KZqqwdU+u79v1Ge+eAtxGgRQQRu9JdziC1s3fWXlst3Br4pCjUoBr7xYC3cgGmqylGS/GG+U4xMaZ1CByLGKfhb9hgv9Le1LGfWUUWXgjBDTwMvTCz8gnbRJSlb9pxfeso1Gp5sYQe66lrLTzIoU1JdEH1Pssx0qILk98ueCiw3tf8DuWQBEtWS8Lf+Y99sYM4Z6jY1KWmhq9cY3q+ws5Q5m7PxXn27JVjibbTudGxggaYdvn0PTp5e3eWN1avgyR/TfxFWh9ZFJySWjdJi/l7PPl2g0qkxrjG71xFHCb+DkfP+RTfS5g16WQM+5mC3tcwuP2b7RzetNSavNhOUy0kWtzRCdgPFnyAiBCOLipuvkPqJMRRvP5AuVJ0U7yir8LVxOmLEbx3VlQKz3hnZ55D0y+hn2G8Gyky1xo1M+qRuteloVj5yKQEQRV6qeh3XWix+ePHvA3cGxkuPnzoeZmTvu7DXRKj+zqdh3n6VES2ZTfwp0IUzFpL6efqyEELj6nsVsA2BLvmSJwQkdm0gE9+Ng/y5nRIUt/OJUnKnmhP/HMYwFXvP/eluanxn1tBfmU346OzLcuBTp/loQgNvbJrd1sB16DdWwuyA2Y6SlpeGQnVkYXmQdqUhiyG3sDEpDEy1QhCwCwu3on6PJjYb7F2CKl2rA0Zy4gZEow5cjuxB8AlpP199r+52oXHFwcSwyrr80J+Us0Y1dtHdyXP2y3x2u6jdfGfikGBKIT1Gy2ucTg+T34OFO4/3f3ceHVgOjHegI8VabUDGO2hmReCnSBGhhBfN0qfk+q6lFuZ/e+YkCQtDbtRhEjZM/h09L2SLYINqRKIcXLy5+DJEL+YTLsneAbreTJ0yEXAxh39W47YSXJUvjTE+bIF6MAmHOH9FrIMmXN7npt8vkf8+OoPheXzpQsqsCKnG+zBxYl+JauA9gaYXX6sCUI8rNClFsPuzEIQ1eRcGN2pl7Tc53Ely4UqVLXpMLGNhHJ1mobLbvdmVzA1RtjzZE+hEt4z0+qSX4YIl2viE0cIwL09KsLo5MK5jxH2ssVnOw59/ej+ogShw0AHQpvtTMzasI+eKbAptLnW4CE613RoxlT4CfoH5yEvs67Eyqo0Gqcuy4L1I2UTNgZM1RJ28T6G5cWnEHdb/MIpMZ1J9lQJrk39aCzanHdWYHm/EMWAckNmz21lss3upL+rqhM/2byKu2hQBEqSZ3wo+iJaT88VwPxfKKrRSyXZBjm4Egv7ngXVedLY4jwVnf8lYS4CRj9MJzUox//H9QkvhvjfTlp9w==';const _IH='526f943e8694df09c2ad95bedb30fad4dc53e395b6f09e7f43d332f242b2e4f4';let _src;

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
