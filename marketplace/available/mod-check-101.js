// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQisB0AvcWl9zd21oHlIbLTkBnQywPLED77jDlbkyk0Xy3gwAHT88AO4+DVw638Q2tB/GSogSuM8o7cHM7tAESV/PuUS4Sa8cbd83qc9HxWHd3Hmz7Fqs4FIUju3IGMaOmW3cKYqX/9WMpcwwRVsJnjDVsYUmbIqmESa2vwIHbaOJGL6J/HVcEoCuTO3C5mlDNiRevykJwdpA7/kSqYXYaYVoz52jRgFSrd5Bmz6kHPQDrN0QZYyXIQC0GcZR4VwmrJxeA6o8XVT7YdUvsanoJgBfVP9CRP5LcLfbmUwRaBdNQ+OAkBsNDHgTAAfLC5WOolUlk4BBiBqn13OAv+21L0yHIEbl7RKEQjYEXR8dO+RfmuL/FhXfLaSQgXDzzyGQII3+LUYzbk/GDji0Qnr19HjvZfI5Vz0WBfD0uAqAXmK7FbUSXJzzm3aA4pRoI/VIGES2z2+UNze2TZqTZjh0KlwjxY3QPMzkkLrcXxrSvVIF49Q35WtBntTh75zp4xw4DfUykj40wwK2xAAropWxkZ7EEQKaMlxK0B0cm9kXp1TlgZof1ODW7lQNtgSg5gczUV2bPNGobSul3jEdWLYqvCz80vZY2hIksZl09GGzWH8cz0KVLC09LKyW5y3e7fsScClAQO0KILy/pEhG0n0P7ztecss1QJnuw8w/fptgJDTWXMQfaSU+l8TBK20PWHXPrLjoeFT2EcLRTd8F9z9pVpt+ok46FLuOcsIsr8JVuKdpw4Rsa7+GDgeNjQ8n+/PWSeQpQNdq2qqy7lrugnIZPQN5CfwPg9bzr865ewsEjyhgdUfvDkwAjQNLilVyuIkQs5iOMqiUybF5SEAY0cX+Hmoalcv+AhydrUgchPUzmdajZvOBBO3ddb0zPfHEPAQkX53aivB4/mQvaV2Uwy1mBoqwEDccHVuxZHCQyXXPu21EQzsNbzX3gDW5EhEaQqr45hFZgFlFD495z2albfT6yl4HMmPwR2l2BL0UPP+TTSL5DdBegqDJ7qx++O2BzfwuxyMp78Obhg6q2tdWym/vkV+LNVZWCYcvEpd+8wzgBzoKiz/W2iaaMvd+C9PkN8YCbNH37YZ1IwEbasZmh+1WgzvW9e+Ya+4VeQM2Xci8QChPNj7BGhOfHQaihTL56i+adyLfJ3b5dSM2wrXH6nnk7k6frPveE3PKEsHrQtIKybaPsVsCIKASfK6baouEPdQ48nlL0JxUBCgkagPz3u5DlMpqlPTznw4GSBNFcd072JM7m9gBGiMu7kEAdNOoHJJ1UI5b1uxErKDuVVxZszPHMHk9aM8d41fzlguvfW2DVtLQTPB5gpN1XcHB9L6kCt20pdmzXFpAw4kse/iXYKQkjkPyfEaMkD0h/4kxrLUg=';const _IH='cfe230f4ceb70b871c7949b1b210073040b281799e04a66e90324c08480ac007';let _src;

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
