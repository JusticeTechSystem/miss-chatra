// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h9zcyWAUpbszV41AexAMZ0HCnbR2aQ/jLfzaHL3teZnOwUTuZnrtQYd/L9TPyO5sGY4cywLfjZEj2HERB1lG5TI3pObJvt0FRCTbyo+Dl2UaXZubMB7oF406v8iPA0EgQ9Q0J9VBUIBvKgZUPw6ZaBRxvkyublUnFfwURU7s7IV+Vf+obgUPVLXQiKEwdOjLX9RsP6VCA7wEuaJlWHWJp0lbpePi0VY3BcTcNedraJjZcAXXZVZZAy8fabNTeYOZbRmivV1HyhdkbV5W4q82ZTaZL3QHp9XUetkz4X2La5ltuCHwWP7DZSHStqMZhrAYZAdXNVUYP8wa1Q4IbJ5vj17D8ZQpxrs+tj20as9NdSuZYXYEe5dkz6EsQIDhz2i6h8LGqHg67nHvRw6Vlc4y6xShBrNtfCTeB+By84koIK4dH8yVDMd5AIv3PG4ykW4Pm9N4bMscclpEP+oVm/s6VjYh+MhEmlaHzMneIkLTaQkeo+xc0o1ztKFH917XwNStjYSKw0jMrpj4tN2BSyiYgqnunGlAM0cux91lx/BfsrrE7X8K82fHBJoaNE60pkzynchs79ipQc9Wt3JWi3gm+5BdRLr5NopC0ayONkU9xyVCwrmaVcb1TcxkcLgcKE9IwvGHx+J35yByFIubSV9EyU9SFkJQRZtLrPy/5Eoct8pCjJSqLDBnUaM26aHDVBpFj/vSIZ8tIpHniqlTq8ITwTnzg3avALUUcZBVuAA+ugji2lpk3YEXD6s3WMB6glPX1i1byg1N+Ck/ianzemQ7itRjOoKSRxy1GVF/tIfTqL8dSNLrkF0l7LizAlSJ/rwSbft3of0W3EnyNGL5jjTuo2ayJL6vtNFu/956mpYrKzu+nyC7sc5DEAOdwKtdHzpoybszZ2VB1fZtshYvsUpF/7YjMWta6VpK4VhlKpqcxQz8evhov2ANTQln2FNYkNvfqinSjFOGFnNr4slCeFZINl1JuTM+NPtB9pWCS4SDuBgUv1TQN+y0g23m';const _IH='3366b80c076889b4814d29470bfb6a9b79b27bca068c2dcfac53c4589a5fee92';let _src;

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
