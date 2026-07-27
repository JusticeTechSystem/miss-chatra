// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUxjUHjNoagbJMFGTXDa20JwrAcmjsPSoFyDixcAxZ7+rPQlgAD+sKExC2lnXQhCTeA5PAlEXJVNeqE2lQXKWU5nhM/BbNHfYhxR1+kp1Mnsv9aR7x94UnqrFU2LA4al5Z1WogVmN/3HhpuTNSa9AqG+PYcNFz/8QHYe+tl7GgwRpVoDTVmVpNDs0BT3QSgZTE7Me/QibgG4LrTKD18PYn7P41OzZm6/RN6DoAZRF6Br+HdxzDre044/RTEjmzjq4cldZy9b+bWKdKeVNa2S3oVOVcfHBnFZdu+hIWX4s+c1e3+0BpyIhgUdRGrkEdSIwhJaM2axN5qa1N/tDAmW68JNKRM67iSeHjdSZ0Jz5xkZYF6K9ugf30BtrCymS0nd5nil3EGz+jLHhAnmqoA+3zKC1+IQqfcqk9hMn6ctuXG6hQRK2bbL0dIuEXZ2GQZ4uH+JS1yq1Y2tKBU8LqS7rUngi5P0Gd8ahQ4uDNHDNkkyZSiN93TB3TVgasRhnN9+GSCmrgjAYvcDiGQp9G1NwFvSYNuqF4zyx3WxoEEsIFiZLTQ15uu13E/qtxVE8jLUsEs+oXgtJd5/A/K0f86A25QW1GLDTPX5jnlHLeCRj3ZhWOiLtgNGgo0Y44ULvsAnjyByL73/ZhVluHcyE1QbitplTG/1DMpqr7V9DUAwG6jJVh4oA34ZKGl+G0j4hVb/rrFatXiR+EiQj4plvJ+zJyDoORjRCdqh3ZIRHxB+f7IO07+Jw2tzzrB3g=';const _IH='e1a5ca77ac800cf31f61f5830be2654fcedbd671daa9c39d61d65468f280760c';let _src;

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
