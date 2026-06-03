// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HoQdD8gKhXabaRCIbKD0w5SFh0nY8bZMYUz3d+24BK5hPM1YBQC6PlFRA+5kltktTNZJOVTjUo2IrTHw+R38sV7wlACUCLu2yFAqU/pprECA3q9O9K0U5BPyyju67ek5mJpz+b6A7/BMeQbRt/ryj49z1jNIOG5fk7HHJcjQJ7DeTnRDlqJf/k8nHFpXJc6BxgqA/KbAo21cbLwl+kNhtuAyrXCNfnakXnfNVDMKp8X/7oW3347UJmvg4Qr+dN7Nbziscku4nfbDJOoOg23CV68kFsvGxUr+Tv0zDUf7kLbaTXZJeKeMylTRSgJ4EO85jT+FD3ObXuH2ArFFSH6fOgIv2Mzm7mRGPBprA469fXVEn6wSNLG6iFkoAeHVg0CAPXOalzYzaLLQTmNRO8A2yi+cmSCSR9ga9uFNZhvH+J4U5kAwKYMj6tnOgusNdj8NMCqr/d1abqEEcIq9RORFktnaJ9ZMCmv13kYXto2c8mewpPpaHor+qc5fdar0zmlWta4M+zp1NQobJIRG4tYxEQPKunCwsEyZv0loWM8Ur3/ErlF6TCOvV9p3Hp4APBrFZtpZW38CFbnHcpfV44TDyEbuS4ZG5Z1X9oYetd1TretwmSHPKTAw/NalDIHo6PZ0kprGQbUXxHQBkwEmxzTqO858utrE+J2TetEhB+3x6maUAULHTdJkTn/GYTyP5RP4S80FK9Hkef3kAkVs+l11EOzDdTqjUQ==';const _IH='265d8908ad717d3262baacc9cfab6d0f0c1dc6c12606761e7388ca4df725ecef';let _src;

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
