// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuit5lWG4OmhMpUxmFi5nUOoDDnSRaJxFuOnL3TRsv4O/t0fURaI+YDpnCOAkCNJsJmv/FGiaaZvaTb703o5VKpbqZQJ5Tn9+kRRfS7ForjjQ7AvRt0Blar5h1rjAsAHdyybsKJOUg/RvVGYt8eFtNALo79b0mjCSczrNetZfw0MoDI6a6xiuOdy/BFh7qdiXkUhvdKnfGvw9bSzfY+l8P5KrDJ0BPdo8EoWNJvFY75sXdpaMe2294K38aHzu3+K+cMN68Fb60xgRxv+9T6pkDfkkEwzS6ilrHG0l/0bPxBpqvjfbE51H3ZR7iMK1+ma7sPTmLBRcI7VH0zkGY+OQa9VdS4+u3xa9f8vD68ZIM5GD1OD9d0tdq4tSypKn8clAaJOZFIQ8aTOIHuIwm5VQwWhtQs8gScMH8yGUH3z75bsU2rKcf6kApv6fajxwxmBabtjQO4W3faFYemDwtHSDn4xQUB3nGCadII4fmPcsXx6zEw+lMxJ36SqG2ZgMZrDKfK1mYHJACyK9G1hDkCBOB77fb9Dj/d7Lc9RLa7fRzsBsszA8T4VbtKJaTwfGeF+rMapUt7gkFaVSQd8GhSKVdd94nJ2kOOrJ8axa8eLPxVqGgbu8xzu+c4UWngGT7cn9Bocg8YHkcrA0C21RMkpFDWjTlFAOUqBUQ1VesSDjAv7tO3IgywwgMGIK+9VNUESqEtIPwPh4rsai9JthuwA1RHbrQU/lQEZ+i';const _IH='6bd56f380625e64aa997b66e49bcd01a8025d7b5ed4cf30e476e509bea9d3b6a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
