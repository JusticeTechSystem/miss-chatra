// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PzTPijrzI5hc4ofYtZ2SsD8s0SAe/aq4ZjbzBiMdXLHpwFKqTl7uZLTSTdDfAcAy4r5VcLTsFZ7LQdKYcvTToFd9g8knCHY7sVSV1B5K2J54r39i7eKBpbKrVF1Rx+bBaEryAD1K95NA1fr7UnyBi3KX/iW4CbKtXRNL4LhXakMxx+UrAOOLNM7rkgs4hL0DKQ4v5nioY/4hTaxG8Gn1X8a01mExVAqNwWuh60s6zYd/oK997dqxwm/B05uOAI6NuQb3ku4aVOF64+RyxksarkYeDNfXluC9twM7rMwm0IyMVIxcaPbj4VtbVNZT66iLFqW/xs6pDqZTM1/gQesnUJLTLyYnu8jEaVrwW6DPD0xqHpGCJCZfymGfQqK3iqgRXKCj+pUZ7dlj5C6uwP7p2d6xdn7MzeHiafDrfocm1drGErN3n79ZGfIf/s5FjCMnooMOza3Ki8WOV4lw6HonZKbtpfEMln7KE62s8Ce/0CVYgm8x8O+P3JEtAskUbYAsZjPIxEMO98NxHb4qtahyl+T0JjZTVY68AJVBG7CzNbUQ5/F3cWCofvfeYCKcG7Yq/SlprIcu4dy3hiYSqQWScqNxVxSnlK5hiVRPqbYtL7m3qCkLOPoaEaB8AY6EFb2N1X/b+12KEXuO5nrBbppD9085iMC8CS/Y7rWlE7HJq2xOqxYG4TO6iENEjSdJmzLS+0hOD2KnJYTKMEE3e8XyyP9xpnVPVopWWQioy11Yo6QH9g==';const _IH='815399174684bff93463950dbb83e8ada8e21aa7c7c42083d7cc70c9b8bfa401';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
