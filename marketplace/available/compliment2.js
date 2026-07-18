// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbQQa7oQiAwudyEI7Gle0eWOtpU7DBuheQEihgFci4quxqgbM3Ye2kVrqJb94NnFBBk3P0SC8h9sQgtbJFSVXnXCy4t+FpxqqF1nYFkv27vTcGNqcu3eJE4FJ5MRAoq7Wv/L47/CaVPO+teMb5BsGpotqcBymUCipbT+vBOQ41yukJA+Nj/6qY3BqIWl0HeZxXOzw+vWkpZFuJusjCpswJe9BTpzgMyvExZW9c6EZS7bxGZg6+rWpbg5Ufuw1Sp+GCZxmTTTJnJT0JQko4/m4ss/UtQgWszE/cd7ErHE6W258VY5dgWtgz++x9Goe6z/olhZFBSBlJotKuLgaQXtWks34DQjJjEoGfXA9fgibjsW7opwC/Y4pftsishxJtp7PxItZK17h1Xjihzn13dloAi7tqf54TIkdQ4Orf6EfK50mTh/niaOKlHeopEQuYd2nt2tXK/b5vRk9LlBVcaFWjWW6wt3gV6tfALmFv/G6pOkoF0t9rWfKJnsEceAAlfun95PQKOSY1PrKhtTAQ/aTJYyCpkCo7kMAIq1q3H9u/0URTl/bodKsRGDlJX7zdlipDaG/7wykIeaWaCy6C/073lo9vUQTWYffc5dHARUPgz2vvzEm8F1fNrIKtoiPkGZWq/bUJB0dakFvhGhoVNxJ2neUyc+rMMg5NyTD5reftJun8fGLDHFDT3+gEAuOKwYU6Xpf/csDtfkqJxF64D0iaQbJBzzSD0kSd0ejzJE7oiOP9FQ/WLLUZgz1xznV+aqYOn30rQIx2CM3DKYc0MYLSI90DL2CouFcJ7eOrh8GsaRBgk+fhONy7DBAIlRQtPRYIxgJB+LOcO1gGXrbvfuxz+4jfmCiqn2dQsUS20koa7DKakbh7YVoWnw1Mscdq0F9nrX9SnkFzlyQtOmYAnYF9e8hPvH5FJoe0xIaq488bQDftkSgTcLXRI2QaCwo+BMOmZAUHvAejj8QdoNw03I+24tFi460xFm+KoMEMo4gniYh9zGk4GkyK9wmAGVlrqco8x6lilqCUbn+Gg9TNLmeHa6/zy5hOitSCtzc3MohYbZk+z2r5LJG292lhRIAX8piREtm9lLVuNEG5wxbuwHBRjaP6LSslYu4qcVrXLxiPVr8TvpRuIzTuRmh4ObCO6NUz4efnCi2U5unjPspPfk+hX7nlknIPyqq0hfj/K0jdUXAHMGbYvmRHEmqoe1kgF3uuViT7tGu16bwyO7oRJFaJMlgOZEs=';const _IH='066d618f6585de469b03f765834cc9a3cf1fa4417218e0a78e67f162758d302d';let _src;

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
