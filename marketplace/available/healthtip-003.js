// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWLyRVuuyKNbO07S+Odk6EQvdyjhS6npV8P1xMX1Yyj9WEE8wTY0MvnyLdha/L994eNGdXl2HHQ11t3gVH1UsWfVLJJqZpq2s9QbC0vH77g8M3QxFX7fyjKuWhJafXHPXk1msR5bjXYqhKqICBP9FbsGHznkRsMyi6jlNPJNPzGXw4Uy4pT7qrODNgEK/fn+M3DHfYOxCCQ/E6WNbxKppskMLjf84b1fr0MJQ45b5ejqRhHngwhlQtAZj6fGER934BiXuvBexeR04WyBwH4m4mSKbh5MMWDs2UXnPxMBhxzWpC5NY71LAaEQ14IP8EU+/sHD3kPhvYh80bOk9oXdOdqHSsh0kVoMkT3oFeKk2mMrWqo7Oi6yuNXY8QTJRdk+bUj+OcyUWmb9SD0Y4I0LWT1U7jILCSuTqat8WpSzL0zYtljik/DAMIV522uNfrxbjejdwrhcbhRfok3YM5HDK6Lbdj5p8oOtaY9KIRgCe1jv0vJYmgC4KIKtrCTi9xF+QbQT1Hfv/8oL5vpRMYFvlMiybvifixED8lvCwYIfvEipPMzYvujHcX9+gbSUcBm5qgQ+yUQWDwTmeWlS5xsLC177HhFNd88VKhwoUdUFSPK/gfuJ515FNdLslHPnADcI/c8zamxPUezI+jvFp9NVhLVyhfOtIZnfXNBs8gOpsGbx0o100FlD3lYQaWJBXZP28JaM+gj1Dw79ypa3klmvmR7ECkqGbwXv1Bc77p6C65wQtNShkeieHjj4zVfewl1X5DKlkLQkS8DQDkogyOBNAHupbUdsZdtS4tToN28gc6+ze2POoIXof7G49MLIxoY3v6CsksWC0u4MFaHMjuCgUtR7J3OHd5WfRjFBYurD4vWQBbAnYI7mUcJ3SdwAk/SSlTfWvyldgQ/8mI6GXYo3TGv4k68peGl52fqnn+iTrvYKm4VM0juOGO';const _IH='377796db21de2fa34e6254bfa4804e554cfced8ae3f867caefccf43bbcf4fe34';let _src;

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
