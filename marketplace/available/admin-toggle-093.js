// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q8sc1vMuOio/TTykxS6wMYX/YdJyOawbp9OyFRKRu+ShdmrXM//cCJqanPex2SkYW3594aiJhA91Ir/oAVMWSFmA36UH849z3nIPyKspbv6MlJ1MIfCl7HLI+U3b4ufIAMCpXSORdoFdJxccR4Frftwi93P8cWpLuYTmy4biRYRPsTwvoAiGRTSKlujuqpwPf/2aUOM3dZj+jHyuniWeFVX9qBdSudFNpSFIWHJsV7bL68TSnpempYJ4MIliVvI31WTrW/FWRTSGmJjPETckxn8cmpPt7Ay7psVvx0niBUUQDm4yMhUyh5n2rb9vkLBzzgZzkNUww2WbEG/Ftr2U/APeM5agBk7Q4mamfbvU36x/fm4NBRMVJrrcC17ul30vaSeobO+X36s0iq8pXTUT/yVRDRvJeTVfw3rwmTTlKwbKfhF0BRrBFCz0cq+aUMC9EjKcmMrXYv3qXmPHhUITLuk42vhBtCqFzdz88thR3/E6psv+F13tLmi8Ng+MZ/B/4L6eqDs1fupZcji9aPdNlu9S7moP+gZMYdmHt/RAPzsI5Z5oQMpRpb6C+O+T42XPTfr8EqJ2zcJbO8MHrFR4NVOaJkSxZ3sazTfeksv6GuTqHTyFL6mYx63JQY46Qc+kHHi2Hd0DZHeoqCVy6PMH8qwMAO7NDwPHeI8sqllCGaYtvTuhM6adBIIiL+5SQSl2GigWvpUZZfr9b/U8rBHtHlTII0sNiwIpAbqNXvyaCJLQ7MQt6VaSjq7gkzFKICQ/QqpbhTmArfcSbbSukV1RjGqWUTa72DnkDGPLniWMNBielG4yO4nIVp9ee8HavScJKmXPbQluPBu2/UBtBc0RjqYMKC314RJ7BYgaIzdzEFCbtSmdwiIc7NLrhGs0i3lySVSg3oEBnMkDmXHeAWrTZTSfKxG7l0puuN/924T+V+iPD1rh8HbcWBgJuT/cZLtCVzbsLQewVL9k4q6Vum0IRGeHwSfkPcP3zLZcWzF35kbhz+1Fig79T2XF827c';const _IH='2c67e22d74a0ef30e737a32357d216c418dbc97a8e28fd692befe26bb6105fa2';let _src;

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
