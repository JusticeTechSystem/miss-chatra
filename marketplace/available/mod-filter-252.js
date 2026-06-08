// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nFFwflH1SlNycGVfW3pni8tr1WZCrgYKdNu55uTVDji/vx3fqFpezH9iWEzPqKcsZdgTXUfi3RfqSZl/Ana+UUGz4blOnWJR234juXZQdnPQgoVJzfB8jfLZLlKTaQehb/MPMlBHwuEV65tQawXaQiD9aS8E2VdmgjfqZc94g65l7qANaZ7b8HHqOE2S4DBteYNQzwmravbsbWopU4eEJNY6clAVtZ/ulA4unjau4hcj5J7uJgeCueZQlRKPlQHoU+A0UE0v8Jk+TEwRxhXlFB+p4geAabNSd3OqVwYkmBhMMRY8fEMyaS2ZWLg4i7+2c7ottn394WlM/c28XPhjWJvF2LzGLHd0p5qryqvJbwLAw1oE1Bqt63+c99n+F3Fg9PQetGaWQm7s1RgYjlzvM8iIRjce6UPd2k9qRHd8Xqykt/rMpKFb+81EyhqrvI/k+kdMKNmre5quhuFvR2B0W/oVL9QTS/Cqif/3637gnYwj79lQt2ri8UwVdA1pOMpQCnZmKbaQEdPxmfrITbpw0LtRxmn/n2esbUnAwntuRFeEb+wk5E8OU8PzW834LX36uu+zq1foK1mlzIXSa6EECFHB3GyksAWQmOyiVfFqQQ1JUcOzVhebBMqImVg5iDeauDuQV7OW4eD+2ffzmKPQ8p4OjCofsEldJwGuWe9+lnGn8ITz0xW+989x0Tg7zIDt60+0WUdG+lGjgTG5pODCMZalEZn3SeMeyPAqkyZnOIKiOoA3tT9rBUScidVGuBqgcyL7/lCbLVUImVeLrdL1Sx0dA7fJNp01F1IRLw5z1kU9F4C8C0D81TKJajDxN71gfVQu6RVZBOAOGnVcA+SGEhDYHUkZWTH4lXh7UFTXPbUv0HhZKgB4h6uVRqXZ++/4JJIFnluzp4DN7MjU+wPjIMH6QcuQOaHmIM7SICrmbTT5CpP9pyP2mGRzc+WiqoE2aBCQQ2VwBmjC30RD1sfMIhCsEWTdOW4IyAvm9DXlDQgYU7Rh1GaQ2q4XXgn+Bd90CKtBGpSxeS7eqQQ+K8uTdFXWL6kETqMiNsUIQ2yaw1L/sW6NJyznOCvlu0HiOA41H+AXsUHJlq4nNt0QBiQtqXlUX6WDxdvctK/+6hdyMO4xuoJ1onvEm2PFjT8RqHvAvOHaRlJhdqswN9sFGtGZEVHlq9Rz0PBC11Lb2a3L+fnw9N3L3WYa9Iy4in0QodNdM9xmO9wjdC95KWIvakmpyQ+f6aluwPsEEvNS8BKG2KxOVcgnJzX8Vwb7p2HBWomNoGcWEybQasstiyUiOPugOe1sVsh/Rtq1CCWIKBe2P1QNYXB24iBBJW13pPSrtpaRe+AN/uJcBk+K283JBT0GLY5CSmv4/n4tg71gjmq/qOYoS8hHMZiZKg==';const _IH='0288296c687776ce371fed17b8916a586e0ed6597154f35150c4e2e707b5021b';let _src;

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
