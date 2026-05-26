// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8G1qE1bXgpMQGgVwlXTR8EGG5TF2DF/Q9zOL//4PCLzoz3Id3//Qglvcr4k5G/R25iTvLrdetwaNTTnn8h9GBVASr0uB+f5VtytrlSeRpzwk72nOHi4Qo+jnV3uGbM8TJV+jfu5V5vdmXPuw0AyU5OLRnljD6oxgKGwiwOI07SN3WxnQH9mDtAajOFgeoXnGoDVDW6OZPeCionmMz24yufo+rh6UGtpK7FjW8ljUVsuzWfC0z2ocaymWs8Rghb9BCKoDB5XHcrJrNWKGpNbGRS62DLVtYW7X3DAwLfYAYeO5KMLJ/SUqs41pENyjPFfNcCQiurAx9SmUmlcqQ8E0q7QbcBu6wrcjDSbAVtb9gbRCmrwZyEyHkhglYMAHfGHsasgYGxaweXrh/JUXb9HfvYUgsyEM6GSiRGUBLW1A8bqXvQkBOMnLo/aq7fvzpejTWgLU9aFkNcV4TBt9HrGCyYqvlUhaeGTizvozmBHuE5Q8NRhBTXbkIDitW9Uf+Bdn3Z2eQgSyCz5NRBytULlwV3Bh28A3gKiXTGNjnNYASCQfGbGsPETkbrzKQGeQ0QLIL+puuX/lqG6WMH8w8Jab4Y+cYvTafDxY6HaM9vsjdTvTa7oAzyNzqrJgl6d5jw0nsLXkIqV+87JJ5oslMhU/AJuVWkM/BEUqj31CIWmRhq1Pts33sCwMzR5CT48SonHNu2GAyVGUhLzfTCK9bwZHxVDRZzlLAzDC/Bg0vwy4LL4IYlAS510k3C7PqjzfiKn6EKkPoIldszd1Oidfp1spsmbl4MaXcNA7sJAhZdj8p5whwrNW7LvJDJyOPiQwhhfJApvGYZcZB7sWKRz94BoVSRbGZKDF/Mw4vX+NeKehQLm5sIN5qtEwX7ZyXstWd4UunhT4pymX+pQDvOE3kMFn0kJaAZRlWQIJDg8yJ+2kFDbuU2oWnGxfWiP9Rb/1JvaBXoXyiSCGauZ/TfGeBtS2uBGGKuOhPc07rQ1f9tL2f5yTlHTb3+1fwFUB8GoatoaJC2T7p5Sk7+x7N8v0HMBIr5gqp1HWpV6vBw5Nng4thbvkotk2L+G+Sob5dMuWl7sTwbq5UB33Dq4LYnGSGX0+p9GUy1CD4roAQbZ0UkP6RQtAjXwv5/mwAphQKIjFX1qbDkqaU47Eodjo6knCigsabvKpbmycU+5CRsjyqSjaNdaw1WQe9xNrEnlH2OjiwsQva9xqSYKvhx2cKL0FGwmnKXhocECi84Eq2h2DNuAdfI3oUzUgkS86Jv35XwjwR0Gk/5MBEQPzQSYHwv2kdshuAlGq3YHJHyNw0Nsm55pup5dFG6SG04htYVXEn+PEzkuXyyL3eUwbzSsRgOehEeyY8SkJpSFhd6Je9rm40KTD';const _IH='77a7db4119c790797c78896d6470906f35de3fe9c2a9b6539bf17b9e8b93781d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
