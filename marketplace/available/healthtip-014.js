// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4EA5s43M3a+S/DfMzUITQpdP5cHTys807eyRN17z0AnmjlJ8aF/ME0iso8rN0S6ZcAqVmWlCPwwRF067KcFVAxTb2ldME1R+w+IlH1/MuPrSNeyWWT9R4DzQU7PwX1DUz1hoBDlxKibduNBHIfq2OZe0YLKqbuI/SS2kHdjbvX4vPFxM+h8zYAau760bkzxhk7yGSMVJ1d4ojYSTZX2D/C1+dPatnn2aag6YzkcwQSQkoTNTtIm89N4IUW7WYL7LMdpRrDE2n2NRQa75IFu6Bd9INPyX8Wxf1uA0Ih6DCZoYP9e2E3CLaNA+8x9TV9OjnHt2vgpyf6lOOml6V7Z0X+rSiQrhRxtTkT6oi2bXlhHJU6whls32QECZt1NV3YcvqnliXpoJ4sHh1ET2VwdEtVbzx5cOSbkRhCTxuw4kGNOvd7QQdkB+e5cvC9uDGuC/Vo9hXCcMQaePRJsT0DytV57B03tmElgm15blUz15YU1nEUcbw0u+xxPhe8AeMWOtEnpoQJNd22RB+Y834CmeqR6iIIa87uLy7WoRkZV+K9YXg3bSjficOd9z/caEFdNJx8xmgnJsqV0OeCwosUTx0+vgUG3jOqAYegN5EwMs2DZx9vKZ4TKnwJRSMtUdfIOfyQi4cyUu6z40B3CEMm/sLU7EU274NQQG/yMKhnGLSSMfeouq2nsvUzC0yGJD/d3yBAXh25UQJxjftTLZKMzZtnj+PSA9f9i5aBNpToeb2BxfUTt4lhLWoJWWj8SwZKL6siyFun6c7g6SemP675zaMQ5/LelKD49emXJsT5fJJp8W0AWUQEIwUYU+8ew6kcUotpdffEY6PD7jPKguiOh/gTva5OcJbrTMm40KkC6rzlzyGWI5/ExlRQnklKv9DMBRCBOpFMgJHZBdSCFCPbtukg6eHUuigPsuki6W9eqT7QxBAO1kBcZ5Cb5yDlE=';const _IH='56e5969115f9b6fe884d0064fee9f97fea3073b8e84cccc89f3e2c22baef01ce';let _src;

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
