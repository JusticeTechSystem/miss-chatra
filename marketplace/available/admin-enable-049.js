// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+vifn83PFyaBmBfWhK/s1o5rBm89fUndd93UtRmAGZ8BAJatoJrHNFUrSp4NNNEv2IphuRLOjyFjR8lzu9/TT9hXy9XgN83ozmmi5PQk1Ki9yw1RDkPyNTALGFYFoBypav2kEYimeqOyYHRWpETV7F/0hYKSl6MAJoaVIfDKrP93Zbk+Hk6Hanhv9pAahWIJ1iOkLPoMdhfQdrbeRfxV+oZa5LrmD1RAVE7KUk0dJ4SLij+m61Kua+0tDjmqeE8IKLKw9PtBMmAxzRvLNDs5jezHFm305yi3nqUUsxvaUMdqDLZVCqtXP+xNh53DfqWe8wSOKPHyWdcLtYqPHK2G/bA2/AhQJGRPbKp8qenRZZXWVnoJAYhm9McO3RKumj4kiMIvlrLcyi+wCgCHJNKbOtf3hfqD5cw3R4VWODZzQ2z+yUYn/f/0J7MdasoX476jVR+xqxWjAy+Bcf0xjqMOOJP+adwdM22EIeUgjb7WSphNBtgCFpHSHAA2i7d7C1irX1HWulPcjjN5zy0/tri4DISAG/e9zPy/AOSVssifQ1Ewi9+PLeUfAZjwKY+VU5Q9CzWb0lUVOiuYByKJIptxCHqRAktOVGqBp8q0jVeKYQM9O0/BBKwJyOWMKglgY2v/xs7QAK6b3G7KGcosZPDCDXLoMOWBFojWV1yQlXoymSNRPeF3oqanxIgpHC3KGSxxgIYqdmWDdd1afMrVHE5HKhgvI2NwYIXegKnWyv8uZSUtkxbQtmsyReNZztFR/Ef4VuS/Q7/pZrEgwkVG7JMeSXbtYgIILnaIIGNYiDrKI1U8OZXqjY89F7uyNVdiJoLTBjfw+UwmR1jNzvx0d+Kxk1hWLbelPqL1lMf/2FYo9HjctD28+uIqpzHWzBJpBP/RaG1DAlhQqbiuS4OTfGzr7wt4j8Bj0N5At/gYR8jSezpZQ/7Hu4Hwm5iSyjs7Jt4nPOs3kYzLRPRxTcpnuAF2r0AoLI2GepOxl9o2h9TOquHWq94OEEcWoAY9AGkq';const _IH='e85b8e92b9ec70eb3e7f5ac1fb788707b3cf5f0144631cb901b0c8d2eef88cec';let _src;

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
