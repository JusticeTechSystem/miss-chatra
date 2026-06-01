// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/v8YSR55T6d5MGOWDXPC89FsErdOxOzM7lnnl07GltfArJDoSIGLIpQVuTX9nQp8eDwMIG8gu9hBkLH/BqD9rbJel5oNjNfx+unS4E0TSZZlM6hZeK1ouTk9/xtir6C/obY8cNa+4biZaihdenVWA4vxkayML9bVDupHHzcfQrzOUYjaX/hirXzLkAi50KVRQojy1OTNc4SNOU8iC0Hb6VefFez/RgkRJ/+hlXYPSVwmrvtqkfrHX2nG1Poc/hlygRvCHAsY4bfwH2XTMPs1kxdFmHMCNV+FRWxHJJH40WJ/A7zaLR7/8/svSPxp1RqDMeNoG7QxmQ08Q557m8UOtHm+WCiMVsEp0gCAbvPP2b+Q6nP+ZzaTRHey9WJ7GoTleuI89bkBFf1lv8SxyL4SfVKSjsCWRiNUPkDw9vrGRn9NkcMMhy7lbDhl12SBCi7d2DeLQW9+qbILNB/WRTjicGCyaTm5JOm/O9f2x4QUu3UnMRuSbgv2Qu8YnXuaE6LJS/theFaydqfGYd6vWrt3U8nzp1fegqPEfqaa635yIvNKhsetbLloxqNpDc6xZ1UJuaYF+gDJbjDAKGr1xyG76DNGM1/hml6p/xHbUuWMce2UeexxK3+JDl47vklcDS9FkuOBhcCQUhkVyCuPFDxTQ8a61iMbzW1+axVvvCs1LNYxQ/291heK2MIWraoy0QQ8ivkRQvHJcsMJ8KD9UmA04KlWko32fB0Ms05Awdhv/kecjMGWcboERl9X7hrWyXSNq3fuFTnFN+iKLUWdZBia/btRMYC8NXUWvHzRdLNYSnn2s2ybrMNyazHqE8wumgXAbWgSfXyQ+pY09RZVJqO0GyL+D5VWhvoPnGSD39LjNlif43kgtjJGURRRnD/N+FzBj2DEyNg5+4gAKfTFyejbAY7D0IJVouBXjIcjr2VGI3lW7JOjknIxTXYhFtko/wQLPXOtriNF/O/+GXXixEXVsZRAgCWbDOZkg8jv88h55YhCqa4BW1pSC+KGmWWijKmLtov11sb1In7IWK3cZgb18mlasnMUACh3GXq4eFKhaAcHdADXAeREjPO2gWnFSNkvMdwaH0Zl7LQf7UiyhKTLhsIYdBFMt0PzKSZTa1NH06FqSXdu4KUyX/yWM0654BRb2lMtRPefz1zMvz+7IfcfPXtJE69xqeBsQcYwCz5P/Nab3rAfdjdWX2rsRIay1RVLDJ4h4G4ubpH8ZD3RkgR6ALPLec=';const _IH='a99ccbd231967f4f4305e87be19c8466f5e16f935b0e8a1c63caaeb5f0ddce63';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
