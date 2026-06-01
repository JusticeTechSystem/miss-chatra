// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQydhZvWx17jaCXYn4eL5ytObKQmwhImXTUPpaHoKYN+lNsO+M4C0d/H5hzcY1v5X2fAV2onR0vLJP41TtTDHLX81D91oAixu/voc8zHptzXBIissIB7r6gSCehqgYzgfrILYjcgFJsh9s+8OzviENEe0Up6hlaihu1wjoGpXgUjYxaMP2x069+QJ1CjyA2A8EerBzVZ+/RyPbw6mEDgm3670EOgJZd91bZjR/2jRApN9S+7hECwMLH33HB/WBcANk/iZPAt4JfVvWRs1MVdMiF1Bi1/RWc8sqqbg/ov4KEoIlPDjtauN8ykyQ+QyJqNrj8z8B9WVyFgQPopJmAKh0fRg7OW4109M0uLH7S3nReHEJ2mEuu1uQi7HlO0wLXdXx9onSdRt141HSK/sxDlF32udV6vQYbGwHxI3hrTK+kOCKAgLDxtUWAinioEbygSXUB7hsc1XsUe1v9J2Qt59rG0i2VF4+rOJzLAR8BsIrbb+hNze71h44u/d1RRnIzAe8lFQvvbSEchf+P1GT8YCbyoiPeVjPHy11mgSbiuxWW4K5ajwGx5ljUXmqxqDc41e3hsFebMu45OzUgCsgA35oUvfcQlMZaEtwSU2DJ1/KUPhn90rks8vKmTzCKJdv0VJFvcHyLr2EUuC1SMfKUv613YbglyCKuztksvRLDsiSt/YvuqtbLY39Il/0RJk0orASVZbOOxLK92IA0XOzorsZUoRHkfZG3nTFYYIPXvyEO5TUOreC8M2WcEVypMYG+Bae4M+S1dMoHP6yqx+e2x/2/aX4beZdeLyJr+Ii7aC0CiCd+BaOATsZvET6BUjfolHIKIShp6Laqf2s6VAP2ONNd4UDjiGkSu20ilV9ycm9JdcUoY+deg7hTbexau/AZ0KokteBbKd9ZgYBF3Toos5xgkJg/l99mAwSSiQcPOo7e1vR43BpuKBaNMc0Y1jMykzcveWzD73qX9w6mJbDO32crtFAU0Pxb56jG6Ea2rhbikMy3HEdBhAkY2W9pD6SRh7MXLIUOdVwrydqDt5gu5cx8ZwIHVNxVnudikhoshN8YTZdDJd9XqG2ZncxLefKgxkVeGM7aCt5F2+UwXZcYSZqU5bDBjCrmKpz/Jj/oZs+D73E4hMTnVswyQja9HqQwhNMay0KeRM7JPLAuRtCwwqYL/qNO0lYU9PmIOObEMmvOOhT+yrpq2V+IdHz3Tj7XUXVDZaBIpnazQeJhRktIaM5JRVhWcucs1aRBT2WTfXoEnH21fFQAVm8isrMcB8XIPzgcimGRWn3B6RJJErV4uGsUJ9TUFW4dPaMsrmevWUujoiCQcKKLu9m/lYobKrQ+s/OM1dzjJUbMFX0BehoY4HlRp+yogYgIUPFcmwCtV4miAKVWjaJbYNUQ+TflXqkTkkuZ7FdugTCNY=';const _IH='c15c438aa5d626c0d8e8198167b956619d9d265b60e43dc19d87f72595d68e26';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
