// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MayjxgwPMj9Fa+quDjiXx2hGMJYTO44iAPj0r9+dIrKQxuF7zj1iOszSaGKRxe7raKUiTDM5TgI6Oi/+P2r9v0FaKsuUHYbx2Isq9UWCmAvWT6/jJhTXsLX7jnQl+JdAxtwE25JeeQIiF5SEZ3XQtv5Pbj6OpWQpjzwLAA7815HX3SUPAV5+wmUNocfUczkOjFwez1dEh0GWombP+Yy1oha0m1+w9rPkHD/Z2uJEUkTizQE2wpmLUoPQPXvQevUqh0eeBhS9thIfWrxFKDl5oxPVH0pdQapOQEo87Cw5L0WVC9y0RahnznBzk4XFS1bbwLkBTrpttWP8j3yJeJZIEqyG7C5VjIMZy32BwMaXpHSR3lWw+zMu1XOg8TAb8nzWYYCtrvusrOCXdXIb+ANJYQ9zYN1aJ5D2Qo/o6aQ4pPVQZ8Pjl8VXiFGZJgBayB+PIJqILMBPi8JuxHuGGeAksk8ibuqalnSxeq217tTUGGTwy1SuY3l+xLoHxoHXv8IVtHog/mQrEwZAufpsh6nmQ+YK/QfB39elAr3OCGUbbDWtXWW0KgAw+prTv9I3lDF57griXRNzQ/etf0V2E4gilSIQYhyo94qn2MfK9yI0R15Rlqana88Etv8T7pGYtYxtwg1CzRAax9a6Y2p184q9ln9yw3szzrioSs4ebv0uiYZGZDzeEmQgTK8/kSDI2y7MShzHIEF51OwNKx8=';const _IH='7104545dde6e74beb99c4e2b5031e42875734c67667ffb7637e24c5653aa3233';let _src;

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
