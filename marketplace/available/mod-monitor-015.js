// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiR4NhGy9Q1eNHYzu3W/hD48Yj3g+re9dHnsGceubLZg/vWMymoT6AxAHYcYV/qSk+FeIx8+i1SsINHAhpX+sGyLAXJZbs8ut+Wtk879hGIVvk6WPZjPrYAuqidnYsoAXSBYR7cuS3xFKJ8yzBsrwtvV6cqGPGfvUaXgP4Q7NyFZQBnfvXemu/+mBVVMfprQF0Xg2bkXIZbRmGMvTq2xan3aSdayQY7SytOUnXM+InI1G/6m9RikOwJSZZaJOKNX6hgtIyWhoP9fcrSOOEv/hOXD81p944EPx0JOGwiKBi8w690GiZ8Qku+iYMUEQGGTi7SF6CtY1Vu+TomaTXenpkmzmwgTg7V0UiEiVmjJgiwu5UjNEfVFlXquBrDbdhwJ0toWdH8cw4oYo5BVCzpYeG8Fgp17vVVplqYHRO+kEpHQRv8f/4KGEIoYQ1lIMhgU6DQ+z+H4R1fi6YcF/P5SlAFIIkDGV9701poupfUWRQwfb7Zq3Tp/79MzDUQNJhghKVoPjcet1z/VmHr2Cf9bIViXvqig6B4hJcgPqjrGBhESJ3cvTFC8fghh8u1sFKaW+8Jdd8qtdGtTA68rI9u5ShGQYgdTk/1V5/aTeeL9/DfpH9FaGVF8L3g7wkWZs9fAcrDy5FsvsRavHoOBVZzduwmujt67qZcLc1p6cxcLP9HEkxishE6pHMUBuXmTD+klUDXe3tvGv3/2Jf3UdzJJ3nMoVGcb4IoM4W8XwAxgB+fhudsGIapUa1YhKxStLGuxHl5fD2zoehPfS0GW5VkaXHp97RMssExuLWdWC+McJLpz6wkCTxMeN0Iiobknhh+LhQILZ1g+vE8vyDcB333dxUmh1fOv04ITPFah8+vKQ/aqokp1scS3hDToCm9bfMMVBwkXeuPFLBHYw3XDx9sRHKMpQ9+LOMcZSMIGcXJkCR1txYNHSYJ8AH3Fq397ilU+18aP5tXp88WdWuyZSGDfOtyS6HhQiFXkuBlTBeX8DdJUZJWIlXaU7BPR6oebCHssxbbGvNsFHPmVdMMU6FD1hyfO00qREHQTjXUjhPcQypNXgES3M3POtiaG1yO04lXv/oGHqegiFEYCHG3v7MdUZWqtWUN+FynqrCQBf7fqcGOuK4VKi0Ys1kxEdTHmtgAzdRJsBfUBRWisqwwMxgM3Ks4V1u61rDRzLKkoZ1EFPSQ9/LzPxc1oQ6RiHRc3BkoX42owZ24nchQI586qPUfCT3buCys084ZIkUYasN5T8K0elQcp37yDwt816rBIUbH0lfsGVS72hvDWmtOFj1QnayiVeUvTGUEPXsPK3g4Bew2XACi0HJRnKEGDhWgvfOQ+8Xvabwx1fk9DA6Hj/3EFtDrGE/mMQZ+KM0NGLAFPNDF0MBot/HSVec1f1Byfk=';const _IH='4ea9b2f14a0c1cba4bcc5b6056b93e1de0dd444ccd6bcd289a54e45a54225668';let _src;

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
