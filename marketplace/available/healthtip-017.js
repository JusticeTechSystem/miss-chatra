// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uMYHigZ357/GTxiQ0siK5ztGRIfEv7N2T+ktnzlXe4R96Ym72NBuA/L5AigE/WXGvHB6yFV/ADdKkrx6i4PzEx5DYuoj0AVJVUl4k4spo0Ra55YDwnOAnfPqrzj+oeDmh77+VWesOVjEtpC8TiATNeOe29TlDuHvAXQevfToW/ytTxiYE23rYFowII9YzOQE52Ck7droRPRViTKQ0BhJL9NvoJ+Uo4Ff6LBkkHxyqr5qR2D4vEgZOQs0kTU/SpropH5Tn1mlD8OVnjupzn8j1fiBUpn65B2LJpYyMnZuQfPBYxiIxKI2cnDB/XcghG5X1ZdZstqy4yeBUh3QZxw/RvrxNgcwxHZz1a6Dajp1IhLDWI/hznQYThOmcFwodY/GSQ+ZLb+NznIbCjpFlVLyJRKJhHRHXWAZet97OvuFhBd0R0wjSlmJU5dR0wrhygm6k3XcetyXFEDgYYdVZYT0aXvkrjZnXHjY5aNV9kAXGa0giGHbYfPhZnnKgg9BvnEHBSkgBEzKCMs1JnYQhweZBpPMXDFIbPJNPREcmkjOjfAqXYYpRJmVs5hO2JqhZ+4KV5E5IkwqY1irx424QIyAsWOJZxbcJ0Ex6vQS0TRDAnf9TMV++2kwX2uSEabbPAt/fhzL5d/l86ytQ0Oa29pZu1efF/iUNVdoFIDEUJ4nkdIDkbeUAECMffdTuQQCCA453h1ijPYgVmh6nHm2veso6nyuJfh3dpJECdd/1KLM7+8vEtRcLdOXrDdVJMR7kUTxLhfGsZqJTGp6H/Z7cfI5XEXxWgC5YWull8lXS/te/hWITXtEMRWVUSMQpS9YAv0SusJb2iKuF2tcM/rk04vfaViAf7vg6PxSG3K5CUxMuh1/Fje2N+CzOQWVP37SHKu+c/MZlf2X3eeGVVUrPiLRBeiU9Uhw5v3OARZ1a4p30qA6HHeeuBVQYmhO0Ho=';const _IH='1c33a4f4ac36519cbd3e5f38c57451fd848694fe140ebf4bb16f96488960aa2f';let _src;

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
