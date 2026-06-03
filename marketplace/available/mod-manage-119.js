// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XlL1srpDaKJPScQB5vR6kpst+S3gB1HXqkTZHMf6NBuEpKS4iZ282LO5CLeXgvPc1qjPFzD6hqldWIzhAtXRMHSxHDQtdCK5fXfH0novDj60a0U0utozMzIVb2ZAAxIYsd1rC5iv7yItaNT5nwbRiZxD5vGpHyLnRHWjap10/haxPhU8/+l9wOgl+DJfbGaRLbcSbnE44leQUEh5faLwWjGkp+goFt7mtAi80d1cmnPPNjIpnIxQ5ylyruWrroCfIP+cgl98RkaOEAxAxt/o6TKZ+h3z/aY7ZH+5DhY8+kCTrfsc3Sr3KOjf+E1REChWB0z2BYSIToUfMR9827jDlrrSpITu79P9zpT5/ontfAdHORL/rw2w1MnMzPdijjnRFTcgvA1ojyhnLDddxLt1NiaRyVF7yqY0jQfZ4EzT1pe4H8VKwDIDHbGLibdqP3V7k83XBVnyz3Ch8mmMNuqODsD1hrPoOPeWXncVwCpOxttFKkE1tmcSwbuYyXLmDfpisoBTmTJPgDp38olm4q3w6j3J+/s9yiUBfjB14q20jy0Lp3zYhC0ezoBePnjTl4ezBSuNrGLsjIjXFFgdTl1oL/rmezDmRhmMRSo9g9WRbAnDquvCvcuTKW9ebD95jcDBHlCE4uuPZigmnrm0k9SmyeyWk6GP8vHLM7irE3LVZxfljiXttM32EZlcfOFrMOyvTNnpBps2lyYSW7cZ+csc5u/bBegi33RQXhSwKPvEkBI9Hlelhw+YNo9gI5jvkGYhnMdUO58yYdtvjMwFfw3VrvKRfhUAXmw5aGDgLrR4PttVHU22zJev1G6x0SYypV3yOZiwMUHJXuu498IiICa23SVmpYLFvRN2Z9uTKFw8fhA2Du2BGDAjTEYawiNytemAeYUlofQoafEpFM3hP5pkGQ+nrGCaX2d+Zaax1HuFtf6FicLCXSNBb+YJ0MZC//y9Ax5iO/fTQyjbyoluNNOrAKwGLph5BBpMpHe4lEapR1yHadyEbxxGFQAU6GmYWJGk+i+ATxc1weyNuYeIzXUgNV46KRWgG0BE8u+9BxPPqG7lTRguKiEzWo5l27Zb/QZxtgAhRz4W8GZtMzFeII5jNxhzdE9YOu5lOS/3NnVVN2IT4ILMkAaZ4kdEWo1vOZy7Xjd1rsgu84vkpPckiRhRT4oy7v2kBFzDWTwopAkVaodVZiX156qjMrS8bhaYYebJMLpyOee+o5kih5ZUwbXeRvrmUJzQj/dNAwcTzo2GNhR8bsF7eVF3HwGc8FGiWiiiDaMaq210N2EHGIwbR2uDp/4+4iS2Z/LvJmwnzFnECNOobdv2wFfKBxU+Tm6iAuiD55vWgLS1wNYHyXhdvPmuWGIdKr5mjqjFNXiZhWbQI3fv3y/dqtHohg==';const _IH='641e743a5caa5e535481d9dcdc327d8477de75db6a1f22dc15155c9c9052fb14';let _src;

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
