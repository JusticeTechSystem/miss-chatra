// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b07fVfq+Wlwj/ucoDrz+jSz4FvDsr9B7lAScFhWRyjtGc4+OXHhvjKwHS1vzziK1e5j0x5/9xM3aubMNvESIJMQr6LoW6OEBlOsc/d+D+hjSY2o3SojQt1kgcJ9GEqUROd85i6zWxZMFEy8CrjiCGx2LrMysZYV7MSwj2f7xtJ5P9SE/XcAWuCxejH7xrfdBqZn0wbn4vAq+I09Bqb01iDT9MDOyU4ZX26KtTx6L1V9PIeM1QEOkmJ6LG4jW32Qaxgj5Sn3NZ761soHWIR1YsUiBm+LixJP2rLnBt3aIvSK5wEQ/qZrWYb4uH4HJAMmGPXkQEvj4137rUE06TRV8sszCg7PELZHFj7WYO5S0mjpSv9vRJZbgy0Xf2Ajoygqo6dcKlSG26UFkhbwZKKZSPq7mty70bF0Gny2uOe0+lyxFfQxHSzDSWyRM/d7yS1CZh6enwShdlgAVcHqcbEjuqHBfDMVgtVqsP9bqk+KlsgQj4pJIEptyIAAi/ephs5Oh2RKqGvk/0TZ2HnwSL8jZxqwrDZTQuJVRSzyyiyUfR/V2ONvbraQ9yyAwBNSANHfh/VXzTT4e5HWmRIkwW27km2LzKTv/3rEsIG6RFPs0tkjArUPlua3fY1Iz6tQV2d8Vy/bnyJZ7RgBsZrxzLS3GePXXS0oUGBXi/VyQGOB86UNUb3esri9J9D4eaYjXE1QBDgbFZZP8yWMcP82dZ1Y96rdYKMfETlcUb9fdZBeybhZUSm2sNhSKCbBKWYQSSzPoh19wfKLcbBwTXJdgT2P3iyGv2LiUUGZAI5T+2SHC/vxralLAKkpz21mGKRKBV2W3sH/We1fIoqFHV8OUSI1QBeA2rK8C2k9Lir5/QH5U6aQcSQ6LO0cNpiP/w6dbEizGLkhDQY0o24rnSL1L8gu4i9pMbHohS6GvX2hVlMESKk00aq8cm5oFnFF8i7E5JH4BcjdXkl7ODIQOq+1BbDFjVtsBEgT/ebF6Fe5LqLxYKcE/cD84F87khcqSammEEPYGxcISMNzv3VkoTOtIxu5XutHBAOUrCKtZFLibdTQONapceP0jZMCWzceBrqgWEerQYMsF29/HbF2ExLNHLFhqN/o24DG3EvFVOChOFP2kpAoJ3wmFvwqyM3kXYIC7U9IcaRRQ0ftRRl8vSMTUaHoM86bRS1cNauywbMBoNCwOAEL++cqDSXLW1V8YbSZvDN9NfxtkXclAFJ9FYAZKtFv5RmpYPL7T6zkoidV/2i+22RS0HIAl60PcCQMMklZNtbszet6BpQ6xOV5luvnLmONicLVU+G25urhE+P1q2x1kCkpNSbX8KfU/DKAJJVDPrs8Jdkdd34glur168Tl3Imx71ZCdbvYFEeQOgKhvVe1FG3heah3qS5CZ5ONy8OPqjQDSnB7vRfEOfnFmmZpy';const _IH='435b46c1df60c6eee588522d56833a235dd20a2822adabeb29370deb51da69db';let _src;

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
