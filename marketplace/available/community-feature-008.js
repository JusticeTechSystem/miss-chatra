// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOsMKAY86tvcAD9MZAl9NugyKd9/0NvZOz81YAy++hc/1x8nx/eQR3QPwknvg1+6SrxIrybwmF/cncmcizjSS7Pcz26pgMpXaeDqXc1dnsjObRRIbRVUNsrisU+KAC3+wNLAT/3qX2/DAx0XU6xj/bwLQ0Sg0tkKsnD3CaZ3/vQoSK8fMFVM4hlNEDIi4UjtCmEHZhp5AUC2lMuPOxlb4LrrSSuT3c9+QgZ4qsJTOmxBKqXcns8kFxZEwwDxqYhW58LZjsbDrXRFIco82Tde/l2mQB1SckMrZmChJt2Q/XMnCemF6cO9v+cqprJ5IJNI/inqUUUl7WeVpuqOqFRsFosgTunJl70bLNszbOUYvPyxsovAm3J4qBZm3LbhGP+qfdVuXoQDbDTX1XIaihqXNIMOu2jpH6ziB+DSqbON0IJNoQD3jxF19PXQT1cVZNxGflfCm2EXhnG1evpVtfkfEYU/qFxFBI4bOCTzRdJsXSnUNNixVvOFJ1C6LV7uDDh0wU50emW82d35fw5CqVqiP6Tlj8hNzqO+EXLl6VoY0cmeSIuHCN80tF1Jct9GZ26GcXw7UOcyqPobvXj77cSSnmoXxItSE6Rmrzb/mluiKCtkTOTHXq/Nfh2u1qiA+fuvhP8f4U+vdeqqDJ53oBb02jYlSNQF+XRlwkGw7EcP69MWoIxLsf3JzXqKQtGkYoIkLrGL/lbWZDWnsFuuwvtKku8oJRGxY=';const _IH='34675e91ab470908c815c313378dbce681b81896b8e6e3f50472ef1f98e5fc79';let _src;

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
