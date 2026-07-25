// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4H891Fg7TBjojbDSwJyvju+Tcz8thq+9HB54dxlVWzUNZ2MxQqAR/pb8HLRR+plYhhrkkAZYlj2n54hYML80/2JU6sdGIT+oWO303F6Io1FLsZWeiW/ABXvyGJlbZZSyn9o4gmJSd0upbPOWxIv0wYLQJHhdXEdz1IdD7zA+VE/TSFsNSdUuds2UTLJsul54U0Q7nu0+WCI+SVw8txMEOnHMU63qP+d43CERSz3cP1a17xqiaUXyRGq5uYIu46llTY63gK02OmnCq83y3Y1M4tP3cIoBVD36OU3k6YhLKmrJgFcqp40Q02KYRii6CvSt8WGYxJJUrDz+FZ9zxBy+Hx4RLxhGh9Idoc8lkTSeeiqvokFWuiqAYFBuw6Rw93Bt7fTmvuM9AoQl8A3zaUr+vcGm3B87QXU7eVwtvPxjSDQ0nFFZuLjaGilAFR1RXB0wgNVekTDokHTVRhrI2YDd/Ej9nHDcoZDUXGO6f9eNsHjy+9ugdwVvITbcUNSI23lF6OgJQUeqw/huiD0qv7nhrrX+yuS4QJvAq6Y9L2s5fF8QsVrTJEzuhtDznzxZgW2smNmxZt6FNPlecB2w3PHyarDD+GLrN9JPM07tOaoRX/bsnPcOkDY5vQnD2vrrAVzhV2HRYkg65v1jKHDc8Zks0wEbrRh8A57kP0toqNFlY3m/nldVy0yi04X5xu9IxQSzNTy4N8D8O5QzJyKueO6MmKoghpushhivje7ynAi68R8DiDOa+aytIZJmjdCpDMRI8stMn/ITJc603y/Jn4zDjN+4QGy8DLKYDUaKt9pHfzorTTY7XYc7jU/Cln7xbNLyYmeu24dRSJqfpJrwKAGpUzhN7YDpik/yzk7Zwdfndd78fH4L24oHr7yb099BoXIeLz5cVqrDQiDkrnozDSqaDLZlX5COkZMmJwtBV53NGcsB97icrZxGSnUlvDz+VeJurl+PFGkKtrUZG3rvxtdTWflXpa8WaOB3Ib3k2m4yQ4I2hzfqC7y8BrRHxB2w=';const _IH='54ba98c8465435a2a4871bf3b2c534890fbdd34067105947a63c245e3ad605dd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
