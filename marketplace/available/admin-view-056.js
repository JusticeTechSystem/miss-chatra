// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ceBfPxtq8TsoTQuZil/FTu7LWMTideD3qRJ0gpKsBeegD1WmRk/5t6oFjQf0nIfRhW5yHd+4rRLylYuRNtWXB9Og9pG3PlFUeHnGttxO3FHWoUPKogpCA8l3Agoc64pITYcxMoR03P0EjN1VRMfTMU/isxBKJTJa0bXxIRcvfoHJUEWlZX+QIasEfCk5NDKt3KETloNMkSLbqSBXzqaPcl5RZ4wGyxPw5DNSfsalFgOFeXLYKQIfsyjiQ/qU50t9EE56aj+w7n2vJmaIgxw1MFNTNcfTkU3VmygXQUpV7jA5+JcZeJcMcQ3x9uTBPpKvSqbAbZrQKoErTdd9zGg9ru/3APO0Y/2glfR1syD1evcNppnWqHV5p4PrMf1tGxMUGYLlKb/PvXE8I66V1TfDQ+C5OblDEzFfQattXA2kGmKVpvC/z0DNSDuVKCcilxRKpRqZjs+nvKOjthvvviXk3JboTfc46w32QaWMqQpP5uOSY+Bjd2M1h7Y80cq06L/0jSzmLEAqbp7EKs+NK1pJmzjWOJ5y7Slil10pesEKVykUJyeF8vud+rpeX3IRmYyLpORBOC/McocbNtLv1Ruo4jUS0A29EKdls++10TuEFGEgcEoFbjQr+Zez5YF+krg0FEJRRSDtrD5C/U4D2QRtmM8zW+pEYSpVjjdcn+ZdawMSUUGBVneENzWHvUmMOiTwdy3O/nnodxV9l0KTCT1WCnThHGvbCLWIDRf9mgE+lDk0C8Sv7KeG4Mw6hlVVnEfRW/VFolu/vJR2mp+ihvxDS5OWs9VhzGsOAEurngCR3XDqAvNoBl480wkm52qb3U/XDE2pSpWWYgGXNMx4NzXpG1+D2mGvh9Kuj0lzV1E2X/W+dEZ5oWLXe9vSMvYElI08QpuEHBKv5dtQzQvCG0fY2sYLoVttyvdPeAFbfvbBb/6J3Uuw0iBn4QC9+iShIWAUg5KE3QDV7Hjwx5tvzS2mHjtTreOqjGK2Atd+sFmG6A==';const _IH='8c9f3c48206fa14ae5d350f02cb08734d04c748237ecf9ffe1741c5d2a483387';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
