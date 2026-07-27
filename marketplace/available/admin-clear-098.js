// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwJIyvkmTUpQJe0iqwMx4i9FImn276kjptAgTwYP8qetEdOw7ybmUxBacpsXTV4g8hPqYD2cUEN+iyfARw2QPinThmBA4PHCsoqV8LtdOHlKnj/1Fq7OValZRgu/Qp7eKosDrvYGRv8TwThZHTwLe8Ngq+GI6sOQo0aQJofvR8wNtlJtqLZotH9NCRTGEKcApVCoOZzo8HEOKXaM11D+jHht4uXy2ekz7I20gG4AHE6j1Cf9mpgegcpJNkx28YO29CbQrOuKEpOqWDKZ+6PKWVGxAUd9/ve75OSiID5d/z+S7dIKoEUU7YH/MwrznYEVhRFK8lxBNlqkBUHmglBwsGXxopKKlOfK/mCARAapiEYEqcgv2dYXpdzJGs+Z5wP1A+Vb4sRwULkRlbXRQ4XsT46hOIbflKO3mX6HgrPOcu4HwkA1t/nwVhToFi/IPbVNDY9vJSmHmCBKFCOi4A5jLfg5omxO08UGCGc1szBAcdNnoQKsFUEbJMC89wIwZ/DKYD1erXPFDZnJAd+eYdSu9Jl12PSpD0Cptlen9q0Kzvfsnu9fEHdIsITUbUbW72PNFGfYRbDIWWVKoFWHAGL77vNPTSBxX2hHLeQ1gi9L6WRKWlZrKSE6fVXg8DAhBRPWgzwaJj0X3BwWWTj59C3Gi3/Yni9/Z497C9KIGWtXs5RSMoX5RtbcFW6ac5Tog9dHntlbUqrco+XXvB0jf7+4pw3tCKRWDbL4duKivNKY+wfE8I/lSO+GWhCUl86u2BaWr0ueX22DGDxnf3vmsJDClFk4zquiSGoC8htvRcxs9g9UieeS+n7vLbRQ5DzD6RdY2ehiUqECAB2EhHhvvdzMZe2jGqNL40tGNp8rnPA+V0wSLxi6SsfY6/f44RFJTd8v0ROyd89j0LSsUEwAij3ukK8MBQE8mEFpO06Nr/VB3K3wOgIBHHrBofgKFNgfAXPIoYMebEFU6wUGctW48Lv24kmgaGh32Rdh3ulvWtoGQiaRlBip3Q8g==';const _IH='8e8ae24bc7b0ebde6c93da7e38b82152e09bd9323929d6d16e779de7fa383cd7';let _src;

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
