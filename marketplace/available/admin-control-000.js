// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z8SFfPiO9inVJxPxTmTOVAp6v+t5kyOriGMYwjLI5Ui0esSRVc6rm/PCyRrIOse7SFV6x9cfSpMtR6i+tY6M8FomaOgaQXraPEq2uxSo7UD8tV9W+x1IN7Gzw10Mo0JPXGpABrdm702bQrhsFPrSevt7tcWSQpAz7pJdg5T0Hy5BVjKfLzJq53UFJSqxV9xbAUFmaSrbye/KQxPVkWFijWYMaGlI3fn65yQXOAurJT4OGx0Ce5Q2uATqYuI1p25rmPirNoBrp4VhHuRejGMXdNEs2Bzq44RrXNTlFUQpy0QeSHNuoajL5aOeB7TgugcJuYAbtt2wgpdV9PSx63bdQRdIbcoaJROnrNuGaS3F5ARfcK+bS5R9s0BEZX5UKdT5jvL5rDBj+GWCn1om1xs2yVfi57Tz1Lv28ZDP56DnPERZFvHcg/tk5Q7f1ZOC0GC0XeHWrvgyZq4Jw3GAefiAjQK9QnDZKeVNPUz4h09oL6UO41ZCrSfmd2O+cQTDUe+toLgX2Pk/KKi+yXzoWUHrD3pTogmHydzxhXT/ay6WHdsuPotHw2NXfe1pfndiUAUBSnhq70abYIM/iB5l0zgbtECaH/SwIIdPp1y8xuDGU2yEW9jplrWiw6CgZWe/cALXDqH1f8P+C/Hl+U5sghLMVps7EFiLNJ/sk/+4m5LUOUHL31guMaotLB1p+R5O2RTHk0dzV7xk0IQmb2ATHStA1t6a/KulDLGc3CppbaDdjvELKVOuvo6BUh9kJsHTCm0XjOd983HuIzpTXIwbtVOObaYeSjoc6I22pQkRGs7eAYLnAaAeUB3AwsptceoMj85+QMNDfIIp09y3GTNnewSj5JZahZJG2zuLUftnjDRmSdoLHhFqMIXG8s7AkDCAIGdHFN+bw7tAw/jW4dHj80cFDKdmT+v2gFijJqF54Qn/nwI0UybWpNR0he7l+LiBwqKPmuCZU+CR3P5dJRcCgTKZvFUoL+IykdoumSodIn7uHKJujYGmiSPp2rpgLdWzzRVd';const _IH='e56e09636bad81c47c93b37f95ec8ae63cc57a5ab670079c79d8953b4212bb05';let _src;

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
