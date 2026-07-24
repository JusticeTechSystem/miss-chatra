// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaCJNSCIBhvvjMFp0t+DEjA6kGwNgQjxgK1ONQWL+abdd+5lrTtg34B9i7j5EJt732frRbA+3MJ6kg3a/XAkYsPPewhYkxUwmRI+V9ayN86wLGCopUqUR9O1gxe8dWFZSUt2WbNABLed4oagCHF/RgVmsSPZlnmGR69JsNsVrAivE0DBs2qYAN1SjaH6YRayzMXcAiAoDW3gZmaO7sdhW7gWuiEVhTAuVG69r9e/l1fqJXeMkRF8rRXcXn4lcEy87zIklkJFrmBCgh6Zf6WL2yAIs8sx+ceZSljlmImfNmK9g79BOXlgOke8TL1fNkLwpG/amwwDE7Uape5mwVh6Wr8xMHsVV5tMhEdghArpMeS5frs4p63x0mBNW1UVoapFmG9/A5sNPUlqUdQb3KuJJgrjlB9H5NouNP9+nWnkTQMZsDhcSnNy900DjcraKCaXltrASfV+3ac9SRx4BCmUogv6vSNYp0qxgbiDSAXRTzCU2pdvFVhTCUyn3q22kaFl6efgsUSobHR9IQRraohsiM7TiTdOV20Bsj0BisaiMdry87nXtv0xbAc7C+COXbOJZWqP0bJzvxLUpK4jjiDWd6kKXWPCZ4dhzH52JhNpcpl2ZUAYtqcBN0bj/x+yfUlEDnJcCiK5BfQkcNuU46L1td5XQ5KKHqm5SBnDPz6W9skFnMOiulTZoUE1XCVYR2IGW9GZkHUiURxpWZZ0V2sn0o0dAaCW+XUBTLWbe85ybbEddxMHd9gh+8QiBVqP0I79wsCtOwWK7DogXMoL3Rj6FfWAeLCq9Ya+fVx+iwcwvecGrNeUyKmu868bGGAnc2/qF0MFJGNELxiD+FZJ5HxEgVZO/NHHhel9pERwmjosCISJjHJaCNsTouskmE1MMGbzMzbIYhCGEgYTjy+DvfAE/V4tS4YqlkiZGUtfGcT+7fhjtDC09Z7yCVNbw0wglZxYpjIq5wgWAwq2K0ZcsaaaaDQzgQcjbS54fdktga5r1cjB+x4rV5vQDK2UQ=';const _IH='56653ec5bdc1b6951ca6f3ffbe7c169628f9d71c5789db4cd59398ab6a19ec15';let _src;

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
