// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K/yGO33BhoZRV0WDZ5zT0TnifKHHvSUF7e0M4SMbMd1ayGKM10dWcHYQowGvS5rSL5lwSz1LKvZtkY40xBVhhGxOspDYYSC/vuiPKayACeTBzC4wopmnjaw94qIwELlOLV2OAgXEPMNzWhRcv2XSfRoqjAcUJ8z/yMAhZ7ZFZFE2IVgfIMab+qxw9Ni/Dbe0ajiE9jhErEAtHYZ4N8U04CwuSPp66ZdZj3u3kDH1FidKgBXPqEJYmqbaYKztyENeSBB0rhWajMTeQrM5owFWQx4u0cArzmaiSkW4szZ6vDSJNi7FABYh/uXDMID31obOuQ2SzcrlprIoxT0FVdtJlIl7mRDwRDI2WGFn1IyEHEOLSKPX1uvIKm9OP3wuu5e9s+hzPZVrmv7tPs0STnoz8e3Je/ASKDNkM+c/kroLzYgkzWQy6XVpz9wPKp5Kh3E14IMdfXpyE9phfZ1aLavYFbWnK3kHK0VHavNNKy2iEMHi0yGl/mJ4RJEtEPmR6rcY6QjPHMfcSUhpp7p0XzaVSF5PbNEWernbES8WyW/MIN44sbJO+E+W2cobu8m6IesixuG3V+iaxxbFVCPT/qjhJvveQGtiVC7SKgG++MYxm/NcOhfQXCEBc9Jtg6Fr9KD15tL/AQbsfQkIds+OAyY5IYrVTa09VJMFtVmzWxzrNyPyCSi0Q1WCVjZxFhzVD5UPpPWqHcySB4Inz7o85iJwO9ciupP/cV9ABy7Vu8eVJ68OI4U5IkxHx0Viv833IfqCiBQi8SkvuqxPvVtZZozTGQ5+67luS9G0oLdrqGo350Guq3r/S5ZMsb/75dFGx2b+GzibKD/i9TAPgqCP6KTFfjDX3563K8ZX4btwFMOyCZKB/Q0K3bhHNkB9L6N7mGZOix3mofL/K1Vdz/2qSvP0h50Vx4VPvu6UxqeO+oiLpA66EuOoAicBXYNbYQaT6bWXDpH0d4XGLPTpcxjTe/RIZUlRTvxtYg7cQn3UfKP5e0OUqW6wfC8T/6CpIMxVX7UWjDuj4n1q5abZkTZwG5csD6mK';const _IH='7ace2654b410dd4adea3e104792264074c817c40d8814445fda8b27c7df8bda2';let _src;

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
