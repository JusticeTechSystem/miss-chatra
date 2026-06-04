// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BfkmjmCHUCQ2ONhdWOpKoyyi58X5l0cAantTxTTROYR1XArT/Rd5pLNyFtnzoDOGq1bSScdXEIqIkJxRCY5hfF0Ao6vJRClPDFrn2gbKs3Ilh1Niv3W8YMWHoiYD0dr3IgDMvkbASzAFqv8M6E6YxFDHJc7odwrH2cw2ekUC9MW34NT+QolBrc0IZsP5WUW50dgP0oGszDdMaMtStmjH6UytnXBh/wBZJNCeizqhGUoM0k/1tmFvvBVE9PIfIrOVPm48oivrxuZ80FNMFn7aRBAmDjrPx3Ef0Qw76c504DYX4pjaY0DeYEakSTrcNwXr2wg9YHjXh/6cRvIZFcrFAvJsp+XwBgSDHYIDms+R9/ATUvGQS74zRQo5aZQiE9zX9lcHuxwsyYaLD3C1GhmGPKMB6W08o65WSp3A0gWH4x1R/k3D3Q8C5Md7USn2xJFNYDGelQATLvj4pfp2Q9ZgZveSSCZIoxyAeyY6Eamz1kHtG8a8xQ0pHnbr3Atog6mfUnOCakHh38McImsNujWzgXlXE1KzrApY1o/W989+qMgfxkcTkoq3pgTCUepQ7+HA3OxbE3xr+MLCrv9Dqi6x5XqWg9107ALZKrTUKSiAsnb729GW0cVq6lxg3N8wcKD9n50AfqyNPDg8FyHtMTcNDe3ilfbxk/+VMKQk9+mlIks29RKjP4k/6UTHiEk/OqjQxeXLUDyb3NHRkMlD5WmvkBhtQihNqsvVPwZaI6yxb7TRont8UXSv8JLuH9txq6zfEuza8VbW4XQO5yy2LnQU3f/1z3nBZVlhwdC/lSNOdjvq5k4k2TqAe0Ee6hYooasARNB+wEuWJpmfl4laOF+PYxEVmJ+LqkfsVx2Qz4D1nUGrHwDIiQ70iqKAdb2Gj7c+0MCITmgdEVM89144fA/9dDUaE7z4DHbQmSqzZ/V57yENIvU+WTPB2fRgnBiYBKsssIy2lS42rw3UYYQbWxWVqvvxIMAUrX63+M3zX9B8N8EkqrFIoyhAE3yG0E7fvkbQvwdhadWaoJJPs8TWvZOia/2M0o9ANHlu1/bctPe3KtyESu0oQ3NO7GnOfK7m6eXkG+sj7nEAZAJ6jtyInCrIKdyJEkXULuzXHUZdey6JDFIPVr3vmueuBBHQ3tZF3UMaRXX6+A0ENCAiIbcMKGwGJn8mccjO6NU6iJvXyUI5MI6S95cegwyK9tGPNI1iTlge9TpGAGIkW2Um/BhPmrLapShv/RjVMUlZhAJ94+zylnYKk3k/lqJj5v5HaV00H5i3/lIjqkowUKSch+GqYXjDuajhPA3tfkNhiuTIWcHUwgmxVCxcWv5xMA3oPTwTg0H6mCISu8J/iXkxJBfrfrztyMyEf1vVNEgi1mmBChNZa8JhOYVN14mOBz+qv0uWG1xR2c/fbFEtww==';const _IH='0014cf276b2121a566aa43521db8bbd766ff3497092e221badeefb863c709eff';let _src;

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
