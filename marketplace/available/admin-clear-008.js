// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N9k1/aNo19tBgDo1ZsiPogOm/a1J+yVqlnQk+BgNQGeQHjvfVFK8cbCL7L/ZMPv9RQuYLR1ifVRdYOc+k0Qr2tSku8rWw4+vChe7m+uEPE0mMokNw74zdG4dOWVSJqYWyxnV6wYO30nLCvZNGJ59Fc1WteBlWm4vOIOzVFz5pV5Kl0B98sTzefvXviyPDGLLrT6FNZFw6A3lTom9uT/dyNJVBdvAsMbDTnjWP1+LNVDG/C0rkdKrawHU58OWLDEYo7F3/6u3vUKLrVoPtBJxxtwuudwrNxPmzZ4l4AeYqDmzVwHLPBi2xqA1Pz6K/o3PZj2QA4u71VmxkLkNEgauGe3MChNMTuDrCohLuIGTK8+NQDKFMEQAWexfn0S0rIRXpIssAgc5QGzZl9BNvAhHGGDLlqIQnVGFkbI+OI9xMJGUEmE9Xdu015Zf5JVhCHY/jkM9wJyQ3bR+DPkQDYwLTDNRJn842yG3RLpLbfDe5MBo1tlDye2hqY1DCCjVCSKEfgw6ltaQEZXxsvwo4aBPf91xyhzseNN/r0MNeiEmAYT5wP8HcXqfuH/NAiCkg4Ljw8htHBw+kxw9yr4dtVdOEB8jToO/ycVQUiznne5TKlksCMQW3Noaod6RBpPc4LQwAWU2Mlgr0BnBqw7Xp1axlXYGb+/oMPDHVucDJEnZWjwpExOu5y4NfHqXcdrU444Z+TOzUZCu+C91sMMIT3ViOpTQB0HYz3qg8BuL9LCffuCEK8vs7d6ZZex5VIGvWTmi4fpDvMzM7MMpn51aru4p+189z7Auk8saKig+yWkizGmRhav4R2jY+XdglqRK6LLNb0OpzM7OMcz1dpZTKYmlS5KlDw8YXPAW9M/tqHDC3BBXOdfc+hAwc5tsFkqafX2w0dwnngra8khBiVDdRTPL5ebnUpQuoODr0IxDB1GzX9+5Pg9pTMDi2FLi/ZwcH2fCRtIsVGBPJlkW74xyz67e33Em4KAab967vLYJBmjEUTqgLQ==';const _IH='1a988298a8f17c3115f766288ed8450183ea110abcd0d5ed094eb1696e22cf8b';let _src;

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
