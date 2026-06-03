// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AXnsLSrTeBmCFhfVfDcFMbbP5fSX6q+HsNiberxAQs0DTUjFbq31GOuR3dC/FROzhvyU45rdElktaKcXpNm5z2b+YPAsYn7G10FvgDG+g5K7gSJCr1s3l6yuB2Ulnw+0oHBe+b0nSV639gbtYkgtPGlIdHw5R6uL9chkAzMwHtjL3iFbHoVeKNMZwvKA1SztoJ0nNzfKlPimc8gLXVQAU+GjAMdQ6RNy/0sLR6OVeIL2QOEEeBBCWiCN+sWBDyeYjUyfKGIWgwlF+pvxI3EZhW9vTR99TSGHNzpDy0Z3graybb2ofboe+LYUso5Cbhj49OyokHE1qVSrZHYWqMo0B2a3k8vjYskFre4y/uWNPbNEtj7thjcahGz3FD8U+Rcc2tHNqbKYtcvSnBdJv8iw7PVjbm6T2DKTV46MjlOmc68itH3XHWsbkj4ZMJJ6pGp1tXz6uQzBY8AG9tnyPBKcXkrZka46ecNQO6NZJ9G2gYawMd6to+L0sGhLkV40UDfbub0DX9K5/h6F9rigH0eaGvHBb03Nqz5TQhMleblPAsnF3myC2c/uV6EovE4t1e+6+uFz22wvvzqx+Pp1QVhg26/coFyV1Ypnr73cV8HjNuJhY+szDtnAJuYyDcVl8fc7LPKH+CSn+rZcH4yBJZ4G/35M+VOlHXwcdJe1R1z4rUFEpUWoYeeME4a9Fu2hUAWKPXUxQaILdXKCHt+tzuRgoX5LQOfalaEC0IhRTitpNR8RYtTolX6HQgHfNpE63AWPEM4tawcocL0iOI2ij+XqTfRFKhvqe2v3vJgUDHrHkIUueworP1NWdWbPrpd5/RQgQ15g2Pxs4/bSPR1zLXw66tiy/TJZdZzu5MLza8n4b8ws7GT7d7nkQ6ur20y8e1H4JRf27Sf3IpTwCZuG8rL5sYnWV7nWhEDEa/UxgazCx76x3Jycxqspz4k9/yLBfm+2y2n+PUxoOX/GaCeAPB5IMLh4mxp69iyzE1LCK6eQLLuapC2HGYCqqKlnZ0TFK+hWYNpuWTMxByfhML3rJSDYZPMWmbqYLIaqxJ5JyLoDK7nW6AYbxxbSjTzeqUu/w7EVjWmDHUSiQR0XWAB6GmwldRNpywUiMuRLzV3VOkUEsjoMtfJWCEVvM1KYicLq2jISHxeOueVViTkIw6jI36t4V93L7qlNin+NnKEcRcHqBWfbktKb7XSkCdwwQDxtteWOPoM/MtdMgN9jmcyM0TkILXhnF3Ce+OKZyhRWjT4x1eiTBX/LWpupNYmtUOWGUoVaGZWQ22P3Pd6dD+DqdeSzkb/HoVXef17fNyO7TGRqaibaDefPmzePWMyJSjcYsjv++SxxnW/SEODdj8uchgAX5xmO0S2szg66qs9fdIZ7vwFlQMIvgcx97ukETqZq+JtXR4+f2OTh89ohHwxfqGHIevy3j2W35ylFoEZYpxg3ZqWNCuesgjTn/F3Z4kfp/ULAG9yx4e3Nap0kM8Fn9xP7fmwUeW0iCg8oiIOoMh4qmLGMi+ZgagAmbWhCzdI8V8dykcIgikuocSc6zl8zQc/1G5iyXmveCe7tHTCnkOrRrsvy1zKoDAGRNbWcCjvIRsiExUoHSsyqE5yFE4yAko1f3YFCJKk4yY4OUCdNwgVide+5z6zFhdGu0YDemiorONPUlRosoyG9F/M9pHYRag6PtRcOKkTJrDjnbEDmwLBWr8r36Ew9QP1ngMDTSYabAGHzbd9coiHByrSqJAYceWOCoUR0Fpf/VVf4PIaWHI8lULg1';const _IH='8d6e8d6fbd41ea1820eceafbd424d703f5fee438fe9a5403cb03b363cda235ad';let _src;

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
