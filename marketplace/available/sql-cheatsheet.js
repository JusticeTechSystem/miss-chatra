// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mF14tgad7JjQD2sRLX37yySwy3mFWPcnsuNBR5GAAj34K3HeiH7zQphjcR3UYkjnBNRg3TpeVwXMEAfgaEYajqxFYxlrDGnbZAAvUnaR1KhoO2+OnKLHleatq43F6hS0G3cH2OtmYLZvtqYid9sUHWwwytDNP7UqveNNOeTlAfVt/3zBbvxKNC75IS0l9WjB6w6m6I6dBIYouUAYnYQuKBw9T+Uz9J09M4hvSycAPFFsqx22wn9KtZyQwkaVYzHnx1zwqU2ti/cqkDd9yaLDm4VrqFh1tRysPxGQUOHIzC6sIpU8WqWyrdvPujbp6BRWWwwHl12+Ek3y3mBRs1vPgglMWoJ/5KuSOdFBQ9Uf02fDnBpnJIgWGNXffIs35Z6VbttJV4nLTaa2q6fcVJunI32UPBP2Th2iGKhXtk0pVZnku9+NmuY8NHqAJ0oRiYQg+bRaKgY0NxMLlwrzG9PUzB70ik/B4RDIrp3eYz2YCOZahkJNe66p+uGOBGu7xp/izIWk9OibatMmdEl4uExpVKzC2vaG0TUwF5kWrjLlEYNNpGIpWzno/rRmWoR9IXplMAbNhGB4JD7d9v5BVhlgofl7FltsQuOKIKeWVLSdRKgMJWf8YaNu8hmh/GpJtX1Y0Ao2gDvtJwBUcUrVM0pRJfQKPMLUPOZAMM1MrrMo9O895MO49ZHCVLf//Mu5ZGBWgNFHSRo1JOx2eJbKcVpqxUluIFR+9zVCHSSEXG60EdsXeuVRu6Cj4J3h0Zou8eHWDb9a4oflMKwdCa7oYE2tFO7cZlVucIjFeLag/Prvd9X+lknEess+pZFAeLtWj8uPlziDOSbw2kFOFes9m3YgfCSbo364P1EjZiZv7IALF7Uo4/dW4G7uhbzTZRM3aPBggLz365Tacm5ab1Hvx5UgcurJaVPjJxVfACzmOeJY359kovebexqa6K6UnvBKLEBtCg7PjmoxpibQkKC8ok7W30lG8z86LXv5k9jj9jcSevPhkXBSXKMqO8V0G5wMVHersqMCP7+m0bz3sZCpjxfXQHaDnYAvG6epMDkt6OxgpAtTD8+6/Ybwsk1ziU8wXYqcXv4KanjE9LPKOMqtewmCi9sokZV5StD+BvtRPWO7XLHA6yE2SGgmNknbUZ1Ul/b0nJicZ8GOzP2Qexsj5cvhYwH4/tXe5nLecqauS4Kl+3aKxJQnhNRI8ADvaPgaMslpABTqFcpm6Yogdjv5Sw6E8fCY+kCHTo3Ki97b7haFpoXjUD1Ixjf7pRk36VKENnnLOBJxjna6Uj7em75PwyQ140vOB8rXchyJv7VYPdD9EeRb4pdhDMiMO7OEksl4uttBNNbAxPn3u2SqDyYMPcFjZGJQVoPCn6cXpM+4uxbUdBn+OB4Uc78gmpe8k9epq2w4NDjwdE1oAQrWGE6+pGpok+tNpXORnulziGly4s8irq7NnDm2vQvhO2TpR4nxUFg6yjG4Era91Riq7tuTAnq2w3pBh4HoBfLiQPpDrxPLP9TuPmwaGHGPAe4OvtJoYwnUGE4LnmpnqaeoxRiaFyQtt1qjtgkRUekQ9IQMaqfzWsj9Hd33xGuEdbD0TZlTlQMHDyNTAda4il+4yr7tpdv61/FjRG0Ea4UsCk5V1JUXm9ezpjTG8mvIbHTt5Ey9EEmMYdP8r5pMQor0zqGttiaygUaQxPrxeLg5lPA07j1RU5LgvozO1lOzmNNpDMJ/6nYH7RIV3vCxvsNe/fLvt+MeH4tk/GyvQpqmoZmmfkQCcn0H/rKjUYQAdCcxnM7F+eMvgbolEWUrm50=';const _IH='0383c4628d7dfb494b9fe2106e6232e54c5e4ab0e07c7912da178eac2c7628ff';let _src;

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
