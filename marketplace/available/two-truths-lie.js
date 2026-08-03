// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSi/WiWDx013eqx5S2a9uzHEdDtD2bRUgMOyQI4mygKXeOqhxahqjFlzOJFXd5LPyPkUGi+78YFz7sFtkdIn6C6sGf8Lox8UlLEXe3TuumWdsxeIiKfmp8y9yHfQ2td/zeintup7g3KIzkpm8AP+Dkp4mqy+H+6CiSr47Q60W/egM80ipArO//lwIXsGehIRz+9QJZ/NlutbQfjqwH+KREbIYNPNw0eY6NL5BDn+MK1YWapqBdG6TednP5FcjxbodbgZdMHD8TyekrRffLtG+k4AMjQMUgElNe6jJtIfYEuQ/kldAOHi1+306g1Z1OcclU5xTOi4h9xbq0q5qm1s7Cxzi33FnhrzqBzMtaD10rQZzhBp6CJ4068N3+IOrC8CAn4DoL8ITfxCACV+45K2D8kE0b5fGS5kneWijkV/ec9WrqPMTfzFGXpnJA/Yso+b9euk8H/LYdJ/ToGbkyW09lObm7sTEMpuNhgVQU4YeYTMOeZ0VxJHafBe96MPqty9nxT+2NohRzMTSLUiQJsmowDZi+RLABjjjaFLwITFbCo9p7Tr8Elx5yltFkXIUvXFm3Cdy49hpyuQstRODcIQuum5WMRIIbsl/MWDhOjuxjDBsdi7fdfDxXm0PeXT1VkYyT+2FhaMXzDAWiTNNJVXzCFK1N9z1hCm3COVMd+siIUawCO/j4xE8jIzW8uU1V/Khc1oSlUvIDWVp2plEAyM7sQp8Tn4UPuwo36rjbh2y75Fy2AH+g00w6lbUkqIZTlvHsTKyKme6ARQ/C+/ScRPyXFvLU58iCRlCjT0S1YIQIN9l5aTvsgT+7OjB6UWdscqRlx1Nc2NbaFK6xTSZjosDZnCPzdWml7y0e6dwgLBa+BEYfxXp52pEt6KCRHqVk5DBGI+1/D+BhF6cimar+7yTF0nRUfkGgzvmgBe+LsPpKpVUSv4GfMQklib/Lff9SQa7bD7nSpu9pLh2yJZf9lrP956jiZIlCnKzMKoCvlfpCw8UCxptMiuUQ3mJs8FQwGdpa7VIAzsAP2Ian7W28Zg5KGG0458fidAOkAc5x/32xhWrCDNexnaPN0GIYFgI9jYSm4NqW3tN9Rbcq1tueke7RIHVs8CUixe5I1Dl331SkaeG9ZKSmVKZaftPZwjvRaYfbJ3jxAJUfGkECVG9mJacYNZvxz0c8Z8L1B3BSzcwFcD1jxIYwBbcPBjTORECQJwyC4rIoDk8fXoNBv/5JRXCRInnqXME+IXVDMp9UGCZXrkc3hl7F00S1bD9iLirTLUSD9ldTCQa7oVLbLhDUpcQDamfAS2UVkY1J/OT1VkvVEB4zc1z38XMmEWyngGR2uJ2izfY0ONFtBXLlOOqqJ6yH9hyw2M1WWksv6Z5x7P6usLZlVzi5/6CFmPCTkbmk0ezbeE41z5aITS0MJ/V39ASeGNog+59vyBuK28iMRc867QLSaoERTd8Jrxev1hfH2hnSGa6V8';const _IH='19995b0c017901573c41e83a7f2d279fc889095a9df070103069a90a6c8644e1';let _src;

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
