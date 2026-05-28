// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bg0nAXDetUG/1AMPo1QwW0Wl1TEsauiPMlHJi38qygs1XqpQtd7QpAJGLk2edsxcLbfTVzXYrfWSM32NFsADRDB1ICKpTwC5nhzXWLaf6oofVJcLjcDQBGcQ6ih1Ca9xzAQcCqU7xEPSvV8jd68W73PbdYuaLwStJS4mVwLgYE5XPdLJTNqaLMnXVYev7dyn5ECtmTDBWZWDUxdQ9EivSa7TydHHov8UjJs7w2RLkpNyg542DhZC9EqYJm/pR54c6LWR3zbIpdQBo3GtZFG6WfQ1Vh3diavAhhVilsn9HpTVyi5ytuRwBKkbngx1gdJIDraQcd+T7/YvqquSLJgJDJIdonh3bmolCDirIfMCGEhQUH+lhzOpe5+JY1xXLr7+m3FhblQIbQeLJ77Vz31XbeQzIsSZBAbErS+0HNdDzGH78w1slimRNZi2KDgkrlt5oGiWrz1IbpI9bHPSi3tOWWWFHj/82rXOvQdDNUMsrcURJDMlrQLQeDRKwz5YJWBq7TuEftg5bbLLjshOvjTlWFpv8sTbJautFqcjhHYWuD6dM7qUQsz0JuLC2gYwRABAFdccffZOH8bFDsBaNdduryBqBc4jF1iHbfVoyV5E5NX+3bA6rs19ChAAkEmFhMwUvxEC320anCQQtIwaAH5UzlwPi1uFzjNNqnjQZzsxfOhfJHf3CAdER9GuMcrx5LOV5x28v6eQEayuib5DblDQi/C6h098u5gRmj/XfaPcKb33QImTHPgQcr3UOFTjj5Gw9CHsfLwXVI9VAwFvACjBoAF3JyspwcjLszrt9OOK4agDc/zX/hyeGZaOXjV9me9tugq1P8c7raF550Jsjg5imYx1LyN6R6p95Qyk0NK9JkHqF1Nx5Zp58jlXOakZ+R+4Mfbqr47qCLxZbv06yYLOhFjOHVbt0qt7RW+xGggWaA0TVK9OgRX7sWwry+rkZgmRT6sKj1E1OpADuniH1IFdNjBxkkK7o3x7KOD54n319fr2RSO/cRsWjmidzqBL8/1EEXZjtM4XpBU=';const _IH='044ef0cda2da8ce84f1f259607c00418411a5d6e47b131b6507fe6f7d1f8b335';let _src;

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
