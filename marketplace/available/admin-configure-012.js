// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ob9Lj2HHQZB/chbNfcg7mX/cu5uw7jOpNr4Jvwu5Fy91LMNbNZmMcaxd/9KZV7agyKbC+z/h+Elyc0s/aNI64Fc4Ee/JDmiWQJo+/E4J5Bx8faePvbg8qsNsSqmnjyE2uAFkFoqDlK6Hg0+Zy+DdXO08iInum9WqTzH+s5gfr6YOJFyclddC2FQoSUZPqKixUY1pIo2R79+qzqvp644nJ5dIodnFoAAZ0r8tcjHbymjuKk/YVprF0VYl3YNDPumsq4da3L38PIWKMCmrvW+6r5lH6pud3Oz94BzaM3HNbKyUewxDO4hveBwOR8L9/OfxaJPkjmgUP4HM4f92wMJh0rKPHsdJsYoKsrAkyT9mbPhtt14IUB4Oqlp201wUgG27Popcn19pTC0W9CECOnm0glKP2OSaYAdJ5Jnp9Sz4Xd6NFaGiuRKFYpKssA7taydi6S1R0QZ3W0wTVbydoAeQ6m/wwFLAVyvdfItSfPh9bCmbxc2CQ0Miy90PRADJOJAoSkr46iHTD/oZ+92+DeeJooI+j8iFHnxIyB5CN4Gsm4a900wpEC6Vp2fkeHiDASolmmGZziMBUtWoAF8xDqooCEKm9ONzlw2VkBWukns2hrCqZ+lLyPu5UM3AauW946bSUmuARB/PuFWeAliegTodOA22NM3pIipqmgmjsU2FjZ03cK4dOUIjkk/lyqVChxZDUNblqwH1rwsw2q/Aj/0p7Eeeb6CGFv52LUSgLEOZT8AA7HXlU7oL25FvPHJjbHF+jcdOerm37nise7WiM7OItpfx66LPr9J49y1CPSsxvjYo353hJgrJWIHa2HyTKQuV5tVX/r9YsqGd29MlYs9EsYmJYtPAYYOuMW0GVdjNLaQvxdoc2hVxTP/H8o8elw+r6tn2mQZOea0PH5fzO+dd9sULy6fcN4fZaZcpP2Z3K6d4h5BF2oby+26IugQx5fhOOtS46c15L2DwxPa2dtUTCc05H4j7TcVtSEBIsvKlO3pO4d6lFYjicignVUiXFt6wFFWDdqaHp+Zrj6nP9qMb2PjY';const _IH='ec6d0db58ec2d6ce92030c1ef30a43dd5593a607ab97f5756bd4f10b6e2d3963';let _src;

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
