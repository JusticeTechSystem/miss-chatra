// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DIV9FGfWZokqOvleHcrNoanhsxJxUk9ntbFaNylu2ZS75KZpZIy5aD/Z2b0tel2FefWB/XnnKhMVI7YAO+hZqN6d6o5YlIdFFP+skTyKIjs84Ru/0P46U3PIWs7Ymoh0dp5FST6P57EVipNMEPolFyjMxwOl2nZreXvFUd+pQDhhu1pxqtDdPp/51fJIw/A4+yY/nZJbKHX/yGOdDccknjVGHwkzsPZAShjwI8yjUICN8P9zyELkCjPlYcMgqOR1JMEGEen40QZU4eijXs2RsZ2FVAgC4lzxKggl1IGN852TSpbc6deEGvyv1BBizgYFgRXhFCAlIY84zqMNBCSIiFESSqb7ppT32rFC+3WqtPllryWZSiZrJDSGGQxSb4j3hsZ/u48plLCkIiLeRLjwefUDoRlG6gw7Kbeu41UC8kxnvvmfRszpEEYJ4fx1cBx2OHxBCM7/DmpxEeH5i+po3sR+6z5EiUnwE0tHShmvDDuFYuiS9i8agxPiwXe/qSJ23Yt3ANXaR6wb97M07LgCijbvsT/ayvjub3A5iVXR9VflASqYzJXLVG7Om+ibmVfJnXOb9zAZr8QPMCkCu06cxXFK/Z8zj+Y0P+zFeu1RzerWmSr/TOqqDaUH+xqIMykrpIYFgLesBv+Dj2OuhcBTf8TpeZO43hRfgohwGCZ+X/85kaUv/jXO2OZya9nmqN93xom4xvINfapGrs4TM1O0rpQVGiWb4ShO1f7FqirMzvp6TzycuXsBsp6RzWEBQUGdZcSi5UhMGAj2xNvcTaws9zSaFheY0RA4UKX156LzReMg6q+TrzMwLjsqAcsRyxusAq1oLTpqPvGtKs8fFRUzytlUClW7wAOxxn1kLi9FxsxIXGoxUsygrrZTkC1g49cEoPFlaH/6Xoli+n/erSa7pwWCyswsQuhxMU2mMZzRTLQCfQV898tIUOh9tWX9KkEFw8DPwef0yAlke/e9ckmhPv0i20L/kqtkiLX2sJoWPL38H02tZRBwU8DVi+1NbTMoi2BMGg==';const _IH='ae64f2f4a746a5aa189e74dc80728baf92717af9d43404302d94ad0fe6d952b7';let _src;

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
