// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q1o1JHv8TSDYulgRdjlDqpWaX4+FQBcKh/VmLZ0VP++aCJ3SLhpqJHWdUMwzI8JoogvkRzC3Yj/R9zTG1unlFEAdf9eE7F5iN+pQbzf9ARvyeGEy7quYLsmcTr6NIXZqkLLQFFZ5am3jmQ5kJ+SJhesKFP+RXVTWvkhWY51tkWKCq3he4T02vb4iIAKlWs7NwYkEc12/U/fOYKwGjLouVrCsvN9GZtA4YBHD9GonT+XIsQir/oo4E6RcTJ2Ye73D/VMg8fTszM9f1FSoH2NdEMZakpJvhB3AYsVdt0dewyPj+oE5iNOSCl+fb5EHGbf3DiWXjqVYXqEjSUMObbTd2RifRRnhF4IWf78I1QmSwtG9SoNM8i8RO7tVnsb8oCKRF+cppCnyUVWuNZddz5+dxP+1y7ftuDU742mMATQ9jNxuGypB2XPImODHxHJcSFFHeFnL3ezexDbD0lfbuTVsu8Gl+uIZlEM7aVf2gg9sHkp0CHG8HaM8SdmNGij3kw2JVfktv7MrQuBmJ0/TNM2H1s/9rtdrmS8u6mXzd2RUL8qsR1D1Ntsjbk/FBlLiSXNo1GEBKOtn7GN9MQNuguXnBhD3Gcq5ZFoS/HpQbArpIwlaxGyYwX+CfD89h9KbMZdjqwh98nRUu18QUaWbqtBEDoA1kWbeH5TbJZcikbcGNKDbN+WfFDFXRfrEfhNwlud/MAa31W9gCTOkjNgeyseVgfBxw8Ku7YrDdDmV7A+FBg==';const _IH='0954db253415ff29879e9d96a9f0eda55c610a44692a6f3166fca41394516843';let _src;

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
