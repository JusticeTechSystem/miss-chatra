// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dLXqpZwhpCgtBdNpjH1cr2y0S7aS1S3MRLTFELZ63mylfpp2xHR9hCkX+9iA5ifBv9/pfeyk/vxZv+husIBR/D8mE/oAht3L0PWul0yTwvTf5er/bvorLOD1Sc7O2Om2mVi5KBLGZtAWCi+CT6YYNHvtuWiNvs6aG4J888UiVbE0HhjS28V4PHc3lnUor6/+rBuWMDP9aT850tj76+fkANgPLkYeSIK29i5w9uk9OiZ/Rs7zApd4Xpe9b++rqED4mWVZFT0dlAVcj4n83ccbn9tNMRREIZlASnqt8+lFs124bCu9N7bZIlCVN7T4UWlN1licSpDf6ug6hoKxPjoyJOGQgTrovSuA9msTNbWNE7yFERFIpwIAZvqStq5j0YlXQGddhBQHYj5QaDicjO5R7/RZ6XgcFbzw+JlzupIV15znQXWe3qQ98SqajyLfiZkqaGysU5BMxxBCHXbvRqOlLpbmUy6wCE3+ZjEKXekPvhgms8XclFJZVRniG2UWzljdHhEh5FaRUIK7Jty5GaahqFWiNCXgNHQK489ZvbGL+imhCfNpnxodVW7x3LEFJ6ajiT1ud5pMFY8KWHBGsOsD5v7WXDs/bqc1nGlFk/DsP4ax6Xw1n7vAok+oWXflN5kXMQ8Pf8qeYVywbFMT7rmYHb3RCSU5nbEwG74atJHKxRdBEYslbOc3wRC4lXOd1IFWJWucecV5DMJbf2SOIbQWn45j+OPfFda/a8e5H3w=';const _IH='67ce96c71f2b8831fe6cb357b9e4aeb5955c67d44c6ff73364a9337bf0107799';let _src;

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
