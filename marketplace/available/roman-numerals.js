// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSG3cve7136wISrkBzj59GKrHuvsW4LDCUnVl8yzFikDy6Td1IeUUXKu3uR7ZeT/aqdBhhi6PoEO20mtjIkDzbK9lZXW+7kOI3z0/Ohx6aylJh0OuWiBbDwF1kn6hPhTd2Vp1Hj08T4lu/SfFp9dzRBI0EWHkGSlxH+LjAm52rpPS8Cush0Lafq4hcSnmXLbiZqgldS1fUvFMRqdegSIQhyfGqImiwcuQ0Kba7DLv1L7RIYfJJ0wr4Q3/0+ijMOJQMht0073GMhPK4VKOa6qn4TPbicW+v6dO43soBhZVf5FgjoqI3aaaW+B7y//Al7FUHRkS+cyENOh0eyel8L8UihdHtgLQAm9pkUrxMPb1qTuDxWMiwiW/+nbNDILniSXSzA1P1PZS9LanUO1sRAtlGzr6p5shz0UySgrsc8UEF1tWjEzFlRFAyCN2P5jZoS51cuhhtTlWJNz+4D1XxkR8WZpZFYIPVoCmlqS72MLvEbQY/NObBT4640oOmpybqMQT0xQKTej7BNAjIV3Hj1Bm7WqpqhU3uH1CYZhA7H2PCnP9jlqeiB2eJdGuASi8d69MOqJOQ=';const _IH='127f37fd9cdf86e2279f4c26c12a52a470cd577847d67f37cee2e23b6ec0ceb7';let _src;

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
