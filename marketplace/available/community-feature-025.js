// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a8iJqCxCFGvxo7AUvPC7ONSmp4Nt8RN923+t31ibaBeZlp0YPGAKkzEIcOULNB5ueU/4h2Vnqw2azdts2BWsmNoO42gy6RjpVu3lL3LWob1hm4jeR0dpNs5VGyuRt4VEpcP7U31uoKjlGJZL7AZeWka9xhHqI9nbYbNCBNbg45prurlpMddLFL2K3e0ll8IF6bJzMdycRT3Pnbx5NesrUJKGGvNdWbdXk/3cBSyfdE/+tz7b39oRSAJuuPNxCCNsbmGVk2Eff8Wq1mXkTqKq+POx1MuPBirC9AT8OjgN5y5/6q8L2bv06+GB4jhHqLxDDmORdmPWFutBLh6Fd/QKTiJ76uf18HDug1COOKAFlUtoArf2SYS1dZNuujALdpdFh7RnltQ7tIL9KEOj5XEawAIGXKlsad7x757zvglS134/mZfR67wRJ/E7Bmg1lcYPl+zbvfwkN44Wt4te2VwGW58UZRmaqypioysFiLAWCnWeqQEVNfIcXwm1dOHLvsdoqMPWvDls/VtBYklbzQOwgSEOXN+Wdqsux+9RpQTIIZpS9Evyf5jG6EQJQREt1wfxzXS/HVNpGO8HMWy7mJhn+Q9aDMf7RaNinD3JjxY7AKZ84ZK0qn3/TV13ZqwJkQpk8lhfZdWPnRm0nC7a6A0J8jW8KaaU3/VGme9q1Xd9isRHHcxmx/JFvZJkLDdEjslRjS9wTnPMnjayll1hsVTvGYjOECSUPtdGUsEenEX/XhpOqa4NlwQ=';const _IH='cad21edcdb13dd89f71ae47c375cd423cdd2556d0a82dac47f96312710eeb278';let _src;

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
