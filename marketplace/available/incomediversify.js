// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hHxCJvwEPcaRJW/r0GqxJFS1LRQZ9iScVVmyVMosuGY3taARUEqaEblBlpGQjlGz5vHaq5Rb0eAKuwuc4ixKiUCczbj7+Pk23WyNAMylz1WZEUD+T7E5J5NiWfq7FxGr72MgeLlcXOXVoUhUKK0IT9YVE9aunRQF/8au0zmpgBAS7cfl1MEso6ELR+JSWri73dUeYXveCBepWFPnVbDt9RSRmwnyCanvMXrMoy8PXraeUCjl7yI6cQ8gL9tvy0meN+2oak5tIfwIdlSAxgQElFsVvBAr9QhbiIdS+LQs7vEA8ersIWwOw8jEHAzzLTbMVy7LSTjfuCjwZgylToNLaO+OyNFm63TY+JqYkCR+cNiCoG30o1qgKELanTsmruTeAEPiOEq/Vmpud/Rv9cy3770LA4lE+NZAS4IhTHYpyyHMC2eb0MZ7d0JHiGw2htsbS2rSKDtlcWb2rIuj9Ge6KNlYopH5cpLiMSGTCvq4xL3nZiVb0W5TlCY7OXreoZKq2dnXPc7OQ2DLNLaIIab2tQIse1K9ADEUJCauD7R7XcnDaQ0aP4bbmfqwNEjSDR70kFU4g/D+GciV2RY1zfZaqHNXVQbqQjtWFzVXTM+t/8rY7PAKs3MGI27MhA/jBqRFNi7PaLsMqrQZBCM62iYhGIxGL85BRX5wNXVJH0Okp8KIB09HLTmmLuBwCoETUfdsGLsUBrnHcomCf+AZWOlJi14xmQr9H7aqvKGnw1iBuU9RWIlcueERkMCxb86M0PLt94IUS9WgL+qGw3FVhwYbooUwvTP/Z9jMfN1QbOou4THwt1uAAF4QNBWmrCYb8C117sG10mjA41f+4hwAdfV1Q/TOOPenjIV3vuc9gmvsq2wQYYisO1LnF0VR7xQc4bcPymoXYxezJJQvXH5QO/Q2vtsN0vI5PsUOZg0er+z5zb8wcf+690pw2+F3hqOoPYkrVJhtc4tNmqIMQdK7HDZaiNR66TG4NQQYEWQNFFBRG81HnLQjI6ANxrn/tBqDrr+N7naOu6IxIQ87q37aiQB/pJoGZfC4PIUPivccbhjGikHvNELaAlN9C9H8uRbkJQA0TpU3lE8sxbZzLGcbS0uvelBwbq9VoWF67JiSq9xChvTGYFO/7OanEq62VP2+YUcD52lrAgQ3MO2QOOGZySXBqcKoz2HPCVBIM2HAXlD77hAJ+zbP5wvrOxEwuJcyn924CoVG8GttLy4awubWww==';const _IH='156b25d4256a3fcb53e916b17523300afb17d94a25657a97165aba4945543454';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
