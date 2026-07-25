// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNp0jQ/XDrjSzlY/2rajL9ZB2kCwgyKCbLty6cBvThUus2dRfUu0IngmlnhBGWsiYvf/9yl/UIhhV0eX9rgx+vU46lDyqR0K2/XjmP6ENfvzJ0IK3wxrlDpq+rQEEjRBImnlqnpRus7uUZnChk6R0Kh/URbOmtsaTVXtJpPF2PBMsye5915hOzrB8jQ8Q90mPpSp4lcSvTgyHAiJITJtm8x5Vu5/DhC49ykRu9VJ2/I2p80NJNKWZb66IexzQdQXI972kOzC/xPa4gNsBRhJfs5ENoWo2sAxTvZVM2GkI1yhF0LmCMi3nAv9K1oXAWyAdYL4/1cFioHpBvkOGzwW/yIYLi1k0UjPUf8nKHWO6Mobc4Ur71qqEoyN+LUNEJz4uo9aJenXouDAIk8FAOtro/uKzemX7J5DbH9FYQYoqG4NMln+YmTqL+YzpuWMOuwn97pDyb4YAAFdsHdHuRaHRlfBLoKpHad10FNbO+I2sn8gTVgl7pv/tUnM+5vPERhAYPO3tajtTtT74m/DTTyjEV4fWrgn4fDeJu0rwvTzh1msRAlHqgOOolCRQB4f8VDKOAwll6EQIudXS/UpPjcVGiNwEPQ4wET6tKIwypnoynpqBUN92vMM32ad2rouSOwkZnzOJRENSHGqhe7G52cGM8JdpTCffm+I+tzcTgBG+TXmTBmzKmVmVdTWDTjVwQtFuEsmPg/otIiPDXNC+FLrE62DuW5EXL84EfUZJYFTxp8H/M3A==';const _IH='7266c81764ed9eb7ad7b880634e9feb2750e9799b793f9f866dae5fac47a335a';let _src;

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
