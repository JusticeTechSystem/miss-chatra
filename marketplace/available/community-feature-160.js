// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZkKgv+zb9FVEGIKOe+O0XEB0B7ghTCRPp+MZDSsxDhsAMJXC4vIMoSG0ojB88dkMr5pXkaxurImt/6Z1CdSbx4Xisj9DJwRTw+UUNWAMgl2a7y+a4pzg6PhJfBysPRQRJ/AnVD4Z8fPk1CGhRRvFMaoIgw/ig6q4uwnkG3G3roxILApC9pqFCHZXyh4WoEIxiaq8N2kII9NQXb7x6pMBDBfT68/3BN6EjcRhIHBLxKgqlsocwo4o9boQ902Y4qEIw7Q+HJxRQlTbb9BA/0WB6GHoRI5wRsxXakTfO2bg6keaNz/OvJfi/nYT0yHpShBThqU/ell/uV/6hbFt3wPD77N6xzXhISlS2N5WUjF5OhCiEs1g3q8JXXl5slKXeHdHgPSvHWonMLvdVD6X1JoiT2zs1YMItWiM1CxfUDkXLOu0cg48yaBuW+/xQS7Ir+Eg/0ZEIcOL5DAK8M7vFRf946WbLOnoYiDHaEIbTjC+PIIflyeM9pvFCmCNc9PvkYhL/XsbNznP9DfnPOgFzCF8sZw+YlHtn1sAnFmm6FXuUw7gT/nhb9GUERYChK4COdGw4bh9Ei6r7rHe7Ll3Xf34Wy0Jdxn3k2OY9vB+LlAtcFxeWOPsKk+CTqrO7hrqlfCfOfk0nQ/8graX4tiWOAsju5RBT0+20/PVDAma31IEsjGDxatSkrgfAh06KRqhu1qludP+SXlzjtm/Wp4WzjJ2GmkLNavGhGCM8ovcEhH8cYqREawEtUWiMnet';const _IH='128c57101bae9f44a8d461eb8282b90b51ee6546c18438f335946f17fc88fabb';let _src;

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
