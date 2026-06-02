// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1ZS2M7HeklH03vsw8cehBRDhZpNEIgsrtoEvaLuSqjhekKv5ng93nRKfsWd5O22OLX8beguH2AoJmtYpKKkZVjHqiSausMwyJyFYG7OIOKT7kDF6Q9bzcTZoizsTfSnpsshzfhXd+R+w6UEKRhrr/nsc2BjOecHxpZ3d5JTeehePgZmX6gnG8hNBxXzkGEsw/rPyk5J0ehU+XK+0tZWARqZlNGEvdp0XBEgqFiL9hk0HAemRNwSKwCfVeLUVZa0cQGuOoRmhtFwlrlOiKzhFwmJFb6X9Xhofeboze/IERhsvhBMEOrZF3ereoXV4/M4bEK1xbx31hQ/iZ8/m4lUs3adMBeFVTAnkjlaHWNjGxvU3ZWiwtXqyxc38Ambh8Cw3BjHJmr60ayMUr9THaxBD01T9L9ZXoDgs632KaYKDI8V2oRtUvsD3LQHJ4eTQu99x1N91DW+dFBG5fU9VqXsIOl0bFhVVKYxxPjwWzDbYLdae3i9ySVJrEH0vXK55K3KfOxGj4BXR/7Q1W9Wm9rUsJR+DR5HFPgiGXr2AhO9SykRwoMIXPqME4nVawLp62KUro0xIkZU=';const _IH='a033aecd8155363158f7f03112d7a4b6d8cd294f5b385879fe30c50ff03dc570';let _src;

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
