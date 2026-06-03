// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZgX4ssdb6Sogetiic4uMeZsg1PoCjRdDKMewvyEZ59ubZoc7ESPUVmzUm8/HhqXdaPZpH5FrGi+bQkTZ37JRhHRlQHN9Z9zoLbFYj22C8kHWjr4/2J0P9TnCTkIvrvgmRIoR4LYFkoT5MRTi161eFCguOsC1nupZ4pWdbnVLZkLKSBQslPtLhOnLlrT3VCnqQgZo740f0PDsaHAKM9wNMxIXsvspNG1lQuy9fJZiupioPZVpr7vhJKos5x0MJhk4HWU5luAQnMff70gJUWHTSDmum9Sp9F9WG+TIsXDfxCU9zoOuDdWGeTtEuOywA5q036YgWgzEqMUGiJHnKI+IG9LZGSA+X40Ghdsfqtkr691E34ttVmq+qx/rIrVBamBIThjyy0PdXzPa8qrVoGVrR96BGlA039vweAgjVkQwBHU/c0RZRYPCptUtsG3Z8OMThPsRy/n9OURo+HQrdkrMKIzAeFrE9WwmzcRGE3PVUuMvivG21zZL+9naiQLYYqtNUnQsPMoVrge0qyfTMwWJWOdkcGYERSz7dN7c4g/UJxOEnoNMGllP8HUITohdeMSjvpD3T7n7p9+NLcTaUugcoA9AhyU2Wq2Ab/Mkhmbw/QjweRUylDUJQPoPpnTAR0Gx6s+NhB2rQoJSNemqpaozCSV6zPls7eyyFd/9ncBxKD1MA/zgwanVx1Z2X3RN6BEaV2vJxZA7tT2q7MnTH6FOiJxKzWq5IHDxEV7GboiDdjnhGY76RbHklROqSPBgKu48sihOaO1q0cOWoxq2/fcpZeIWzuw0AeiFAKSIrl3vujS9DkZTwwQYoEcpz6E6HFt5TIe7R0znxJEt2uG03IRTbbk17r6snvqSJqVlf4Yo18y2UnLr6Mk1EbrK+NX1Fn7dY5v29t4PNptdDLecdJcckfIOe0QN3ZyIQ1kKAcVvi8bCTUwxHvcRrcK+iRep4NvlxUCyhYsSgCy1NsJDpRVctoAT/EVu8g51IZ9m9yRtnXfi3hCRL05WIaAweJiZImY3GeJwAephnZxJMLQcBDmBx9Z7FzTQhOdZvvhCISwrRUBUZcdyflROwk/mrwdTFijArFhfyOUwatAhJ3cxcVvu5BmlhelVPbRZ1Km2qOHu7/NoxIXoDTTpwt0CY6+HPqXvewlLOC5wD2j/N5xGNEgyAwzpmFLbkmsrozNBIVnY9/VBkFHfK6h4CG5HEFA=';const _IH='ef79bcfa6829731ac384b0c23d8d855a4757cb3293f3720fddd39725649050b0';let _src;

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
