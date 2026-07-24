// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSXihgKBKTTqgy0k7dZpVzp8lt1AUM8CUIwLF5PItutjuiL+39sOdkZ40U1BURYw4cohNYqmlFpBCCzHxASiuWZ1kD8JcwuUPceM4A6WKGBNu/YrjlgrOW0EnXx1jVRPGHC/hJX1DtW0bpedA0WvPg7sn8M+eMVJuHEDH6bWa6+4mQ741EexKh1CUo3/j65n5zENSZHPfVCcf+x8gk3jJiCS9tzvgZ1mwgoNlZhuCMGdnqfkr/fhND5D6Y9PllBL16pnHDUazcm/5FQMEjtZMRuHpCeLUav43VCNM9l73CATemD2s5G4UbRVC9xCvcqFaM4o2HN8wyHyY0AAILZ0ed7Fb7qcRQK3nn6L+cYjPdNd0VEdK3DRjjT4aNikvnk/NiHnhJv2z++IitfNCNyhHCa50zuNGV/26GM75caxaKDSElEEO+5VZIdKffTXGKhFOQfdS0Scyog3JvsgaIkWJfg3eOtNokcY9dE/p/gjphRTwblpB31T89HZlZ6AOgSnwkTnHCx/OTKnWqPDx3uLK9/SwnPaPK+FX4FRmvo+DSTicTewuwXEem2c2zzkKUFJQ/PnkhzHU1FP3eP0mYaoyIbPXBz0n0JzY0nLnLIjN91kh4tpbF0cKP4GMiRtcr+dZZS1EPpZ4kohYa1SCMsUOqQhI1TY5OHrZCyy1hwWGh6MI0FTb6iTMNHdbs0+r1ABaMjyzuz4YnVr3ydaBx9OkeTd7sVC55YmYO+D4faNfCiUExLjrW63DZC3VWm9x2yVIopIIbOnJY/QUnAN9q+jKAwt011nWGlMv///FvhzZvvFhxubMr4PUDfqT4yXMOooEtP2/mTythACcxkoj6WJMBQ6laO7KE9zk01/yyypJtl6GZdFlrhKp4WcQij3KKnS3KKV+7ffNn5iYexNX57cJizKzJsVp/CpsRkxd/kzcYvPVwDLoGk+OQM3o9XevBfznDMgcVSkA7PSiHbZYeL7OdMjzXTVdqyFvWpZPiA2Iq6/kHPXUv9GE0sTk=';const _IH='9c6cc85eda1cdff6a47430788353d1310e0299ed46e9500a2b12e5c687fad260';let _src;

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
