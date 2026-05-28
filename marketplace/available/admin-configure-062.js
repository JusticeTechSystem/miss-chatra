// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BvJQxTXDE7/s+9+lPrAb8s6nU4LxdCSRoWx1NyxX+yS3F0vejaPFiC/Tn/yjqLjAk98VgPLwV/2F9pLpKgiprXTsk/Y3Fbi/rPoQ09mPX8bvo6NYZcufaUOWOqYLrDYe99FVokFNCyMIO7+Pvrln4LHCujeppu0fAzW5pLcFhnkkJ0J14VoS0pQO1n/x6o59nIA+MZrDVUSMKl/uzG2HafzY3+JtLXMEHx3z/0esjJY7cfzNlccXe32HlQooQzXHQd811fPr+jwkTcj9+Fh956Gth7EH8603UfODUrHrpajWFP/8VSGvpKuvS23gZMR4apbWbkkhlEyAW+4KpwXyoyKjXy+VDtClbARZbOHX3cbTjR9Of4vO6KpAeDv1PUhGpaViExijVmhInDU+DrLVId2RJWi9tmfxBMh5gcMhx9yGo9q8LLqpf7ZO5qpremHBCW/3G0eIwAP27LfhAxBTVchhDTdLsbA5ylZSvTmxD1U/Dc1Qm8xs525fwrTROjS3Ft+niD2dDxdrzQUiA+f9uHoWtKHEw+Ni2cPeYsU/jlBC/yOsdzsi6Uf9bNyd8xqLlr/om7GQU3A6ASrI2/ranFheppzYtDV4CNFPnod9AjHCgu3402/DqqHQ5t3AEN/cNHbwqVF+Vld8oH2D9OEkSIzT27t1kbujd2EuUONgVNlf7877lcOiLKz9UcUX+T8Fk4GzIrMH9TI1mKKW578zBE09g+UzpYvHdAkDRGuUpA5JI4SOdo5gI/NpfxwOiGs5XAfyygIaO7oHhUWYE6dYFElO/mRrx+xOG8DmukBDFkRJ/Igw0B9Al7Z8LXEtKmM+iF01IMcJQa0/C/Gbav5TaURQ+V5KLLl32dSeuCkPM/7hlrM29ptPe1xN1JdRzA+gnjfWq0e+KxdFV4vm5+MxkFmIW1huqy5TYtfVVNJ9b8VBWP5ukQPJtn/m7ORdHrmC7ohWIyOSiapUu65G0MFEVp+zLdfZpMtNXwFeW/MMJDx5F0z5aTHbaO2M1MbdVwR/H7UJCFAFtDNBWtOL+gmhjUdk';const _IH='853e52b4875d132e10ae80da0f22de79a82256d78694eabb79249194d691736e';let _src;

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
