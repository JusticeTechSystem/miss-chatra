// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iM4ZTV61NbsGEYst46uKjMueNn8q6TsahCha6LawvrrKxclMDXGk8glk8d8ieUP0X4V7ysw6ggN2AD+0Qazhf5DZ2k8zqE4/t7WBmGMA7t6JhOtcFUywjs6hN0s5qLnUTb5d8OLji5/sJh5dmmE92BDokbvUHk69bf/xDjHn52JZ+DtN5F3QLM67rck4mrbopQeyFPdsEumMaU5/ePaBG1mMyrT2LWmXPcS1QjoAUBRDqRXsca1pZ8+5GB1hqF7WH6myLQWn78kawg9PAdgczzsERFxTXc8dZYf3Orvb0Ov1wMNDDi2IcPyiTPOWDAxsVDkBB+bC/YX5jiftO7rtQweJhjU4tDP+fKOWpj0/gl4aGw1B/jHukOZT+kB+1vqKmGG5YfYUlCobmiNu7NTrWVqCEm6JfAY768BY9m+PdSeUmBMo3C90FIsHOTdlfjK+MpBuO2W8c2VpoGyf6Z69aEOEc5Hxl5brsy6mG48Kr5rJHTZcKZtDiAgbNdcfS3Fo6pU/IoyEQxmqmKjkFRwALdIlb0O5Oi8Zi/bKXOu4TDwbI6fLeI0JvpCmuh78/SBHZCRCGsOwW5E7t6Sk2yGi7HrBQefoskQkY1twIOH2jGCWCHbfkD1vBNi3dlhA/zPPre6dNnHfOKUeGzy46+mox99QJ0ntT4NKX168bSS51u6UNORasa/lc8IBUO8nJnpdwCKZOlX782C5zZweym1mEKcm8rc62H0dJ9I0+6aKOi9/8azNIj8x10Agu3S+aT1D6y1n4zUgNp2HdSdpXYpQdvmfrfqwxIWI8wrrox6Ujh4wM1NBULU1W9XvZM7HlElvuFKYkjBJdlZMNeBEwkthp2HaNZu8w88+CF2V4X4lU+0D3TiMpmdJs8ZXIIRDOJ9q6dAcajjXhJh8Z2OzwPiNdphv9NicZxF2kUpL+1SS+6J2y7LXEhzM+Nj54ecA1jaG2Cn6o7ssib9sK4HmxI1b6hRuN5xyAQjCiAsdj7cFVWaNa2QSm97pGhoUooczHQRexrP11/V8KXmYxbj+JP3lqaroCzCzKrQYo0JuQImbBfg4gQzsAhQjxcXpCU8ERbar1YMNqg6c+y6r0j6b92Pw7XCttQmmfkxZ8TJ9tVPeYVLY7oew1i1o9WhTqd4X+jtVIUMXnpnuueoCvXVRlyWYMuj7qZFdY3BXewSPakOlWpdf6ZLOg/M0r79o3XhQwve3kBwGnUUbfRkTTRQw5nh+lZXPwL3dInm2gpu7bPspqhlcdAe7frSbl/OsWoGe3CA1fxox+JVKdOvLF4hwfIpQOxG7+7+8OrJNS4xuwbj8iYVK6QGe6VlfLokUSLPzmcJseBCQUcTXXsWqnEcRScDVt/1qjWdijnvYywVsxA06I6AZxcnrw8AWLxMULdAd4MBAwosKeZvW35YAV+pMdvC2tqCq1bOZclNJkAy2sRjJIYsxQcapm8K5TZ5MjEZ7Hb4b2TCtcVWKShm9hjATB73+8Et2WLCvqopNLPNLYFj1nG110pL0WiV3lqERVw5u/JbFYS6qYJ3YEFH0fV68v6Z6AFIdFXba5yhu5KxqGIBh27FB6OC3eUgFHYpddCdGhHi5pIOzUW51Pj0ZssTFZOyvSyeqiH51nbo+/m98HHWqzwMibGVn6PKy6xfOU+Ey42x4pbCo4c3uEb65SbMmo01Az/DQa5R+T87Z1EEaW3OmXOI76pzLtL1a70II3ZOMoQVZOpbfObC24IhCJsZJovVlIvQq4dhrmkHPBaRqM6BVlRf8NZ/ENIGORc+dbgwGXqvmIHPNjjSZaDnBSQ==';const _IH='f0a971b902ee1dc831175360b244975a4484fcf471fbaf1c295878ba49ee0315';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
