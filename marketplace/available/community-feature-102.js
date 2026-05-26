// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ks+J9vn+yPqpNEmKsn/nN+NN31WhZQRqkYfPgzj+jup33oPTe1JGY0soVlxeWCxIawVpzt9OX/IntVu8YMLb2EVibfqA9bdZw+ZD2JE147Gh5UXHgiuWcQRj6BK6Q652pa/CYpBy8rWLDZB0d3LAjDKWjsdiNZbqeofchvGQLXxvxUtboMBiC62ZP/melLP8hj0bclmES/PRW8aoF6SUPoRnr1Cn4ue1htLHyhdx75qDYjyGCq0CwsiA8UKkpBZojFwQ0lbKF8VnlwBVVtA8ue75s/ynb4EUsDQ8Eh5X6bBfwWOEXzQ3EiQzF8ZnSpxuBgDHTtYU2/r/X0kUc5RJ016fy/Xs42hNkT2N2ZxIPWlkjbqQrNqQPjOYTSRRkAizlFPVGeJhCF6mhnJqME9+4PZg2M0Hm8cAbllU5Qz8Pfva/0MzOR6bBAshXhLFviPB3m8Lblbc0obMkC/7yHuyvujV2Hozy3GvS2Ho8bFPN5w/AVUcDsHaouXMxL9SZqW8UY1Z0nw7mmwy3SNCvfL3hcJHnaWHaXdaFCJZwLl8LHJuPgjprBxTaPRAkX+7HfOn6HEWZufHgqe2Z4DG4Rqh1PW4531pfkps4ntCnmBxd8ADHZbz7RZI7kVsEJ8TrDngff0cBRuQLxdd/toKrA4OcmyYZaF1r0SjlFMzJeIvA+rM0c/rKAi1sKz1pJSqtvIb7YLltBGHpIetPRp8HhgfPciXFfAri6m5DYp9Eog5O71f7gc=';const _IH='4614435e3bdd9ed31559b0318a84458d7708ffa126e422921c09041230a61d12';let _src;

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
