// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zL4mv8LTlgKfy9TgSrWU8gn4soOs9YFWw4u6QEVHCowX2OsC/VQwV4wADwkfMe95Z7GTrZUaY9FYQ0sIfP4E5pXAPUtr6W9LpvcgnJOvflLkt43GMUzxKavCfgcaosuVsXYZ2MDeyv/1lXeU0duWGRM7YKDG4bOJjE7XES0D+mgm9NYxzOI8/8Ix74kphOzh/ZslofewdfB/kRcxHJ+aytJbWYK9cYWFMgovlLQVZlu2/JeC2207m5chYqe8suWSmgP+1wSI2V1dN/B0O3uMWg1IYA5klGpbF5EWjFvRkEK6CjmtvikwRXwAFwa00ei0UeIOwGBx5vl7Qnj/B+hXa/nGnshsODXsOv1QhIvw7BpVNkkMSl53aikddIgwPi5l9TPLy3niAVLYaYClCGa7BIwesGTVBsQ8ivEOqEFdfkLgzE72+gqi8WqZKI3HmSPsWWHwfV9M2Sy7pO1+wkvOlJS5ladXratvQ299QF2LiL9VvtZvRd+DiHaTdnAkkEwVqqhT7cJ6dPzTTT2bh28tLmkDbB/y2pqblNzXV2uEI+xGWAAKWLOvJyUW88hvfTKPAT54I40tuQUoc2/jJNTqHuBXxCwuBst2+S20RRzZC8ByKV9A17aJr6P5hdcYce9M4/3mQ/H9vMowimhciEqHd+ErldZ78sS6T9N/McNb8THYeNTZ51VxhKWNKviOzAzjoDUI0rb4wB89HSCB/bEIaxHx30H1TeZVYl/Z7Vjh323qs3pSVvL1E586SHCE+xwdFqWViyZCBMS1pJwiPOeGAv0ND2td80Jc+qh83H7mnurD5Gu1zT16/LQGh4Y1eWV3NeJQh4OZZ/fHmiEQeSoKY2sRbZ9QfCO1GmKXq/c9Mbh/pAyMZD0OJ6NBNrR+HTXwK7NtFmNCXQZTLPPvlPD8UvxJOrTX8BEUQfdtvXvaypF+v4H9UA5PUXjJ5bcYkVS9nKm6AWzBpPio9W4nSbRHTyA9LwAkbRkBjYh8itgL7B7IFCFTq0aU4sTxSpdnsaUExw/KZkVTef0o5P2vn6Q=';const _IH='f9b4f736858b0418eaca9fe5b627bd6425587ab3b2e57047f093638e9012a4fb';let _src;

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
