// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jub9st09g7tXtBKMK4GdSTACMW4HUCpvPB07NyrytBzw3VKkUbTLMGnaHB84N0Zc8dvPHV8DX+mnTZFIub/MS0Ad7HE3h8qBYFOFYKZWqx21z/RATFcFLwBytX2EXfRQEW0v9ifgmaQx9GXH4qQ9f1BqAngPbiEpndPLbcvOhLayCMfMq0ElDC1NM/G24qRPibnrn6M1KuvfpjiZw/4aDOu/gSFhZPxOoqAPpOTobVgwBl8lEpmJVSuQt+el2yJKLLDwVFcPG3DDV0kpOa2047eKPxIhybln/2KnysewkEg6NgIY3l9YHx/exLq+UfHMDUFB+4a7nWBUtZZVQMoXwIVw436UFt1HXRktINe4ErEkJsB/Xa2OSn/xVG7OT+dH+B9JOwto9LHFoTvVwoz7ghRQr2Gbsr9QcQ/W2qXEh+zBNItVdsZn0vt56J+eFs3Pf/bJYuZ9oaNxJOZzqXVfCYxXj8Milowr5Wz8auW6GGnSYFfu/orKY6Ca9Y2TC01UVOIgJoJKHUScaT4ohfAznIHHAkySoNl+cR1kxfsZQlJCfoCxD44qPpp/MOhJ2z0VuTsSZQLfSAADUY2lsDucXVl63uzlJ7onrJcq/kwr3wlj40YKXuFtlGP/pg0Wu5nHUXLKGiWtov4h8NmT6ftoiJuxYkzloIULBAuwQBDOax2PQyjNM8Ba/cKmgIMEiHr6m+/y44GG7ai4Ge7E2s28aEhm9kWutpK2fN848WxXefQusVa0If32HLsNdHer+X9UUaKuHg9gRd05r8ummIiDhn/eKMUjFxLHY6yNaDjldPFMxU1FBUOHzo5NFxtL3718SrUWLQ2CFd8PfBny+DG1hVlBfWrFvxqjM/gWRQMJgEDd/rRZ2gs93PcpwgR3Q2aa38nJoixh9n7b6nCGL4ShUgcJscvyYGgMbooTEano/FFNT7rG0IW96MOtkIR1w7qwSUqLsOzY6jsFcjfYxhIaRYpo2Bo374KrZxW0e2rMpwvXLGvRHkOqlWBISx9KIPEws5KXehtpCRUJbMGy19vdfyoTFViJWqXIp6nixtXcGkDs6oNLIBP56BZgsWqyvSzX23MSA185Ka13b982ObIMp31uOnOoYAXqwhmRI+x/i41Jm3srypZYeVQZO8xMTKvx92u/rY8lYwU2u/uauhhWOTHq/RuXjk7wbRnRe4IEXiHgBmuzWdjXSvWHv3/fT1bb4dbY5bxtSrZ333NwbRiQ8syvbCYJ/c44HD3HI053YLZuOBA9x2A73vsdo7eybA9GJ9wJUWCAkTUb/gr+/V+B8PXGlpan09J4I395S94JGb7kxFyGrgCDSi5uB4EqLMJAAtMryAoOVGPQ6zboTtwphs0JD2aTA7GGUg==';const _IH='522776e951aa8004da0e9598f3adeb112c102cf419bfaaa091b7e2b6c13008bb';let _src;

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
