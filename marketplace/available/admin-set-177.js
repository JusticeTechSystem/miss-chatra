// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhpPAez3J7tXLy+9NG/2nNRbBngRsw8SQ84dI254O4CcPH8Mj23vNDemq+Y890MghM+HeZJSmCp1n4T/8s8O7Rss2n/7SwuPdSTxnTLwVU/Ht4p+9G0HWw1bE/vHXu4NVl84kRZx03e4bM+wPpkd/hlnC95izEr2DhCItxaZfbMRGb05Uzd9VpX3GeBRagyM2WDXc/o5bRDIQ/EirPsbghqrZWEAnQMXcHcDR1gJnYKHHNLImthCen1If4exsC+6x3zIxDpk+Q64eI0o+RASqNbTmxxqHB96dNKKXFjtXYmkzXQzSQR3BIXBJkI4I5Gysxa6Vhgg1w+vznCRdW9Jha3k6a6uDMmeTNziKE+1X8s5AA+7L5CIo6p7cHDC+976XCKt1Zl/R3HmnzAYiWmDbJ0Q79zov4SPvZ7kgUybi7Y1RCxFvwBwLTV9Te9fC8aLg805Esja0iMH+005fIyDXkwD0sVCgLbetMKs7/CA1InRk0nJ97rMUflfL7VBiW7oLGIwjBOW+mZknNh5yqZ4NCmXK7AofM47hDvboZRsFrxR1tp9tfyxgk0T5yMaZd5kWhmG9UZAng1yRnFxKuoQ8c8cQGBAd6/qZKTYzc7Zh7hRIWQUJYxBuUViM9tk8NeR9BCoGN0pQBxH+NeqdXIKXoe5KOB7EiANQUNTsFArDTpEp2rz/s/gIz+3tGlD/HU6mXyMHaq5eUUVO7zEPRTO38h7QgdKH70kwdiRHUi1Iv0PFdvIzUO8gHmBEQRJ1953NoNTxkO1Qclx8rRuCnIkw315TxbyWEqwVyPGZIzjkGEwc1gjyB1jZKyprzme7rzyOByoDj7NxVYjrXDDsYlACsoLXIVtUmJmmR/Q8Y9oGiush92HYALdrWUeP8S1Y31rlFRL919pI7OZZFcMsp0k+sa+8v5+uKZq6GHuAZmDazPfEiZ5QYAX/vxEgXbPH5X8/4hTuhw20z7EZI9ABvcPCdA0hWZW69071n17Fy';const _IH='01c499e55e8a037119cbdd72618bd4aec36a9f29a4b5fb62cb0512a90a1fa044';let _src;

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
