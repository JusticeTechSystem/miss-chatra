// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7syqk+cCzGuGkLxSvjHEeSjPOdTRea38prpqjwaqBT7mYs4du3KVSOID/0yBoj10mOY6BIM/XPsV0k3snL6EfUUSxo5EerZAbBx/2mneNqFmzECzk8Tz+v4+GecONLU7w/7hpDR6vZKDy0UAl5m/d4GSOz5tCTOU+zxvVSFpjJ3z5Re8zTqn3YW4JoW4qKoigQHqVFsxMnM+WLjCgGwlJibIu9ll3V3IfHBL2pjSzRKZXAYuqSZHJ4Ry4Ne455mSnafN1bWG6qVCSKtmDuvE7TSWJrLQB3LJhtcXUGdZ+2mPjv/+DWA6C1lU40/pczP126SqMylPe7JnQGtPzI3nReRm8mDRBLxzzV4AKwM5eNZcC92Ia6GOA6NhmsojqE2gJPSC0oqbG7+1Yx6slHEdS1Rv12Ox8gdf2pCppF2j4Mv1HUSGNYEBE5p0p3cEPfmud+f1RzfB/rMYmg0qHYl+Exyesphbf9+evoh7uLzVI7sw5ZstXtQd7PhFAG7zbVLNr5Re3gf/zWpYbDjQhbv1hPRtmliAiVMmyCrBSU9PIzNSFi+m6CyHupLqFqhaNcPpREc3dFyNF3w/oAlB7F/7l8UJHjPEx5a9xPb35qF9/oLq90jdjKTpSS6X3UvrHWMiG6LYFmmq0QzcP9adTDYZ+hMYdhFyfHdTsL1XGFYKlK/moXpNLJBbCJPJhe6bPOvDGx+/2ym767bJeky5E1RO4Fda3n5wG4rNRD1IA0v';const _IH='d3ab43ad1e8096dfec1ef512b318111efa717caf92b3fecc8e7118b44d678da6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
