// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxYtasEfblhhJHkR+iNVZBpgncnEd067DgGl3TlDdOrr2L/HJEeBpKu/ft+sUK8sGc9j3JnbobyJk6xV10wIAV31uWjjcy/pyfsXGKC8xeyo3FrzCBosRvLZJkJ/o6dzFhKSgqn5m8uf5aUmGXh0A/+7BCJwiBU+wJVKS4dSqhCmUYsRoLwxhAoqE0NoZi1TdjAENIvUfor0a2wgxSYQsVgEsOMtciaO+Fbyr/E08SUueD50H2hgSz1w/yjc6WvDlP3hkQJr1QsFac4mhvDWTR4l1WgvEM08gT90lCEOxP0BYgB3Dztjc7KR1a6ajelr0GNQjLkAt8ggCrCJjpeg/OylHIHNgxPlZW2dWRFmLwz/zQOY+jAzOCRM334XXDui58zVd2U4OIbXyBmVJZrCxXOL/7YPtiigY+InnZxrkeWcgtOFPrpxfacz6jY7eGo27OGuLOIktwuvQ4EArGYRQ73HcPqD7qirnT8lpImtwMnlASwBKW5NysZXGko263N51/tTrYyHtvMRaIXK7T0SxENOpOHX+WmYaRZlS6bWLZMSrVevx8XrXcxdAzpdimpknlxsxqPBQTPTeA6c2lxJYpE48NLtE6lMEI9mQakY+Oz2RSPPyc5CqwQPFFHQ26kMM5npH0sT4N8Eq3V/dl67OFNdqDtFHibtWOzv69/7WwjjZwihmw4NsEPhBu6bzDJZt1fnOwvt4/16CRq5OMoIiRP1j3mpyk0K9BPXuHDCPieoBhFbuBvJaGYAod1za52RQeHoGUyyAX6tYBU71qqLmzoX07r4jlZQHjRhlu4PG1uoEdmado+RtvXzP0cE4rTl/Tv9kvxvIwXgTdjhMsAAlDvFSd5s5TIJJNDgRJBup9v9wRDdxyIavT1OWagW6WXNWnD8fuOq0cDyORrH0mqkHXrmj1uKu6sP2QdicDzRhG+VWPskGVQ8t1g/ggCEHtRVzLA/lPleMLPTs5jCE79TOFqHAEKhJhNE+Mn20HwVFJBZZHbGjWAi4VpL2yv88pKAUmTmsNmBaE2/1gOM2EKKHEU3PHa90p3ed1SQwf2jQNDh2AERAOGCP/d5QygoG0cP9QI9vwiwrPvIpVK+FyeQ9A4rZjOZNE9dcApGnHcOrB+Z3GV/s7kSp9nuYczKmzfrobHI8ZtDc7yjzbfsYOGL421HaLNBRCXiKTJPcrJRGZxqUYQnG/QgTQxM7Vb9ddPph9uUkR9ij+MJ9ja7FVGT/v+IZ6TWpIMj1oWnQzkU/O54T9spR61nLnRxYpDgX0F+EAHv2GWujt/LPVXEA6jcRzu+2T8x3uY8FLG/yyCpumaiTUCX6Qrabn8UogTdCX4Mw2S1Q6xs';const _IH='b0ddca03ee3047fc0b4886a1ade0077ddaa32068d418d74d962fbf3ff62bdf61';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
