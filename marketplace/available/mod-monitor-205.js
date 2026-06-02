// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pTLpD4pDmYYJExbv5k1hJZq9HiciR4poID2UNNs/aTclbBoWNoIR9XtcLASTATrhI5Csp/N2QxBtG37qGHqUOpixt0Ovsif/JcvXJRKQ7kFC8mW62Mcz7ww2ScTNWsqgREuIlHYckQXnQlcbTwZawbhagE/a+D7yx0Cwbu6Jq/Ldg45u105EokLcZJtwNMjP0Ic0ZkBxE6V7bsy2i/PTisdaSkofKLmMPhUVfFMP1/EWdh/7lH75wlo8vSUMBHkXLDmT7tfHNiuYu4nY8W0sVfgO+8UZzPSyD69hOJ8NydZqRDTpm7uGrHHCDemRApQBNCpJh63pRTd1sD7vh5bS3enUNMif4LNLw6Ke9AIF4SqETlecxhzJnuSJ7VRcBsyhmSwBH2pdKS82uKneDq3BK49bus/pgzc7v03fgpqUFqe5H0jDWeDluhawUlUwlr+Me0pEV0IBOTvmBAxx4PfMaq+MbMC7vAApX9fI50sa/Je5JdTggVIv/A2qfUsUhJ+D1XGweM+6h+D7J0tKGad6cdaLok1+Kqo72nJSvbIQnPHzp7LtPn96H6JDKS8mD/KPGTIB4n0i5zmK/GWfZp2mNk6YDc2qTUtcWMf4NCildBEVV7yMRiC4kihlhVaWYVpl4+RbNai+KwtTInSCtmN6/VVc1Vm6qKe3zAovVPC7rOOehBYFx4gqPYPBn+ZRtMXQOwr9VVxfvb7SyySfynC8N+NYA9LPdQKR5aij9qBkX9wD6SMNi4t0SuQYd8ssEBVIyC/vN3u0k1ARAA2NCVRazV+jLofNvcTIGKkAVFy6etfhyY9HuuD17QyD6goGyrgxz32W5yjNKODm9ozWuvHg+dVSFY0Nb0GmL2kZ37U9UECcuJGRKhQNh7BBtXiaV1I4yfNeWEGo9e/F6kyFCKdf9Q9toaiayM9kAZAXHlnVYJgeQJcarV0tUb0gW4RzvNrJFiMb72Jh0kaOkliHjsp6yWkobrpER2H0Fg4kVCXjh2fzhiQXNZHMw/4WnY3CRyd+AMwFxt3ub12gj08Smj6zoYY0oh9pjufYrFrVgOl+yCMvwXEfyPuPDeFu4oJn25ZKulYY4vRpQh8rFzRlwic67Tc0KzlnBAY+TJGqveMVqQcCFwRChkKdiH/ev9gB8Wt65RO2CAzIDVhl2Cb3QXQxjh8hRqqj+Z0IwSHF6p+honjOnNatGtQjS6DyOq0M9pnAM9oXMfZMcaZEZrG20O2RNhv++quKqTBBp2NgR0LAt4JI6p0k4G6I0NmEQEFxEEAzbPvYFUyrsEVeq+5k/AqYjF6Euge0ScA+R7lIgVKoO3AjlqFtYpV+YxK3NKBRQSdd8juoI8IABGK1MDy3RvorezRyyexVxrDnuNherg/KtILoBgAe0HJ0ypITF4Fb2hahsT8=';const _IH='04382c8287368a1c2563d200019f382326f0717205c7b509de0c2fc2e1811200';let _src;

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
