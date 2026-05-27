// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pGZNHQJjkbHCoiTFOQa8PLZpvLR7ZQvUOdDKnEG3Zwq/Ucl8N2uwEoROmczKNHSUVQXuaM7Ut7zYd41BU6huG6BG21s2slSMVMb49iZFx60axrGM8DimGDrguI7Cj4/xyozZY54cuomlA4AJr50MIA7oXT1gd8qpHmibHYjo9prMXhoSlMAWz5ijUH9TSqaV6qqJPTAVhJFf7iDKqZXAU2yBC3GkDOKmy/8sK5+nwfpUIYJ9hgeEXv/vMidDYtOwhlKVk4AN78no9iQM2H80GjmfWFzgDfsgYZJjlD1gxN3IN/ixiZxeHKVlbYJVTZJkz/IV1LLKz0gYKp+2qzMV87ibd3/A+sck6fzPLpi3A5GWxoJUhGcFVVgFjsQboLllLItqBSYUxJukcebqXt5dtMI8FzJ6GXd9s9uY+/GdiOl2fengZlwAFWsBYBj0BitpjCd+E5a2K3diiukqo9Q48pJENiwp2fc/d64iOeLR0GlucXqBLMOwMXhpelfad5/brSKj30GKtTa0onSudnszTDBNAFA+1+YdK0VetnInMtfCBEiZfeFAhiX3lWC+Tj92UfWDbfT9+URQzA2sPsVEqySzyKTRMkgTd+Zy83EwCUjPWf178J7HELnmtejpti3k5Jyuv3qXhd6rnbytVDGb5SKWCU2AaccxyQyEvhYyobGle1cIp6zMg3ElygpQCu8atq3PoqUu3KUZ7AyT8GChEDHF8kvB6eJNoULjynuTow4Tj0lFiFs=';const _IH='bec8f7525e70d69e117e35b607fba7d17e55881b4f64255067349fb949a7fae3';let _src;

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
