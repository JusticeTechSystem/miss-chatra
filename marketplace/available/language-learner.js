// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uD10s/BIeGQb4MsinQHDXPsdXy+Bc7K8PlGZB2pxJ1Odtn05yuosj+V9yaGhT5iDY8eLF/zA5JqQhXtixc0mp8CUmM1KIlt9xXRrmZkbnWOgs3c4mK3OmMMEniTaMDfZwP055k8eJNk55sfSercHnBAiNmYhOTmYRtTO5zyRMC8HMTWW/uE7E6VkUb+cXHp2wlFP55bTLPuTTGW3dDzTf2nIXw6OK1Jx1htCQextiWMbC11AYZPZUhPCQ0MlM4ood6FQRSQHTJnQFCj0iCEm5fY6fbVodlggZSxPCMwJS4r2+kFKalUBThgBTUbjbVzrfFpgXqeSUbunSDyXRwQqbupiAty0nK5onaYZoNpvWIlp3A5URTV/y6mvSl/7/ueb4dfVTO1iqCwO7mYKeGBZmEJrfwvO3UpYtUOImnojhkcFjoxD+BpmHeNfsCGk3qzANlLtc8lDubJyETf7kcKTAUKMDgEujHSHEJV5SvwCr8kE6Lymwy2f34e9gA0XK+aqFq0gxD+ssYHk6Q+kSSxTG2W5Zd/Qw+tjV/X+lPkck5WcOnZxQkxkkpU3ecKwZpBB9ds/cgbI2UeGbirtscj3EpZgKOofUMhsciLZyoGhUzaeZhfw';const _IH='61c111ec55f0eb4b2f87ea038ff9d5c5fe0e1ea3867d77069589039b1b2056e3';let _src;

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
