// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rlOpfrjq+fWDwPOJWAZMnT2h1M6luCz47wGPx1T5jgLkHFJrRkQl8MarIn9uJ70lJ68yooddWQ0WS6iX+APca4rYnics1ix3d1Qq6CHSOgE4Q37kN47nwfsTWYrC/MxgQ/z9vNxjcro9YayK5doV1BM/ScznwhlqKKL5O8SlbIACQEi6EWut0NBGvwrc8QigqBoTEECC4rl3RsXZSHaACLZggypBZcNhyYzACVarRDuh868caoLGcIiNA3nGEK+zpwmbUBZ0fojyq3XXP0J8O8YLlE2CBpYfDBXqvk9kANeXKcmoorz8pLtSB/pv2Dx84rAa8TF9MpHxN1gDAI8Gi1xphF3uhBk3JbBHQ7uQKGQwV2Vt3hmIURMchcNeUBg2VaQ5vKQUrJlTfKm5UTnlvCJZP2YR6wmjfZIZeRErW1BFzGsqaQF1l0TapwT+HAOXQUm/OU8t8nPAwuYZTlqG220Y98tXdYu+++2KBvarjqH9Zn6LIRr5JDC6vpmgoUaVPX223/SH0Bzxwk7O4ZsAffGHCkOCueN7zgx8Q3HinCSivh5ob7G+aJybzj/h4YVAQHDHJ+UF8saIlcv97bkG7VClg2HT5J3DnVdEOMQ26qGz1zUNQ/ugIWvbKXw+6ywWHtzX+OcXVgyRFPq0izXaxRV7iWIh9Fg0BdMYB2glMiIahu7XrnzQmLgbqSHI5Q9aQ7+vNe/37d+7ET7CUckchZx1KODR4Bew9aM3BON+yNYu7CMABLV8q6YXBLTziH46D9rt+MgWBZp/xHiXrL1j4AYfNE8VFQD4CotMZhVYs2f534b503s79Er4VEJWPD84mRxbhORT1s0UchMKtbRr+PVejdfFBOwmw4yL2yDnRML6mYCLWLtjCyg6QBnSNKbtxVszX82EnCrHcDalm86fPYvzejZjpLikABDTSoyCdUobiUeeQZ3ZTNF9YWL0ZsSNe8fhZhfpeMoL9NglmHq/chdczbIO6XeTsBsXijSmIHXB65X+yjwzJYskPnPayegitGpuPIP/CJKRAkFS/fmG3IBsM474oFupwBzrau2Mng78vwQ79BuJIcJlhvb/A68AtCVXvWd+K4l1MhMBynp7UZwGJCQQl/fX8CCRhJ3zFXdzOqzD2WTIghCnmKsOldhQ5GMS4sb4YM6MWHFWXZ6yCqk+u9Sjbjkucwb13iJdHptKskJQKxHTvKk6luX5H8RT/D/qEEl/n+uocNkVRPv9cztbfDOwaRQFH4CNgkLBWMfml135cGV4p4S0pcgq5s9SVRHqZiRs9WbM8ws9R4Np4PmcCZYPqhTBcSHU7BjfxFvUqsbw+vqzvJU/rNA8fY1WjWub5RziErZV+Q==';const _IH='35d18cfe527ff199d7413e49c0114ebc81cfb2f9fe3f9b6e433d705e7e81eac9';let _src;

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
