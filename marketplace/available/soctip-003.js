// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gn51nzWoxInw6yiHW5cobOa/N6hHW00FOmbC4ea/0aPOatYX3gJfsJ/LAYWO+cFUU5ka5JBBOgtX6h6X/nWODADEkya3qGxCAMhXgjXN8a+K6O+skxjWa1YtTBT1LPmWjSL3kLebOt5TvZvvRlwy3Z70NmM98PwyKikvPBIbWr7agkQuNvC5F+njsu/I+ZrXwJ5H143nuCbRz6JSlI3FOAxEi2GaausBdiCbThZzzGBNgs+E4DWw39MA3BcV1e7i3TYSwyLSSRpigrcYZJ4GfuZUDiFDFTfxyCnvn5n3p+HoQJ/TouO3YAJ0gZOuOLaSJd+MsFGC4B6dEiePxaO7rMeHtwWbNJAY88bTAA73NeMB3V5dRK5T5PCTYCr/351xuAz9x7ux03vW5cyvF3ypNQ28nfBcS/PCtVnuP2UvF4OnANT1482VDtDSWrFs+43E8NxRoYf9byN64XOoXp/Ach9K+E+mOStF3T7i7rN84t4RW2A2aNr7Ok7g7pC1Y5BRpk9k1H2OsZ4mE4BuSv3ZYm3liXGJYuczCEAYap+FCXYH9GmQdqR94d1SB2ydW80p4Yj/GNDHade1gzcjg+NF4A8qOKFzA4QnIhLfeNjorQUJdWEWhnX4zxyzuyFNgU4M8usjgCjOuUqayFBW5IS/NUllXUfSEWTDwp5LwO7XRwwspJxduFkbM3w4fgyohWoV3izwDR6heONtkWKhkjyWEX1wUDC53N8UlwDM3MtcWm7TPMbOct4bE+PEq/6QCiMY+VJZcmglar5SoOblx/4P7NBDTN0DSudFVStNUt4bejxYUfdKsebLwKxraw31GTU4r5+kOtfUyAcf/Q0h9pelRwpRpagem9vOjxbcnQlyu2wF/OVUciQRGtRMkoKo6F5YXEhGqXNdcp5+lK9Du8weLo8xV/58rg8EdKK0jzTLpRMejgeHgQRBCfFDb3BZZbMi2sc5V6rreBsT9RK8XIFWBz904n1mdo/9FwvlCefhArG5x0vBAjlD24iad3+68RNXe7ogtWDPEA+DgQC4k0+eyDlcOAB1aIjXSWTbJDedT27j0dkiznSd3t37ye7yuRfQRZk9659rGDfhQbU=';const _IH='becd676ce85d3a076bf994950e237c788a92d58f1ebcc18fa074f5dc2b639876';let _src;

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
