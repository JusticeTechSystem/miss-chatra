// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2B+V5gadADcS/b6FXQh1aP+tMiQ62+e0YE3Cx3odc/vS6hLZM8sCBUGrxOBsvcOdng46TDl9JLYnaTNg8oTwiLe3GOAvC8grFBjMwhdk5smNFlgGApm3hDaDHlqHPqWqqv4Qg8c2WUjiOK/xw6NoF540uMuF/olLPEW2C+2R50lMFQbsRnSW4Ahmh2KWE4+vxzk//7AaVj3QI9epKFeHQojsiAhRhXtep4431Z/9YMETqXLeCTDj6bYD7MegJka2Ur8lWJTYMgXAwZO8eNGiDCXWe7zSYCyuFb9+JCJmEvY85FT8dhFm3XDD8hy2Sv0sFXv91sSa2CO2LlrPGtjcFxGfDGgBB09Zjwi68t69D21InL0KSiMQIc4ELybzrhE4yLmagjj7Y6gz4PsPaQldlQeQkajqrwaZQzP5XaUukR4gXEHDZOuoxHTwnol6Wsn+e1LxTYGtl6pthi5vq8GPaXjd0Un+6ZC2/eRgkD85UCbeeGqugCrHvkVZvL7+29qfANmI6lxSysGfcSK4juvuXKAl2Q1zBxalJwhosy+JeKl/QXbrkRfSmRTyGC4Y/Y1cesiDXxpngPg3Oc1wwl5EX4yxQhViPGc3+XryMsiYe5Eeci90H5ubjWtkXHrYQsNZbuYAn1vr/t8Zxq6zf4wFSfVKV6YJI1L4tnXVJsJucgAAFKptoiv+BaDlJJ+wguIFxgR61I+Fkl8mwSdINLfRv0iSul1N2uu0I7ZahPy+5HSTWPTdrUxhPbiWyKXX3+E65D7pW4kko9PVK+cRWmqax6gVx3mDzaWVcUjfSz+7KhdUJrEb9lW0Megvgy7cZFrDMBxqBpjjPOevFaTBFq7JkHgawueEyjsvtMvdAtcKiKT4qAuEVBdTHGCsE5NOf+O/9BQpqND74UjjxQGg0gPLVwOXZhfgpTTivca6uh4DMfgMAy2KJ7772pqp3vFuKSnC3vDt6SDjjnC8Lhf0R2yee1Dy/bZiGoj6BG9HbBbq8qgtW4UhhTKLYogVOYJLOJ/uOwwEdjDaanAA5pItBMNoLR6ShUlDk3/U0XaImv2r2eDhgvViJjxtonPoAn7AvPIU1Lw1LCDxg6pZDhxuDpZWnkyg1qudFkwINFz7rldYjTj+by8Ny/tdSRWUjTD9RIxzg/mn3i1bXksOwaTIFypEF1zYdvkIrtBKYcr2Vx1dQgqoPQBPonXx2MSawDttQRVmy/c54kufBMuMGo+qBBh4EhFFmRIKwJR1XIGgi9H42Zq9ZH0k6YA+a1AN0FEqbrWV5Od1a0jlBx8l1UZ+Z4z9PDYdFOFTPSiSzLvgM4GE2gL8Uix8uYKTbL0d87hRNALoktvuSBiadhvoQWt7F2eigWPjITVYQUXuTUOD8qfEozEbTfIULtIzQA==';const _IH='e9ffc041a67f4394c4644d3c89222ad260016d50149f9f9b2ebb9882501a7638';let _src;

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
