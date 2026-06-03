// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Yq//LqsLJUFfXop21XCcLoOGoyd90PBJ1QY3UgVngdo17i8jm+Fbx3quf1cKqmCIXSenJzZ+ALbvjwbD24CMkwhVf/l7hFKCRJnkV9CGh8dp1JJYl7tIciSyZcXkOCj4YSnxd7wWJWL+ELpUcZ9iJJOBMjj2Q4Pq72GkFOV0j3CmR+65/5jnAJ+3ZdHQK3MNe3c+dEnYx+BSKBM+pAROqR28nxm/dp3RGg+17QwtDJed3RBRWzggv1b0y04e4zwb7Uo0H9oq25S1+ORwV8M8haETkW+CjvqAfiMZQqw2FdaoRd0uokR1FayAN8aieDTS9zQrsJbDunkAU9FwdR/AgUge3GFhRzFdCDoreayNL5o0m2EitmXGK/NL0TwlMwzW4p/bqdjuec0BWrOb6S+/yesGUfHRzEUT+9+eS91tiTU19sHy3xbToxmNLB5mdJpJUmbWkre9PWuqG2S4K8Pmmulvisgngr0aAI0LrdbfL01dLD7Jt179vZnxu3WxzzgC8zXxj11kHvzaGxFSqErO1e7S9xEzC0e/53A/AmDnUuff+U3KYPCJHlJ2muVADXiTLunLtgT62++7t/A9cp11J/zTy+LlQSXVd69QDc05ZjNXuETmhGNWu+ui88d0l83mru5Ai49i844YalrPAYUxwoJhHjNIVYDXJXyNCMRa+T5Y4z2deXonZxooy6XKXav8XPOoVIoSiN5QFW/O5/S00QxMnvyi/2AKyELDGE9rAXeggDrr6rBQLR9Cu+6NoZ/dD8VmccRdqep9m+IorsYAWszcMUGUflKOlk0MseMUTjRgDEhkBifswrRODO0JGzstMOPTBbdWWpDUUOWfQME5sp1t/ToRPTzLyLW3Gnb92y6rRH14N3N5+/GznclipZwWP+TmPQL5OmZyil/XIjJLq8qG8KP+D2HYhSpLCKJxHe+6UTVjiikvDLNGSpFq2P/Nzt7u0cFTD13ZCQK1cZm+8FGt7HExM1H8CLBbfFByalh+RDLEIJUc2DQyTrePCg+INdHOVfUqWC/7yATSj2TTKhO';const _IH='ca9a7a52b99c77e0031f85124b6b9503af0be50b3d445713a5c5eea0fbf52ff2';let _src;

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
