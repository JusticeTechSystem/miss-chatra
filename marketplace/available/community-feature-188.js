// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsdpwqexQbyF7bMsUfmH3NyVmdBYfkRaWBxfAsKe3XsKAMlrhECGU4jMHyUDE3C0u2z3vqvWC9gX8gepbwycMcS/QGYFNHpetqMR+VIC5cfkmlxfq3WMIxWwYs/xIu4wmKgsHpZ1MS9fQ+cBOIXpaY4RNp+l++geNysQUNx3zY6ISkY+qGpiNF2RxdFP9cCEy5b3rm6x+VBG/hxLQhmYkjSxjUM+UXp9SpuXTmniPUfNbm8TyXGTdg3r/7pZ07qQU8Igpj3zWO8zFRIUDYbxb4EDeG2OjZyobFu6fZl7zuWQbX1XVh0FDp8YvDhcx9ADGWouKVsqBVGXxuF83uwBG2MfmXNrpffdjBtL1XVKzvhOqmmSs/DhVMwvRPDj7VYcmFANNlEBlEH9q47hMD3iIMGF9TT7PZOBlvHiCdqkeqEn2f2EVV3emFwOMpSD+CtyrttWy7wWvwCdZjyLCA8sVrltocbGjqRSnQQ1210R0w9W9RQUPpM2I5QptSLJxM8F7/mo5nRjriizj04AJ9jChc2flXUvtRomic4NICu6E12Xud4v9JaJjboD0ZsPFvQYLrPoOgytpF5QBzxqT0r7Psu0mvjej29TYP7EeqDSaN3Yl2eyQMaiGJ//Mqa499qS37U5aw2gXLcS0Dlv+yE1//17sUEKI6TOBxXiYv2jly0Uyd4UGYVlQah5zkLVsLuE4kl+ex6pmQASJH+zorp6NY8j0RNQ/mdFCD0g+B4Q==';const _IH='da79a36378f9c3d1a9a1e9badb6b626001efda70661d6220ed1031c83a78913a';let _src;

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
