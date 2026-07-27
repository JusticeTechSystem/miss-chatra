// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQh2sIBRKv/9+GQ1wbjKl8rUByHH0RrSRR44oM4tVqzsJ6M9d8+WiBjlWaaebVIIjR9xZ/kD3YDE8dGOCAexmGXWgNtucCwV6asjkQhWr9ybedQKCR3SMEuVA0A8Rh6nbc37+A0665eqk7eng/JOv96OWLYHzWvu/xX3GQRM3qrpKWhEIZ3IJ/MGYg5ZuHnYkGZKubDE7NCMY5KntJyav4n88UQuMdeme9K+QGyllD3Svy5pveoqKvzhS8Ezgpp9jUFAbhHQxK+Qbb7cM2ZOaRUuJOfaVRPYWO/j8Rgc8uehAFGyFGDBBBykE8KvwCWPBQiJIjl06Nc9Igod1O0HmOJ1HWd0nIkni9CRknv8xifukqHb60jci8zDMZyi3W5kQpCp8m8Cej7ZmG7vP1dbsHROUKDBUy/UWVBGh7GQt0J4zhbs9yPMlZPm3Mz3hNBqHMBGwZOTI3FPPaddRbUwdz71p6S31ZzWs7jwYZTmZqjnp2qwn6JyG1YJGHOT0HKIBf9lfmNkAo3z9cpXwahP1U+bDbSlpPrwUJogMf57GVqe42pWRrUPvAenlelufDL43o+piq48QgDR8W34o1gg4SaZ7hG6/0RzcZ5jtwiT63fXW0C5FN1ddgXEe4ZtsX2wT/YQmQIAtJFFKW4hZEQpUzlB99RneBqX9oklku1SzI2j8kRwcttOb6kCtjznt6mKaijCGDXe0PgtLIEmqx6aW11u0mDl+aA6Z8IAZ0C5puS7CCYkKJCCvIbpU8k4uJo3Rwf1oeLLqucwYoVaL7sOKp+2DR9xOom6DlG1lBpGbTBF+DSHMpIKIbT00mqd8PjdxQyWQcHEeYHo4K9Rd0637TuOPlYWEMEiDxw9etZLKc9u7pDUnD/5WidPKtuO3kOoZ+6SfA351MEyqQ+UePjje531p4LHVIEd2yrZoJf7NpBjyoZEPISrDS9Qh9ErxIJctcYRCj/UhFMjuq687a8zKZ0kAltT9NWicaKoZuHHcfbJCF0b51YkIMggZj6/4uTxjkdvJnvpLFOQcpW6Ru01t+sHiEMCPSj6Rh9msTXPGYORVEA7zyjg14UJf9Y6bwMY+tTn+lw0yUuNYvOGQ7vaQk4RHeFSWBW9fO21Qw9LbFoUAG2lO4ClpUP2X4ftdU8KM9tzgub9kd2FXubFQTRMcAz8Puca14oY+riUPELelXoEKmenuXABtGyR5SxlbGtDr9HE9aPfI2GlOYVC6uVTIbIyJSekktH/hdHrZicB8fCXI/4e0CLy/KrFBNRRatr6mN+pKbGLwKrklLDEUGWhVkEvEQLqkBdRP4SWcphWVJU3gz3sZfNnOY2fVETLR0mdsEuni9ALn9ZxNNUl7H01o+rogD5uGn6xjiDnUJS0sBtKbOIJt6K3iqD+zNJrPKOn+/k408fY0zpz9YcrX9lop5TisiT5sTuHI32EjJCXMV+dCgSrBjhxA43b/KmlZgbtpHWZQf8F4mCHQh4GtL5jfT1PXhBQpLrTnHdKEMw/2oBGNsIvW+8ct3aThGYXqbVJRskqo/e8qQY0CmQ9ngG7eGowkjo/Z5PqBdtkas126BmbkZtYG3CnfehpBlZ50aMUAPVUUj7lFPcVSJmKVIGBfDPm3dM5IS2VpA9zT1Xv5MBb0Q+ThBTDo0Fr+KoBoKdbrbNRj4x7wsusPI5ScrFVNtII318Ug4oayHzPKeDLqgpHCaggoyRHETT5xvY3m1VcNBf+C2gq7iPi15Afyn5bviTDb9O2u7wjcgRUaB2VFMOK3AWR8jgJu2H8oaauCG544Sohe9qufnXYpthm1Bl0wWeybtk6diswp5sZW8w17dzj1j8H/Abn8L1k91Wy1uN8aHDqgcoVvnNXVXmfsBv1te72JwcsEM=';const _IH='ed3923bc55f332a5d290702f2a6b5bb8ce238e3d2c6d72cf4fdc289ade9f4c51';let _src;

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
