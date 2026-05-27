// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TJ1n2EG6u14ZEKjsny0JI2CVp4eQHoY1gJuJT8wsVA5vOgZQhbZcnKUtTkotVdL8sLGckCvXCXRWOaq023CtePYzXDRbR3VOUPkeIv+dUPx3UqiEr6zXyC+jRKppMgsNbxcRqrL6yL/+PrCdL86/hWp6aFO0tNFe5IfYav7UFDR30KLJmeOdG+QZ9osJxqQPEreCJmiSRTH30tO0FkNJTVgJbttfVvOXq2rj6q+JDQCYzxqnXC1Vuftkze9BmghLrDnk6LVdqTXL8CY7wJNkP6ysXXZ8I4NVtgTTy9+6R4V2WVt+5F1niMoGQpqDHjNG9h0VU2TXCXt7PFTToRYARaXMJ/+7ZVqGgm3sciYo3ig76ZPn8Ydiy3stJq/BzBum1tbH4nGMRbW8WPbo55Ujg/5SnRdE5OBtZz8urI16Q6zs0q4pn/0rRd/b6bMtEJusytYsxLc6PnDk/0AvswAY8OsshO5QsSuou2+GufQA0x42dV4WbNLs6Y84qFFnyDdodnXBzLDRHhPId6GeXgg7mMbMUfZtwO+4h1gd0r5OgiXbcGCLzBCVIovIovSiMilR0jOTO9vACdM/H79GpCD9KjVAcWzqZHIP9Pjrcqvov2MGhQcYjMzPsyTuzZ1crS9G7f6zWAC8vQIG58f0D5DRxUbrN0xIZG6N856twfNwlBqrIfyiqDJYpEpC4N+Qm+ydKIBS4BF1asUimVKJucLGlawHNgmIQZ+Lae5PKXC+FP2Eae44yKvjOLp5QbjGzXigIO8sODBRNBtWd9kfr04p2yNsub3Sc/Q88PbQBbyBS94YhsuvlwrmrzI7ok8XAenVeXPJ711uMDyL/W8ceuNB1UZeyTmwDPWk2mQCQhf5aTR8sfJCdloO/T4lKckSrv8jrz2JZriPqRVAyGnwNGoRfKsJMY+8uR1v3mxVkWi7bLy15D7Ai01c1dlP4+fYvRoTyrsoIvTYdE2v8dXS/J1NPy40slc3D0a1+Uyr9ATLUX0rm2ltuKCCvbbiu9Y+jvZH5AacWUHnvLaQe7xWxZudGzJ+kno8zTY5RR5StkGPzOBB4jvRRpNW5sjMuTg0D9/d3Ghy0SDkIdRoMgQ3oYLhX8mxD2nGT+j5cKv7Q9q+xELl/Y1bx4U/bLB2JXIGYUj+oQYNutWGnc8QQUasMpreEWwTB5w30S4KGHzlEjZGn8Fygo93ioQLGKrBvoHVXId3OVj9QIMMxsM=';const _IH='bbe25af9f025519f9fb39c380dcb19b83c7f2c4f31cc642884eccaa52ec1314e';let _src;

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
