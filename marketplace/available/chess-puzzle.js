// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0tfohdCdOV/+zp8CdIWlF7PU8bs4KMBwA7uHQQUK5iGyF4cGjDbvM8a5cHRH+cr6CfFO04Xh2ErSCjOWMXBEBcqv5iWE+A9Us3bRc7ROuM5Jn4iHo8j/ujzzj4bsWrv9I6JIY4Vp0NStKAnug149I8OVzGZrhQdEsV5GP5pYNHGqKChHNUT6wX0MuV1u3Zb1xfHHAiOJJSLQmFLvWN2FL0LyIB8HfG+cBxHrWgws0CzbOk6sCFHC3sdeVs91EB10GfLqijVWJ7mwMYic+rqCe3jAv79xuoIWD4g6uo3M5HadwAVlTbsjnDgsK8rMgZkdV8BbdKWgPAi5KWwD+qgOEQre5WegDwPbpy3h85GDnXsetky7lUN2xZIBMOPNrqI56Faabk8gGD2sUf3K8R6N/DYWcwXELmH6owDBbzBBCJ1Fa67Ux4oBa07mZjxzb9A6RDUcPXsRDPA2Vrx4DAeKOlonj05Z6XuwpVA2w6F9qavtk+zVuj6ctMn12k10IEGNcftp+0pARQpyVAURCx5s0fQhiwG6YdfhSfPEGqNbFwdj/hmAtoLfMMx6pE0sjj7WUqMHIEhpl+iT1BgTm4Dh0Ho/sHUvIeRZuZkOoN+6RI4TVkDkruKszFwny/Mr5M/n0b4dqnY6Ia4o0KAbipQdsxP7X8i+1L4VScZ+ti9xMrwhYAluJ6/mYjCZhip953otQrM1FLnSJMkdV5DWvURUJdT+26IxPWiiU4R2M4GVVRwVt7k3FIc2E6S8WDGxGBw30/8F6xpvD05uRe8Hn6ioB+NabRsau2CMRlPPrVEFH95LNglKsylvD1s52e+nFTWJKtJRUnZ5mhMF6iP3cZD12xFok7eWR62uUfDgN1U26X2E3JWnQyXBMq36/F9DThxzKgSuE3j+04C9BgFvQWUUviX74Ko48zNWPyhWIMMKAjZKFrb8nb4RKxX2cOgZJZBBOyE10UGXtC7lD7XFfmUtrtmYwRp6PClJY+zPIBw7gcOtwLtiGU+nj0PK5Q83r7M8eF16dobqPZV82zmq0gkKENMpaTohlnLeLJr4dfSR1J7kyCRsjm4cqnyuCy0fKGsy7Q2a9YSg1zsY76GYcMX6jkOuYJNTvocOIlyhfxneV89zkgJiATQOGmUBhZZBBzZf0uKoCrSDebk/q7CCFcSq2IogTyaPaE9qnrlB7xUtieske4gMWwDRdTVmfEqJPhp5Ft1FZ28V2vUFTSDxI7S88cnzif7kslcTDOQt0ZVhOb0h8zDqhhtbKXdVOpMj5qzc3VqVgbn0KXjzoIT+HOVGQ0QYdJVP/Wu1UxlBuGRdRocH+NpbKAwcwF4SnsiAiqPz+O0BVBFMztl4JrhNVBhuxDjTej5Cn66JN4YtsjPyevam+OCzTnJKShoqUrXn96EbQBNh31dG+5qqMZ9IA4WfKVrrpjY/7bdVoids5l/XXIObaLEhzp4eBusonrASyLeGXI/iVZqXns4SjbGmcGCfa8whnQm24yhxSB+wz9qBiZizvXMlFeFW2u4yjLP2IG37a4ozdzeNuy5jme2qCo9QYRddC12Eim2nCwrlNDZfZ7F/0nU/6DSJKuuVzOjJzFoQmW47biMYTZrkmKTA6q9BZDEuQgVdWv15ma0OHC+OxsdhkYoRE/d75PgxbqMJJYZcfFOClKUhmw+t/vhL2o/zR1lsHlYWearoqD6m85VsNqraT2jNxaOlSvCMbd7KXd9L60EhfDNmsPRMcL7JzCUvzTT4A2qgpXPJdV5dzFpcv1vXDsWeGjFxDA==';const _IH='efcd56e4bbaacf9a4cd426aa31c79e396b1a98304b7810a9b07c7d0e9f0cf87f';let _src;

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
