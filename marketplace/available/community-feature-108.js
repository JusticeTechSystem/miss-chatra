// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LmUb/sJYwZSyDswQ0PrKb9uWmBIXXzOiWe728X+ix3eY9jHAxLjcAqQ+v1yOMlH7hVWEyiSbKm6OlYjVHndLZDqkeB0UXps+KC/n4ZtZVAkKKFw3K9Plc44W3DeWkrj57N4R0O+XE5jqhgp4FnvKw0QCXrGjdeyMCHU/gNiXv4rtFx7qjkzqXNYexsnckZXptUK2r36A3Duo5ZJYyiIfjA2QSl1ecxW2aFVkguodI2oLqYLVTRM1JGrsuEgtnIN9TtmH9lL1k739t7iY1lQekI1rUgeGpzyr+bbU6Cb0+TsL2XGtYf0AT4RTw84sMbpF6OnvDG11Nmj31YgdKPVdbD4n0Miim69w48gsV+4qufrH1rzROc3b3tcAW/BV3z1+IAhepQG2ebE50W+uueDWGWDTKBQ79wuQIe0Ss/3pQ0I/o2mf0nkEIQTXwdsXvXbp1mn3QprFDO+UUm3prf7dCp3V+v7UwMytmcQ4DoUiBtyxQdCn2HnmCW3p9FY6V3JLsfnxMSNfucap5qhGxkgt61m9wXRGVzMw1DBeLuAJzd0XuXusBCP9dhQSJ7Y8QGMfrlg3KrF8sf1N5EKAyRkz2HKuVdQE1SidxA3db51V2nACNSrGTdy6b0ZaknxqJc60cMy+Y1OmumqElapWW3VlghwxBl1uJL7V2EadFlmv40AnOydNLszoqAWHYZgQ7FcSi+2fk5suf4Sc18aEXBYMe/zOveph2b5Zeeryhr0=';const _IH='82e76241905681391e431322ad73e42730117adc250e05f012bf0865a49ca1d1';let _src;

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
