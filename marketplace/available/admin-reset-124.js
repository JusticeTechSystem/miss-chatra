// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='my4w4Mse4cKEtZMK9txf8Fpw8zLdj8UlTKl/GPl/Ei1wgpgGnYk1QiEGb5K28OsJ4Wb2t8v2Ur1Iad0PDwCbm8U0FTWUYboNQaF64Ai3X3zlzgleQ8Rl9KR29QSFxR8gUMBWiJZ5ItE2YBD91AqxlDJIXD5/o0kPF8llxBBlypoBC3Q88bAXwAHe/uAeKq+X+SUHhOW/NERzJLMlpoEGnfBnmcexzOiU1oXaUZoJSBZbOPXxWcPUwj4LVF2EmAHntn7o3SjiCHDRPv6RYDwobpU2e63O0Vt0Zw9HLEAbDB1SAXsUW6LJKRMN5aHFxzBzg4/gF66wPRym02nwM64Kzt9cUg2OaH7L2cQabGVgaelCT3dca8nLDi1G8MDUJvUxQACZpqoA09e2CFE7A66+9kUAVa/DHAujokQGgzgxOF2nZYpn7Aqo0Zeo2cd3Jn5ev0htzXuGH/xQe8vsX2UHpLyLNn/2+dT/MD7Jpukto6qDjZGB7nXZDi2okvykyvG3EuNVtYqKaLOGSHgpZVcWIYzLtlu9tzceV2WnVF20kgQ/iYrSqQ+vSldW90gNqq77qnzs/6UOrSH+tJ4r2f4mVarGgeVOSy8xHn75VE7vprpKi2mIUvWln1B9HB0HItg32a6bnQgmx0/iYooWc8jdTr7dcDXVfhHOU48E3zELEVL8AmZrcLTNNnYQ5QqiU9/9d/CK3IgQ69lexkHbXOsC4LiYk1DQvWgrsSLYH4cL4x8zeeZW2KgqEFSA04JNkd1FKumm5anjgpFFmBWKcUBuo3OZdyoxAu6sJ3RWX9CMFQ9NBwon+NNmtQMwd3wjwyc9TgCHn/qu6bYTNfxMYYpJAxASAMW9CG8GaAvofTs1Lck8ufcaB6DkwUa/9b/vemsLbs6tK5a+fMP3zIDsZN7bHhdmaQ1MFvgjV3T/DnC/B1DroMzI23+JvkZfJz+nTeB411zA1EoTTK/s8Eot6n4zVSi1bdPSE4HI0BhgPLAA/DVU8daUoFJex85m';const _IH='064c7f6ff1834555c075cad957b2261c83c829fc421223da1b5b009ff05bc756';let _src;

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
