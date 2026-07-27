// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTTksWuw1y/ZAMLAh4AWAC4HGwLMEMQTPWRPMYxBnd6PX9mK92nI8isSL2FbDRRto7JnHPRoweyJWx5CeOiDMaKJGmkbJpPzicx+paoyHA8WtHXgKLd2tfLIwsWA++EF9lCz0gZHdpZcqSDnNpqMM1S66Kg5QjCmI2PYfxPhCbTbYCNLA17ieZDqxQhhXPrLDyQShC0b4X9Efd4q/QsZb96bdJyuSJJ/MM74s45kKqgYuJKX7qIXWy8HV8Ae8Z1y2GT47NHdRDqdzDaehuSVcZM1GOM+LNpn3X3NMPyLRVMmADyHLBNZKgTcMhmmzDE11POQzENsS2DXYiZUbe0lVw54JGh/VTAW8Tkxy5hDN29I72yZJDzwCAj3ju6fZaVkCy6kP1ccofUOz30Kdhv+s2zVZLHuuzTu+MyWswkcQdrI16HvKqCzHoCbl2px6fm3tFPuFfInpFrMkWy69ryovfdDbZNQAKxVkFba3xraZke2Xt02ue2xLekohKwQcrcURIJcJg7/Jl/Ra7uhoamtLLFp5Kvp4gQcMqm2Ie7nXjBeuyuMD0CJdmMS1SvZIIChYFc9qkmXQIjikHhLxc1iyOiddrdB9Jkr++iQMGYVheRpAfTFOFx6yvi8kMrkXIumnn9FGVFe4l4EOCbhRZpSThY94iNaZ2IQvVGtVGOwuhreGcDzIsHYvjD8ZeSbraGd9ildiKAmEfISYaK/BWyskz8RP1+J/1Guy6sLVVBw==';const _IH='36c65dfe17cf08e9ec5d2e1041d0aba6c58ab3a6972dcf1d502a1a09b55446df';let _src;

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
