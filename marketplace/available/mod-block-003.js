// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1ZU9W/9KimQWCQ8EQi+fWCWJCrnkzgaXewpEK4jSYifr1UxW5JiBA7dzY1jpzFW3iwfHjip+f8O6gQbZCmC0y+G8r1YD5F2nLjEMONIjRKhimfJt+cgw4dY7Ywgm9e05cPFyzV+uylhZ4d8Z3tmmRPiB2yXuGmZ00thKal2b8zRrUncLn/qSVhVLlEVEABrbaWRxmSbTs9++FUq0MqfWFSvHkuJpA3VdeMKd/VGZHUaOn+dv3S95XSluThtfLnJ7a1VtHfZCJ2Ym0ZODLftqEMFEjMne8fPqIo6haYgyAXLZAeZ8Gz15416BanU2J+LTEYLn6dnvq/or0Y0UNctGXw37byXYR+G54PsR+nIh/p53WO2EeKxhq/7dAGUfSbx6atiXwX4re/8ISvLn0WSchwQ4ywFjUGgkayDz97T6xQo2CXAg/eCrJIHKuBsL0NBMqqkFVujKVs9le9MnBSKdSNFhSe3WHg24ooznz9bHSZWEfl80fClHYZWNpJ6JGBPj97SSgeDfpJDP1767alCGRkSNxYJ9cFPSMpIv83t/i+Lu/obQUDMGIttojYkydnvIEehNqC2rOaHSTKJfdPZHEO/P4tZOb9qmh1gqaAjSTB1DC7g0uvVIzaWJnTLzb1pB+0d3nRcrqHc2LY2fKONv+Fi3dSBRPJ9gARBQ6Rxa0om3wuAATrmidEIEPe5S0Y452oATzsvfB+Jw7YTjrH0dcsndxBhY1RU1uz9O/EBjlXSNU19L8AhVTLDLL2Sno6+lysamdPqXpVbO43K6XoH0te2a6iJXct3NFDnYB4qXtcviKjAvAtuZc3WCj82HNXjQ1aHM6sGwmDiZFcY/cG8shBYu7DcErXZ3qxuN/ff+q/GtHB5ICmonizl+TxpmdVoq3k93wnE16nPm7N3nOlWURfpBDxGgPSSe8x6Drhrpb8C404usphw986FfUN4PeZ0PTYwd9u0Ft3gJ8XhH0D3pPRj5obIrEEVwCND7iaoUYWjhb3drydMZeuQkPdThs3qNd7a3aJmJqXnuchMJgk1jZ/yxzfsTOaRAvACDbPtREPqFmVNA7kH1sk1+GAoK9FoxnSqENoa/WEOF3akbhNA0EaB7KtmMoEpIhBIquUO9ZCLDorLGZteoGn6Fk42Fp9OjB0sNuuNrPWjb/SYBcpllEHEmkJDH3+PepBliS6HdpzC35a89pOZb6EkY/T+3R6N/YE2QzkY1X0qUpvzpvzVaqxKFZBPL12kJi0JoxFX4WNsTJpjkuov6PEUaKqkj0nkY+DdHTRC5rkVd3DiLGlcH+FYzPrDGh65x/3BPyNBIfv8ai3RW+kBYSvn7LbVVZ/+ldvZmfMCuPclq5tNfbjbt8kH2h2A=';const _IH='c1375a4348f690ac04f37b6348aefebbd86dd3f1164a68472da8f35e3dd686c3';let _src;

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
