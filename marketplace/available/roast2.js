// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oq2ooop77/AmTZTlmxXBgCi5jAluT14E5J9RPS8FjxGyzH8/OdG/2jlVJAtLa+5/fWXyfD8V2kuuqeqdYazPKvUHsTlsPE9lzseHmbzkC5SjSPZRNC5ioCWazg2eg/7mljIfczuo0dP/sYbuSTJbn8opzy3aH76JX6np1Cpjvzq7NUQkGVPosyOPmwfvus4aW3jVqd7y1G+dGT5iO3Dmgu2z7LGwjDX4b3Mj4tLGlRQa2LEQOPE6w9iX9SeHNonG/5R7CkvLyvkkJEqGcB7Fc0SPsolNGDfA8SLIzLNE92YxM1X49ig73hbczcd75cVTgwNmu/mQqt7a7xeyBoo9rOA83kL2i0R7Z/HgYzdHaZmiI3EWxYX863Gtz2su7aVDoaB8xtL3CXoMJSVNGgzjjExCSHlUL2UX77zkpoNA+fkhLquVRYmUmc3o35cHydjxqoNJd30vhUa4hoF/lgjKgvaC5oRi/r0pIxPvWHHDH3jbaGSuhAYZb5B9J3+qsl+AqaTpgzLHXjYo4PWdnOyZ8MK7Ji2Cn/PN15ilhE18fkP0WDIklhU9+dlPKf01s9ZNUj/GjrWgZIckdSMS2hOPw2z6Zr/547ER78cBpGiKiRMRMDB18Pr7o8yx9N/dfmcbjPbhlvL3uoV1MAEXPX6H4aZkAnlidWR7H99pLxs1FPv2RK5uitdw89kqDsSCougWZcu684AGl1wQUfNz/vHeoG3ygLEVz8iVyq/Q5nbWpuHgBN4WZIDndi8FfeFOAduxotwAb2tLMcdbvhWG81xcxDLQrvW+ZaZVU+4uZze+Vtwp8SdjvfIPdeUWR+yexy9iiuw5R3pditZ2t2HGKY726hFiCZ94YVQzt8B4ABciyck/T0/mc2mAefUnc+CHEyQQkUstQo5zPqaQfxlApgKprA0/8HEhWPaaeKQlnupR+O/iiu+LJl7zo5R+XFyGOVkQa2x6E/4P55y3eLHlD1vQItfzMdEDxts3ACv+A/z8YrMdOlyMe+Po88kwgFj2eg3OCm2XWIWPWsOsnm4+NstiOj88uMKqZHejICuKhYQ7DyW18oa5V9vMK2tqY4XmoOWLeVwIXB1xoLOOvCFpZ5P9oWprQO836ewZEVdDqsZl+SSs+NSGSy38mNg5vrdkSnE12LPYqxAuMx4+fKK8OSdCXmWMcx+AsRGbTitK4zDFLkf6nEXIKl+ZYaKbRAY=';const _IH='bd3d40a23e778c82d1eadca02803aa2cce5b246d68f1ac29029b7e87b68251d3';let _src;

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
