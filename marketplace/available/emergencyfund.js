// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxMrfJrcPeF6c56EeOxF/PoBy2F/Zm2I4iuwpFoxg1x+pty3LP+ctlg5Ox6eELQPy8RIaLZtC+mwdGMnzbXatDqCLN1cdIS5wrhZMuGc2pmQl/R8uZVm9bGtj2lw3pPPbYZJHZVzhJ4IhIgZhqmfNrlErbfnuzM26YN9mpbJNVA5tF8QV9T1oPGtvsqYZbGQCjk/I5lXHG/5GivWKp0Ex+BjJ5uKj3iEoERz8vWdX2ZRMXZazKhyyTzxEvV67DskGsqPi/BRmvGbrLXWwuDHEBQjMqAKquZOOkzpOxsXRWlLldf1xCiBVn5/O4V5RVCoa0p7qXq+98jGzfIWChM8+9263hVwO/hxJgbTCXxwOdv6ImeF+Q3EyjQ6yde0YaWyYPrcr9Nw2YW/4nemPBbAaMFbkVIy5pA1w+jWR9KTxgMxBY16AWSFr0/eQsZpdup9xaC3FlWWCe5VsdIE0maHODv9rWU37sUZNfwASUpHX686gbWzk+GemoPzQ7B1BlagZN8CI4eYQ3z0EatkpbmYkkDY3WBXheENhBUDn3dZnrHBnkKxOtV8L5RFMBozkeokNnKciLBv7otBRAJx46HMSPCHhvoKaruJOvxl4CBU/G7NeBviV0062/ciLnjMeA9H1qnmg8WM+6w82fBv6IAdodSKWO3acrWJA4INlPIago41Oih2IkFkHa2ezAc3RQsDOvUZNf6NEQJNoKjw216uMgtZM1k6SIQuaA6QCPRDXzAGjZPllyivy+ddC1XkG/iErGrTPAeSVjr72WLLt90tVrArVAW0RnSgWkNVaSHmDO6GvB0e3UM4uCtelMQqQh8Af5EpKGhIFsui10SPBMh3FYtRL9fdivGwyFMqsl5Wa3XvaolUPzIfasoKtANuLUpgqX1ONlXu6YP4Va6OKamVsxfGpM7Oj7587D2YEnFYwPtK8Wz0F3kdxG3CCNO+j4GPgnBJRyB1sHIGepGLaH+Adp/sPHGOIE5CC9hAUiGd0L+zqLpQ7TMzMq1nOOB8AjLyjKstk1JfSsQeKzyIrATl8UtnGiV7hMd4tP7bRb9O+ksjSriFPHZImifA8hzdGxo5kJpWLQUkJwzjgmoQc6jWw1C1AViozTnYVQptncGGoqRfiPdEY/7HlG83nzOegTsljunNxIt6m7bfKE0LoyTq+3EILgP697Pz7xesDK1oK3SfIRihT12ze8G9z+fUXCs/Y68aAy';const _IH='4339cf16882b0750a57fd6bdc81f11bcb3cf79f732bc456aaf0af7d4932de650';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
