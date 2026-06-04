// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GsL+P2MvvKoS03oXGCR0SYzL+LB4H6K1zOVlAOrwF+PLiKGGOdjSc24+RStRXItKX1sqlQMloRuAwrL9vaGWB08KmwCs67D9ne+55JTcqct1UScVc7YKogBMZm/1oVfx65j997JtDV5kqQjSN08nPXWxA4pqftPMuOBnND4BUH/bMBN86gt+zN1H1A79dnlsEyAOyeO4tlqktekcgMVB4iHKC/YxLBOz0IoNgZB56TD6PCGXJL3rhSZxVzI6PvRnXC0AVtA6EREuCGsQmwrAsnIy/NMhaG+ie4TMuvGjSbr6qdKM22NXePH26102dbPCfwAanCxtgV0DKH6lTyGgvzvV5ErRRGrbn3L3O8WHJVzL5d5/MrGggRbReDz2PwtJgHGPpxm5Ql9qhIDcMFCnH+hLZYvgtY/QMH2UqTmhJ2qK2fuLJVjGWrvdifGyToPXQJKwdpQNgZZhCgR1leQze4X30/gAMZiATs876ynTPO1+SEM5ODkNhYpdKhviBhjOq+YwmeJkf2dp/VHvBREoYkzzVahMTU0FTAIFnb4AAks3MBAOOEr0xVeRBIAE47wg7zkAdFpDNwrs644+x89ajXBiVxG0wLa1+zOjIrYTEXMybTv/rEh6J0kEUDitssPB6E8w6oKZU96F5DysWf6W5u3Lx47iI5QwZafJVSJ8xtHlEsqMkSXcUfdYGVCQFt36D/jfhlc14JoPJHkrU9VK9krpRXOUyNpogxrBFCMNcDdj5yxbQ8sxjjsm0ruyHLjnxphNkfl/Y8oLkFv3YwyHm6SkKpd0ovECjpdN2xMyL51Oaogmz60FwnzhV2m+ibSU5DOQZBsH1oFv13YfZIh/DWX+0BVDmn8cJx6Cx0uTi2e4TDhu3Rb3WIRhZZlwvwRxWRGt1wzsJvjWKenNEZGGl/OoN+QBS3DWceS9QHLigePwY3hWuluApxXWZZETWjMA2sgZ7ao8c3E2r+dQhyc1qQ0CNWaFPZhP3YEFONpDr9io74Vw6hKtPctXzGxSO6jDISMRBBo2W8Ysaa5RvWpGcHVvuVcRNavYMKDogovOnymbR1mEs6QQLVTzRynm4hXwN8oMYgMvIZWZ02/Z++7jIA5xREnSY4BxbNoE76oMudZpfZiwUmvDNbt+hrO/AndeZvmrl3k9EYaYwK6RaOmDxiAUucmdic4Aaf4K46djqENM1kw=';const _IH='7e56e0c054bd62bde824fc20f36093af5fb88df2d69703a4b3d634fd87280f42';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
