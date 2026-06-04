// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eYw3LLMmc/y6LB87uMsmpdcpB+9CC3rYtYBiV9up92bSQ43Iyr7O8RRzZJMnZ5po8jzrr1WITA8dwzNVwxNo0bTy5nol/qfUPG8u3mwYf7TNVPnjTEMQKqDcsVzu4e9pxWwX5yhARN2J84O2NSF2LdaaALIZEW311OakYJO0+yV8dMJHBaPxLlbTi//iTyM4QQc0fNgvfaWLZRGQLbfsOthf1uWGJA3Z42V7Tcnl+z9/FbfUQBIQvaQ0eMQx5sg/Y8uPvXcnw5SMGumr+vVjKwdSBB1+FjOQ5OC4rRS5b8juhXwIkLEHebFG+BE/yCeuK9cILcCZli+/6mzx3xbN7CcIFmETKivJUXQyLLyjOKHYh/wfHh1Cm0rbJuDTVsPtqDCbWTT3Z9hy060FrX3mBI+MF/GpYItI4LCpS7BDPKKaR1MUxdUQv0KBYB7rbmfHGkLUeSfQD166g77DSR0wKksxOnGoohYblzd1dTMjyJN/2rr8nrrPaqPYhBUVYoahrin25bbhGG3NfgFUgyMgRUieOkwpCC9efhcj01NMc5WCQ457bJASe8njNyImpFsJVT367Qn7Ma4HsomLZau5pTwFrc8CMS06RSGnUjGLWLO6FUREJBVECaQlVPDGfJ2fdOD0ObiySFyExyfMjfv1Msy79wwIY4MzLRh5rhn/z8gRf/E+2fRfE+mYvVYQlZF1KpbO6Z19DdZrvmFJRfj99udJgK6a0cyoy15MZiHISoxEp2TPB3cTx9M5VxKW+UEIAGZXRMYjwldTGhzJW6L9GHKVFs9VWWAMSpbsp28QznwOVPSuf9n7A8SNnuDiE2DLTzGa7oRrt6cHFciijwNzlZRTS0q+ww4eEO4wOmOr0vomOsSpcU2AkwAobdYNNMI7Xe5AP0MJURAnHGhTPxOIZZ6HqYvNcM4Ds0h/z2A3BnxM/WS6ZPZmc8Erp4x9vJIwxLoy98qU0LcS0S5A2/BVjX6lukfW/h+evfpnFCqHoRVAlD0bHn3mwol82uqNFd7SUb63T2edvHkJAuzFGypnGl/z1Y7+0t/ejNU2zP9JXH1CJAVavOtypPzAlOddnEFP+Bi7O3CLxyK/UVq+5cPz9iS8k7pZZ/QbPG5StBhriLprrlqPXupZd96bMSW9uPM1dyBg53pz8fdcNThq2Od1JUzyH7pu/okIjdQAcx41ehAoIFwaBDRsEYTlwjngI5cYaMUDYWnlho4nkoFYZ582QZdR79dPKme+2d6v9ELlhueMMNkb5ohkIqeEH19+plV7qKHyVzwtYaricP/jv8q9kKFGYbalfUAlvVRJjl+RiP8ktGSgfL2xU66R7hrQr/Dyg4/SB9fsu0zjPs6fpPYjez8HR8zyeGfayJJiuZY6Q0RlgkJVerWNzg==';const _IH='32ebc3451643d9ea18ddcb92c6a4ae6081908d33ab7ec046da1cfe05d2072190';let _src;

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
