// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9pSmM6HogY3Jafp5n0ougnuiZZ7S/2U7nJZNipSc/ZExxNKA6ZZkounOr6bSE8rzrGLce/p2WKr+7RWMbelflOydLg119Kg+O6KquRwS6QWipf0OcgknHPCJK1y2cEMBQY58Wk8OTL0S9gSfA4UsUnhdpLwDe8Ps0q0u3JWhnF5nvP9LoWbBE4b1d10Ij0pDqix6Q6wHgZhxuno7bGF8wTKVvh01wbMsAR48H6jP08qU+LSETIwoNzNPKvoZ0TYMEWPyxxhvIHqvKRICg2fy2kO08hmS7vLABVPqrGFWvYK/DufWf6iaIZSYOSFMhocJCQuAtvGd7myaUBczP3Sf4LAPN2CFO6kw6+klyzAj0n/tkt7IDEoyZzGl91cysIl5SonZFhipYE5kPGOEdBsQW6KuGlmxOFCQmKdZauy6fP4Lg+w0UMKyjRpyeb2qVEC+kmVjIje/6XgKTnLyq+CZZJkYslBHblOEJTuissr+jqTK8/xXKiDPKDSQQ/08mYlnBcL2+b35tnZiKBIfZ0vVjqrcWT23GoQbADxf5WLuTwzzIZmV6i/3wNqzqFP04HkI54E0Nc2LyiibdTpz8/on88moftwSAsMVjdCSOY7+o0RwdYPaRGD9DiOA83JqMQFovaJF8MibAFRuqitq4eEHUu+D6mUkfXUT1+9Nk6ypT4VniPqH4mpP0JrKxp3Ui3egSv/VLDaaDFA5xDJmOQnKQ2rNYmZuf5sBIpVDfp2uxq4osg2YuJ8Pa6Z217ai2MrXjbMIgshQFWFZhXl/JLKIDrdhEikx2jcVn4cq5JybDTpxhTqCnci4pTD3qU+0HsF6JKJTWxIXC55EJ6PLffW+aHRa/G2HmJES1ysJUelmjab/1xqlmGehj+QUcVd+4p83V2gIutO0m4nYloUJcA5KadWE9gC8MuTbmXfpmUVLCYTlHrJSTqZhcTcxQlBoKtxl5UfH3uQ7GZzRXU/x6xd6qe7BHktgOO52hNSNZqZ+erq7FkaWnNHrrz5L4W1NQTnGAOkMAtwjlhr58foGArnyvyLRB4HWjVvw2kR63C3ug==';const _IH='ef449f98023bf094f00d8786a9939d0cffd72571672114cd2679bc395bf6012e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
