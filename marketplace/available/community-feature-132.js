// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XP9cw3LhefloZF6oCAX/rDT8FxkprTriLtki0inG/bfJ2zpmpm+/Hv1AoHQXESqthEmH6essko5jhNrVuUcSMH9uTnL3mLrsys60d0D61NbPU+KyAY3kUGqxpUZFGyn+gkol5H5eXDxD4LdF2xQ+xZv8vV2HbeVVhPfJEb/XY1Fd3XUVxfFQ2a9VKjfjMTDzCE9xNjn/9KH19qlfPVzHV/NPeEOW7DAvRhMvj3Ta68kpSb9lWmYwkObXelCmqz5fWj0lRNS5kkjer4MyZaUZ1g12vJ267luGYxhg/lEgZSEu+W3qPk1Pme5ZlRVWPs/BOUcuwDQJv3M11pLQJNsm2vxnJzGh6qrCAQsVobSGznQRo4BDPrfxVexQs765ww5VXRJuNt4E6/K0QhYISAPw/CSpi4AVkDpgdRYBgscFvqi8VJyfuqty0kw9aKiBEZUM2lnPJmmwfeNHCdn8sBYDpOIjBOQn4efQBKrRmJWTAI+9RYdvc69H4diGCFxNAeheioQRph5cwHTo8YKxpgBqT7H94NJQ96qyLi/H20nHN3zBcp1hPJ3FaE5E8H3pfPpIKh0iuPl6ixF2BM1BQCFIF3eXVIXIuFmo4Fx8hSw6O8Ra7RxJv2i0e06jIKlhNAH6dAfTaPsRZ4RM3ZJ4Xopqb38X084j2wbRyHF3mPjS24YyRmhLZW8ql/BrBhXpeo4L/yufsuhHE4w45HVVwVupzcYwfdHWPe/SWYWodV3YIA1iibs=';const _IH='0b26733dafd2f6383dac4cbea8bbfef63fed060ecc1e5f235007819bb733ef15';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
