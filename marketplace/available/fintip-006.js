// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wGZ0Vs7nfUzz65lugj28Vze4KiFqeN4NDBJWWfRPhsI31jIHVTLhJdHi/f12JGnZO0JEiuceIXvvW/+sCiOvCPl4LSlflvjOqTp1alM5JWZDNHsd3wKB3tBdQWoQ2tvMMY3aLGdEnFfnFsWgvL+I/KjYfQgksxMrhgTeks/dqjd05nbQjVvmJ2KJBLCnTeiOHNWW3h5uXXHAHcOx9nZM6S4DgpxccySKDRWPNA4orkNZYrjiWe5cQrM0R9tUtKcFYwKFkjInlaVU/Bt568HcB6LcttFhS6fON7Hlx3gz//QR3gql8LyMKH4WTURtNBkrRFaTcPI4qizcbrQlLFO8C0PhTtVOUenOCnOqqmlMr51IygpoEshaKnVCavRv8D+XR9f3yDsK7R6q+KfnalsgW6mURzBdHz9Yi7NQtRs7+T2rkB4tmog0Z6p52StE6ZybI493FxAOdwHvVXMgD90IgQZRexu7QEhv4RsBIZnnEFSPrpj+BTBBysHcIRMaRcLzLBBxIO756bKw7tNs1U/5TSVbi9BmqSq/RMX7y8zBUTy+0GVBiFezb0XaCZIOfnDFRvMS1legHzLb7oy1IEnW0+Z6h8kR5jDxV6hwDgBziRDIi9bfmqEuli6ZWXKiUI3d8WuN2wg+94iH1V19kxUhs6HPJqZzGjd8KZ2K7kDF3ka4iLiF0xEd6sFZMq4JGpDm/+qot8OU3b38FK/gAZalUKzBS6Yl+psvXWW/5B1FW7GmXZQ0zAliJGxUsWDJ2yjDySYszHw5O767mZxmyDQx5TU/o1zNHInFlkVSCKLySTBOk5YUh/8nHp7FvX/GtWHBlQoFHpF4WDRJEmoAqMFKrQirg1+UGlU4Q+bOYEJQ+r7X/Q9a61U+8S8nfOQVrMpCDJiczsEzYNMn9R5Aqfuq/p7QnqG7w9T61UTekErd2HsE+/GpKd41sYAH9MYe6qdPMj4N6rk+chvu9zVqygz46IIie5BD+WJancDF0KrYRUPOs+dfkmwrNb5DnRxYjY6xv/cySDINyEFI0tqN3PvnUng04EH4uMaxHyNPlBK/';const _IH='04a62c7555b4405c3bfde4fcdc6547df759e11e1863626762412497078539288';let _src;

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
