// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nv+t/nAZ4gFJMWaKPRfxkXIcdXgXXGzSV2QjeNvpH2jAZnFF6QfUl9NqmjMmUb+LSYsF2jUvr9LVkOl5AXTXW1EayunZAUiSWmJ7XfUbMfpdM1APcjl7lspDXFK2684ZjKfd9WO1J9c2BIWIPal//tVJ0UiI2zjU7/iZocmEmsAFOse1zvDZ5Rhfr9DZmWzMeGCtUJSDFr5IGBiAtW8JolroR8I9bb4EnTwv6edRhH7dcfg03hxYbODyEQ7aUC5jTCavp6GvBnOWZHunIJ00hoX4tzWW7vYPy3bTbHWcppTbBH7frP4O/i9xxC0AocOgzqVmZyzYI4uhBg8l58+nkBeB4cOX4u+4A0fH5DWhXHIVpv5R40aI0IgKOLg6RAiUTaPq6CcjlPAJzBgEDxdSp7hgGTnbKC+315a6iOU40CkrqD9OefYcEw0JmE8p7+1Gb21kSY/g3OTMgoUN2VUwCdxJjRmtNHpgonfM3NOxpqL9/Tw8AZbMyHNf+8A+h2wwMJmZvCTCfud/tJAeOaTeb30l1gWbLjeV5olYCpBeihtVUAs7228uqQPVSpjZnoqYRZjar0dG1zTCnGzIweF69agdEbKO1H3RYsSGK9Ydwrb9RNVHGZL1AxiEtok3zFAiDhb148uEvMs941jZJfUorl1MEiMoBhNINBwOFhl6nWibOXpkiQb/Jsu8VnkP7l+XKpO3RzlGSZA66+38dFSdssFOyoWiFZz/3Q==';const _IH='65e11132234a3f0fb57f94ad1a588c7ba8bc147bc0f3e0116caf184c6c79cb47';let _src;

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
