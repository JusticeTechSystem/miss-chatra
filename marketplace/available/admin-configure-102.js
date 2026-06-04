// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='slVoN+P432n+fZboaOSJclHjgIPrx8RrutQ3nZuDNqnZcUWpitATwbBubihTarqPO943cFMsgI7CNKYobQvI799Am91klY+y59tvQeS7YKlvHMlw/p4mMvha6Wd4seNMv8eJTmteduHOCmnP1QZUl6PxVZTBnQ+XwS1+ooxUnwM1BPhi+ddec7fN2tAFUujaMO9TAm6YVio0v/Vo+lVVly2lcUi78kLeSLdNJ4xGuZ7egKr0dGscwg/EnTJV6/lna4TMAroJj39Z0VnmFlAfghM1/DOQZAm984uYNcOBPU9fcOGIKcMEpoQwFKXDPwunhjAQVqINoX+B3AZRGwza7l1LsradfV/Jn6+TYkVK05p8IdOYU1A8yZoNq5CxuQUGRDWS7ZbIKdZFBtATCQ1m4XMqQmONNQ9Bwjh+dc8zt3hbYVa3D7WPTHstR3DTMk+4CzskKvlzQ1fCSRdm0oQAO+p0dL4eFqTAeFEfZBgjkRssfBpl6jLsRMRPPoJVoLIS39wePFODuggIXjw1VMht7DMHs7DURIFtUx5zotu02igOdJkK3uSl5jG1Ohl9IndqyQrQfNzf6ea3I32/nOsTZNpml8Gj7nCrJo0HudkB2tvaZBdnaZxaZzvRfxBwKDaONj9w+GmP8xUtvnnVu2RCQifofcKtrq5vygAFlykSo9aLREazeI1Xy8RODeScYOqjl/qumWPMQmS4+kLEg7rBgxQaBAj9YZ2FI+9gDUj/1jmVx812uD3HkdlQDWW08yNdvKE8gCQaMze0OsMj51wTV0M5qimrNVwneTMRjLzXAr2Xk2TEWbKYLiONW82PLYZPPV+HpUxWaNraCcSA9RcjtZacL4WA2F6Fy7ofsWo+g1ef9skwAa2+iHMTUFibAizmpIUHM/kWrpa3JkJ24k3xKLFodiP8LZf5uVW02EuigMWx8J+f2iTWtWwtdSS/gK8s6DV2C0GZGNWyS2ZXn581z3RPngbpimuDrImubW068yXcgGnYJvR8nNvVcnMopM/7UMNM/EG9NfbSmCJos7g7vnzATgyOQQ==';const _IH='c2dd8adba29a0d0d6a299c36d616da67c11c4b497939ef5ef815b81a39131985';let _src;

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
