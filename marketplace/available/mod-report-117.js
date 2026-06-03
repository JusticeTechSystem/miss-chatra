// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o/n4j+nOgg4LgUEyfRI7i+Pl+safg+X92pyIOfc7aOVC2pbBCRFzoyedcUjC3dqqUx1a+6uwTS9ZBKe8/exns+BhGk2DGhGsg/l0KhCq4U7QbgT3kh6GWmffQ6lotCdbeBNlXqUCWGvfkuJxan/JCfYhaVRX44hv7JU/iH4pGAtUeV2FM4BZj22wxR5lQzjfpBtawyV4E3MNiUTLa13KmS12EXJ4aIJAL/NhKnDKGtkudklHQzn6Ry9OJLmVA0Rdj5xEhAe7PxiMDs8lplFCSxCsn9QS6LL6EcBqeAU0Xu3tCMb3MLAOK/LC13O5Z1n2bTExvXFt1cR54JbBGtOKuquDd/xvxCW+honyMfiF5H2wjmeQfaWv/E1M7aG+UAAerLJVI27f54f1rOusbVojP9kvYe/5xbIMrpkH4ua/kNBWe3jV3tmvRWoy2bpCOKP8RMJd5XghLBVtGmhzytJzvVtt3Qc0Em9ljhutwkjMSmBPuKHTwD7JHS2IDOtZ2T8wqiZu2lZ49GJB8qJFR/jgUbUNCaA6BySqZNwN7Bv10x0+VxbErInYz85qStw5uwABDbx+4plcOPu8hmCe65Fww8/QIYkI8Arrm2r+uv9dBXRfAEXPcyd/AmlHIbkV+BMMBbVGnFt6rrH+4kjPR3l/VCpHPdg+2tQ9wsmIegCN78iBN9n5UGFjqoi34KsnSztn4sGcgKBmCmWnJloxw9XJXpP6/L/iqA8Ihcpg2SvASyvh7vuNnkYxrjLhSK12xPUysJuROm4yuvk3VxJEt8f4Q8h3SDTGMYBSpFIianKT0TaJVZIydLLc564MtqTGorXdNGA5kfsaKvcmoFHbiptJy/ZB33YaBvTPD29BcjAG8wxvzXPqOHkPacYzW0M5M9u/bp20xkoGr9YQE6VR7n7Rb4ghw/eFTKrx0EmLIDPa38K9pxY5OeWrFyZoyppJ7Pg873xEBeiZ+CCx1ZkPb6eOUN8lvZH41VXvEw7L/wWlroVePhhOjKArK60dp+R4khM9MxF4WeMalKJ41NBYuVInD2sAtPmNjkZ6qWj703+C0W3F4mFsv67tWmtUmyHe2HZ1gJWuCRguL11VzyDVZzkYeAmOc9prYBZ9qEKIG2XwJRRsHUld8wBZB3EkuQsK2kdzsvjOBecCtbcxsEhzeDQoRpCHUBKDVoUReecPZmguxJs9MhGUWIyRgXMcerzKCVA0pMk5xPVLB5zEgVh9ytfMHbGX1tAyTPdd/tvqnsIo4FWQ6Q9a6rlfQ76URzYkGm00Q/n4f8eVObQYMigf+DvF7fwuOEzr0S3UH5Vj7+esq74VrvVd5DM+TJmZFhelMYEL4zDrQ82Kw83A84Pqea7WzKkPHoGL95VS7XnVsfN5VfomX/WWo6dxig==';const _IH='849a541d0c765bdd2cebda0eed67150792e8ef96c6dbdb94d811cea74865513b';let _src;

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
