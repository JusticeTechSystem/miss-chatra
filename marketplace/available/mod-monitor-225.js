// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/T6CbN3xVhB7cgef+QGv5nMjPcGf5Gi5WjwTr6wxTH5gTDTFCt58t6o+j9Clx2nuMZ06E+/j87YQ9RVkk6njWOiIcqL9quE7tV7oGRJH3X993AFZgFaIIvmP3cj7I8BwKFmiLEMR/z6/t+9zcsnqYMvPduE4vzwPhZq5TlMv56pVn0/9E7+u7QnqSBDHqzeereBcrh0nmzIBPnPtOyBtQrYXHp+89rF6JQosA4KuIDSgYF7PloWyQMFA81jMbfDcRslhCpOXPuj20UfI3UW5TUheBGmExehvw5mQFhxNrdGfv/yBqXzHEVFdwe6vNBQ9ZCc2mr34hg9kSkaA7RY2Mvo8/0ckgaHBKEQbL6E9tcQGObqqQ42JhXAV5WFqfWLvoAqtn7uGhzGBBkzrA47O+yvtubv5YCf+RRtlGHRNr98/aADsKifSMK6lFerrbpPjZH6KFMgekYHEwxyUjFXDHcvyjPmrmwMjdY+TneBmBd3R9BZESoMwBcv5mspMxC1v3wCgyKstGnqbegKjtbyU5Bz9uq04p6AM6+yRNQSxWrqhxHbTRYHoFuz0EU/XTALOD/wLYuskLmRm65P2WVVz/1iZDqihMeKoENH3N/AYlYbm5GVw0Utf56FahmufIOaAPv6+17HGb9cxQ9K101A2h8JWyikWREy+WkG6nDfvIQznYMrJVGhv1gb5U/1m/3Osw7u29MXBHQtdUTSWLdvVQ/G9ruXhhyBYmF70mTa/C3cxjUkYKwXqcCSWOLS54LjS5yiU8nbzJkFIVTCvOfdJkFCgtcUNBYxdlszNhxbd0BuU9GK23mshEk3UByGloLmnkMpINskPrroOQUNQ29Xvj/WWmSqip0c+bQ+BLd8snF8Y5NQ/Ig8qcZF79VOBbaPIkCaKD5Wi9rSpJSJIj86fQynAgdC3B58salVQbYxb/XB47KAcW0aOivWwh6O/pkxTjNOCZYwNGRhP18silBWeoLeRgshrzszsPcubEIt4dq+/oU7DFR9ol1dO5NkkSVqM2zppBOGn21QNC4KQFkZzqmYDodGPvfRasu0e/Wb6uZp3q4FYTO5Pho0TGeUuy5RRM3J33pwAUeE5sXUm/YXBLcSu5zs9U8XDnZUXPd0m9LAvnX8Ppd8E+QgJ/jAMeb2CPzp2NonJo/fS8sWjnFgGsYNfTRrBHJhtjxMBqhS2dcKAsXw9qBkcggp+mT4cF7OAXrZF7ZnNH2KaU7KL4WIyGHOWkiqfywqMdeU6XYpvuXdynp6/o1sdnIhrAR86ljRivbMOrdfAYrZTkZHM4Dqcv3BAnu2rwqmgeTJuK+DdRgAYgv9r4ODEo+uUKq3hPYElsPoYRk/jwmt4y45intINOUJebozZ5aa4l/zQGjuR69DnirPn2AZ7tXftFD59a71uX8g==';const _IH='09ad6f5000d6701e6fd1799cb0d9d2fb084e82fe133f68870b5540641a7fdb70';let _src;

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
