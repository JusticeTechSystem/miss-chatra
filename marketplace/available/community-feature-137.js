// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SQrHPQS4bp88BLcsVAdGhoFZ9AWZ2p4fl0UJFx5EgGXgAYr53hXY/Arrrk7viHsbzmLXU4dDoCIcMZiJVqdGxgCpiUstKnG0rgPN3MNxlYIVWPpsOdnUCKswPdmpfmZ2UQjxi+rfARaLcR1beQVZk2w8eqYu/23j4B+Lxi/PkL7F/e9zy3VzVonIPPHGnAPlaFTqrwmBLvqJoJ4SaAcMgX6UXPPfnTXTL3Jb/CZ87ziQx7PXiyE6Fmkn4cppH33+E8bomMTVKQcaxSajqlorVlfsR3skkOjepG0BlA/qrkBd3BuqB96XqRYjMOWPhZSihkUjG6crGO1lOrx0vVR3Mt6RzgO1VTVD8RDObKYCoorVcG6Z7sDe/ADRD8CSR8tiDMl15N5v9YNxFj2yfoqgnp+Jnoa8yo/2dDgXEB5I/3VxCFFoq0Wzk7DApNIIZpx3ZE2ICZn0JfDDFsjjUuUD6nMxh7fkao+J0L2+lcmnb/Tnn2pRzhYMUKxKWkli9Nvi79talh26HQfoEgU5psWm/aOSBYCZf6S21ybpOUUVcg0t6yQ0aRpuidKP/7M3kyLdsRZYmZS4Po8luqO8TtH8oM5uXYaXw5wFt40PlxhUgVlDllMXC7qLMyukzkmFKP8RfqKMzQ7thWnf//Ed6j3Yk/YXS+xmJPqm9pPnpr9RNgQNJf6KDnsw+XiZlLpSGpAg214CsIjXO3lF3cUBhCzf8sPOP11CktkSlLiGXjYyMev+zyk=';const _IH='db722f14fd4be2ae9fb019f60baba93e7fa5170d10204b1b03fe4c24b4a7de6e';let _src;

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
