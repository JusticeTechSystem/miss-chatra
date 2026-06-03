// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qV/7RbWZoqeXtPYDcE6InshTX4WwM8Fc+e3LW5E/1CuywNfEWSkTvnYy6FgAkLmljGEoF3F6Lk7emGDL/+VVL7fyTbcN65YL10UKH8fbTlenCco0eUQIfrDtXmi2ZpQbGL5cSQXnV7Yw8LdcG+a8kxzUjNNxits0SIfLr+GEdEdx+3l7+3iaDqbf7uovVOvQK6MAK8oIvpe68SaohUnIaWcUfoyWSPVG6SUqRcCu9PLeg5+97YJfK93IUF0Ahv6SOdhEwJNsTS7mMQb6ZHQNjwULBCg/vUFWR5CrEVgYia7HLUgwiVgA8Q+va0IdVA1Atl7GVRRj4IQG6q8WypY4BOBrFsLb36XTirWXBwBiMLk7BQAoZXfs+IPrp1QDvULHfem4RAdiIPNymEwoQWCUs0s83GiUu0CqVXXvFU/fPSEtTebaO1yUvSkJjxONAOz4nQPjUO4KK6b+MYx5pZjLChc4JW37pg6+kfux+x7usqPUkDrh5bxuCvXuJkmLXq10NiEysapKayBS92WeqKfkrHhP20qyaJT0FfDtGF8Ckt73xfEY0I9TyAwBwdcZw+EWQHJnqkNu0HPEIysXpwarO3AJm0QqRNE06cnYXka8jofTRegSIGaEHP/EESU5/59A60gubNk50dyqsuk38dZOaRp5onLk+mFsvyQgv2dgu0/QAJ1q3MHhZmJEgehCpEijzqtXtPgS1l+WVJHKoXht3ikh4RZ8j5PuEWVOybPS3hqSjSN/XqG+QcwnY9Ch1ffDx4lRHFrzZ5QAEyG+HlrLefN7S1Tf7OKytl7gi1OqTXA1NfvZZ6DxcPkRPnHdtVHpRS6gRIIewkb26Bk/gzvtKq9J1PaYVUwoLxywZu8wluveI/2j6YN9tBOSC2P99DGwWADVfvTv6OUR7hCQTxUgc45nw9ikPx9wzsm2LvYYm4egbH5PdysEHhf36JrQMGd0pGCSAGp03mmjrvz/QIWwfaEXjB+Ot/s1AyICF8q8UDRh1rtlWnl8xh92YyuNzfuJ0w==';const _IH='fe00170ea22f12bb55dcec19275637293e7385492f5bc2aa024a184f73896274';let _src;

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
