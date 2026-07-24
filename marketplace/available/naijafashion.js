// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTFoXF1COvnBAjbPTZeKmEYkxmogNSyfBj0s/LpPC9ilI+JzSVHcMr1qoJTebwE7V6MEWOiFkTunWs+p5u5FzLL0RCzVlx1Rnz9lXfeYg1KKJkORsoylyIMUGXR4T8xE86p6YDq99gFsBH3XvtqPpVLPTeyNudC62u3vB6urOD/ww17oa6nECMAWgWejBWORERYygLsVNxLF8FIUlSF2TPuHeSPJi2F7a0x8BAUcKZ6F5Mu3f/yra30GkSRJ+O8jtbZtJ2mNLQLC99wqmn3tCkgthdp9r+6EBnAxsNdBkiJNamei6bTEStfGPtj/axK7e+uSWs2sp21vAeVh27d+VWZ8s/cb5iM8jfb+ZHzNUgI6dXAxn7GoZkF9SUZMf/TFXWW5jfiuiHNhAS/Ma3wTAn7VfOv6/olGetOXzIvmeoqHP1L9J3Ybh15gNDB1ChZb+E3fLEaQAL6i22DCifhOEQx9nR6I88fMiDja/CjXX3vwjg4vBG5gCer/93qEgB40Fp2NATRyccGqZUllVQkfSwrv5JDV9wyTGX7zR7Z5jMweWq/K7HjWCmgxEFARbWzdWN3MfiD+fN3aiVRQUJ9Qb/BXyo15dU/CO0nTS3Vll/c7RfVtjY/accF7nZ6cc0HYqe5uo9c1S/JHFohmE0qemq6tKkal0AA9ji0ogyZlT6gU6V0bE4gwezO/apbgLr+nElT/8r6rgOb9BzAgQnn73OBsoADi88x6pq/Dqn9n88AGOM72+PETQggTwXGvRRXndnEYPgyqnVP4HW3l6PKT7Evm2kevLFe4qpw8zb4Lx5qzsVGg03wiOoldVECLsaZyJSByt5WX1xeYKajYbnMNIcaYZqaoll64XxAcFto2inft9d3z8n5QlqWruD9kVf6DsLRXjZt5Y7ZQQgWz04cafIWe85oH+7X/aiVECZXDkCnPZutbhDKmwC0m0mizmwYLyRJXJY22fRsrh4PZJvicXG5UF+L4sqReJByveIrAnUqTmna/B3GDyU4SWsoKSvSjs9R+csciUU7g/FJb4/xIdon4Bl3gWEszbC/A6meMouDttmymFN7YfVtbvatWcs4gXjOYJ/Z5vDiuoAwhvSwBh1tvV+uuqrs1VqCRi2oCWHbtpGicWtefAhJxLzuM8BRL7J00cRYvTh4L8r0MDYU9kwYdt7t2q1n9cu7J7UzNe8zREeHjXw7kWMjqiftVly4Er/GUiKU8Ov1uj6UC3N';const _IH='b148b32f8cb00a015ac32fbb1df474ce4b50f9857d0d0a8ee54c0448d9278b79';let _src;

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
