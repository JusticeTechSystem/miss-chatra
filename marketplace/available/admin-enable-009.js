// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qfT97sgCaALH8wXfo2TxaFZ6/WlQytAIzBJ1y2Z0hIjEbyshFvYDV13Z0rPX8jafdmQIC9qikxnCrKwiE7Q2TJLUNfQbmhVvisg28iAmHAKAcVkpOtFgOU50qlJ6Yd25b5bvV+zax3H4DDkBz3qFDVcCH8Q2Oy072M4Sj5Vxq5Klw/4xmjelaM3mRLkKXSDeu0JEjFBSTGujhmJu/oVx2AUSpiombLMRJaHFIJgLw7Xvy2Ztv8tB1uFvZgkNW7N+oMftIiTqtdr3YeklMHUwBaJJBbzFhBzRONOYdveUx9941GgYeqXa0usLQ0Alhot/sv1AIUiuRiAX9r9FS8ib4erw52/DcBppLXghNhpRBKhVXzgPgDNoI4VJjD1gFpsgPMjGzS4BaKnby+XwznWsnW70xZSQ+zem39HsDybACzqQVbP7s0O/kPzr8D/4iRRxCRidWjloZg0Zh+8Jux91VGYSBeW+MCcX5gyZPItOCSp++jLmDieYrl9aS0n3nBrRdl05rObyOrVk+mV0HtOY+pgizjJPFXp6QXGFOyhXXR516JOWc4HxvxsnQbdV+kfTG+v4VBNtzvBxwsSA4Ixm/AagcxiEqr3bhfjeM9klc4PBzKTHE09mrrc67c8dOwrteefa3ao3GP4gWDen8M8WVUMKyoI5fZcMrbe+JH38dQTMSOXAjOG57I53NeHPL1lz9JC8iuJX5s+MyJNJZ1hiQNahcGjiboFXnkTGw6LQQfPDjGgG+i3ODRw/b0t8syxwPav2QEY+Yz4a+bKzAi/EnQY/t9eH5f6efLPZ9mAj773nBrsvWKoP9AmmOpBCb02IhfS3BoPmmXGE7O7ejdhIOmq3mb0Mg6lGRdkftdS7INawwNo+2fK8iRBeQ+Vikr95pkQfd2qCNt2xrEY/fmKrN1Mk5devejTLmSnUrDp3aOsBcRU7q77w9njZiOm0NFpORCpzpuMyFlkmguB3zyNq+CEm+BLD2fvGMR9IVHJib7MKWsO5W11Kj9I=';const _IH='3ff7a9d4c05b6f59979ce91a743a2212a01a3c5c2e6d85facba0c139293974c2';let _src;

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
