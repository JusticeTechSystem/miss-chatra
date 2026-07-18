// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ26jJWZrVTF/Vf9SWO9C8c7uGL6Vc2dYBkdqLRqH86N3TEdwdua54NlUFTHz3mNcsuj1zHtbqlYmQgSOP/n/ZKDM1x0llvRANAiP3QPHqsgWpv9bnQ+FjAXhPjy2uhyNsyQ2+BnMACDmN0eM2sxzWMy8Wino5/N6BJOm21ALNSqUDhgzpeezUhje69aWNKszFfog6q8eXL3m4E1QwA3xRf53GojedVKX48etmaAje9/6iITUSlD+QIfbsiD2PjPNfKy/Tg7ftmD5wKCakhAVDz/q0J8rN3GB/zO95hBBNOOmYU6piAOsUUhXOtwU3ycutJLClNwZRRsvI7eDFC19jYVI0meBw2Gi57JHZzZTepN/Lv952G+vdt/O8aIXbVaNEHMrdldocIV7LBKTKOhD6HTrOmmvxKsIz5lJ7xyMSH2RB1OZsvMi81tVSSxjBOgCre/6onT4V/PP2L4CPiVhXbVP9IGoyizTlX16/43QIcOkanTy/aEpaIbOMjDNH7Ft2xySvKxeOLx3D5xk6EJfiza2AtMVPDP5QblDnGsCprRHOH9M7Zkn35GGUNNOQL68HNSZgc3g9nqiOmbsFzYy26VQw778HsPHyz23/s/e6iGXMHjGm6+C/aZjGW+Vtc8Y4HI0kGQAViTqbYlf3EbzoE4Wo7JxYq5eBFDgjqWxUXd37T1nmkIYM2Vop3AUiGda5D9iZ8NrsfdHjHxltmqat2d4vh+Cy/VGc1kmaR7QeFhc3k1sLLE5fTFunr412fnxLodFGQdhQpVvi6yRrpO2zuTEUIgsCTK4BgkKuxAkIJCnDY35e8WO+hA6q/l9Hps9gcFLIGt+aqXfl4l6x9DU51wTOCJYWCI66NetdOrbt5udVt2n+ENGlocM/L5D4+aY0PEemJx1F00finqy/ioe0dB6Za9oy1wmYnG0HwDDO8e43LUavTxlDppQG3CJTAWlhHIEbeW2/qYKp2T2jlX0c/+rq0JB8uYVwMrT99b1PUrJ+U36gOI96yYPKC3c9bzdBUkyrcvgo3wvOgG5emUO+JjleMflrVYJQRlATdi1kzlGXSAkNKfgLzUwcDYpawnlCvvNilFcppusICw2+UKONkqi1AB3PwSvkKDZg109RrurOPRqXpMljyh3W9oCsq8McyTIKaAT/iFMVhpceslmOv+nwXGE31DpztQn3tj6d2YzSJEn/p3ivauxzF2Cq5tyz4cVLqTip6vkrhd16jqBTKq2zwdTVTM72rOwPyBu+SSBfMBMoWM2n9+ZMgcMBU8xEhkJFy2cLuPCwJIBGmGDt0MOnShKEhQ7ljPgo9ZmFchjxLF+mmKK2QT2hCiZV72Qqs5r/t7iMO9HXFmWNBAtNWhhGcRsxQBsJcT4z2wYc=';const _IH='377827ef6e217eeb2341846d59b5c188f863e48899f40d3e0133ca29e7409bc7';let _src;

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
