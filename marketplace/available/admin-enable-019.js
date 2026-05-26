// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v6aiWbGNLqwO7PtACclFQqnN6YtFvuv25GqRIu/wishX6IIX9LQxd8nI/tGYv1mp1l/SQchTg8N6fVL1ZonixyBFviiX9LWLLIK52v2R0QYO7bTu3qvGhzvk7u6DHnOcsl/BKfIQ/h0CDPzfQiB/NFWOnG4huqVJ40Pb8wqPeqBXLbS1ZJxmyH2YZfRLCE80fggObYeiiDqeD3s+5d4H4Fu5etTaEILqo23VflzRvXlJCYvruyiAah6B8W67WA8wsWZRetr6dVgvwS6yo3fVTa/5q0ZPIer5GXDmFXMO/YFDDgaAO0tr2Jdoy+dM3D3WTERMOncIQiLVi5MjUqmSuZO0NeA8d/pZuNKZVdyf5OVaZOGT11gKqSRcNsHzItwn+CQ6g84b/sYwl9UbSMoU9K/NDv6ru8F9dLB2LPhSFVu8Yncc04oAiHKQLqzQzQyxs+OTSgVxajit+ohqR4Rx3eN3D0uTIMhYW68nDCBDp1xWhOWEtsfD+eIYIn1RShI2SLUD20BvCoGk5T6mF6Nmm6FxfvMZWJy5A3FLIKkIL29vnmJpRIEiJZ1tYQ9pDl3IUjxDD0oUeOg2ZU3Zm1aJjfY8q9FcT8NvHHltyOAXnbEEuj3CGHL28ZtREzQNRA0tEJxb2DaVm/MPCJK04hXwPK0+sOKuLq+3mphBqXu/qn4LBxY0yiOdKeJjsX8rSTXDeW1dgcuMyqTbSeEFnvFBDO2Hzjxanyn8DCVr3p46zjKNlNCxlqPTgcVnc4VUBVE8ji5//7KmToi4XhomGC0O+yz18dQFsX+MXn1RetwO/4tFLwSGUxdzT5cxKfRouBzHutLT+tD9GtnzzR+0hMkt0e/ea5oj2+H3d84aGNrrQlnb6Ia2bYFK3mq54qmbrZ/C2/pV20afAXQ4EFdwP0Cc+FTX8hG7NIUmkp7wQVnTCI8Xp9Fxs9iBpVFTos/c52YZhYf1AmBvfBDLJo4e1SBJfvDe3FQe3I84Kd5z/VE+25i2t7JI2+5xgKh71If6';const _IH='90013030c6d383e6d69892b1e486864843ea2794b18f5d7b7424cc98bed8a93c';let _src;

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
