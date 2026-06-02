// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sjOycwUo2vqXkLsTpQGhC6QpyVu2sVnwNcLYNxsMYqNkyQrg20Hl2S3hY9vYUnrYPl+qC/iey9NH2ynWVJ0KPvPhOjuraOe8GMwBRxCMlYGAHBgi9rKt4LF0HS6uYXqlyI9/x1diOK2AcZnL+ARQY/2C07b044SLPkIRKW2wHB7eIGAmryk/7ZTZl8r5jRAFzAZ4QPxnw4uv2nVgFL1iLuQGxxKFfTjHjk+cSSUyNxVPoU8bvlL/TYuow1z029wTWoDC9YvPXMIpoLidN2QFpidsAdOXOfWtYoG4Qx9IyS3IGv/P5WzplRdZ71ZxDQilkbs0QDfw8L5jAFhaIgj6z0ISPLspzNzGSsBbAfiA0H2Mm8x/hlueB4Y78FNLsjWfqcBp6LAZqiExnnST//bSHPbkJr1ebevMC5A2+BRI7Lqkd/GgX4JuzPAMiGvpLb6cPju5z7z934EDirCxhSQO24dsI6CiNYjJtBHfAkOje4eqMdRigu/ksjuC+mh9o+V6ctdAqe1lVRyzQK9KbqsCGmicIKbVWnfDcPZTrZgYxuHO/1kTlQ6DL6f1CzNK6XPnCcwegiHiV30Yf4pKN++n+yIEae+yt+AMFH92SQ+vTCJi3YIJFHtg6jaWwSrH41IWb/obcYpr/7VghDaucmO+kdmphbmHopxi6JRMpazmwKOs5AY8jItbyBjYQgg4WBDluesGM9ZpTJIJGv6qySc3rDaCBYHNOHpFmPcMBPibepytFsr0y8o=';const _IH='adaea65ebb1e4e9ebd589c6ff80bd3c8c8a2127307de8aca2bbc635566f21e82';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
