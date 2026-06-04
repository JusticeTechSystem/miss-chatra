// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sEpV81+JpSJU8XGUFbqCBMhwv1Ei9IlFUE1H+smUuXhCIb6s//nAsKskf2oydd2J/Fpu08kj8urlyEV4K5D9Wt8o4dRamgfCpILqbGnNS+O28hwe+32/Ti1Ow3NLQTitjEivA31DI1P77GjI17RoQu5I14+T3NCFM6qStjkEUMtuyHnVR2eUxRb60D9zuABZkELyhEtWTzOMVP6h/2zIxsvNpRiArnmdIhDwipPbz7r7GCzQJlUEUxzcICm4z7QurIeDAN6y6d5rjadqiZUBdyAIEHwevUd2R6bN5JUrJI3ywCDbevB++KWfzA3tvgM8ehCv3SeAbZZWPmHjLyp6vuUXYNwzNYvgt4Kt/vCY7rjzlwNaCk26+sbIuePhiMi8zzs5Ou3iP6EKHe5zsnLJAehgtZVXe2g6YM6OaPe9sQNx2vsNMnKTo1OQDgi3o8HZykHDUky6QBInxuPrbOu0coXe+9FNduKdrIANHdKhG9/8af6XxUis0C3rV/Yl79xejGCAPSeeukLucc9SF/egrDDRW0ENeLI0YgsOgCVtPYxkgm/gxE15rbLVOKGELluqO3Yby2oPAvP+ZvQRR2XLPl2spLqiQi5QMMq24GN6ZBfhGPrSzyFQCz5ltlIGKAm6TNpWLnP6Jq3FBUPBDRr3CuCNpOwmS9HTrrVmS1DnhkXGYtLojngUNJlpqOflyBHEcLxPBmSIZmOsnZ5nUG7CSbCKj0urT9chLtwVAcjfrEVDofJYXOzL7y1fuMGwJ+rgBAYhP3b8T5cjjllQrrJvk5ENu/vnF+yqkO2DoTThbLseEM+F6sdmL4u0GR6KEjShV3r25Q5qlSF9vpS3lAUNLzXtoLeEdGQoKb3bDjv/B4b0cPWSfFFOfhfqk/Fi/qAyEH3CsshB9Z3rL5CQxKqFlVy0cfjIStUAEYPevwTqA1HK8NjGRG1jIOkYv0wYosa2bsTu7Hn+HQFgKeCxDrQVC+HK3iuC5GB/9AKw4/zYOzkycIAQ/4ZVTNIC';const _IH='0fc0ea56026fb9880ee9359df7c3d54440670ca02ecfad79b7d8b026c423a74c';let _src;

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
