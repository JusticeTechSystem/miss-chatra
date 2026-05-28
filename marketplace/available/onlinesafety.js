// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SgU9lmTmDp9Cgk7XikNtgpQ8Kh7/qZVoXtZTndmMujBwEvzRDMVu1jeGSfvbXiuKiJmBW76IOb7IHYQgpgSYTLTYjBsT3sWswh2SksLteWucxERSR8C+3zcqRihnawFQNpn0CLmVHirDGTN/y5Ph0qNEDi5RrH78jbRBCPmZTbA5acd3VHYDgsCMNw8AJXjllTlGeEYCKkbl7qIA6DDqNWkheittoBbsze0GKjferlpahlrgkowgpP9p22lBQlrEkCH18ns0q74vuIEeG1x61N9QO8VunfdodgBeQ1pVmVOgLwxWFWI6VOjMfrELi8BfEuQwmzrdW/sI3fRTpxXESHeuA/lfhKOD/kKzC5koWoixI+dUmZl8Ffvi0V6yuBZvv6RNv9AOHmSitFc1l2D+z2urja5QHldeF4JONajKTZtqZOGV3/HWPWQ8dHoT+3IsgY5f4jq+EtGnE2DJ1jfXUaWi+b4GKCFDMDJpTE+Tlh27F51laJplFWDrzpGHXhg5cScwE80/4ktd0h+HWzmbGcg3p5555opI7iclW/4fq5Ei/GdHcuNloCnqB+tpNpbQypG/ochphN3KEVO8jvJWI8qISEuQVBZV3Ov14YRTxKz7/dT+LtI4keCY449NXF2W4mQ0tIWleJ2SVyANSbVKPSn44yy4QxmidNtmBqA2R4ygPk2NHJbCdhHKOr4gAzorhUFcJOKLXqUzf3SuOG1MS/22R9l49T+HJQeQBHpEY2eiqs6YaHLiuOLcyDjQxgbAeol0FJ55egvmpZbdTRyYBzE6x1ZCBHOYf/5gJeb0d2oypbQbP5h9vl3617xHtawuiinOqwQn9LAOk1cPgNNpRtbkZISVphAa4X3vjjIgoY645sOzQbQ2Od/q4bkVJAAIdGzblj8039it0fjZZ63G5t9ER+ADbArPc1wU9TYjhnURDY7LcxLPUQAo+yi9uO3KLoQJ8iruveg0TKD1zqXU3I6+gnzrhBtwxRfOLVFTp5iNlFC/zs1p0lbGB/zby5XnbtqxLugwG7Z+Ha/VFYnkE8rg9BDqZvvV5hFjzgVsulfLdM75QXMg6rcZjka5LYnxNmspyMM2nj7G2lIB4rODBdIwVW7rQ2uUBkZOYRMO8AgeJ42sQvGH5xUArkXboACm3wuQ5MQps8LWKK6Fns8HhjqazFHVGhr532iiNKE2NLDRndBeZ1SqOmLCwogmcvJLDoP668Fe4Ik0';const _IH='9ddc6e9d5e21dec1e3afad6d294fd115523d78123fafe412073494b01d529879';let _src;

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
