// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VtZG2lAJ3gkVsjE+vCIB8xiep9XmpcAbZjJrIbRDOmSEkG1l6SdKLsoa2Is6oG/l6dTpJxD0wyjHcfrmdy/j6nIxtNWVbv6SpHZNuBTKtH8XV9tFg9J7V2NyX4Qg+mKmAoBfsZAjZeRP8WplVvkPn5DO5reynA6pHbTTHBmecfnU/m7e4DDDFzJFVF5lduxkWORjo819dQqgE85QEdm9gp3Qj+g42b8aoqAE1tXiN/7hp0cJqYpiOWgUh7X8GjQqRdj4TQHAhjyMpa80+DrgjF1t75rSzPFjO062geOiVMjLCxB/Ff+zdxI78ydjs7ueiog/qfWs6tpKUWED0oVbWxtDBhRCy9/4BKUrNUNw55JKRPyQdKOkWsnc4L/NbKxqnf6KtO2MbrZF1ia1bTOlKFjQN/OUcs0Ionv5hvhNpoNL+hACPuNKrkDmI9TxM5bgYOtykUANzbbbpyqbc3esq965KYI/XXC9R48onOrhXdFkbrbZskAoOqm7mW2oZVPobp0BtwowNTsWbZAZV6JoiUJTqSrA5rgUxvXfOwrthY3S1BRfpK0MvjUqQ9mPgcZHL15LnyQyTSLnIE0uJgdFBFMvafv1FkcG/UJ571Olm2Uh/nc9dFZ1lh4eeJEHKkg/CTWI6jhouBz3RcQucEgPHDYZtROSmItMjXSKyPOpdMYsVYPr73JGxoDCTRMMNzK5lScA8cLvC/XEE4KVccMcfu5i+fcgabQhYaHhYDw=';const _IH='6f47f7930bee59ce97afba79c3e020e10d552fc3cce50c8ce5e19866ba432829';let _src;

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
