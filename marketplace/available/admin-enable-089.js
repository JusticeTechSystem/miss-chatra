// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxJL/yev/98DHKz+cSB1UwaO9K1Mxt7lI4BEO+jmoyaAyXMyHcGWmrIlnja7x1+fvvWI4SHljVgs94/O2rU2noGjRhzboL28fcotveCxo7yYkbZuUltWlCo3zlyyCXtG8P5GEiBMehyArw2Ut6qd0L0i0eCh7OvKwfhImW9Dy0LeKR1Zy68mf/SGc9H4QudIaMfLMK75KDhUY2zvhj7MyyCpZdxwkqP1RzzSYS80Xm0qxsgWTG5i7yHwIVmkbylgW3ds5OOxgB9/4m+HP9KvR7h7KD+42lk47Vp86oOf7IIZNsO+J6xFlE6OdHiKSMTKcap7LK2q1Q+1Zk1dbZlzqVIxqighPS8U0Pq9Kt94DKUFgaIhqxGYDt/ceStAM2JgGpQhIrH7m7VTj3UzQdQIzBKQilbXZ2HKS4jK+ba4NEgcGwU26R2IF8FBPM50C2nTlMG62ekyYNJR7cm6HY99PZCG4tgJl8YauAOfnjML2d7ApfuVT3K5SDEi8PC2lI0UrIJCX5VSDfTieRBSjN6y3yXCzvTiQEssEb/yPHIbn7mFHSeL0e8pUB5jrYXDJQ9KOosaxXyZzxV2ClQxM5OYeTHlokGXU7m3lDP+2fDQa/ApliT3IwXH6qMlo1ANhpAMyRXk/Lh1vrSXZDKcedWhAlBGNkJNebHX5U9lVyN17fw4F/SSDxLGDbxmBlPwJrEWHfu5nRruo+PjkJ/PRhpemfUxBqRq4fiYZiXHncXJ1TTYIr99UVXRnXyMsF9NXn1fRw1roSaQhv/8kGZnvG6iDQAo0ZscvA1rxIDTU05eCEpQEGou6GiZRm4XjRkhvptCAJAke74PB0UcUnQvrkLA3WSFeaqKpBB8bRT9KsFwXpWXKOO9KUVYaERdj5rZS0Ggl5tgBQo8NQvzFjXbR7yd3YHdEVwE97EulPZyJF1Ar+Uv8irZFITY/5zomBAJ1DA5fUO8kwLgeyKriG262bwjYxo6varKl8zU/regrIS8JaBCazCFqpgDKCHLtYe71Q==';const _IH='4eb085837f752aeef5563a800e6fcc25760ae4cacc7460a0836f73d6358b6267';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
