// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='npsoUNkZKOTiPk/HsI+se0vGQEFdOr+EAwYhTZJ8zjd4g0gdQYNlgtar1fCv3ofx3Q5PXsxdFT0yuoK8v/Rc4VZdtRHhP6Hchg9/bCX+ew2Z1tbEMzPAx58D18rxkIAAaPFHrmlgH11YR36/KNifCL1Vc51obSlJa1uhYNIikwI1OM2vsJwefGgsim/NgRySQTVODDqut0uyfDEi1IdX4VkMVkk2jg4I3v78X/rSrHMwMTx8KW5+dTbM+9gxsugyW/p8kmq7Rng3iI5srsJNY/c3wK5upUMEyd0ixJEYANkr6knv+0uZP2+tibMHo1SKq1kxyfWLUr/vpfjio6iIRa8TV3p+L6eRYXPApcSGp1+SUeL1QQebiif0OzHJouGQIXtCvnT/b3PeGS6uFP1O/hf5vKFjiHMg6BBISfWE6Lwu83rXdWvqjjWL4mr9X/oT7v4JnQ7+nM+3Qap+RBrGKMQu5tBeI/e94BRuKF+6e4dH6NUdkM3GXuQe2jeR4rUDrCx5yNere8xQv1HtmizwItsFqo8MJ8hLOWZicG41C2Uat4Pn0UIDU9R6QTAgVusDp3rYXcAjmMxwTF8cLiN5p073ngHhjnUcRf6wcJnMVCxifprQaZv0wHCJwHI3D9BpuyiFEkzsRrL+BmIxx48yv6ACzUTYTudXfoJ7X4BdSHVkrs0rqGFBFqVWk/Oz9Wl/32j1gCBtiUlCWgv1Xg//cZcPfirAUWVBxK6ZPVFna4Fvidj/Q//EGb9tmbWwTlRCgyixe8e+CCIN9pRHqjzAp0rA+3NeNDof9LkMFZcCbL5kkDq5ISzZUD3gKemn9LMGyHkdoysPEihzngl/cl03XhRLHAMTdN3Cne3O58MTj32gVy9MK4u7ez/zO3Fke1mYLnctzoh2aXgSlsWoSTnZdUyvjvSoQzXSeyAeCJtOY8yYH8n9eVUy2nfz+Yj7LGH4NZlix1f2P0/tHD9BCSZnj75/b7kGUFv0ExW3j1hHo8qczaF4pGJWo0PjmHqH';const _IH='5814f7fd50246b62339b34e8c87eb1a0f9d03f94b5d529c0c8cec38c8084fb86';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
