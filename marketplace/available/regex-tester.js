// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/FiGU6AxXkmbkUO+sdbBE4NxRpcDxh4v61WNTIECizuow9QZnar3EyjTPFO93dTHBXOExCD8gOQg6a1YY4rncaT6vpQScP6NelhzjTRCLWjka7b3HDoB88mq0WUSnXILLTLCcdwhtxq8XqlPH0youWm81po/M4CWAi9iC8X70RLot+C+pbaqIvIVlubGFbScLI6pFUUuNzG+NyOHWqt2fKHkMmIgz6wGDyU3u5OQx2lS2V8dVX90+SfTpy4C1Qe179X9N2jFjJ/41MsLxP7WEKf2z6FO1owuEAifu8ZN7oKbnn3zBAwn+b9xgZ2sK2ZjB2M1/ye8WYxfDm/dpAWp7umv/DWaexUgwD248g1LDnw58CySnQVCDkktKHbkGyNQKiNajaYTH9x3NjLITtnVY2zFkDItHqPI6ZAdKlmNb6Lq02eVEp1skzBxPgmi8yVEJj3yxFgfXtIHEmSLFocX54siBMWm/78oaF852fqF92mKgAvTGy0lkXJUCiMw+ZQmlSQ0IYeE+K3M2KD6P5NytgIE4K7qD5orFburJaImwW4iJjuLXCO5MGN14L5aepqYnbyQUenXch92Xia1AVk6qXeWL/0QuMgyqy7e249zH+o+BWM0BJ5yNrX5jCV5Wub5EzpNJBpfYbGouTFNjv0qEqQQwCvetq7aFjcMpCuKkdNXMLARBFlgMhPgviJSJVmR8jE9+W2vxpK6y8U2zGPbt2ESgNZbVQvSVksPFhU8Udg8QNaLu+4ayyTclmNq/ldCnYFpiwfY3EC8NbwOigbNsfHGbp9XrKhCfMPcHWDzcb8BjXV/WohCo2dvYUoM4xORutYUxxiCmXqsKAFLpq7uQdqwn6zl60pMdkySvXnc/okpRq6zqiJHDhLPIeA53NWczueGtKP1FedbdWzp63dnJi7ntZfNi1id2l2lNIWm6UpLuE0Q1z8cfIhndgqozjT8NzvUCqMluT5valEys6YE76FdtG9LUwDldFAZxS/7L9HMIAtMR+YJWXTKcGBtyECnSfDKeQfnWPelXFf87Cibj4EAUEjkP3lTMP14hjqHVsjOOCoImrWweDAKJOJJTE8iWohwtSOnjZUxChMOcKAD9lFg9hajgVbZYSEwRNCx4QC7s6V5+rBV7HR2x+SLdaDm/2/RSY1uldykrWaWeKERgVjjehO5CXWCMRF+YQNC7/2w9c7/AkMtWkHH3NiJdN1cIvHjqTm2Yz1CJuTHYJJqSVpeOA+A40KkgD1o/wyMkfIjXnTPViaAVWP5rjIFX4gRsecSWpetBR/v60ILLi2m1eWYOMvRtjzII1rh4UI0O7P8GWWNH3aUC5jD5XqT4YstoPTv+TBtby6rM81w/P1cMLX5pyuh26bTcgi7jqK1zI=';const _IH='c89a44e212418a2a17b5554d6a3e4957d608535643f850247d674a8c99941056';let _src;

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
