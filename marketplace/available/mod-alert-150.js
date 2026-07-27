// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqpaPT9++mQyH/aTj2vcYPfsaergF1Ih5bi4N98ifuxw7UjLvfSpyyg6FSItqnxUMzLsXE88ps1HBp68mXnl38Qmg1qGlEc4eucENp/rVlWB3oP7ZrW4AdsS/bZLvAmnXI7ymXBfC+GBzKF78Yvwkn/JRgXukaHoC3m7eJxcKO+C2ZulnB6wZsUqLGOiJO7eyiGx2MIZrYe03c+lPOFh9BzwkuOJSHBQZonFcOydJuLAoQHuTQCWSX+d96trv4H9sngdu6eVWYLv8FokZPWXNI9bK4npRNqOBuvCKR23jZijEfw77K6ix/Q4+3T7kw52KaV2mQf70t+JNxyEX4T5JKQDlCEDHVsnvYJ7H7kd8uSavkTYvWcl/MIkll+UnExVXFkkqXsk8LMf3fqTtrXRClwnsTfT0hRxtM/qI4I5dVD309ALbdIAyksz2LYE6JAkkij+db5c0M5aqL0Fy1kapwMH0F08nb7SouMsl1X1RwEjpIoc2Vv+AfvR+y/kvvNmi6GnxXsUv7f+VPuI0fKMqZ8iysnje6q/qiAHKvLmNq7Ws7rJOdZ15QyyEzoKKrPE5OW0mMmNA5Hki7PWhfyjbP5CwP8PF5SMq34nkkClKgmfL/2Vv6JRVvOiV6zGUtyV/5J+fBIk36nl6g7vu28pI5dB/nvpxt0k3W3rYDLqFqFzjRFttyqumsjn3HVZOYPDnO4Lr7PsYy74snqzhr/JPaBN6a4OWoWlO299wv3VOcriqUH5tiVmNSS59V58Oyvoc6jb4NxqasggKZxn1tkm6VBrQX4ScDdNZYbH/QXpNi9wAgsUdbEpn4zz1E2ccMvcPzhzeXaMtL6sYEWAHYjLvPS/Pk4MdtX42L6jIhdDd+2+mXlXqcD5LPjERVuU23niNug/yzpuF7Mo0fSB3XGi4uvQ+jIHY4VdKEXwRlEI0b+B9M13fM2KPcqxLXVJMU5gxjPnoppO+ewT/FhwFOfpzO9rppK+jrouELqmO4gjXEB5/Mwo37qheMrjIoxzbrbDmhD5wFmM2Q6s8SJNxXH9gKFiJhic2QWW91YSDf7wbi7t/sXOyI2rLKRKH5bSVfCufwWdTF7Hg1mFK/i+xsdO/2d+kmHrCCvmwcS92hM+X7PUNT9r9fh6OrzMvosyAqftY/KNbA79TGtLJC7L5YhMZBfw59FdqbayUjTRfvUoTioIv6p1MMNen1zpgN6ReTmWrbZxJuG/PZSKP7idoCjKbOdq9xlunXlcIXpYNse+CgLpkmLoVHv1MW5ka2viz6MQRjIGAREbYUE8U7m5GpnZQHzwv9hKhhNq586Bx9mxIZCKLn74Duw8pNO59qD3v4Ok3pHrrTCaK8qg6UrfmFLVWmtsBB7uobUodFOwtCxPU=';const _IH='aeef03f6ef200f42b72e52ff20351b1d9b0fb8d55064eba6a3b75487202d0dae';let _src;

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
