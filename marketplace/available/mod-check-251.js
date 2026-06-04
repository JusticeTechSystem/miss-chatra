// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jr18q02Z5vgo/GHucvEODuPk0qX+nBgRP/cBGGDelW6b9ziN0R1qfaqnAF7DOTxiqFJp1yfYd11ouCgXqxlYpmAWn3aKHuRZ9m8kE24Jz7aZpWZXhguGd9y41NXcx3v+HcJi8jKMfUd/I0KQxW6u8Hl8uKRV3Qjav/9c2Fff0fLKe5doJ0bF/7vHIcKRIilM3/lNWlHF/upe4p0lnw0kd6+ywkJIFnWYHwK7nhm7pYISGZdLpcttOkNViPHHiNs2ymGRgxKM+03MR/8EZqumOabB/2v6rK9Kqb+7zxpvLcs0qUvr0E+q4nGp3TQ0PaRnAwLPeElwUGmFCxCG95mr+UPvj868jf0whKqJHcY2nsmIFEo75AO7x6zay9K5as3qpDFmCZyI5Q8GEx3rJSUGYQ2pb6M7x6ehQPOMippTEggfzNw4Jwivko4E7kCMmJx7V/qLQqU+jAwa3bqqy/SpLJvVQ7/s3h8teh97rntozZ2V/u8tibWfESRqmxct1LagZuzVn/kV05wlG+Yz3zhz9C0RzjYomAB/6VUMZ8vCfiMpwBH3HOM18evnnYJL+l7eJ1FoqGJf99AEFsPL0dDMaaidr+9FXYs3U1wKVdhGikCtc+LNQUGSgMZILsPKMYoPaQRW19svduSLlMQrIvvy0wOab8KBaky6I2NR2HLc9FvGIRH7BLSvIw5Lq74UBEFNU3el0dJv4PQ5kKjOFc1Hzq5ig5+IcCm5bsyvy+b08PJWzJ6fBEoXc4kXRkCA827MgkKnzEolkxXzytuOFo5Om82QTEpje0YsRXUyWjN0/Qv7VQQyPjyA27MRYiqVVL8OXE8AKVSLBS4PsSLqFjeuYmmA3QIIb1y5/yjdnOqiA4F8CFD4TYVzBtekcAGSOqt1L9qSINX/syPVJYaO57l6Qg/P1OwLmNkb67lJUYuyQ3rC3Qvhg/VPWnNWAfpt4rK/WGwq0+Yg31Lnx8xNRacQeOwwG9xzbYKa3HWWA7EPJq8Vk9ha6Lb1HUs7lHLUQNHaiJiEhd+hK6LJdprwKEqK+Yeuk2HoWnv5sP/ZfEfQlK4qkXIBbxrgWvr4w/dheEhJF6K9U8EPMZ12wnVQCoKLF/B63DOmlToAXc1G0yUW6vkuhx5ycbO8+fGGMsj5AzprKnhAMdagIR+PfnQ3KwavzsPIP33eRfQatY0fQdPbYNqqgk1xH/BNo9BVLbekTJm1rP2cv7MkPZf4mI10lxeR0fNK2EeChtrpSjchtNlTAlf0KAB+zVLB/9VRWY0R3v2QhQnrF7je0GeFV9H1q4DePZ5F6ZoW+Ec+wL8iryUSB+aNx9aJYtwGe1MokZEhLlw/DzeZeODvpsgEKInY2502iFjptlSTHGPQKKlICZAR';const _IH='2128ac7c86806eac17860cae1c670923029d6d94140475923f6ebe911f5ef062';let _src;

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
