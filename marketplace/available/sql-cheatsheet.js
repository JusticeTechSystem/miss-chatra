// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='50ucW3PW030gbjAZTp6anpbhOZkkp/gDs7we5qVp0xzQhlQvpN37RWrp7kXad9ULKt/+eLWC8IagAPfJa49zpuL16EeV6o/WlwMnhIxc1okd1yuNB3K/Mj4avxuYVNiEMU7PgoxmC5EltncMT84Kr9D/kDsTVAu0P67FFtUnXRT+pFAWW6Mk3eNaEymCcgi7P4IUjp86uhZqgvD+xn3liCzwVlnJt/WlpmI9NVbhDarjFV9tc/1wCDPAgPBoIeE68nW/VhFp5zqcJmrrKzE3BzePJh33wytYYWv8A4U2PpkYFNHn3b+wJJ40wu3y488fnv6Ty5HgvqoddbJO1dZaEOZG/dMAt9ZRGgeugtgUy4Qbvl+rSRmgftvhxBdD0eOfHBGrT6aQjRpuHSfABPVH15abqdW8hCfJNRc8++8u+n/Fe6uLQ8h7z/vy+8aE4bF9gtr9la9QtIXZpatbpKWZF1vXHWh3b9wxZchL4E5Hw2AYUcHlbqfr81k9Hd4+WJkUKYmosuzg/Hbff0bRuH4ByR6gc3v7vPC9uPFegmFnolK+FO5eaCQMLMhKpWIJ7RG7RsuAppGRveyI6gDmjENOoKNede+smChcMhyfy1xCxRQNYB/PyThHksP7nzaNOaOb/SMGQso3j7T9x0R6MCIOHYmff5v+z/YWj16xh6+1qe3pWFzlUa1Eo7KzLltOMkQXpPkUtyZxhXdswrvP++az763tKbPnWy3KHwmtAgXMqYLGtIYtia6YMY/vm+ZymXSUBSQCY6SYRWOimy7uXjobUvNKNJJtkZ4cgyrRDYgf2mm3fNUyu4/CTn+l+U5yIf0FJzMhsiNP1190TGAi/4z9iC1IZKDkDrhQeaC/0QkArQG/7ne7X1nID+Be3+RouMsC+YmCnwdKAtgbl2TjXA/RwicGPN4OMpmOm8gCmRV5LE/YGvzpth6XFLRfSkl5RVj0RIZEO1PGpZOixXJ+GQeVm9jUqXIQJ1JpkEWQgSSf81hTbCAGLcLEfLyC+odpjB/TIcvJMCny3o4HAlWh3DPBJ9gDZbc/RTJ1dK1c6UkakkP8TXi6Hy8KFDdN+mqlkjmD2tKv7Dz55+pRb5WRNXqjcY63VUxbmXYAWt/hRNH7imx2rdO46dhMmEx9WUGHGbT4EIjTmToVwZt1gAv/2jV4MxWfiFLe88x3bcInQ6umNvB2WyjnVlvXjnn49WWb5bmNUDeEtnpI7EYujaVs+cdF6bwmjbxrk78i6g/xY0YwB5B7cI+Nc0461ZCRyg4eWIEUJGuQCG1kUXQiCVMDpPV+j0M9FB54CDzqhG7P19c4g7+cDNdkGlACQIjJIwmqFZTFhP5FKX/zhSCSxsiRq/1mWhP7d0+hWOYJloPShuJ3dtXtWjnYxnQ7WG5lm5CNslpavrLtyOe4L8OFaOngJPwOmWqWSDDLl5WnACbDg0wHMKQ9jPgujVLJhHk1bXlLnjdk4VTb7xb1wRfYCYckaPqxKCmblCrNPFxXdjnU4cI4J/MFwudZUg1BicGt4Kf9x4Qd10WoyGYpNcQXKIVXPdtSXjM+AbDnFj/IctQomLwxBNpsu9JqJfPlr/spHMW+Zc23yC/th5YkdHpCIgvCekOM6nKjlT1BPzhoT167RFhWTYgVx8SJbD5v0LhxLnSQzKrXH3kP+k5E+riyDhnTp6etBVw3Km3pyjNol9oZYhoezTW8zT3lKoPcO826tZ3EIsRjqCbOoYYHLQ+0PBM3sda3tEVNuE788Jxbmh+XpSroFGZjYCV/ra6Img9cXLCTeEtrXMAMPl1gRMs=';const _IH='377ed010a9d33d0437e5bc762f8898e5c22977430c9b4372fdbebbb5dd43546a';let _src;

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
