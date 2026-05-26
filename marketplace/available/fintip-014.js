// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jsQmvhItnmNmI79QS4e5dSSTJgngJE3HpIuZgfU6gndxZ8oMHCfAzVqlouD2HrrFjymjijLDn4eFtzokaziQkKHKDYgZkjsz0tgG2ipmAJFi18WlOyxIpb+IfjTyivvXx8mfoKqJUL7sDYJ5Lu6PMB893w26M7sZeoB5mPehXqzzdJOwXXv+WQnuWQAUC7qY+SXMIPHOkUSmMIGzxddF7ukF3kGTlHp0PK9p3oAmy+yt4sW2MfNCaJBTQ4OUz5l79PBv6EeZPpakyiwtC8XXv406UIE0bcjR3QeWW2isQT9roG3inHtiEIqGXW/YakcmOYtMMbxYn37ZgorVo/vrgfJtsKygV23Tnl+7pNOUs6Mg7cIff95Rjxp//PbsNHaN/zKlXF74EnMACUvmPxEFEDytlJPNlyG441hUjodNuGGMZ9qbEwk56cEgreQ6wxKDtBsUA3bUy91preesm5iwwapqs0H1/uvaHkszkerdFyyiXxn8ZV+ZVnwuKnWu5M3k1VNfJpoIgs30EeP/Jjn9ZqLXNxUs2kOmYonXl8nuIw0TUpVYHYNndpc7TES08ffdjohheQWN730zgeDgtPg0WFoSXtRCHwD5Z5216sHtNWwbPKDpRAD2RzlzVMbsGMhgDQgg6hFC8Z/Ruj2B92t/4c83r/bdSbfu5lXvIFmGdfavG1e/U65HGG/7MOW3DOXXSV0k6c2TZe3VxD8anNOme8uPbnpbcucNbPDRy2q4th+op8wEAdol5yQhGND92XZwGPVMZ22ywfT5IT42ooRwGJwlxNeRRPZ4sPU/MZPYuP3OSt6hNYYc4C5OHSrFk71ABC2Pcfz4xAP2NvOSFmy0ZRO62Szu5HBaLmZ77CiYkTEJVbmH8ZpM4dZ9PpAQ3ifwd2zeCwEHNKNYUvBz3RnMAhosVshPYpXoVxSurk6NxjPQbp/lo8Sx8QQKTtS73RL+VQ+js368CLoUyjpzsraYmbMwsvfi35Wl8cxjRYiGvj3CW8hCcxfkiFCVM7fg/wdsL6UQI/TP1e5xeQGMnKOncYw/cgDekYeOWUMq+6KeCi+NXA==';const _IH='e372411831d5ae1ae5c62857ca70ab5795687d6fd4eef3d6c949e3bb60260950';let _src;

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
