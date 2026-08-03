// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+ny3aUcZ2flXywiRG6t+U5Kf4zjF59sP6O3lksvRom5jksFhY9etj/nWw069XcWUOW14d+e7OBlLxFGi2/MSAB2N0yV6QtXSW87vF9kAR8AnyL+A+Oyd8v+0Bh2hV5saCXhlzRaNa6+9b9cBp/sJsfKOI7FXZnKuGiyKfFwF9H7fbXPFJOMLUz2ambemeHSrwYSggrGUDfE4hzfxQU0nJywTwjeFETDWFn9jxvfhCik2ED7A1zncM7+B7QH60iDPvm3NPzutiITUqm1sNmkwdDaVseJtydWLBjma8xgU2RTWJ9q+jMSoalMAJwBTctLTskWEwBs53wnlQUkBIii4/6r591Q8r2IybxAqTV7LM0vfWE3uy575ExksyjTbH4LBpw+LJcWmLNvGPP4w4PVL1bOoYJdHKMSWq7x6MswKm4LppeyDXI/ycAEMDG29ZpFYZF64D57XvKumQ3WC8znNF+CDltkTL3F7fS4YBgVSojg3o9Ah4DCkYidpVswE7yqNPL3YruGsGGwSvCG3vEz7KdL3fZAwuTTY27uBObObP6crMQYRgyaHaR6RFBXGukP1tuI5Ax2LyeOMzgGQ9jT2bWxQ8im4vYkEe4kX0eNP4GmLglEphhhJptCVM/0z7RMN52lW4JcOty/UE2brQjC5WqBdubPdUCy1P5uaLjZvzcwknT7BQJNRwdtC2Ip66cdlTf0fa28ANgi7xI45AFZu0eVSChtiauSuRYkgBGwVcUB8o8NyTe56o3udQolgO/5msaSWW2+MKnVN7wONNNJQmRb4/XD3HBCgsVW7yms1xCQidlvl9WpTyjRLZxe6OFeGUgd9pXwcCmG7haBhEM8ZeyTahW/0NATFnRUalSJZY2gzHFrywMIpRt8w7G+Hq4xw+iy3vUXPxpUnisHtwfCI/8SqOzE8PG6QhXRHSf7xTX4CZLCqVNincFqQfl7CTO9Ii95GcmcrQNySUwIQJTwnL1Nds6Fs7BmYjgDa1xfIMxDRTKG/ryE//AxKR7conGnjIt4WVHMw=';const _IH='a2b5bdebdae24b88831055dd469f4184bc0b09661fbfe264e15784d5501caaf6';let _src;

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
