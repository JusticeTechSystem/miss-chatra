// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTu5NhOwVaAVacXJtgGR/TqAk9ppWvDf+LTNX5pKG+aNnJ/mNjZFw/w9qAnRk7nFPBs1D7FvPujLUhSCqQ6RKWuQfAJsX2RLQ/9DJxJ/eA2szoNl/SppAAzAvohP6iXpuOkUkB26rTbjc/shSSR7VaHtq1hCV8EhD1XjRw1eQgQhP15Vzrk0jpQA/X/mGZv710+68headT2MzwGNFCuYlab1pLHpHY5mNMvs1XBCUa2GbktMM2jT9GEtBArPimDE+n/Ghqvno4x1Tqo3iiqdi3mnzubsuSvErz0OeaNSOwRGJ1NG9PLi1g1wUn32ba75MfZQRG45uMsi9wmpn4GsjwJ21QEc+iy23VNCWI4OA7Wwbx/ZzB3DJIzGlVZdqfCSVmp84ZVffrC/DKWemagbdtt7Kj81xDjsSgs+U8vfiCwRWneqV3eol68NQ4LLyKbvAYNMcgCWV8IFJIpQlwSCYK6FFBemHbzVQsXv2L5hkCIyIuC5l0rZzgi71h0tUKdYfJJQnt17Nyz4QZfglR7y2salSGIDK2pNIYv1RWMplWlLbAT0Jhmag0sqWH/FnqZ48LMxvjJ23OI3mpavSnUYFEh/iMUDxf2bRGqsOgoqwHkGVUz4wF/sifZJOtngqgZSDScB6xWyqCznK6P81Ryb6/9WZOR2apskPcJf0LpTI1prCBhasYJZiZFoUbyCBHuraG478cYZSxcF9k5QrJqu4sXra0YhKeNuTptcFF4biuUvxo1ADEftEiPSZ/xUii3FK7H2dM2GFxZdbOEr795gTzCOROw1j8EjzPj6gI4U7N/aCIb+w4zFA0+GRt+R8LICT/So2pfP6UIQXtMv1fz381x+nO26ofs9bVMQpwHi8LgWfQqWy35mYT8AEfs8m0y6/6Tqb/4Us//MWUmZbUII/7LIhbxPQh3yufHy4NLUQ7aLChNwXnzQ3N6AHPILrW1HdfuBNzFpppfzP53wzhZiOyiofzZsKv4bpFjAPrfhgk9X8IydAT97EYMupA0/+riBnZ52mq0FMb+mN8Koq+ZytlZs8isi2kJj7uxmjEAlfU6HHJD15Q0SXflSmjR2M2KyNP+VqGLUgeHHceCexnvoOwj4UQQx0Y5RgatUaWdl/p+4TV0irMeTIrQxPXLaQAzaPaJ/W0TQHT9MDIJcFW6jCdfLpY22CPGiABd09ZuOcflMC4TqwgZBnX326eZ1zMpracSx6xZYqLTLGCMqdYi/lGJOooszBQ=';const _IH='025ad7cfea1a57e0da2ec22d2977c2e58d54d08281ce2f13a0717211277f2a7a';let _src;

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
