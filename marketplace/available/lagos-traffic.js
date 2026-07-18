// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgO8vxOGpuvzoKoc7PvoC+kXM5e9D5T6pnIjQOLNhKoYIiF5leBdCYF7gqbOIxR1ny7sTl2xe/cgGAxyzaYW22Vacr1a6AfoXRi/G/ncmkdFxZc3o/Z86sEPayXctOKFabmaHtlLMwRTykonf3/HOP76ZllfIMYERck6m5RfvVWnIIC1TNreWY7/aex4n/0rCHFyTLdsRXIC/lCUUMIuhmarnBYYrpcxBBG1CD7IeuYBZ4i5mO4Bpivs9zdNSixb+G0hMfxaF94nC2tjremxceAhF6V6v0kfAueRUlYsR6ZW3HeSscSdOuP5T0cTgUvnJe4fVmkzbxrxOzHfJxy3zjQV5hC6qOmbzsnVwv/szzBdtcyOU3CSYsgtapjz++OOfOjVBOM+jRYL0j2fFtRytiPEV+zzE0jfz367srqVvEMGqywYzG5VOS5uNS+tF4jhUTyOb0beLdra4vVuYi2S0Zj0cOO5PTlQTyeq1VIfV2YDLS/HSAfEmKnq1EH5LG1NS7AzVvcP2i6oFP6Hom37eHFPn7kBWHmlQQr/Sx/kEcoopNouqREhLnSOzioUaPuwvhd+6Xmoovi8Xbzo/vV/hZ9KmnNTvCVea1A53+W1ixJF5DEhqH7ZjOJvnmY+5RfnOTO87iFhwCYzBD57V75aDJGSgGW+zm/K9wBNP5FZC3t91wbYYqEyws2CtD3tiijmjI9uzAGz9CtJ2PaplMiOZg0AeJEwgcDI8SWU+EqzZ/YUb/kV4+dyjFJmZcSu2MNeoBDyhd17h6N8k1m+lnYpR79joasSnPpomqSdTgo9d9GOli8rO2dB2u40T7HIdwh+wRsm2bUhyVq/c4XfewYnFUqnp5+6DiAPsEi7uMGpkUIEEZwbPZqpzyb9x0YYeJ3iAGhtiTecyx26jx/TubK+DyLHE6Qm1PkRG6i0KDgzfKJj0BbyIiuEU2LBEAWj3XiaQJ7FhY3EX78VwqLHunj+/7yaCSbnzJl/ipiPDb04m0SKdbT/ZCsRUzz0f3saqshI9p2+Lnoa92rUJ1e7aU+z9Tp9yD4UN/diDyTPvez2bzodWcyTVv0n45/yq4/Rr6gZpGpCfRcREqCpW2iMAEMBmf2JxrAzQ5JHfth87zmfXZIYLS1gHpVVxgI/lE81wUifwHzwEtmvTSrJOkG/3R9ICsnM5dWSlnBe5cgXlr2ar7X8RLlXDaKG+DHMnrp1zWMEJUsE22hDaw5j29aRpmu3ZaAVlgX9esBk+M59C5+Ubp1s2dko4IXg4NYLTZjW+E7PTwrh9SZ8S2jw7U9AjeZ+EuI09HaydAKzfGEpouLgdh3xbe8CvFx+4qLOi1biw1epGivufbWszjYMwVNawadjEtH2W1lJ2ahanVsJgBF6GgO4mBhSu+KqvxCPDyaLW4szW7lMrD9ZrQmnNf7cgoYTT4a+3LT5+OuHL/xY8O/GSAui6NvS4ixSlyoOA4WQZcn57mATd2X5yygQlnARzwR5huF8LrAjKkTEbxCO6mVUYcw1jX9v0NnPk5BBGWwu1IouBZaIR2anDvYoJrgIl5EARUxp8/f+UZSBa7RrAUH4Vi7lJQp6jLxQfYKZ/kU37lbKHuKuSLJTKXg/gtAXHpOIWZU27t+HgRheaFomUKO1GSADn8LYvC6SiPjXe+35CDWGDXDoLpw/epMXxb/4H5AcmlcQy/HtrJEZIRPPHYHH0OMVg4qnUA';const _IH='63504ace74f278ab446b233d9420754013a59b91fdc612148e629b5748034fcf';let _src;

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
