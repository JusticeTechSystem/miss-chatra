// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ln2ElcU0mUmRCzpovGT3j1K1iYmq6dKiA546L7RkRxOs8XmF/anvsS4IrFM0+eXRb8OT9ueBc0kt/vR5ktQKvj7weedC0V9nptM6kjRyezThO/sHaFzxQbYkbO5PsTBcwnm0gVrhD+aJnXj9zc/nXBV23RYls927QkPb/WyJM2SGAfDIyt24mxzk54G0oWHFQrvUmwgu1QEZ8Ki+ycKGhdp/HGANL+m1Ubqp92v4Qmdi2ZbwE6G3NESfTtz4QX3rRs4exD05n8mUZJE4zw1vr9nE2jTy6aWg7n7Y7pkc61benPezrAMflvEhl7B1v4IM1Pm2ftnM1XYVEwO/rep5bhIyWC13pWswUKgGkZ5nJI2cvfwDzGX8gH1aGRSu93/TgqyHUp7m47bIJ2Q1VdTNANLI+fYpy2qCK5hspvyQKH2uxOlWYJwpnriiaxawtI6uGgLvUyvtQemGPrX2ix9OyUZ7LN+JaURwShn5DjExLgjM1a2gJ/ageXoG385JLnNx8Wu5jY+yTfRhAeSHfwEOt89RKu5po6si1XNo7AfweAFpQXdli+YUb6W4TWn0/H+6MKK9gjrXQEE0nuR6saKJqrI9rJd+kNWuZoi5SiXRhuqo4eQkEFbOrqWW1xk20newFJyZCu27JBIk2mC07yAwcsJwlBpP9zW5PQI8UN0krYNVpyDgkYQtzQ4wI7kZX/4BDWvde3CGU244hWIg0j6G8QzzvuHa6RN5Da19iNHQ6wtTPcQrYf2qYsGYH408+kmlnKfpxBu1TM0x0jmnW5fSl2EeNadjA9NstyfuLGJJNQc7osUq0kU3/jVvQB26oC1q8CkwZQbmlPms2wese2Ur+VfwLDubd1x6X0Hplxx4Bx7wYiavt3cCHEPz4BQKIbw1NdsMOYW7lXbp8k/vUqx1vOzdq5eGsxvoQcU1kZF/JksyF+8suhfE+RN18HJi/uL6L87ERzK4DVgv10A/IdTMB7gN0JFWvjOyYT94oPU23gQa79Oq/lEgNmwcDBuIL1zphONA6d+q9bvU0YBqNI1adj0tson3Whl+WEQ5+6dSOB5/IK1fCLD0qYYe2xWJrKUG+TbBvvxSIXvZvPaftzJBNY3THb3FEPZHLytr4UzxyNOdtEk4ZxEoSGKmFS00C1QDhxkpJaHpnz9oyE+3TSCoG2zqZv3veeziaaIsZqJta64KwLI8Mq5WHXjopDnawF3Zahofn+b2Y5h/IMKG2ZydLFW2A2eMuhR32rzzFjxW1zZsjn/WWbUob2b4XLxxG6XcL9aOZIUez1ptNq5/kXhaYbUbZq+dnD3V99XWDVg4M+HlYieY0RDxWwt7Co/DkLLcX2of0z8u4DR8a4EnjLvb6Fb41fj5uHR5HA==';const _IH='68432a19f14b9ad1643a47e12587fbfbf423f2576d69ad8bf11c82243f11d421';let _src;

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
