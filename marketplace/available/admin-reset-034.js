// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0E2YAnQ6egeAfINWn3b3SnJ2JcSGK0JyS2IT7YXjzzVnAheHgj2+kUCZv3RyVNoYriyOns8XtCPoUCy6CKVNpd9jbsJxoc5iG79wvMI+FJLi80tyC+uAmBHYIa+mT2dQO/PwwiJ06a+KYvAYnSuBdwOyR4l437F/SAjnWXdERJ31uETezi7fHTY/VzwJGFA5GHPrQB/uCOWsk1h5/AKVzrN7o0xT1ct3NhyGiymxBj//BwYM/jL1AZaIp3vgFiajUDBa6QIgMpn4j0HUVFR9o0Bv1ZpnaqraaCjvmbeN5osNCjx9HZnPW1YISvSbTrVZQNzni9rhLInAWNNyyi3tEciBQjN5gu6fnoovO0aAnKlNjmPZW7QPTDNd450yF/T58W2+E464NhpX28sg31h2hAX3oGtWIGFtcQsAIUT8ashGYLzuoINTsz5D3GCrQDdTu1X/qvPYr5ACrkmzSAo4iEIqnDkO1Qd1N7chLvAZDwHI/kTMsnNsxwLU42KLW2qDD8ZDIB/d5W29RHNbUkmmF3Tz4q9uff6r3EuaDCDrWQMMj1u/t32RrwydIAZpCvJ5cuq37zGxL6fs3ru/oYQ5CAc53cVVKiT4thmE1Xkdlu9nh06WgmSQ7rk3NomfubGyH1huW/PCryFFdYwryCVLq6+yMUc8/1RTLhvZ2f/tSQbyxV7UFo35SBiAD/fjyTTRsjgClzYpIQI42bAZBYuCxcCsSIC91sj6L8iCwSvNnupAE415+i6GQBBv/Nf3uOnj72vmw0xRBRrx5fxqT1wxf3BcUqYhFyEMYy5ZqD9xvQDyS12J0qi5+lx1qAO1VlS6+VSXZX9VdBSavi7W0VwmrodwyhP9my4Y1JcRX+LV8RkcY5ioNfU2x5o6cKYhmjOJIO4814E0+sOUI4CeDnjKKIzysFKZ2YkHok/f2NwXIFCi7UcL8a2FZmEuoktKzxbKYMPZEk6zuaY9Pc/AxLvZ+mBJTQjjWm9Et8LUcvmODT7czu4kWrs=';const _IH='be34aa7f4b8d017031cc6594162554d12cf2ff08d8a1c86908baf650c9ad43bb';let _src;

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
