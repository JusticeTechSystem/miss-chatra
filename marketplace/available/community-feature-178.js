// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F0GW15/ZPORTBLeYb8fFlSE6GeExToHjHbZvwZQgP+8M3Rf8hewUFj28CgKemSPVQ4V0xruC6Ye8RwKbaqa5OnAbW+H/7I6Y0fMlRrqSeJ62Qy1KqNNYC+TGrVZyn7E13GNmde7nEF+DETL7bD14b/qeJ8UAkCW8lLHIgX/YJ4qD5rPwFv+8mkZNJyk92BEpPUtfVxuQeOYwos8zHUJNI8MX5ZSrOnOUGdJxxNE09lOH+OqKLLDJR22za3JTyYIdOREfENapSjjyLrNiiN139bI83HAU9QYm7si3CzDZWPx3MbQDI/xKN+MUtbiaI3So9LkPexK08fpqmHMXI3CaSOp52f3RWf3ASJVTRByzKVfORcZHmU38BMD2n9FpSuEJEEHr7I3dEcg1q4k7QZGTz6v9ASkPJY0Dy9KlsJxzdx2apfitZ/iBASv8d7QMP/DBT6DyzP6VhE81lYLQ41Curra+Kc/M8Ih36xHM/ENwsd4LJRcSK/dWxjTdgGaj1SNx5yzND3tvOrzDMdBcOU/dvB+0CLo8ApW1G3N3LobDJ2ifqD/MEq+lRWmxlaO8l7vk+rsdIVzSOtu4ix09DKZY/H546xf7q0uvQToAB5Rbw1C7WxU94K7D9os1WlHbOJmdhRGQq2L0q+XUEErL/zcm5fLCKRNXD0VdVWep2efEAUPWzFLiBIIvn91iKt97J2iheXr2JgQ9FAn4Oe1WvOxI1dEyGuEYEYcbNMp+6Mc=';const _IH='7e53c2f15e72506b215032cb6246ff99e6cfd6a120c833a78675a360ddfde018';let _src;

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
