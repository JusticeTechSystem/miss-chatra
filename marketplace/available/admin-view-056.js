// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JbSbV02G+wUSw4qwFmTHnS4C1ZkOnAnjGMUS/SW5rd78XZ1QJ/RtANG2+F1IFA4kCG44i/YYNyXoaM3eEPpaUuD7TvWU5VFmhEX8oViFNCmQQiUeh6Wig5Pe81renbCxq4Q0+rICYt6oxPnr6mNbI08Lp2hJNKDbKhxqagi0tq0hqwrfMjM5BZZfUF38rVPkbF8ueCR2scoG1scZmO+thoufZuAJgYQim39gChYME+7o5V207CBKEZfWE+s7SNt2ebIt6IbtTJCenBmsQ7cRcmFufwUiUF/2/IDxuWFaKGkWYaW6Fr/zIPYshiGCUj4atWxBjGbH8wU6bKDj+o4z4BtaEwGVvk3EnJpeaLvRSS83XsZl2vCxo5Saf/j58U3U8GE0THsJw6WfK5fnnglIaLwCjqW2wr/TnYdSA7/I6QGI2GITnlsI1/F7b7flyrzHjpN/ReI51Cr3f8Ge7VEzgmOaytueWqPuMF1IRZCrt9mBVTesUl057ip2qHeOoRPxoJE7jUWdMK7WDMPkbGPA4aaeBJnh3Oq2Q8gJ47btsw6WpwOHopQL2F3kyz7Kwgkn81hvp5n04oXRCUaAlRLn4v5xKCpNboXy8b9xPb/mpaPSIq8XBj5s9E6xXdW1ngvvBir9xe3AW5r0xASuaAsZR55GlWSFYGr+uaBKGxqTVFSNVK23nmk2v+E2U/4zBtVdQm8W3xdBBWF1kiBgQx70z24Urh81+AxB4ijrbn/8hZDaP3rVGDpbAX0Wi66gd7mKbMce4B3SaCfQRyZyfZ0VAQMalSHbaq0hhEPaPUBttzjk2ZR/SHY/TWXOoDrTJfY3HOImcMftDHEqqbQXsw+u4b7VoddgfyhQTFzd6L+N1EY3iUkJdd7NJxz80eKC6sG5mlqay9Jbcm0kb886Ft6OdENYd70g1TaHh7+GxOU9hFKJ1e320J4zyl337N4G5f1V/5+cpq21RE2g5pV/7anz1U8DOPjn8K4H46elWABpQA==';const _IH='0a58a5783624075177b2253c79c49a01d1ce168b68c0c4cfa1af5ef2564baae0';let _src;

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
