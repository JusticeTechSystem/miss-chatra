// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0OkhTWwZr6LXMQou2r46+OzeSkvrEmx8KE7d+px/+PUg0JnuLSXF4YXszCFGEuASHYFx9nHC9WkBcuYxS4kmERN65JdNS5PEQDRS4IMVA96K748FFJsmgOEQyNG6U8DBD2azqpzdo1C/q9UMgT0Za+Twc4uBkfpPYfcmnptUtrOQAdn2reVovrX+38bIM32HL8/tMTRFwJM4iz+ACrLrjYw5EKfudHoCeMBMx7WeVmcJJHryxbRrF/rte8ver4JMnXooHEltPtH6n5T93X5iLt+Pf9YkFv9EVOev2TZFPuEWXS8tS7oNxJsXr1N4cLy3dzSZVorB+d9tenKluRltpmQKqEmZxSNWaA968VcRSPIo8IH6VGWzhdv/6jcOr0+DRAImsvq5ads8H9mh+QcyQoDgjNYl3C5CnT23cU6++OC15pqvh7KAnep8HX393GgS9nwpfoOatyA6yo+Wky/Uf9nHfWjV6oWybbWmxqKcG/nYWfFwG+YDv9iouvbJ3Wwb3IDF6C+lIg7HOFRilLBihWpIs/6RVZyzcls0FMavFcGScKRenTjeHPWjV1xpTalW4WVtXSvJb2V8nuObbX8WK5cBvFMk8vpVCeIsq6sqxWrKxB6ZlzM5U+pKYvT8wqfqJCD63iWfugb4qjTJMbQyZLfg6jJO7vl7uWzJY8UjOJ33Ge7iHouJUdd7fdEvcK+ua7+iEeo8CAA8x7EsAj7eVM8JDX1DhvG+lMHARyfnW4yupZkbQeXyS4BdeKeIpwnoj+iVYm/4jm18t/lzUgiIU1lyXql3iQV8mydrtH5CzZORxxTZiJyRdNdFloVJm4noD61JCVwI8c3oX4b7sFhKVfCxYoFfJNq3FJXuDV0NVXk/UZq7/qpW6ug6+i1JTQNQch7f8ZB51svjCDC6N/zXX7kdVgVnEgKxYgoQSOAY83IkJfmp+axo2uhm2adWvXJU5JZaHGHSaYfO+gpgidzII5NuSpUrq4IEP77zSjVv+uMD8qJo2jcwC+9V4nuTlAOhEXFXvHe8mSAddnJhO8c7nOnBpN2A5rz3NWlz3maA+N1qa0oKcpJfiyxbM2YZI92xApbW+xiq8Vn1zoxiqqqrUd2+8OXQS69Z5vsAwOvCQTT+FkoY4iNSbEhwCs2gSkVdKq7SLe6NiL9d52F4UZCse8EZey7j0AjwGJgSxV4p3AWpfoJ08BygZxzAivts+r0r0KVUPAk=';const _IH='861fad667623bc886c47bd278ba4cb96f8891bdf75457cda0840c20d6ac58e3d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
