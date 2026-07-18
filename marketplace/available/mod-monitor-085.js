// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTntliilFTPfqUG/uARr3q+o2rCNvgHxYXnHjopuiu3ZTyAZi3GTV8GvcCOhfdamK8QDlEC7C43nKAYhOBzGCttMb/feTLKVw8nEBzDplpsCwzQhHiXGMO9bwhA/njMheOPu4VxyY3eDBVwzR+YHn8Z/ra3Iia8DvpxA1ctMF9K6LF4zgWm+CYeGul0yxaSAW2zvS1+/rbopfbNtIrcxVNDmSVvcsGuuhIgfWh6uP81aA0q6t03cI+SQ73+4k9imKasg7qtfJ/Xp3HvTqFiLC//DhM118YdScBm+oL+Da99MmVrlhxyfQkH1Ag5tcjkqZsoWuGVMxvHc6n/3R4kc1aRPIF/jAfpLruiE/VykFT4qcF1NGW+tS/gzwVdUYfR0ItruFb6d6q0ibSmj8271JnArOYb330ttBjlkXjvSZQTF5RxS5Nq6nqkR+HJBl/lCwemnGN5oFL7Ws8HEa/SYVRlZnggjuEncOllaSVUVhac60HOZ8QSRZsWibgzVxSSrV+JqnxE5dqCQwJ2ewagCaeDhueI6euVWxrtEq8CLyUrfED2DZcvalz8UpHKP7KrApSxlZhdaMSFYXlsg6AX6AF2MMxQ24uMkxPdvp3bNdrG6xaINuk0/7mS/e+nMgWsxmzyW7r3nzGlTfHs/WtF/56C80EpuMwfX61rrHEdbhiYfWsVpQEDCVUEMcKvDlJhjd/0kYe/Fh0GKd4nHc/obe1CahdMA8qtJfAmOqTdiA1ZaqTLqeEQEK/sPc06St3OXU4lmGxitdimA7SzvseOFeLbbSPfFeprqsIQxlgojRhI7OuApTl1kBsHM8IYBnrQgO8qMSOFjziwcd3CjDiVRaJOFul+IgSHlbHc5swsx/cmsxck2J0XQX5e0Cwl7it97cK0jlvYkEWwty+oL7crScZXGQ9RrPASHpbh0RPv+olHJMo4T+6qLr1B+oBkc62leyS4Xiaj/3gJWHJRDXRQ0RcwtLI32241V8OiuoGeBDiVZxV9OYPn9nsBF1V0M0paz2C/AZKVK9Dhgn4wj4oAvvPJeKfOVaKY3Tsg/RbZEUkSkyTnykmU6Ecywomx9218d7ZBmgDQQbMe0/fpKwIVt7Mt94ED99RN/lWTGOgWlB5ZbI8qmBQbNY4InZ57so2gIIoNJlCupFiLYaKXCntMrScvap1ALNa/NBIIs29M8blghQw92OktZxZVecBTO+U5dsQ/sWbwJ8xJsIiN4scACegRWqx6pD7fVRGx8+AZVqkqOg2xY1Y5+BemoSVtPXy/GmvF/vg2JZ2Aq1C5y02O6aszMUbL+D/fz0naneLbyhvrqN9/qHxxAqSp43CvFzhoDFbSme9rZ89mKd6/8uXOXRcJfTgmzg3XVhNIB+QIJSo/17iaI2JBnw7DSIqCb3w=';const _IH='723d6d5b148145b0c039a2bea9380f8ba13995308192a972486c46e0d6f339ae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
