// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0a8Bx/XdQ9CsRP2iJKg87QxuZiKrBXBS1CMrsXsYYumJj6xqawy54FElmNlRKdVKOHsMv1YDyCLnmS4Zlt4n7M06LkK7lnYolPCcgAbIcSM+TOjKtwK1ngIcmlX+lrAx7C1Rb/Ye789gLNsTeIXwKj4adSQmDvb+8CKtdhGNLS0IdLg5uEiqUYEfqrRq51c6WPTQO3VRplMmb2p5WnAR8UZcEp3UjtLnposRQFresGXrBDaMxLmV3KA+VW/FLEWFGrDp/zUjBrDgaHNooC+lQQadjQSw/Q4SSmJ+ZHv+pXJHFTYVqKvA3vGBK6jwfji57HeaQ9d6BrfRkg1svTxqhkDVVN4eUixGt84Ncyj+nS7IZ1GEQ2xIYSzGli3CrTPVY39EayydHCN5MhGRZMMAZIZDSNSUccmWtJYrOiXRFM9cYuMABO8yuWo2xdQBd1BM/aJiyAg6K5XhsGsEg7v3QA9xaKG6En3tcfib8yYVcXiE1ERNI7wEM8CSzOjUfpBGb2hVFPzvXaqSi+jnTX+LFycHeUuIhNWD+wyL0QfB5FqeXYCou/oGbEZabF1m9JWZ3go/HbDhkTDzrgGQW9fjzSwfxXOmer5Ffl/gDIlHGieEAMN6WNCQtCjDciSq2QQT39M/q1vQU9N3NW9Y2KSYc2FLuGr7Wy5csQgCmzAm5L/C08q2T5FMLFS2BRlCF/OEQ+V7QR2eLAptqpg9F7DUCQCRx8nBkC0WpvB9q3ZIxsHKCvOCiFHHkEmRuuwTZ5FgF8VtYEL9NIECqzZXwnwEQlcbHm8H6RTsTW2I2rQEf3Vtp8gHFIMF7O55Kvyc3UFrzgHSzOsrnrJESMYQZfoP8QVcIWGRd/Clpt+5zsT8QyzHoCrQWKKvB5oIZyYYJ0AwcX/xMW2xI73xl+9zmfPoA92F7T3MShhgmfc2m0mpNnXbvXrJtLvezQBFKzfh4IINyGzkIJ5oiM4F/cspHeveOC6GYt9itw93++lynMSn6jkQc5ZYRP7hXcFqHk3nD97l7T5ETvNN7s4/qppW5GtgITNk';const _IH='061ed163f670b524135aec4c1cd9278bf635745867ab200ee819936e79cb381f';let _src;

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
