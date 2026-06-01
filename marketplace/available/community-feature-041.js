// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ71fj/tueFU0TqBwq2dSBtTgCFannwJa3OGBrCmntRgUAbBUnY8UvbkN6IL6uWycopTvd8Tvh08rhQa1m6LyHPJOT3PaHpsQ06Vw4hn799ZeIuackfph8ew2WJFyBcNndFkTljb/BrbasdkQE7DB3I+L5KkXfV3vYYnN0q4slqbg/b5DatYeqpriUZbcrh+tClWOsPH10jgEUrXGMkx3aDdlrZn96r3TV4g4hs37SenfjFTGGdZaeVMO8vq4UwFz3+jqXS2oY9KPI1eWyKTpu/BBp1vGwD9ez7Z/sFDjNpWDQCHYzdv+apfyyzyH//nxUhFB5sUGsoyHNxhnzBKQOw1acMIL2YcdCR0ZbzD6u1i8BX4Y0Si3sk526hjGiljAZKA4VVxrI/t+hECqMTa/Rsxvnrnrk3UmfRlR8OqBwvao01OhAPotBGJQzhvV5Pw+hQJVInOzhAYxpxfop0aEQ27JE2gGOoUgckChdviY3CeQgUbWyVOPm/No8UnDGgS+G0tzeDltKtisTv3MxPwdZHJaGCxpo/mGfu/QueSyIpBpxFJzxO4i1KZualkXStBRlJHdMPZobREcmwL+bn77wMfpe5pDwgcd9T+MjBLMuckXGTKVIxaiNgfyct3hBw83zQg+WIoJ04DhjKH3/Vvt7a9TNwGA2VhjA9AIxMBOJSo/nWznGck9GFijlG5MLHj2taVwJra4Mv+96b90Jfw/bPLFKZh9';const _IH='01df85c44aa4fde19a3113cacee4567d5fdbafd9bacf90d64b021fe396de14d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
