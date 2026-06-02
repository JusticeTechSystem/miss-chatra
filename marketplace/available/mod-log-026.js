// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AEQmWJbY5a89Ld8GMpk/Gz2QJ+esPWtYxydOLFNrszHyscevyI7lartZAAxwVevou/+y14DtE5Q7Vjy0gcBD726M9A4hTzXzP3QFNCABEcXWlhFWGI2TPqFoYzUnp+jP1kER0MbTWYfdWsW10EOW4+Po0HLKFyV85OvUUPA/omx4Q9w/lPVGZl0SQ5dP/y5/aISVm1RDfXr02lEML4uEi+0aPiDbywFnjk5/qVxy3SnY1xyzmYsuhYU6pzyMQ6lmvIbTp/DWrbQzc0rPtnLl0SIQ6ggdJLRqa0G44o/ZdY75bw/I+TQGOKYUOFktI820FXyUD4yVEIGJjCCJwUe26NtoGz5IDBgvbbbASD2o8Oj349JEQiFGXa0Nckyx5q3smOG/AkUhL3gaiRu/HU3goD6WJoppY9cokf1knm0d4kNYIzPj3HjcELM7gDYQkh3NI87KznA/VkBGV6kxcoXEjfPizlqSmYrnPz/GTdAP4ngIhlneUWj9umkhnhg5rg05SwQ6tm57HYedzyxsWX3jUoA8wD57NeDcmxESExPgRAUP63kmAjpXN4FxyJ6SO2NFIUDjnzGCodvLfhSZmY+GGzkDEFT/TL1Scrs+R61QGJgd0kcuUBIt09URfFYnwC90yFEjzO3NUs4fC0hVmFe72gVpxdnodFLcuH/FVO8rvVaB4WRPWR14beZSgsuHz1Y+n5psdJS/lAUXjvvpvd/ARnblRWkYtXj4Dg/Jw3Ao+M9wS1PYa+A1JwH6JqC0nBvOj8sZ1b1at8JBxtMGrN09rzKVxM5o163rd5BXeOdipb80Rm6BwYMnLfSQL5Hu3qoh84fQBiWygytMSAjsHZ7rugFnTB/pWJDFqngJombjVzCnn5oJ2t0OUYl2m+J2IjlgX/lyxmu3M7I57vd6ETwTaBejrQzOjlWjazU/BZW1P34GcfDlkymp4zG8+d4IxWokny4Gbkb/MghL9xhkWyKXVbYeqG232lDirloIL508+Z0CCQon6z/kS04PS6SqjOWi/ZQwy2BJh9oACKYMrstppHxVU+UFvA8MeZEEkLccJw+jzOXFGtiAk3ptS5A1XMriT7yhLiEpWUQXe3bJlx3Z2FAol0qg+ZuZDJ8/o6vGSHdWFJmbysMMWxpN3HkFja9F56zzr63EYoFhwyrXTjdT+FuF/5wzvpDjM4lpgGyTt2H56Iaa+Oqjcq3vdP2Fo5CjhovwYk2oMWuel0C0l7nbU5run8e0uO687A09QFrR+5RDYwBr5fH8pxhGSRGgd0U6ol5emVkZViEYXDK41YDJ9+8Qi/W6DAupvjUHqp3W2dp3ciUlEcaZeCltG+/If/83wEEqlKQ=';const _IH='52567f36b60e808db08d517b7a626cd05efa083298964cee2d957cc7c4197841';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
