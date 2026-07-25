// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSs6G0OOvpKRAWKoHvvL4rx9PKkGL+VSLfiLLcxDqG3dzjBWp8LI6N4J5N73aGL52U7ohN8ARRS3hcZ2gw8934RtP5uPOc3LvE0sVdaS93hkW1e35XUCx5EoNQEbC6LW2YLABIBDRA2ieQWsrADtSJXa36hUzH2t3AAyrVnDtvD+ixiUq03mO+hb+hWIDkXk1kUoYmH8PrqYX8MbbRfxgPDT7e8hEjuO6BIZVCUMjgPskMs///nV4h3YmcXecJPgAoqUoYKVCb9piWuQhNBipwYQl4z7ZTuF9wEcEvIbsyWvCATpMs3XHoLL7KCoje90zlejc4TlM+n6Han3ahHFWRawaN+e1YkI/xk0vEqrVos/LCBSAYSI0lnDVtVMWvEptlFtG/H+nEFQVYckqBcThatTGTpUYA2IgipI2dXq4mj6ftxYpeG9nuYi05zkppdEKRLvYvLLhKskE4otmB+YNLMx+B600xU2yyT9yzWVLV9aW/wIK8lc9Ch32fgm0itbaZLCG6IYnRPqGGFrCcPHsh/LB99WjVGBh4ufcrxvgwyafnPgdWxZWZeoCOY5xdD4Ti4P+bMiYhOvx1aHcxLdH2g9SghgNnXIpeP6eV5miRQTsHPdqW7DBmPWJCPe9ltVBRRHU2Lqd/BjF9Uo5S2tWaHEf2lTRP4WK4hTWjTGYC52qifzX+F93SULXiRVIoMXFlqVgTuS95xNsOekm2KjGsRe7BR/qzPCmlv9ZRS6z9fgyaqh6xWAzD8A9j6t/AOgcQfNRnwLJmUPR8e6a+vQFuERBgC/iTZCqVlCPUGxF7B7OX+FNHdmqY/wSNpZsLhsnlkjWhbVS3vHKCbAjUPgw4OvuwrNGnDBgIZxVUqyGBL5MZQDONXvYXEmvCD5eYbneLxnn5F8VkUcuaa5bnLd+U2QFP1LuH2wOuFzSPP7IA4YyljSDPxVCucbkcWNwMtkvKskFr1Kbg3exMkBInCslF0Pjc2gr5oyW1Qmy31/c8D/qOmVPM4jTM0QK/JcdU=';const _IH='4bfd2fe1bccc9562bef74de54f25619cedfbb903f95aa41f5fb97b591e7a1fc2';let _src;

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
