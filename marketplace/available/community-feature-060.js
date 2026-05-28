// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q88HaaFL3cBuxp6YiSBMnPgHgXxJmKVW/qxE7otm0sHe1aN5cl+taKQDjOUlIKe9l8+byVO8PmynRxSJI25Q8SaYaoWcetFWa5SFYtYgE2AoO2xhP/aJqlqa0V7fjVDS2wHcQQOQSOnnYXCnq/N2ZHtNZ3j1zD6jdXXRCToRkIQmNl719aCM8PtysLoh1zxC8RYkXtTv3c8GRIZXlRwMNs5Yam9IeuGJ8pqj7FhGpYR3YGcifnbuCqOxp4KQn13SsOtt36+Z0ojpcfIcy5RqY4K2J5sUNlIwOSESHAfjCVSU7U0JmOAgasHSEuoc1mnF3caqIPJooLSWglE2V8SgBuKjQGIAWh79oyZ4c0IAzsFAs/Oy14/YfTdoSra3fgvLcjAMAUKhgfQJi/USZOuQBY4GKzD9LBbjywXK4iuPhtbUpyEFRCgYWdMs5PMdp9dT1H+3bPRgGlMEyOpxC01p+OzTU4gDKt4GpCoz0Nu8raMklOePH/OZeI/FfnltvWsDYUYZz01tPb2MTW87+cXczn53F1xMDklzrZg9Oy6tB1MOtzF7Vm907sPgmoxnTrGeVkkuHmcUcDAOqQE2cloiuluWHPZ2xKliVYUyansjJw8wQAQlN3Ci+/HaZDXJMsomBOmmhv3Xa7lgXeVe64Us6N49VKc1nZmnBuWd4Pg6OAKvqYPoNKWQ8gWQDDlAJXm/2Mi0umO7FxB9mM6+zcvQS/ii1RU/oV0acK0oBplPGoqjLV7vhOk=';const _IH='eb1acb03fd6c9ebba253b3f178a5e8b3ee72633481119041c2b392cc605f0dd4';let _src;

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
