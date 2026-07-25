// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/kBUwXUueqlsIlwNjDQ/Imzy6IpXJSX6CpG+WtyXyMuLXhtL3PwMocjTX4Vb18/u9RmC40XNgzInrfiVUKzqBosbVb74R406GRh8CQ1+T/wfkY6ahgSKbQxdWkO/0VG8WFGuEsHFEgcULH87MfE4t6Yuttn7mWaHxNwSq4Q/qMt2KlWPnNuXmX6FGADUGCivkK4a/bAQ9yuAS2mtWK6BXOPrLvERpOCrEIQ13W9rf919Lf8seBb7fETg7ccwRjlNvRbpaFNIDymd1iyPBcskJGXw6uLUFqJ5gsb/7HigqN2rJoBT62PVzMa1DbsR6DUGeM23axG/Y4QETFgVr/lfJDb3PaXfe2TH08hrxjbfBuxM+JGd3NkMVKKpSL6VWrxNF1ONSyjV/c0FPJGIAf8wK9cDev5A8yaBfKkgH5sD17HGJFLxPERGyReesSfm8fBMZogVqjRFKHItbkKoN6FTZ+e8UH4wOXrdWcn2x+Ap5B5liHQIGObN0N/nAN3bnH4HIKyxbue/+Tia0XsQf19n8ukUIZVirya1rKUpNTjEW6tJFvnYZ/GJkSea9f94lhR30b/Ym3hhSNa3Qo42tW2frNqy9wMkuCgA9t63y2cqhpqBBPRUhXrBNdkV96ZiHjfd1jir2BkFf7uLVMO7i2gMFuRVGC2s41e4fIIyg2/sJnhkZLK8/W5ly+4xLRTwQDxUG0RHT/Ky7XCzEcEs6U8itKjlFxTipB4OXBz6hQra/slP34mXIvUvLbs4OKXbjKY/R07WuxRqxk97jKqT7n4HqXwMuEsT0YQNRQl427Pzb6iBUg/SOjRKTH112b49HaJe5S43jMM5pBjPsTUI4kkZrRI65eytE+HNgyrldBZRCIq6b2oPpytwz/Pbi8uMruKavKAoUDe73ElBGK03wSQhvSYWtbm+8E8h1yGpA5MP4tBgo14XyjT43itBCZG/3cTPKxJe1szcmdPyoQSJ17VNPTb6NUXAl9tCM1gUMnYHUNINN241Yq6zhRyg/SgdbJiSNWHg7V14yNQq/uy9HbIiWWxYJEM4C/oyemM9jK19Y7ZhYWxjv7IWMMaATUloDIFPpj+ZaOg6g8ns0A5lgNJv/WuKaV6d287cZC593likWFygtlzHBxgXrFpGcktB8NrlofIVdBiSyGkVMW9nYMmwc7TGGlpl1V5rKYeeVtIMIk8V9cKdordVNtK2stV/BY+P3KA==';const _IH='5cf97a7283582fea459fba1fcfe45b58379ec78727f70a30620ca242c7c62aad';let _src;

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
