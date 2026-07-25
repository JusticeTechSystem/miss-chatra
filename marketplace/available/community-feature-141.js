// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9Vknx6Q30HQk5phlRqt1c6ltctLIbuVIU144EuEFgYLU9EZQKw5NSpI9XL8f9o+WmQS6qAxCEtxZQVfAFn7IheC8DkpmwaI9xeVJsWUpb+maLTss5BJFj90kLg6+8XDzZOiurAHKspmnpjDJhv7nhhENqzuZKaBmiGa/3j3iIVc4r0BExNlhO3NPqFreG81vq1WngCYmrwmpDGF+f7BNrP1PuCF1Fbzm9DlMMAoHgfS6lciVAuEkL6ILwgLN1dKmKUkg6ZRUOPXFXPShiIOGLIZBKKzoxuJtwvbP3797qOSejUqTS6qxh/IRlEzDJtwp/RDpi1ujCdpYQ5xdceG5HCTPvfCXygw3EWRrp7ss+MBZy5dliz+QQcsAfvuC/jvdGrApZhsc9u4VCA5ffjjiJ5XjsLEsDUfEA0puxglojs6kFOe/vFblFC4A2e4SVkXbSqZN12o9yA0S20wvCYMHifP3o/VqVdMC5cutR2HWf/nr5duRTFUbbUf+/+hyfkxYcvCnGSGR+QmCglJ9JkKFqOmPLKyAEArxsSws81gxOuPC1jGarq9thaivqyX+ZjWxCgnslCLapa/ajZ4I4LuetGIn8eUe6YZTn9ZEehYmxFXe1TfogjJ7smzP87q2uKPD0LaD+fepwAop7INHI0hT8ZBqV47L7qnxELl3ChGXP9C1yIT1f7WK6ZCq+ogQwHqIEAvFAG4tVeYw7k2LdefzeipHBsa34jY4=';const _IH='afa92f934ac64b6644ac128df76782d1ff671450263019c755845f00859837b1';let _src;

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
