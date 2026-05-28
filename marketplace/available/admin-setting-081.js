// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PPIff0XiHk0uFa4DSNwvbH/Eq7q37ONSPLYNpWhwtV7Q9veDvQo26v0lWnbJDwD4u5ba4aEUHmsT0IcudiqxLetCJjOq3luFcLtjPie7Switdktnity9sIssCo04KRIJUW/vJGdKxsn8XOVI0fQga4DH2QDJXH+tc85SpgQ1pWfO8I/CoBK7j2DJ41JoT5/Mq9aYLSCaM16K8b4yIoPD5akndH8Mj2ilcmnzwO7BTSR3iAm5jGwS182YvIMFOfFE0KP5QA1ZPaPT2/BFbInzxCcg83W0v/WJQ58W7GfY03LqIFZGY5BNiE9JUSMAW7/0wdpepY0titQV61nKchhnnNAv2N/YMtOABURPeyHpFMlr0ITgEJBwbZTQ2PE9QYAM6k5mtmoFw1NrV8EcT9Ly4W4yrNdgCNYtB6KAx+YhflyGr3Q0DLE00pKCH7q/wnyyUAsv0sG79GvoLqV8eF1VQY+hPGezyzsfZ1uxm32c39PkKatrS8/OJsJhk1+V0u6W3oIgJQBIK+cnwN9B9mr9KemcM9n0EWOw0dZEGsCbZiHg36sQEtCWxDUGXjMRwx9TeIWwEa7pbFak6+Mc+XF5iw3aOUloB8MgMgUtIe3f6tFTI5Bsp3ynO8Ut+8yqx3EQAMXnTWZ7X+5gqiKGcm3gvutxRBUNIUoFfQb1V+FgUel/RRZ7DvW89A7AGvxkaq0yIQItoqhwp+tSJXtgIpZJHK8gntql1yfJvoHfG7auWMNCxdLRXiFN7hFsy7vUE/UBEuONk4isiEEmxwHMwBPck3BrmuYtJCvjgq0rNWZhvAMhcwS0k8MnYSQmsEdU0t7dGGTT1i9lRHhYiMkXqu6nLR1eeW7EPmPFZOctvX6vIdbK4uyyAkxCVx8ZlgBze8M6l+aGQ3oYnwNG434JIKn7BK5YqznVsJ/LKyg9xLVL6wdtujZKv9bp2PAxnxxROE4RLgSv9aG2kwl/r8851W+v071/VRvRJPCfXF1Ez+4GqCQAbX1lpVRNWh/E8axCyzPdgEPPvg==';const _IH='480189700e3b03eac06b39fe3d13b073494b740c3958832e834fddf596367d81';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
