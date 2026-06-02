// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H6m++oGucozBBcaP3+9C50g2o5T3MV7dJFDyA/XL+jRr/+bv3AmDhvwn9RkHaOB4osIaIfAQNl9br/Bdv1ampVvrV/gCDR3PXUMvNt84cgPqZhbavvfPrToLtmac1HFILrkxd2nd4dJtfydxr/v26In3+EA92MJBgJIEGttOqazSMYCd1hzE6yaQc72oHzN0Calf3HFu6ZX+1iONkJ3Zuu5kVteNEMbqBfqWFVBQiFYe/8VxXc+Tz8EGj+ZTNuZIF2VwEKXlv2hY8tFl9/LfHY6BnwhvHQjCkHFTZig/NsyHWFAW0pUFqk5Y5bSolO1BbPOy3EsGeo2BtYKSvrIIXNxTmjQ3iU2u0omMh5oT1GZwu3ifkQB8MvrpOH6KftBJGORGzxl61iY44m1sOLsR1KlCxevdq3/fz8HnwQJ3vuwCJu8nx+nJxk/0+gcmy8Qp+Ryorq5FOCqUrbFAbryDXthk8Ba1Y9o3ZsMYHRX+bRNbINlG1F647lGiNsVCEozjdfhyEVfKGjiiCAGGC/uQnuPmHwY1EFqWbfxvcoJ9ySPnmTbNaHO7Q/iGQcmFl4oJStZVbCrbzAGZ/kZsukCxi5OsMvMWZg3hI0G1FnVtJBKNMbWDIS9Tfa3G1BenUt/fuSRmQou9Pk7ERl5KPKEqWSir95qVEseYI3iq0VHw8+XPCe74HMHdYj4M7exM9vxQAs2fPlkU0Hz4dlpJSUcklMvIeBXEVr81z9sgUm0dx+jgFqXm0RuTe4szIJKBjh/8/FUO6HA+fwG07yzmd/ho+ByPKOH7+0fwfT1XYhU2AFqgoO0ciHOc/qmJtuE8cWqyR4jxdlhrI+jKhbBakpWaC1LhtlvScVA+9djEdTRuaU/Hj5Hc65WtzlypJZeXpViPsV7dQcKrBL/vQlyiE7RbF7P9FYMsmcVffbg6QaZHp0x3TW/LQIf5IWEkCoLgFP1eYSWE5hDvi40pCSOQgcrnmOupRfIxBA0Ez79iYSmORLDgxn1FfIxDAUUGXEGiQn2SbLMOQiUP4YquwFSReglc00bU';const _IH='49ffe02ab93195dbe45124d731cd78f95578656a8d01962e7c5feb98763f6be7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
