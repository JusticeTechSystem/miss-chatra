// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QKmxlH7NWj+OWWrMZRsO4W4+rbvUAKnr8Fc1M+aqMYZseMwsiRucyBdEiFADCUXimb20vBTKNF0sPsBweBZQPqcXiEpRiO4eFOaQ1TZFGQLq8Lmrtr+x5jqKtY0wBNN5vKJ3G61WFCBWdXUO2cOPaH8xqtpvNvIZOl1wyQAyfrUxaTG60Uws2lpS9KZQNOiVxTD5iEE0BxVzMgl8et/1xQq3cpbmzvZitUpMvZzdKg8DkUsIdK560/Pnx+ChlEAndf5En9fo2JWk1WfORzyNKlcosmpCG+NweOUN/EUOaX0NzEvMGK+CSSDbQxc1SgoF8m2rujWHRDTLx0zpDw0nCaIq6bGy7PjkcBDiuXW9UecPIC7hVGFXkPV9uyOKWooo2d+F/8EQn3gKUBH0d8imbOQEj28E8k2SXU7AQbbDSlmyyuQi0IKzYaQj2F7vOGd7qt1b0xHS67tlakfuas1UFoIcyh5n5enA4Ekub6Wy/GhOjuJ5fSaKDYv4R3xveG3SITOxMCIPcJwKYlKlpjDT/9eaI6JCqJ26jgDXPP2RYhFZuY4JjDqJ0+nMC0+vDd9Rrpqn+9N3tYmu+tQpZRrZZ+D1iv5+gmqJkeWnaMgOrSF0hqxH/59wp9wwHrJAk/t6DQS7Yh1qVyJnlX/ClZOLKjML0/PRg12YDFvfzy4+bohMA+XFx9S+1f+QbMr9ColSCEEh/5ZfTTGRWmcjBsrLaMoNjkSM3vH3drTqw12J4/k4dJmsxeudqUG+E7x8Agzi3lSk+1/LVW+V0Q2Ijh8bFa+2VRwhneKMvOFLiSVUFkjTiqp4Is34coyCKkCqh9rT0V9X9kgXEMJLt8lyX89aKgHjlTMHlv98D0TJzV6G5IkW4u3gQdUceSWknl9AsTFnOEndgNuHfxuNQZyt5W+hC8KnAVa9mpJh2czAE78VhgP2THsDKSfIGBsyHg==';const _IH='5e99edccf545effacaefd2262b75ac0982f4656a45ea91050ad61b2d06e0df2e';let _src;

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
