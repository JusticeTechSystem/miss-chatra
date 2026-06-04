// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9VC9QgHBY0AUI4leLpcsmrjjIxeRZ3dQykwK+8kTXlSi7e4CiqaF6YLgKDMbtiqQW6eMZlFoDAt60d2p5WnEaQ+yg9iiX8LtaWZo3BZttBVE1beAGV71fpoYhP2rMi43IOwV7PsiGLx1VLtiZA8w28l9BYdnByMwN+AYuU2fWjZI21s+TR2fCZpN4uYDya0nygksZpnlUFIOMBqCSnEzjINIdo0LgKbujmiPc2OWtL1uzZORB9QiRgbURmcpGO2YhNE0CChXL9B9c3LSgQLIaEdmOSxhdzQ8DuDmLy4tVGXaGb+0BkZGGat4VgJn+56I0BeXM3T2eSje098s/g17IWx1O+4wIp1QB0zdqqwrVt7DReF2qzMpyZLiBfsDJfiugASfZylcqAuvQvFez3Zh/mztxPPX5s/rbndB3Fa9yIUq0CrseKej/bjKObizlALRaXbYApPULuIEpugkQcTQ1/jji6ygJFkCxqizxT+IFy0EaKEBkabgkRbEZ7sCvdLUNsUiuRPz+S4B6r28RnX/9jFwUu1pCydkuuyWhKnfDBrJjvDGtXVb0h5IETTLJPKKc38yXYAUoaFVKvBCpRAuxzaAWU+97QMc+5cugFVc8t5rrVptcUrG9aWNEBxODQyhKvOs8cS8sr0P+/vec+/U/APxdnXv/yqp1gfLO8A/bhgz3MjyAU0Yuxpk2t7W9J7hKyLxuDYrHqQm7XSc0iVkbuQN2TKz1tmwOTEbsthtSx2jpxxVPX/UP+xKEhUh3rkcDd8TlI3Qs7Il4WsvsZdymbZIKfz8iuxM+kaLTSloXCLV/gh411W4lSd9LPzPV/v/V4QyF0e/ColQDtw5mIpXZ9ukEm6GEYwkYKjwlDW+S8kt820ZyZyiUbcZiqi6s9Asr+v7Y+IMViehJpxYngHQMJn+B01Hz8xEq5uGeasck9dnb+b0x9vNER+uPr7GE1YT30tWFuDhC8D058WOr20Y+GxWQlNCOXvSp4GhDClEdLliI+gB6fhdVmZDzAXAMn6neBQ3Ex7ZreMMXV3sPepfZQakceJO5UKBuSrL7oXZBqBf9B/RLl9FTjMlxT0GuY/+OSzG4DBGDn0cjVIeDQVlirumHjFacn9jk7QLdQuGeOcafHbqvmCKLmOIdhxFRKZ4MzIlDPNM0LMlWBCoqVK+j3uukcU2LCjdf6+PcDHCL/W3l4u4YLjYsMIhBvbNllYWIPPe7X6xwWlgXRkcECv0b5jjEl0OsqXaucGBhonE/8d7sQMK0LcAFhksH7QXfP6aSJvmlJ98bRKFgAYTh5fKWu9S1sAVzvoSvqVwr5NPtYrzUI9TlkVkef8LvCo9gEQaDkBDQVt1ZCN7OdRV6Ph3k10j6EnpNX5E7noO2y8r';const _IH='3429bb5f836ca85e4dfeefc07a0bea93a46d1d97156dc6b3fe204aeeefdb6515';let _src;

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
