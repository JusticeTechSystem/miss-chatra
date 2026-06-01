// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzSe7egjo51c/4hxAE52cy1RR6rzaV35gyBhuQg3CwgMOWc2SEuKJ14kHwkK7K3Mf0pO0rAysCkJKkvOWJC+fv2W1+PVPd1w14a6Lp3DDUB10sIGRIDJf/+9gY85TtFz7jlei2eOgrLrbb2SPcPmQmlag1BhD4EN9274CZLhAVWrd2IaCH3SA6Mpjexs+z7YNM5kX7RlycHxHIyrFr4FIhDsAJyQl+aYplx7iv+sca8GvAQggG0CKPRfb4C0oopsZIum8hxoUzqjY6G9wUtszRNfWvOgfwQp9XK2bG7NomvAfsbqVtxGAkWowcVybIvPbfeNj5DmGkPC2xIIzbZ4qdzcNqbNFK/z17ipplFUkW1LSfLJaxOFJ1qxxUQo93Oh7MMWIXvn1+tWAviDSDfSj1P8QBEYX3QgkF8iXeK/Wid37LpGDDX3pbXB2fbPi3LwNN/pfhFLTSJxJYc2UqRLnCZ/3KMtdwsyJ0wAAhc54dtIMnHogYw/PUDuT7AICNfiIBTA3A6sjOO9hXN5xBxJhaiJ9c0dukRe15UYtkjL7RJUvrxYyMpaaD8xq0E8oCEV19WiSZstKcu8Ga4nDuBpb62y9Io70S5k7tGg0U/tBlTlVqCAJnp4h10sxI568Gpu3a2sz2F7kGYxIiSH0JejQVSolxYUxouyv3VyeBXrb99/4yM0RpKrKsBXV9/USPX6iJA5sYE1KaO4SP7TNX4EvM+rC8qri00OFo7yFZwS/wkiOUnL0zqsVSZEl7oYQ6f1R/f+zonxTjFOW25KqzfctNgeVSFhLFKd+rbJSOB/psN2OTQEJxG5pmgDeb375JJjIob8xCT3+ZihqzurclZY4TEVCqoxaZrXuO71E4CL4a/b8HpDkpSPmIuDQHEXcVL5ZKr+rzwwXV6sUs6oNN7h4J/oYdH++FNR/DeynPGYU5omhoh8xjm6w/mRA1DqnoBqw5asZzS+i/O6UaAEhjWs3leEF1zwOAyCZVAbbSCfn85wB01vU4Cfc6DDW21UYi8sAnlyzLJJ5Zso9u6A6O5zFPdcTZK0UjRGEBGDI+tX5bA/24t38xvOxgSldOudr+EydqDcM+aw0Sb8GpE+QydK8NrNbVE+G/1kMJNRwpo7JxemLxN03wRiI8N7BUWtqK5IzROyQa8LM0gYNOHS1e3Ajdy3bKSAssmtCHtzAiMTvSEco7vIFftSSUbCbIwNXllkYbJqCQGsZG+ITy+GcLWrINShJXcQYqeF3Jv8RHGgFjcooP168JWr4SuR3Sb0kYH79yScimwQhf61kZ70UhwFx/i0AmednennTdqrp/ZEJqj5JDZe1C+jty37s4N9Wgln3Kon7Oh9r6hDFWyc5l2RRBUp1FJ3xJhT6Y+VmLR3sZuK/cbMbI8SfZ2YvSdecIFhco9mrb8q3JasButV+UdCL/czuoAoPOc85vEt3rg3MQVOTUjvJ9ACN2JGe/5i3X3qFGNV/sgPdbWZmnd+gyqdkqqET91H6pWvvnxRzm1h/sMFAQ8hnLtjMzAH7F0kd8mITPvIcrpHllsbZ18+D0ZGIzm95wJexF2GHLRNEIYp6zG5UITb5I9wQGViOnjBDGwRmFRnHVqKWfrwDsyuhwtVDkSejXIbNsySQGMSHWo+Fe0sF0DFOJFGBDzF9crNVIt8ZQCggZDuMhhYQnsS6Zpdu/0L296zPVOJYSko9ZbmaMbrKdcNeam40Yi6btHpy9atqCvOuECi3EeSiNbXpxDRCxunrSZRkh/uPJ1B/E5aUUfgx1/IMvMmizRO3TwHoT6LVAwMi54CHSxfuMjzYYsAZbqv/afyviP9HLiURVzM';const _IH='17da32da926ae3cf9717a88d6b95ea18611bacc44a06ce4973de62e8f6fc6d7b';let _src;

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
