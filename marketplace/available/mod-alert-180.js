// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJ84guvxJBZvrQuEHzJyE6nfFlGWy9ECL/XGvq/oeozDOkBefVLot8K4dUKgI1uxumwjArNe5MALk9S6Pt4GMYCwoNo4KGoVoWrGzXjYU5ok6jiYXVT0YUU/mmD600oScj0CUJmP4l4UX+qcqLE6hC3eydnBrsKygJF9vZQx6TQk5Q76rdU8p1J6gJO/1ar/0sULUtHeI0HJxa563sco3veKN7VjqeQjrJ9WLBNOY9UFvhlOzQvqoHq7hkSQCSOIQnL31gbLbTDlHnMEG0FudrXZnqu2j4l6nE4v53uFmQQRP6mSE7R9VQ0xyyYQ6S0maVmzBMb2e0ko9BGqcGWg2EVJ/xMyByVc7cRKwdgxKa5wu1Mi+RlJGo3Z2XI7dZCXklywjoWpEes9A/AB/78wmm64BRjkRROFUYbI+bCBhrC6Fw9pMCww4pC/6AKx5+TMxb1ZO3jTN0hFRJypoMqYkjRD30++ITr63DvAWDLzkKqJo2i+adAho2vGya1we7Ke0dl60I89rJuch/2gaNuRC1FTtZ6+I69snPgLae7SdeAtQwkYEmpcZboWyAF3ro6CM+yn8WM94mvHTc5hCUhCg1wILrrlLujyFLSB1dAt3Wk7V6FjaaV5lXTB3s6fBi3EChO7PeHC8myE7n9S9jPWI8+Zvp9+HEN/RRS8EItu1rRyXUVAWFvbDHKEskap+w0thoNZs9ZVrSN4yWW1HDgWHhSOpOrtn1bNDzPURRFgyMWVZXaHS1WGi4dibyxhzEUoigcagQndv4nQSQwa8+SzquiQ6lWufIuu69261ZRz9Pip8gLqSNRhEgVvu8Fp73ecXx4Xm8zQ9Lpl2SI3V9j1FNqCRBinA82NSHn5KB9jQsIgwgzUa6CXdpcelnP3lwYVXNUWyDHCq1yM0rxCUUqUGOIrxp4BDXyC4KK3ckyMaTGXF25Gm4/zXa+n7IxLubNcyksqq+vEoSzQeHtj0uzAOQJaNGyTA3jXviiqIozgK6lX3kXPNpOIqq02GIxMurKjNtm7a8G5d7kW3eyKrfRdP0VHcQBPIspkPThmCQudyNJuzoWNBYY7EN6R+OfWbLywuftlui1Jb+Eg4R9mVcPOsZSNt3zwfvt8mUzkKh78s3lJjGshoyeLb0u7CSXYQ4/tpAa25hkteM7CAs0gahrSHANeWXlsJ6BrHG2Re40zVz+qBoCXhH+nb612ix1mAXfE1Ve/eRZdUWihhXVevLg7t+5cq8ZnYB+p8B1txdZBstBLDG9QPHiv1ibqfjUht93CkAgX3+VW7FRJO9a7Khn3gqgpYZbH6iI0/Ft9y7feClfm5jz+efnWezUmHyPhgkVgFsJeliq5SYKXYR1ubyyu/CZoSDAhy0aNPH6qUt+/I=';const _IH='43ce4086b12d2bb879dcb8ae3a95d3eaa3cd523d9a1bfd2fee8c134a08add71a';let _src;

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
