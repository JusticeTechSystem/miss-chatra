// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTPA30IEO2prUpktNzcV3SwP4fs/y/9OR9h20xwnt7Ir2g/3gg0m5WXqdCMZWLk1JcPV7oe+CQeamELKX3fx9zd4YdXjPUktjCYxbrmKzpxrs4+3KpoObxclJAhTsZOvikIT9VHojLKBjqT+TdS86QDOUqdsAesyCsL+RdlTthnxeFn6nVO53sLwJynEgSCwbqDmfoudszcYiLTE2P03SnhdLYVhG9h1ZGid4ocCzviJdik4wXaZhUEPImxvlllRRYHtV6Ow9shpaDhv7tgpOLXvXqLZkUEy0C5xvuc/tJHOz/rilapgys33wnQSzBeq98co4ax8kPRDWuHRhomCU/5UNvWfS4LDgZsbzlaAhRB36E7f08SjkZlWtPJKJ5GkpT2tvWBsHxyJZEGy0KGiL6T+ZZ/7PtRUFtPnLYd2hb+h4qhEDwK3nlSohlcoOTEzwt3ZFssuYGPGsgB1kX7TbiLtealFnnTNtzkxc8vXAo+65CIqFyaWQG0CfOhqnPuTZ8bXvlB4Fl2N0/H2qoKvH84nzzI1h7WnOZiAdzPy8oxRSXU0uKKpNXzl57ij/FhT5FxmBHdmnvbqWAZoVi2lrHtwst8xZBrBiOUlJfpq05ZOMAX75Stk+LlAybHpddw6h7yzhnT/EjkSMN6r3LU5p+BiOCqt/8a6SwZLw4SH6n9jMdaEfxab1bQw06uBuy2BEUCz5JHJEmzw1oZI9bxOKvBb5yz5VbQSiAtHq329M=';const _IH='633b903ce04c2ae39d4e753b1bd1ff4191498a64faace5edf93aef6f031388d8';let _src;

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
