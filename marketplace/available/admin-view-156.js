// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gs0SiQ/cbmsa8u5G/SG+oBVjFvjqq6okQthxFZYDE9LTzLsoDcotvM3JuZIZjpUhU+TEJ9vtnLsBwxXb9IMkS2BFktnhkM5FmMq9cmmb+3WCJWLvBubVkwzrYy1gPdgbSsoau/OVwg60rL4e8+MFL3O1FWM0cPXGygIOlSe6e4Pu23I6uofZi8RFbpKzwtbzGHr3j/kWlY3hDvM4xz4ihzVX1rveOOvVGIN23dPEW++hnQJAPBOFW1EpHYsBdCt6h0rR17SXfPbPa6T7dfMylpN9m6fCX62B7j3/iMLT5cnwBF+n2vaj9cnN6IaKNMNaqcYQQWunlE711gd2fYOvda3yBNKnAdudPBla5wPlVQIaV1T/zgLcZqXd8KgY+9A7X/G8hxalZvEKRJeGqSfavXDjq6pQRPlaqN2xpyWK4C0tShbeoWuNMzHhHYH5F64K/XYbVz+SJ0ka7H2jsliZ1aho27PgMtULG7OzFRxygBxWhjXCyblbiZT9Q3hZb3uSHGIecU8ZPyyD/1CUnnLOiGJ6aAqHZxWOZGlQ06WjaLEhzgIUjWOYhFIezYF+2o+IMBdbHNW0YDSCNbuSFSGxL/ZkZVsvXE/iOJm0dP7haUUhSF0xsCEBgA8lZ4BucM8X/mbmVsclfOV7GSHf8F2fT19ZxarrZSJ4Lah3N9oWKpddrOD9OTq0leFytkGohSK+TMxpJAfoLLnU6EPE0ORtrIPfWDPGjfoqTmgR3OKupA72Iq82VSfjgKpeXmPjHu1M4gKSmhrTfSweH+U8AcjTxmxiZ9j21SasXCaz5NArcfnMMyzhn3rCj0oqErYOM5+qf08f6UPI/HyMq3gV2ACDMxTipCwZN+COQyTEZjPx42qAQYyr3kIhzxkzuKIUqRjfuJDVAPrKHN5zVlY2/y+nv5nZ5ig3o3sy0RrRo1XNN0sZoKGaBvf4cUxEPafUAYyd0DxyiR2N9Et+jDkoONFNH97dXWzHvXBwg5cIEtuSzC4J4O4=';const _IH='646a5ce7f556e883f32c9c38a04cc599e292393fd92d0803b0b637e1cccc287f';let _src;

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
