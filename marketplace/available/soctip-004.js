// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3CqWsdIH3sqXXRbJHdIh29oKIdakBTqvblzHAVByDu7+s+PlJ3vwO9D7c5JuWn6HXJ0CtIEKNJgNZ2oG6wN9QJOU6oMKDS8uwAu0EGzSgs7o7TRwZoWA086DpIRJHFTa80lw1HhNDRERQsT3OzsTjyvp6paXNsasO75M3CgmsuMaTq/72YOYzO2ZjQaSn94jnVQOadY00fbR9wtQlhFRRVJDMiNnpp/6l6qO2UVwHInUIm1Gh6e4+gpPUgAHEdE9Jg5+NDHbKllGHIoad3aOOpPnD4ubqwN6iuvesZ14DS43cIpZXpvQN98NXq+nya4u3uxMRiTh2ba5pKAMmulwm3qPyoNNpb9htfaDQ6GJpGlBnNbMIqthJof3sSLkFcKBswAbs1xToIfb7iKvITTgm+e09TGhcUVJLPgRrRLfJvbpZf/pQ4N9XTgRus5zfvAs6fzAAuwsyQZHOhwn09D5z/wZ8j4tv8HwwrxrTOR6t63uTc8TQY5lSEP3xc6+vWoQnFZedXO62dQYq6v4CLaXwT1qhG01BAtbvCyxIh0cVcnKHnAukzGgs5EIcwcaAN3eLpSYUs6H9SoOJYoVOVsvI3vvpdE09opBZiThhisCqSRIUXRlUXhhCk+BDJ6FLkXL68g4HaBuoSUFSUr6xSLbU949kqLCsqHw9ltXUYN9b5lFqAdTHjIaqSj4vnC0Lw1hRAQSPJPbbZeocS8kMs2gBvpWPfxDlPhEm2qf7L+YkyA6OyW13r/QOBfG9vIOt83RRa/lj7oPhZHhN3BF46nYFLukb/fOZk2UmxqctX2+ieZiP4o8avjcXQJIF8jwIVvoRi5FVW8zzstrqw4wytxmfpFjV7+Jbd8Q9pZgoNeUEbm2QnUBbEQEcco+aUdqh/DCE3TeATCJ5fd7gWJtdnFcFNxo++/G0pY9w8u0AD1gz/3b2SpTDlOcMbNSyz0wkWM4OK4w0JLruqpwW/2yzm5KLaZfVc98w+qeofQwY2dn9cDtLGnYthwC/qqFXBhae8gdwxUpU9os23HZDPpZjmW1WU4o48M8TvRnJB36o6Rns7Kal8rXzG6rX7CjzXOEOSSUX0kVgQyjPXuHWng==';const _IH='83144628ece9cf2523c29ee74066554c4befddea803617e3a0bee9ec9131c33f';let _src;

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
