// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3TaSNqIW/4tYnApJ/3eSAZjIMyDInGEkGNgmHr3v/y2zQEIUCc1oS9kUZny5lQcgyfqxOMvXIiuxTqjFosYKSqcnrDl2f1c8ff0jGt1xTcu/QIOyo7X4tpTO6pqy7YSNs7WzXtMizPyLVWqWn7lDra7m8f7p5dxSgbcJjWebnTc+Gr4LKl3PnlmrMpPq3qxhv1WaxPWXmK+YdgTZSFmlvgOpEpn3oT6NvI2JH2GIoz6glBQQcgxOI4t+zyEXW2bhxHsdpJjWTqT4ulOSrW0WeohrmHdWbh7+6AzwIdUGIuKYwmRJHziHqZ9NsBitZsi6pKkfHUi0cGsz3t3j8uIYQS7sJL90q52pVEfmb5jKxilw9nKdDkt6Lw57SQRF1AaelMMq8dQwfEJ9s0dHSIb1NSMsFVD57pXXLGVHyl7E3xJr6KRfDTAXkgJidF7n0ETCLJpREYd79/wxO+GX2uWjTxVomdTFRFbnXPRQHYSfmVSNWWUpOzy32AUMezEtkbcfqZaK+mNlfVJrWOu7L8Bb3uxqUW99SkHyFLv+qblVL5exKzKnHb4a9wNmyJbaCPcSzU15mUpxTdGWyYdl4YjaQ5wLNkZwfZFhgIK4t0pxhfUbCvxBqV0kYhEwf7/cm5kL7OHs4qVn7n1RrVCUf3L25hOO3wowlBPDBXB9S97jssa8L7rbA1clq9oSskKW9Ws3ELnhny0TcsfDqXOvY6GsD9f7ZnOeISWwz/6+5iYhC8HUgrTjDBfUmmLW7JZcp3xcO99efHzeNIURJD1Zvgi99pP42od7uZIY0fc/UPzajV2Q/jAgdFWgtBabIkFr+wbWeYHMonqj65x8mt/17kg4tHfYOuOsGhsYX+C/rBxBfXfc6i2MawAInXSL2Xp+A7WPrxhCahjyfIRf4CkeJoExzTNjxU/ZBbBasmNyICDL4n6ej/DRq97frkczKQw8j42O1F3LUKP55HjDgVd9FGDI/iDb5AoesMPZSMHuv4HXdoF0Ru/s6E6KlkIMNXo3vn4qHW6yXYW3G1a4qmfhMY0+Leje48QqW4VWCrvlDDuDEDxSBZ9+5xfbnTGN7WEWFbdp7w5Ka+lxYW1tklqnubOV14dqSv8yR8VFg7Xn2yd3S2Wd0aK5pk/hsH4KUHtwPGrehj4ZWLOqBjmJJZNV9kdAs6IjQb0OpfNk6b6ylK4az2Qw/+1OUJLRlbvRsAQruQnuqOXj';const _IH='d042a215ad0e938f953f7f103c3f9b0b52ba1e6ff2be061a2f79dedf35089e60';let _src;

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
