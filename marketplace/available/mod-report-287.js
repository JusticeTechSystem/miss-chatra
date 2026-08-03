// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/ZKSOii/UvcohUAaqxKqZ7K+a5wZomfql/UuX4GXRQ8VQNFIKPZ2epuivVovL7tboOOtXvHzHgsOx3UoW5Jqrjel3+f3h3puJp/EYEW9mLACcNJ2X6PQIR/opacR6D1CXEEViumKWh8gOIk7prT4ArrlUjb7okUQfhEvvU6ciLyGZb0izNrRU2NumlhFOJ/gAYn8h4WMrMGRZDxsjK0bD5IWEz34TWmzpMaQ2qP7XfIwZMXYxy3PJCaQ1jbFlHTIDietmoOwKbt1BahXqO4yMVuZF0vW2eFXuqBuv7P6n/woBgthpWJOljWXUITfBWHS771hVLLChXAK7GDEzONY3AWIZl16guGdCG5AvgL0jFWlK5mR+pcVC+50rD0TjRNkkxD9X+OSCoWYdMXHtDYz3qLIzAm3FB0MMb3VRFzFkJR7clkMZGJX1BqDYNLFh0ANdhtsjL3295OpZa1WWMAVmCC6v+G1ojYoysoAKP2YmFgiyspulWmwuxrGVeo2M3LjppUR6uat1U9loWZcsFAjzpGbi+Yka2ToRvZV3bMGkkqybZpY5A9BvwEixEddXOerF6tUYJRZ+q14kiyymHSD6kvCWPAr+rNaKtfEEh5eNTFJPLeMUU3SxHhaMtvYb5+LMp1VSg3fW07IGVtW7mewYQbTDplpTB7zlqrbvEiriW3RZebUAaqqrWPfABkZ2/vBd+Xzs6XfRxgYPCGbGQA1X2ygid+lwSzfM92bh68hC5KA3WiZDKU/XEKoPa7GDjxRMV8efCIU/6onNBkWAb7Wir13dEuRz4xnE5jc7aP2hEFl5CjZiDpuf4R1UlON05k9aIWeCnIABFdGusR9RlPch7kqrdze5NEzYXnNzXNqdwIpjLRj42gac0WDuFSIL6jLfbe9t/jt3JmOSbctyKndGB0ZCyfux/b9o/xf1yeLkHEuJNpnth4I8XXB2H773Gg+LlW6ZBEY4I46iEjhSRZuDNUgYp1BvcEQXb0z9ts69oFpJtrEHgtzro4fLgF1RUsHD3SebXVjbWmcxLTdFZOnBnmGMhfd8x9AUx9LX7RA8TsRUcz7fdcqENj9qBI/s64cm85MwUXNMyT7CdyN1/BVLkUUsHHpGAq2GZggYWCdMsccpK76bibuaU1j/N0XDykvqxdhndC/+6ZSbveA3aL3PRZNOGvQJYOqBaam1jqvN7kU9nuwfeMmwZNpvwjnc488IO76hpuezpcK8/nlTkuKY6a/fGYg9uFd8+Ip2tLO3pXxLMiTX3zCUd7ctWmPyaDOTqg0osHqOyYgkfK4rS2rh/DIRwlUfd+BF8cvPXpE6Npe+5vIIH1pweXlzFcQDTRWwOq7Ow8+8BsyNTyoIZVbuqAk7rqQnH3Stq6r4h0+JC2TWD4tO';const _IH='1834dccfd89b2667892d45617dcac55d357d6aada70a99042a5942add6932146';let _src;

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
