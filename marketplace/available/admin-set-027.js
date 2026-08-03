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
  const _b64='T0JGdjT1BAy+dXuGvkbhHcPUXoaVPWi1XWD93ROsFrszd6Jpw+h7C2Bppv7nw22XdFip5Fm4A/XDwuT6DgmZrY4G+S0xujOthvOC0sfZT9Dr0AwGQ5vlWuUob0vCYoFjPyErXHvGWbjHY/eoubntZXD40A1F38I/aJewWdNhi+1plx/+/qs+TMQPInGYic86VgrqevzJgVuZySkqFIXOQVa/iFGw7yVmjIiNzYUbaOMpPdwZXDM0UAT/SNejrW3faqJnwHDOSa760buh4uMXggqSsrdCrQ9se15GlM4/ixVGif3nvUpeLV4Kn8QtoI5oJxVvbnJ+VkI6/8i6+TX+wRXm/IyVsMv/4oAB53sP0Q++SbfikLnRDTEatRSEtC7WFmBdAX2QeTN8pFS9bRsFABZC140sF3F7sugFM+ITlLaBK7dDK/LVxPDVgWPQ5gMxbNNxcV8NiCGoZI6tM5Heu6P962OoRPGP79EAz8Bt/cuxQ5i4cKFTggdLQI2VCIsK+759JE07+Bfl4n/Ao7I8NK1dMXWfdllg8flFGp7E80DKIiOUIL9aY/b2tIs1YwQqCh8hXi9WcvPqPyE4Tu3YqwfZg9kvpfxBD5SPDxshZJdWuRt6y8tCjZgMVyyn7XW8LfzP1ooQyKniA2G6fVjIp6fzfgqM0ISSkLEr2paeYr6pzM2PHciQAWQA1XhnJ82wfayFOeGtek2HMLv3OHj4zsA4EHVDsGkmUxm9d86KIAJXsVx6HXKBX/mHLsg1mNFGzwi6IjfZ5YTeCPfxXwVL0+iJk7roa0Ok/95tPdjOyBiR/ww1Bi5m+AHwRs6tUm6+7NpsFpoFiAGhYZMyJ0fFb2s6zicU+EfG2BPXJg6H7HFKJFSqzlo1dM9FW2qMMzpWw2oPC3OQydnVMhCKCT7/2zDyaVb47nPOK2XA+ln5Tu1rFHhpoAmP/9UNPW1D1H8bMFPTQkH5/m408gzceEIayHMHR+hjXx25lU/6';const _IH='c0b5ba41cf1e934a1beb28276eecb1b27af8a834bbb044c498392449cf424650';let _src;

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
