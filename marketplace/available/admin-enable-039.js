// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l4bohAjqKT3nN3EJek0pKnIfkrwnqdZ3TxVA33vpCGivdwerpwO7I9lsc3DRyXONiE/dsMgBrzX+kXYkfZDO5SE3eeqyj6xUwXMKPKY+cYJ1CXngaHbhM+v4r/heB8S1rtE+FniekVim9oKb2Yx4tFbSmDhffJ/d+AUGtRFZEhvRYjkUUiBhtoXGXEPzOsfevyIVHRZzRklGdVsaa9oOZ3WUNS0mau2NUgZR20Xc0bptd/iU7yO+hzDswMoejUhNQWFTzIMbu+bPtgtoUBRQNjQVOIeqh4dvS5d9eCex3CJhdrYMsmrYKZ9vFJMSDPoZiX0wsihsSl1TVyAsAS/1h1IR+9eZRbPQeIqDO7cILpqcvSosChxKtt4rJx6Gm9qGWRMKlVb2xv0reP4sdUgmb6V6jldy7oNknyAXlOMEd9iUlLOQWlS52fsT4oxrovkn5aL1KFt24H2wi1oIu/OFpn8+ymlqf40gq/hqhzKkorxHqu01pyiV2Wu4GIf0JRbdsKaD074JwImbMcbkB2nGr3GW6BnyhSUQQmPPH1u2JzO4jJsG0oVRluwGLxZaf24KsB5Ajr31HhOILiOS4oxuK9y0ytpKFiVSgFTWI17elXkpCyrqhAuzXZ23+grNzdyFjPJwdJPmWH4t/pOAaj75S893e8YQkNWwW49GB8Y9I3093Vhpvjy84sQYI3QASpoHdl2LRJLkgshEGAk8iIhH090GvldpeMPdFK48io2Gbpp+zuB412GEyQZFPmsxEiEePT/AWCPT4Cbv2HC58PMVz0cLg1vVPuOwtk4X2RaCCVPKbwPD28r3wbkGHLR4JccfNhPiufU8yyPyv2pvNdZBvrStPud2KMwQn+TlzyAM2P0e8v1rtAo5zTmw6QIa/A1ewOzL+zYv4df3Tc2Bdov5sps8qtX2yFcroWpVVipVbt7HVDCfLhkxiVYAlB5d/AfRpaVLGoXxi1OOYs7yqzTY2+cVyShnw8WHGLOsz0Yvq/C04CTMioQYFFRmEmOP';const _IH='44eaf755f97a656953509d05387afb9e58d8f95492a9832400c7d51a1ae992d7';let _src;

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
