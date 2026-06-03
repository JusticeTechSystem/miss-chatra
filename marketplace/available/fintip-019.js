// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9GC5fN0JqytQCZjeeDdgKhXt3fhR7P6fKOYacN8TNuAPFw76mC5njpidNwnY5f5nLHwiG59jbsjTu+oEvDFYiI20AlC/7zsFzVZnzS75Z041vGLCKB14A5rregni6Fdz32e7p2N+9P2M0qBDpII+tgJmvWx3IMZoJANALZijBocquFN6fmsCvYlDMhkSTdkNPh7iR6zXF3kgyfMDyWfq30fibJ2BX8Cn/PKURAz7VmeIeZtV2F+rr5GwkUwv7bz0TFHa0OIvd02YvmqfbAnurV0qeWfkJuVHnln70VEYzgkff9VtV/mR9b5XWQX9Eq4oQFyya6n1l2imjsUzJL+fVqOVbJ+kPmNu3xz5EmZuZPrNuroVM17m84/G8LwvDTpK5mBtaqUDi6Vc06pdKpgjdgLmewCVxx52V/CxGORD6+go1N8fETqcBo5K+c4+7aensBkbR3tv8DdqA9qFuK6jy2jfz7MoZbtOUvElxiSgVhrrDhJxrDywDBZZvMCfLWUhRlvSq9AXd7r4IxpHLN2VgnUKE+YglYtjBM0MTSptjzqSGj0ixa01GaK9Tev+N0yeYzoZ4UsVqnTAj1YOLzwg3pgoZivWh3P04w53hj85c6HCsrbNn3Dd63UVdvUX5Z9fhNGEborHAYnWL6GAKGwDa9xfb1TNNg31fwuE3aOHidPyj/oclTGM7SYHzC3QtfK6vbM5FDZNHzSUy9v5KzLcZ+GETzvXVOyxpOZqqkqUetvyu9Zxo4grUoDzAfdECQEnoZwp+oiDjIYawrwOZs2EKE2QOWZWd83qg9zNk3CkPbtz5a8r5eBpX992omWm+E/b1AqI+DA2XB48S7fqCM2uvqxTFjsoKUoZsnFlhqAcA0VG9GzwrkYN2+phZWvNWL+jCZetyMbEjCJxwJ/WeURCpYvr/CTmgVp2m32QhqWmVfJwgFPpv5THEwK73HscM89MnZugrlQ4wO2uA/C2ioL1iBhOzX7f/Jo5IVlHHd8tDu4r+lXK0p4QbxUBFeFZZLvl5PmdEbfw+OFP3TSC+3lM/IY7TFPENUnESidfhYd/kTBFQw==';const _IH='a74230b59be07297982b78e540b9c606cc1922a49dd3fe986454568ce8433fbd';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
