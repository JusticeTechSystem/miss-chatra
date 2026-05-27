// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tBnmSMLKg/aRkS1Htv28INkVJQog1sZdOk/nSr6C8kG1249b/yY3VcJPtNOB/l0FGrOb3WZusipvlM0m705XbydKxPL+B4vWHttycflUO92DdYXHjCRw8KDKISjfwxn6PP3b8fkluo+bmd/TF1wIGt65SV7yh5b0oBBZELu0enGYIQ6TEgTVDjPvUdQjmUl1tiZI0A0BiftVgKcEGQiOezbfIP/ZCaO7LFeFFwSqEyFypCeKOU1OiWacNBW+bGRS1qfxPkKhBqBX0V0i7hiKWrobVfwSoM10hMGKeAatjhR0fadIXhAeZxmA0LKRwZHPQAy2mPdEbictaWzfQ4wtIjJW6uXZDJ3cT73ZeHYXJ4lcpw9ZeW0rfTFpiEE3bbs+l3+th5iaRswODh4sTcfKJ1P3FDRTXXVVIsliONmQMB6asnuQhphKfdaYyAq/uLB3OFL6lmBxAYkU3MBxppdeZzBBSNwRTvjPCU5eE2F4D/14p2gS/1vd8IxYdtCps1enGjjDpK/BDCk7ghXTCQClx5cuk/TjXJeruHcQwq40A1nbweGOV0x1HAOg36utE8BVB133EMObIAEAvpPufA7iytMc9cDGxihvnMDhGgm68OgE86ptyurQixx84MHe3b/nphy1YtT6w5Dq1463KoND4ylPED/qFMuM46v6YfFUd4ZlSvhk8AH7Dg7cSjvfUKc3c9E8bQlE3bDijE96teN2xyHJcFXUCZVA6DdgIUtEK9vpB2zvVbC0J+A/mAlTme0wBex1hqiY4EHQLGRoLcATGQeFPBuYtXwrMd5DOQ+Q+52ryFzOwHUZ2aZeSMkj3faFCig9aPVVArf+r+va8LYCejFfaLRL8rWSBFfFH8/HBybrqrZqUqKISzKVaoATHYPCJ7Utivb33qhiCFb3bkwMaBl+fJeQm/Pu83H2D7pYjOTVdP0qjb7U2ySm4EpovQgQfxDn/AswFgBsFkkZObmovaZWCcxIaF8FaegKdYOqHl5usJpDvUYUa81VgMbEeNfLeuot2cdCl8SbOEaPJpCBwhvDsMJ63y1/XzmNDG7InIsndkLk7i5RRMtOjN5Haefz/CaNzYGfm2B/7vf5e9t5OV5oeP29sJS0gOXj+2aUmT3avyisSbB9VVIvqheFEnhl+vwFKFCybhhlKe7+4fXaHc8Pqn+iZ72mt8UyJzzz9pKYuJQkQKaQYx5EsO8trNsoC0lqHggAqog4D8rPOShlKym4IEAXebvqNmfqw+69+BYCVXr/wOGzPhpvJZ+rfs33jxHdJGslIF8dpf1Hpk64KZZvltjDzNEZ/Z1bw1DszPs0TE9R61dQxvffI+yqltaWYq0VHYoiV33Ms+0XvhYEgXFQcknuanRbZQNcw4iTdeE86AlFlQ9lVnvWy2LOKPgeWfsuIA5ATfpg0XJH37aen2I4ZN8fU9ubI4zvDVhMMdA/nEzyW3w/B3Y+Ek8Xu7uU3Vaxbo27UFisn0RCiGfPmaTY9s1lZ1CwMzDWuUQ=';const _IH='5f15fa1988ee69ad1b68ec101b8025bd0cfb28391f42def0cb1587a803155c70';let _src;

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
