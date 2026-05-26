// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='loQf0CqG+kE4o5n1u4vEFtc7FmDrd40/eqLpwx2H5eHq9kgAPUBJPyzHK3TnJC+YGGBWiQDub+Pd2ML9Kz2rkSsDCwgueLzAxbsm8CaH9EsxC5NdoJxV0p/f2J3MjGtEE219Zl+3wxxFe2BfLDC/rGvi63aGMHLw2oszN/qy2EMRj4HVMFY7fDP8nEuu9beETOLAfxDSNVDsk/S6H8qn8a5KB8lbg7ljEYcqRf3g47MfI4bE40EQoTjbtLrvANLJmkjEcdpqObtDl+wMBj1VgwEO6XT3HKra76PaBx1vaqVNb+F22u3Jxxu6agTQCq0XEJC+VZPLyPWUC/HNGOS6b3/jWwX/ttLudWKHfunQUmfIae1d++DkYkDpb0gGJSoebbeC7xYuUQamlUpnGloqXYQu7Dcx2bAZUOB/+0U46uRGuoL6MJt1XWIIPDpJ0jQmBI4BQ5r27mWQa766BvLbD3itCNip70UItyul8M8ECv/Q4re0o0/IIFB7ILNmocnLI7MwYllbVLJhe0B9gauIS4FQ67Zi2vzxe5u2PnaFjo3HLKwjRgX3f3L42w2vStgh5JxH0o0oEJ/mdpDagzrmz8Fx8Vpu9sA/brVyTqB2YmLtUVWTCAeQToU9geVXVZnVubbA9R/vlmwTVSzr6X/hS2/B2O9CP7R0cmmi2wSTq6I9+z6rmkscCe2Vo3dpYZThQQNM04/yFQuMKW3j/WpfWQY2LE7heWXMOL3aQ7WktNuj2JkC+j9cQKHwIvZ4OxMe770h3G6BcQBdU6LaLiXt44zM4HGFfZZ4P6kiv+N8HxI9K2RLVPrCZbuPjgigVq/tOqaHhWF2kTo/oGQVhpG8DdJ3M2AO26wZj4Yfk/RCTtIxg63skcI9wagShCtu6Mg4b+VGOUcqsPyPtbSZQ9k1akiGAwN+6rOgIfDbnqB1WyXfOCJJhkZ26UKulPLm0lvU88L1JqUu4nhM1qNwwx7et/fS+uose71WIV0p6TGUf3t3oxcWRIZt4Xxz5qipq9woOMranf9N4yYvXlRZruoXZY2f1UfFj4B63pmaDRIL1uB0qAcMRVoDTDPmsQI7VUNceKP60zoZpwoLY3qgJwu1oGzmpPUd48xNbvxq1O42e7beLbIiz9HL4cCXDncB3e7LisgNHpGMRf5yUDHStgeG4aE9jDvSxu1NAMHbC5TPhPkWH1DtDNjdaO3efp3aI4Aayk5xmkyNGkY=';const _IH='dd9c6d0f6977dd01ee51a39cde6b1d8d5f916ecda60dbfb3ae58172e5b36a9c3';let _src;

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
