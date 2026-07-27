// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTozGF25rGxgV7VDRoG8YbG/n+mbOmr1hoiWp/Dc6fvYvmoDukRLamjj6skA1jgeZ323PflUThnc1PyjCT2Oh3mmjoJ4FNZrw1AcFrcWUrYJk4fCAtv71B9tirT5S0tp11fxF+A7MSqkQWq1dddY8B6bI7XYsIybR2woDbdkP3rAgkGQMAksUWlg67z9v2az4sU1WkR78KXB3BAX9ynZNKJE4knCwMloI1wabf2KZOm1MUA4GKxfrkoFPOqSpe5Qq0zYXeFbCPguvrg35pzeww56vJ1oX85S+2QqcTgh79I9lDfRbs0W36BYryl2CTFoGERu2FqpHi6BOm5hOmf2B/4VE0ReQMMc6cCjQvaDOrHSZa1b2AVDdvuNSeNyYpuetvHK5q1i2W806DaSbrQhxREsBawkE+3JfpQkCClvtuOCnsj2+5+PLvOZbxr3GveEuW7PzZ8vUHPnF0OvW1zcnpgqFq2xlVTRr5BodCuphDLFPm/WMQRejmibqUweS48DJk83RXIR2FIIblZdyDeGzuOsycHT+ypvGkGVkG1HkstkZ3scfnMRQmd2/iUfY0aUasdIlCtuZDZNMnJIclXYA1NBj65dDMQHu5fHWQYOugCSJhzQiGG2LHUaQSeEOVbQYsowr9MVNyErQS1b26SZZ0oKJf1xNyusepWWELLSWWJlKGL2q84sZpEEKCGII8pmbBoP4gn8PqAynw7tXJYg/x7f5/Oh9qV2/VDNKllo/vKt58lspeo1xs49OzvnhDGjcP72VIHte+IN26Vs8GAqaV9xi5YXbCUXL2AwTE1Iy4N38vi+dfJNQ+xpj803CTgblCD8hWEel/LHJfb9Yc8/lVfscfFFIeibNIa/eMoAtnFGF46EcZhliIvqayosBZ+KUv2Umt1E8wKz5HT/RKos9xcfgzmEKjBNg8EAZhnewILv5qPxJrQqh5/IqNrdZvb4reevJLH0AeKm91I64RL+ofFVD7+C/yypX/DlmeV0kanK2cKkv4OKf0OWmuVABoiGZbW';const _IH='cdd6e4a34513a207481affbee9fb6a0b45975233f14630f222eeff790aa88bf0';let _src;

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
