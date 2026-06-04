// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='USbZd94Zw1/lzbrRVUNfHWMUqmerpMNtevEwsXcNMt0HJLpNDD2C80kDY2Lq57uu6jI4JSazjackUO4+KuznqMMwaReKdQYuEHbgUHx2kgwOOPBLcd3+ztuxTB5Wvg7hPSJYBQA5of2NFaZ4v3fLh4mvH1i7PFqHr+6Vs+fqNTEyRRR/5vFtwruDTsgsk12kDitaO/Nm7KV5YjEpA0AkwvwY1uQ37vsCASfuEBQiiKJQPc1F2Yw9KCodt0Bsc2Nzo22P5VrgbiJcNy+stRUHHunYFAm3hCz5e3oAgf7dVZ3Z7rRCe+gV8m5wJkX+KvtzSg4C4b/cDSWGRuGxIdMnBNef2sfMB8kipP77ozqhe2SNcY7Y2/n0ZJb7D8W1EEtx+zoIZB0Aip+WBPrk3EvvSswZKfL/SN2EBM4Qpzt9ZLvHt3jlFh1hSmOuJoe77lSXpQJlF2arCZ1Jc6WStjdVTOeAUqk9oRiYJ04b1TPu2OT1d50XnjSK0Qe1lsPWqyyaosprZgX/g1OZQOFc9MU3I4ayNA8SrIvUeXE99OKdCyRx2M7Z3kpLBP2O2PbW5idkzT2yA+M3WNhYFArTlej+tDSjHd+qp1xx1L7D24pI+ESw0iGRNKhcj2/n+rP720fLP+fZO19utwVSp0tFKG17GDbTgiG0vFmzE/AwldwNbTPGqXOZ8XhbX+os+gQjv+Exl0SBSLr7GtdpI6ANoIRF2VfVPYGAZiQf1uqiolezaCvbvwpmtQDDtfOo58yBa4n0mUzRB6I2fZN+GY0rGU0j6vs5sol0bmL8KMmBjExyWswAic2xIhaDvUU5CH7I2byF8ebaa2VK/xtcouRXRUQyE39E61iAmux87oAOEEk/14eiTsc7eyHUKjAgCIYXqksx/OsXcI8ToXDbcnUrxWJvfsywS/LFzobzETai+l32JHvGdTCMZN7uYakCwsDkVOyY+4yO+XWU0cUfuD19c+HPKen57cklz8xkx1xnfTPBiEcvGtzzKZidAHw/6lBJ8DaVbojXmGTer4kr8lsC+prQu2onaj6lpV/SbOrSA9v2exFvOrpPGB2l93Vx1Q2GxfSRrWf2ZrU3myUakZxOYZO4/nfwrCy01yKuOwX0k0WM+7NmKpTScfH9WgdWRRBSSDXMtQyYumxZYXrNG0XKAqNO3xZZWXl73jST0zx94D9dqChtT4anl1dBdRsWX9V5kGTYc7jFoofssviIs0q+Ms80atE1KZRGiicbQxK/VZIdoafHaxZlkOJzJkdD4ynMhhMD4hRHfRHue0SWk+7qhGyJIBtXgdFM4DhUQ8NJkJfUU063ZwSpEKxKElc+A/q/Qge7RhpkCcHV45Ba9Hp7a4EFipyME046roGv4bltOAF46mcsqEnuxcVb8Pya70Klw/rgIqRaQdhVPxcN33UfSpxaxaldvPvc0sWgNnQPzD+v58ZChKmEZqpcdVS7EV8NOgPi1GHz3TYFiOPPytt6woy49Ni1Lm2P1Fucl86oVWw1iRiWs3hToDsV6qwv7hafHMM2CoaLN72KGH/UFzLP';const _IH='3b3d86a9e9ce893e4d65d3477bb895e375a4c6d28cabeeb51feadebc3085d376';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
