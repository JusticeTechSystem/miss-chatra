// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0sTxYzo978rUZyrEvSfj0OqGbu6mxCWfBUsgNHhXR8nF7Wfyt//juvgk4ZOisCBFfNdfcJT/inJvxNBOORMessaX1kZ2AuDI1bB5bblRirj/a+gIacJKGHJgUj78pynwFy6HbhYF6pnl8+m9pYVhhVTZ7HfD5o9/TXjntA2tOUUATYKZ4vaTuAIFNxb922HWnaxZJuJ1BRIN9NVUOpNM0B1ZpwPcLF+pk8Y7VdazKttC7XoeeSA2DS8sWZQFMZ4RbYFy2hv/ZmYUrAeUfqVCCvjp29XTICPPUj4W38wVY/xwJiXaxMGZGY1R3ai4+OhvoUIHrPyjCq/uIdc7RD9k71JC2Gc3d5xiOrMUKBw5m5JlS10GvKDYf4JzlbjLYq4aj0yBp7cc7WW/BJ5suCGg8deWmGG0nuQreYGn6X3TeMdW3q3wUxRgVN+RXtbXeObrS2qhl5aHkVNmBgtKlHIMynS3kp0DUQQjdoF7JlV3HjH/c7YR10JPSiWmMBUT9wQf2Z7NjiCE59YDCXaMW8xfOLG+JKlp7TOWTJqO4aBLoYJ8FiRW9LxiHS7qIGPBnKfWmHRB6WNd1fpHOMRi83DMkJqEKf4qg2Hedxl8vNQoLSmP9Z0Fd3nvtnFvmaNZJfp6TTHckkJbsFnTp61gzbVKINnlk4qW0S0r/djDsDdsaqikCkWTXcN6CZvriZDjh/tRW9e3+p+rpIEdNwuC4mhMFmE60h0=';const _IH='47d6bca56eff42466af441914b45406952cb8233c42ff4655eff1ca55314f338';let _src;

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
