// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXV2IHVng7Esun/FKrEe7QKkmTkQufflzr9LqMeyJ3cpS5qeToIF6YpCULdu1ggbPlMzrh/nPlXiaIgPi4N9iOEj5lwNhA0jpsctT+0yhnJr4D2VRp2CTcWCp0otu1oYX1SZJRKkgbY26YVz6JwBI3oprL2SGbx4GDaWWmfjvKyNvfQdTZ3+2hEgJZ0favbP9SJlvRFcNe3uICcnhGotiwMdgRFMLV21Ya6mHRkGiDn9dlbrjQjiQa6PT6V4Ax7qU6MnJZsH0tpONGrJUBsDSRNcd3XSUZg1omaNS5CiVdGGvlGkzQLwK2MdAtzgpv5MCUqlYndA/QPSWWwMRypp8nZUeTWFZQgO1+Gvq8y9Cvb61CqunZvaoraCizcOlxNvbkCkHFJ97+Ck7PaeLHJUNUSoc7cotknRrVPIWmXaiE4CDbtnKB7QBTOT4IMl5dFujFC4npdwN80QeelYxr5ptxWKuGoQ93YQ8wF9ZjluBHuszZX46zZAoqhuEG9wB3/wCbts3pgg7t9HFko7QlCrQlQzbZHgTPnKj+8GhoGKTOaOMub9XkTAuGFWJ4Kv4ksFn67C6o66+tk8Q14yJC5T36MfB9NsbbmGyZl3dWC0PePJtURQtdLvMs+JTTb0UbD0VcrZPbFxB3xv+A3H4Amj24k9kuS1JZrtfsKRmpvHyXhB52Z6zoQYyhRSPu5v9mjxex6vaL715e6uDEdVJBD+loRn6uH4SS4r4EsLR6FpQgggP4jyhvJTBNB5NEldHtGxAn71VmpiANjF/bKkLUGU1LCfRmq13F3KAIdF02kYRGBoD1PrDCM9Kuzr+H+RtucwLPHL9IYlB3t65X/K27OUdo61cdNIR2KnL2bvtKk84UQDqTsIquNo32v8TX51aXsQiYoupqLmXnkctPrcqrw0QZ/8fg5dJYpMeKayO5h82ct3aHoOI+2tmyAosds/rkl3RXxC4gUksAicX82n28sGzCIVZcGPjdooPC4tsxsMHdA6yId/3TliLBAgvCh9hd9hbtZnpvsJzcBTv0dL61PGmKfA0YXLpAMPMBAuwdFM2t4nfwlyw8MCZRXckf0kYwGiMmtKA303H/M54e0KQz9DtDtMXiV10aA5wI+kwCOD8h7Pw/VuYNv6M4DYx1SKmVN5gYdd6pNzfBiD8t2/yZNf87vyX960kmI91Ab9nfzyoQ89Se7aR/oV0qqZkV+wUkvI+T4kQ=';const _IH='34a7ff688ff339d60f93ce8bf510b617907bd115c647f8fbdbc250ae9a8c9ba5';let _src;

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
