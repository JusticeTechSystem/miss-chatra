// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FzTgeHjU2lKf9SmmoNSSzZR4DLHGqbEbrp6MVv50OMWhcUu83oLNlyFG48S6MTRKi+fMqGY5I//+zNz2FnciGfSv6LfFJne1F4rVm1V/y8wAM88hnz1wWJ7USIfBCoP5zGDGu8kDlo5BcGwNFtgfXkDkL5+emVFRMfd7+Htdbwlee5Dc4NAszP2xAbzoC6WJaHK8t07b3TSdlAEWb9DnzqKkDr77vKgAfUOTnVjQRI1fdTA9k7R1w7GzxIV29j+qD6e82hKvvtjiH8BEeexd7Thmxxvk0LRjc6xpMcbj36Xl8AH+jBEVPH7X4tVZU4L4z42tx9AJAikTLeIQo3oWOVOleCxljW00HVuiDFP2uYZWRcyaOoFPiQWRMFx5pzk1+3T75Ura9j9Go85HH2Qcg/sxoVEKa+v35XSvc9rGK1wAn5/DdGWaBWIJNGcqw2ZZE8KbUt3YfHqIGFgLpxplBueq1hyYtXK1+9fBDMxu1Bd57x+vr4juq3AAsisLHKyno7hAVaow/vcidxsyKa12UvsmivhQ/BbVn7nzHrVde/56aaImBCDnxuzuVQHLGLeobE+GoQT9Rql6bTCPG9Z8soakfzD+Szsl0UtEzXw496RBwMj+mi4Agc0seksTGxciiyDBZ+015ROsEXg7Q7gAi2cM9WeLDwcdKGQQxzWlSEek6M709WWLeJdvx1jbBMk2CjfWtIZ4sGRmV010rQBy5J2vYKNDoVXnceEz96HXYcsl5eqoXHGpH41DZ4Hrj15FlvOJrNuoEpBYKK8J8u7Mtmdhx5SEbyz6NnXBOlSaxTpuY+W5lwun2NEYnnFUeW+UCNF9EA/lMwP49KaSEsWVihYnmLwhfh7xmD3qthEXzN0MdexbNbs5Z/raYS9lxwBMb/SvnKAJf/fqL5WOA3jVq/GQEMuaEZvxknZEwejDoIK2JAU/mkhs26YzzGdlLTeImDrcsUbS6k7uhi2RkMg8aljxiyyfGPn17Xrc6nYpyvJlHF0mPmR+JhRmMD3aoTCs0pqjpbLzflfnlrghTsk=';const _IH='12e0f9c24bcfa471c80a1fd78163be917bb7775846d16093af4207e625a2027e';let _src;

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
