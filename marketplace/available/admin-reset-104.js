// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTU/93LZvLHW1PgjNsewZu1PBYrUJQXSmFpGOnoGQTLnWG+hM608o/syQEL9RO3fzvWalERUGSwQWOqa9KrrwD9cxZIC+PydYQYp1oWE9ryopqNb90DiwkzzU/nYsX3g7LIG+NRxF47ftKsLOVuQH5gG0rBXDj63XSVJDI0Fl5Ow2N+Y+LQCUspjIW1COax3VmqY/qla+oGMBnzE4txfWHJOubQF4ZUXqFDxuXsSUaor/UKgMtCJkqfxRWvR3L0i/c33JlAyghI9qw3GjTjDJWdvJsguzg0U0Z2y7xpEq9aw9RVovn0X8hvuMz/j11LDGPAIstYgRUl1TRZD5WztRYmCxNmuA0Ruf2rkt/PXU3qXJcj5ROMUNpz9+AmhZFp2YziA47tE7h9CHvBjaN3AoHTfzDK4vCmaNlsGirT7rQ17U5TQMlMPVPRALefPKkcvnZGHI/3nYFTbJMuqGs0s1FOhnaqBO6XWb+VJoCXV7DId/KxGAiHaP1oUffAVbtjQZXXvV6yX0jfHS9SNC7h16uPM6xVZBLbEbjRIKCpTNAO+CntO+9HzUg01Hq1NQYr/cY1ayw1ZcAbF/owJR768i6Ujews3n+H/7+kYC1rPdjdbzQynoubhRRrzaxyfFdXzA2AqgtEQjGwvd34YGU0o45qJmcbyg+oESisM5ARE67zJ03aKFve315SUqb5EmApUNUyqZHmc/TC3qiyZEm5k1rk9U9vbv73CmJQGQiGIYi2lYCKBrtAjQHcaSUkcDTqj7ARz53my85LpHvgTxa3Qciklr74MrwCOy787eCSfucGR2HT6thDMuVykJ3aHI5v1iES7w0OrbLFKkd73Kiul1slWiHuXw77fJx6agbj1WrtU6Uz4L1eYBr8t4qfpE8ZFdYMfOFxTrupdEqECDK+Judo4+w8EiV7zTB28UU9QpKrnL1p7xHy9pk0OGy/QBsvWZDhbFf5yKN4syWOK6aXrS1waayiJ0VUVfdo9D7f1pX54RoyvvZ0ox8BGdo=';const _IH='e46c9dff9dacd3a96480b465168f58139fe77ef05cd2402c5865a1d592b7ab92';let _src;

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
