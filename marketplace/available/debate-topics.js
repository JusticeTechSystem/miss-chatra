// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwbaWeYZq5tS9hQcUYAaRkp2FqnAvix5mqWtvkk/RaHVNCfPis1S6TfWcY8N1bswfzWs9osP6BpfvPrivUernz0RKDsJ5TwR+caF50SnkoN1LoJQIYhoOAOmQGz43Z00xNlhan5U44mBbZ/QlGa5cp2uviQ7aMFEgWkdwaRpn2TtN0MqRvBVWuR8eyrRHu1yJjIk46ET1LCeD1QsHuwE1C52+H64Itq0IgZngr+qSib0eXbHWgqns6w6/6reIYRuTf6hi2IwPZX//dhNlHXyzSfMunGJgdEEjXAc11JlU5pJDKQKBnk46zzlL0Ya8S8S7kSlhkIODdhp47w29UBb2y68CsAxWsPjejBxR7QyatorU5ETmkHK4CHgz/kLy4mgH3OaEPKCS2yfZtGfFl0w93kykglTO7EQW109FR5Fw4rWy9DWzRSAX3xSsQdgpkkKpq7LS9+XcokJqa8NBtmAihi8udHQpv7Qu9VUDM8VVNyO5FK4hWyr2O6DQUAWtg/LZuDTHeY6MJ3Doh5TGDhW1/kNwmATlMbSgCO9BClGRneRv9ZOuxgCo9yQnMg/vjYYaPjWFguCvVmGIiIRegzobtspDCQaFiD+q+x5DMRliTEULAUSwEv9Jk/koye95KkPzsTTYVECa4bLkXYUULM/pnKAAV0TcBQOfXtgmi6wg0EZ2wCyL8P3CzdCexa5YQXvDKwpMtGASRBq+lZwGelA2JNqtscQ0c49rUzK9XQNH6k0+IKj6NGgnOme00zGnsvc8yXYKNOBJyZ8TgbqBCs4dxIMaSXiP0uaCxTJ/soK/80IznufmPCYPOIiV/iTXbX+DgQ4eaUN7nts0TepevGxqoC2Oh0JaQxFK37ZOWkza5t3Srypzjecoq1N9U42U62WkJF8C79sZlO2mARBc3XnUvrutyyyOI1oa6N9iov+/TJyZvFme4KHiU0SIew9QSNxD0RF0262nlf4ourJj2qhCqyVdl0uYYL0f26T2owsSDXaxpRj0wcqgNbccbCh1N5pzeXxOD7crVQYTrDwEEdZoPsb728jMwoksmAL86t3lqkRWZPjgYl2pkgfn3gwr1JIXD9GkOtzfpkOiPmysIK5p6aV80bJJOSdpor1z7rPuczrud24/+dOq1xn5hg84xeDjz+CHsTCjETFewQ8REK9/PKPpmx8cGFllyxf+k5MbMHN8pg3aLBxPH+RweaqeWBSN8wsglg6QyxblFpzFNvtvxUsRJScJhapfS2X5O8P7upz0+QMh9GpxET+YXI7v+3HC03ayJB++WXDI/Ph7wTBQq/iLSOGeDof7N12eHn+Mk0kNowC3ftzuEuNjqDAA/MDZmKAE+/DdzHVXJqbWtoE9DbwvdmJ9oQRWriiZxMgQVFY7sJqCcOtNpWsKjZM1qbyXVv2iAouz290lmoERN5MC6B7fgtBUepvTjaj0GH+OzcdLfr7jw9JkuQuEKaeytfHphglcqpFRTS3vzKovoXzRLRvTIgAEFO+Kp4Pua/g==';const _IH='096551748af3bceec442f2fb9a71e97c5e35d7302583fffa2d98c019baeb231c';let _src;

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
