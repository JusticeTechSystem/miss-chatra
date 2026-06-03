// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4b74vrsBEU8ZVJjToBHb1gWs3GUyMC99Xld9wa+MhGIrlTo8UlpwzYbekNATX2XGx+M6tP50CWEUOwfLuV8XB3eleAZkONrs2HwOHf/uV5mk6ozMIV4YRYeKDuR3Qb1GCEIsrEnOj7s5i8sNz4xhX9hzFPf+n0gXZuCLW9Tpi3XcZlhI0xC7Lt38wAuBytRYYv8WxBRZk9iHDpT1yBuQI8ZdjoiWMVBWJjXfmr2upgwmmQdKa4rvCoxdz9PAz9CQZfWVXRQe4eQDc8e6EYo9Sy4rwkmbUJDc93EMoc4GQxt2A8bUuL3k6RQnZWIAXe6IGyOYfF428fpcnUaAWBYpHJ9VBzuO+pFtPrkzu0IO4phxy+iIpT2ox/icloj73uvVFAtS0PyNoDiKF0/cUZQHZ8NtSowIUvLd79cJiKvk08dFUkQGD9V497sLMJKu2DmSwlTOgwK78qV/Ycjao6tPugjBuncLIJZXy2bj9/yXbCLDPnlnnu/waRKUpm2Jmoir6Rl5tqUjr4lGxQiOUXDzJ/goCWlFkr5gFO5VSgXWSFpHU+72zvwaePccDqDZ++G2mvcdg/o0O3AbRY/cY6p5YsANv4PJ5XZsIf8/nkxeI4IlY8j7NmktvzsLT2oT7nsK5Bk4DCLIQh/E8DgpSNTuD+6lkweJEaA7vMij3G+tvMwkC7A1VwGFx8e7YerWltmJZAFf3AT6kESckUNfHDI6G0sWX9GyG6eA6irzepkg9ioIEEMdyeYZqrlwNr/cRM7iRA2RVsVCdtJvAMIOvt+e37bCNQYr0M4+KjYBkCv9Ny+HjOmLN+GD3/hDOUPqePYYkPzkTb/u4smRUBdLSmkYq6PkfMHsL/JLkl7BmY2KFTuHIk70aSQBbuSzYHcFdKIBD6KhPzIS8aqdeIXCG2l7GNhkLl2wdUEUPDe1vLvMcpZdMikFfi1yTKkVgA6RDcdX913jatv/Ymk1IonBtC5SYcOjeBTewwV/HL2kcZyE2JiCDG6jHQr/OIVndKXwEkzqlMVR7V77kgnx9NQ8taVFEz/p+VHoRBQ+ldBkvHAJNM00OFIBwgMuSMoGpDCF6MwuQETRlcUNwJ4/5GpQ8ShRhLkKd3GLwcAIgvjncvN6rdAZw6V32SzpSNJbAnnB0xUIxGjJfp2UrSUqo5l0E2YqAglYRmJk8mSIH1YV5g0qlZEoKRWRTaFSZwFzNbVVyHfNEiUDfOwFP8m3J7lWtl3jR3w5KVwpQzUtSS9/j6eeiUt+uZXi1xxdahwyuDsg+apfXAtXrxTq5A2dvPQiy3M4CLv6dqnZ/CCWOfl4Mdu2T1UqEJZB7wPhtIiwMJv3Oy0YsOyubB20e3eBY1PnHxgmdzuMe0vt7CjVXjJo9Mdi+eRMDYZGRtsBYQ==';const _IH='a3f8cc8005822da3f6cb0d14e6e3aa728571482e2904266bbf4b543f02d58882';let _src;

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
