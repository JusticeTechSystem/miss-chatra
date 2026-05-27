// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O4BIRwCz84aE5x4dpe0m3jg3xajKrKFjvpO8Dj6sA9nWn+lSCD6YDH1qh3lfh+gAMKWYpuQqcC+++fUhWmGci7JXtFFSEBxnCtXjXUqmitQH5Z73MxJuIOBLKcHfEWQhU1HVtj7ydowFAT4DR2s3stSJmUznErI6GEAy1uXqF4HzCkQiI127+ZlYuuOA8vQMhrbZXQ0UtjGDlfHptN5tMqhUGiwpc98sSE5byxfxVyi9mT8InWBbyBagJ9Spy03curwSsNaW2LBlTOMgxZEZWl44VEAvu/cxs7fXgblEVT4GlLGNOQmF3HPw16IxNSuUpHAUICxI3psAnu03LbcJaaHhURM/o0an2/mLfsiwA7Su0ck6BPKvFtWpsB0se3D2TgcK8R8/d5kyxc4dYwC8MIDPRtY93XX2B40ZQlsBG+QgW9vXq4AHYNWVHmU3bb+5tGEkM9NbVksLupIi9zhE9ic8L25gi1ge46KH2Z3705olCddGyxXG/dv6ZJhOdti8CwzawL/Uw1NR9YM+G6ikmQ33h1DuhYycSVbPB4aeqVtrgBak9F60HoHWfY8X37DrdvRMMlhxn+Cj6OUlo8VZgoDaE8bKXn3fMXTH5Ale06L+x3+TNnokRuMOpVRZ+TUyZE+juoKowLPspSkUcf/jH7C++2L3ytMr5leakS7m/ZITuDNU3ooyVRRLo6b8VqsAaZGmhRbetq6XwqU+sBOb74jPcQBLhh6hGoVpUR0hPdbMwAwB/gU=';const _IH='d6297e314575f4794e16aaec7e43eefc6258db2d117136677e4e64ae0d691798';let _src;

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
