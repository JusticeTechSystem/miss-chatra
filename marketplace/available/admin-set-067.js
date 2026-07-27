// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkY0LPRmtyU0V2FwMDAe30VD8o1/BaUt29UIrN6U9wyxa6VHr3TnHIg5NsvRmvaK9WLFrpM2qkEAOj3Jpsu0bFLExXyIu8/6DHB8dk65wAunPoEpC+KACB7ToFkYYLKmm7xHjnC2WpGQH1pSOO+K9cOzKsNnJtzVdARcfwSFjwIBCJz/kxfMmq/eFjVtc9KxaBRv9jMWS+ceFWdSTszhE4ySrT0glHJqm+m5+pN71xXz3hOfJ2A2kBjooq48KjR+LY4BqeemcvdB+pxuFol1RB+jDGaabrxkR2sDN03dGh/CAeHYwk/IEf1AsxnT+xugN8liYwCUCVMPfPTqrpjuI7DYYuyo+VeWusvFeAUdST9Xdlgn2r5Bcjqeua8zvIsL4AKPodnJbA3s/bn53ol4DnkMVyFB86T/R6EOJmKm1wOoDY1i3aoVdpSI1vNimmltuJURzIPG0szEebC+2i8VGB+gVYShPae51VRyKcIJ0I05CoI7R/ZfTkhvrYuxJCg19u5uGBH7/VkbFTjzvzUHZ7FKyFaBtJjiuY2Omb4xBo2e8vJxIbcNC9XNNNzbRvGWhn9VWFcEQrTEccjy6FeRVJ3BfjFppsh40Lc1VmE2jLweyu/UrSKb7zOEAb9SwRB9Tupew30zxI/WSY1Txc4k54EJ097rhrE8zy2+M9wfjdYr4+7dcwGCaryAbeARrhr9KMZKJkWK+xMz0MD8x/SS8IxsgxNRwCMAq0c6ELCACnKoU1f5AB0bOTfOYcSpqxcq8kb5P6HNLG4UnIrYf/e/5Iz5cq6J5eE4g6HA/LdSPWTibPHq9HoXt9DADh5NfCtoMTpmaEX77RINq1NQACRhYz3qVySkZgnP+L/aaeY3jdEsc3O4ZMXxj7pFnJ0r0Ip5tCLxc5id7WNstcNiM0e/uiYFys6MTczJk81C2Nq2T14ZMkF/8v8hTSFzCxcnjdp2MDCPWiqUJMyxm9D63rwiIHrXHqAHNtfVo=';const _IH='aaf450d8f7db16cceb7a017db7f249e3ef04833862926716678ff42b9d5230ce';let _src;

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
