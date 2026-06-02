// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nAj2uLrJJ5lWsAL/5E+ftW4Hc5lu0389XMKF679+D1Qq0cgm19B92ZLuXFho6Ml8IjJ73BjolAeiGZh1MJkTc7yIpmiA2378XSrXiu9KvRkUiCN0gIjgV7vfVPMxLFIs3WsCzUjOt8tzKqb3DPyt1AvmgGpF62DZRmg933OeGEvoQdeMzs4mtHCnNgRV2vM6dazH1CtORGM7vAtUcgIBil+4LeoFg9qqQAYftKegU8XsRgW+QYjeanr5Uw2WgEOfu7Li9fkCSy/snnFMcoFhzDuO0dJuU3leFZcE9hLFo1ZDDGhAUiVVjJK1GBg4Zi9wdopyH9wZ5qA8CSZ60Ul4c1L32Xcevo/yEmebiah3W9+waOug0CbNlQbPr0OUstmTFwVdyvqjnRqKJzDb9SU11LWZEn9nAbZAB2dACS3Jlhj/79znMa74AFt/zRd+sZHks4o8MYM0L28t7kZzvzDhe/pUBjnLQp/ITM08mlGEPnbNZXRQ71Il3gxkwvySORf5fowzGuPl2qLE4UNDGmwXk/HKgwjocxUnx/xqVLKa4FSRdKnGqDkiAoJiewMKxGHX+5TCD0OzyvAlvCp7HgaVBVNtt4/hbQlFVL6TQhlTWhJ3m+n5jAM3gYuko1GiM9mkKRtJnrYpa2Iv14JJW2rUYvXtkSEGXxICu1Q1/4gm4SzXjozQfjYYYYdzXaKyEWVyqWZYvGZO1Nqq/fb89jpm3xNUwY3LahNCdv91YNCddJna3iCcFOyi0438DZD4UJhD1MKJmSZs80NbRUpHVMtFttg235OUAxs7/Ne+uyQ1td52DWhIot1eN5G8H7LBNaUohssVRoxMq0nHYR9aVZnu/ZFbkBl99Ah287CD2lor4dILvip/FL71BIfiYRi2WWpYfqIKqOpvwJPhsguUuvCYwAXfgDxNWFh1/JFxjaXpY9KZjhgKIC3r+HSpTf1gJfGIkYEnjEjno7hi64aUShpimPwP0i6bgil9ABBJ1EIdrzOEoVi0p6+KXQ/uDUEywuYsbpeGx4O/Yw3EOQjVUKv5y+LBtmbWCK/7ORumaF41F8aRmrfZRG3R+1M51ujFnZz/hqgJWZKegP7kPiGeSEmbOa5vnpV0+v3W+m6p1nNoIZBA9AdJRFkih3VqjNcqxpyQjFUxbkEx84YedP0p8Ke6eDw1eW9nW+7bZmsLV9GA0ln/pyl3Uuik4jfBtvduPgfv3bxUSluzTsIDtqSdbjDcsnbb/x520ybEoJjwref8IcG2wSZQ7ufb6mbXBwcfz4zcHMsRtfSVgvGRG8IOU1jMj4jUJ5FGDQH0OuFg6/Z0mwoEK1XI0mZxO63H6u8NeoMnW64Iku1jkhdZe18mZKelcKp8cPldJaFP0zMeE8EbNyfaB8AgzjmVxuIJ6R6gumIHfoUPjCs7oM0MjrI8umoL8yxSAJaT2aYc1EKAvBI4fl1+JS4xMx3rJuPXwxzUy9yqy2yo1ErXKcxLZWKT89TLXqSoP1PvNXUaTMhYSU8=';const _IH='4e4d068c3bc9005538873bdac522a5ada4b756d082959619bf6432efac822c66';let _src;

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
