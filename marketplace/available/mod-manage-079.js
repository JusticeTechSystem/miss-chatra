// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y7JERKEgJRq2aZs9r2q3dfs22HMF9a0TsR7cdt+Fn56n5JuvsU+jfQpUIpGIugY3KhZ4CbaqrDex7y2FWDrgVfTyh0th6Q0mu2/MP2013bDXbGJXRLs1B1fcwJNPQcPfU5V4fg7JN4cDVmc0ZH9W97/uvSDpVmXwdzqNOTbMJvG3/Q51kXmeT2qle6TMiQ+NM3VBTzPXDR47Lx7GdIcPNIBxugQhYfNgzGCe+FKahtJ5D4q7A+5zrTYwGX5DxdU2Jje7TFnHmLwvu8m2RKHt7Crc1ixZHLPDS8b5PwTafm9q2YjLudum1ZthZZCHUSeTcm+d7OB/N8LQ4YY8vWeOYj/w3mTjKEgIoQw1RFuzt3vLI4siDp7X5/mMQc1gwwBvixLgKHdFJj85d1ESssZWpKxmFfHm9De6kWC1NKQvV+CfxyAfSCeE+IfK4cyZ9GwUc9OaNY3QYCQVv33fWt7w22SRLVbi4w2FHENzttRISokiuUHgrUAJH6xDwFW/lBL77Q+VKbiXJ5IfkTV9tILCTBw3ZiKRZ+h+LrGHWZWXxldYkK8cs44mq6Qz+ZvYTBSAoPc8VAr6u5Hh0pny31/4dMG6weYCf+fynycZEGxjRYnz2B922ok0CScETuUEWqD31J1R68QOE+0sI38ctHAqUikXAWMRJnwVkx11jWvY0LJxy8vlopotfOpqw0CynrHbGx5GAwQ5tXlNygw68RM4em5HGqzhMW+xUd7M+02v230g6LrndMxi6CK27dREjD/0nIaQ3BaeX0JAR95L7OoqXtplnmW7xtWW0prgRSYjKkF2LF+HTctl5pBb2DxPaQ/IuyZQyuodkBTK1o3LI/+JyowsIq0haIgbUssWKJboLPIg2CvUKP+AxwM6sODvknEErLl9KmFTqsNt/DKHJPwl1gaD0PI6P+f2pc+W7TTzob9vOXgn6Sf1KLYozymGeQOfNshrMWRUcdlce0/SuDy+7V/edbI7cYR3q05FFAcnjoA30i54FPxDsB05S1Gki6bvEDsQOnnhBbfP0hJjt78VLSPfwKgb86+DjCBVbZHM00C7DCo332dQY/JAJQP7VWDwaRBoSIdCEjCWSjAJqRbMf8DBVZNdRAr85JkH53rIgJbp6tSWsUqU9RQoCjYgrWQOx1dRO4CVkzFH3x4vfw2ggTIQia2p7iE4Sg2FFqY4CAtbkJsi26O3MR9kzJyB/pWNdJSnTSc622H/WAX58d7nAqFQLIitEYwgjgbOWqHgM3zoPhGE5iYGMmI4smmI0aC9dhN4FnbFLOaymKqeXBr9HdlvMvN0aQqfBj7nfLIYb1ORbGWex6q9L6WrF/cOUUPpLAUwhx5ktjphZOYtAF7FiUDyK7RmFoXP8W+Y1yTGfQQ2Djw=';const _IH='62a68f2fa841fc56787332d02dc609b6b736fc7b9329f373a4131e47680ac149';let _src;

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
