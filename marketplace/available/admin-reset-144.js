// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T5Q3dy9sol0dqqWzdbiLgywsFsfSGloJZ0oSG+PQGExhnlimC3vo1WKwkpXj3orx12MsNm4jfxxSCLRc4Q5RGUdh2R9Wx/4lYrNjw9a7zGRq0DyoC7OMase1BJ2NMJVgYIU5X7kpm9h1YBQqluCaBBQJK0hPpjmJMZv0H7LGEPa6lAN9TZyp3w+sn7RtQlnb+vbBqNPjrcdS7BqI+xc4ThDyYFMoiv3fnXvM51EaRyIdoA47mjU0uBBcgkZpzo5qpalWBifFf+mDzsID0uzPVmfOZx3LLwdNIO7JOYoSZ38baE/qjtKhbDvbwtnX+EpayijD9vJ/buTa9OBNR0lAMeMH5mbW/6PeANdOlg/SSGPlCgKcXYk+r5ILqJdymSHP1D6jyHfNqM7e+dgjy0MQvNh3QPHZR6MTboqd4Whgh1E2Aa6JcWPgz/valHXFf761aHfIsW7xyTkLcTZ7enx/ojg4bLIrQvGlMgTN7lT9AF29ZP9J09iCQdqZHFVCqkh/Kps7KLg664W7suhrqn7x+IOkAvYqRoFEvQKCSy5X9gLs7ijaW7Xl2FUa03cKMU6mgw/oPFSnP2poSboPj6oEknTPzgYHMFMpQ6nVz492oZIzlhrzfePAp4QnGu2zoiX+qa4PXKyRuqBwYjH/1e6fqNMMaiTdGV3keebJ3UbZGKi62blye1QCPvQp3BQcKQPrsNkghFNLS5CMTfRoAK8QwyaLY98IIUi+GIU6lHXbsyQ+C/4uiNop0FAJttNgI3kzKPP48H2Drp/oW1pRjcQRojrXutTUAXJukIHeaAqqG1tEwAIKhtxwmrvFmawlWZVw1lqBnxEuFIFXCBtFOYc/m2XU0ofnOVKJjjF47z7skbJqDvlpAgc68oAfCzOHZwZIf8tvNzPrCrjMp7ckeHlHdb2OlzGx4udbQmDyPTFTmug5QjNIPw3zoFYjEFMaAaLEav4nhVubRkyr5vHYx3GdC2BON+Vmbo5RWCxWIOq49OWDXeYubc7ixI5/';const _IH='14f761a2ad5a4668b2abb29a5e3d40e9b1355882d51497090b74e514c1bc6744';let _src;

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
