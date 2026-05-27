// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G4WMe3OMJ4I1wy/UKC6A/YpaUmNVw0HVWkiNglUC9s5pWdoZxDyGvRa4r6EE5QeWYntAa4dvxJT91FcqEpOBD7qri4c1BQyfdWsWXkKwZggdf17rr9mjIYAz9IdQ7Zbhxsbm9esW7gXLWQOEEgiIQ3PZ36VzTmLEecG17VoEQAA3KmbcYNUuL0BdqDND6/vQuuGWn3vML5jswSnz9SE9Xapr0ZzjuW2WpHpG+xc+UWJE69swISi6Yp+SdMjsE650s7fWpdY4YMsmW2M7Od+9lM91iHmYQw/X1HfKvlJLSWUUA2pDPdHAWkCb9rLxh0qvALoXJOcr9NCv9FvcRVxjrdyo2UXPj0p75K0V1WdBMC5sdt8OcBbr7qm1d7TXFExWbqwm7ujoFNZk0Va0d++7YDrKItPfHkSMcV80TNPWyJ9gyaGtwJ2tB+bQI7OKHFi4mrwVyFQk5Ym2euSfdWy9tXpq9JOU0mrz1JleuLb0BNiGU3cW3CFI8+GhilapEYLlAb3VDHVfWXyPrLvkY8zu9/OG/28oqQ1dO0JFqmR99mf8p8BFBmu3xR01EllV3wnEj1ucTkC2c3Nz9q2bSjk9hPVwXPgunt++jpbj+vCawAbxzW4Bsg3J/VJi19HfOmR2GQbQNZCARCcLjw7vSBHFlLFUc/83wEGxzMb3StJdzDby5eYfUPxq+9v4dsVkD6pwRD7Yi2TbX4JNFlOIhHjQzZU5NED50AE8FeY9xe6+1b/XIiLMlUohbHj+iR5Q2r7aIDXAfJ/+UXisxacdp5xvDWzuW98KmsKn4DBt0kcbDmjW+kpC6PEG/dOzwpRrCC7gExQCadpR/+hi6YwyTVPhO0+ZtRouyZqHBELyr8M9Aos5CCrzsC+5HBze0bvK1Kq0zgJ8G9KQelgYhM4x5JwcoozulG6BJohWfLmKQP5BTD2T2sI/wCaxVBBV6Th8CWUe849fFicp2wpRedTURbbYiRfZwvEaezagOhV9YTCV0mYctmuywwsGRkpnCTby';const _IH='db37508d74f23d4c835501a0290b5a7be8d1f453575389b06f69ffe5a2acbc2f';let _src;

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
