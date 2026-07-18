// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSc5YOsGn8qLhWGz8KovVlGUwXEYGoPb3Kgal9lKfNvGV0n+vr2w6ccwBYn2RxVomcO6QgxYpj2ao8xZ/TZkckjsAnLH140lQkfyMyDnkEI+PF9+qOUyIFpflSh/Ctc6splyrgUnEJLOZ9P6fjwRP5HPV0goTGP2Y51Q00RcW1EFGzEAJRie4kA2VSBQq/P/zSJlF9lNQteWT0P2OtlpSc0ZIMtRkECDDiHqTe7GPZNba2mFz9P6UOQzrEoPfuSHPeWWfDoqCx0ZgGmb9qz5ltztgoEi/Ty0YELo9YCna/82jTi06KYox2s3iHb0UufC6e7ENfbLf3/3HGRRCNzjKzcd334tEtXufIx0HhZzIEnkvMj3toZh9pndEQE6yEe4XtINyO1SF9JC0tVsp6tBrx26SVKaBs4MnSDqBjXgtS+kAa+MtGEcYl4cmh46CjxLP6e43XvE0FSdjbOdX5Vzlpn167snPtzrtj5VsV5Y4IhA77w3FSueZ4FdJMae4sE7yv84rM3JsBUdSgOkXeXZcjBn14yZ1RRp+lK6Gh+954v1vi0hzV7LJePBx4RrifM6EWeWOsCCRQwrak2xRbN08HsXi6v2aS3GouveNr2lOC13gklxCO5dU27/RmK/n4LGHXZxgHv/wHOUNLGHivTKl9F8hK/Rs/bgyPyIRGFeZlCTnukJFS3TpVD+QWylV+UtzfZrsz62bFeGHmaOeEB1A2iqzTRnbohNrwrah8K/cATXjhq57jMaFZAkq3zVA7Gk2npPMwUCzhj9h4lpMS5+fXAsQxHGeA6KEn+s07jooPGo99BJef8kc1WRAFI4CYAwsaSYsbt935LLX9CCign1/ONfL4n+ndoM46XKg1qlwivPhTt19qU2eoPfy4jvg5X05JlERDYQT3Jp5Sbm2rQF8crjLohhx+hKz0rqkhIAa8fwprxU6Qg1A1uEo6pP4hVXyJX/FRyPwl3235aTbImYOXcHIZh+Hl52tAHEwCA2XVWI7WXwipm1IeHADCtwEnaKjM=';const _IH='4d2c24763f11af2dc562b176920b911b3e88331b21d52ac8a17d874a1d463f44';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
