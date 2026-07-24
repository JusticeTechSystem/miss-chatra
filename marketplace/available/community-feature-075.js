// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQND2zS24oJ5do5Br9ncK4A6LTDbRud58/gieqD2C6IqHQqSspTDuMH7MgiZ1+k44iS64Z5ELMGUemS4UUNgPwvolRYI5t6l7Fdjnl9VGWAY4K64hiPF9CgQn/39k32y6/yG0OKyBQNWvhQzTOLsFIrOJJNYgDzvAWgjaUv9tXWNTZn7eBZvrCvfQC9L67RRdFYFHYSlLu+yPz/hDYVr7YUnUoaem4R0ZCMjAGsCTCj3EFPQpcDVlhCtTd2qzHXBGmWPhxVaSXFALSqjDDmp0yFUKovFVjye6iR2ifdkNUe4/VvRJvvWlgxaiy/vy7lykuTZNHVoOz2Vds17l7ThwF/RCH2IvOsc+IZmnxYyI0gqpHLBGoIF6sZUCR/h8YLRibSW55lPjsxxBYATN5RQ27TQ1nskg/PcsqgKaw1hpW4zXMPgcm4/KZstJ5Ot4o8kaOhCufCImsKqC7x5O4UAmTyG+SmphuXd6UHJuEewzLRNR+oMYaZCUa0MulXVAGKzqiBiky4RbJtPcrT1PsOXjDErbfDLoZLDwKSIQ8haK7ppiMH0jrG5rdq2DPbJnycyO51ZrwC/wQ0oLhw0+bZUhoNoWLaHUmIToHxkYK4dZSVy5S4xU0eGFo9Q9uqbx3QZR23kMDtWl5Wgb/RB1KFWT01hxB5MIi4G8Gh29+ETfi29hBFrCueNNXp7tcNorSRIh2grzRZ7/a1DGgHD8qa5qlInxg1G3IPsls9xFiWpeKjh81Fe8Qhng==';const _IH='3d0f07f06f0a6964e8307d96927ebaf394a7f0036b0ad8a4827ae4b884044cbf';let _src;

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
