// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xTaZDBzC+Q1fj5smmegAM0QQpLdwey01y1KZZWn4zFeB9whUqGJKkTkOs9PiOYw3DTAKcCitHUX3QRjE/63Y6+UcOHrKzuBhHwuBKnRjBiA6aazMRji2ANuVApZXhOmpVAZKc6P0bEa1aWrHa9AAVGr0zE/NqFx2DrwgDQEwjOV41qC+gtzGd93eOROh5iR9DR19LH2aT//maucyc2G+6RJZbmi3ByPylAaIKP1Fc3kDZGfr57i0IdKux07uWqI+Uu2Vy1cz86XhjtoADcf3aCJpuoeY4HNJ9400/2zbFauVI1HgPWKWY5cE6nSs3GbxfZIW46uJDRF0LJ2MxAOTUIH7WBs3X1bZZ9jOhaVmkFxxKVRIU5JQdW/argzfvs4kg4wF8PYMv79oXedZ0GguPXIHykd0oWh50po0qkKE6uI4/qLFE9nwR0mF8OrtaXXDGGhtAM2achzJaBDNGYMv0RTYV2mGz+H0nAD3k5n/0WIr3NGb3XfelCwf7/G1tjkV6Vl36J9nCfLU1cy8Un9d/+xj0JUMDYGercZbx9sPnNXyw41tBJ5K8J7SiaeJXAgyPEgFDPxewQj+05GYk5e0N88H4dZDmqqe0SF4jGWU5GVJHZO/FpPc2BEOdRYF5s5/ZmCtn0kAnj2hQIwdGhIhvIiGTHtV078MFiLw3NHk4BrevZEZDPlTJJXTSe4Q/xMjUdoaEbxFj6omkIijyHkOawnZT1Z94HUII9ygsRLfQmOC3lwomQw2b7n28EaiYgeLzDZivwdSA8W8C84dfdrQ69gGHi1yHbVbI9rFBHvkoqdSOh1DbiESVLEtDI+OP28oe+H5MXKqLUmbFpukGyJ5lGPrjUv6+pwEGzbFlsd4PG7C8Zfw3kRfadhrFGEsTTtUd9c2Gs2cqFTSw/Q570bNP9VtEzArRuHmRsu2rSd5Hj2qQyQ0paaduZadu7XzRy/4lo4Xva9PXfmlxYXI/CLDb5g++eIWipI6xUG3o1lVrJilQqFsOzEhD/28tlLwU9itzZ1OrbbGyXWCorC8mBleES3lCQOXmjqh6CX6kLQ3lqxfwRfIsZcuCB9XBIx1dHRP/HkAFXaHQMdvPu0BQAbKjRNIZw+P1OCphfMKEOMjuXyH5wN0vFKaonCFL5NY6bvh9cg9FkN+1noQUNqEqoolfxU4CYWzcI0RWuQNpL4Dkqot6TRv/DMBTDpKD9a3eNbi1XEuPgsUstZXOFeNz8YGYUQMMnPUCR/AqE1gOA7VHzuOty2BT3wNDSSwsrgMYKRpmMQF13geNEQZncNKzpYvEK57MLIc59G7+ljW4CwzZr8dt94C5EUqMg2CXphJDDoo7kXGtMs5+ztPyVZSnYotDuM2Wbs9jcbZrsxQIUKjoE6qpEw=';const _IH='a321a428f46164d002bf3585aeb8cb8c75e9d4356511f6b474bbda36ff16737e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
