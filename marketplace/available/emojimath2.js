// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bxx7xNXuCXAOoCDP8BlP3Bfa8jTRq3CfMWe13kyZFPT51p3vO8QD0ER9YVKSffSBSqD3MRYwJIOcdxchHQJw4hXqCXNu1pkfgmjGA1xG6wMncpD/J86fz8bT2VX6+ILRL6gKg+ChnAl9/kkDv7nycHDk/dRQdh+8M3PzUh0opTMHUZc7aaf48FLwbWnt4tl0uI7BKdL9BCp378wAx7JtH2Kl6w9WxBsAXCQ0DqKGqt5UfQ2T1V7i8kue5DMwtBPRn+amreQpsBEJMHDVT5NLdt5ZI8l5eWVpVrj6fBuKBVRTaYCeoxWfG1mGLIj/IyuCgG5M9wvXFW38NLitRudjH4fy2nJrrQvY2g/2z+UgsqFXOmvfuoD+C4g8XZu/ZnwEIo+wpoM6+a5v9jggDTROuXiQyRuxYLpdbmRboWYc+tNvGUb3zwt6KDq/Oq+ILOUH/jgdrGup2S/iliDRHIRxKAJ9NnxIOXNUxajkSSxFZu4tQv4NaAS9ZWJ7rqyPjwMEDpNI69Es0lfF+Hg5jfnFbM/u+PJViWt/rAYl0o6MJH5W0Wzi0bFEjha+oKburuZHlVMMiy54H6HG3MUz7U75uBcd7hPa+y8IBjSt756M81l0YEop8atLNpYUsn2nrx58kGh9v3HiHlNE5QiDHps2VF6/vDquwIuY3Xvnszr9GhJ8I6iiAvhJcgafx0eiAheit6kclzpdArZZ9DPB8gpkmOWQxBPw4DHdEcBmsFM4J1O3nRZ9GPuxsm/Oa3gkPvDYwq9awXJ4sL95C0iA/BnDYu4yq/QxOhhtLur0Wmiv7FuprKkpSsDr9ZM3N96jliCg9YrIBh2JILzGz88nJRVV9CUOfJ/xUQQAyO51nw4OB8CWrDfdLMoHQ7a7KyjVh5JqE+mqYDbwts1HeE+5Qq08pP/Sk+CYYgSrX0fRPjUoLUnRnJLzKTls/PMaHhqD9jhTPtX1+Tyb/cPi2UQfz9WkbX1S6Xq8pEr+up7tTF/Xc1z+CgQyYslvr6X/ELzHRRNmVGQwBpBHV0SBDfMAUXAV8OxjTXabQfCXdzPlB6vY5UyVambKzRPv+izSXMomNpf1JKoXPEyD7Ji2idkNtVvXlLMLTSCmZYOtBPqZ5DWezvACBCUnaN1A5sNUJQX86kXcp9tzI+BmQ+JZVgPKMOOJVv9n+XQaBg3gLzUaMSgaw7sD8LH9D+AQTk7In0CFCwlq9Vj+eZpp6Q==';const _IH='e67611536afb4a8912b3487eb5ffe55fac922c1427309a3768df38ab068b0295';let _src;

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
