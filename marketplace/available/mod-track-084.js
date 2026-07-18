// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKjenCPw7W/Iew0Eszi9TZ0SA6k5L6MYEgQmhTLx6XUs8wrl3K3JXh+EXXUWP/QQ3aHaVhjWsgy6+bEtZNIdnO+T2u5In7b164uLq/CsTiCGPjcqn5msrcqRrITfWAifJgyvysoFVfi8VQ/Rnqw6xiiIyPRjJlELMcIKLzmHi4MVKaMd4eqyu74tC5ekOwMbwpBioBhFoI/BsPPJaYa2+MvfvgnkbQCDU+gLXRFyWbGh5F4kcb3uGQK+4vR56rxIzXcSCW8FHOUJRogc3x0j5HXANaTpvjrijAKnl9igU8xEWAp/syrTIL/TdZy1datNMLpOZ+aBIpuuBiO7umfsgHDbhVlovz4lWd68zmSmdvsG/rZleTmAC6XLVSVoZHMmRJdILCsrN+bSS0KOa58r7D+mOe5kqdw8/ItnvwsxfW1ovqjKw+kr6Uww6jQuVmiTzI9uU96umfBdWl66GgN6D8eraoIsDRUTh00ddB/kqHa9RNWnlXrOx/KTdMvZ2U0EaM9ZHbM1ojTvPFZZ4r04XlWV5Q55PXJuTwtrMsBA9XnwAFu9zu1EBYALh0Z0wICtVC5zndfCgkCRNVG7QwtxS22jxkSvAcmwLGFpFwub7vfH67TloVf0n5jVZY3Hgqc3BuBoOfJj8Hk5aWZ9fzvqGCoIrsTXumPkxds5o34Pf4juwz+NfKZ+pZI+Wuy87jFZiRme31A2wdcEPtqXQLahL5d6RYTthbq0/lAsFBIAiVrHjuBZrN7v9yjDGJxfoc/r144RgasVlwH1I4s+uGC0J6oaU4kplu8uZ+/YYEZOPCcqQPo+9MxtICWvI3Z8ZxTQly7DXOHystwtpnIgIch3y1H59uBKLJAcFAyrt3O91z/UEJLlsa7/v6183TzaCEV4JfEnDqsJbUdrJ982F+46gMC9uWatquwRrM0KW9Qrcuzgo0uogqjJSu2Alqv6pqxEzeCXcBcYnYJDqpFmgxMFW7DeglLns9EIX2wSwZAgXw2XNsFmixCqAFe1bqKsqbRoWA+gBLbzHLPhie+qf0hxuSnGgYgL4ByxDUtNk4rUB6sNQzMm4A9xdsW+cAjXjrO0FUjyTwEAKzPmGNw7PwiOmsYiTYucVcXQFdmiUDP7tm8hr1dvO7xNLdMAkIVQn3wSuWfwnVUqK5hGNEJ4EXgOovy3EoA0qk3NT0UMUwMpXCsStQ+zW+BS1/CVtCvlLletL9wGqMHSKEM+NQGULHcEVoZzoSv0oJifQ2UjqoZfMjLPRIxRcqFDR52nri0RJ5JaxxUzEFWcYIaGBwLT5jq2e433HBbGJ+BxuBeicssUJtzb4gbaRJK6InqMo5pFj3nsU8K02fzWLvZiMXBcs+BM8t1MEX04TwZ5td';const _IH='a15239a238539973ddfc3e9736a961f74e712326062af08a40da7f42c8d78012';let _src;

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
