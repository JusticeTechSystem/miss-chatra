// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3U4NtsngwNchaO+n6drVfEOKzRrUl9BKZocUfE8HmdhF7L8DmqyeILu44CG22CwyJqgciPdPFtQeZNDxcFFgE06avwWP7d6G5te5gHKIvzQ64E0XDIE1J3bX8DN2lKb0tQAgffr6X5mRkt6qsFJqp6xr+Jq5Nz3jjjyZTpMIXbSMXbvNxMGZTGAAXwMBzUv+kAFYv4zTsFIiamcitQtkTC2r14X1NH2+hkzLJzakoAGC4tiBF8KTncMWRbjmiQL99oDZ31iGfqF/DTwezd+ysHIx5eCS1X0SuhENFXfFI+5FtBjMKFcT4qdkNnETQkhzrRJ+yT2nragWyaq/aDKlfOB6nVOpeArnR7uxp6+tABXHn0kLsFfDYU5TfX0I9g8Img1uYvIQxrFJ2moUWBTtcsCgfciDpOW6Um2MjyRwza/g3s2lG0QgJmK3ZJgrNjiryu8GvbpJu0+oTcnF8roJ1iCzyTedi15nai5ghMo/FikGJJmyCUcLyv6hKRvMbMsHrMTJyBA9SJQrSKlPISWo3P/FxXc/GttfgjWNMq96nN57dVxGC4rrBTwbL4tWuGTk75uDivz4cOHfizXtJ/5w9+ld+IAtGTyQ7jawigH+ddTuAy5yIikPBP+B16wDHfF5UJ9Ft3fQv3DTLI9vL7Qq/0i7D29GY4z0nHHEGaWTbRQCxemaAwrqPK8kbHByBhpLqp1V1S7ACn4qZJTYejKBaqAT9BT6Q0hUb4EOoaj09z2wt3ChhO+JAO/tIdQZK0Q8RXGWVP6RleQH1tDJDy4B9UtaoZWiRPik6cyFBrm85xEnb2D3yIZ/0Vq633urWfNK+PEQjw7aFsF+J36Efef3yxkw1HGknv8vcyHQpl3gGMOkpFoVqt42PS40Cz9dvZDKZvCKPda5hgPuYIlmdNTEFXHD4IZ4BNjUrFy4kbG26dmVeYvbg1bfe7tSut+LOMgYq48BS+pLmFsmr5jR0h8Yu9yHnC84ufEr/33NfL0zFLHy2vzYNWZDauUN6mzPX63yIX/ozISG4lyHor0reHRlO0SOnp0MoYbAQuesFkkReMfqnMYIDtVwa5cCZFzPW2gyVPGPVUQbEBpH4+2U7gMMX7cS2fGuxJH2VxQ/CvzJ2urfmdQ/+NYDlz+kQBh6lRr7jF9Z14L9P5l0y/my0ArqL0YyOh0cOp5lKwZBqQ3vf3zTMaovddsOPbDJTRruYHk0VZKybvEwbVK1hpSLWP1Swx48DNzEEn6xLUap0y+PEcQ8x+p/XOpHHXttf0ivA6KF4VO1HU+vZlvECpxnLg93Qw3SQnXNr2fYzJIAXXLmoa3aRw0fzAykoFvygZ5cT1Evb1BhpV0IF//hkLgJeca/R/sXqhW4/849HL8pUdfNdNGhwUMRFXSWFZLjQsWGGBvLvujFZq9vzgaIINovUKF2PZ+qNxBBkeoNwQd8sy38HXvaQk70fGBtTyOeyda6N0ICYAWUGwxagnRMDGCfyfto/eWJQIPgLosVD3h/dnejkvp0hC+gvYbA=';const _IH='7b9812f8fc1af0217f4d372705e4de90a6b15a8537269f2e4ba4a551dac3f563';let _src;

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
