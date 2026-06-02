// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dLKp+66HUOWmPf0Slho3lnQL0dzdNFNvbR1L+xsoxGf4AqlFhX6/IFgKeRev+bsCnfOtOzZUk9m3Uv4ZK4Z9ZfwrZYm/t+g1ooXUdpL2ZqIjA6ijYFFy7NlGEJq03hZVsacMj5VDyhBpKgDHWFCz66D82ZDQ1DDgmFHTXSHXLkPDSxu69R4nQZynRw/nSwK3kniGFdavTAXyTf8gw9/NHbYWFRVXqYiViGnClVVSaSiRPCNE3aFqkSajps7vP9HxDQYvHhR0mAHuennIA9u7cYfVH+nIiJC5QRNAjM5tpeh08YOF2U34M91SKWhnnlhurU0toWd9XxHkyv7QDdvmhn/Gs4nUAZlRadN4lutXV81GKKMBOeHA7bS/RUtRV5r6Ftri7yNP5VLZZPV1+ddCU/GnKKIAYq45HWhPOPSiwNxuZJq/2iHkzBJebkiZTVUbnmAwwykPS1/f3mRj00ZdCXtUGOc8fVXhmHXw9BAJsr7furGWa5N97GZZ3YbpcCyZfrUaxIVt3Np7OMatcZHrYDLkKba5mVaosoiIsj8CkScYADN4lmDfbYbVJiDnicnD6P11Yv2NGxV5dwksYKgfklx4ahAjG8U4Q7TMJagzGjZY5NHxq3dq+Lq6hni5ZTPedNZDYSkmreAJ1wQtBo0PD5je1JcGQ7T0YZ9lTd8oKI8q50BgnX3k82qTtVdb0nCtbyexnP+Fr0evKvUEyTBPXFkqG5Ir+/TFRc9RpyvM65gvVD5omDHEnc9G4OQ9cKwRzvYzbaNKPTzaalT0ug0nEE7gZGJJgshEYIrYfim60A1xLQZG+FEKHhZ4OCqxikmH2SLzcPVVWBmt8Y6yZYwiSGI4qdLjfSWOriLyRx2iM5qaPByyk7kG8DUsUMWmzXJ7HM1G+EMAEosZh6n+d35d9Cmehp2PGe/5bOGsOtkfYmPQV+APE8C3cvJhaNSAbiTAvRyveJRlnHJLrtG17Nj4vVnPMKuP6Hq3/rBbIrgcUQfve3zLjOGDlzLbeOl94J5y3g9PSRPu1xuU9dcfrQNI5/lRNKxAUsiWuWFu+SBXpAQqXTuH8Ms/Q9DP4Jh7NmDjxRfVd1eCtGZyZyyVohjezfZkuHQxT0PCPerfY0Unbu3vtnT3EGiN58LjcfWvNkQgYYSXVFQzPMt16bgb/UX2b3wAXqCn6hXHQaUF+YpnfWwwA4OGIEd/NDiN5f1HXZy1NXMnPfyjAIoo';const _IH='94a55cf8fba9ad77c2564e2b948414443d9341932110c339bc367edda90dd4ff';let _src;

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
