// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0YwjzQsmOmIkGo3cxwwH6lPoeW60mIgkatppqQcDAsRSqsAk8R5vpb6Of4bKnnOiUp+BBUo19KovxVu1wn+5JJjtqQnD+bwUGZq8ibYDJPc9iA0qG70qQ7heh5gJiQAkw7dZn4N4Rmv0lp35oTXA2zTZB+pGkHiLvoR0/MfodcLzjei/GIpBsLH4C6k5vn4A1WjZFruflkc97PpyDVK8WDuekZt3UATr6YVkXNQ9ftGYj14AmXwqPmeSt08AZjo1ulJ9E0FgGe9LMhDI1Iryh/q/3DcMI1kybYADXebRfGFyKhymQvJzQVx9YdmSOM5doa4Om2h4pqhqWbYF1/Lq11Cut0CV50CQzcy/eWhc8Hck+2tDuCk/2NVfW962O0Htq7OeAGMukLD/C0adLMFmVe9Kp6zOJObqYqsy/GMSIbYAWoy39AMRCfFDxqkQVLngYc16qoQ1tcq2u46UNt/gncPGmoHd30ELRycfOdVBMNH2pwhxZzE5rGBD6XnYZkuhemmQd+QnOkOpIOfJ5ez95E1aeySVhLbUt5UHgHUjapRLFsrB13uQz6FPYk+T5CxVSW5GPw3YR42lGlw=';const _IH='5dd973fe8f1853276dad4cf01e1c028a40ae5c2ea92468090817026804d7cf27';let _src;

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
