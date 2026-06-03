// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0DYN4hS6LZarXeJbHhrBxpW5kknX8Trc+MYtTJETnd/tH4T9oI1O4qYA5tWiMFI5x/qBn7tgfQcM6ie+yVpNUkQTo6CFxIRXxU180AcqVk8PoduahYnfZJn3EgFPlpDl6Uar7TI1RuyGh8HIe9Z7STPet2oAKRe/mJ0Om2NmW+qF0digDzOo8rlkTCP//l0+ZexZs6ZckFitN2I+PiBATnxMTL9YDdbyu1nu1bq88/s4ESjA/tcIr37J6RakS9yRHOoO1iNnqHjEKKKqH7jsQ+0UpSU2rU1SBtNlAAvgHGAaQOE34vPnoQi7dCglzDTfs2HtVcrO23hoE5PgDMKjlA5VHyueLxIcQfnq++lRRQrnwyBpGcpfl08Po878shE3EuRSdq3m8k5CZDIykqwr7BHakev1Fb0kpK2SaobVS9xBxS/BbzdSVLYtusOeRUcvidDFx690Y9eyuFwQz4VfJrmlrj9AlhEscNNMWknxSqsDTHvJbVcR+QWx5NS5iOLMsmTFffnHpXvG5JSHA3enrlXBdFDaXnfnv2Qi/zbVl2ALAlOHP3bw2ajq0230LlU3GGb5muAuJKed/Cua7UaTlxSkQrW/nuPvuPNL881Wguq4tsqO3cZNJavPdKjoZFTj95lj1YngUacAMryfgFhl0YLe/J+knIOCBn58YTEENFD6TCTa3etrluIkrmbUN6E6Bpz93/bRhv4PhY3/6DSiLyAygkjcchlJqCKuvW9d8yQnhLLEMeXzdocSQZYGGKFQ4VaQpc1s24PM2xwkV0Egwuzk+LCljQq5GLwpVoKZf+meZ6eQLVNY8PTJ1MboFBxZIXGi/T4kaVjNkX1hcUtDpOw52vS+0rC8PfoVq2SE9had5foe3VFOEQ9fKMuo9E+qkq5C6v57oXnVZf1lr+Up3hIvE1p2xW7LsdVzkRWf3fYtSmBObww+jxkzVCdxvGtdII/lTHgpGC45fGmzRkACukRdG3s0X+1XaSTKeU+KrQ==';const _IH='437d1b29ca4bf1ffaa3e5a0b5c760d563f92a5b7ec6becaf292a2703c5b5caf3';let _src;

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
