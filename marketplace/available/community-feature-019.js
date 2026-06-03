// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vW2kw2RA9/b8tDZwXxlS6+0bb7HenBP4gavXgoU+E1Id8pXAlxjokF2BYY3ASBG0aswmAGy8qPU7ojnzBHbOxiSJbTn2l00owKDVtJo7oEc6p/aGHmzo0BnFEzux0zasuM9ygTltCDsSCumJTvxOrhE21PPYKRwjzFGH4fGECJ/VtCDdckjV7fHAqF4DRTXjACb8YFfELnU1J9c/FljFXaPVUmRnq/dnLNpl4fRE6jY2/+6Ju2h21+unjG5uK7fMsr9b/xe7dXPqnTRp9VeJunxb/RQNY+6ySYWBaKfW7KCrtTRTC/mQX8jpCUtkthdIt+ugbURF/nl/S67A97mwF76wcFvaAG8Ws7wmlcUGu3bvcX2XFfk53z4p6VSqT+bI2up5iPwB9Ieg0hOaHDfhdBP+sql/iD9WpP0KiCSX7ZgGbjB2TCZc6JE5Zb4uafoXB959l5SxoCOvs3w/lXXXtAGKRZ3WZ3yzAX0uXYBrAjN2dbOSZhEkmFILFKWAn9EPXrJ4YNrbVr7OfgE5WcKpv+q3UEsAPaphTzIzxAyzlyONx4TJ9SYbdafyEFzIkM94bqQQw9iLzYiKbiso5Yil+kprBxIb6zPr/gOPZUK3e6A7T7u9gfXG8XX74uMAmBU7JXUddU6VN2sGlJTJDqxOCu6qdt2+lYM6rcVrnecwyB8r5DcoJhS1/p130en5yDlNTDQlLOhzcDrPtGAF9OWCdaMSeKiwhLGawIoX9Rr/S8MipQ==';const _IH='113b59c53d5ae1a298922fc6af8ba07f5ef97f50e6406cf05698eb4d447d56ab';let _src;

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
