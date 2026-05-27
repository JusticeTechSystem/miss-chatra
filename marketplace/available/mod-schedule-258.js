// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T1YtwAzwaTkyUJorI9Y2leav3EOVYcOeTyPWU9SzD0f5FmGWMqiys6NZbxh6YOgx5tDw9iy0mhlVWyzMmglI9rKbRvjr5G0WyqNxtJMzNSYwvO5ljPWFxg2+0Su+t4oSx/vlsKhgrQKlPizqgCWUGiXxZEG1yZk60R4Uxp9kvAlfmGNM9zBE0DD6MmClLQYv9I6fI00p9mhNYccoLQp2HFvpZpL25rX3Lnqw0y5SEjeVknqL6LmHAUfz0nyroVPMZvzyT9vKUFWCsFypiXXgU8SHdJ4+84XURkwbW8fc/RiKyGsLvNheZsBtpa8CrSStw+aVK+OUpK3pdcqDs5i7BxG0E+w6Ziq9BdmZkVdaL1M4OK6du1E+Yegn1QqQ9rQzz/4nhOiP7zkLWk6KdygLibOT9tjYJMQwOANZLUEYimmKMWNmF5ubqbtuOsUeONnIuPbsNuGLvvtvnoTr0AaOqwbKcSavXyqmGf65+IzxCdIadFTlZYNhCiYTFWHvyvc+0+ZloFHekjDWNf11Lcrmic5SuWKhBzT8A4WfXIBqNfAlU36Bq7DhR6smdUc0WZStic95tbTaHY7FINjoOGiuPgXJYfHy9YNQrOM4+kbk4vOXEp78r4BnyMyFS1uzM3fIFEUZ7efq15o/fSURxP2cGQ2z7y695ydo9tIOa7F+t2oa0B0qqcqV+bZEaY/rmbZG2a2n4g8WEg89Yokp60RoR8AFQMgmDqLJf3Mwe3X2GhdlG45jtRFH2ar/KS6NmGz7TfT9P2wDWpGjVaQ4/vNdXYoA56ZpL4f53yOypQTBRPNtlqR9JEoDNw2uKgncjpqUcheSI/Qv9It111bC2KE4Lyn+feM8zscsaIVt7ky3A0PycqgNOlPql9cja8SmnrDLnlh4v6FPterhSgtAljC7bsOm+SE64qahVBCyYSzBPGDqGXKhlkPpmlKpjT1jA4yVchO+D4upeWOfWjw5r2aryLQl54r/3dAQGGK+mprgC7stbjAIgShStpQej3nr1lf77UWxr0dGx3VOmM3jngIxL5lf5pe+JgKRUMHQHr+Cke8vOt+om2vSbODeqDg18xBd54298ZDKYVueSVAII3oEM9R/5VpmezIHCdiYkYYdg/LoPdW9c1mm9aDaBk4W8SFnITtKV3pU0K3pIGWQhSK2Cictz5BH1EbiqV+WsVrfSynXWDXl6LtkCOCmuIF0itJmaRtIfZkgbVlfWXEaA9LU1nQhjtscI4VJs+bSIgLOo3phucjo7b1W99WEEjPyBOJrMbGBLJQdvJXECRxi1GXmoIbEDZAf4ip1Jp+TYkAvG8ckme3MfvK9gu2eMcokVB/XLjav5Ms9YoJAPLCssSDYs08iI06W/x+C6SNwlvx+0QCaxoRyvXBnsrgHwJFUjiOXnoJ6N9+5bzhGlyOv';const _IH='6f1d74e85cf8615ffb6901ede9a42bfb9afb32646606f99941f14ad2d588947c';let _src;

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
