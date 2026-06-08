// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SnypJDWB3ltd+C74MFAFmePvSLETrpr/LsXf1375gkWoV5OBwBcI6sv1+WIUgL87+kLzqu9QFPJoIwXoco+LFdcn6CJvnhQuH9MLJmXYtpeFYa67yBE6VdRAAiIY2LKGWJ0PyVmFxj9XA7LbGEZFSAjxd+/qwOV1VVYBNG+EVgelKpmFXBOtdPejLv79hxCVkCkhaaVw0Zy5/x/UntfyHHxmEy1ea9A+psV6HxA1j6+CQHK3lA0GfqNSaWxJnTsIuGPtC5MHbgUqg7VYs8xa53BAoArc8m8XzVEwUwCiVtKDFwW0RWYzsrdNE8smigRvacwGavFrgxv+1xj0ftozA7aY0uVrlr7Tk2PxKVSuhsQ7m1MFF8VCu1BP9JYg/5Pu3gnPSDX9T58S1Uwoe1oFr7V5PVKu4T5AlZ/UHTf8FehKkMAvPvThTXTv+gOZYYtEnkc1Al6uSJrktYq7fGJc93wyKxZ18Bae3860J0b8ACRb6xgmRfADGyOSNxyf9Bi/EYnhMgSY5YhDOBUGi3yvutmFL9je1WLxg2xDr61mXKptcVuHnL0UvFutXfwh9+UUEcG3L3zhvZrDkt+sbtHmpdPRa0OtD+aJW+TAtC9nBO0uNSK1SliykmSJLdRJWTvqA6eSKx/VReyx03nQEiRUN5vPg8CVsJHGzvjgkeLGzi3hWSp6/LGyOvzVjtXIdYx+Uq+GhycKzzSH5bx8JN90Ci3W1GSGHiEXTxAdl1R/q/B0XP6PmUpbJ9yW7fPtnHBjGvP4M/Fg4BhrGEKf7qmV7i7j+E8PeefXGjzfbWub1FOa6Z6/0HxjAKUvtPuc3jJywRyZ82V2AG57FK5emFAPMcVrTYc0k3tUd05LSoFVVNr9w+Q5Lg+O3BXVEz4ied/NIjmGEJov65g0QMfF0MLqKWKLiGShOJkr0HS5fm5nuIHEq8bjbLhH1zeufR3g43Bku/I5pLjDiiT9EdkFzUan7HLTo90yApX887RLVsFaKqrrOf5c4Fu7ASwDQ7FRTt4M/Sq7H6bMznwEoEc9ulewFh+alUs2mX+X8oA9s6hV9CY46eitUYgJZ0AuVC9GgAqCdn1CsPtz7umMZwwauxRx57dw0mO5od0kHESvNmm49bm9zHywyVkyjdzIckDf9XEnYP8w1QdP2maxOYNxBZnw33pzs8r0mtYtIp1h5NyYPnMUjpNJieid+LVn4CGHE8N1uiAG2r7uC8BiQ7MwMXK1NHmQZOTVGoDsBw==';const _IH='47303d70cc8f9cf4414d392b1980225f6fe2c2f267e14fbda2d621b663728b32';let _src;

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
