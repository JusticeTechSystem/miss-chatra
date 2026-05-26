// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wQ9ih4nk8tyUBd7cz1R711K+c8VssujxJh3YBu2TW/HUycoznAoOFzheXBrqFtls9aPGcGdwJ221B/SEwzazaK2+G+mTWx7yXgZ86mAveTCzkgpbSt7pq4OvnReJyyEeQGdmmfOrGxBJWxJHBP+Gw0a/8c717HGVGy2IzC2ga0EuTXq5AYoUjLe71JaQCL1rrDGJirfjQ73/eJ1H18+FIrFp1bvm7VerIf4w7YjbncO9qb+jwysqSBO40MsUNNj6aQYV3EmhChL4TeY86b7VO8gCrUBWQMSt+JzweUOHm4MOjHxWGCT8NpcJirVCddxgWXqFpWoD6LAipljgAReYuaKuPcttrKO2sMbqBaYfYWBNksHtiCLj16AmSBdD5EttWdjo2fHrjFyvn8Dnzj+vDoOoQBWeuf9j8Oim8HcHDLSVAntY5Vg5lxJSYAiDe8HCq16nuSOeYa3nPvhB5CcBp0wJwFXFKldvsm3IihjGjEjbQYsn9VrzC+/rcId2hG4vJaO/ErFuFD/PpZN9ZMWqGQyq8cw8Jud5e+072yFs2Rig9EW2AdKK2dus+8orfpQXV85GxIENqL43Xt2DTa00sXBRSac56gabCraahPT29I8Q2MA/5NsvQTEqjZa363dD8b7frZZuW0cQzI6HpiNf2ifVmcRe1LKj6YQ3HhzWpfdMuGbjkIVSWcUKfid+pcWM0fq3kamMOFI/5Khj5ojiH0JcxqJuuPpzlc50B4P/gDvenl0SiW23RWxzGM1WucJEMHIQsq2vhjgi++QWCy2c7fBbpmSofvwx6co5gOTJAArkkPK0WvOwmd1VmNmKQLeNMt8j/jC6tvsToe5eaHDzr+S+enr9suYomrTfJ3AUZ7jnCna17rYI4BqdYLQ5sC3qaz849x/OuVlLtRYAiHP4ROCCTTmrlZYIJh5tYlFzY01pvh95GNHbqKm72PrBAKjMlFuP7djDLs5Fyq553SaFi5IynIvwW8k0Kek9ok3o4iV5YexPp36YKqYTRNOBoVSu0/kOam+h6PER62bVMmWmimp/xa8HPhtVOwGQsd6FGZe44izdhpujfRf8er4Ql0YhMdhTmKc4HyRzxSJt7ZEX2Y9yMpAEfSWfJyjERluAgYOuWAiUJlKSi8332qxm5sMkb7YeCJf8Ej/mUaE1Y8yNwN/bYdUZtPcipuFDS0RlSN3bHamlJhzNoEREHVPu3xoXRfK4g4lBEa8qtEuEot9/BNha8eO4bHXBijOGv2LYvqN7H/wQK8uymJ0z2/kKiHFfUBEZsg1QIFX64IPTVu25m4lralJqTC0aU+E+UcHmWFcsSwKn3/oiVp1CTLU1VO7b/cr0Bp6EaL81Tg==';const _IH='2a97a698e14442e429428538c91ed077efe88519a1c75eaf3cec367f4574be2e';let _src;

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
