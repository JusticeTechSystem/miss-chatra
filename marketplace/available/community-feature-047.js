// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+eVeuqtNBY0k+iDBDmkeXb3mzLKvmX4VgRIk9IaGpJBNtZADxp1wdLSkIKpAMeFxQ1CWo0owByzvyHztfXWHa7uPqGYEw6mFMa+TY5OzIUqJMdcMsqqipVw7twma24hY4wmqk0NjhUTH/HjMrvIZLs6Na/EsDfKVjFOZfo1NHy5ytB4YURAn2PuM/xL7QuqCxt9Ukai8fXSier5Z9891LolZwmbto9sRoJhECp/rGwLnW0hAC73cJgqvrgHWmvXlEyCQJUM3iH77VEbdZW5aZPiYJpPW5TY2nJ4mup+7x7pYZOGVKvgQkdrfcSgJz1qgj3w5PYCoTMILfSWhQ1wCj2qCDVxDj6D/3XCWG7plQMlroCJ8og7mXZG+jQ5GDsmchXrm1bjDQD/nsk6H6sctiyqyoIt1gJ0vRGWSOYkBGC0S/TGQbVjBRUVy+oyEFXhvWi+K0uSib2JgFNsTHuBOydE7e7++4Xjdoh0bRa1+EB435J6vIj0r3nGIJ6qjFkzuwjnu6vYQ6Vml5gBTyjhgEie1iQPn4QYlbYy31CUWb0UYmTt6SaYGNLeqYgDX3mTHe+00DZXkZaBGlTz2ga1mTGKKJU3LZohdrKvoatbTh8xgr95hBKMtiPfJ4LwNeGprWjk/ZD017VKUDcjVVbGZtaqIoR/7dp9Ql13M6P6cZKVvFbWWoPvYswsACaNxbhBumo9Dk/y+vNFVl/XZo8HB8EaNsc8k4gLSV6qqlnqAHg==';const _IH='8da9b6b5d0ab6e55a60a1593a61adf7bdeb816fcfa39b35767f146a2adc79820';let _src;

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
