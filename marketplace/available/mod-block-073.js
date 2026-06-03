// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xfAdN7zTtE/Hr+3yXArUxiuy3iVXigtbDr8qiN5mCIeiLSPSYK79b5Kpl8vTMsYoGFvKrU8JQqQywMDo/YbPC0LIv0DuELQA03/MyHAAyqSGb1JTbwkxlLSg0H58E3yL4ujU2xKVQwmaDA7ReIlT1+V6pIUtHKx+Ra2nKvxSEIlj1XyV4ZEEtt+i+ManYWZSgvZvc6nWP526yPJ+1RNuXjgzVG8gaHEvdEfQtlFgG/Ves+OG8PAMJRnkydTsxt2wboc3jAS1ISwTXCf0zRUaKJvh+haePixbvTUcbkNIjWCihb8JnTmlb9DozKYZUA7OZmWtAA8iMHqykshWwcCBS9eG9EONmvwLBMeUB8vqaufTNodprr2JeFA7zTcaCk0Pmbp2DkDvyvzPU1ZBnHRCWK2RDRNyX9q9sYSq6A3NMaa6m07pY0iY1+a67ivfqcG3KJs2dWXjQ8mTqH56U1pYpdQmaBntkyJIR9pBqCGPp9KFN8isGi3cu/v+aY9dtqOtpaLwvCfNy4shYrOn+pWZRHUYXh9ZVPiFGflLRKvNYmlR6wQc9SucLwz/+6PGszbf1ECKstfOotDiidyIa5PXNIgKKJWxRWAsvaeTkyaD58TkqF/1thH7qkkJcRqPLCKSYAP/sUkkECoGQTkfCI7NeGk5klNoG/4w7sDbLwDPT3VjejkEFpfi5+KX1CC5cLw8eFuElxigwg58KU/PIxxWdL4RFFNCKRwmNTSUL8y0tCgo9wRzxJGtc2yjeQ27iS4dfucul0b0/i5b4Lsq+Ge7/zxLRjbMTWlnx1jt0Cel+Q9LyRJb9wU6QVztINxLvlLqmZ/5kdkQUZOwQpsEIqvdPJJcU/8qjAjcoL8xOGyp0Qnb4UWfVOmE4h+DYh0lm2kaw78TIZMzvhbT5inYlKDouleCLqhlApgI0hlzVp2hgkQGTh1jnIiEaTCJXTrwyreEPuN+hKE9ku/YxI/zFnmzIM7hmZWOLZ8djxLcsBFSCMp63KbWLoW9ITwmbADDYPIm7bxPdOT3Wu+ia26ZRn3txYELtxshujqrrb3IVbInFoTq0mSkFCwQZCb9gLu7wcGkoOxp4hF/fLkd324YlzX4CFic/qTTe3fNYO4xx1hxRy+oM0B1TocOkwRs2ketrP5+c4NaQt+4LP3BPkt7hTNgA9EjaJpdf2Xi5qDz0oq2+YUyQzYS67INtZQhlDTp0bQgYMigdwWk8A2IWYL1hnw3/lf3jywBRH9/dhDIjNHD3NzMHIc8QafpH9RXO5QXvPqmF74TcqM77K0nRbLSh93mEyIVbvzWiTJVZN5/CL+MBQwl0iQLboD/GxekeJbhdtq7J9p/tjExvto0osxyOC3njctjBYjpUetQZQ==';const _IH='a098d73f563f8576e8c3a3c0ad696ec5fca355d4dd30a86e32ea1830d0342d40';let _src;

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
