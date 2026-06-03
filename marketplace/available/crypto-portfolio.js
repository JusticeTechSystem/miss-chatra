// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eZa+YPrRlZzivCkdRCyKvNovJdHGJbePrhdI79NJGe78i+xIiWKpRvxPtwcXkskAHntB0yp5iDD0NJsmfWQYFzmzI9G/YGVqCTHjlj2928E1OqQOVnwZgpnjtUPwatFXUps2Z8wcjywnUsXimdI0b8i7ZlVITdxZuyUhVHrB3xLcBmGnvcQ6saEEISzaN4jOTJPPUgzFWH3lT016rz9rlsUvqQdU7U9lPpkaVODHM3VM/UYtO/5ZaIp/EWRCucF0Nx2bqEv56AHY6cJLHy68Mo8Zc8mOjGJmK8X/UtjJqyK+lchd7IE5yE9djnpQaBlQ3qkiMVPtpl7NT4ubD7TxQvbpftkp4QEOiSeNFkx+LZa/Q6VbkP/iDLptW7Q31P9vwBmTE8HFHEsD6ukSQ+CTExjBlFyyN+efBgD8vJ9Mo6+BI39/Yp7ooiUoSZyjwAEMZ0D2lBz4cntPaRF6OyJI+ovfYUvdtfqgIwt9y8PsiPqQuckmM2lYTzxUr2cdHhTGAlUqRDi3YTu9q7mlOmrY15tmD4di9w2LIeePPqTeICCRSWHmAFqrLfHkkDbIzgcFOB7x+nsdl/KzmcadkLk2oLgwu6+1CzaA2aCjkdTox025lxz0CMY6uN/def3NWUmiWvAz5CX02DJuKrmNXQdSkA+m9oqla6q1xjXz77Qfzj2wwWwU9ldYJ0G/n+BHalM7wp0GSXmlOBbhuOC68eB1gMOrkAJNHNT3LYlMcb0UT0YRcGf9uH5n0lf8v3QpYwxQh/fJxFWMCtE/uPT8WZuTcNEIj0ec/vIpVMZBjPMJtKQRV318XmC/Oz3dMkP87yKK3R5WOjT2cPh+LfUxCtNzcMa9AaMxvn4aHgL1zp36SuxU3JxKhH0cSnTifADA98ptwrbO/jhL7mqbyHlwycRfA895UdOXaeRqfqPC4M/MO/zQwBBDHfRMwbKwDcxU7p/m03AD8YOpo7L0l25czOrHrWFlNdN8npHbYgOdcqHf5IopnsxVkdFMZDg5xr6UINM9kJf0dyzy5NzRUHN0Rro1CJytibDKrJpnw0Th4/Uq/95/SEYBvjgn/t0YO4CD4R1+luYSKZPal1lm9wdOHP0svm30uzomt1Oa6TTyw9GK1SQFFyOR9LMZOzz1qgARRbmR64emoPHCyJyppTkRZhRaHkiYs08MY0cY/b/YMiXnv5kEpS9L/GLVnQx6HMwdQCRBzzuy0+kFJ7yt4Wz+I6B0GqjrM9hNcuwHwXzwUPvc8ZhM4qG7gMl5bSGM53PEUPJlJ9iuGYyP4QaWG1Acxij1oX7MteVVo4bNXC02+giwdjcnQqIGs7qBr73yYHFfVTcv0htMzMVJlvufgvTkeWye0/FVAQiVdeqTs/TdGQmwnflbd0ZotP3eLs4yHbYYu9YmECRKeVqykaT2gWut0JiOPvbF1fQgIvYBfgUmAJHQR5wydvBCPuqzMTuKM35ACw5GW8fYrT0JVkysDTmHgOKrmZy1QXhqYT+bp9PWMUXmK5PvRNP4p8Q9Uibhj52C0Npg7jXJm3G6AKGtPqwR89E6GbkDfVuviE0QW6oUPI3LX+FPMuH2Vbu2KVBGSRfVK8JuixGAm0YjWc6MdCNuNtvruYPwMAtTMHJieT/fXzSBUaXh/vfP7O3pj9Mjc0FgRnlbLZPhsazffaY4SSiy26eMsdVWhS/XBF8LQMi7fMFGuJJfQqc4mUfX1ndvOSQkh8R/ERaFGpZngF7+e80mrGs8mREq5GjK8KqG8D982kzIlClxHsmDO3ajY79ygopNuu4xpaB2pUHFSRGe5ltjCIqjfia5a/U3Jkb7otMDcBY6JNdTxHrt2L0=';const _IH='8657236a578520c56a6c14dc777e0c330b0893781db29b080a51633d8a1144fd';let _src;

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
