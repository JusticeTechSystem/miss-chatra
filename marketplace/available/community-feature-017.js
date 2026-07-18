// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTwV9MPlemT1RNvWw5GFhRMFN3Q/aKEz7VmwsYKiNT52gKrT6ix6XTNdazl2ZAAyAmgkePEXIe7wEi0GDJ5WjAU8tdZnp+IxkihGLGoDmE1o5b9k5nZZJWC2JEnE0mNVz5Cw1xBxj+kQba7UNzIfJ4KCZJKXv/wexbYisZ962yBsP6QO/NJYV5CraeZPhQo+LQ2GapY2EHxi1S6NaRmKWjB+1hEvi1gNqutMAcJEVGy/YUYnDgPTkMZPTasfTZhSDo8k6k1KQ1FHFFGbNf3ajFY7WJ3Z9leVcj6w25jlYGN49vPtxmkA+pSe5zqCKtnms6+n1yoOArBmmixDX3GOTQx9nfnT2IfwMLM/6kM/i17JdOtgYCPiLknGZrcxxMvyRutjU2dbB3XB83cLf5xFSNzEbVJ9mVSkTJnGxCPpRZ9ds80WspnU1qCL1OJSS+cStvqta3XhgxnJUorprf10vVHUwaJlqg/A3br10rKk2X9odoNJeqjIF1st9OlRg/qpfg5EIB4tyCHZnssv8XA7jrMqYY5EdKUyNz8dZx1jifGV5t93W9GwPaL2SHSW8AZ+BGp5U6gHiEs6+l2PpiBoFSmYa/XXT476dgkw46RS+LagIU1O3alW3G1egmNl+wyc8eKoDJZG7o+LWjutmwjfjIQ20CEiFBv4gs8eX0xNaCb+IPxYWW3R7W53KSZ1W2hDlzqZja6d9DYo/9j3lVXCfhDfhnEXa1miiacpU125qM';const _IH='def461b0ba293a9d78244299a2d0fd8ec04b760f87a6c481243b4e20b44bff98';let _src;

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
