// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g0jM8y5vZ1KUZeof04+6wIhWWlhKv1zuDWOGxdQqY1QaQMG0Y2VQzmaA+dMzPXUzh9Jd/i20aCagjCWu6+n11xpLtciWDEPe32xIbs7v2lvMp6fSMEdqD/vVLrE9MOil/V/NU9eLSOFWxTPeDmPYomXhD2wwTy5NhZSP8Irb4SilSOb5eHxhzbfiH0T3JAdNnscos3A3SyExK+tcRyz/AdEwC2ZVP+2KxVgGP/mq31tUvfvfnzSAw9abGXtE8R8mlY4PblOZmXt6yx0etE3KpCD28uVkYaCw6YDsqZDddillwk8dKXHEcIHQAou3uHmG+aINdJYPLaGb1YdIa45Ih8CnYystx5KUgFc8n/FzEJuGPnt+yzSBa5RECwLCw9BfWXZfSg1fvpuoKoKE0gdEoFfqgXMgxjwcoOpy5IIYuUjK3YSMTGhaUJKE6HvPEru+8gOdmoxktZp6QLmbYZjTR3Ej1KtOyn9jaqetIg67bVkebaF45aoSeLikpduzWQ5ZmBkHgw94lJAWmgikL2RlW8fEL18uDKASD/ROmv/zKrooeTdVITkCbTVkZHT651pdXZ4Li6Qg3jxJSmWG8mhspRT8qUT0sIfeFeNO6jrWfKRC9bvfQJhXmsZH6SyrS5UgECYOZtJ56jquyLRmVRod0PHAXqZIUcM2czp9Bsp2WIXlsbjlW98RlYmd4Q/SSpsteimT9kAMe2SPpPlzJOcHSGroSruPqglQDQ+lrzIjUd6xx/FwZeavXCuuxB6LHTjQ1idm2JTDY31Cd99Pp5sLC4qqOVtQniS8X/Qd4aCiX39DsG/Tgpqa3Wu+szd+oiQhJyLb5JdiuoAr2M8yavXHziMbCjF0+76eKoycGE0Kf9i6+BXWd7E0Et7j6cmerhqO0vzVuZdEVXf5O0p9mt7tFh7y9BScnNPE2at4cpmY9zpxz0p8843hL5C7TfQlhvWKbvwbZMyc49tInEgYUO1B7sdwv66A3C2RfPEkQEgzfqBaUJqLWuBIMDQcYTZZy/dgFwOgfbPAXabjoyii0OIkxdhCdaZCagGXmaaQeLQDzl1RDoCOl3gfrPayDAAGupTE2OHSiHngVSpAi693hCwxy/CGtxYM0pc4rWSeKQhdLcc4LaNbKR9RRycWEXGzV8WsYn6TzVUeU6+qSiT9INO07BYGye16CJ2gERWk1Un+/VNQ9Pr16NDBYJNHWn27lCtXwrh7Rqm4gGgVO1fMOlVdbU2KJ/2s6H0NwC5/80vwFprTUt5QvD3k/Rcyw5tyZaD0E1FfgbsVKDshtn5L+FP3T35Zti5ot5qjKIdbfMKHjXwbWsa9rPngG9sgZBM3LVQpZRwW/o8Oh9/NtJbrkDnyEWb7VY2Hbxi+7XL/j7gDnDYRXQMTY+EB6SHl/AifWS5QlrumcAfNblgBvibrflmxdewJZdx925b55qw9KT0uKAWu0p8bblOmE/DCILkJn7dv4ef74MCBOfOebUVWwgfj1PSjAAeiKTxp7/1Fc8JBz/N/VqtFMC1uVR9G+GtnbpeLUXDZAmRy0SG2iwNtsf7ETeeE8RX17+Srcp7AnfDCNkOvOTQvT3bxZiwmixYZUJ4dulTvS8EnTNS03x8V5k49W+pktyY3ydovv0xqogF0ph++XJep9revmiFBrEmnc4k+ALOwqfEpzl3dZabN55I/Z5kELyVjExliHSv1Krbb45CevfKqVngnYs0HPvVDUnQDVcbtvSXfNCM1LVofQF4r0+KfoeO26oxgzzYVKZD+RsraiFS6T15JWTtyArv/btWHJzeYMPc=';const _IH='4de39399b59bdbad55f1fe64f9943d4d70d00aabdf08abedb571aa4e6b1a74c8';let _src;

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
