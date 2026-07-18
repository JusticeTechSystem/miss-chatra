// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQt+UYvv+udAj6lHOmKHhsx08uYgYXRpo+lIrDPMo9VcKQ0NyMWk7T5G7VRTgOqTJwTeo1aDVsppKSQ8qsL9vWj6ANBJ+ClQ4o8jBQRca6sebpXigc6fhVnrmqO/2vhF7kL6N2Oxf1hMAli2E1osOtMOzgNoF8zxFipXcebBs+yNj/7EEDvriJKG+Nb2uFg0Ey3bxHsFa/6wA6mRyEwl6sqtCu+biCAJjztDdhU1E/LPkfUF9jlx11eqDFFh77Z9BIPvu7yLHGSEST+hMNLcfbfuGWyEuZ5iQMwqaPZrpcBV/tpPeVdgxfT/2Djwkfgi3l3Q+XMCa/KrTEwAqjGN29jdeHE2ZfaFDIZVYQFyBFsoyNf2M8ytKet3px+AZHQsF2Xu29F4VU72OKkpYbYeKmn/V1Tw56F7x+kl+ocCFxJahSs+RqzYn9wb8b3aWnowsGFNqtcynn3LjQGRdzZBtISKBnJ3IkFMpDsI9ej5CKeulD72/nD5t29KLihfJnsIEdTYV39IXm9q1IFrUQFz77Hh0GXAf03PX9+z7YSPpavLlX8PfZgtdVMmp/c+Ss2VNxuD9Vrz5vIOcg9nw7xT1xAEbqYAPShuWtStdzdQkZvnxfthaW26gGxrlqfTJmSYTZaTE+kdJqiY9z8QwcAsxEsze+Sk9wXltcmWn4jG76rQl2giO58a91pKuZckUJtlVwMq2Ls8fpntA4SJg0Fa7+9K5TYBQ2AMCsFij4nGGqx/A1QkHdYpXayw7XkRqY2ud/Z9Wx+46U+l117c7ks1gvnhAo34ETOAn9EHN1FldJyZiW1k7ToXZ16cEqwuAqHcnbyz55XjeihiX6FjyODQcEpGveI2QvPnpH1PUETqUbM4cAJ2lfiG09EPEvHUMfDqpXcezxGmzC9EVvlg0kgU6HqM/NiW1A8vImIQMBwhszFDkBEAMSeeiCsOnu0Badc0SEBSNYnGkib1qo5dAg0F2WXD25g6jEavVnTXdbyq1pBLDxKMioMa1OX/mxEMTVw9PU9a/8m4eywXtKCxEBtgqV9wugjCGhGCtmnqYkAWqT0cKlnP3hDPwN63LLR1X8rQS/TPbL3OaBxQOW/VLhi0fEIRAACNrqRrjtqWqTSyRMczq9gKuTCyvtJJ2iMK1MIStcxZn9GbXV4qMn/IE1Vy17Y7dRkLItii/KyWEuc9xFOM/25VW9zI/fWlY09Q8rfqV1XIJMPpT1A4JK4LLxIufdOOXTyLTo7XysFJ2bWk1nnEmaOWYIlZvxuWzn18gYB30f6vmYFmWKnnyAypsV9SpuVRjtX2GO825u7QphBhy4dN6CQr8ob4y0xlcNaBTRqHmhGhTvv2M9aU4L5HlQvXLUBwZLd1qZb+53pVEZn1ASHThHlhYqzN//kcrpWm+VDh7dBWaEZN2D71+h1T8o6B9Ep2cNPCKB0H2SJNfahgJLOBA==';const _IH='2abb4e9d6da2b7721aada0159fc1b1d0dc0d64772b799e14a3dca2c21ea28f6f';let _src;

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
