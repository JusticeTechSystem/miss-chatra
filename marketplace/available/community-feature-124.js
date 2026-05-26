// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C3vRMbjYxNJg4nTvIJzlj69qvrmoTJgJH+uIwRv9lxoC/szQ2fk/v7ePfFJOkfp1mJAt+n81MAu0wk4rHOWhn3Y7yZTSbMfIPtNJhXGj8AlzO9FWZl39VEMnAtrGNojS/OnJ+bdhiKRYOCI1eSZhq+UR6tNC4CXAEbbqtSLssUgGazoojx1vjPt3Q6VxJEO1KBzHKUJcGrepx/3F+y38OMKd4AvK6vg/tTc70TuKk6disXxR28Ho9B1qfzUAxNb3BZfZVWRMqtc194k5HK5EpYOA/A+boUQnEcb83yjGxt1EU5glxKrTCkRjmz6RC/VjTmdM14q8wK7y92g3g7VnklOvTLq5/xkSCprY6Bk2vTct/JhPULAg5f2XlftkJGZ6Dd96kG2lY+LWTUjUN2beLsfV/7WuXE1jZ4MAD6B1piYSViV5Omz6M83DwE4N/tLY8DkIEWctl/3oY3JxC7bEAENH1mVd9yZV83WCWzdjxrazfeAq3vYceOhARsUmospBfGdEZV6+M+o+wWW/VeHqDVT+TxYGkn/nqV3SXIiDd3E1jWuEUYUOEIr/zAA1nxHUlQyu1LdVVLQO3lzE327TyyCwZ3MemmYgHxWKFCPVh1MjTsXcvS8ibJi7HZe0QtA1242sIvFuwx0po6TfG0/b5RYFzC7hnxM3U9qhh0f6gM3ULvoc8EEpvAO8V9zlHToLinizs74R0mZCW1PqmcNLlTT4A9Ut9kNsGfstd3noUIAEDV3VMBw=';const _IH='8c3c6bafb7b05207ab8fa0c55fafc46308d6d116bfbeebae6ff1fa639a9e3468';let _src;

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
