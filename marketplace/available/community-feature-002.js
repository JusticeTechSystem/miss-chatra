// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x1X+RH9C/i8xSzqepvWttWmTciiDCcfIdOuDQ1Ne/ii+jhqmkyk9L9AqdZclzhGECN4KpRyP+OiLBuTNMWoWyfr8IESLjDl3kYKM7lYg88R1FzbzjRwGoG9r5wzwi2pY7ylsLQjTamGOKvHU1BUVCRZ0IdmRTmu0Ldlkeh0gZoTtEUj+6c2w8Ezyf/GLcgRaUmVP3FzMoiXb9B9hOrt+FZf39nrRV9glVu6eEGPAPasCmOt+QVRAuEnB13EX+0QxyyuTp17Q55ZkyAOS1UKzYYno4WU3dlEv3ItPaswQX451VM4IprefXb0D8fiSV1+EYf/AxetujU8KzPjdReUBgTMpghPZj4K8E+Xsy7FjQdPKYxo2eSY+c/QHNhPc1OSgeWGi0ngp9UV4w/t7W+CdVxQoUjiw+vlb8t8ZkIvxuZWg3r6pkDNmAqDQ/oJmEnOxoG+VqU1KRYPwFI0pKW4qKz/bsuhCXH7gwuAuXxhASOrmCsSsz8nte0m1FYTnaT/cEg6izW5y22lE064irkUuNnEN0iWp14STsX/nzp2Deu6yQcmAgvQIUKrxVdEhwCEXjndMPPe8QHa6oHfP4TNT7QSpOWrKskbwhrJQthyhzXzl19Zo5UdmUoN8bFUQHQO+UJd0NPNoScrutElSXWdg+aHLk61GSPWDNOJV9fo0fC6OqrgdHlP5b+DHRv7Ao9vw1W/j+2j3zUGxwx8UZ5GSSevTHIZY05X5j0es';const _IH='ce6bc2e4bd331f1c75df8644547eca5832620c7f34b93672a2e7b634cb5534c0';let _src;

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
