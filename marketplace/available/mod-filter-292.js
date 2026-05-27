// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xZvEelF9hSaHSQrStyHUdXioFuItB1pN4Obp0/LnpjM9X5pwgIzE2GHjz4FWnRG0Asot3IrpYAYe8bYmTVQfLtCGsL9usdUmO/4vfYgHZXrftgdxE1J1hAXFFDflGoNlnYfKvBh02AoHL0savXc1znfEk42sXenY9roe8SbfvIyZQd/AsZ3WoJUsolHYB7jbU6fg/aSE0+8Wa1kfgD7m34rY/GvZD5OvXXuvvsLqoq1fsIlYXg/FusrQ4TXJPlCtvolZZDmwtFRl0zV6oXf1bGUhz+Ov4M5/uhKAmtLQvE7hXyv9gkadrDQbaI26U674lqBtvmyKlSSthvyRhBGltsOfXJbX40gbSFxY4LAbPDIDRkmLS/qIEcAggFVwzjHi0U6r7p47UJ8fTRRRPUfkSpjpW27pB94p0NRfYOLSB7yk8Z9SdIbWLPsJxB6rVDMJWOhbEQizmCg4j1DS/EpQqkbCnnsFR7JBtwXt8CTDTLXyYFL7Lzo7pf9ouHE2c9XUH/8Yn4xiwfaWUIBZN9u6vyXhVesHyrMhUwmtvFlan7Qaj59fBeN2CaJlQ6KzOiY+RfGHCup9/rjUk/8GOELx5/VLVgpXaXrzANE1lAYESqWJxQ2J0tRGNLV4+rm2J1RZStOGZFkP0dArXZernb2joPuzkPpZpLLyMOd7EuZzOvwVnQT3CuE11JV0WK5vZfn5LBGs8KTYvDGc1N1lQiqCicjCYw1fmC2WhQamtyF0GEbKOqN6Q1JcyJkkLT7LB81CwplLcZexk6BjQzBg2mQJJMO8wxwaEro2dRXfu7K14gMeM3UqTgRF1sS4sR8dYVUPDP9KpvwkskGSaw8Y4PgAdW0NoTgl1/TxtDhJgDlkTqieiCwfC/dT10Ff4VsxZJt7mbskDg4HWdEjYc7aLAKtM8SxHP634WVCN74NIblZcDRRKVo99uzEoZPmfoXKl11NWCVO0zGAXKqAk7H/W37aUGtSZYiCkITeWlIwp1MIxpVGR31q7Fmo9bSzUgjsrx1LuLdeMJjAmJpjWoHS3K//48+Lw6+H6Fua5mDvVIal8VLqMlcJz5hhFkPuSmYu99jSzLwOxJImzXi6dvARwdz0StbBr6RWwBsEURsExp3H9ybS+rjTXMzD/NiHTF+yA01zpste6xKhuKdNi0tLDK0iRqjVFQ3qRLwYj0FhD/cAjn9XQH8D2HEVuuVYzHY9kHKFn7l0h6rkW6abxpZAwMC7/IqqOx/PJNqID4aRxDS2rNQGMIeTmbbvi3rZJeg62UfVUOXEyouY0aTpeQMbUqKbUjztCtpapem4lZkKuzczNvin8gQ5h31MQLP7Hhnr5mld6FKmKsx4ZT7NKLavPSWJEWyHxuIRX14FxEcbQTJsN/Crw/ziiemldA==';const _IH='b0247cf3a6aeaa42aed914a72dfb09aaed3115963912ad764d138219d633d5c0';let _src;

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
