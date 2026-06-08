// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9gQz4o0slTERlFGD9FyiW7VQ9LnF4glX3iRbVAeiSFVQF4EXGEzwhCsTXi+TTMZsMhxaMZ1anK4nqpHsUHknLmpXabJAECnixUqzlHMRthxAPRgkHcUMy5SvYVf1lHN6RoYHIUmlJABQHNzvdCZKq+wK+dxD5OowrFMTfvA/hcoZiJRlOMQRm8vEOeisJZUjOTVF9v6u0PIQbuOGWGWeuC1wjDC39GE7M3k+jwYGVJDZUwU9RF+JknQAfwHv57er6jgM2KuccBCxyknBQJxPRM7FRfEwfpiTjmkFsmxHioM1kcFwMttVrcSB6UydQarxGbvZa2y9YKfxiXnojO9WZpOGlx9VmD8rd7dth28iAaiQ0lHASmehiIH1qBQ/HbatzIWC3+9gTPIksVceqJiYaDt9MhArqD1nMGuhjF8vz7Vd7PbpHE6vE8R04hBu+Wq2GTR60n6Vf1bmGVHZ3MEn1LGCd+j167H8nngVaVBS4oXGk9xK62pC5enagEyJMJVklguLsV3kAa7fThWsx5l8xzELcTmwebDphxUZipBMGaMPldsmthghZEekCFkscDpjpigCL6ySz8XrenM0n100M0pJP52BzKVoUBUZEA+kwKX3JaKcEL3pEbcOhmM/ZpJwGnU1rOGvUP0FiHLV+GsiXTe3fBNEcZwUEIvuEjXH3ApnBKfFo9Wo2DXXIQi+oWk3rGw3l3gKNxL3mXxhjfoXiuMyzEBdhfTIUSSv62Xkg9ua9gEml6VOdbN7iXnx3va5xSoBKlUzZj8tiu4FtwBjDkPkbJtZvxHmMxQPgnHYbPmU9cyhZ3DMk5A4XEUseNw8oQXv+Vp0LFqU4RmI6sxM3GdHplb44AtJj6ibfeNpKHJHnFg3+gPSleahqQph4NR05NPHEbh+aglECpFKnvYOO//319Wmk08Dh0VgB4D9gCJdJa20QBrvUYBYJFuqbDW0U78vIzr8bZerfpW3Wa/FMsrdiAbiJVh0UeZksgyFb4Sdmz4gPQmhXuAMKR3J2rybuGu1iailC8reBMmbjF2WQXN3R2Xgkz88R8wtn+wb0uDIm9sZJQxpoiYCgiJhPhzGe2qlAk9Gcjf9SzE7I32pfQNMmnEXsSipWItNd96EAhruhRjwo5tG0XRHp9LRdsw8hC44hcSDROHm+7dKAtCf766OcGA8Y7+rNBnOY5Eh4MW8QRPLlE4hPcPjr5WqdMZJp8dwX+K5J2HW7O+oy372mSj54blQb+EbsqX/6eAYjbddhY6RCUZBHBsEHdVzXDzaXisFxRArXpCToIWhf2dZWxr+3WqXpJAQ3TN4R7gdfhD1PNbodEQ+/5xEOy2aoXATHmY3S1OnOyaFhg==';const _IH='ef7d2630f35032528128eaf7886ae3673c28812eed191a90606f149376d7b75b';let _src;

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
