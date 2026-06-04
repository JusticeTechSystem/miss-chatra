// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KNJmkfwtc0idRrW3PjnY8dCxqEgaqFEGfSFoEQ38OonCrFyqFft3E+aJEQpUOAKv24NhSv7kR4Aii6hi8JzW2NAgmKboIIG/CnlGi17UManoIf+W9DhrWL2ldSqjoUgDmkiQrQDRVQ8dCcTm15FoOeQ0+iKNcTEi0IdrPAGy0ptO3r8jg/ArZ2wRP228KEEPVEvarls+LGzLaxT/IHhOMp3PrVkh6QJ001Xf7nKBvbDNjLm539MQiH/uq8+pUEY3Kt27D/zT6xPp1cKQZufXrHIh81BcTHlc6N358OtTBen7GzBFMBRXZHlDxP8QgEPIxfISmGasxVmdeysfy9bUNv5M1HJTh14L8iP9IuWXWqy7MwXrH8qykVZXpdaRXQac1cH6lO8LgV0JnwpxqHF9OTW20scauXctG09cNuOkjrnxywNHh2UhqNAXXg9G2jCmtfh07cDED1arPh6Jnpx0+EBNSirmr8z1NdywwnXpA32TMxX2uycHRN0KbB4igYZAAs/7UVKpa5igpWDay3Mp8uD03ErdYKfUoTlHeFthCiLs+LADNevoiYey9lk8U9RNDB+bQxKt1u9G41zsNzn+hnVrRqG9Y/fU09EBDFVY9RLsLXajFNiPj/BhopuM75t+/A/nyH5LQz4YPN4S0ThVRlChbTy/Eo2OZfCF9iENsdy0FQT2w8/JnFmVpyYc+OPXVBWugd7HENiCmST9GZy8VtKKiiMf0NZircP8oPityyWspYXh0AhC84tygrhbnzl9iSfGmyBIpLmp66aOEPsoklkzI2mbi6FEWWWXImeW1ifbWkM4qePDd7dZa+8c98ArGLwUkL12pjWIUe6QLHhzAQSwmboTegI3oFX2MelwtKhl550z4a3Aqu3G+SuzLiVa36xRsUgKM/hCOzytXCPfOi6VICpe8x/A3hNgERX4RCDhMwLwUY5vimV4x4BSehtk1vqx/+uzK4mz4As+hPtRDIkBf5sYH/Fnsxc+uL/OpYzUGKRgMDryDFuVSJ5jXM88162HuCArRhIwNTObEZDie4ZEKgMQQnpfQY2UqMiMGgnxFwCXf07qMFBUlkdkuPD4/MvuzXfLVcnjN1nn2xnqTqSOaXdE6RjXc/7sLnssH9AHWre6McGpIEa9zaBshp/oR5TRyYj2sUd+hs6GAI+7jbg7KItIYNp/ZB91im5tksG6F0H+Fv2uDn3BM/nYjEs0Q74ja2w/gfHlltZqC/eAnp3AyaWuo0x+0pjdW+ZN9wRApGOhvwXR3IyqTF75wO5iI5tNXjhz+pC4x95YAidjXwn4Uuzzb9WDQgJo69c8V3zjT6ldXR62HwamiTZbWNTaulsMk3lqH5hC/jnqAzdqTSxMZV5cYp6scx6XAePK';const _IH='c01d7234e06dab7963861ce73216e8811c2d18479557c398cec8402366e72387';let _src;

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
