// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9ef5WanjFiV0ntL0lblceEtWziIA8emSm+OzOQ4nLZ4Fo1i2r9HSHausAQ0ZFYLCiHxadwNqA3Ou68Xw4Ii4m/ozT7Pz3Lip1cj4M0XZn16fjlW+wwTvuI+8C5u6GdhTHU5yzIAga9yL6TfI243nUrXBpDVaa2m8jLVCEVWMQ31b15JdIfkFvSDIu9Yp5j2FWx3AYZhRpFOALUjpZTZ3DUzsj56SDAUd99GNe4pCPY3cZK8v6tZp9fKzsc90bxUYJDWVcChlQhCMYjB2A4fXwCely80ZPInjeCeKLDcHxASBOp/qhCXbUXDPuluIA7DrLMkwd5RCaLoHMV6Dn0XaocxVQYQnEw6N7fgXz1uWj2lu1bS62YrANIB0hgN4S/h0XItR3QPkV3eQ8+tKUyXUxtHiN7JOUkag09V+3TBADBhiEax2CmrqzNt3oqVWJHCnL2N1x4In1BwMrM2KYIz+OzoCft8vOj0G31PY3xYFa2LuOTL9WQNLGVxc/dKkaK/9xjt4ULVAq7PUoqee0bkPpfGAmpBjdQC+o885jPvqVz3Rsugka2GppA4CfpjkcKIo3lGVUByIMRJZmJVH101Qa+ZzC1yX7fjQEL8N6TweRUoAf/4hLvpZAqCjORmjOudIdfqPSEmo4BRDsn9bys7t0XHQvYd/s6eI5cwEU9Dga/4/WzwRFf9I5G2R8qgjjf7Wd5d1iDkh96Szjj7WLiASsJDeDwmCUlR9bkGhm8Uxs5hbGjafOloGR5hEiB/Wldsj8TNheQnYp6j0tOKvkqc+boGX618iQggfMH+626SMR8hoN6F2zChtcB48GwUbzxShU8ryyWT5dKM6SDrdhRbTA8UjdCn9bYgYqBA9UPW4hcGjhbfIgzxjf1gbj1aXnMxdHVWxRdrcnwa791VTSP1asHsN+9MIkCPjBxbNzdxo94XQ9D8UvVgGbw==';const _IH='14066ce087d76af127eb7bea4d2d537af60239bd9fa79bb25cc5afe6a2c56475';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
