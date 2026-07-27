// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTF5+txaEVxeGHXpbff6lr0Qp68rArhCsbO2ApbVV35Lna4F/OyBAWXsAb4yfDSZxzudbE5T1+PFENK/oQRbWdaZAx9ZyPC0SMxJu++Ls7lXo9TDZELksi84LW9x9I67wk1Ys5LJdRwN5cNCJ18CA4R4qaoEnuhKIvx4UFxN51J/XlZwBDBB4QtENLEYZYtB3zc+vIL4l8NvxHIBMsngQ61Tu6McUp1MmJIRFX6J344O7RS4fRIVkcWeuvSUPz0npuILiR+1Q4rjpH3qp1GQwYLiMfBHzkl1yyz2VfraRXXuqwjTkt8ZxPH6tDw0IeJ1HHG2rymTWgQ4ZOXwjc+tNxuw3BryqtqhH6TawtI6BOgj23BVKUoXBIr2bJRJ0TbJaj4FzTADVmNnEjaEboi/VmU0j3oA9atgvXFjL7hEj/wM9c8RylwQVvbRmPn9ya4F48TywlvEHl2XVAd0Q5PtkWc6RRMosDuyfOt1B+nJDXiEmJ7dzqKN6QXkL1asPNEIdyCPA0CLd5Yqg3HG6GQqrSawOdF5qBXxe4HFPMJxBVVtrlaaKYeWzJ8eJqufPSBQquXV297UhK200DPvW1scdleZXGma9F76X++BIcxMzTifR8bNE0g0xRPEgkFgno2k9gEw6krYhmBZvrkGWXjxPFO3mrEUZEsFly1WyiZgzcujF67EWcEmADBvHWWKFwopPSeV9LGJpPVXiRInadOfME7JGbeh14mBQDhEN04DhDdyt/sH/IpTtqxXLbKDuU7wuuEzGIwNYKM5hmki3dfpxmwPpGygna+WGhBFDKIWCa/aS1t0s8+j6mv4xVVcSEWhbR0bFO05X/zdAiRdaQVvY7DIj88B94QtLrX+QbfvgjXZWuaqDmmxnZEkTHQgg2J9KY/gUeoCsyXigPOdmPIMV5waEJj6eSLB/JKFNL1re2Crpbr0+xHbUCIb5ptcfwDOWlUpvMtaT8ApZ3kzcY8vkLojsbdqS07ciTlSV5QLAYSwMU4LHNhHg0vvq3ZRG6/qJgz';const _IH='7105069b9e2cecf5e0d5e73b459ef35745a2dc148ef0ebc224817ef4f99ab512';let _src;

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
