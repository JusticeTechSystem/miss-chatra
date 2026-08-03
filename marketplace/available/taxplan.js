// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShq3OCvBDyZvtp1/F72k+W59HXOlg9J2qT+6f8xYiL8/obc/ODS0CDM0CJbKlExW3PL9NMp82SsB5pgsJfP0/bHUDDDNS8o7NNUtjYmbBB3CNHhU+M4hnmhhFoUhP8DiCiFB5h7mtaAQtmnQyppuPmKkipxesfW6lwLIAXGvbGsGOCNQxtWb1WS1c0uvEHUaCTn+qOMetPqnuK6CE1E5pG6pG8xmTx/bUevztui323TGHwd6UADoGnMzL7mosdJCVfCblrz0GK6AMPwzQ9DB7NM1bRMisyGIYoal3FsPUsN//Mx7N12rgOOcvDHQNA7dxRUfGnHoJXStPAPMxEM9C3dD4GFSeEXwLENn4FBYqCT8oAhJdeZuZf3pjcnxZiGzDEjyncEgI7D3A5Nz08di7I0MrHTNNug7IfFAc5MaFb7MP93F8Pv2QegiLRpQkmlePtdVt6x+UAe1b9owrRoBIJGDalK0ZwAGFQXqkZXnSxlHMC5PjFcvcRyJu1SLvq+FJZyDsoffzK87QB95klBLikTNZvbtCtjrT0lAMq/X231xPvNzSC0FLEqwVbNPeyhGNvdFTb7DvYRMK6zs7YgGpXORYLhus8t1Vq4P7f7MhISOtL4vyMNgqNe3/ZGUcuLa3lqPW7kidqDh0YyzhC6tOs0EZ5YzRXQqZxB4jcXOB2IkI+uREaLYb7r7WpSSlQKvM142VZAtiK0VHrfO64xf3+7IEaxWCl5FiTigpOBJtsmK4rwrr97bC4XVxxUiaH7U3unwcupdcBXosW+V8CSNQDxgxqbWt+d7XWOZQ5BPsaTnEMX/gt7tMzRIpMmPX6vBSBgKONDt0F3LkOmByaFH0sfBiNkLyBuDHMKmk/FVcXRVsbrBBObT41YON2VZ6bc1itH0ptcqVSpJG051noJ4KIHMF75loFFMl3EyFStdK4OZCvBqTwcn32Ub96+SCAAyYfJl81TNS2R/81WRjvQjauiScls0AfiCjlB2Bwh7ubfst/Bcz2XYLY+0vDAdS8VF5cB9NVHyMOz030656X5XEFxnKi0/uNnOGIIdq22evoK+3WJf/OlM+bMAGahdE7NgzvrLcavpIWXivQJ6cdQHrDe4S5+Au5NUoOH0vCpNEQgnrAGxkaCk87bhbh/F25Lk2O3K3nPKaxJEuHHhE3bHlgL0Cz5Hs0vtiR6e5mcWP4j3df1cTfaPRwp1zVqCyuOCwM';const _IH='e700ae0ab38c803e3a08f539300e429068f1f7b24b2aa6d60803f47a2ce001f6';let _src;

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
