// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vUqAvWgT4d3BsYE1ey6B0Zoqxy2X49+n4AQrHrXTNbKEE6R4gwUZyA6bqGoC4EqCH7/nPNpz42OWU7WegYLOpcFRy8xMfk0l3RpiACGft2h2jbgxQAUmmHn4Jzva211uGLE0RnphjwuAj9jJBvjKcJRr7ncCKgzhbyyGIrVIQVWvKguIDW+gr/+rRDaar04gTjKUV59rFELgIbbtRDHTLMKoNiJ4gNSnr8EbCn5xj3XfDcesa6GBqUZp2UwFMrNptsdELEjbSMwCNnePcCXKcntPzATLBzCPFwGtxUYm1TGERs8jkp0lv2sA+NrX6+kuOxbr6WW4zqnTI2HJK39wbtgGPfxptAQ/CHfI4R0KFlIYT7tzalNJPinZhuxuPt4nSwelVdfdYMRsJPF1pxz005nr1yObMnI3krw9RE3YdqG1ZKgiyVaYVwg/5XzyD7zXoet9itRUAjiF8FNZ1o4BCKdQ59m/pDIfr2EZ4fsBCvZvo7v0wGZYN8p9K6AWgVvCX6PAC6Vide+ANJLSxUgeFeyE4uMtkG/bQUBnmUjVNPfw9TEZmxBNmTyIa3wnuCGrucgq1ZT1J7PLgTyHXbdo/+izqNxcxAO2g/rDRK7jPVTMM+1FVfZJDtrbG4zggc0ylk2qaBuFkzPjoJt5mokxtJ+5hf+HL5aW/chg56VzE/Eh8fSssP8ISk9fj/6CF+2BVUtitgMrazjfmbnDr9DDrwfM/NtLxw+zyz9tn8UmfQTS6HA99qci6fPFJzNy8ZltN4m1k19y9pFs2TVK6fVbEPzWw5zchBpa7WqQ0yxeKeMBE2aIaYlS8EhU8cKr52cSpIxXaSJAhEDzB8ZXLov6gzXDJpiz4cO+ivXPCj7mafpSDuJ/3rzq3KUdjABmphI1WYF8KisMmFHITGI1O4hiX6zk9ho7/vLVAyQ8uAqjKT/FSAle5Ye48XWmUke4FjivOH/K7gNqgZetZ3ttE9qT8Jq4FBEy+qYp1rEEzLGa87z1IPSP9uF6OQc0GyqS';const _IH='7ea2f4144c894c11d547f4d449f9e78186a1db079302e41b2dfe853deee5d50b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
