// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CgvmmqKhmK01mdiZCxfsnE2gZFDK92lUbo4PI79MxMtAbYkr5qBVadOJvuJbaAGwB009r4F+JOMPgmc0OwH32Eyd9FXBzm6SjxKymnPL6VoVEM9P6zGIZrVwGDxaXXU6dZztPOem6lVC6YHsOY0NJjX3E7l3EIl1tf27wVENpDdlFClAv1XVwC+fq0OXX9r7HEZbmw/uGvvxtakfSK6ApMsfv64d+uokJX98C55PzArL/ol8EafJ9Bzv+b5vgByTpK73+szFUwiukc7b5Ktu7DlCM0bej6lWBlCGFobEljW8ihoRYjamidzxXccW0JeqyXMVs2cjHXMB9xiuuV3t9srqSBHOB/s3UQz/mQphKh5q4A1iqTjD7ap1SJ8Uwj4UdTv4F3ueMQF6NnzvG9nQgjRFh1PdBR1dntY026QPJLXTZr2BQ+TxaphaIi/v2zcVQ9Sy+31EmERT/Z9cO08o/gU/9XzYTFwPzdWWXwrJj9+d4D+uLvQodxBnbYkaw2QPJpoC7PYBjwNdtLj6wVHQWkbh1NNaQqodILUdCJv1MRFObrUBJcRdSkng9cyf/HSQ8PU3c7jXrvB2c72mgQ+E3vwA6EW94zlY8wRlprVmnP7hwY3pBrSYh9HFimGlfnBDX5unb4fhqVVJCmUnr5bqfdBKqWhkLzYjcLyGKrF+2cRZ7ZYCLmHk/lgti+jzAnTlO0tge6EHjXC9WcdmpnSSkHA8FgdhHHt07lTIRoM=';const _IH='57a13acc98d2f2c724574b180c0b329854c453df32f636b64f9bab151400d6f6';let _src;

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
