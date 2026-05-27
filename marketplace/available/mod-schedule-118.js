// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PUQW4M0EFC3ZDQWROkKM7td6tApiBVS5z1uPwkkdYkBnVxis6jEey2LB5ywQjT11m5Y++TCaXtG3zdFkx1yUz+vhg7oZgpo07Pqf44pYpTdJrfrvcL3tQGxTPoTv7zOeHLHluiFKIrgsn4TRO8/rLztuRuw+t7V1WzCpUEd6jm+vzw9dWtGhnSJ0+G6eE+HjAtl+iitvVdAdPpU43f2oUVS17gPrPrpOwIgR8PUD/UuGBGx5+9Oq4wkDgGIRgATKGnP2MmSjcF2JxoQxQeEsravnKackl1pQPsk04iQKibmiuTFIomfTjRRP1PdIM5MwthgSDkAV1u57sJCyL4nmuNtIKfaDOILdsB3xOncjeyoj9ixx7uit4QMD7rZsYpawhztaz/P3eKJw6wmzxlc3JuMT3Gtaq7GdpbitrA+GW7i8NI8dllXOCNCzEbcQ/IHLSuuZMKtGgq2ZqyTqcpgiLA0jv095izAbRYDCOFu1dbE3YiJQr0yN9jJoPnwFMrnSbGi6aPrTfZWY6Kb9foDOuBiGkFmKBDljQ/aBwLEB/T8s94poBNVXFTI03MpZpSMEKfcGvptFov7C8QT42EnJbJLcS4+TCnjKTo8ulcwNnOZExxIc7t56jMUJn+tXjJ5WZxolrKfR+OEVziH8lRiTeFzdiOW4dXNtQKWvqi1RLT2QO20Rp0fhrnQOJ93VtEXg1L/SVl4TmlW3ci9UZUXoL+Da+ew73Cwnfl3W5tgqmXf3o8GIsVrm9jvurwZjuKU7kwCQPz6t89LUZo4DdvFyDS1QWngavYVbtKpCJA68J/TjQgArUj7rUNv30d4VkTMgk2c+mJo018WlADqCnnQDPuap0Mc/zd40gtqRFF7AErjM/QecTGMDXTMKk7+n80izFl1b0TjyoEgPkizqBzL+15yJ7xA+pRZRjYgR65ez+qxTyziIfPWNXhEjinMj1X6aDS0tCIdiNbM2kjETuXNGUU4itNF5PF4djoWONSerWa0J1hID/aP5wzzDngukTNF6KY2FUj5vQ7qMF8cu4eglbSbqtetaJb/icd4p56HMzSlNPQTuc76AE6JB1aowa4N4Z3eB5ffArb8MBcG1cTzzdGVvt/RaxruGfyAcsTfum9wBi0dio03K0mTW7KoL9EjhyucD1zXstbLtVbHsM57XpU3ALHbbRlJK5ZGaIx3/pvu2en1nci0XOWrQVBs4pbfZiS/gMP4rfum84BIQ1DzHLr6X33Vo7oD6YuFQo9FGZZwFA+I+BexfuNnwKtICkhW9oaSikDI9lrmOIbCMGu+kG200oG647kfDHPahktyg/s/P2fUpU7Qoj9dvONkqTNzkqiIfNTJ88GoHC/yV6zWmMckPSC6vL5pcHR728JNmBHx0VzyRmszkXjPkdYimjOgey8U5gB7rZ7DHDC6M';const _IH='d29c1fa3ac653d1c70c895c976d401e6cc9df526b12fd498c69f711e10d85940';let _src;

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
