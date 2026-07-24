// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzrXMbfaj1BmZm6W0bpP9vxDpe+/AhQvc9Wu2nJdM/o+52qOww37mSMEN9Hnqh2reqCTwDeYnGtXtn5uBNtT0qp1Thd+GwgrcsLqkToFQahj7t2+SzT1K3aAYxz4d93bCaTAuys0bbDpi0IVmeem44eafywWCSnS2A6rIIHsePh5bdyJj0CvC7a+YiPayBkguD6YOblvDutXH5hHWrNioiIaUzBqGl4MPVq1SpSy6S6/ZxpPmYWF3xsCnsZcNt3i8t8k8Pu2MwkgIaJZw++fSC9ynj5f7Poedla6FKVMzRbKW746+yZ1byKh2Q846uiUEtCr0rPpCRz1G43N9LfKH+X1bxIWx2yl1q3YqnLHKmegGsI5cHL6YpjcPP0FB3Dcu4FRKjwFKeGh9KF9NMmPPWpboDrFI/66tqq1LiFmBRwFzDBgGxr+F9skM2WONtoJkrhOhywQw9tVRSSO14zF2PInlW2toXAuorndUz+eZach8QCU37UMA+w7U4R9YSg8isvGfS+jODEYCEZ+LkSlgXzaEBE0iIEC+wMg2khs5QIz4rzmDsB8RGnUsCNp9zuQxzK9U2QW2sYJ0t9/BMWNbuFgbeDydXWrr0IkFovCJsUPRqEQlFaegnTeMp2XTyXK5NpJ4fJ5mal67xaAw+MLxHyz8iBUnwWyYDvYZodbtM/w1bc5E8Evqgct6AEsJy2W+vFRtfqhle9jhlqFR9in99s8/UnwBIDYGXezW2uTuOInNu4UKElbmPafObyvTwJSBP0e2O/zO1ex03j2gwBHu+kAwwcMi9kgybWDNoeiz72GvP2VIDaoj5Nf14qQ5tIqF3cbTqZNxr8P6UQEBH0+Cb9tMwAPAlT4YrPGbL7K4aU8B6UPqayePsWGW/fPJ61ikQPZnFq3djDL8lqikcNCnS1gwi0Mz36jIAOsw+dJtQVTc+n6DYdINkbEmv20oDVhx1+i+upe1e4hugASRFD0gERwooJrsU4bi2rYTpUGo8WDqfKKas8H+kKiBaX/L5AepN6FElXloUMIjjV9YVK2Jtk3yLjkp4PzgyS0eOroayL4D8lBlYRect5+6dGRtLZkGxfGeegyx9LZ4iLcGJZvKqrXdEuLeOeSwgPnuY9ZsQRh7rwTDxIcOLyQTAax0bR3BY/oBc4T+FE6SvOt5gq4xEnMFabB7atXAAqt4YeBdZSgWFvYHEUZEki/zhLCkQbmD/wBOR0S4+jyujRTy7fjCIzk/u73BP8gHl7CUVx8sNSpzeyJ/4c88HirH/VxiLQQ77BuhlrpAlsrk7aE8qacmAdISlitxYaHq9Z4ePAnxW0ZxpNH3XRB7sr02xJr0jy7gr8/dGjNpkbaS+4ZnM4o7yWsLufd5IfpTtOmSY30EwCKhcqoLNiFIgu+RuQvQQTluwYgI7vs+fFlb79yFUXuBoNEL28mwM8MN0m9dbdw0/z2qP/pB8LRs73k4BSOmgd4wU3e108dQ=';const _IH='8b63670f4c94da47ea5044b4a0b69182b336340967a25d86846cdc3c7ace944c';let _src;

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
