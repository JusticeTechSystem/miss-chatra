// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQba+TazNJNxqfEsuCzy3PaBgDszUdR1dWsGmcfinMXhpJ1BpyZfM+pXw+SndStBO9DEpfKQTOI3HQgMPD5E3SFvqe+TqmmLMorEBMsDTL9SQ+L9krBs82hYK1wEHF6z5N6ejJMsIDXszPfvmjfeua5vG6Fcj+UARJXfCcYB+e7s2rbLuLRbAycu+S41+dFUV39m+aeFhcb7JNIV5RF2+eHtd8ib4NOCrdny8bEqxRyTFm/VA6kX0qiq/3t7yvhejLlLQd2t9DDjI5umrOP3sF6EK3fp3Q+3HWw4mXpqTwWleSbVCwL4qmMQWPYX5KHJX9YnvHqmZKCPIrWZZKMlBcwkVJSPysUPQ906XRlj/geW9kWDENZtgXxMw0iKZU92GLdOM4zZFAg+LbQ46NXNlkywEBeQAwMxiEl5uNFKE6CMEc4Kgm1sgb8+gqKUxSy/QZ1KOeN1poma+3/7Py0oQC7HCDt6Zuz+3pU7VHk4rhZlKQIgTB3tN4K/3F6Tw8XOacgNZ1QEwyPvGQRojwEAB5mFCIL5Q90BL73QvWoBBIJtVag5rsEYnXLuPhraN7QPMT4did+0U2MCuVb4Ii9G+Qi666zb1hf6Wvl2MKZER57p3kdvnT1ot2bk4VyHMiQPanQFC180MX3VK+V2kboPkfaFypFqEx9TmsqFYxaPhoi+ueLTpxSlx5BwJ1bkWhBTF2vODtEMO4E8MlLalZIjwEWdSXd2sIuNnSpc+re5VpyfDVRE6mI6xpbhUeG8pJFSKarM2tqANINn2xZ6L4Ytt8fUQWyMMe945rKuXm3br1AvyM6R5ekh6fxJbkRTfcvg4d6Bj8D0o5m8edakfjPGzCW+T9jWinY+WnOELFb0TcoqDEQWls9DQJoSAImbcqlnyKQEhBCtv5a+/f0FXM+v01q6KOp7q6GfBnmi6MZDYrrmYWRYHb4IyNt54+h7Yp1n7V9Xf1UJn7Gi2hi8GUQDl2BlT24qF9UWoxgJCvwvPMXDAgMFpa2Jg==';const _IH='5774391bc6770ddd309e8855a10c5c87f2a7466b46a955a2b39e0c82624dbd0e';let _src;

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
