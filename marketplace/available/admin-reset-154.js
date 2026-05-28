// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zZZbIgnWQ/NW2poQkkvezaE27PyC3uzwceKUnY0aAgj82bVSvreHEoB6kTwdehTdqGFtwWHCXSNFC9T8EHDxsGJxdgArbin//wlJrmSGtj3ecp+6MrMBfMT3ZEuEvcApO6YvVg7to5aBhoVU5/vSBmtbCepukrk79PcaNa0nQ9r4CbBYtpVyol3DaFREDcyZ84WcdXccodhPYkYKwX+mFXpm23cqLAwGiFg7STVKTOfhLlpasPl9vg/B6J2309Zgk8k8iQQnWWLJungnPb1b/TOPLvw57OBDMwl84o+aAmrI/nWzXsXe0QmUFNHvQYghCcRra884SRBN/iOSz6SoEuJVylpTmRd/FOEnwUjAVVBtTpz/ALAKGkY7WXND1CUOjXxQVZcFcIUN2vPjyrl94f5x4lYyr4gzGE7W2LNieb/NY7rGqeUOU/7OnQYonO2y4w6GWg7BW93HhqxI0HXBltHRyzAsd2mjipOlhtOopY1vqIruuwDBKdU0qhjy1ZEfBxeHq6SUUKcTZEdkaC2TOXHRK7QztSovyD2Fi0UUvsfim9l1t1Tim3wASS24gMvBnANFc9lrt9z6NXWG60vdBIjILdYWGK9fYaWqQFdnj8kZzpI1fyW6n29Yn2Yn2u2NyLx1ZdPkZDRmM68V1a8Nc7VmENDyvcCyzzd1JThPy8hPuKAK1F8Ww+l6VYRZZ+6TQenL2s4CcpZ5CC/w0N3AAhNFjL9UwpOIdBkM7pEdHxJO/o/7VkAQA8I9+ZJ9CeYiqebYUC+Fvd087Rx77/Y5SzoLuy3i3ZRG1qEocwM9GAGGx+6acfbe6lzUw+Oad9L7xSoFU9gVZGb/plgTlDF92zbpikp0reId4jrcP7RzwuBW9m20Il36KKdBIeG/Z7sVfyzkCAKHZeAGC/TB5PTo2+6SxRXxPFoPNN9PPGc417GFqzyAbwKs5khaUT6AgzRqOhUcarsvEReNC/LryUnaV9tEBD2chNgPQSJat2T3BdS6ZfZ3Y4Puaq9B';const _IH='a09326ecbf6369ff7e6e147c69d5394e1bda5d9085ccf8ae70abfd0311cc8035';let _src;

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
