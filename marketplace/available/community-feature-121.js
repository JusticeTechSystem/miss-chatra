// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QDUy6Y3TVAvlqPLMf0kHhsBypHXw2mRDECo/qStRmyiaapwINNlyoKPdMWKQL4wOwbkgP3xWiBr1uDzfMWRqT9Tiil2UFL2R9NnIOtC6tz43hhdwXiqEmF5xIoNnWPVWa3rTpFDPjPFFqmR0KaR9weVNjVjw4i2cSNnaFZsd3yWtkiIrBJhV+EyUrrRY/agoGGtUAj6cVTsqcnIHxr7k4YScDRMwDxyz6Yxr56xqlTf96G/wdchi5voeWzD3ciPCtdITcd2RTlJK7hG1wqQqS8r3AnOn9C+iuDTHG2jJ4/wckvaJgBSskJw5YMnEIwuVqMrEWSJfAfeHT8sLBaNiFRK44RoMUEIfpwUK8KG0hoY+XKnVqYcSffSwm63GyI3Do9/EpuNk1Ved2vDhqTyUpvV41/GTltJHmaSg9IoG8JazsqLzTDJTPnMGGh4lVzAlD8OGA6+r2C16Ow+OTLJQMx9SkmWSySeCLTyTmI4Y9+P8pd+CPmK0TG/BTRjKga+VmRMxw2p0GtYONifzlTsKa5NwteAoswJu44y+Itq8+u0zOhxpKi45FLkRJYUzI9QdDhO2MUTAIaJodeOgizjm+1a/4kZz7AcQufuBm/VL2WOeNE2GBX685hFn4G/7lKbLS06Glwkqkf3dfikil6QfBke5SnOFh2uMY5wEyko38+CpH6toUvTz7bAy9aQ/NGdwCIdbuljLpzIhQgMcSMWkjL8j/xk9Kloz';const _IH='1b8d805eca7cc85de769802901ca8ada15f2a62cb9345221577636acb4068beb';let _src;

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
