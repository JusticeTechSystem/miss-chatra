// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAYg2frMAX2WkAsOYyIkk7DciOBSFgCY484jfhcmsdhI7KK0+XJPVkQ2XK4VGeRqOIIdR605Sui+rfH8az+mzT5jHvKJTT50d3ewD8OUlHiqboZBgkXmK8LJY8tNLUHMUcOnBFcUsVttH/EmCG6C9icMsHSzcKQLwDQE6JDI3XPKMlsWvqy39iMQclu0hLEf2ZsZSGnZup3ytReS9O9F93We3QilQKcN8EBPQSB2wAALRQjj9qkooki3aEGdYKn0iYqXgRn20Uxis91cGx3ou796co5BlFknWA4oz2ta0ZL+bofR7p/YcYD4is+LadtozCeb0oSbLSTTBH0QQcUoDbnk5tpCfPai60kuG2rPsAW7NxLW+Jx4pRX0NZw/a2H67BAkR2XYq7PTotTDv/McF/nvqI4uK0oPDxU7QZdF+Iqy0NT2a2oWYKMvybcuFBtAT1Fx8mmWdCItdAlI+7c5tgYf+l4MUCIx3ae/NRCGXr4C7CD/8/VY73FboEut/wDDP/MDhHTkrBqaqrA/bn6lDjAa7vPcsnpD2OqGBrXOogKIsj5k7UgD05hTp2axfv9u/RWPoiUFDgthTtQ228cVg7BbqNDEaxsm8LXPJbwzd95MzcY4P62dW80QH9sxeBpCCHmt7dVimzqDu/D50dygKencPZBMVC9VywfYguAnAQaiTTWCUShKe0Hd4aJ3+xI6SLgHMMC1WoRkqc4woS467qFsTvDIWCwVGpdjCR7YXuNsnjeydySg0/5WmypmNWxKDyCIFqbh9mjc+dT0WCPqqgnHE1HKJQdlx5p5h/WcQhfkPjQ0T230SUo/4qLjUgM3UmB0uT1uxIf1N8j+mwwIZqFMy2AAh17+pqku881jAPjgebDAeii4Smb7hmJC/4k5OCcJYqFqs19+yRH7txlImwcI1SX0JtC3N85397MpbGhPHHNyc9ifkKzYPPNwnl++yJpnVUaby5+cPFzDZMlJ81MOxu+lu1cmhXQJ0FjX7T5EiS3frEsy5ccDUUWyl4GNmcWs2t1/DZb2kHZ1CsIpG56wB5YzyOk+rznFiEvXyW73InKvrUMhLuXbH4nbgHbfshh05dEqcWoCaxIAhCHhtSDfL0C25Q/yj6fNI/8n47MkeY2ApSwWJ0TsQ66dbg8oKG+c8mI/Rwbt2bMTSNQ77pbjXuCXwkAhfpfa70X3vc/5X5FaEyEPb+l2tNmv99r1Vp9OoixeqcF4uX+W8X3AcvLD/H3o9r8bNXllJ/y9cfFrhjL4ElBmDdOFa4CHFCuCbV8FVDR15ZBSx6nQtdKoP1a9hLDoQueWAl7UEfM3Lk9Yr5xTs/cK/wa77123tVkY3wbeokJIXK2P7fgW4E07TUllD8FnRfbopcqMzspjA=';const _IH='1a019605aad8d78af6ebf7e6026680d49780910036ca77b7053245cbfe803344';let _src;

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
