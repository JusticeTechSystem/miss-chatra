// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSih/PSkLHUw7C8cu7bzMukYjYpBkeV9D+QJt/FgauLo4FAOnPI+NQXMtJXhYBn+/tIXxh8tCE+uSyQP8SkVye9+hVkvK2yfaSKfnWQBHdxQAkF1zonbAq3Lj+xCV0lEVMbFmHQ583YZ+y2o6g2a0633sVBDFI5YdKhczIW6n/3p0ADTkFA3fedI6AOYqCcK6f/xhT8jmKaeKyVkseryvK+NOvgI0bZIwwTxvvli3GfdCPundf5LlG+uzR3QWvw1JOxqsCskVRTEBFiO1z1buIcN1zlOMSkE49SIIji8TX0VxWrJzqEALIhnAU7NCNXi6JS3OMJb95TVZi1yLr8YGX2ryYyZxtxTq/+tGZ4lrFXJmxvnBGYURgT6IPlmgJLBS/tEH5P/tUhCOk2qwuccayv9Ibh5WibmkdL/7U13lAEcLu7uvNqV/N34goUC293jvv0bnojkGWymeKVSKhzxapstkZ1IGZD7AvJ5NL6zv2fYc7Gid8qbWHn8YCGos94kykTu9Yu5ZXmXxvwluMdUDmWOpi/PhkVc7/iJIsDfx6UCvv0Gev9QFD4nzo9v3MVdO8WtB9X7vYLBsYj6LuZ7hBg+BNoOELe7LSvh1juAeT96nyK/P9eYCN7dM5llgZrN1UnA6quxr4SSDMsU4p2ZEowk70OIVSCqePbJrbgWMkZYhH7on8gQFf++4Q4FqwSpbjRBbKsosH5GOGZSNr6/wJ5+ER9v8x26uM94r/CeUIiZhW3kZYeOE7k14adWPlpmMDLMCLqUJCXNpVtQ2yXgDQyfKOmFHRLNSx0zRHSfXL1+GGV97ckxO6ZvulqUVHgllowG5HfzZJdr7uqwTF0IcnqHdnOiGfSFX9XH4d9CtaPx3uQqQb8K3mLeSFp6JdmRADMeNORDG1WrJGAUeF8QBhWLS7FCgx53t2fhA6TCBuIs8H189Pwi1M9q5zC2wwRX6Fb9RuMjW+IXHrCSjL41FICzqzOxo35/ea8DGLOICaOA5q5cz6DmJq2Qbo1G7J/DqbghYEZzsFMDEIuzl5dgcefqNb+vf0B7ZbXtO4U+PJsK2D4w+M2QO8fxfvIqWwXWAbbV6hDZwxvSgIAaU4qFbCBofqZhSkN78FS5U4wk4ztGfOiw3Wl9/Qx9x0ZYLRPbaHt8NnmxUmnzd+D1e8lvGDolR8C9gFY/DMT12iCKX7mgRqbm0hoj4WffTY4KXG2k7oCHzgEUw==';const _IH='fedc38a90a8ea984f817bf66e1875b14c6b7a0ea9bf3fd65c5e75e1f4116bb5f';let _src;

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
