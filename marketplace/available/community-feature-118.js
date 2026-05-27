// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lXzcN4z9G8vYTxR4xFQwtHYFxkgQ7xJ3Pxn5wouSX1odSBhWDZ0Z7K7GmrTwxmSLZHWIbUpuaa8Exn7bdedvXEm73cKJNWxqqUQXasIUl/YDQljO2sESN7+dKZsrJG2psexOkLc+ZLYSYe+bVs+FZHnVhQXG86+kLfDM2B9EY/g3hYXM1EO386khAGdqwJqPDAM93DyFDyYmX6oLYM0U9GFiwXPOKv+7pb9yXObdc882JB39Jv6Ewt5Lydfn5mM5z3UO+mlt7lK+Vyb97mR/PcVGVTtTmHykSMMPUrOFzSQ+2SiHFmIt3XL+ABzXUTK7dWJ8uO4XGHr6dPA14kXZVICreDNn2ZpdiSCKDFezvPdlP4F99eD1TQWEIoWXSD48fMV4HEbOFqjqMxjBilsJrqzPU9LaxV9VqDn05My+io+8Mrwot6qcQ6Zy19dC1jnOQ0RQzNIqF4XV8mgza4TotiEIuGPts6flDyZ1wYLr+YCg+Wr5UhfJEWq+9yUKjVNuR6wlfN15jEqC6ntsWAtg+HrVz36CFg0OXHmoAMI4HsWT2WXYY+mrRokE0E5qmw9WgbiFq1wkeMqV/5fQl4hIx/YgxdPv6FznvX+l4nEfwZ58Y6MaxuRO1oZczlk07dfJI7c3Kgod6qk0GByzyPMJVofTLe5692dOG5YO+3FusfYvORYG+QcF3G8yHSnR3FjTffsPX/Yleb9ASo8yuTy7d0kQO/1lGbbev47h3uQ=';const _IH='05c6a629ba9cdd53bc24d26d34427c7b91dca95b14124d68ababdc0939b3a6a8';let _src;

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
