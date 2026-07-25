// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRd4cGWT2B+HkDdMp7y2jZTQriRz1VXFB7tNeuUFsNxju/PNjixAEQVO0w/mlrMTZyyKRlkmH+wk7t8btwFy1AxzoGQowDUCR3T5yz8CKfRaQcw5S2BjFZltNcOOuW9hubT19txaN4um2cLoTbpfAMMy74GWqpfVcXSKfE9wWmIk/CBJb2CI+7KGhbUUB8ug79LYA87AKts9pz4P+/B/ssnWTNFQo6ybx3S3rFQxJH5z/czGjsTUGPLvV63cTFt3gGJ6Z8xRNM/ba2rbaHG0+3D6HrLuuvFxUBQb7HZG7fAMZXhM6dwWjBwnlmX7AKTdSwGRWYULaGI/uKHucx3DZZRUvE41bnRZOexr4/WxGh23zqjqSd3jf3Wv8Xx2/r0vJG8rbrEuOjmAR8jKrRKh3Z++mBMWailyI8SrCKgke4StqtGtR0F5S13nWfmMapP0rB/x8rUryYJL/lGZ0JOEs8KY+IxbUoxOn7zkFVS9OAGUmX//UnP3Yo/0OCga0j2A3lquo6rsmBD2/vsus4fic1hhlLgnrfPkfF4eg0N0vnSNH4e8qBFdey14SRNvvcs9sETI7Xy0z5ke3hnGmp5BGGCzg7ubqZwWehXBBdAcernePsGgGVikVjMiBXojnhuiv3cW7GLaJ3vffsrU53dacik57TiSnOiCgle8izTUJ5x5XFbQoUeT1KFSECKCYPV6yyHoDsx3Oux0exS6dU+l9jupu6Qk6ZBuSTjyEiU1jZybKqod/aL0lpPAQ5TaAPF8MVpD+OX39ib9+WcJQjO/m5IC9rFrYNILrZtjuIzH0Fc/0qZytZBeBau893xNzG9WKIeIHbqH8wFlzEuiOCfvUDcENEmTGeMN6xhV6cOBf6L+OzGfoQVjvOViV9crzyk1QNnAdLJMYNvGC5iqIEd2Zxlzts+EhlnItIhgHbcHFvrLznqn4/pjvRWinJmP56XYjbhESxcNHacMHQ7W08T6iuSjn/mDuIJcJFelZxIrQi2yyuulEnmUDKlf38uFf0MZ/jSv65tUilIBUVQWJl7OurbCxJEInaszs2GyWSQYCr3kmq3XWx+jP5IxFJCkIkUGuKoz1GdPcoWAAfO8OXaGbTyJ6F4xkfAn1P4m3ese4uFnbbHQCIEvzcdXm15DjAJesaW+oSCXrqZC0dnMsIJztEmPpFJ+G+HKVDLXio3v5lF2TyCvZYlWaEHjr/c/rcGttwsbejlsHYqmEu8gY8Exa8zUEWV06zOFxpAz7Vv/QVFx3T1Xd4gMRaoseLMkTAxqHyx0fRJmhjp98IRnQWrf89XTOAxy8u7j44SFAw9UC0cjpfY9TatiDX068WmJZ6xxvnM3PcOI7bXUpy38ZYcb2C6nQP05SW/iPdZ';const _IH='4623ef2371b9869320b607cf9b8d0bea9cdff2533c26f38bbb118beb3feaa104';let _src;

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
