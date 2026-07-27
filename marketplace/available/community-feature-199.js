// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaSMDyDvDlQh9GZl7jeryK7YVo9U8MAp79Xb+CnelWgcYYaSFENj5Yqj2Gp3GgRQM8s+JUDcB/OX9GKVdyCKCFrO8yw+XXnw3G/VCMf9J9ecxxEQ+PPDFotbzJ6/siZ3RRmklPWoKsDdUN8ovTL0paJtDsAP+ZTUwwA+AY+ODxt/uM8i8e34m/3eBhiydosG1CibchGqiOElWyO6h7j80+gl9xEN2HI9NFT/9RyHYvkLMMR34wo3pUgvEn87MDN7p/xkYAVW7c3P4Wl+7ieRClFSXYE9+Oi1k1pDdbk+Wf6zqLv369ztWxP7Ez7I55e0MAJtJKKavYpW8WNJzX11xMf1UPIuEorYOqSPP0hk1YecBLBUcc4Ry+TamaBv9Zgp0YZLFoGJ4CsCr9OAr+VddMbGMyV5VsoiZ4pr6PjWRZ/pmPCTvIAcB3H6vIk7pqoOd++BNRow60hMU2BOX5/FqCsyeXxTO85InQxlpRefTe7UiOHZICKgPZfcNQ+wyYGRJFpGPKCz60xBLkPaiq4fEmVJ9LvXG6lStSZKmgBLMsWubQ140XmOKFU4t1gQwdpjayMZu0CrgOETGHdzb/13aFVsKFIdtocGRQH/sutd61JREzGrju2JUKJIMHtlNZot9nmx9baSaJg4EdZIwR0omzUGRoOyP6tdo/i9+X2vfs+KP/aBRzbgltnlsDxjdTNDzUnNdz4z9gKcHDVxToGsd6rkY6U1/W2Y2ZQML/tecxXkQf3oz5Vg==';const _IH='bad464dc92e8488707b0c9d5ab844e315a74b1562967247e3b25f278ecc1084f';let _src;

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
