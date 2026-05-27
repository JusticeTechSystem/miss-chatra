// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iYba+GpVM7et9dZ7Mtdsh4pL3SqcwW40wgJ+a3g0PC7hfOXiibxAYvg7hAIsTSMC+JAtCnexdU6o0KpgEVVgCOvHz9vHWp5ZLl6zvIle1UQRbK/wvFuL2mljM/MOfZEglEES81e9SUA33OFCbmE49a6Vp1+DyKZxjl9Ufz73oZts0k8vKlvfeUKQMPBSXmRgnKw9cEfMfTz/cTHacEn4LgEH3bAB0WWOfcpJaZwDdPkWQBoS/PgLBc8gjzGpsXnpUGwR/go7jLOI2XRs34dFZGUTVkZ6r/pMlFoG5jWgsgPImuGwdCmbrLPaffMS5xSjXF6I7XAv/PmIQndzociXERGq1julhW6fIErEcTQ2LmQpw7qAKMFCp08koOVeA41yiuVmOsOqNcVZt68PYYrFH+n9z5wjKFHyJjjnFh+e+78CGz/K2oewTk793Pk0RmgL3QWQqXnH0JVZ4gSJ7LhrsJ85KxTAnYP10m2ZweogQsk9A5bVWFrSaN7wuAZYYxqpOZM5q7szbbHxQcEsCnEmYPtJWF6qDSUax3AN8tzuATkVG8BnvMHTT3wJ9NpvNpbyTlQhTGSbQcfT2ekZ6lYHPYewVOcPuWC9QI879iVPgw3rEEEzMs13qRleB2R9hp62X1U3YePr9XTTjpg5bZ9TseDknLmZQtrjV5kpWMtCBkwz8d1btmQvISGvwB1+e5irXKJIaPw3rCHc+wTlEaCHOlvkQM6I8dl/uJ/sjIppPz+M0IfX393zTPzTaL5wcSVQOtiflggUQBwI7NPJiNpa5YaR+n2ha4+HjavDYgk+S4TUtQy5J+AZPPshz+w/Y5mdvUpSJBgzM3vLyynRk71kdMhTatUj/yK0msN5oMCxOv8RCN93TGNSLJ4dzRn/Owx1oxoiYGEP0IaG8jSMG0LBXSNSpR3G6kPnYCjPj63LU5mnLsh1+m/lVYKa4UEqfTi+elbGZqE1QiObq2KKr+zUxVRE1iDtqMlVFP8v1tH+xGY7X32F60edEfHv9GDzEwxCGVeFUuABn1FL6xKUE0JiXUS0PcfizcOYjX3e3nqOWN2x3p/VSGDUhS6/mjD0n/Cr4emq1qQUjMClJg1MLDLJeA+EIjF+cvxAwjEL8iKPuZhC9K9zTM/2HtASheHDPAOdyxJB7e5PKQXquiy/zoAjZfsrTrjaKN9XzffzKZ6SC3iz+DzbM4KjjQxehqQFteveY/sxKoKBfAfureJSJpS0mQTVNVd3DW7E0GumZB4xNAgDVByNZkgULzChxRVJIqZoFPV+zhMXZXw4JF6CFU5jiZyIFpV9UysPJvurUygzqxBgoyXok9u+7GI7guYSi0B7xmiK+UEcLU8n3Wk7cwDUjxDRnxC3/c2fGSst/11gjyALA2A=';const _IH='0b767f33a090fca2d360b3960c024da765612e20079fa90f3d8193f008be4318';let _src;

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
