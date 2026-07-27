// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7qq3q9KSCR0bvx+7nrXGtuqx/LOkxqXoFSx4LC7sXNMe7QohxGUZQWI0iK+gHpouzXIljYmb3MJHHedUvq8518nPTWaN1c3PbQQz6focsT9fYTzGl/V16rerHovevSTKsN4MMMvzHK7EtzC9oMgG6kZ+nfFK/8KWexTNEAo2Am0ZqecgwyIPIsH0268U926/+vihTe1GsQvTdCGUditvzuXZIz+XA1LRdQHtNaVr6uSyTKIWrMBFIs0LP//5JFP/ZVH398EQv1tpgX20QHvX5dW5UDlzlR8HFXu7Y1Fodx4kNHtAxf3WFclETYsnRqmQCzqexr6f1Dz93KC3P8WqgE3wlBatHGosck8gMtbmYNpyX0CPEQzEuZyxAUsDoKLy68awn8eHMals4c96ZwFrT8DV2IDaYWhpovC1H88lZgfVHzeg+uYqbZJgMqCXlqaYgVXft44A/gAY17BLn+sAMsdSziQ8iNhKA34E44dPHfRv1g35fNLFAVlfmuArNOXeQAxOmg1fowct1ct0VyT1cRE8MGEXZChCfF2wtawuJsnd+lAJkttpIZ4ipBriCgds/TRf1g8pJBmoKIEzgaPhtQq/nDDZlwzcRwo2jRW24R+8D0xnVcvJOmIuaXpelf7loaUmqo9lnISRzxokvUATHVZIGJ7ZI9qTt+x7JGCtU4JWGuFS16tDzGLADHoAEKPo+C7+6lEFphOdexl9kzD8ZhxEDSKh+UjTcRwL6+7LkPKglFuaHnaZ0Obd6QizO1ssHJ87Q9G3jbBs46DHvQ5/sg586DveX+B4TxPMT02UyN4W9NaYok92IwgKHxeh/BSVQ9UkLeMbvtV18SghFN+yDQV5DNXlB+BQCjNVSSI8hphNmzYKPkQaTZ2bM5zoWxSSeApnxaR37eLqaXza2eGD/Gr/ecMVlNhcUknl3Pz3fTk+iD6UYMakVD2M8w/06chQw8tskBYuHORhwFaEesZMo+geGewmOT6EOAdV7BBZ0mMfP8h2C69NN0wRE3RinOs5vixN2lBfVLSYWhc9o9N6oDjOXCUiigYelV4FmuRwmd98jnA689N4p3IQMtqUx6nqNsqda9xx9ETYGxX7R6SrydQKoo5UkUX3rmNvfWWz/nAzMiW1ouoX6X0e3fSFSrVJViOv+T1fPFFIsAbxtdVhjeY2UMgiNHsr44lFyiB/jtgTIAdgtoEmbCBGPX1jcsAkyxPsnATX7Ocre40ktWWg5xFozQ0S0hiE4N54NBlzzY80kXf1MLPnKmMfksPCEfXNHbI8EK6JYpMPclrhY20AP13ORMAqyZv8Bu/tQKVdOUN3GpvlGPXlRTbLYH31v0gAP+DSxYbL1VXLz3YZ9r8tyYY945yLZbYbt';const _IH='81e74e55ae9e02e46142ac1129d6424dd3fdbb869a7dc1fb57a444c87f918318';let _src;

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
