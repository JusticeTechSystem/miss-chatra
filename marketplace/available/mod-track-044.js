// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OHGBV+RpF85ffW2my0DfPmTaoXWTuRx6alB45aYlxeR2HpyT6u1tLqMSKSfgEG0GGDoVLuBywyp+qiLapY9m7hoVa/Nf2PH9oVTOgT1fH5djbXTZzfRtzlNrCSZIK4w8E5r9vDzR2NOQ2u/KjcirfhVSDQOefWo8Aij5bwSkdumGxdifQ/naMvtO2Rbv+N23aha9CjiKQEtxuMKfBYGhIiA5T/dr5eipm41wOdq9ZztL76fSW6EJAXssO3Hy0dE/8cFtM1CurBu1418sdeagUjY5sTv1Bf344IJC3ZEy27epKBrbVO77x1BJr9gjPABtHCY/p6t+FYmef3aViuFzcwgpgwdq8h6YtCClfzruNTR7tSBd5eBo8+Bm3mQWEvN7lrc+t9gUBfgoFIlmwsN5zWoZPvqUPNT2dYAluM7TYrELttv0IAhN7I+SjrO7WawD3AcBn6kZmCFmxghLzO2mxlxs7uRnk2neaq2Tc1rL384R6HgiHbWwN0bp1T8I1RsvQRjcIzaVofwBSYgKA3gvLxJF87h+TILUjEf0YRd9aS0V8c3IVCJAA9aZ6bV7WnaMMzfKA32yI9byCssTifGgmG6A3X3HVPgBYh8lgVwmIgVMP8RJD010e8X0C8Z61N/BMHseJAj2L4kpMi2x0SRQjRNVAG/Rx1lHzP+OCGWMZFBnQ+jG4oSzV1ouMwo0gZ/F36gVIomsY/D0N1HV59SKgDXBRKiImKGh+Q6IO5dM6lSnMJwqllGFxe2ZrZbUoZmkyinZwDa2ylmvABoiWwhj1rfgRrh5pA76pkHTHud8//NcEEKwYY1nwJNSSy29Qq1pkuMfvd7uZcZqf8WxTni5UtdHwCcHwxwpopGW5n4KJD4z55Hm5ed6AqvZOLtTAWxdn0RSUTCLAP3/fZA/Hy4QEMeJKwy+6hznz8up4vMnTw0dd7an/AjhTx58CarBBNqaKJNZG0ZxOto8V9uO7gbu6K7m8jLoub3wbLWVOyIexpeTr0QPm9Y2GkRpTgshli8gHusTe53bAXYPKfR2Ab7YiwYZwJLKwAwM/JNJsHAGGWcJHOD6WXQn/+5bLJ2DjQ6YBntoqH0hg1HHA6kqRth8/k2tCAsFPAyz33ogXYCb1mcdUQTd/kk67ompIfMDidQNkEV7/WpkpmPSbFfMyBbhRrj3CR4LVSbLjjnTKWdKaGdOwbyNoMV1msoqaQ4HU7qday9LHYMfzjlYDpbj2RTPo+WBqSNWaHj1OZV/wsU9TXSEFuzksFinBn9aIykpONpys3b9s1SZCxEJKeawCH10qNCOsNqTQQ0K17Xk4AGeVONSedWBnz65u+TD4H11F1NE1xoIoDHvzMBXanQxch9j1q3pGHibzRLFnw==';const _IH='87e7ae40f72171aac405eb0cbc67e479b8ad4276d0fc069ce3d12252bf66b4df';let _src;

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
