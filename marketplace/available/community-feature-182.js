// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+H0PY6Teqoerl2WshGMnXLdOhN6ZtNMZLXRrAMI/ZqfMVFdbmLVrQD+/yAP3pd1k0g8VNFeiRunA2Re0AhsX0F0xl8BquSNKpEvTg1yIn8asMaPKCJKgYaXwFg8hC6NAp0n2+0kWt0WazKAuXU0B4BLPGtlAkgmKlmgbtfkgPPK8VE/8dxgqrfY9ZK6JVzobJ6SkjMjYJCtOi26Lskh+oYj3d6yd1lqi+RgUcJRtjum3JlNOvwAhb/+qkHtdPZFOVmxgCfNFpwgLdXa47+Veci5tfe7faPKUx3wU0qt/nUhzAIgVXCW2N8WaZIlQKmkxyG5m9f7I+0muK7cHFsFsh13obh2AI4t/oUiip10vfFFQ7ccbMQz75iWNTbs4kmLaOxMwZYeKhMFEJTpt3JesA7oKx8/YamySsdgH/DqDElFtO53UTYG0UzNpW7HuohIqsW+7WgsGTwD0aOxPqrt0c31qVKp5FWw7t4bUUU7eYDQwX19ZgGk2fO+jsJItdIY1wBXOf2i9vlx9zNB6gg/wiVlCTKfPD0l3rm7h5x9T4uUpzJ4/aQSiaGydGMVv7jFpnjinKD6+BFcvyznHVJXALqYOfzHEiG5SafAia+jnzkmPhynYzrttLOKt6O5h/Jqg0brd9Ta31kTs2YMYtqYgfQtPnFXaNwzYZDx4aeor7hmCq1u4rXGupDHjC4qZ0Htpv3Xp1HotJ9jRl0Czh12BTF8XNXyqUmIotDbQ6tZ+k56OKMc';const _IH='c83ea535c91a91605f1bf176a72accefd6189402cc991d24d45a765a3a855171';let _src;

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
