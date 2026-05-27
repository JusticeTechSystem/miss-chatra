// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sfUo5nTl+sD9XabdoAYXgUt3ZdqhlbKqsfunA56j0IriE3hpSCxdjrrTzBNFQ1zQ1xoU8eOUS/RWsF0+anlXtGCprjDNK7RWcIpsq8RZODyTeBhU3ZVSSjDeDaZJejnzeWbLplSDUv8IwZ48VimMZJf8AzSQvqyi1GwSPlzIR6jWEC9ZU3xE6orXYZQdJJeLB0WTWdX9OLlkWarwl1i6hD7QsV8aeK5U5GIMByj7O7nxbkTsaGLpXIWA0nGJy1+9H9s4XdrIXg3wGGJiF2XKVO4FvktUGnMtOfUXhi7DXCZLMtf8ptNAyK1H9ifoqoel1fofg339DLzlFaQTIADFn8OkdDW6DxdN7NADW9pVxgdWe9yIgC8c24zjU2VQJbfOMi1fRL3RlNMFtjK2N0bhXKeWIucpLL7cqoLU65V3znHdm/8JcHO9vUga8Yw95Gvoy6WYxYN7glFVIdp4N2dCRUNqXq1YHioccx0tu3HHRQHWEykeiE4JSy732IogIHJsBtUQrQ48dOgid58cI5MZOK+pGz52MxTxpMJs6RzxiVb7qK1tcd+wzR6FGvnGWpTIM/GITEgnqACMXkqU6ZdQN3En+FiHS6dnK72uslBCGkqej7v7aiRT6yrUwUb9xVi+Q1UwJKBPw1eBOWVtqjJuAcbaAqLQNC4dmMRo/kzV4nler4k2Ezn4KByBWOcftydnUoEe95y6E8wSW8pOAx36NiboJa9hSVSBN2vsJcwtF3X/gSbqhuTmNs8H+GM0h7FmpfgVRYJGcyA4OUXbPQ/Bx2lmNaAVXLMYvVAbM4OzD68zGgit7O3w5D0jm63ZZPUS62SQxgV/d60AZ4bJ7JfAfVBAf3yInQaAUkIxaqVToCP50AlN6w+KF30MDdokRZUMKW1n1aVurJP51C++oR0k5m7atLF3fg1+L3hkPAmkPVDfTWWK4zTIRUH8h0laQAOxnRBAvT4k7EEcLnwvNJn5BDLKZjsE9N3giYycOpcT200EHw+uhhRmbvsbQ+s+YuAv2qAciQgRGLckM5U1/TJEv02Jw0yiOsvQshGp0vXUXdjWcstOAXHsWu5X+ve5AszFSrvUj5ZDX2Mqry9F3XI=';const _IH='ec94d2a88b452295e61babd2def46c1a4c9a86d91b09bc02eb4387605640c457';let _src;

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
