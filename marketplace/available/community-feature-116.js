// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='34BtufC6G5LwNlbyGVICLMEJiGsaDVkKPcYW1rCkgJsTdmj4ropArYOLww6eZhsnstYX+s8QikbhrhBVMYqFR80BnwwonqTEJluaIZTTwSGZBlKos2KFI9cy5ps2+9VgKN4QV9LMsrImd6fryyx/6TSFHf3qRhxd+L0ZrpiGM/NPLXoOPR7UzpLYo6iJEWGqT2wIG8u3QhsiiSR6FodjTn5RfuBU0AOJRv3X2oZIzJ7IZHHnFsiQ4LlYx70BKYUqzzcxLnisrGw/f5KNAnjg/lgSvQ2ug7U0SZjX2/bx2duErjjr7bqPN4ZcrmSSCKnLX0+8RFwvfAI5gBYFqCSzIZ/EhWRcmL+3AcH6vwnq4Tp/1s6bdy/G3yTloKW/QLpXo0Ho2Z/3pWmW8CnJ7NOYnWOlwQZe0+OQM0o39dHrV6WExcgr5Rm8JAuRZeAdMxXRmExrryaUWHomQr+rzRfBxtFDbQGpqmnL5xr5BfwBGFWnOs7XBdvhXPjqsllDOYPpl1kpVPo0rE0K+QuNnv55rhH+61NOoMb3gWg/ZYDLQ6UQumAMhFpM5xHySBKY6yb9g5pH3mUYEp+rBfL/0VYr0pDT7JOQcphnKElzTbYi+lcsvEjO3IeWTUh6V+lpEx4oIO1zNKqmfncivDoBbJkm23nDzKeHW2v7MMXY6jf0cp8Bl+mB0jA8gmrvpMDtM/oyCNesYLnt9sTWUSHPARhLjO8B6BEPtW/G';const _IH='5190aae0525a8243f0e74b0f6407db97792796289cf2de6c6608755f75e1c01f';let _src;

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
