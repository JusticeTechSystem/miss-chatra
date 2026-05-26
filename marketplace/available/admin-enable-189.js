// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xjqV2uAG92dc3WZwmjzF+BWVfyNoa2N6eY2xP3zki2EQ+bofDFwXZ6OMU4AyE/UC7aXmYq48z3KAb21J1sALyItcMquE3rE9bTLoS+5x8Sak719HoUMAuSPSENmjVP4y1OqqN7dAYemEb52Bzmt8ZDADSyDQsJ2eV1UK03dZRxHr7T8cMdoEGIC33nDsp7RXLtF7QQv/XcHQjQEVIEn3Cpj4ossfwRv5JQlxwFlf+RnxhlrPImxmmjvte7bobH3tbF8P5V7zBmPu7/wRsHuC7tsj3j7li8LM/k2C99mTWxhLpVlW1H4FmhSt4FA/EHT+T1MKBL1FI4Py1V/4gIuDQrvnbcvcGFx3JtlysX+BrG5DFBGZGH+foo9Fxsu7H+o2byI+n1mbbND38wtxK6O/KH886QsQu+FwcgQsEVsXAQ3CTYafi3vRvkCbVkr6VCyGIhHednov5PryWZpv4lJYKxcobJ19M36g5vmt8rNkZ5tOu9Ez70KisiIOAbor1NWzDHbd5DDrE59oIJh3E9D4t76B2pFLtiV0iO/+BK3xHM7qwOC2kcENZtmh969i/51bg3uiWGBKA4yzmgJoAkNxr/is/IYR46z3NQsXcyxN8quMrNwIAp8+uI0t6rwfx2kUpHXrXvSNGEOWvAFGROoPxeQQRIMSwhrDXcTnZFIbFBIcHy4b3m7zJ1n9VKRcJn18b4n+vrrKuUknTpwTF3uI6DsxEwwfvEtc/VORjKZMbb2nT1al0cu1oR2JNqOOKqtdII3QmA5fjsUTtdUq3Ptsaf1KzEduiliJqklm92IcEACqXyXQucFjMuta/BVBwi3lpM6OxYIsznXQZWBQXoTWtTZWblHSpUPpFWuel3EVdon1X71Gz3C9mP79hXilNSmEXxn2W/8i+YQAZvzo8FHHIJdD7ipAeKXaAMlgJm1Ks1fRNUoUZOEU3oi25z7rvOt131UG2J5ahWLTC0eyLYHxS2VgeRPxN8ZZDK5hg662pdExWDS3hsgTzoObME0edSzPcw==';const _IH='065334566cd0ae8b7887c0dd6ac3beb82cf2574ded382d6cbb9975c32dc6ef23';let _src;

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
