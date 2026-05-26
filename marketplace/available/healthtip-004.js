// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+usKrRK9nymotn8wbo/eGSFb4p6pDZuhBmwQQLz1EJLQyrr7Q9o+FLoOpA9iR5nxmlnjUI6RigamoYsNfHHfT1aZbhdjzJdfHlonol+7t0a+4PwEHEZMMJRdjNKtlhoSc4/0O2i4RQzmdLjKh0+Kr2My+7Fvs6LCuq/0snUWHgAoCsYE4vgN+kDV0VP0BTsl6VXwtgQOZXt/xExSxW60vrBuRfu/d1SOM4GkNG0B51W+O3HG1LgVSLXlvZWwQYnYY6JR7h1Rfq0sKUFxR/RvK2ljx8cV0i+kRHmeGAFer9z9Wnzd/pzySFsGd62YbfrX23IwlV2blkBCckLwW74+FPGW01fxpP+8ItJmIEw4uiIDtNZgTvrB7gdZJuguXPn6mw4Fpyj7/AYAUwu1a3384mHP8GwVxc2knKBr0FoQ7Q0sKgIOsthtGevyGY9/ABjBlCGN7CVfjc4NqoAtaOjVezH1YV9bgCyp6N2aeRqBnfFwLv59EhTWWGRTulzwZjkeA7su/B4gesI4vTyRmsO0yy9B/5PALPGEtxehK99EF9UsBQFK1NplTiSYl3xKlwM0SYxM4A2c1LtKaolzK02kZMlnM3+MZ4WQwhxc6zVZtK4Fy7T5HYAi5J9rvGztCgF8E5CY85D0//d9pI7o9MHmweAS1qtleAhdGvXy4bKZwF12Y8DVliDDWPqNVEOSvcyuTisHoe0sY14W2NI6H5AaHKjl8Wrleriac/ngnzvLvOVtOXRA5bouuUnJfplSVXDcyXGY3Az9UT3WaZHXMD4THqzAJxoSABrpui4CbnjR1+MV5wA3DqRwOA2WILroEyNO6hQSTsjkUezeq7qCc+aAXdWlGDvs1dO7APrSr2mVZW9HZXf60tGSKZSJm8MP9sflWtBAtvjQGFILOc7jLglAzO7femiK5CTnsJnacG29wSwaenHEfwuzog==';const _IH='6e783877a54c7ba965c2b967fdf5fc4cc93a1389cceb49e77b975d774a380fc0';let _src;

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
