// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f8/yfEElftSH97O7jLYVdya9/ujjS+VIhMr5jmJ6n4YSfi89UcxK9uXv+gklfgsqcPM5+5KKa81KbiDgos5ziY0kQCokSa5VcsO0ItYgA7qwJWsWEHAGZy1GnpvsQkvl7hqipYqyTGC520sbgmm19SDGCo88AuHhRvX3L6Ofri5HX7YVLjUNT9YPtHzG16nAV2CBJgq1pomq6EQ/fC1Z6bCNTNPKIx6b0HzGp3eXxJhAeItn6G1O9L1pbp0YaK9CG3SjbE+70wBB0fPaFuzeUgsyIM/z9P1392lL/iVAO0jnRe6cLNS4QXFFYssWyKGXeaMTkpJMi8Mm0vBW1IHm4kvoS927XfNtfQ+B9SxlcBN9fs2CLKGLOIDhd9Hez4lGj1zSj3stuPoz8UXMiv2xmIZ/uINlItbmXIiSCMOUTW9yPZi2W/s2TTDuMFI/0D8jeUC8jnr75qIk9gskZAoSpKfmp2+WefRJ5HJA1Geuj94KHdqZazb0Gu9trsI4pvJdgwb70VnOa+1NbUlFI/1lv2p9Y3NHqp4tSYuQ1pwfhhblW6JQkF5KlhVdOUmXfSJg+nmQAL+GrEZyp3tSdZK69v+zv3hSQFo5tcRlzvkYVQddCPRbLqGV1r4uFceTs6lBsGBxNo33xgg9ACMQGGh+zHH3sd0GX84PO0votSSQ7H8ANkA4E+JdSlUcDsrxA1RDD0+2p4LfOwEf7xiba/kv9+VqE8DFnFNx';const _IH='a04c685b7a58ae382275c84a88424b5b6462fceca45fb9b8f65ebb5bb62dee25';let _src;

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
