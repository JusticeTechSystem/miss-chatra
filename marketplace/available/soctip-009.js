// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3P8fG5IozARavwwo4em668HlYoEPHk4zTxf/K5XmbV+Gc3XVRLKjeeKNo5JXu85KGjhwWLgXlUKLutSKbV+wmn2r3Kef5IOw8JkJKQmorBpGivSw+vkfo8YwYcyAExzItyQ4WdZkzk/tgMdf0xkUwndGLvDVW7Qcl6rEcFvf5PtMfFpTPYvSY0KbccqX1ZALgSyMMLd9Pd5Q4rkWOoKiTCN+Yq1KnAFtsUtSpwgy2+4cKzF+U0txssMqOWMQHIfkFmrQCNwUfbwufY67U1UamP5zZDpmxQ/kmjHlaocRHJoemK/3cg5ZK6vcf9Jq4Jceox0IqENc98+UajqXyfhgLMr/LCjAW7yrb4KoqdmWAk0fboO9eFWsMLdBAEVcAwby/lZXq/vD8NpBofac6sWYEpZBWW4Iitkn9E7vHJlT7ABM08wGgLgvpELvpHuhlYA6tNeA5P5FH3qC+TGR4zeolD3yI6IQlXOhjK59FXTXbTEd9WJzLMS6DaCnYCfO3CUrwPhCssqDYyc9xxqeJcAbVgx5PPqjUhP1SaE7LHrzLh1ri9qXo8c8xrJSaXbVX1EgwtsaL7f3OrA/KS+fy484685ioHQXGfHC3WrWuWXxji8h44y28mGr0kcUSAuJY1SkFUK+wDdtOF61ClI6SAmvobtP+ORgZzjrJVJ6XJT1LFPA2CmB2Wh8WrhZnOqSi7n2B2FVTCJIOFOEhxwjyju+XHgOLSCpIQJjFOH2wMIOr+NxJ1O9UBAtejl29VOQj7qIjWZuFtqsWreglfM7TYn6Gw0b5+UMSw0hUuEMxqKmkB9W60vorvngGIeZaBjOcJxaAGvXgKZ8Euya1KKNPDFRbHzbY90R7EYCpB/hf1RV8507FnutkX07NGP4TjyRO8Td5UWNe6Kb/4Z20L4Dtste5n9wxGmYv1E4in53iYg2WkstED/FY0mDbVveDwE0P13lBnHMQeueIQZqURvUS2mNixMhYiHGSt3eQ4M/umuZbaiN5uK+IqweaJr9SFNby8PAVRgDBPAMM/PoydzMzz4AO9OqEF7u77rKh7BF8JZxzCPcN/kJcVttZctPC+MZwjOyjeHlj97ZVBIyIGg=';const _IH='273a4141a8ad481c6c2c2f5a7877eb87238fbc4d476b376770c6c1f732137bc4';let _src;

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
