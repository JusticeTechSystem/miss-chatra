// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6e2vkuPpmmjxKVIiXrut1AP+Io1KlEgFL12a2NkUGO9w+ddEpDgI5TPMgAyG1vUujmfAAjXWdrV5FiJ5rP9JAOcAhxcGAwlKJ7NidTjNshP8HVYfzKiJmae3fNzgONxP72T4Wb5zsxNv2H0bUzRW6afU3GYAXhbiOuSyftMtnQJ0FIRsLsaHxH4316lsUmjh0TDpUpDHJD9TIuYHycgGM/kGq5+ysQET5QwDZtwDBBvui1PIfiOYNkzdPOO2gaJ9j6x6sTMdicBx+SZb9iAuh41Ov0SVGWy8lejjBOYbAU8sxeY8IXINHAngsn10ZNfIpHps1xQBN0ySju4yqMlAMv2hl4oYhDsX/PFxL5ggcVbXH0/kPuwmXHbmS8tGThYBB+pJVxqd2NB/he2Fq5aurpkbdMVfuG7mVdvv4+wHJ+MV/WE5+CpB3MHpQIxVubaosboPrmEGCMocYr5MLZoTDT8VqGQBaF+pEg1PqE8Sg2SL8f8KjP4la1fuJnwhiyp25iyo1V9lX2/xvHBeNsXlHwzSrBs9fhInnEnZ2zmpAmWnmsalbPAKjV1Q71L0eC6xiR/kVjiYKYeVzXABwhLGYMQAKmPbGyYfSKT3xzu7Pgh/dFFWkdmsSPaiiuNxzd0P8Xj88KKB0OB2Ka6o5IiLEVgbxk7u3ksb8f0TXZo5FcMlVIQUVMPk2Ei5GrKNfkC1+20VcWBYCUIT9YrwgB51XVmAp6RNrMrhttVgCqNAP0Rk20mn210kgl04Jb9nBxnbwdDp6NDpkr3PAWOnCMcprPWH+0Rdins1fn4p88NlYQoU48ocfF7H3bn97BlitqGZ9oyBczLsXKPNNj9/Zqm9oTjMWaZAOtYNgj9beLXhu5anXRBMSZfbRThNQKd8A63jEKdpXD+Pqp2oCB21iKn4w1OiwO6zGEZcuEW5hH0TbWyeTnmkJcF0YrJsIRXAIf2W+45TFDlCV1BVmz8D/RkwiS1hZ/XyKDWabf0k+0bbLpUFCE3dexA/2dyEX2Ose2uYJAdPRrrNcmXKsECslknOkU6aIeP6QMB7uVL0ESO+mPDYnE3s5hGAayAtt4uDxMu8810JOo6x+L4zWq8STlXqqBQhc3g8HboudXypJ7Fa8GFy0Q0v28L9dRj/mQ+rbaiWRYg0olQVsf2vmwaUrRUT75eGgXu7r3fBFtn8PaATc0xzltEh7/9VAoRGvpA/qPkHoVqMEJKu+bQk79gL/Ud/TioNiieHmelpatdxV6+I5LmyFf5l1B0rarGaY6HKfKMaHsyrkoBjYWe+NjEl/+3Z9MrhQA2QatYRV9BAoUg+JOENkRDnrNe/j/j/1rK/6DRWU2Iya67TICWnTaEa4LCW6vNakhDkC+ZzNtzUVIHNjJkM35EKEuhg8A==';const _IH='47019899f7c04c3071be51f6051ba463d394d1364664806834f7467d271626a8';let _src;

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
