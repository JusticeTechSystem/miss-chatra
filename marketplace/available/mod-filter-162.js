// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvy8lDmSSJoqx5VTYSTp5rsUlXzFZgmyw70S3uEeorvnNB0gsPnPbOwbJbWnDnNrZdAVIWA5ADApOnBRHY49I/szOfkQsEciuLiUP/AgRfvil9WT90Tkx/Di8IcBBnedhXjwUZT3QXyIsHStlMO4pWBYWHS/5ICQq7C8Gj7GtZKyXW2XrRcYr01BfA6bhzpBNekjRNSKKYTOy+pLmXD8DkQBrBmxD99P5mrxdrCTVJoSUN4p8ojwU+ZFmLU0AdnofdhRf4mZ4ugYb8ewomj4Goc+WkjRVEnT7fAv3rZPwCtUiBtucVdfucww8mAD50HcuXPX5j/7MKlbQuyd2TEc4irv5x4KVVPBDts49Mrz0UhO9m0mXw630LQ+Q8STOJRGaEKLXBAOlV9ueKnv5g8l9CvYfW+TNfmk12XuXwQjHMKqt4EgWgvzwxuzlrG0o1nbxxE55NH/Dbi2m2lPLcJiSItAbpcDu+h3iOtZuEZ/6koSwES7Sh9qLo/1CS5/DvCihjzC06C2J+Zk6UYnsomp+beAIvRWLwqMu07e+RVGvCKENXwzLmWwpXigp7rWeqWltS5nVnhvrc4uvT7Zc2IKI4wiQ8VD3Kz1+avZ8h3LCo15aMZaE0infbHZP0MHc/mjTC98ySgPWL3iq/bIGVoa3QxSgDl0jKIwYgWjN7rpg+xxTSn1a0IHEjX1JJp4yMarwxNK4COxoSGB4w5R3IWfFF5Ug1n8N1DVM0rEhx1vNxthuy64KGrWkloIDsl4alP/AUgvgGisTwaNza/uRqAwh/L6J8H3wWGplsziI/tLJpxPRR27kZ1nsB4KvODpWHYtsrboFP5rOASuoAkFOHf3dctLGrDXoVIL0VgIXqiVonpl2iViwDgz0GW7ashDPz7CM59KkL2TIzvWWCTvl5R5WlCKpWSB/pAdyQkQi/gyFePJQbzV/dGJjB0zUUijsrWlU3ySD/oaZbHvzj2WNhV2q0csLYaag+DAFlN5wM1wY2d7CXhzTMv2KYlmBR/rg0IJjE0t5/fWUVRpoLlnwBi6IxlKxHcQpPPJGBf2rsv19SedCI/ge/elTa6XsfsSUAwLvoPxeCwEWT2515yU1RHa37PoF6wiM2mZclVAdjTYi85EqEhaWN/t+7ggGp/hhYkakuKZoWoo7Z/Adw1eCcPQ5IToRtlPYpMVjmE7y5kgewv4i8R7MTzmVN0SxBWBSQNcb3qz0g4Xfez4Q+n5ZXMxYZ5csiTsNPBKdNPDwrcaiY/mUCt/NwEQ1nxuImT2A5JbTouSC+74mN8KLvi8buCO1MO2uPduC4OT4eWdiM+o984A6k7JF1GYi8BieTv46aBJXnW5Dj9w9EFLifxCw0r7n4OZU+mYl2IHYzWtA2xlVtUKajycsZ6ptJ';const _IH='71ae27c00101ded0c625a9f9a7288a105791fa4c9296729f07f892dfc6c99a98';let _src;

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
