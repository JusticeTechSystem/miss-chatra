// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmlAYlwFBGVxrvIiV84BH6RshJsxWhZAvbQETAM2EV74xJe3lAO2ZIKbUBqVletp72/rVE1eLcIaiIkg9NeErzmF2I0X+E2F0LJ17NOQUCYnCUUuPfxpVqB5G0aNOxDs3jkYbDjQdARM3LhclIojWP+3vQT7TByTetmQeYpNlznrolwDgruBJ6UAzCzjI/arCXNI9VJA92EUVMkU8UQYSvI7LmxjFCxRJhPlJ81mNhgzbPL62Gv9o1kHz1CDmOAjSnS7epmR2z7HgFoUqDKAScBC/gxKpGU4p72aIYgR2F/V3m47jcFJU6GrEqR3EgepV04EkvAtG8OygSOQ7xSkfqgWUfOg/PfneRRMcKJk9k6rYIrt2JPrGKjO9HDaLHNv+HrtarpEXkJrrBWw5dIocpe+G/2UbDijU5Q8XTnKUdkO3I0YAjRP8tQ2d6XLTCxwEzi/BCNrIEIQ1M/tYnjr8YUivihjyOxH/p6Y10bZLpDdu6ZAjhdqvmu7dL/gRefNbNMP+sQjg1sa52V6ub5ja4CIk2Zbqax0D/BE2CxwG93OYdqENk2baOu7XDvQibC7kDdUzx8O41FJk2KFEUN/yKmV7ZrRLp1xztLVT/1S++VY3kyIefqhLfrqSAvXHlwqc5Dn+CDQi19YFkbC+eTW+Pl36uTZxbwpXdjIQ2CPWrCACurdEmPda12/59RbSieOehFEJJHi7uO5eSQbEgo4JUuT3nAI6k3ZbwGWYbzNjB7LD4VhSMhw9EgyskOi905MpMOuIRPSArfJTU2pp49b/MslNToVL7HrOkdtQKiTQzeWwEF1S05oIPDn7PNOr1AvaxoZa7vo0diDWdKJbSLuDxqNHDz94zjLyXnjosFcBI6ASH7oRhzdepeGSedmt1br9eh8ojk7YBc7LGbJgmAbOvSMC0xurIiUsbie+rGh4tBxBtXo7G78LN9EdnBvK0ZyQtb7rWl98sJg4kl1RHt7bbXYv+bzPtDLHyeQhHnqN06BVmrztMTwImGsKFE2hC//qEZwTxrFXU0AcuHgy74L4yQZM54ZBEdG1D/V31M4JQLo8CN5X5BkYzbs1sT8QD1niQacOCdAxGePgUO7r4npblqy9x9JfEiWJFULrvnelIM007sfTBQtyoY46v23j4Hf73Dl1oQTIDOxvp3tl+Y7R4rGBdsX69M5Po77QEPE49Kpq5TeLiD2692ZCwIdo5STmPp/K1poNzAU3gXw7+jsaiEhWdHoN4hAL4eoSjxLUsD4pgLCF6jCH2OYFyxKEXwgv/8WtLIthooLNfqGGueD7FRJB6ITbHXpmmxSyVcl/ACpOznrpi5SZXzTYFp0C2n3bNXZc9FpFMablTl/AuO9vV';const _IH='0a060d18fd0799bfb0498a1e519a41563dd45f83bc5b2ba4fe2af671c91595fe';let _src;

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
