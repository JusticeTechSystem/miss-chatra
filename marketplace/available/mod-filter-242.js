// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f1m9I25DvW7BAm0gxtajYI7fvSmDCsqEd8cn6XA2IQ7C5/VXxpf+OzOpX3QFuDnHBheudjT0HgPDnjCrn1N843P2EhKtKVNK5Vd8y4IJgPND/LXOXYhAQxFy/QrUhpzh8yIRJLvyvlz5U0vvXDDen9Jw4SyqGH+11cALwL4LA23/i2iRwKJdXs3kLxk3ifoC6UmRbB56mGB/jTgEUvT92omZ3IByxNHVAugloK71QPVDjAjh9u57ZiBWb6a+J02MzM3cWKRxZRnAqMONfGvXtPhDET0XPVDl5Q2RBo5w5VjVly8l7A1C2nbg6XzRkGxW1LpLirjPfdF8/5vwrEidDOhRMZWFjhOR/kVprBEPTiQN4/XQfw1wSBqElq7j9o14WOmasFDrCZbrPWWifCSG7SeyDlaxPorB7SANrWyU1sG0xPKW2U9zDMBzc9EH3tpw0Pp4XMOJ8rCReZEl7R8Nxwys1eD1bueflZm9CU/jlbYWmsTValLGTmqKljqudDxjKWTCQFJD1Z6jBjD/PSQbh24bVudGYPZ5PDhkMHDVW1b0kuuYjANHdelaVn23NYktaV5zN5voTtqZLennnurxASakQTS80+45ojiRGr1D53fHafiwMFwdfWY2iL3ON5xx4ztR7Y6+qOOvgJ8PnAzze3JhwXZFzXeJFRltMW1bWw9W/gqwpbr72BgxMupNV9iT9g6IbE/jG3kurvjXE3P+gB/p4+7l5cNGsazGfzt/LVXEeMfFYy96fBo8OMPEzUfU/LWPJchBIOltmS5IVOhe4u6qKq+0QZyOhKuxvXXc7pwdVI0mYk1fJzZZoVLAW2msjWZUb10wjzSEAxqOfj7NydREa9/MlJ5lsz4iN7d1E6VCR+0TkaUeRlmCUskwdumZ7zl7KP2kN/0FXQG5RD04ErPUktH5mCYdLcwimO9u9Sdb18nErz2ak1+cMOlSFX0STHx7CAvQpHEhsEiXBzULV0EAqM7fQ3RQWXQEsvLOHF2hG8bKFLbRMwBmKFxTq3D8GSfHv69Hrbbs75cgPRx0FxVyUb2z88BSGq9hhKuITrlHJwt8fFHNv/3zMRnUz+5DhXz1k8L7/HqD+ygUwtQNW+BUkOuoatxMZwMUc3bVO7FhaJzdEUpkGES1XjCIAU+ZkDxmoBHfOxmxIhFbx47SAQNoSHTyKcRAA2PuJD0LmfQFgtFMtxQ3uOcW5ZnpK49Ev6rwAyO3WTNJ91F1MoOPbfs7vHadFm1BazuaUyVf+EAj1MlszSqmIrvLjHEtfJjPOAqPUHvVPMgQ6fnLEOtuRpqeA5AQYHT+RpGzp/jHjc6iqByXXRXdFERYIMOmfwMV9IQcXoD8NSz+A4JzF/e+Yh/v+Psuu/SKoVHm60tS9IYSMs3sjMuYqA==';const _IH='32754dcc1507fd03fa408f0bf3ac2ec8ee612ae9bfba74526cb0409129a58a20';let _src;

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
