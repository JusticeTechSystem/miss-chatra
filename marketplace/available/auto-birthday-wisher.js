// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='taN6Q/QECGmhxsjPA2FYo7/rHOeRrd4QhunmH9EC9lLoxvMXZ/bYKptmM4g33m39S+3MlOopFWfGxt+ymhxx82i+JGF1eaR3c9wqVjHJ3MZGzTV4iJABB5+MYsvrX3IIk/ouadL+1k/pPXhMAUhsL74goA23j4uc2LmVnxyN116bWfWZLh7kTBI1+uTjoVB6dJzRsdIBKQ46M5vO02xXME9B1FiS7g3HZQ/LbkbvrazF3K8ZFQcITnGEh6d//70gBRa2k2PvGiwR4KODTjufDo4Yk6fvHh2rFiEE9KHyfTBUB19L1byJRGjjTU7nwpjmAZSLJCcu0qFIMgK+kbz3Eo9GpyalGc+4tf92JaWOefFeU2X18zpUEG6zsfFsj8vB0DxsN8JsYPkgoaccbpFy2/M/3DLXqCZooen23/1lPF6ZwZz60vos+a+CGWOgsqjk+kl4D5HQecThCf71wwvZrFdloyytZew/oe/bm4yHbfVSnkNy2YGn05nb2bcE19eC7duHW260Ds688nqbaHCT+TD1HdQygnawQKaMIEnAievuknXV8BcAQGqvfFtMfcnxjjgXqYwRx8Y+0XIuc4BsFgAyXo6vsGQAj4Z+Ckr7jl6u+6v0ZaMKFp9gkXbgZahuumELguIVGX/Vr9IFqPBa+QR0xyJ+zo8/R4NzLtAQl5r+iTH794CSIFZVpCbQJT9dV6MsnyHiwp7g1bSIejY8CqQKGbtrrUZoq8C34niQN/y6lmlvvLu6e8IiEi5MKbvdKzEA887TKHeM1Q8AMJ6o8PcgC5C6utT2b71EA4+R2mOxdgOlxIs/p4rAyVp76UFkfx+nYoZwoOF7S2r68KtFwWkBE7E6wDkAjdFUSFXdG3y/DVt5gtgG/3MaDxiy++1MnAsnRnQ7e7Rs9zVnayUwgVHdsuME+A+0eeHA5Zf8Xvbt8YW65x98fL/hN87LpoQcUojeyRTf/Oy0mZsKozhpIfitaJCb7vAcQoszVYZfWD8zLXI3xlZr8bRI8mwqtSIr1exVzrTgwETLHT2x19RhYNAsl2pG/ZPKPxutvxGRhTTGEeuP3WW+H19ygzVLTMRUhHi3FwwCvyZgplGQDgImf+jOx/BEFeybXinyjRai+UfbjliU1ZjG5xlsrrjsFYneXZpR7KXjFZEtcTNA5KuPmhqskPcw2BPA3Dv/LbQ59jwDZE9pQ2RwNN8NTrcJQtgS7KnWSHbj2J+wDgJjyKQ6V8NtK+fQqJnSOQTQGvuBc8T6S04llXCBn827OsYm/Fdx3tHJI/4ylsGj0odY+doakhbQVg0hGVTcjiNi4VxUmBzH1YUscY+rIVLMNyEzXq9hbEq4K/unyisy3lDToidOJL3mmw9CS3yotmaxJnsZsLLczWUGP9BS5JlGHChl5ORKSx3F10QFOmZ5Sf/YJ1QmnLPdSF2oLk8snNc17XmS2gDuA54uR6K+gdxq8mKFr2sK/ThdMxnWThTC+hRaTx5QZyTyVTcsX5zbmKFVj9yuVY2lCN1OCB1lYcFPcRHSh3DMo2u6fO4P7NjMy/LG5gOFBNtbG+9/6vqRjXq6bCVbb2Q4HM0cvUYD0pxMReFIHbYVTehyErz0pUewYXNhni0ugBo+solnE04R2aK1QHRqOs4RgMcgXPlYv27nhP78F42UOi7woR7yp8bEyj4nuvO9t7gML/jCKPrDM10bVzqmYipA/hcyo3ZrH6dmb7n3wJzI4JfjzLLy6i0TUwUfasbnUyo58Zrj';const _IH='84feefcfccee9ce0b0be5934730ef91def1055b5e0b3059c0700eee738cba12b';let _src;

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
