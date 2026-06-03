// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='abNyq2YFlZ3kNpGHFr1l5lkgee1PlfaBr+tBpPV7JrhTfgdzLVYaexklJLzmu/HIx4O77xYhL23pL73dUst+PhcUmLxwcKa39TNY7Bh//WPFr9CrtGDDfC/Z1kT/cpR/TDRkBT8e69OEuLzqRKL7eG1lSr/I4EOMkl5kXhDldRf7dNAFKF/hoboXHIy6b+d62tbzNzPsXRMn7GjqkzG54WQilvWUMt91ssCIxwveb1C/P42jLOT34JInFaMJzW67oiV/5d39n102Eu3DCsMqt1Vbb40lekgI94mIOK88DPKxo2wmE2uVdlWg5GSmk4YgyWwnZ0+JCsYywqUkO+G2xsq5A3c9MdcjqPqKupIlDDnwQHGrxgjtPsf6ozLz9tFhVdm2lbMRFPAfFgHlrujhnovT1iI7YdxPN0kCNHAp5GHvSPSRE3OCCY63QCc0iXgPuOnilcZWGlk8h02L3TabmWcBiH7KlzqbA/6rOeT1QVBWZSNghYBE/nVPhF3BGaw008YerfKcFCl+PZO4vWRSw8YwQK7HDDvIobNnmq5rAVMMDrBBxl8fjIabcczbmPApC+S0uLR9dr0A3F0G+FYw/lWVHmUwz8RP7ORRbc08nTtHkAwaqQBxN+t8G7Po9BoGcjoxJ8S3OZKfxbL0VtWt70Yg2cJKHaoIugN/hDkRcmWSF75UPcsMah8i3srsG2LgrsJ6thnVOJmM4f9Yi64RPyQDCpbC';const _IH='cc6cbd9d8bead067e8c3388e7132a4bb2ad213678182240e79f43c20f614e34b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
