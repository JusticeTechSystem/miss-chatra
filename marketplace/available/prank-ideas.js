// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT64aK4p5neeCknChfs4GZ3clOg1+P7OW0ZKH1zHIM+daaA2W/uIzjvP5xnyf8m8Rl9R4M5OlMPwnEaBX/JZpQI6KmPcWp0jQDiFKKPr1NuUd3NwrcRP6K6IVEWYOEUV3ktKHaF3t4tuvKdz2ujai3ASetJJUZtV0tbnv0p7eHpqefkp4TDyU0SBOXDfvYknoafK5bGEgkIsQ8DL31ICIXM5M0+vvkeAwZ1UJ3XXwhQmsK/gI+9g26sIOCLwBIuZXXvaSa4pP7HZnAOFL7CGTxpIrqET1q+wppiRmWWVgpIDve6JvUHLlXa9vEmmnVroiopK95XQqhCtOCEGsMos+O4as3kpuvopOEDuVoOXYCzRadTKCka8lkplJ8tQC2J+LI8q+QjqsgvfDtWrZ6tOQndcUaHuOENJcNAilbAgt7UpxKZXaTEQbhn/s6HchP4o5vK+1HjZqfHIJBCBXXyIaOyEBKKkYIft21a0jXJiy8DS+ldlqJwWJ/dtsfAPWoMrY4z5ok7/pctMvrA3dRtvNLq9cgruRqORRT78S8gA4k+dC0GzNAgCPRV69lmn1UzybgeiGpt3/dRfADDKDPfp3ty7yXQ8UkdoleirVF7gsI2gbJGOZhdEsMmKxPsNJ3fBbeJAtGL5WqUORn/dyw2478Sb7RCSN3NJSUQvYMj50WhXdOejG2+lQIcpASGngSZ+glBhNa96j3Ea0jdNlsNeIjVDpE7B77Ch6wItYglAfSFaD3zbSODYCWzGLNB8vnA2OeNqBCc5KcZ9WYBKuqP4D4MQmiqx77xoQg7MfdOhpSg4khBZB6KVi2D6Gt0UoVz4Xjfgd8sUebKlWVIXgyMSOn1pO5SbRkdkT+mO6L6gCkS9f3FSgBnziQATz/8q+EN8sXCIpkC9/7XmN/bqliKDWXTcwmD4ajjl82X2dr7dw+A4h8uJw4XBP+ZuN/a+QwA0LasgHIXmNQuaFdfri0mQHx9+Ra0hmYcy4CI5flCM0w4G0DS2RZUIMg527ZJU8mYTVj0QGgVfsrlP3caKFDxFGGPxV0HxZXeC3ddR0l0LzWNRlx5vPwBlvMtckj7TrQ15PeaIiKyMIs6qByJTypxdXMiNBOw7nFlhnAUWdzYO0E5DM8GUtkk4w0MDkBGfUKc0e1gKEcJIti8u+4NtNXWDjf140cmr2iLMjk/de0h3i7XpAI+E+LmLcsAJe+vqiADLigNvahE9U8g7ezft/J/TPJjjLApE3DYMTXpkW9upif5LCnATGA9Ipe/wisZxXRpf4TE4cZp1ZGz8gNRyjegHuuEk/g+Vp4ch7EJaZYN98/kyrR55KYWf460AmyMQdcUqp4tsY9KFAtEhYgJICpJ5+oXDT9JEKHRNkKKsQtJ0rc133EgNBJg2cU/QxBnTE1YTFavwUtmrLyhOZyKGeQz4WTNpkDhM5t5Z5yMkOVaWkL29hhM5jRVWah3s54vVlKV1kCYywOnbJTqT01Ero/0VLW5lLRMz+f8v/zdPLDHcCxheisRnT3wVsOMdtThIRes8PWpNxarrd1Yew==';const _IH='3a9cd655ae9fbebf0444300053bb37307efb770f08d0cfb377f45f4424cec887';let _src;

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
