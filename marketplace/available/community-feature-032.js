// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xnE3knbsAL4LilR5R3jEnkkpxKmZ09gARSSCip0gME2GXx7Ls7bf1T1rsq5AQ/6Rh1/8Bu+4JDsN88sBaRVU2o/FURN9YYyQpuNopaYYFZ121j59NdZfDoDUNC2MncmeH0i2nJbkz2Zrm2lWCZMSIb6Df8dJC+3pkvJjqylIBNWqyEcBXwv2XSzmi56pN8ycrGEmy+cII/GylTKCWv7qRL0lzc1TvLkwwgcNFoXaAKpzO+Ff/3ndVbqnaB+5roBJmTEOLo0wDGciO9kAer49J9C7cAu4zUaxUClWhFW2PFCGMXGTQjVifSB7cm0YdXFz9XTJ960KT0+azQZpImBznn04cXK/tYq76GJCBVnGJSZhLORKmSW4e25+4GXvs3ibp8J2Qj+v4z2oCQOw0x7UfQ3JjOzo1R60NeHkE50pI5Dj4aNy2etibkYrIU4JSE3+yBUxjU08AabcgFRnFJFq42A9B1y4h/uvlSGOTuRGOQN6Wl0JyVQg2O9+gG3t9IShn6uaWMI8BzyEo4v3Ub10/ub96z3GZqXgDWVk5hixoPqNkRvUPHQXo98Aizru8iWSpWNjPQdw4mapzkWaEW4Sq0Zic/od6/UTdhVxscgy955LKQju7rZLzZJIi+VHfC3ybKAjwmTsfEVo3a+wAVeK183AZan9f6RcidIrmuD8bplV79uhI+LhsnT8yEN50tKpwHxQu+da0rVX6+QED2BlYOmdxK7JwMv2emBdzDtp6w==';const _IH='d48083b837128ac2500cd32436f18f4bf1e0886947360136bcea2c42aa53d8e2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
