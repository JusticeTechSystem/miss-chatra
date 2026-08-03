// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlVRHNU1/TN4SYI/Q8LXeeTWY4gqIbv6/UJ2m8jjDRJMcFS9sghiu9u9ZoU7btt3yDGq45alLj3mU5bJUd5H0bQF0BnlJ5tdrEdqhwUaj2AMNRSSh9UMmzPa7H7u0+vopEuk9EfUZMxB23iwHK+8sVwFTc+gsTWFD16AeJZhhDs/lJYjf/yDANrePcHnS5lg+o/cy0Op0Y3yTwGlMq6wxMwFmEP2U3vyNp7Bh+7nIhqLFsb99bVrwFIMYn0iKgd01qqyUq6A28VzrbbYj/rP2kPsqxfibGwPhnQlHKfThGu4Jztod1Q9uAZNZMDalRuKXSxi6pdWfUmTGBLzRoSnb3c1yDFgl1Nwr84ndzeeZliBtE7lIKyM1AXdWJj3tQLkrKU35GeUr1ymdo0oAnXeqNS3yVIOP6gesV1et564An+rV34ueKMjQ/wVN0wknRexlamN2lRWqAw0kj3aBdw/8qf0dSQ6oAblWZfG+Ho1Hl8zIoAq5isWcQzy8zdcymXGb88lo1kuMRzQdg3OG0+wQctiMnA3W4L7mLRDQGeVrwncuQOMQfXEG34b3aAPOC3l5I6UHcnQDinNmmrNQy4SsuZFbWw+5m2ql7BVwnk/yoXtxYk+8nr9XshpXkYlKcRTWwBQ0B3A493tepF57gYX9R8HSWrcIsNGo4FWHGiKOS9oH/ufIpnLi1jU8u0iWy85BCWFAsneCyW9og+X/kB5lz9fpgchX0pTJxiBMisx8sOwpSUCazXf4dIXIc0xuyYDuUvpUyKm4atUJPkGr26S2JjRGnyhM49PWPDttIt62uJhsvAyYoiPjN/TpWkfb6NUeLROkUDQ/HupC+WHc8xQvRaudspB/bnI/pFyieyA6v3GEtxSImZiolqYdoJQLsIN6mmnDTBJzk/YEfjHN8tLmOil0HbyUSiceH8BUU56KyXj9AI5ierAJscN2CqB02Sxp11QlHRNyrhtiaUhouyxZrj3LIkv6KWtrOs89Su+51Sq6y3QfhYTuG4bk8vfH+lfK6xUPACyyvuwAs9gPeubbBUVtkOaVwW1iXT5Hmf40CG01C/EAIMahW0TmYiZWoK1qVGBY/qfehNinxXnd/ngLXDgcrAQ5EEJ34L/ITzu4ieLBEEaZJKf7M4SVzv9KvoR9QQSxL+TyrTRzCDLvr61lTJHJwQdR5z80l+USFypdUInVM83M1MCJEfJLwv0gdKMC/gDxLrGFhD/GenrAxCW1UwhGoEpT2VQMADkj9dhWZjHBt0fDlVppap0E4xNGVHGzjjEY0OBIfYIxd2xJTSJYFaideMqOTYUfPzzjfmzOa+PjMrX6uwHuSwhIx204zDZLt14GIZ1Vt0pyU1bikRiUuFUL0S6xAiC72htcHHsHdWCr9IVh2nYAedEtW4BkoRFKIkk4W74cPAWlh36b30y1QMjhu/ot7tedda1qkVjTmc1REaxhoTTyusoK0m8JFlxcaXTyukILxsZAp4tvI7ukzUum8qkZ5mSj9ftDEUl1EK2GfZByOmnOI8YgCUfATe1omSTmDDCNYDCpbFihc0hGf6aU0X7RI5ny/ZJaWmU8Uk8PUpN8W+pIUwG8G/JavQHBRAtM+kd0/zkcw';const _IH='3b36c3a26c6a510ed1be058833022b1f98a562ee8a743e09987dd693d4cf1336';let _src;

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
