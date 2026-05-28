// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iQBXSci4R3aj4ym1Hl3rQUs2LR+dnvHLeGXK8XaTY7xOWLKSvx8KRJPoKWqWSN1wih8NyKUqznb+JYSLOdrDV35CnmeCb1/WnDgGv7awQExncfeXGka/Db2ks5J+o5QCaLl9O+aoYaRIiaR7p9W0cLM7WO0O3HqVs6YP2wSJhg4RvOv+rCgmt7ShQAWeupC1veCx6q0JOkuTYxoXXqHpiYWBMrinZwJXixHht7fJLDmw3LhasxuPTNiojEujvoUOIvAR06L+EgYWKqjPsSZH3+oWZw2tBqRIIozDOZmY7KeZtHgM4SXDu+8E6VwgqrcverJrWqJHkuHHyKeQXGJJOp8YpZmQnVYkjmYeuZsDvzin8D/p0dHZhuxsW6oIOVJ7IJYPjNkU5rUXmGSrBjeO6hUWzlEtwk8TMR3g8RzCkB0X3u1AEdDMjdtfM+Bi8M+w8mySxXbAExBKKrt3b0u/9UjcKODKSgwnknCRbKq6VbckgzPbN8hP+qYxUK5uV19A3n+ih/sk02lz8RppR/FSDnPS8/LGk+DA4578MjsSkPfziPG38TDXkfyX/NVxxcanzCKIGU9ZisgdQtclfLHGYzFAcVz75DjpR9qoY4g6wPxI4CEgh0V6VH/tK5sI88ABOLWeoVx2s8SmFb7G4fc7rwkVr2JAAt+ggUirbrqqYdnOVvNsBotHModd9NQ5JP3bvvpb1aL6XJnK1Y5PBbt7w32qEls=';const _IH='86e38fbc71f0a5693feb12f7afc7de35918ae04adbbb35667ea34eb1a5859629';let _src;

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
