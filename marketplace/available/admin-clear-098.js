// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNnSSoxoJVZLQdzFjxHNpD/H26957qpVoxBDTeWl2CMC00B5KwwEt/i+qJZkeXH1KyysdidLw1T/rbt3IKdmoATsEboITqs4afD1gCG1/0Uu60fDTTIstZrAHjaKrB9AMAxI8A2P8g1v/IxSjveiNplU4HcREtQUAIJt4PDpG4ZDsYeeWlJ46VOMRNx5eX2GUPoZHaCOS1D2MbiSgoemw4OSJBybXwZHPqtG7sUXeBA64FCahFvfpQ4I676Wojcvbccs3aQSVLNVklW4LXoxkAsg3O0A9gFAIrVkO9/ay6Zj7wjHE51/p158dPSmDGf2liOXgZLbsV8GmKmePVI5EdxrLTcWN3owv5p1M7V7ozcjHWD0QmEz610JqDwZAmHSQzV1Y1Z86D9JITKY/3vdt4hBUPNrJmacJObm6OeBK/Ht6PXc8nuSqdvQoNytvT96LCCcLgla9eA0LdTByF+MAbOiUXB/YGjzZFQjy8Vnq6XZil9BrhOvJ/WwcPKbH/+Pn36nOWfEoRyFmwxm62vcMnQ0axfJK2wjSSHPphGls52/wNYhB5k7yghQqXgM0XxIH0meNSYnRP1lK1V6iYVFLC3n/UUKMD9FFbh2TgKl1At5r8FRVcFjLvSrw33y4rYkOtdEagTodsTJemx4a4/KDHBUkuwNGROuaEoRvZcMZTP/1Z5pYhEGxflC9mfLYwWeWqpwVFJIrbHJ5AW6AJLDuF3U6eNLglsLD3/lpULaRsTkg8VXhhhKICC11gQIsoHONLSPZTpB4bh/698y4b6GIxM6gmP03zHu3o/HVEjwFYOiwoi4FVjHGl4G1qv97TcAEpthKlyQsixtZZnb9LwIxpXOvnRPbo96k7PjExkVty0dmtgF1nsgy1Uujy3zjX6OWF78gmEwoSKQn9aUTh/4XpARzH6vnyra3rsBSy1kP38+zRENwB55Q5j/pUEAErIaF+c2Z17iGp9Zr/FJ0uevZ/YlFf0V5GKm5o5/kCeunwOkuqGxdcDQ==';const _IH='5235cfb4b94e1fa8db6eb15d38da7bcddac0d31468ecacec2e44a7986a2c17ef';let _src;

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
