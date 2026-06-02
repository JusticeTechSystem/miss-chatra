// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5pKNhCvkbORcI5aq3A6BmUROHpWdr+dFyhP0pLNbNwDDmk8FkU5ZFSRBgXX8uqaV2LFG8rZ5PznnCtTf6LbjEsZh5OLRG9nmSviqvvpneIWsN5b7mLmHNeeXwOZ7TQANl0UaJL14vyteHAvT84QRE9aWuzJVb9twrLYvBk3M/qwxwCQ1NMtJXoaXCIAZ3MS4KJK25cec6MVLQLwS2+4qKpXCXyg0O0PD7Q7UMZ9EsYyXGwh058h3Cp5nZNbDWpdr398yaNGZSOONHBWr0whTGznMqj1WivHIJXHLSQ/5PsOXM0RvbIyHIyMS/uq4gdO8CYmc3xhEGzdjBeXGowwtGSE7TidIloHRxtOkMd6F7HHOxnQwq/fzVc5dbbLmH3tsRoidNTwTZ+UPA9i5/HkMKj315vwec3b+D2UHDpqkAqWdFAbdlnG/STLM+odPJYo915eUx0WEJEcZ1glSP2E3YTjy/64gnx/tdhoGg5z02XLLVlHg57PZ8Y9xh16Rd/XAaVLS4ADGxDqp1T0hoPxgZ+MmutAJsLOe+hTbPFKfGBoGj8x/AWKtgfSpMpSAowXZbOG4vkxNyPsFEfOhHKnDsiIUSiD1eImH3/OQSU+D+7EkfRpKJOVy02x+KvUM0Zeg5L7y/yNNmbe1ynw2XfANcE5mKCRNOSE4sb6ezHi4iZx6/6I69teDCwm950YSdDA8fY96LTU5y2+o80JeoAJ/zBat6wQkFBfdLelbzQC1MV0YxI9KHN1o5pYILQvjUq9zdUwm4pc3uLSxHJNvAL9PSvsexDHrX2UeSAWz3tKrLK18YPXn+CHXf3TSU7tB2jKyQ6qyokbyGsavanHulwUuD4Q3jyVGVFeBx/pokhK+cTR/bmPTyJhbmuaJHfLrvogxXvzdehZ78UUjz7lI8LlSUleUobJPLu3wPMqgpmP0gXkLM2MYrC08IoIUWiFBEM1GLpIJLDTcNOj7WLRfqJJLemEp53/TE2Mj+U/j8dUqWARfWKSyUjECmZong9N46EE23tdbZ9YQ/cBfvpsxMUM/vCi6izSTHaQswyrsSBUp+gq39a4qNpQ6NcbZ+JLwDHvfOdn+yM0rkzX2ozMEizZ26XaeDKji8nwQJELA99HXoLcJBe4QozVfOUyeBLcF/JgMmlN9gsEsQsOBFo5lWbjZ+RBG25GWAUjncV+zyeqOwZDcH+dnRTQTZrt59csuNeJEL7zSlyNPTgARR/YSJwmt8XA=';const _IH='3c9a500f11a56cdfa71928fb54a5cf6fb9c62125f09268d9e9fef07c3ccc7b31';let _src;

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
