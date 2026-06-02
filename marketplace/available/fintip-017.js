// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AZez80sFOq37QFcY6AU2guW4XkKTaUCIBziq3VJfh9I7+soCJUo3Ok1nk1I2DVTQ8x3mUIFvGAiaX+5E45h8SghOif6kcca7Kmup1RxiabWqMIQ5g3lkeFD48IdBinN16dPUSMw2UhMAX89DJtWFbAVpWVwZpybnJvshaDhB0WdS/oq+pWRTP0iuRY3MtnvPqQhffhQV/vZZT4sFwoQk2b2F7Eh83Z7dtASqXDyyOY5RnRBHxW3WP5GN1pASCG3vmkAzrmCjN5VXY9jo6tV91cSORkI4mD4GGyKTnPEa3QtBeHYOr9cch5SsZQumm/fOR7jzWiWTa2tBvOgzI49rSM4wT4C/2kpjfJW8h4Hw8YgIrQT7HadejFhC0gFlLZiA1LwXeTgihTx3du7fcEYBbAWqM0UMcb6wXIycOWMhsjPaUYQ8pwv3VHL0hHr4XgdcEKACa4nYJxv+KUZo+63WkCQwJF/srXau5G+4LJQKIFiWNhDWArwYyLBqhKKfM02VeYdk4WPlTVtvypqC1paRjCIHctToguoK2OEqyeXEE4uZMqIUncIxdmi8mxKmfpshT+Nr1dYOT3Xj6Ub7pBxg0/GDlzL6kQIpUCLoAHqu6mAVeWcF3+PGxlMv4XcfhXuR36e6Eo8EgVa+LtKP4U7f34PwDCOqMyVW5MzrakNL4/JroC6/j/5/RGhW2hyC6w9r7U2A1LA88HMJHqn6oiWHSc1Yc9RZPvADkyfnetx2oaeepZuutHTGxdPKepX5I6jsq5hg9Ht6P+BpXAPt28UhZ1EFjjVrO+vndte/wFcnjA1Ne/G6Pw2/EasHKqF6Fo3ZWpeQBdsLCmamV1TSdPuy3LogRVIZ6FvcBdrzOrXbou/2gbJO59qq5hvjyU5AkCqKfPxwkmOZRLZLoPNrzEo6iXQifq5HoHkU3KOlVSAzQ81UuawwebZqP/oHGAV73WYBtjuwppCs5iaspfxGuIF8pumxMxA5eZ+BqmDrIyatRcbH+6391x2GJv123YfClahzwbwsxUO+fWQCyKEx6UcloJE+jKt6mGWspaUY18oVEMrbjA==';const _IH='dbf7ef40b1ac5d5ceae4f58d79eff23d353a9ef003c182295d19ce20e644cbda';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
