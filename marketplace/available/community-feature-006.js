// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bZHXXkKjNmmNyKNjaB/K646SKEpPcjqiCKIIJFyBooeHlZcaw4FbnFYy7k8VvsSjKTprBWxKZBGU2Ou6FLBwfh/QqKeI8Dn3nAzOELDMthUgZJJbRNJi+96rETnyWIOGvR8ClhXouN/ctlQ6JlA8MgSEZqJ40LkXlnXcD5BSpl1EZR3/qGe5nc1Wv6t5ccyo+sB72+DGDTMjiR1VKpEkeHHvHP7HvqwavnThwnNO0tsj0gLnV8ZIb5nd/wzjLgjC4cijJu2cnQGd7ioT4FVZ90fa1RzBI7t2TWJ42sL9+WP6bHLXW3gPb2v4Fv4FkFw7yFPKKvlHNhrIYaHve9GABju6StkCjk0z3R+Tjum2GWV09yJ8LaJAAL6zg8SES1424+kIIheCVzQHGwf9nrcgUmb4141wGoXWbISqgOB3Mv3kOnb/Dx9CVXw6q4m25uXfnPhwV08vTmwKVbApIXNV8AAmO7PVRAVCkkpADr1XMNNHXDu4Nbax3ZYAmqFp6KZdBvK757+YErPLTpsnCjUc8GT6ZnYnhpV7kTtvnutsur2ji578KP0QQWo2us+yW7Q9SpTo8UyZBqYr6KnbXMISw/PohZR+vCclxEjlnixY1OOBezRUTgZxKLzsTa/ZdFGsiijBYD62hgeITJT7kIGfxdZKHZyEGfDJcv0pXlgVdF9jYnTd16pZ3yjG8IlgCWNhSa5Zs0jmvl9NI8L89inIBg==';const _IH='58249d03da8ddad189e53ce1884521d2fb36cad3e04cd54b3f010cadc7f9c77f';let _src;

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
