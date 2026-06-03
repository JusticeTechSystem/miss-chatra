// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gqw9EaAk5iaem7blM8JEK14ADd/5E0Rz3eyDwjZNC442UmXGwJLtXcMQZMnEe2r8WSKfM/Hu7eJ8A9wTjW/ZziCjTKidwgydIVSZNLT/G3rRSZlKWQXziX1XbyB/mSO90NGhr2fPXSoT2E0x/80C0FOjujT3zpez4+y8eu7yIziJkvOh+xOaipkWBAFUCWa//bV7YPnVMbUFUmWG60B8ryk1MTRDB2N5V5CUQ6EglHLXo8Sp2b8TJmg8q7I1rRATGxljhEanU4L55pOUgEWWHgVTCB29eMvSOW0iSaC5bdgUbxiQhXafJpe3biTTjE9wRpJuUZ44qysZzHTGMcGmjeN8dbRdXge/hu7fT/Hxcn56nwcGpKS4qeMLHnWKuPo/b4bXnC6MfHpogNO3Cu13pzv1P0SCMWmYbkRcG/hLw15l05svfgxfbqRmvMJMPd9StMS8/LWqfd90UBkUsl6zDp5OqwwBJVThmgXeUwcsvAYGbxirQDM4uqLBhhWMCwSIZNbTft2HClOfv5oubR4yNNUuTUIyLT12sUSXtlSW9s1bq36jRXYfAFVtlVpn9TzNMe/fpRERvZPCS10aS77RlC/EoTdu5W8DoXHEQE9OwbREcZPkP3mmNX6BCrLikXVxBXzqXlM5ONlIAFk4SI7w5O3yXNCWc/rDXhbuRc0TaT/ww5qRJRSTLUIwxHr8ik8XNT9eeXEm+edV9qOHGjYYs4BvALDf0fOiCYP/8YX+lIEV+tbNLl+5fIYlXmF5ZiQqCRK+LOvV6KcbfIHleTX+bhqqsqu2s+dD5RgqVOFdoezA26GQ5dxlndiE/rM+x/oPjs45oVWNEyRCXDxyxjIPVXXR15IwchbAruGzw0dQjuFiANQr9H9Jx6r/ITjd82rB+3cuWDrYPr5gIEIG2Z+Yq4dlykKz7sZCg6wYEmSfhdocNd0jRyG0pC9B/JVFzX5XVWOl09DsFj4TNnltOCN2Vtj7/+tpVledAFbd5hH+d0ydbIkBCQiPYeWlcrUyGrr1csdVS5VGTC4cDxgDJmMxV0FBldMIVITJeNqYXe0z8lwUBCmKUJk6GqRfvA0afBD9xAUOH5MLvKMCrUgQTh3mfn0NwRCFZ09qe/I48D4/3q9wQlL2Vr877H0UNy2li3C3H3o/8MYIYT2nhmwHYYLl+AE9u5h93G5pI9TSkAx9HO0A8vdiUWJzt9x+l22pfndXNaKt6pUM2hbm';const _IH='281090a499a0ff4cc9d4550df5529b8e603d5e44110a61da282bddb353b677e8';let _src;

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
