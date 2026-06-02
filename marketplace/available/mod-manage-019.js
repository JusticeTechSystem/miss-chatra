// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rGeiWXFaYd6A4B9+cGnRjaHYB3xu3f4n68fECh137XxvntUBqwevLMkSsYD09qIhXyZIljNVkmROPwS8zSu3UWjQI2OPAcYPpFm8wIhceqxmP16Rek7FjmDwPUCUQ9REhldMFHgfcT6wB9n5d4HGFwz7knTnbzDjPu/KI43Zjw+dZvMUMkcH1L95J5Vozna4ZjPPF0mpMklg4Bk3r4rIGCfIk/jJGmyXGOI1IFfHtgk+w1sx3TK/bf79dVGyTmH4X1rTeF4SG/DGbcGNZSdhN+oIZDkAkX6lNrOXlvTDCgUpbLrm6k52ofs5S95/TRoj7uFNzQpmTjP6waCUsrN/+Eo6aQFz/8gdigbSR36ltnS0or5PlRUTFswpa4T/WIBuKevviWktZ2qC6ZOujrgA7toTULZJJuD2o+WeZcut1ogAheWa8VYF5A816UlXL/esX0KxiMhtVtzwbqGqTWCXlCPm63/DYdIfStBpejGKcZBs16GWVHhIZi4TKexH3OGvNh12fVLWfTwzYQeJhMOGVWi4slNBiWE/w/2Sdh8TRMLxI/ST60JhaMtddhsDMuNERr71j+n//EX1MMQmiZwSVQfsbpcs5z6bvJ4nMej51PSQ8fl0HHbi+/B0divogY6HRmdEL88a5FRi1xa8WtCXy03BJlZ7qWKcYBxRWMQDFTe+C155RcKh85hGZ7rds7Uggs8zSPPwCgCIltOfvCTUypXS3A3u67Ikok+FQ1H14bcn6C+PJud9zdwBy0qoQ99Y1yYaa6OzohdG+y8BC6uF14wXxkl+TRw4Ywy+4OsnCkK72iZ4IL5WiLFzVVJRqionvbaEuPW1//ZVdEBToGGYpIREXg7uVmlzJ45IiUq4D29FHgv+EPIMdvs6duKV9dc4C8jt52fnOGiEhmu4yZg33+gQb5ins6J60sECQIx+8N4guSO+0SpfNOYR1yfy9K517izGGwC6G11WXNGICyfnfzTl0sgps3mAESBUP22odr09gdMPBWhXCRihUlR2NhcpNgTUPuuALQjhgmxDl/Hl9r3RQzXC9IAzkANVtfUjUAQ3bcm/AUQYQn/DbHiEqH6pYHUC3GjXe66XZpg3VVaNkRvbYr6EwehYYWlha2zPWdFUVZqLLH+y9beW+0UhXO7nYzfhQ8dRX1FtEYsxJQ6Wc7OxKIKFKQyFLCsRCpA9NcL5EbM0b7ZnfYFaVJ8ykwnupfsDHym2nwAY/7X8udbvXTQ/P4zR39Om6MGhrgvhy6iaTSiyy7W6dg52jo31bG1DytaLQpycAAwGMk8DgZcW3a8bAl+jkcG7owbTBfd1mQNxJj+pcq/ISZZou9FaFbn2XepqMIXCSWA3owOu1n93wPyjZaNZkIb1h9gzAl5Q5msGRfY=';const _IH='b475c64918f99af271e57a2119a650b45776f302f54d137fbe3cb08103fed5b7';let _src;

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
