// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbH750fmd6Nx61doZvwdQffnzq72X0Tz9XHG1nTg3BVWp/MLtmf1WYA/lJ8a+EEsBQqR5XzjsBC2xfRDt1xpl+VN3oSvopkNmNWCijuojj5EqY2n45QZUiXpYFHqAZz1zkQP3lM3zI2K+/IEq+ird9thyVEp3HO+7Y5ntzWbgogJ4eX9VxXLNgWwS52PXoYSVlZpaktHS7ht7bhi5mEFqXzhCx69yVq2+S95oSQG1H8p3V5R8fszbsaEQ2CjUw5uURIbSnotecuEuK/nOVvbGUQmG/GhjWADZDaJzMO8iFqLqLUNPUBwtFjEmC/LpAn4Gu/iawbhFG9fgwap+pvAA72VTII8uM5z28XsrN2KN6WBJ7WEg3u2fgQUz+/FikTT3hs6MrS7RShM2lEfK8qSflBBsZd2EjPzdgJwtinG/Rv3Zk5SS4hRPSzyvdNtdc4P9FViq+7YhczOqnGbPEwT1WvAPYMmGbCbnBBdoGBXRc8ghcUJTIK95MKc2SQ0HwFyP9aMOhC4mLzBH7/fW89zfGCHFtXaG98C/02tTsHGgWD8CRRWEaF1x9iBt+VKByTRxwAPPgXT9rv0vHQoYtesAL5wcE2AHaEkhlThz2C30izj5OThar65to48icgEghNgXJNHa9vqRgwfU4tryu7V/8qUK72qRYiRZo1EjBGt4akcYqJzZADbUwK5TJePacVjWeU+Bi/rOcIF8l/IlXiT/c9eELguu0KmxO44pKGjK4F/3cY4K0SN1R/xcwhN8+6TPDQCKaaJ/S8WVwBrhVYsMz9jW8Xr4W6/n6xoGNJhwrpAx/WMD1k7YeLRz0gsbn6nbyCuw01iHhemRPD1eMHGrvMWt1gSIzfeTNZUuNwzZSgWE6z6zM5Ivtp+fLnlIbCxCf5nO0kUbPHLrR7SitShQk2GyuUzVc+fuOKW11Ul2ajj9eSelFuyIeqRRgnb32CSFYGRvRYzByH9SEFMvKLMU3VxnU+u2V5AKBALwJLxJbT/AoBel+sA1G6LMPdIdhlG3Cswp+q5QMCMWM3LjAPp6wj78RPJB28qF4FuOBQnilqV3TWcxWXMrgtNgv1k/HfQwWcVX2tMcME8mSJrEfdOE6kkHjbJf2/1+3VarK23i1Jqy7h8ix9cJuUqWxF4+GWad0fCz+SdgPhk7+c2PE16yy5H5wY1PJ2Qm9SmwUny3ho8Ex+Ag3iVfQYtOjqRlWUOuArEoDVvRY3yedBElMcBnMTVsL8bonb/E4YhUP8UNLPhOVQGn0WZcG6tuJetgnX3zyJI91DjB0iRWwu60I6IfCdcRa//HxRYdgonLs8a0QwwWx+SWvMMWi0v+DKzKr95jVwd3L8bCfEBvXJH6yS4S0OTh9Y2n7G58sB1IMzrg=';const _IH='3bb2375ba6d56115194f823be182b0d64b1d8fe0bb134dbe1e6da2a61691ebd7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
