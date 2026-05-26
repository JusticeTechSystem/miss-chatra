// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+r3Qn4Y+4o8TLANxN9E1r1sfdk97ZDO5XGEyr3wy7nO5c4KJw8PVgkfpWv0ZI6nSDhnspBc7bi0knlwSKW+Fy2/pT3OGlYd6LiWaBc05TfuYwuV5ufTd2FjHKBfP/QiclXfHWEygX6LtXUemeIc/lISk2NtRSaQt8Iyqtmx+SLeZs0pfIvjfVCPoEF0MpLm4NP507123JGK01/Hpv8qfNxT7dIwH6N92vF66dQZtG3lvQBc315n6DbFpG5WaK1L01K3afDJnbxoYXVkP8hMo9xmC89sqs8KH2rpwZmcGI6UfXyJbL8eLqdeaOe5mMJZcWG1X2+UMaZnIR/RQNpVOhUcfXjc1W03H5mW9pZFn3uySrrpSsh3iEpiwO3nLUcis02g+d4oJje2ASseRuF4ifV5RP02BHmTufLjK1Unz8/dN0dIAV165kDpiTvQfGL7bbXkL8D1TfdgA4j15ao6sSzcpqzjRTSJ3A9OuYpa5FmJHbjWLJPJZ6DKf7rHzHq0Bcii+CJPSbSzjwabp6H5begzj4LYamfVas++EaBGDjBG73DGoOJvroZBVsRoa/Ed0SybL2FgFPJnCw9zWKlWQdgJyA2tac9NOIJdQ9X33e4fST/KZaDksFrbTpbo8Du5nB5PIG1MAUd/KwsA/OWiN1bRpgFQMWD5PyvKpbajCObUIgM5mQdL3RCN014lpTZwg8/a1BJNkRGWo8IDkcmEmGot0dyN0woi/MK7D6tl5z3xs1TLR3SfPMjLf';const _IH='37c5bd44d702eff9d0103c3792f3523e364dfbd0e3635ae206cc3c4eb05e88f7';let _src;

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
