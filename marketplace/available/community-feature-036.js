// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CKvKQZBcofuCC1b7xCSNQABuw5caf2NthxWz6MwiJCGpGcGnUaAjJ4kdCCoV8yeVV3EAAfI9AaeGra4FJd587vQ6GtaCWeH+gMZVP1X7lQNxnR4CrB18h7RZ6uxYQX2XrCjjgdVwHPCRAzkzj2/7D+2K6MaQIRbsIO5AW9JPMOu25h/tG5M6ndsgi3RWDDzKYE4geVdhSBiJcepySFrDB6SAse0B4eUBxL4vFLwF/K8GVtC6gazE61HLnB5/GNsK7Tw7+pO7Wh3qqsbiVCRvZtjZ735MaXN14VSrDYl9zRmJAjRg7a06Tq3SXNFO24Sd0/uSK1yD/sdcokV0qta0KdaqUtSeuQ2qR9ZZvLc825bWM1xh0IgPw5OSVuzpVh1aQjRUhIxcSXGEIcnsFew6qN/5m2mtdazyi1qnoJmFkeRtoa9UmD3LjoCiBcqwfx4L71LxvIg9RBxQgHbIOzdrdKV0k6eix2xfXzqFs4IoVsx91BSQ2BtvBwlGj28WfQC9LUXCr9+dqOUM0JUgdl8lcsWKUO1oOHfQYqGuzxgsu5+I7KNqJmkYzerkrwnWOYpgn57VII/QrBaQLqo2TqQLt5l7YItLGaR72qfHobtPu3DagyEgA4r/Ek578QI2S4NpOBkkkRbAGbsbYO5NtClBw6hgNmim6uZ8IK5bJ5l0k7HqAvA6AhsOusfZOBT5Rn6NuxO4wIFdg3Dc9RrTNchs6JkaZyw=';const _IH='4946074565ad8be9ab2caa4b71d2cd7add5d8327c424bfe048b931aca16511db';let _src;

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
