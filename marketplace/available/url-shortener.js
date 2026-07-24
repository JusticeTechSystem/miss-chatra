// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0YFD/1apLuxZTVhCXnNzdk3HT7Oxr1+q7Hx3Kfdy73sCqe7B8B6jTiLvDbR+Bb+IW5QFZQ47u7eBxu17HoHO/mtQaCWQwjf+6A+u9Y5zCg6b721FMRpbL3yWRS0UjK+plvlMK7r+tIBtc6D1ytSbDDrD1npbOB8aM21+p5AEymawDaJFaaLnpqndCrS3d+DBa439VLMKjToRxIEMaHP7ggRf4TupQ3+E1rUTYL/NJ9vnKy1+Y64eBKUHSNFHacZjJfziqv4ZKi3U0CCLw4sTiNO7f0ymjmTVo6z/ECzWHkLVzG7LW71/fzEDm1dN+WDMusHDid1ty37GtY3v3EAfCfI4KG1/qjk0xBF37YwOl9eVl39lmRLlNjmhvqPAEdcn9A4Sa19RFro5VcKVMh7gheIQ0OuqPOpQPOtfvGBMJ9wlwLX4o7b9it1MBwkgz3J47jKuyA4CcUcIWZ5U7S0FrA/BdZ4ePT47s4X5qvy36kMnW9fsb6LMlNr259NfLU407mzfhc3eQ2Bni3sfu/5L/1IVcmlg3TaCV/sbDkOsR5Y1q06Jt1FuMSBEKz8r12opfpbEiQMrsRnYeC1IjoaExIJCXRtRfslUpdLNMHsQhm4s+JPGeNmnBZBxOS/z2uolqj7XZIWiH0Jna+1/DWdOebUyn5bG9yCbO4LYx4CKo7DK6HUt/jXihEq/MPm05+yu2+cCdNudGydupysDwQku/z1ms1vpv9Qsf7eA7ROFYSyCeSj9KQ/OKvktpqwgP8s4lBCQ4mZe0Y3bAsuXMloNOOKiXI+gBA5pxui9uMTIAIFZuVYjZSqpzzqquvD5LskoRR5K/+k/JWw7JQbmx4nWCC/wo3ya5v2jtveE4sSj4b4HxKNP45n2H3GQaSiqaM16yhNKslr3w65jlNzhVINTcZLgKPRYtpV8Sjax9OWEXmNtkatu8o+VvCEtfC4BSV5UiDbPwmXdJnaO+m7vK5nlWz/gEiLVPY6Xg1d9FmG55ypzXvVi322u5fAdSJhPOm43RZLkAwQYqoDmCJPpXQjnSOj16k3F5W9fqsxUyBRxfZoc1VP0Cy3c8EoXVRr4PxuBTgdEtE+HigFTWeIbuWd+zkkqNJQXKWhgwX7lKdylGL4wp6XejIwqywcw9gCTNPdAprbFEeSAHf9+yqiIgTZJiwfS/1KJaF4gvDoMKBR4fXeO6EY/REvWbGT9x/i4F9Cy7MHOZI2PHVODeHHlpqVJtnCWI6UTJyh33';const _IH='c80875e4db1763197682ae8d466b4acf48afc86ad78db0590f7efbb2d80baebf';let _src;

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
