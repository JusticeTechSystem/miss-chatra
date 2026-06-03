// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QbZn0nFmVluVOGz6tLcNZBsSx5GzuI7Bar31utPvKrQlIjqJum0qplndAjnfkoQ3SzpW3v60n6OUuejHHiG2uzDFO+Q2IJHwXMfbE9TiExdG9C2imJCpj44rR6GSpuB7w9qNFVzu14xj1mix/7+weSDFN7iX3sfCMMq4BhHCUUzJzCeyUlA7k4OJSFNygMHl/jxdsZW2xQ2FKBDrdeCvYJaU0qVN4n+M1W1ynHARb5ECWiKdWwFoeVFfZxzEnIWqtHp5ptwM0wP4ttqdI2lkgC8PS8gtwKrMS5UGdYNCqSRCYlQtzrqRSdJFl7FYEQLSXoicZ0Y87wn66GfINTjs4dv6A8ztEZf5tIZF+bsGGL5T5A+1p4xXk9Kj3TWw6rVPbF5UvgFdepUG4/swAeUjHdDn2bLYOQ1Z+6h+TQRrl3eMcvg82BXvI8YUt2nf9Hbl31/yjox81tv8PA9naksHrLLaJL8UJQPudF1QT02neRQNJ6TKkn3W/H11AfTgpM+PenHnY2Fi2/COYTgQWbmFGV6pmNMbyVXEJjvkkQ/HZv0i4tBqdOmy4PYEpUmRwF5oOjlp9qRcOp1gh/oYxJTDQ210zdlw++sBG2s+6uv635DCDoEmAVVnGTZxiDNxutVndlsEo1x9UWO/lhOvk4tAfb7vk2EO30PbrZjL40OxcW3ri39zSf7OvYSjfVEpiHPLpRTlio6tRwWZ9bMpU35y7P69gAqbnqGXO729+gtAPpokow==';const _IH='507af1b2a42cae54ae00968a3c6656dab0a80a74e7090729d156fa833e6db000';let _src;

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
