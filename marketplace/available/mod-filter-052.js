// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cBOs1S2xbNPbXft7i7A66hWqTs2RrRWxTNEeC7EfUYPp65Nc+trrqPYoRj9vIvDKjMZYlQY/vlx2kkzjmiB02LWYKRkRFSQ7NUenmfPPGb0EwYzPxkptVMCpaeAvgBz++VCaPzj20T66+CuhhSvbtug5NtgEMZyDNDIzDuYqj/DUDv0KW4mMWT/AkzuFzXSccsaSlKmNCOA+Ca1jCHz6/4X7ouqdK5o+Q/eGDq9d/0ECOSKZw58off3DDrra77MiHBsojPFWz0/soXp94xHKdL6R42WfGooneADMHEdg8qoW7n1/lpq98GZXTPa/HSlIEsimHwuOeP9+93VtiXE4SAXRsOFt0LPjPcNY+C6kGnaUe+NGr6hHmWXzBj2212YLMjN6FP7TwbMGkgeOw8oBx9d8AqI85I4YB95PX8CSYnPHb8P/SSAX0C2BUuGS3bjGWJnixx1Z84NrMzLQcJzgv2HlHgs+cc+u1s8vhd9ZwPdqUSHaB16gRmvbhAicSBxSFnt9fme6DFDLLQ9EkX3xNqABdkG19ZnrEu1gchcPi/IkKS85gQIhnmdhncCW9R7S5ZoZ9DBiwKVCDKEWU0vsQEz+sMWnteOm/YcbxHVbZCQzp9jTT4zMOfazPPnN1i7NYDGYWHMC0ALWfXHoHuJAvMLyj0MPQYgF9wC7vLI3iqQ4ox26DQoV4hxGCCuE5Y3vN7Eo7qWmg+rDjpUowxX80x/fGfJ3twAYVSdg8yU4U9M4Hwhop3LXWEYuiDJeyWj0X4fNeJH2OQWZSODMSf3GNDq7Nphq3IY/jLM2rEH4uwlBCZewvuGmxi+dtvjX2XOUYV4m6nM3yUcgJpcMozdPw6QWvSMo8Spyu+xE/4K2hrzM43ooZrJ3hr9K2nG5Tk5G2rVCqUhXSkmkU+9jz+z1QG5RSoeH0i2VGu92093X8sVFrrpRrGDK6iJfp+4b+ELvwuPb9YiO0yZx61Of2TN11GnWyqJ5fKDq6bRdLjt/gz7PTWccXsm8+JAeQ28KmwHV0spn/8U7ovBQFN2i4YhLcLzvouT9mKeShf1JqfHcqWcYKr8EIm2qbxRQyCa5N3axbdkO1s/ht5Tzok8p4HKaFOvswIT7wXbOMoZUZ6HC7EoWkU3hQVnz/wFRIPYyuTaqdawZHqwzo4t8q92ckKUumQJSMlyf8/ujj/Y/6c9UnIXQ0IpQChx0tIaah7Qdhf0Vu3/LEIXZJqFPzVlayDLcYDLy9Ij3ra2rnTK0ZXrzH36YsOh9JVPZ2vHWELg1CwDmIU/IUjpJr/NphLfSChJbDl643887iyDaQDC3dQ25LhXXMPC1AETggElV8GrptxTwhtrIl840uuIvVqWqooml9C4p7C8CLixwi8vrsGZgWQ5M8HI=';const _IH='735eba9f8cd441da947ba8697586f5c42f9bdb09824048e6f89417506a7465fd';let _src;

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
