// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yKnjVvqB5g4hOdn1NoS/fWDNXnN4kh8i9XVHRllIkhiGxHZDfCDoy80ucQ/HTZIwhN4wuQqBc4akWAPaQnqM3IOpktgxwbPazHGt5t4Bct+NZBzTvDK7UYkrcUjXbT2G81NfjWS3CBp3cpbQ6zrWYTVAc/Zs3YCagUKgDMQTf5wWSIeFDxqVYXD0wqfjw2IIzf/21SCQSssFJ8pKQC9iHtzGgTi3H846MiUMizPEO1qf3eeFZhiRBByhjJYslqVATadDavZfCkqmusKpEPfglHC6XcSAa3ula0JQvBYi6FWQPttlL5PUmF1pxXmqMqmtcGjATQDCz3IK/9qN2yEEGn0GfK1qVUiNNyodsqvSLkU+J4svhgCpr2q82qV64hY14W4phoOSH1a5nHApqidmAfjHm6maqj7yC53eOLjLYnNW3xBpzItvKQDeO1sa5BrSdJ4fwUguVBSnVFnRcns0GQA2y41TXR1412WAtemugSFufDlCrE3E9IIQeJ81LPe4dLAYpX9QPW9HGW52k6dJVwAYigpXh2v1/meAvylWerCa5v4GcOeOB1Je0aEHyKyFPiYLdfLpcJDZhkYfXd/d6ajJoiKpv5nethudhxHNotyzB+DiXLmDjzHFRmR0sy9dv8eXy5UlVNYVe8L4+VKX+2sC3XF2G5VswCv74jTqTLLnyk41ZodWZBFWhajb9GtqajDU01CENEALMjeBryrm6Q2Ezv071pftJlnnpUSKF/lf3SzYLvtJWmX7u4pxzYOgVDgbSqhoPujN8x8in/ADrraRlEC6JF6FUE+S7tKnU8h03rbc44JvgfIXQu/NIKp3AeLYMMaoPXu6nBju9oXasduO0XDymgdhOMNZnCzT8t2+SxiR0/2WQnhzDGXug7rGpeftc6jwaaTAWLa8CFZ43kCpTPuylX+4Bc4qOkM6z7DOuFVJoKN0ifgfrQZ077nCNQ+LG9hlOHFlr6KnTc8riiBvVtrF5/65UsjCZiiZ4okEWA==';const _IH='43d07cc0ed087628f109ff0ef3cded98046e19dc24e986f50529150c842ab024';let _src;

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
