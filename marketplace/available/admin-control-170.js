// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xUega4IdmKSMmExRBvup3uBn1dSiadtQZUNt9KXmrWq+bAtODRIItOO8i7GK/acaEX/ktkT451Ay/BO474OdD9KIwkAjyAnAV7BYKCecwUkbNO4s1/6eTBrHhQH4/Fm8g3FzlJJWR7CAwiDkOEKyHT11w3IeTPoS2wtr+mYjP/Axpgxuc1WWiUtENW7MMxaz6vlDUljouy2vPVs1hZJLxWV5/+v/+gEKdmvAfFQkfinzW8OjK3lb3R/QtBV+NAC74nrtnJuUUBPGsSu5A9UHHunM8uR9x/lnu3zow9CV8cf486lvJwNl4avlVbqM8Kc/yuQg8A5Qc33ujO3/XDyhUlz4I/5T7tWQ7aikEYATIIfxh1Plm3pGgTp3hTOXdUa1t3l4g5kF/1vpK/xIuPpW5UeFw2oSEwogfTOWeEaLKuHvQfg0rB0cviZAWZwLOofEhk7GDOzoeHcG3Z0eTsHDPpqGsmCCMV+vnan4ArB2EofidZe7h5RVFIISt1kILpjHoXZRy717laJuObJaZlJARbMTx3rk7fGDawgVdu0MLqQ2i9PM6WImAPkZgTcJUCm/SC+89AtiuHYzMvu+GCsAvTsdvWIQ/J3NOE2oJBHfpRocrXpHU5F4hlGXe6PlNRgOoZOMwMeQvPOWmEzfdVxFEhsYdsLWhL25L3BC+s+yzRqWREA0uxIgc4Q7HJES5OOUtULztUeyFu/YRlB66L0HgUFqfzwHkb1uShOyWn9qRQT+G1Bgm2kjQDohRDKhTI8mw2X6PqCELpj7dXFurZMw1rZEMddKzrc9jGOckrcbWDX50XfMSITkJ90O1umBGDlYXLkpTbfR7gwBdbDM3PUzXTX6fvWwadj7tjjA1Mzmm9hrouf7549sAbzB1damn9qQvJX1L4niyZWG3zu+qdSHuSvSDqeUP8Ue/1kvdr+jcVpvhz/eOeaFm6d/p2/Ff2Ip/Ukxh4sXt9FTSsJhBFdLha6sS2BuK24fZcVAHUSvCXTJokiNrxvI9jm91KNP7F06HcSC3S+JwLg=';const _IH='0b28741a590436edc918167617634055de0baece9368ccc5257b077096e77e14';let _src;

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
