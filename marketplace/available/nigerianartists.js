// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7GQJW/mxgARAHGlXVE/ubf9OZSkLqYCOQkrRF6Q111RAcHIhTpLrrvhI0OKSzhh2xitzNUoOaOzB8pBn5Fw5ihwNItaqVq5bQZ64ZwB8yOm08gQ4SuQJWwBU1VT5IqNYApy0OZmLAhgAyj7gM5pmCaYSzZJG7xUandnLZahBWM4LxNH1QOv9pbNMY73qsyMsbzitfdo8v8fnGdBGgzCgMU80RC2hJ9tNsskk2ecZu5+d8d3DaQxFTCPi1WFAcqSuufxQ43ezX4vANa7PXWUnXw0SKYHIrPx/Gf6v05aD5Liu4oPT3Cup0KkqqWsLg66seRAPxNw6MEUxi469RH49Y1uvzQXJ5gucg4JB+oc5G5PDtlGwFzb/5nQARuIWInSeA3Mf/0EYnL44XZuTlPjolSVumjUEYYpkaf16M9Ch6gpJ32xhYawhCUtQbKOaBbZoh5AunkuEAbtKsidKaewY8OsG3nkAq2OGXiWLCUCCY4XZHizm1zIwPgygJDURAwla5euVLjT6gVrWM+AfzgAjW2VnVnZbIMcarTy7ecfaYgzRUKINIomhBjZOkKbG+aDukALhAkANntg+ORb8KT9sZdgaFPHnWjG8zttqkdEJTjYcoemJryoCKqh1uhbPjshbu9+yIEI60xjiQniqOO0iRdcRXO83Pr+tMcic7Gfo+iAhiukkBLNZJkW0u5G/8psOITjHgYA2fIrfcjEW514wjAIvYZlUaYuNbHpdJSV0leC/dhVsn/Li7ttNwjXZ2uIfIo0BP3nwI4ZI6wFWQ4gx4Vwm/s/TNLyGS1ZC1uQvSC5QPDNaCflGtDBOXA/bYiOaadB5iTZdb31/H5c1UQeMXI1OnBZURunNJwXKd+tMhHCEjFr4nXqUKE7LNP5WG81hvbVhdizEe/Gnj4gA7uE7XW5AWtEPsPVQWxsNYyU7Hwj3As/dyjKXaqswvMXLp3rLiHZl46qeNM5V/Dfi7gmmcRhiNGvw1lMUx8k53+iTwpyMmBMcwTRzSNpjvo3FXTT6uOnHSfIOEF+iIhss8R0KrKcoFmIxVgN1fnYYb2OaFbHWYXq35OU7UR08XN5FsfXYOkI29qEdhyQxZFiyu5hp8weXhvebtVtm1Jn+UNp9tUnHH0AiwJAe4DMl48Qfrr9ocY1YbtnJ/wlp4g9YS4petdcnWH5GHCWCm3kGmacKlHpCymV+fnYapXOqpo44z6aqUoqZ8h0yqn9kUvcX7pRyHWfM=';const _IH='e65342c8076a8591a62a27a66c4198f97e72818426f3fab7b460c47a83ff079a';let _src;

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
