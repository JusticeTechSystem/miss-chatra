// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t2emxwPcnACCK44GVuKkIE3W6sU0ZDk2fcKIgDhivmZlPZTK9IQts2E9Zi2LPCinunNzEztjcOLkkiAMQ3UgZv2xEqrzwivMXqM71+fqE7dGcTneQf+GukcnimePYos5ZoLjHWhfS9Wngwz6Gj4XoW8M4yfFg2yZKCBEvgNyPRUBbYF8iXruieYu4D1HZ9CKvQm8ZzkCK+mAWuXGkpUfF7ImMVV9NE7KOJUMrGy6xb331gKaKQZzSKcnwq96WFhqo35EaO0eiCU2xCK10PjE7/wSb8QQfpj6HrWjzT0fIyNcgNDwyXEv4cY9AAvmVL8ZDK8QFTPQKsQG5ylI80/WN/UbBouShUdBil8vRIL7OTiN+uDXN8hbQiA9W/53qPK91RkozkR2MME4qJA5gLwZEKiu/E/hXp+fmppM0brQt1F+lWRgL8uJRWqY4WRl/oGWLMMHt244NPBNTW08HnU+ucboXWnEBuE8G8odA9DZ0l6abIjM+7c7XVASQFMMVJ6uk7ki0YwHRm49RJp/+Yv7Mi862jpUCsyT/wWGpmKVK6Vvvv0VIMlaOkjliUi/Zze8xM57HZ0UQcp417m17J8NG8gUjgArWWq3mo3L1jI4nirBJWdDo1JnE0bxQyF5LEY6CoVi8GKZILRvc+IylsxUZT25kHNSiuvzCJavDnWrEdfUa6aMHCuRkPzru+ffrlNxrXl2yo++XOEMVZI=';const _IH='0f6edc1cb8c1dba12672f2ed2951ecd97e9b26b1929b3712a6ba490399508434';let _src;

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
