// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mea9+zTvmpibc1vU3hQL1fqPw1DxkRagD0nLQIafFX+UbdFgqGaK+JSFn8XF5uA9mlCcVruMcGImGjsgs1cWArJJPLzc/Sr1VgEYEgUZLPNRZZ1WTkj15xrH7j4hYhMaxAlSTbpO27ZBUtUF/ENouRMpKg9JmPyS0Cy98ADbPncVCqjAjiJF4AYhXM3JFiS2Sw/ANp1Nh/FsuEaYmw3echNCyYFEfKM75oIaPLGOV6T2e2y5vTIUv+V2xgDWN3DqPqTZreX6it8Id3au8IQC8J9tJTJEvjWx05OzALw48nBoozwrEvD/d43Qd9slnqQ4ByPtaNm4yIO9bRuSeW67tPS/t0N6xecN0y4X1t6SEkyBEaApZsBSK7uShaDpwi9x32VOkuCC2W0mvJKB2qLytaU7e0Jayjs1m4/LBk07DFKj9a8IP/vTPZ8gaD1Yw7Pj4bt2mYs2gPscKSfus5TaAlj02wkl+laHKQWVOjA1zfEtQAVwdp2f5BL61XMUthnr4+qpbW0S/TlE6/MnwHETodiDnVhZhuJnQGTAxXEePD4Nt/oZlTCC+YvMDml56RJ+UWdCeqQrL+lExR2LnELD2PIq1hYqZgztsRK4AZUJ5Y73ZjZ9GhRAvGGHQhcuecFtjM4AGt49vRGKU9KMI77hQfeELsdjReL2RT7Ast7Mhx8pMyoOVQ0DRPBmxgjsxn7VIJtROStR9AjYEItnf7eRPGYCwbS6v+C4Zf6oY4Uf4cMHTZlOhWSchUzcpwI0TGirWsn3twtfTQLEz3hZ9MOIUk+56qajmMNxgIUl/uNDPWtj653Xzo8Hd38PDW2/NAYw0IKi34BIP77DEhFOB7rTriCDHJEiSQ5TOguYyG0EDrvKVVYDGtVIfNxXifuH7aLj8fBfUBnl5P7pygluc0MK/oPxDeQRyF6mi98Wf0hbElVG/KxcKY90/s/gqwcPc2+gigmiwNRWkc/nJ7ucTkkFqUOjvZfYziGiDqRzZdmKRyMhLIBmUax01suT1CxyieudsIGrMW2BCGiw9iGZsa7ei8KMoDzKTPM6kEDNP6WCdx5flHJs+5fTGwSrGsVA2UdbnSTsLMlZbC1vAXK8N8+G/R1Z9/vVrUph2T3Lq9aHlCQb7tsPTuP/NnVi7YPikoDc00DsOefOBokzyy1hgM3v+7Z+IJETaSwL7lXqj5npK3ApbDxS/bdc9AF06tI5vir36TwC7EyCq/7OhFNV/3GudK2fr7et4RkZu7jfoNKqdMHy4q0UWySXuErFvNJB93uFeyRS1KVPUtsvPSgIIaRorLfD08rpkjEhAebYAZn73PP6Nrw+ymvSI7L2M/YjDGmgii2yBfiSVSbI6b2Ne/zu5oLM3an+VDabxA==';const _IH='05fd4c62df9be1a3997584ce2932845363144ef2338351a49bb5415968cd3771';let _src;

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
