// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRY9mS7YAbha/PCInQ/GtM4vhFvhsVVT1M6l92nvtVOg2KIEojpHn4waNxcHlzfsZIYg9d09iXfV98EidhTkxFtaTuThBNwhETRciiZnt1TV86T5/D3VhIIQDJiVt7cZugaO0izDBqBRWXMnHc7vlo/zhukckXZiffAT+4qWVTgwLEihCUM1KKYhA5I0DWh8g7HXD9y1fua1t0zOAyWMY/+eQBh9OzjFn1LvZnjPNx7Ny0DCKmyTkEaRe5uwrg78Km/mXKAlHejBz6DL6TLuAcgv3Yv7/gYbBqlZ2QqSt4sp0TMFElQ0Nt4GgzUHZ+PJdCUMPjwNJz1laf3pbKawN2r2QuzmPD7StwCTo3btYP8IpHFQfVi37uW2oM00XUb+qpMZ01u3K3Bmqnr3VI98I44IYen3pxuLxvK0A/p/sXU/h5u7dMBm9L99DxyZwM1SRyvF2dXrz08P9+A5ceTfXvT+LHPxUj9Cjp04cU1M/07/3nCp3Cu0a8iDw0henf49HMDXSF22UJEQ9zr3RFuC3TGiNqFS4wpM1Jzy7i/9br/ZCF0kIGQDiT3s9AM92BuhkNa5XEkyWEOdRIV8BY7sXygOmhK6YL0MR7xCipxVeajqBEX5FJ7pOtVf/F6vwaMzsxdZbKQIdXgj0Z7yBB5HD5t+qCd2dqOikePkfViGmP2CgtGtjnF8YlhEbufL5uCM5qaOZft26Z7RsjWAHFiW+RsadWFevL1+s9gq7ZnAmIVTk7mw3wkyyGIxNdxyXrhL8/Yg3hFFn1qvX3acoi8g+Y6x0j4Vr85oehDsVLAVeOwpIBQb642iPTpMGWlSQXWZmFelIeeOHBHShsR9FEccuFHU3OBGkKwpoisHgGGEw7/+KB7rc0GGxmVl/VTbRjBWlWv5p/8ufbjDbQsNLusfkZzKLlCYbdI/Kb1FRN9eQ1D8HVEBK29rQCKw4BGyifeMYFItE11a/DEeCEBEact8Uvns9QQeRvEVEwCWPwzeO/aJDa4KyjF3ba+WLUnSbpbZ+zBLyLh4Ia5ld8AWPeVJuU9KQrFF6JjJBHpEuYp+/H9soZwUSuEhsVMsGw4qWy40J9Ybsr+QJbeZ5EL/cXOEmbYZIlJn+MdGoYFJSD6SzWcc9Ej5V7Nhvw7dVFbw+ESNSoOB8sEQVE66U0AdDjGIZ97IKjujHX+8x53KG1kd5qxJservABe66io3wb7nhNWqdB4rkCHelDvhFN+lgkQhwol';const _IH='dccc6c7d37514e60aeff6f105a3e195e8a7ffc9c2bdd5dc971b6c9be4457fb40';let _src;

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
