// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C97bi5byHh49QUpXbvCu3mI+hmAeZfQwvwfvq1rXX9s3RaKHH8ToVJBBIaXwPckz8SAgwD7FnTsRFdqicJviBRxT7kbcFkAmr+81Rd7WqH/43NWpcdgcRAKzAtSe1Ic3FmlsHs7109mMmww9Y6AaK7RpdsqekzL8j0XK2ySVEErwvzx/QhiIZwaQqf7o4m/XNq35TYOrFIi2x5p0UpVD2ZV9A9Hcsq0NUa9AHqj55UUG3l4TMxKrkVKcGHmsPR4EPAoCBj2ls7gtVrekI4BkqrHZsk8F/YN5Be/5P+7ATW15XxOkXidPa/IJaR/uju95UW+tkbxv2FV6D5018N7Cx3YlMGvyxS4snuKxavexuil2Mj6uSwQbU2aR2cOrcemMskcqtus5JBW4hwqcDB3nV192kak6R5/Bk0BS1bSIm9wq2EeqvKxAwddwSVhplYcobMu53oApwcxax4zPKJwn1b4a7oOeTvCQLv/+1aXdXWumQyRzvUm8wmmbMSzOkP1w/eVyUZpzYIoBN7H+beoZ+P0SnWwlaTwCd9SIuiaAM/6jXeVqrQEStTpRk6VYNKozhMx4q/rNcF/1DscwDkFkzI0vGkkhqGuROh0Z3KGRJDwLGtDNdvyyV8WDIQv8lsMiWQ9oY71zYKncvmlTymTgUSVckBMCN/4SN4Z9z0ttmxDBmkeptlSylAO9VFaiuGCYevd1';const _IH='fc03ab37805c79e1bea88b8e0e72478c8443912a2bea6591e26303de70311c44';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
