// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q/Wrpbp/O3P0vqAZu0YZ1Wn8Zjz8iHmnXJmGE+0v/+jT3rbii7tCw79HD+qWNMJpv5Gtm+UKiEGMSv9DWuwT1DhfHOmYA0sBPn/AcgMBYXVWKeWDxHka/xe+SxUzqBLaPG8rM7c+zZ4pMxFsScAft/z0D1ogV/nP4ji7A8B30oL8k8MVpZ/qiy87uq2VoUQkrDPP0iidL+EHQDHY0TGWAf9CW1WgXC3k/TBXYoBUCwlWwFjrosn0DlsaBJ7upYaJbr/c1QiI2I4rYrYzVoCmYl+jppe6en2Hiuj/qJP4eOX1c1Kkdm4E7AQHBYMyrr5K4BQcl/VP9nSyowunE/qCHlZmMgmAt4BastXq2K3QhZ/pHRaGO3cND35qaCsSHp2+nyx17JGYmE/ceVdcfEeZHdDbfWHvJ2zN6jc6U87iD6YoC6GvuLjJa1StVUcfVyn9QyvmR4OXXucyP/3VaCMYE070LI0qhn6xjiwH0iF2lU9K/P30eZwN4IJKtKdcm7NQXrcBHFaWBfDzorl0y6cIVsw+VzYenoJUNiUTymr3AtQXaclu1n9wBd83eo0BxS69SC2KgEDMN6KyC0bWv58K2qYjj+II4IXyHbaMLt4jYg4IW7XPOkn+/Ef1c//oC5VF+Q/LGp7aWlmXYCmU4VZcOLm+STGXX1JvKnf2tofNxkmiq9NSqXjFThNEmqu1aDeDNQnTKAGVR06taUlLpk24vOd29Vdv6uAMA11StUcukfoK0PdOUp7ugOjvunnQPBTZudW4ix3kq7Ph+8fmwyEONIoE0Fim+uLKgLuWJyK562W4+WNeR/QZMnBmjDwsMzFpbqXz6lcn/XQVNzRaMRdrMGt8LTtnSPd6RugpIgEPdl2A2e0bKq2ysuCC9UKKfmU9z5TJvNZ5ZeC54bafh64UNrlXmopUIwIxX/Y2Ha6JPUz9vSijBSgDIcGLQ+U2KOyDUcvX8azoExmI9zGI8OhbJXFP7kONNS7E';const _IH='e2cae650bea73f2093397951765187881e1da0ed59bcb54efb290a0e27912817';let _src;

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
