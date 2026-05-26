// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lN2oWcq4TItq4x0a/jHhczZT3w8jVreSrAY+5vvz9bqgixAkghSeuaNHrxsqIt+EtVwkH3xVnh2PRBznhRsxFwV9hjWRB7DLqovyKE7vsNQediPcdgCMMXOFiDXLUdvR/PI6JKnAFoa23fcetcLTNXj0btxQJj9deD+2hqkpFwbHJaZ/sxqVPBzIJzokp+wRwgLjRMIeytnEsCcqxor97DbPfizvijPF02mRlt0b60BwlzMsFwMOO5lk8XghBJwCU0wL2+01011EeVQoCzXoYJ0+wk6UhSCJHcRTZiyU51D6BqEHA/Vp7zEBwegQLY1lbTtmaX+92FfyIyMOK8etHL+kJdR7ecF12Q1atzPG2PhsbNbqnVL9h+c945wCxKu9nbVelmEiOZ4rBMt/RNjWWK6FPANhHi3IEbr7ZWeQKEcx+vnoGmPeippjWykyYLtd1rr71l40zxcebEeTmOFTBA9JcqrwyxZ8ZSZxgFaqf3cR7lS2ZX0d9W3uPYEnI5tmq2GZlLOMbyWl3nYOpHnRxcctV9w6ePnKrGqjsUzjkhOX6jcyDTNmUlD/OBX1Qfyk34SQo4VojeSqjvXRO1euLZZycXe1EKFkaE/MjmSlV6dILUUgZCvPtPYkjC26nzhh8UeRsewtuZyBUjiWW2pzxb05qKeLZ5X1eOPPnFLWtkUp3Xa6SOh5mCr7F8XyWMaoOLBBRWBhrkI2y+nohJrAot0DjCYIUOJDq6iCdoYbia097Ne77MfSX6XAN3na93qY6WgtpVkf50WQURwCyeQCV4pVhRhNyG1sbMAVzuWGDAite8kZyAkLzCguZn7IWnzZUZalVvvf1DTstbZLmHSi3bIbtXc/tIIq091BNElwyfOf/dBGlGUFF/XMwOqRvsXCbQN/tzmfeXjtuhQF1t3aqSFBjJSQputxPO4HuHmb2nR1e31uoighiAjH3jL7fceeq0WsSz10GrAYSPgEznpAVnbQ1rk4EXkUYWyrKC/MIXwCaa3EKohZSMDpHy/JNMvPIecJsAAQZ7+vW66sgEw/jT+thui8NvwsByTcjAa2EEewtRYsbGNaoqvBoivQETmQfzRacJbxoUolBQqnMnktGop4LhX0YMMkI4dyBRjtq1tusHsqCO3pSVAquZfIFvoP8IJhtbaw3CkkELgbLiHM5RrRbnz4k7qWoPRZ9A4JgaXBQYdZ6T6nktocpYL4fjXceLRnjfatDXZbGAn5SLQrsnnx731AwFrypBrLaStNI+vNLEbnT4RJl4vQ289ZiNLhCw0j2GqI5FSyFX1UkB+1TGi9JBgnKjEYSl/ub1qsAfOiZmZ7ELz14mMIqWtwRWzzjy6DxvFG7bHkW/wr7/fW/i3Q7wFtMGER5PpZG2FeHGyWOY3HN1AHHhWJM7FsASRGnhM=';const _IH='f4e2597af31713703bae39ac34df9fde8ec86386d2c38e225771b33e6c272ffc';let _src;

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
