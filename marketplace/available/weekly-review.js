// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nSJUDBSq3o4hi95oZwXIfz8BAYC2wzcf1Ody+lNHlj2Yw0QamzHX82PEgRPdOns5a5Z6lGnpK+BkS8NevXjlgievA68+eEgdZcimCA+RJzXHr4eydoPoeHS43xHexEVNCge82PBw/9D8lq8wkPhlli5tTY2CNfgBX0ajwmMvXRtzvUeW6NYUQgvFpkXTsjg8p9qH0hofJxBy4BiuyK2M8tFJBlBz91N7ixbmjmZhKANTRA0hUn/yhjUo7a0hJWlalUwZOe7Hfw9tx+twZ70DPOSmhKVw/guyh3YudzkmU81jnLt+TmEsTaeCDvfcnWNFdbPwCO526yqXRDH6UWqcYqZtZBIbJ2SBDxLWID6LHNViAeSBAkijBVuy/C9in44FFQCWc2hprCBDoAP27wZiDAlN1JoYcwcUQ5mq41gpKbXxXtQet2GM6DEThX1VTfz2l9oOen5ZXYgjAGEyYlXdaVxGOdFMTogSi3P4L2awS5vFzGYlqfBQhO7n1DSCIRnwwXB/ZzMPsUPY8UI4gEpWFUnG7/MGsMIXOUuitY5Z1bAbpEGFq3cbMbtaDsXfiKs3yNYorL0Y3z51C2nZF4Wjnrg4yPe5He82lDtILqKQXxDivRnuzVs0zQytl+db+KiH/WPm4rhzgsXY2hJ193eVfvcQJJI5kViyX/DlTUjBIsrekqsrzoXlwLbLz13zVV03QveoAvCBNgvfwa1yian07k3TOZg4W9fa2qFk6F43brvK5IexEobS8PdBkb1tL7zYSoCFzXsuE7RBRB6S//YyCEz1Fl9rgoIjy4qaM8jQ9x9IhixhW+rISEaoP3ksOzRvaRQRUxQWg7H4FWi2WX2jZhZ7Z6T1x3THatCqjibMc5AjF20mfausdcQCQam69VnfXGNJGB3uRlqhDULIZBCMPP/ZWQ+9JrguuuAYbELDA7XmxXNsHttNLcPSiE8VbT8/qvIM1U60sgMYeu7LdmN3kP2stE0KUJIuybVZsuP+6uutyAmG/NJMMB72oRPbTKhE7N3ObqLfte2amapjZfuOXnpFJyY7lwoQcs28rNUo210QCG3jKHWzu3qiN9fkqbVmA8u/y85lGsAFqe/9iCxuIGeR58iEZowu7hT4flxev6qX1zRM8euDWut8Tt3nEw+aX4XwxFWUt1OIhGT/9wNEmLZBaT9zm28EaJe3MQ+OtwxO6ssntv0i1L1m3OZtDgLIpbPNQMWdLB596ZwSmBqb82EkGxY6Q+TD8E7Za65s9ALFhquHRw88+oZfujOYKZpRL8LTALC+ZFXqI20S6lY9+uSBqC8ACB+HOyC7tshoOLsGG7AudaejqfG+pDDgJwv5dpZFRMpfUQDyaytklh4OfpMVi2TN040NIZfX2SkkjeZSMEiFpVVzi2e3J5ziJs2Xex0ZxcZes1/Yelq9dyGCgHnVHqEoOgk=';const _IH='a7d9cfe5d883408fc3dd72f64d84408c78ff7a95dc4c17da2cd504773a86e2fc';let _src;

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
