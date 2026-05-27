// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kEeRiULkOgf+PGa4ElvLwgah7kT7eSygWLe7oOEgH0gjIs7TC0OFmsFt1eCExQ3gqTxTnXArWf8VOZhiH/ZyWnrX71Lduh62UJgDElmVh2s7YEmNo2LfOCKjmjTFEXYG9m/dIMVVcsnn76TVaZBWloEB6PBAqCI0akRlXsp7I+BITJNKGGuf6PUHMEQe+z7u76q05A5RD/d2EJUJpY9Z5yjjuxR/5XknIvPbCtv3en9MqCEsnGKpOzDTtZYnSKAaQM2+EGeUvG0jkyFmNccHP3vzXGaXd39irXAo7kaLZbJB0qZ/Dr6JGhtLYsvLcZuyYY9iqz7+EX3Z/b1mugZ03h1kyAqySsl2okFS9sLKUDo3rOt1hfBvZkqRFc1fi0j9eNQyuHKe33yrVsh7RCJAb1mFRetRsq8wHkipHF1mfO3SNKo7Qf/tMDlEZVXukshxzAcoMUSmvrytLTPJOspX1gp59rjspyxAsVQeKFl74Yo6HjBQ4SrRTOjX63riOoeNl0TtHCjMDQsCxX5uehXn6g6CiPyeoM0hZLorKRNmR1nzNNWHU5aXgi8Rv6Ng4pYYcVKdKcSWbQ6jK66aP6J0M4iktqz/CEPboPLt41zP4kWeNrDSYygQGzF70Fw5zCAJE4elBAl9m5q799ePM6HE1afs2QjPVZ0ttZGPEOxiGg3M9ZGMsY+wbqhQZLeTxmJMcKh7HMnziKAtEVfKhbSu+au8AdXF4+IPx8fij7X3f/inSFsrNPbOmb+5UTjsJKXlpHXAwpbtqvfsfv4jUmx4RlUK+usn1URM5aEL9HCEhVWhbtRiWme4NO3xPxwu71fEjZj3AIAYUSipP18TK3mKI7jAO6gBXhHZkaQd2mvVD88r4+LmEKIE7JAGebLA3tMuAlFMQF1QEOOjhItQLPqu86m6LliufYLiq5F05TaFLdMRX4d3dr8mLZMyC1gxLjYo28xWSqwUcVnlYsZiIe2jiFtFXlxe/YuywYBe66qsxMWPvcCSWb9d4Z8Q8P4NhJMj9KBnLpzbmjGnrm7qMcY95/LOLk2Y8DmJUu+88FOHScNqyDAPmt06N3rWOb82ymveG/2vbssW70I6jLYVdvpsbhlAkM9TpTVhGTDHWFtx8tRWxV6ciJwt8kwP5KSeY8EzqmIp2GkXToDI38KHw6xX0JL5qFHe9Ga/Axz2uITs/RI4hDkfP8V3fmdJVjLuVEqeqqJXvEbwIE1NhKetSOVFZAtAEgdkVvsrnVeo+cBmJ4J9EWcNtWlIYHPhtTFiViwF/V5Z9m41S3hYSFNn4HsB1sn3Yk9SzHEApAHiLZuhQTsrUPfGn8vBEg85G414pJvOnyG/9CVCOR256vg0vIYJCSyX36pcclHHEenwPVjYHQojiLaw5Hii6Q==';const _IH='54c005b1e22b3fff47f9c2bd2e8877d6b4f47931acf312663f2927bc1bbea033';let _src;

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
