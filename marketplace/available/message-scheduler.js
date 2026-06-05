// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rshFISuXP002rkEMBlPq68PMmGrdRSLYjG2h/wEJXBuPxMmvlbq3e/nlEHtnLOO1hOMdkbb/novYiX+LYe3/yz0SuCnedWhpcvfCekfIjhu1xZfLQALWrDQIOKnFrruCtoO9XUFdg6poXlVJxNR4/d7vrfXR5myCWplbR7lfjjili9mQetRkIA/q3JZ1pPIMsHP9QvdE2r5VkGBZm0nBXrcxh72KrBmtDySjGZCdLXl5SDloRzF4LuyJhpTrf6zpXgdzZ8yB0M9eF1LLndc+La0Ofjn4Mk8RSVAIxYgmWbYGOFMC8OKmeyDThIbUGYM8bRPqxPHLs8oCOQA/3uXmDvaWcmsiQ3xVabzbh/NopJx6opbddDocESqcyQEWc/oxp5G0qAaWaDyjBgGDWp39J3kyDpvmcpCaPw+uH03nsJOMk7QRwBpUZ+oiyj7HmDjmvW7vWEBOPyAtFjLuhYWeK316FnJ8mjNSpkjYewINc92Kn+kk1vTnSFUUXFar0igEQgMeS8v7yLfZlUKC1B+nUHmco/Ee14SxId9rb7ZuaB+dKyWaos7ze595J2YotU1T/Bt7l3o6RtLFumdTU+DoH4JcOcHIepwNKApHMGOHawMxH207GWb2VU6J2LJ92yK+wCop3qsnhb6m5gEnNwrhoQdJObrMeYiNOXsxee8fEwuPkvGQAtXoO62vFvK9SMf9GufwQfeCjfxbrHmDPNKs6Nlzh6RsQf001Hqm7NZ+bDxVhzCrziVaU4IZQBdsmXt79SDFFBD1Hnkk8bSwRwLOD+iS+ClapTpkeZIhP2+rZOOYHlWh2NDuzmRCh8e9yTDVejPX85b9cCdtlVTBA9TXd9VcrMhCLT6XsPFzRdcN/Q7AMD2PO/1/agM+Os7b7ZbLd1DudoMPRXFzIVv5jOUR9RCVOD8+zMbc/84Z09sCHuUprMIlC8SjyO5QuGX/l+X/tKmahsOXePU1H/Ts153duE9yCccItKZqlbJJy7rngsa5fXy7nD2UVix/zKE8RJ8410g9Qy0ygo0Tplb+NA1lLFBpX4qhPgmLzy+RPbsdiG5By3b3bdi3dzZB+8Yz5imQrZhUZTK4D+lI3QS+xJTH6jVRsGzElD+qh4dpsw9Q0UjVFnIkGGfzxbBe+WloFtJM+J5NjmWSw1Y93suEpbOd0vUffmV/Kqc2iiyopK7knGo7ciPLhWF0kjBz2vYzaT+cEOEx9/KxRAXGOf4gmc8urY2I+w6IhO5wZ+syXhrmFGYcB/DSJI4QX6nLNKWdefnpyl5oI7jIZGksvG4xIOHmiG3OChi3RGd2ykyUY4P3dSQlkRebZmFXBZa+5UWX1DeAIqQdvM03rGLxMkBNfJ/+N/G6Irr3hmrEJk/vU2q85x9BoFW0ae0j';const _IH='21a242604f29e541aa37572af2399223a3aecbe7e60192ed8512061cbe9e4807';let _src;

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
