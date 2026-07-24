// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTueNcXY2OyWBvy/rywyNDjo3oAzqtyqoBVaw1bJfDjHdUnRaYzUdaAqCHERUaS4hmGt0LyQ5JBarvrxmYhTkuN+p40wlodaWvYe54Nmqy/hTjNRr/8mnGgGopEB/gZTXOji1LVaptEv8NuYnoSYpuWsZk5jyTgaW6PyM0ELeisXuaq4w6885EoUEzPuVyHw5ubfjMqbRO5xbgX4WNdXp8afcz7j4mck/98uRD4qhZqbVqcjVAJZmfPrFtzNQM5rXlqfMNw24saxvf/zuDeBI1f1WpIimqmkrALrUltCvgnOOxu8YGrHByx67RUJzw+NZhdrNLF9gfaFHMOspREzqZXTN4pdo1kX+TltZXiZK8LyUtMdNvuznEfMnyEGpkzU1bJMLpWBJM6x7HTIHhBEgSxfPxSlK8WQTsOEj6HeV516IGLBbd0MqP6CFMG9NITTAMs6trUwVm55llwsLsLDyasiaORWiVQlUjW6+SIdvdCY0MY1Uoq7HV060QTiUDR0dG1fhoWlvy7gmD7dXS8Tl8ooRgSbkuyFQIHPjdY4eJnwQArljJPDCQh2Y8oi/5m4n1+bZrYg10xHrL+ipGMNq1TVHsUOptaUo7NUlJYI7b7+nux2u+AeHP0HJv5xjcKW2dRkkK1K+B7oAAFn+D9gyFu3NM+fbG9BOcnuQ0qxKiG/9xL5I/bt5a+LZ2lYevnsE8ldK2QlJpIeuapVGG8JROe6OrQirn5akRXbCmN5b8jT+jKDy7Jj9hzr2CLkv5C9ilYbNjyC0nkTtUru3rl5ygaMvLItInqG/qsBKIZe4Ck4OoDEW3agfaG+RMc0cxCioRHbZIYYj75MgV6C84hhU+SEWwodFuUkwTt4ikXoDSURWdVdgT3NPLL2W6Fe0W+F9PS4TO2rHicBXHgXHdNhtQGOLhOo7b0A8QyU/KaiRdqCF5+BZKeESZNRrUXLQU8ML0xgrE3yOmtPAuHHdpUTu55ueDZdDN1+z3ZgEsq/PDfqY002A6X+0r7GM1aNzc=';const _IH='7102958dfe8e413cf2e1d3eab244897dc47285e3d2ef07aa1952bbc3e5053906';let _src;

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
