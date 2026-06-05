// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='igKc6feTglv+pTa6+ICSS4Bc/z+w1x5PwFO6bdOslWp8JHwhzh0uh/Zv3/+Cf6dZXsS2EapQGE3BSNkNFfaHL7qgV1fwXxgHhtch+XL25fSG91zCIiMZzR18gOATEKyy1lm02md0PyaMphNTC7BVal6ihTwxVHImuR4cgxRjG0vcrBDY6oRnRXNHJgDyW4IApLcTnwaakcyIBkP91UHkfd81C87BZi5mzZciJsMTZo3ZQGUlHcIqTUKmxmsEdVIo0v1YSrLViY/TsLqAoD/acLSWZP+RG5RhphrgDofL7KcL9qpPBw5IOFdskJtLwVdl2HDFqDYo7EN8u63QKSTVyK5s3lzraUwKlGyWDmR/9kuo9/LE1bNdRSNoxCihlDmzud5TkJs/qOP/3cQyWtcjV7Ge+EQ50ry255eK5ZGW7rxz+VAfVLHq3AK+IsRmP6aVox3jm7ftndMyN8YQVdfhlNKwh2Xof6o2fW12dOrbS4xsrt2iYy1VFCunZy1IQ0fL6p0GH082bwok2DHuRcDOrl2ZEG/tkUDXIHhSG3vQn/EdhnE1cyW9kBkEbcb9l2qiUZB9S7rpC17TLBZXc67UgdJz0aOhAQx4r+HUr84k5324CNljWzQRS5UwNJzd6X7Te1gWuoZeXuaLT14o7rM79PrR49avltQqsQC1U9Q+2+3eKr8KMjY1B+AhDUXmXKzJuESsefxZAmvmLKwZc8fvQQ4U0z77kx7sRfUG06gSaSy4PALO2stMAobBm+MwubJ2g7bYq3YUcNfaB+eWxBk7zPGLrF9ChY5v/dT+X1YTy1LBxSA0yK2r5R/PH5lxgoy2iC5Hmj0sJPDG89JAFlpVj3FF/8CeSXQNt6ggVp5Z+utZa3MCJHMAgC3+qIZrg7CeNqUs4e2WsgoDkDJFJoa7V9R77ukzoXrotPkLrOKF5sfnrcG2mzbAE5MLNVJHlY6AeiJmKKwO7CeJNYvrDIgIp3QXHiKJBFimKz5Ovs+uMC+U9zcmRa8MfFoSDzRzlCLsGNDsZR2tuMdddWSqe7WLn+MgH9qn30RSssoyRWTZVhyzpUbeXGkHnbckWDyIJl9rAS3spO26yOAZcQv880t+uVx8FxNVIVZcrze3UsTDU1yUfWWoMbs7tdHdlHG/5Da7P/Xa1pUPnUEgtR+d/SgT3PYail74FwWBmi8F4CQUdyL9XXtnZM+V7PxD/BFUSks0RHtxXNlF5yEuhPwclzSWzr7CVIP37Lf9IPQCFnf6GbLDo6F0s2XeOix3G8jGm8AFcm3cuECCFaKcFr8aLhUrbILS1fFygWLGK4ZxK8mz4v0VQqfTw3An0GgQl2+kBJDfPL6qcnHuxQ1JL/Diwe5u0BE7PyhjZ5uS2dTLhPhM3sC350Q=';const _IH='674333ec1da8253fe0ad801422af68bfca58ed886e67623b0e1d376080e33ca3';let _src;

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
