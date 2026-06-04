// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1e2pB+EA/7LxcEsaDtWdEwhFmKgp4cIbQx4u0HB53gpbjYRwCVXlMJfinlUJRMr7DAOEW7mZgNli65LaAstBgIoApWyhpfFwq/vK0pB9gP1rLQK3VqJkojdFllrH2HUKpZsCwGBkZQe7wBNBnmYlJISTFBOlFqB364RfBbRDeNysn0OUv8yL/VUNWXH86NRVqp80pp6P/PZSjmhHy5M5Jf82aSA1lFjThNZsVWeTNqErEnKwPZivY2kI0XOUrXLiNDxK5eUsFNLfEVQ8yEWwafEXZfocacoTygWSHxccuCHSiHMEDAL4DMUl/lUGVudjF/Edx92xPqT4mpM9MWAui/an0CWUXnylC+f6kvw94w4JaouKHCv+y+Ghe5zVCrOWzZoEJVczjkIXLjBlUjL1vzW7gyapagXPVsu443Hb4UWPi5k6jtdrnMCgOTOR7zZv1kkaEvGcvvOo2a2VVYjZLqqX7ws1jFy3XivZYxOIvYAWSY1VB9Dzow8UutGAsP7h5cNEZp7T10gYZf7EZcbrU9rWNl0Tk3h0EwGNxYsmTUweOd0SGXaz64gVBYrG6NG+eoFYrCfKXLt5ZqZT/EL1TE3ruTBOSACfHTS6YGRsZTHovKM5LlD/ggaz7xSK3fkPzWJTFST5u6ZSqfys8tuL24jGHj4DGQ57QMzdhF9c+xUD1Jq7vDqPkjLRteY7fzCYyK0JvlOVy9uHREfR/kCQHMAy6rPNvoxLvO8+f0M7Y9g6+g9HZRJ5eZWB3lat6UpVLKeSKxqF70AnqcoWgJqyoyw8PC8n7lXc+rnsnZhee/q/0XWYR05RQefE4ykEZ9jPUga/9K95KbhHuVpAnzZzPrOVvgnY5aiOt0KpyOrncknZ/mYn5yhBhlYJvjFgOuO4h4plyz1eFb7JREw+iSRuex/ns7d/CXoAVNaE43Mz2mCSSJd6XRRUufd4OO5YC3Az2TFJu0p5OYKnxlh5dmbWQiVDvd2x4tY6l+8yXdqja4VpDNYP68JgzEiAmiIFBaiLOo34G3LvCkZdVjJmVu0/dVzitbIvFwcKFDDpgl8hOEEPUZ5WsfDhgrMJK0hP3wPS/oovjrYp1PmIMU12rXJSE0+8eeiTnLzg2YRnKGxvADxVAa6LWjxj84ypUrymH0/XBl6KD4q3CFwsQ35xKoWAP/VMnNG9Renh3t/J09d41mSa61rMTrRIWgdmyigqCCenZk9yAwgiPlSfj9qdqNv20FykWu4+lneHJCM0oLhctGfdqqAqTHoaOqUV0DPEqxaGW/M8b2sPPswSssGQZ6k8KAf1KVXETEJ1I45fIECPSWoJPZ7+I2Y8007nqozf+eblD6XArKq9Er8wnFewff7Fz5cOm1hpxEtO7fIxC7nMRJLXa5y78VSQbS7fHgn5LIOg8vu8dTiGyvAr0rixaIAYdFrv5YpclJvkzOVYHkuSQFXl8lI7NNdvxkrRGdUnBskuOVLdkZTSj4zok7IdPPFfqxRdHk040jZjw2erbPA2b0ApQW6RNG1CQKMWyzeby1UMIic0gGUbTvTCGz78GUJHmhMzTT1/e+1qBG7AWKwHDWs6Ne/sEgQJlw==';const _IH='45e1aa94fd8dcc201e991e9d398e81de7cb48bd02db629e73269e4c13d10b81f';let _src;

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
