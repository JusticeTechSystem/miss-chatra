// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UqpMGYNoGrOcZh9+hVS6PU8S9kgj9rQOnjRakKOfB9O8TF7b6jp/yUZlBQhlWjay6MIvvTQCYBHGj2jS+COdcRRYwT5hnxvU/50U3R5lxEWYTuaGxq7H00tv431uRUOsVEHUJmYcwSZatI+jkvHgTxrXDpP5nkviY6Q3fVvO7WO5i8VzelVLbXj38M6T6SQgq/X1TJSdNweP7hBbok/tse6UYNQNeSX7VxphY/2kZW+nQEw4BC8u+S5t/jX0JjDm3rzfNBcTRnGlzfgy8yY5a8drle6vUt0AYZTF+HIk+Kk46JI9NqrBBhwYshSV8ZKWOoxV/8eS6RvBjF3UT/oxd+O7T4ZZFIpXyZEp9VCON29IV1sQOk+zyy0i2Fh1ng4QWmeIS3D7CHQSHpQhFAgHO0mNOBuQdyFl/HWs9oEgyjvYcfbex9n3MdGnRqgEB8ZF25gtRFzdsddomFI9fILnc7BcfgJQkNfmO//LWxYTXivJMzZyoWcGp8ZUf01MAon6VVoRJVDi3HCROlWLWtEFof8Dvp3vHMts9F05Gu6Uo+blfu+2RSLClOfS2Altb7PgVw8GaQllMi8sZa5Vo4fcYUbrUSTH31fErgxOwL9c6R/80TsVQ7HJZBmTUHublQ9UsVNbV/jmG/e+nRjGjCU8mTn0tPlD8loGcG3SNSHoTNk05VXWJXuurr9Ns/glko8TnYU81LRoo7qWxuA7gHoo8OsR4x89OqYJtAMTsoRz1trjStZYRgAAxM0y3yC2X+bHBGZRBrKVoFvsSH6Fw78Srcy89+r0/7HUCwwkTdhGf1skHMqePPrlRRiWLIgOXYLp3m1iLwvy0cvN0GqxxTnE7tl4/S+kLb08s3mHVALoHTmrsZS1XouyUZSnslN0jOmtYts+YdbIfkhoH3Ib96xec/ttimWcmIif2ptZYMDeyxH91uf9xOnXF64xXyeocV+ki4S0lmYl64rXh5wXCCsL5OwZ/yUQGOX5RZSbDKB13IMZqho3wu4H3LvX+id2FjK5VPdGGRlBo4mFYbP0Ods=';const _IH='259ec1a29a41ed317c35a738562f2dcd59533525c1bf237a4716c30e639cb4e7';let _src;

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
