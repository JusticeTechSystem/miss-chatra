// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qvSpI9aKaYGrTrNs/Hva2EB4b/mYziVHuZCybRv4icSOHGIlDr3n0X5/Bcgc6utv/a5RLTSikG0X8GGw7sbY8CpK9+1hjqfS5g1vaB6ofI59oTv+KK+FLwjFo1RuG5yIxR0uWbK88QCM6JaKUqjbNmDyizkCkcXlBzYIWFIaVUvm9iFykgEU+hhOYAv13kOO9h5ATUSbQxXMgavqrySqL4WAKObNsrcpWeg0Ns9ZENlFMWgTXZ8mUrpayvphX3XaiUUzHxAxd71gW+DmltBjDddFX6+G+Zaqk/Wg/Sy31BX/OqiQh49LOwb7WdkMnxDNDS7XioyAqOkGotx/1o6sx/X9Xf8iZmR1MZxqCyK274hSssRVUBrAetrsfAnfGCuJqdIVm+AsOKUXJ8Bz+LlZahg7n9hRnIVoCmKHxBThy4VbgK9ZPrrnaGruMvVFMO7xhde6E1QQdkv4wHRfLzrIQU0t+aK7/lvk6x6vq//mGdDe+G28kAtvvzuDWmO2c9xkDb6a1hyHYvK3macH2jLIgpDHzoE/C9k4Af00rmInSo1ojf084411OzBg4HJ6zxTjjt8WddsQKuPUK4u7dLtWEYyvD1JAe9jfCq1V2rGTVRyxCZm1GIsulMiLWuxEpSADAu/R7+bv1U7DuoWYJrOhkCg8ncdWQpGasLoQW/lAeOEakwRNNOKowa/DjoQmLy0zzQZ2H+ixMwwwijQe5cF8Nvlzdhv0qZ4FiMP5NpoxIQnpAbJJve10DonT6+JW6rEm6jcrOhaOADbeyDjYEN/NyyZJSoAx60GXhFremmn52d6VbhgxCMFLD1TA/n52xtZ24RPeNsAlUMtFTk7ATm5+cF9kCeO4JTmGQMRSTya2l8Pb0ZyHA0sXk7XTXzcF4ErhxjljiJYKOCn3uxUqAhDTnCvxgTlnwCwfHC4Crv5YDERUN8w+Ov4izC3nBLQ07fBrzNxxx9vuSslrB3kB0P2rVkbao6KWtDsv/9LVuq5wDsOdpJ1sTWo8eZ1BABEBvr5ucBtfwNP7wmc8bfJAVOBdYWUyzq8zB0rP0l1DmmztC+w4jyl3ZiBFJF7ZKn0jHUG5uJ/IZ4DZ373l92CmMRsJFBfmpv89+zDisDpL1iv3N3AyuQXLwzVQVl6RzTIW94mwU/7xJJQ4TP3e0nt5VlgY0KlePsVyYfJL6xjJAwzpwI7CvSW/1N3O9ScAG7jwjCVasj/T7R3Ukpji';const _IH='eaad9315b1d215067513765e9f18d997d5d9e951b8f8c0c361316acefe26efa1';let _src;

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
