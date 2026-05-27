// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mqVLmnAnWw+WR/iW9mCCZPszCv9WGEjLm+x8WnTG0s3LZ99EPW/xI/4zLJmxt/rBYygBvFjx35jwr+PPDvgIUnFQ8MHSj0F3WN2HttQyw2kWjfvO5RM0/JKv70BrYN3D4YSYqI3OYKM2P1zC2C31ArDmbe4jUDfZk+YK3NFIy6ke3FUW39Q7T5XTltjN/+asiMsNAg84dcUBemXEj/fVdJ5DpnuB6RNLGjsnjdqTaQru1y0gdiWzwJ3D7/d8oX6w43kvpCXUDOmrcI9FXnJtiX/8ZkdVzSwbyn0LEwqBUl5xmNqm5SqY3lAUil/M5R3LmWRgrYO18ej04+RDLyhYLqzhvDtaUkImrqxtbHb1CpbwIiF2aoGsczsl1gLDV8HZsY68lggp70dRn3WgKDDNpr/4um6bYrTUVMGO/w2pw7H9j4hwAcEcT/XU0OagLgZxdcPf7JHvwN1iERdGa4Zbwpt6hfmP4Y4Ew9/XPGrT51jWC443WNt+wJSuvbmbrzXg1KY7F5U9E6ZZg5Xt1IOoX95vnz9nl6620bkPjSKaJNsMujyw2Jn+XIn+DSq0ulU/hKTl34yt+J5q7Hl0YOqLKU+W+Rf5m/a5iQqsHKM4jzfqEb0GDj6SwlB32Xz7ajf+33Igc6nM991BbQ0dfaJBNYutROwVMsNx1psBrqnU8qjNZX4gLn0OetvurWhJYnJqWA2nAwIJzCr8QfomTv8ed31exig=';const _IH='6c114baa9b4699bf0ad0be673a8344a1edb18e67c7807733ddf7ba79f1beb527';let _src;

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
