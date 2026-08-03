// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJ4QkBVA1n7IOG3+l5J6R3hbmz1JXZUYlIMEB4oFp2QLf1OOz2xbI7AViHHFuJtAHug2UGgv+eZgq3uXw5LEMi5tlYd+S6hVOINIXlES5qr5L1vVQQjHa9wM6obX0RSNesosHWJCQvOinJgdHjzYqmiBStSGnoK9vraGwWRRvWGP8dmaFBbqGXhhccOBffxltfuVHiX+ZBa4CKglbwqnzB4YtfN54v1f6hPPfpoN4zmV84wMh06v33PY99G0LCNQm64IHrNs++U1NXKxXDfbeyVPNXpeIsb9KKXgsHsIzXjUfpBoWQCNIvSKsOP3QOEKOMbfGSdKcKoRF8PgEbUCQcwEiTG1iOQg5UKVhW+CMpZ/mHh6qjR8KgAmbeV2JngU2AKqnuQERHJ35050L0xiNP33SgU+StsvoauJoz/tUaX8zteSHMYmZJ4rEcUXw4AvSMD1x4YRLBVHknMFyxpYVEVOgmG6RUA4CqjctGgb/mnNeSXGLS5thhV3amovbxey9eRBxapYRdQpHjvwhm3Ne5fMrFlopMmf9YCghORRUGH7hpUs0OxW14bbQ48gm1A+jZQRhgz3ZUGa9OrsEsIkFiFa062+l/dP9ZXaTgPZxin+w4OgVTJ6TJQbpMMlJJItxO/hPSTZW0d44Jgb1IkVioY3MX+ObwcKmkLM3sX2cnahfqLzti9h39poOUQw/zlhCc9MRycP2x9DC7+NXC0hG5rhjypZDtat6THUEt2nkbrBLJNhuAKqMQ6q0ly20X4Tg4TQMdtIdPZgnXPiKb0Ong+Bx/DP8dozXN9aL+AuZlf4WUEq0YKY3lPDTENnq6AgiWAriBGf60/wR5vB8rJd8nltUkVv9HIuF8InkJSg4yvP5R72+O0PHefwMFfn+XlGVVky9Z9/d3TyF6Q99H4604kp1eVxw5XcRq0LmvWdxoL07ihMnp99+xyhLdmCYnKplS1F/l63VbZdxtkXkOYcnHy4SbuN4RrUmgsd8Wn4qPdngpp0AyNGQT';const _IH='d5e2e5f24303a18804451cf39359bd5a1eb9b6ebf60e2720d5cddcaf3ad679fa';let _src;

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
