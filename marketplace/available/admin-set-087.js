// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwhuQzHaPOOV3dFQGPrBJek1fxp2spZlU0Vy41i+eUp2pWHCjSOLMjUnQP3RqvfAhGf4u7pB889mFffqemktMJApM05S9KP5+34OB189cf+MivsELHqjbc4SrcaqalAMrZeXs9saaoMCAFx0nUosXCs57EdnkybTqHnk42+0jhM8bQzSeVaCmXRYlfck+ewEEPFD7Ig1kl94Vg14ezau02SUQJTozQ3xL9Y6KbMQnPwP50CgsQRvGZ0Ms2JgXuSpcz3Waoz4BRHcni1qSn6Qy3lCGTliXrAmC7f1EfCykxaUZtbzhFtnN8zicN9dwfNqebr1FEFAgyWkNOqVQNUhrTTg9XIwwmEVotwauMg+ujQ1hAZU13IwQI5hQSyYJM6FDz3LmOVRZSuTUcjhz3HeQiNlc0xzWNvvD7BM0/3fEDAlDoEIuSHjpZism5pzeQy4IT8Yb9SoOttmmCTmUxYVR/BeGtUkIGj1L5OPofw/O7wNpIb64UYew8gR5W0IV6+eZhVku6vgJe7yE77LiYwqYvNG4kFI6tOqwxH5H59/YBWJXpKlbVBCoZuotgKpsOuluWsAJFd5j+n8o6OWIk8KGWOkqn9OGnQo2JneRPGUn3QRdG1n0aXPZGC02XhPGNTlAP+KoYFZeiT9CiACEr/6w77Jg/TQIfJpaJH8MIbKD9ZEQYuR28HCSYsLxMQ08dMQUCVt3o/Ak+t7Ivo79pifGlBDG9V5NIIulPvHZzNdJmpgNc9kyCn5FaU8SG1+NlkCJFDbbKAdAC3cwJargnrbbRsFnV2NGr49BAAM8XhLDca7Dpy9Rg0e8B2tQUD1JwCdno6oBOmJ7N9KngwvneFHlszmg41kcu1G83jjGYnAOyRmYu+xXYX2gh0XAl2Sx/bPuvVVTJn+9KlzClYfwxcpbv8sQ/MYIIbUEh6LUC+rY0o25N4hT8AEFK5zBooVbx0S9hU0BTCn7WOj3Wj5msZfG2zSbH44oXskw=';const _IH='bc2026ad5fcb4cc43549b0e1f86e40001b939cf92af6bdb453ec8852c66afff4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
