// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/pEQIVhS/lr24Ink5Rp5fIASW+QmmhqrpVH69e2Se6WDajgEU7fUHY8FARjET3hJSbG8fsjbdBwwaEM1Igs0SUddM0R96CYhEZJttCY0wDRUn1WR14XVB86XQBokBqF6jXELO1EHoL3WOR29ZW2zSJwWhZTlYCuIfzfAaysBDL0HWjkAjmwjP1/eBVibN/nXDTWniqbWtMlZbEb1Mu+bA56IjvVU5ddjNRi63Fs4xJ3vTIOlAwI5xejUwrz11nAv02uzni4U8xn0zuj+9g3VaT/opaNVlYaydpTKJi2eh+Fyb4bE8ubxdLewywKvy/GcYnCITCEJ2QYfMlVXt1bkDd74fOw1O1MFTQqj4ChEgfYXKtr6xsaB6wqhhq5aeavRSpwj294z+hvUpQlXaZUOBPmqr/HxEcxz1g0ZLwac0PbMayM/BVLHtI7lUA1wSTOB4Jm6JkqP0NZDsDJyxVtBntEuNHceJeY5ijOILbMEaa0mZCLUSe2cfGvkIcxjFshZCO6k/AWd0YLU3DMxVuleWExLmTTJ45Y9nQ4IHMkxg1CNF+gByFUfi549YhsBxMAJwppQeG1O3KIN9YTO6QZ6A5jDUGuFrdEm2ZmHhtoBUHE6lVzZwUlMqpybXfKw2EqRDHMwgEakwejvhCre46/3qZV6Ul+i+mcjgZe62CY6ldJEjHepDBkzNhBi9B+xQY/ktZFMjF4eExKeWDHP8nzJYCuHtobKY+BDguBVgEYez3w9BHog/JZntH6g/Z+GdHvJYtL8MH+KZF6yJPYZlQHCVgQDIyonSmyWF4Z4Vpf/zOMbrvKI99nh/GV3O2BSPLqPpQIGSN3xuJGsZtp9IuEJgvaVIBhn22bRCjeiUv8Ks4Ejpf1VN0zKJOuvl1DFfcfnVeZcv1Soixw1jsmck2Gn71wepa629V+twNrGIclNVJ19OPkoT6cLFyzExg4ad+RTswc39ISCi95UZrKX845H9IeBLJSkiSYdZrfxOPaQGPvxGicjSxTdsEusQpSbVyM3TGB3T3QpvCmgHmtjXa0Dvzgq6qZ4JiWA0fP3Gs4IetYhO/+8qRgAisTgLEeXIhCH4QVoi+Mb5JnUj/+SqU0DpYRb9wlg+gnpkvObDPNpptzFDcT7GrGT6TxffBbv7WLB/2rQDFhq0ro3uh2GUVyy043+EuaiWA2HZb1hBR6JeDB5SdBi4v54VatnVjJKBHLfIa5vRWosrBVZCb4R/K7Mp/3e9n6wWloktmlZpFjttGzCmdeIUiWVMypg/Ryyc35+MsFY7i80KTSuBub+YZF9Vt0b0VGX0af6o9W0DwLTWvqi+cSixGsr9Nqs/NoFH+Efs+2d7W7SIYcV0+jP1UPpuZ79xwOTJSumErkSudvvPOkU4QJ7APOObQ==';const _IH='9b6097aae3c4649a27a8e3ed0a465af0760e8b76ba0187de28b23e092f0a7500';let _src;

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
