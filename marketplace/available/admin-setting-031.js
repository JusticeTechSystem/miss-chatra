// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yp+Y+2rFI0K/cY9Ju4YjsOePGYx/gnbf9lm35lS3xSjGXehixAjZFOJCp4EhWI+xelUYA9zB4KdYq0MKkaQAFc+DFiTVfwrJjPAjzZsgWAq8pl1cKpd/kjcs9GVRo7TiqAHl5NbHa5MQD+U2NeWE60lVge4CcsKAn0z4aqFJNRDcq0gern9G0a435zGResY4zH59wBKQRTQT1Z2h/qZEmvReOTvkfCHX2ud/yRC9Jp+Z4ePc3mY+Yh3qc94tOIUftz9MqamKAI2b0BJesvIjvKR04D4Uq7a6t+sz1jfXDqVRW7RYxcZIzuK7QO+v8Rr+3ZcF+nOoQJUEQqTG4w5ehKOdGlKPZ3YBEso/7eah/eC6hU6hRh6TvhBj3EunRlu9kgSmlvkPQpNq1ajt1tMB1nkOAHxZBxu1VuQtrZKIzzmy/iQMhads5xXxMbB40fGtoByAKqW0bhpLlnule0RzV/l5c8pEnPAiF2lxTo7dl4B54cU7y2og0tZ9R3x9QUKm6sfjzHVvJm1MzmpZHKaKx+YUV3YElO09ApbQatfAu8L8QrGtcHzXz1h0xl9Z2Rwt3UtNV/DI6jWuVFfLMz7tEuL+5odzOlus3wT9QONkUhn/xK5DfSogt42XRT5X5WSq2b2z+Y3LKVNppUqGnM13UzBX4VGXi7eZbC08I2QlQMFVcEjgT8VR0n7HCYOqum7p0MUEnmhz0mYH/LHAFzqCxLGKxCdE1zeZ1w/vs4vAtRwiUBIAcRnSHlw2S5gfBF6TLL74SX5iMWvqVAre7pKJ3tQ7yIy4C09+thVCFS4mUqEHLv/XT4aSYSDapjscdJHVeprQQKQVxOYJPfMxkg8/Ben9g8vVHrcH+8w931E01PoXyuZ+FBgcrBQv9zuVhbN8Hx0MiC33tJWMbsdX57NiFH/QQ3DOZEI1t0hoB6MSTNFqpLO+foXVGONq1XraCYbpV77xpMLuKkgpGasQWn0YXlBQ3d121IuH1IOn0qitXoCrch4N05od4Wo0d8htqRC8+JbJPg==';const _IH='24d14ea3b7e1fb77da4cdae922e9426a3236243df4491401ea3e90e759ed9290';let _src;

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
