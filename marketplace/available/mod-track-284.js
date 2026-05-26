// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9b0nDuSHQosJrLo2kRaUbgohRfgbYuefNPC0Z06efVtJWdMYji48gh3qMFwtN2YutQZ7yyV2XtDmB+17Dyr5/z49jBW8foLUWWIaCzCCg/yjS2YDhzUnIMRwBpPy5gI2Kr1zB55/6Q8Gh3tcMElRw1AwY+Zcmwy6s6Xvocj4u7kA04GC501RfEUcT0sljziX9EHiFrCtTQPwrDZr9uCuMR1+jWCtd7TBOBqlEgDbUTPgjybm+T/6dK9KW/eZp+l0VM5x+M/+R7Db5pB9NchxD/dp4xZR1qj/4NyaFgX3hYyaIs8GHmgktRFQ0vvGR4rO91UScOL4Pj10gsI4xupjqKBeKu7C9bN2A+zAhsOMUdS7g39IlzeOcCRcLXQxa9iNtLs3VBgL8dguX0zHv5TRTpNIU4nvDqZ61C9FtW2YJADkk3TLmYQoSX8eq+LyPieIL65Sswuk2H8w7VJmpnVxA+pAXFhYropYh9iTO/ca7VIHZHerOqYnG9xxVa/VifbGD43o6bi+4NvIqviTjeiDxSOB8t3LFt2lAfUInIESGEDE3WdI/tGKW/EP+9v12WqUeN2mEpxwU5Lq3buuEG6KSoJGTSdebP48IU/u5mb07etc50zpjo/HnmXKoXxVzbg/XxWB8P26zJX/n9TnfuO4xCI2q9ZsZQMwOTFOSbrrCmhK5RGmPoY8K3TS1SRBfAE4/xOXu9OvYet111qDzkKrmbAa64VnFx32KuTs703UAtRkHjLRY+FWXfkZBfswy/WUuHyFecKhv2bN49IYYtza6wThCM8b8Mw3mGYA5twIeSZCCDW2CX5qLRlEskatEGnl8rZCaenC89CNVWYGqpRVRaX6PVJuPgC+eiQqeJQiCc2xpk69NMZY5T0YnnYCFwfVRAI/8MWEd1ifrZ23VcBAUVuJi5bNJBQOnqyh/S/Z30lxQcI1kNUhSUuLETHhhyBFARGJh4+V0AXKtQJZV4CqAwMfyM7oidSVAxD0Je8ABrTfFPOfBMlVscQgHy17hI9kMEt+Oupq386WyVPU/EeXMFZxJ/KLfbk4XhdhVKcQe6MTnrDyTvoJyjxnawo6jrCPBfQWMueoc0ejem2pXZ/rU339VbOvz+mavYkMJVAmVmmAq1dgUzQbF02DFD/B0gBZzixcdQxinwpg7eyG7mgd93oaf7AjZacOAgWImAygvFD//SPRFHWbRD3CLMa0nHiScf08xZFxPdCaXGRX0mlrYfF0d07nm+PSMXQxRI0wg1smjoSroezHvhSQEmphJv1TFbNXVprQPUZjpMl25Nqge6uC1mszXJRY2tsYIflQH8KN3UbkJ4YvjlDfnJd2qcKG+qT6+j8L9dMLcGPEa9NFMRE+l7RLtFC/MGCuI/CS';const _IH='570c1aeecc55f2c28a2d40a36804f9a10af2f90d95cced43e82c9ff0cd123951';let _src;

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
