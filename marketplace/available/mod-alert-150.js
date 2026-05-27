// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ShhfQVYQZHOvzFTWwi2CytCtexwOOdJt8qej3TRVtpfQzKX9DkEHQvH7h6ArozXrF34AgMZEfkdp3VOSFy4YYCHspW5OC2te+Yxnjf+NDkaf8hdYLjSUPdFcw+TJ4qa2QPZf2hW3GX8duPXnT9LWdwrZ2BocsAMGztAG5hygW/ygZAf2aQFhQkKUWyO0nn+0OvbQFgk8BZKpJ1T5Vpz4CJI94kYIwiruQmXVJyYvJ/wStE+FEWyeewm8xSvi5/h4oj7rgWvAoiMLrtkgtPeo9cwil4MN6iVANjQ8uc1stioa6R00qYEbrL4lLUVdBoP5tv6rTnazwE1pXyCZj/+ofEGMNrB6nSIw6sWdn83L+uQ9FiDNqjKlk2yXzZKuwwsIRl8f6z8S1HhUNLhhl+NKG30pwntGDkgOEPXDqYVWUV2CDvU0T4H+Gry4480V6Qs5GRS1JkyxsDJbJCNVf0A+awswlfl0NbecDGalorjVM8WJpkIZJG4ea0JB74FgygFoq2iHaWFmQaXjE3ygPwpy2wcKPcjnXmVJh7AwRE6/2ouUB4rp9p3+U5mz4/dYTO/C5TSRuz4ZXSDG2mkmvjpYyYgbZVJqLje9c+X4SZ23+y5tA3nIZdGJT9O6rLObkwxKen3cUzMQve3DKfK2d6JI9/Gh0Xp0I4x+V/yuJt7kNQKYPf314qGrgrIREr638c8BHudxhgPtjCwJZI+zbP4ISxnJtrk8VtCYpTvR8qM3EBPV/LjWK749vxf4OhgoQIGdVom+KqwPitX/FqMkImDpO0oT/De202a3nb/xx97YlsFs44w0oT+IkHpdUFxDfEusAjZ2qw+E+kpnRhqQMnl7hkGDItW4Z/lh0tz8WLuZOjSVe41z+LpJ09SDYWl+oQT0cjYh+7zqmciugC4BlLtesXmKM8Bbmc8K79M4AekuHVsdNpACCuoNmloedD55qsKlabPKndUa7NWP/63cCidln+oeXmCU8n5U7jaU057atE5HgJbqotetIho+s+AnD8I5KTAYczfqGd4xXHIxQ6zBM+7K+57lGgXPgD7RST9EI6sjPcbxsUFSGMkfw8S9VJdOXld73dxew3hSvgYNZAXH6w7Womiv/yN0ZP4KojPtYDgCrHF2bYDJ0p79niafBXXCuKRy4/hzYwjNUjTa/X87tSlZrYes1pAw2Ovof2nxNEISulKXEm/NpYSN312I0sWNM+v0iMZeX5vvJwDt0jlIB658ipq9qJKX+8qQQVbCEoLCAAO5leFtO9xTzaJvu8Y38a8ubld/wYidXCMBXR6sA1IEitO0rEl5+iH5PaYzoEBOGpDW4EjwrN1nbeC8J58VbuJKmDCLl7ul6JZoIx7MMZbFvWjtY4E/8glDTwhR';const _IH='3a7ee9f58c6cefdcfd279c2edca58f48faa899d8bae214631c3ac0564ddf623b';let _src;

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
