// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LKyb6xv97tjpG9tY1NZ08skM6UCrRAaBfQgpBy8oWquUrqiXmnemXTWPl9r24ClVPaDZDqDtWMXtPBiQ6EyFa2ZI2nkpjm16xsltd4T/DbAKmtl/V18faIj3j719WkqTPjX1qx1liY/6WlnkdzfTrETsmPKRdnZ/LyjotaCZvxUwRmCWLMyTwELJtjng6m6YlKRftu9F6K2SMN7Ueivd8PhMRoJRllH5c3zMvLLureu7lcjmaHKd2i8pfcHTp1MCQTGhRYEEgLmEMm6N2uh6IxD+XGJSgwPgmQvtTGVc+q1e/rT7C6P34GtvyoYD+xyqY+R87LYf9iR83ffSIG2DJmd4LoWjZKQMdYTMqcv3VyS9xRPJE5+Pa8k5JiqCoYpMruvMxcn+Chrkxv7/OphiV+tHeqrYwMF6CBgEPq98+gy17Ccv9F1P34tceaYEtsVNZxagz1Yjx8IoYhv+1ZuHyQNXWwSHvHiTh+qlO4+8qHErLxjbIS2QZpd0k3x5yWxQoX7RHP/724n752Z/jUwFjcOm58FO4PVJ70NvL5zJb0U+D6Rngx0dACmMlgVLpXWsrjuFbyqoL0U0LuoWYqlS2A2J20XYSDUdS7BbstFeTsIpuo9300WyISIVfN80fCFCLRoFQi7xfojgIJmTNsnc3WlKoM1CFag/Y7sZ7LGnId9wzFX+EXY/1l2AiConBF6dGRtCRldsyIyp17uzs1lS2Did3zNjOKK/+RKM5JXvyA==';const _IH='ee4f70eea6557dca60b1a356679a2705c168d146043a64bdf421356ba2e04220';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
