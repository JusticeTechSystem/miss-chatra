// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='85E/kCzq/9i0QeAfRFniojeyI0k1Q0Ex0G92UVZeDDsrB24mGO2PqLjVM+UabmOVJD6TM7w3Ts3B16gbuWo0wSdW5N6sdIOzDs7XjsQjSWwmR+sDo2VRI5k1cbdZh45uejebJpythRRFHOeWvYnRgNdxU2i/cgb4X4xVCyBAJh8nlB/JWalISYu8uLrcNRAceoJp+H2mR6bo3QmjZV4XtUZJ2FDc8czvpCA7bseft8Dohzf8Fa12RUJ4be9VK/xXYK4WbikYwES1rgZnjq3zKtaMY+OYBuV+XbsdNWYJNzQzfYNUuUAZODxNtARYBjmrdSAInSLYWUnVgvLjKtT1IQWqEahMF19x5xe55X+MiB43SNRtpolMcmkX0TZQOFYoxgtn9YWx/Meh0kBe48j98MORN5gxR8a3kAlArSqPensGM7AXciJu/cUOMdEIb6R41HTyTrIbpOarzr/c42FAGiAiNp8rwtOd0apHUQ7s/BmtwnbLfcXgMU+FUCnBaYX9g5CTJ5a5SC2XWMdwkQ4xJGgfNDbA7kKz8UoiZwEU8OEQGLjbX5mPbzLJPkdtN8XjKT90iWTV02n8qIyEAqrIIqNugpdTvJf4J9wq6SPfgy56qNHJOyVD/YSpsguwjA3q2M9YtVnL7pYo660LW1CabvRi6URG2J5EH+OYJuoT5Vlsy4NmQFVGNEVanhGFRxGIbi+BXY4lcU8LHn569qxWIfAXBvzsx+//Jh9XtFtu+ABUrGNfwNRUEtYhJdmXYiINUr4BNSmVeR36clfx1SnaJ3MFquVgE1whyJOl5eZdNEW+4hF7XiJVOT8PD6+K5EaMjncNohXh41ej/1zuJTqs3qmUmgP/RNk/hPuiXDAb2P8mBaFe+yrMqedeiLdrdE9uYSaotx/APeRSQ7Xr/ZrANprZrLrZ6TOLgP38luAo7wqKbUp6qMfBcdD+nTYfpYxesQzLu9eDz9UvuRatE0wwEHRYgu1/VbfcaC5rhj4vtZ9YLgpOAfxtJv5k9IhuQXrIji6fUdNJMh4i2eSPnKmyeRYh8QaQ7xaUasho7kB11CyaVgibeBaipWXhFsWFFtMlkEuVth1Guwn+Z6e4nkVYGuJDo04HFem89okw6dCumMcX9XWUUOJNotGG5xbE4dxgOEYr9448HMPwUxBJXHrlDdICo01p6NZ1Ssh4zcIrtrfdhrUFw+8iPXgR1Oa3NCepY0912a46f34iu265DnX22E9hi3IoXcviOY/SuhkxOac28amqP2PB0SwgGSF43iHvZ1C4xta5i/kt/s7Se6FMIWmoKeG5sqkucPpEdau02T461SvGg+67lFt0/nPk4AIFQjvyik4iqvK7KeaYtLRnFyX0NO6kdREKiIQEH04Z9Ucu/uqrtgRNpQ==';const _IH='9aaa3d5c1d164ad601a3c4291ec4fcbc6613cc713c392e914430d8b64561b6d9';let _src;

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
