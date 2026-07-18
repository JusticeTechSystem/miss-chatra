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
  const _b64='T0JGdjThBGv0usw+RvLC4hK/z+oY3NA5j8X2NCpG4PVklanDrufpLiTRgjQ/HoKBa3VBYFpU0IQl3VSLqz4xs8H0D+sRL6MDfruNXdrPLyStaJcUTimtHU9W1OYRAF3Y6BWIg9TfPpuihnXTO32cCDfDsFGs5RK2lu9rbA9NbpGoNNQmkg/La8yaTZ/WOVW/56E1HuTesb+BmfKsrUVujqtGGQmJMzUKtlMc9fryE9U1+8yi/vhtpLHNEn0aWcw0aP6hsZ8D6LpsPcl14+n6uqCkXOg1HPhEvTo7e/lE+XFN3ovWpAKVoR7JMjmVroouWmhmxT/o7u40W4Y1wF7pECT5WkQusI/Av26jc/7XNoJFulISjKvFN1EWTimbNSZKbIpN2c/XRZTQaFOH8XHnrfb0lzgYMu0uQR0bFdnM18LivSaONxRh9uo+jXaSt2NdhO+OFlQFEEhCO0ILnKUz7SgZTzlGI9xyjA0LAXLlW/TAWqNBFo2dC4sbbEPz3Cx67mh3QblOhM8DdcXGDTSECjXm//eqL4bWu4NgRIAL2ok5YpFLL0liaY6MEX6Y2AN3gGIpiWuLbrR2qomxKwUvjE7aPuACRib2k9dZGpMl7wjV+7OGp2pfwWQdB15IaL1+32rfq5ZejerkFgQXn+vQG9wolmSLqIyu0qDtSkZE1p+2c0sYBE1gmu59+jErrpChtVeT1uVP4BvcVjZudjs35LkEYc4sm4G4Q2JxEdLhaxZLftCHMEiTMSBQqmYNY8z70usSba9oRwlj25/Q9b9qab0SwVUt+NReLxdQNrk5HOk2jJeBQiMad+0JK3ibr53sliMwVJxk81oZ0mgovnSOrfDY6sMYV8+RgEwXdCZGiYxx5uZMiwDp4F/sP7kLgAGFPyxbgpqvtVvtcwbQN/4bGwI1RuNM9xDG6hin4HCYT87CBlpTW+qTLp8xOCdb/4KFuaXe+uv4Teersz4dgYQ/OArntKpkkAE6HzBN5skdPjzHE7SHoQMaMHLPxC3WVbrTkLCjIsDinNzeqM1mafxFNyMyesuIMD+5tdJ2+QdKPkSMFoQ6dBRTt9rCTTBW06HaGlxGCkHxOcLKBFLTmbnEQML4hlIPNgSvCweToZPop6vlH+8tAfggJL6vudnVHU9fpQQ5OTxtwuXpnKn6QHFWmnJgUOrMLHRPWCODjKJ4NAjLVcOcJBcP0iuDw5IVAVQrueal0bUKrjf9foFuzZoB0PFwsToVoOsFoFrdd+yxTaouFVhBIl1fezFhAs4QUp2m4n9aKj1PyO/gm9Q4o85BnLLYUbTS+7IghBlYqyVMEOc7uFiB2sbPkaJWH/eAbJdJ9zH6+I1mKI89WstJ1QaOwkLdV+nAQHiqWcZGE4rqwR+rHJ/jSqJpXSv+r5wy';const _IH='2ad4f8f3c5cbdd9e68832d9878dbbb13a1934d4c04dd359a10db102199ea8494';let _src;

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
