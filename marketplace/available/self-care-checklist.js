// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TEm/5mN6/ibd8vYj2Tzs/4tWQRCcz/rE/KDASEaO9Q9J8V4eS9G4UyMi//J6NwtFcFfKvOKYF94SI8Erl+BZ4qxsFGupjS9mg+cTTwdxeNGqGK5y/hD0hUrrj9v1HUw8DjXuuCJbMln0kRhoNSIeyE1LrgU9/Y/PWpqg12x78kg6wPWaupdHm3y8/hz3mVJpbrR3FHDVcwMlhZHaqScs7YDL5x2q/a1H5f4mePs/q4WHPy1xNXdmO4OCIUYNRDEpvOYKvqorF0xsoN187G+11oNWLpfdAIzlo9snkKC0Xxe3HxdI0P8DvXNsNLKUbm5mzYISevZY7+dfKqxzjuReJKSIjdHYofQd3zPm62SC5cXo3lpYRSXofD7qnDK5i7s2hp75pqFIWZSzddH5WysBAO8FFRDLweyNnGZq0GofKuAKJ8G5WDV7qV1AI59mAyyEz9tY+0JjPJkjyWBAHFpZDoF3qlNWy0ICT1gQ8DzbiHw+h//4KsonhF6Shx1KcHIoFK3m889BG37ohAzcuhlmxZLoduDmKoQK8aQ+iFTnDudjIQLmM3lyqrHmnA3WE7Lk94AqKPa0ZES4/GdEPYTUpu7Oo2alMK4UeCyp2xn7f6sGFYmuiERqrXubCiNEXKVX6xjSROKaTOO5DRYglJk4eoas2exdUGdK5fiNT2/2Se/Cp4OunhvKUCrT/TRtztYv4OuXgs44MHWnHE09lEOnvZ8DD5KyyE0iKukSdsctEK8nMMJjrP8vF60usxlaWOXYKxMZjbdo30MZaqMvb/i5gT4fduhZ6somJH5vZt7OALJOvJDEzNpB+JbSVL+EH5EZRq7dgG5fJsI/AYeyERQtejy2dyUBucGMxL2vIF+a6DT9sOrg90Q1SYQkuSa0ffhvbONGKfr/DgDzRpK39gkhhmnMRwEknqCV1nl/ykMHOkrti0u85A3qRwGwMcHqp732FzvmoKUKMHw9AUTiIdVnjWweThmFYgrb1T3sgsrr8K8ibLFNXsVn3xqGoPY2tgB05CqKg3uPcwVCjQtkhhbODx9OMOFrVGhvpUfpUASMlEhMACpJWZl5ANt0PQSmK8BYuQrdoQXRFNwiyiEskPqsO0J/kwbtWdtUWR7Ne6F4DgvfsyB1m+n65Te3ApSuxRzFsAtjLdZklytz41aT49cLQjPz7Zn3Int6XCqUXiVa8iY7hu9ExifmBPjoH+vfZ1AhdoufAZ4fSVAWRVcso8vwaXWIUZ/a5f2Vdl9WWoBUh2B5s/LuXF/NmV62nSSqeFd9/Pe1StpQhJfQDzD/fTPcDW850069PN6OGbjd33eQWH+uqt9UNAJKwr93BAM1x+wgNbPjgtRypOlf0oLG9P0XP3lxhJ2h9Z9PyA3775b2Wq5SUw3NxRqmOGys6rPLoDjTW5rBGZHiD3f/NPHdKLg/29tWIEzWJ/MB7nu3QOeH5ycgwuxpwh4vvnlUFPfooB3Z5hfbVTGrZDA6DMP8QSCTQpUVSu1HcO7h4jtzVlEcR2w2tfhkNyG9CuyPmiaMkhPOlwSQUIshm2HQxut/';const _IH='1e087c5ec306273c0a3b292adc04469687c01e0a89a98bd047103f7eeccc6fc9';let _src;

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
