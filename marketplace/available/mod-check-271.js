// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jnvASBteM1SS+Zn4ZwHqeBEb2BWK/ypwUbkEGa+x0D96wxLuGqrr9uYLruWuSReSkMyGXYtsYApMfHRdA3sW935IQcMZWQolqORGmeDoWd5jTmIb4/IMEVI9GD5U2coScf7bwcVLEl6MCdqw2w41dv9VLvq3mNRuOfRg4g52k7witI1R51SHmXdQ5BiwBDf93Ad/B/k9AosOVebQhPOaMGIvkvPr1gZfU5JDcD8wIaRhE8KvTKb7lupJYwMPQ5RuNZ61RcUgDEhy/xg2TNzUKJaQdxqD9vCt8A/lx4u2R5Hc3UbTUXpabi/URq/5L6AlQ6CJ/lv9AVADnovJN14wfTTUjADmkb/ao0/zQ9XadxzkIhlknAJO3PjNKSMI5m7Mq8FCeK0kSr7kPVXTC9KglCMPisCXgSLXmTRVmTR8S6qxjp5zJz26e5ubVJj2emYpbqvnsy2WuJcgVTldINw+2KI94TcBO+en3mK2cGL/6/NcNut4kKfMV+y29mfjs3e4JRoD86L9QqztvKYCQWqvpGUUe1Cqhkjwne43lont461MDsHOd+5rFjGkCsnEFFl9bU0tR6QV1OKSebDHbh79c03g9wXxFYbImTJB94nIJ3Zl3Uq20HtETubIZI6oWnaHn9lOR7CgcFfHxla6+AOmdzOUBeZy90IN+rmPaGNB+tsnXHyVeDDOgFm9+O4meBwSCSRUkUtO/DxkqXmqEhUtNZWqLg4bJu3FNN0R2y0MMSMwSZh/nJXbHh4TncWrMekyDmIlXmXUigzdmFfC1a1Dcc25O6ihrmW2QaZ4J2fcJumyYx90XaYXe2rufOIX2/lr2QJvpy9KW8bfKCsRlli0eMnsAVQaNbcHVVcSkNb0n7eimX+g4o0wkMDw5nHVZQPB0Q12ulpfsn6i0hVxz3w/iUKGYruynWpOd86AjAzCiUd8g5P+oSYsOPQF7k3f3DVrRD/rxrl5YR4H6l9LSyFrKHyXfe8Bk2jLUor9hEZtupUsJhqBEc9hSnEqZerc8QdgpeMbvB34BJdQx5a3TMqpa8YOIUaLNpqLH0QY/t46hez3uZsgr84dIUZL20I2xQZJD2seJBExqRWbBPj4kzJv+HZF1kRghYa904VkMFYPdgc4G+l5f3DkE7KHqSTgS1HGrrqKvQDvJ32bBNTl+FmEv3pyWl4wXd7wbdfY61ydzzS9OphO/kB+6jAQT30k0hwoowCuNjARr96iQSsgXlr+y9mXDxOGp06hn18i5uD8LVuqCL+KFJ6qbUlBpPtWOcf8t+iUBtcm700QDFRlgl+NGj0uaVfqxWvLVMZ0Iln5am2PAw0mjSsQPQuS31Ku+BoN/zcndVwTo6lcXTdPJYmzoY+VJ3dIJhqwxseWfZ6W';const _IH='977fcef0ef7c6b15d7a42c9abd1acb1fba2c171934c3ab61b2633065b2dd0949';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
