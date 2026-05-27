// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VIVFc3tzZcZHz32Ag4yk+ojOAgVJUQyPxnuaUUTXc2UX7iLNIrYcfkHaEhZD50sFo5qgSviqzk2rlClgHMYH7AWdNHOQjJBWAFEtUh/3b3WNCPV2AgaQfeffwc0trdZlRpoWKlNu6DjApC03sLkeFbPkg0nf8KR9EJbE5xfckcPSzW0fiSIfGr1S3g1ZHtiTJMakIwl1q717nHee6lRLwN+qr27wIzCg8Hh5KIelyTdXDIU93rncJv8nnboHUgKT509SJjhUxJyEPspmWUVZMOMGVLTJVn5USW4ki1Mn8XVPAJnN2foyYfB8n1IsyWZNYld+/XWSf6czQrAZo7FPa+TL14bbFIhsZ5KazRgs0EMbGxIstHptmIBuK6ACi1C2Brl8zrcqOlrNfDYw5bjTHRvcip+TYOZOXct4IxmUbwl2o4+oUZDFnSRrXfS6bJEGx3V/6lpVXZuYPUxXIPUqH6LS4wwZqROPjAHAi6cyjgm25mN3HIx8kNyjI3osoi/Algbu3QDKnCP2oVQbbAim6ma5mGlZnB5olNTKba2EODMsNMVBmBD6CwY/eqqn55IJNnseH5MifQ==';const _IH='8e65268422657c00697f9bd6324f85e99073df24886dda2075bc4e1eed4e5874';let _src;

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
