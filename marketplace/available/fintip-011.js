// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KKt89jx0aU9IAdB92/xXeeGTHJwB6Ml3RQ5WcLa+9FAnUdpmussCr/YgUitXmhXFoSlP7QLgFCOw2TC1ZYMdEE+NspH9pFv0WTfV1W1fbzw45vzK4ft4pyxLfYpXcEeo0fvQ/sUgij0v4NaeLiiY7602FPUtU03N5FtUKVtGZxhfIMjAmgjn7HJgmqYPYD+cP2M8NQiAHkKB3ldknHEmEpPpYjUMg0lDBrdKyKuVGGE5rfieTFeZ6OYJ2cUmm3bNd0c5LNspGkugqyikEDZQKn9Pl8ommz2X0WGfHxMtYeLuJAmKV46cu6e48zvx7QPGjmE2X+/KXxG1eohWAtPT1v/JgmmM8Abgv7zNlp5cPLudY/oRqfOGF+pqxbc5n19XmZ8ZO5YXbJC9UpdVaCOK2WCHJW/btOa8E+qsRHNFrhCaGDSBMo4jx8ON1xjj4BB+erdbBXONFJlx5qVrerxFCSp7I0ZbtEOwUWF8rr0cjo2wbUArtmx843tGi2r2qgCb8A0k2TR9VilNtTtxKrbmSbF2vUNs9d+DlnVieQHdcV+fBLkdNzZyuRbzxPyrz0rwC0Saz6vJH9eVLhtjxpmVHIi7GDlmV0pmeReC7DvfU+NDXZjDbKZvh//yfPqz4YlOCKsbd0dyLrfZJBbnreJwX4Tyxuv47Tfy0RqF/UmTK1Ajzfy5hzM3nkqx58wGSbUH8FK4JcCIaF3ABJKMgvPwiiOirW5/Iha+qFMPeBfcXPSIJ6cc78sI30vRCoBl+hFO55N9TmhPjqs6p1In2of3sZQQzupP471okkYGWn6ZmX3fRAnLh2dfsAGDCozL4cDE/1UxumnmcvbYAj1oXaLUonHfB9FYqZ38NB3tqyJImhRBCNFYywCpXbCUCLa7i+KQ3W5WuoIzmmRgBKOuDR6fXGwvRIAO+AYP5duYxYYRfyEt2ocOr/VtpCOzMU4H25xXml53EgpELKfYEOw5sx/boulEsGJLSoUdVP0uhT804ye23adO6LP2uhyaabyjmSEHLoK0gYQ3xa3hGRKTTX6i1E/BYmdnF58YgTHnneYwgQ80tQ==';const _IH='db07c81dd3815d7997a81dbbf4b7f77ac3d2f08900631c7add126f3039b021dc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
