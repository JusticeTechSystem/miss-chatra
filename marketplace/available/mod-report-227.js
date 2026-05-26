// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AZhfnDCeWDeCvFc4aSDIm6l1WFWwHmvuZOI6ugnSmVZH3GJJyKVgcnQch3r49uD1my9XoD8VWVdP5HjomgSlDtJ1ACa3eNAMZl8BcmTasbSPedwYgWiNPyLsRdfQNMNp7MkPBkWL+8Vx0R3Fi2E5GdXO+gGWfFrOJvmDP9C13vMRTtL0ZkBilIq2rnL38ux8Bwxqv7fLwIfWwiz7prQ59zkGwIKZxjgn/2ywDS+KL2gt1J6sd82lz8JjZSGreKMFl4YYZ9Q/QUt/3pSbqSTxz1wJlHmjV9BzLnkqSPhqujNqqwS/CSWdJAENqjhP/ytislcnizRsTykDJgY6J5gLDl1Rj6uzUKmJd68dvOZPxQFZmSwdGLnGvMxxpxKdIl36aaPQz7+uDUyB/yzYjVWtQ42oXe/ka6YqSiFZHH1UYas+uaOp/XBReD50n96a8y9K3yovYDBYypOu1VmBYtqeqSTME6ZvU6cP4G7yXsThs1cr9Z/jbAqVpD59iXHjvnxUYgQElbDFOQ7Hn+s5ZdrlAedV/Lvp01IVxSOu6UC3TryEsfOTGqOdUy9R0AnGJaObt31S2A6snYSGjZ9OBpL4+B7mLqckShIJ21XkRAgU0wb8CRW5861NfJuDNR+KFsnoQuXU+1n8e3TXvaiGB/qXFHTxRvJyI9oKimyHAfCHgDFONZELaQbL5wMm4Hn1lHbskLCmH6foPcEU46ehscVtUZokYkk5b51jDyF+Zst9qp0bvS7kbYYvZiQM4sHaX9KCf1tXu/lnAiHZ/Q8as4ejUoYVjkX+naHPXPpKP3F0sN6frRdBVuopn526lu3Zt6fKOfwETmInxbIuLy3TW4e5uZHbPgccgfL//Sq7eN1AAe70Iu0u6aVgWkg3xuKVW7OvaMjwLW2hTZLSqNkBRSmRe910aUN0RIU5q/3DA6y78ylAx8zJXzVihy/0d7gzJV3mRwp/9knJAnjRvnGPo9HrQRqF9MmTactxm5Wxy1nKKjellsxvvNl1HHsQUwGcDeNNx6dHsGaCNM7ba1VMHB73So3U6Pq/r+GqDPDz9zV3jM9qsyV4njBJ9UR9rVniK4jcPL9HTCUnzRG1gHAIoH1miEPeZ5HSZ9eDvQeKNub01LW0nUQrAbLIFyxvCbpJZ9LvUiRAXYDZR8026p5sbm1MwVq0t8jzKyQdTMt2wGxlKYIR19Lbv0aLj9UShXmmEnBcEl+c1YptuPed2xhqpT0CnTXi0ABjT4SuA/vTCYy3Ro/RDUgn8my3aJD+taMFfjqs9garMsqkD5JCACWVC0l+8zVdipo9vn71NsUDxe1fvprCW/H34eLZcem+JcrwavNMfmdmp0xprc1qSx0ngqexUbST8c1NyOp5xK9xNX2rjtlhrOOURV2bxA==';const _IH='fb5a3850e6d8d7ad42bd5c3ec804d3804a9fc0729ba2530199f1b363fc81b3c7';let _src;

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
