// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+SIh8JQK0IkS/VL3r98IGpO1dZVwwt2CRrKQ8bdC82P4ADuWEcCuVxMsA35SrIz8t+CNv/uC7z5PRsxZoNwGWGqoil/aUQiJWD/jYxhcCA2kqa8W/09ewJvbS53CDPjNamjf8qDjUQOMuVURy3Wa1mIuZ6fLRuGd7hiPh/eW467osIyl49CcMtnw5nB57KmyZK2ZBytGc6zvroAUYrVIiBXTrAbsqj63kgm9TeQbD9eVQh9QPMopl17slhy7p1fz/ZI+tsGNM/WYiT8rMzwlaXOMliT/2s82lSShn/l8HJjHnlpnOmNQ5M7mBbfZ4ja3lfo97k3zjpbAUKz1HDSJbiAB8/YQh1JFDtdYnfNGBKoT+Tjgwzb47JqqPao5Y7bQshZK631Scnsc67Q+jBOKBjmyr8LRKcdBdzZGo05pxDZw02IOMlpb13Zl/Te19AL1mowEY78B+eAk8euIRs6EiENL1TiVepm2mlFXzIt3mk2ddmuhUSDmv1BuUh0PEYaYTLD+5pomfO6wSjiKSD3q9obyjF0y+zCivprCAhpKBvOhFAQADP/Jl+GCjli/j8U7Am6gXy1S2+9H2tXja6QQE3akt/mEeK7xvd9ZMJAS4/U/7QFByjxaK1oUuaeCNBdaJdTyvvl8Q/RszP6/XQ8eemwCYJTNtiOzTTHisfynshUXGlvcHA0M7LYxiQPMJKnylG9TRFwAObulzlQgJK1wAHHDJ2Z7en4HM65ShCNwKqzUY41D2nabx4vldJXmxM2fSm1saxxUGnPfvbakujQGkQc5/m0hrDDY0xfAwvotTSPYZ9ZLkn/zK4/kR53ize3rQmhRTxXzEfMdntpMdpoGaTXTRNpPvnKdeELuF9l7Bi4x4WO048bJuVFqCo9dXds6JY/ATOw/3BiwqxdJ77RHsfh16ZVbnYBe0HZ1yqhMRjTG0VC0PckvFD6QmreM1vXciyEA7ANLlkfj2RrJ6df/I+8ZqdKu1RH29bj94yOGOl4Xm52Y=';const _IH='4d7a2c24e8a53267b688cf496883b8ecd08a7b8e507335689058cfb7513f9318';let _src;

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
