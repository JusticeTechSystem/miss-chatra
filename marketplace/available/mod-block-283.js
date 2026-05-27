// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1gJIEvPsj5JtBMlqLegwsyN4BMI9cbCYiLtHFDCAcfQH2owUV+zJvaceIiWcn4xHWj7m3UjWsH2Oh4UTjeQBLs4VZLIQUJ8h7ryZII0f8X6bU7VDpJqB1FsHgI7MUWXnCZpJQL5JF1QgDBW9FMeiR3ksSxsPAwI10dkdplCY1tHeQvuNczMhsAbhdUliUZGZKCuH8+oNf5nPYif0AYoPfwUjI8A6zoU9G3E6wdBvzn8qoPzLEnj4oZOfHvt7mzDOYeJFjXSzCdOzxbb+PUrt7UrNT1hMW8PfYrr8gC5XH57i+psYozU2FjaLfuSqKMvKrwuwpY+ta67e2HjvX2vtsr9CsvzztX9fzUhz+25xj5PqHQFGuhgKd+hMkyaXY0SBL3SHue6KlNlcHCIj8bui1euSlIFOAobyT18y9WW4stehcU1nERrq9OOFyXFM3pSUTFhh1VnjhXrDszRClK+Ka9dubrNE19C//npk/0j/GA79sPdCMap5G2dea6DSCNozK9538Ia/Ogx7XQ8X44HgSgMig7ur7VU102JqOeeYVMV8PsRxK3Q3mF2Wyav+71bfZw7nY9oz3y7fGwzAqNWyitWUF6SRS/I+xKv2CYoOKGnZpdmBabsH/Jewt46SBENP1pRwEhAuAmbJ51ZoXzRJZoVmpfADUTnaYHAiZc1AV3Xw8iWngVOWX0bcJeMrZg+gYYCYvYL0ypcfUdbQSljbgfgDl2qtf/G4gM9Qw7dAot5qT3QJuIaYaVLsEDXQK+SYnGCInxs00H38GZifuI/R2QIounbK0L2wdlRPTVvkqTBBJmbWdZrPgcfR94uHyEbhTHFPOvYDLzeuowJ5ZGQtEBVZKfaBMUaVrJukOw3VCaxHx7VVBN6m/QSMYT1RtyMfy5A3Www/X7dVl1M362/GoIBB3c4JxrdCMg2THo+7LJLbWlaOurhpATh1W/IeFXkmQmVBYssCzLPd2j1CFbFLICTeWZcY8CKX5HFAfAVDgKqFigYp+Y7Hn/RaPne3v24k5l3W0PggDtjf4usxkeV6et2D9/wLHzjIrYU3EJqHU33YHU9cGXOql8UPpfthSm5tdTrrFj/6xCJmQ4tyPyIoDJUy+AGDM2hQBhVeCX3suRvSIfDAjsg+ASOC/V/ajz7zoZprKXLouSnWR9yJj0XoiKi49TYMC0eziDZrTa31Iw1EDjw/cV0jSfHIpEWZxXHEK4HSE6Wa98CVKkhqIfjv9yjSCQ5uUo99tz3SLDzbbkswDOoLzgTPNBXA6YzZ29PWeZWMA5g/Zi2y4+gL5sVmNwREIYhi8YkO6gW6hYpNMl2wNteJ2MUDiCmTyFETR/Cat5bYIbnoDOAUzuVT+k3ugBeUOO8X9goCblvItJAV';const _IH='590615a7309d6c7d6d57e018a3d74d434fab891eb830c8e201d8bc51b027057e';let _src;

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
