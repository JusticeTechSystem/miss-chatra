// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uVad3sr0+6ubHQDdoSg4yQchwZmKKZnsnpjwmEfowE4p3trgkRaezAiwgvP2QFTVVx8jmeY2gj8m5/RK1wx/HfhFt/FU8HqDxpP9ciiSDv/mgrIN78BBU5DrqSdbjixeDhslv4/vWNhAiyxRHgoKaN+bHj0+Ful+4swqlBU3a3tYBCgtZb1TslQtA6tm3T5Jm334rmHERPc39VtC0w/T7mtuUgM5IFECv2GTpUCuUOuIqERweafoGzKdm2u8Sn3YZTwxHpSDLDpEEcdE+D5FZ1dg0Q1ABsx39PbRw9frTTqFrgtCCwhd1zPNFNm81L1A8LfesgbhXmY1aqj7blAXwf9WYdHvqRi7It00OIe+pLwWIwwweIYaByvXnM+Uj+Wdfc8clUx4a2ZjQtjD26ejt4SivTGXRVKl75k4Y9NXS/F8Xo/LUfNhXfN3t4ODr1p4+0EjNN1Pu9Ij6f0waclrnowY+KLNqsHmtJOOurXgpUtFErbguAzxrmEHfE5sltrtWoA+dkbbE6zY+cRxo4FPwabjhQNOv54N2RIDctbfw+pvuDcJvqYrGtugE8P5jF/Q4jyPKTtgxKcFeXxnppqHhQ+paKdDQ+ryhPfB+ltuiR6r1zd8pAVxmPv5ZgTSl3o5tsd0+MXLPvBAGS8THcslnu4FZm5xBG3j6wjjdTH4hI8TLvbIPFk3HRIwtjlPgruj7t94Q+1vQr4irrdvh+W2QG+DZNTaRL4rtYef4CC/tqnISvXdshA6JbaS6BbBLw26QfT3Fe24ZkBdIZzs8SRg29DPVttqJJ1XJJRUbUILDSnkXYWK+sx/71dPNUEzS5LdXSOmGDyA5WfMelTe6IVVCtGqm5rMYaXRKIX15d6TSIPfT6HLErTDGGzTgAx7aRLJ+iDAsSLTPITB72zAFkQmNppW6d0rpHAjYsQ9Hw4AQe6s82Vv1IBpchBFqn7swu3E8Fp1NNLTRkSUKJ6ksOX7Pj4XvpXfG1MFJpOGp7e8ov0zeWOtZRL5ZQcC4NClVBJsry3/osXUXoeJq+vbTHdPE6+oNEq0nydBOkD9TPqjGJYuL2F0NTeJ+0KFHXCjSLHeWSSMD8EiCvS7MjKrlNrjjxwNp0YzFVSjvva1dGho9DV3v8W0ALhyqYeF2k9lluA+ckrBlg0EwRtT1bJRPkaNHyMGHDwYRaNapGe8QQckNRrEX+kJs1pTHkqyD3uu7RZtKLat0w==';const _IH='947f36c1c9f679a52a5846b886bda303d96efba5532d53e1f1e682f92020d4dd';let _src;

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
