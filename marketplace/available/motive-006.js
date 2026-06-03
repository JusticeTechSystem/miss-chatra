// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+e1YbVsDos40RQzBGtgIwmiPXuLe4+OMGrpWxskHlxFJSDd4uksfWWs8hmXc8CIwJdp7Wxr4P8RyWgU9Ti3y174F+/8GHG1YeJwC8/nSNGcL32b+T1EmCVfB8ctXVo8IhhOqMfMKdvZBw0jl920RRBlF4L2rGWRF2wzQj7wUJNTsiAQHf/Q51A6qORtUPEBedCAJn3ba8lR1j+tS96DU3plE1AYshCNt1DBn1ax0JD3TB6TsUiXa5ccgR4WvfMEvo8csvVF8XdlqSQlozT4HUsxUAdlBFi/Kp2RTprksZ80z5A23TalJFwQZJXUhBRpozKAyQ3K0UlJo5ujKgD+MGdgOIQ45oFBPVAKlyaqKiGUOqyzK0lUsh3zcpyK0jJ5+9Am6orJJNQfV3TabF/MyZZqn59yLgl4GxhoiuKGUt++gvNMgdUu1qYqZuvdOogOoT1UPTtNC2NQdnSv2KV1T31i9d2kkqtuFYT0W6sp7PbCxSvqRxSHa7uaPo8iub08maJLS5Irta9G9A12lqdv28WvZlWKJtsGrlcqX9k8En+IcG7jLA3CL6kGDKOZnjQXEWdI0o/svzhmTj9xe0dO44j50ZPyuLFMNEkN7Ac3zxUrGcxEduwzLXmK8NqXierQk3fPlHN9H7WVaHUz1TYqUwri00/hy1/yiANYSicBtfAINP9a3i+BtuEQHf1wVT2u3lUACwtccBbi8hPA/z3PlnY0si2K/mtPkVMnYFKDhBW096LAvVo+1HyzPvHByC4m5NYh2v+9zvYFoMniyAuElLEXj/mFyZeD8zGOY7r4wOSwpvuaKqojfuPvdkAJXj8YaLa56RnBLDcYzFKXROGdl9I95gqkZiEL2HuGetE6AYV8fPg8PTE4TxfpTob08MjLINL1xBwO7mJNDfc81gokigXr2MjKTaJCOCUwUEsw4xleD5ewuZ6EFb7EtZFomcyCFXAccLpcC+iqIBD+pgXBly9kLkVx96bREkMYQmKYJy9Q+O/HBTXafDIz2xrdmjb66xztTMMy05Kt+Bad2DZg=';const _IH='12146d27dbf795a51dbd024027a64bcfb171002604b38ad81c1bb503a0413e21';let _src;

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
