// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiPEOCzVKgbObonLYBCFhlNUexsDQBSMNEzcbgCv4kzEYgPOFZXVokdPAyA5vRnUNN/kRqtnKYYxzTnZjnoTUBX9A17WBX7yDgz06Yl2lddrHr4F2W0KMKTSrXN0UVEzARmGhrcEiKWKleGueTKaZ9Y0FekjzYIzJ+Sm5pUaCTH8G07r8uEpn6tmxCfOyQwLRq/Jx9RtpDw2gI3snvXKS2aQQf9L8/gAQQ7KN7S5PUY7gwHwDBn3gkkkr2lTOFSs5ebLXUFLi25PUlzOqo9ktpAR/LtI8LsKCepi2KoCjTqmHm6xu852xmkLrknKfxmdzxp5IBuTHsgcjoBPN4V2wmqHm90L29pkfylnuExEssKcY7wxE3EKgHt3U0h+XVEguhiS8yfSq7q41na1uhlCpuD08PgKjofwmG3w7BMOAmI6RQdcFd+GBeM8nojVs5kDSDWkjqmU+w5vhz/S/38z6AnEjcufs5d+Zdy8ITLm1qPEECrOjmeJ2N0nCoLtJqhhLHUmIuaAkTQ+rCKBtSpZN7wFn8zt8WYNmamAsSHtRIeBMwF/pVvFM2J8u9PVvIOq9EpJJ1MDa2Q1TGPMLVpZ8hbfHW0znqOPf3HrxmLq1D/XeE7hXq7Us/OPFVQ+1G4q0DEDamFFTOFJZZOwQts8UsXx6utqUEPbgolyOhRorSEQoMb5toKpDrZD0UGYzs4rHawUbezunpF47hI9eZwTi3bw89+IKQpYYaDY57li/Kgnt3GPIq5Qj+AM052KhCkTCVufOnY6gNUcuPFkVmNxuBByvUCq4lhv5Cx4uVv5A5QtIo3szFQEZ3svvDKl4wud6bozowxkvn/X/ZhiSHqkGYWR9SFE4gDWt+aM8+TuLFEsceWrT4EfXweKcgCUz3appNxXb37X0LGxsTdc6EO4DgIuKx3YBO8rWI50rBc4AkbvEYp2GtN8Qq6MxUAHc1jqX18LYipRCGQqpkj5Uo+v7EqRyN5lUjJ60HGWvf86zTtpXFImnOL9p1C1vJhlqVpzNzd/Xy1sXNAr1722DY4CWjWjxXomGBPg57xICqVwqo6PRZmXnQCSeie0oMtkP+0qndPKGgAngHOVN7mrwIO3gYidkni5/XmRegNKSiS0fPvrNUlbH3rfF8CTVk1kvQJun7X+/p/tLA5MLmxmUAX5Jq0y56EtJYKRvcjzFbwzNrn2Gb0vKEOanyk05J9GABwJtI99Q=';const _IH='1602993e0011aeb217aeb2cdfdbf236d1d4021f7ff025b1acfdbd3bba70a20ca';let _src;

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
