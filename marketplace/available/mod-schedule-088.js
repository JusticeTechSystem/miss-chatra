// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6uXFwLsc/qcRPMFSmGn1Tvyu9vkcYrL4JNpwQKtLzvTZY0dco3tQZ6II6w8NPGHi2HHWy6zt5hQamx5AzuKMm4T0n1cx8PH5yuXMRKiM2JQ8t3ZL/2v/4J1PIAZZt7Fm9WkbzsFkpN1fFkYePzObFMCK01ZMv28IAlO1TTOM2hMYsbOys5vcBuKsAm/our0OYZMQ/hUCGK/3i027phMs3l8CdNDfXcOc97mLQWHU/k8Bv/OOc/y8zlc9A9Y5Y9PmGJDlD1woXMChIPQKUP5DeEKXJu8K9iywVKYsRU34nYVfOFjjm0Rw9UAEwM/M1rcrWGomMTOrHf+hrCZU7yuUYvwkRojpGixN2YA9FUnNZZ7+NcdyusrEiGfqCKLU1XgkoGyvdT7JziBDGyUXJ/R1XjN73Wr6KAla6MDETS6MMUeDV/iODWfDtXlP/U/Fs7SGcjxR6r4ZFrXfYeNA+ouE9vK4ldCj9e7T+eDU0XQUkganeFWIqz/ERHyXDxjtdpw6EdJxEWqA1Xl+YqVKiC6Nyoqy+56+592ohGipDALUFDH7sDMWtPSCwEKAkRg9gXO9IRFFkuD/Np3FPwGlN5M3KxW/iGZXY2zqJ5rB+NOzLWMVa3F4Cu5nTIRNrnVPdIaiGvpcK5EfoXf7LbqmNygWfqgw5sdVx769dK+gQJtYj87fvwYhgzP1qouE14/GXSE30phnt2Qx5aooHWxY4dZxlkPrMId13g4NVECzu/+aIc0OWpjPRvAg2n3mLQLjY02wL16V0B+hXiW33WBc7UQszKJ9s6tgPzPDZwUZh2+hsLUDMmFCr3gZK17LhVrbMiFeP+OVZspZ1Taw9Gi1k6BjX5x2LNN1K+xVPY8Pi4pmmdrNH04EFQO8O5qgHMo9lx47kfm0oXMWertcday4Kw2G8QEBApGMrc6LE7r80FpXh9wCK8NpvSWKvRE91L8LLnw2EQmwjv65atfDOMonzO/D5+qKDHcHgNLiVQ8h7snKoddnVLil8xMVQoD6Ut/WPdmKEy2YdnwB2C3r7yIy+Knf3DgpACficu/STWXV9as+wHLiUvHHjKV0jlJhSyOeAN6Bjqo4D1S201fKBpNRndBIEUqrTisvHKoqvwXVe4uNxX0B6a3oDU+E1l0zlSpCCMuF3IlFQfsL+7ygndT7FQbLffaeE5orFlrO0AzSv2yJWTD/UZQfIUn16t5w/HNeomfNRUcJ7ly13qOVLI+yPEicU7jxuES7NO18wHLmBWqwLGfW8bZKlinUGx20o3tKb0fXDKWm0DiO9AEv1je3IgHDYCUWNR8NALgKvRe+NrN4Vg5iwovWIk3s9nYaSykBnPI4I84DNXJghguJDpQvAKjxQPWz3/mmKZmvdtwASaQ9crgR4inEWrCxizZIZeOiUjyrRpxPUrDMw';const _IH='308fa20a8e490bb9abd95f3a9908c1bd71900ab38a36f0bdffce86dc976055f6';let _src;

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
