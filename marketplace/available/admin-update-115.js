// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x0UXwFexiGfqPO116sLL++9xrdKR4oARULy75aMStlurxgPvq8S4+UMSz2646J1cuH6mCHD7neTniz8JDDQacFPvGhsrkvcgVYlQbE4Fk9Vi6qWE1JW/Ul7zFTTihVi3t8Ruo5iKyXlCaJLj7XZZFN7C1EFs7AlA92vvMolpm8I1uDEj9jzInIK6D8PT+1211R0M+ChW4a9jkTrQRypozLkBTSLl5zSPpaoDBeywDoyWH+wtKPu3XG6GYvCyy0pTn2ZJZcqlRvdV0A0LQ8/W8AZg+8zaq1AhaqKhEFijOfsm7ftgAPybx/0Ipq8GpsBfLVW8FgBGVftFSyJJkRn45ubgt9kEIPj4WyxXTVkVJDDeWb4iIfbPEkaHfSMFV/WgWNDsDNXOCrcYnz8golJNzWLs2a9MvKIkQyFAQ1jrnA5Wl/LpTAfrNBtkLSkFKuDWK3bZCP8mhAE/+YJvUkMXkzUeH4GceLzYRUykQIcwBiVyrKOoydGtIHZdZFWHRRb11xdJ+JDghpeMswrg07+WtfL0AdxXVchuR3+88qpXhs/cGdtmWhBAfnUV7UjgkXao7EiLD88SSog0HByVor7wL9dHlGMzikIfxtaFABjhqi6Jl7VhJ5rDFgx6OmzIEirWrS7BsXeMQjH49slheAxr9+DKP2u/i7pXqUfBOrNV3b4gcwjUCSRxjTeCkfxcBdLOX//9aKAagSNcNikSDjq4ILCHJ7wO9OaF4sK9a2DwDIcqH3HtcyDMrFusoJxONxaQYEiyXd8XdXXjbvktBm7UkIORLvqtZH/W2IDo0Y8vse+tgLQDNZuyYHQwYuXqtUBOhmLq9/LvX50Wfym4mDVmxf61U/WMfGBesm134vulfrlI5ObAyW7y6uNWl535cvxNveWk5vx+vN3yEYtl3sZlg+4RmmKvJIRcs4HTziX2FDsHAQcJlZsrKmk7ehnOt3N0gzNHPRimplWlGtfRYyFNn6oAZUkDx/HMEA63k5WSQPDq+eJhAnKIkab1Gb9IfAPmSg==';const _IH='f64278a4838c0bcee380bab71e5dccb7b3f06be7c35d316973463bddb0a03b70';let _src;

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
