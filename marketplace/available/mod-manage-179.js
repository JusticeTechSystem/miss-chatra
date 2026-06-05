// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mwuCZtxcRlSUS+6hd86nZfaDUpRc3pLnd1JwWHLAyGz3pyKXQjO72pR+qe0VAZ0lHjj7IL0ksBIED/4Yinvkuk5263vMGs/QhO0qwiv1+aVDw4UmCZmHYZcn5i8swfHOF6xwQch/FCe3M2oejCOM0Vcv8jx6cLmLWFD/69mwLpTVXxRzqRdJNobwRkJBAPvY36vg3sRfF71fSP9X45UTtYa6FE3zEVG3Mqq0+y4QqlevESISGzonqqOzHWYyT+ea6wwURUQ7lrgyeViAPJmKEboP959hdZ6Mk7EerXDWVtzA3hrG4wnIZOwSs7P8/eR0fYuR/Ib9ivaeFxCN/IwP+tZIP7z4b9u9diXhx78v0ZAqgII4S/KzfoS1y+TIRx+NpeZ8CRMICAP2RMINpKR41jpCQ8G5O7MiUnSXhbz8QbIm03a3LfL7ufUuq/ZpFsBFRHrm5PtPDqFEWSYXI5/F0iXvpJd59IS47HVAf57ytmg8xGEPY9NoHKXPzyQYOh5tAjljjajLwRn2IaTN3Fyv2EvXLnYJvTDRgGMSqLPnKrb2AjoMZPrklBjQnaWo+yGpM+Z5UbeK9KHxhS6xBHZx2p8RfxslmiYg5VzGp33OXlhjHC04Wqc2SsF3/NZN9ywgmeawCEvAS2DHbXJYLWUl+HWtjQ3fkrHevh3wsBFQOsv2QC2RCpF6A3vBEL/mu9lxLgsVXKKlx52z0NMhcjZHty9zQm8ps5jiQE/xAYdsN7suOffwYRN5X2zAclSo1gOCy6vuxiGB5mYun9uQS5klG4DNHbL0D+E28VgoPTjKMJd1Ym36kSsbOKg0/CxL2ShMfkkjq9l9bfaGQoeBWdA4xPvxEU07Bh0CLLmzleZq9OmcT4/fVpWTvVVNNy7jnUMbmY+0pn0s+kwLPL/0m6+UW/e7WpIqhXaXntt3ZJLKRlxwCnV0Dn8j0eBfWQLPNGtLsYYTskVRRgYPyx0CLRXhFtbPHspBwAMlIR7hue4A3WJMZjmR6GSKBAr2h3XMy3rHWVzen55WJtKP8TAoRyNgHmSi2riUdMrWG03nfS3vba39DXeenHpTGkQD7yYiV1f/ydsMK/GZNthEWV1mNfEUrcCtI3KCqkU82U95BZQMcG5Bkgb2fZfZdCoxoRFZmqrZ7/kSlyjQgo4vayeT08Sspo+gpN6RFQoGf3D0YtovmUkMVtkIhPd8TkIPZB9yEHUV2tbovRmhOosIJ8WKUZLzju1R4cltLX8sAwfXh9XpFbnyhDyh9ha5RCxQRNz8XfnjlMph/3OzHTmz9J9uTLBRJ68OLw4Qi9padra+0As6Gw6mmAYPLQa39eC851RikACHndkhdyHLJoG1VOsQw9gm+jGWdDeJItBZKffaWQvIIYBdKXY65cFEQA==';const _IH='c9f91f87cad223ea6c7898dce09035b6084089ef2d42ace24f37a5c5e1017501';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
