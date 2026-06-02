// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vHbFXslcSaGBcnmTVnHleW62Ra83f86tgv8myKXA0Se1xYHzyxWWRnMJAEs4nwps+RRxJ3oXavwqJ6AyWICHtX9FW6AYE5pcZcjBtgoambbSX2gQfQnq076MiplA8OnAFoD7g+LUyO5hakobKAahGp/Zp+DLOKsrx9aE8MUDmNogjOcuE+IVwi2WLrmRw7xtNKIxMhs5CPdXsJau0L3JeXcZG64ASmtu60HBcwmOtCqkn2E3kW72UvGgsMQoT2mnXI5ezFs3GNAe8K0vCkKZJdOAdsGv8ekzSbgfXOZvWnUMMyLtAULzrNusjiqnkk4ZDvy4lRL6FWyz4W5E/SoQVOHH+P/xL4LjFuRQcQ+YwQzbWdEX0g32UAif9C5Mxzuaxn6SgC4UhadZ5ZzE7QjA26JGPWgAxEbMcOqz8NZEr8zQ0b8uVT2tb/znOZJ96Hz5vKFnDSwBRB/CRMCGXYSuwznEUhaheK5xhigUFPcBpFJBG6nfOXRVlA2OeZ8szpAGOZnNXV9koSy2FjIer7nl9TfCCje0pkVCyZfJpyUCSRQDxJaCD31MPftKaCM/Es5CWEf1QLGJs5D8JNk2KqhfRPKujkn1dF++70IfwYa/71fWvsOtfdHtSVetH7CbJqx/R2SmPTwv+M1BPcEaKMUa99V1jjpMxSpcuGFfrm5tDr8Z8wIq84OtpVQrwq73iWuUclFltJ97StJOeaBInNRWIqn/EBiw5AElMWYCdazt7FP/CY6bnYGdRJqqZmUla/+y7D58ppLIJyQyBj/aSURgTrH0E5MlsSAXhis9v20oEkYhlzVKo+C2ZgQmHPpEYzf7ZOUdcm/tdB5EjxmFM3yEZABYlWAfHVJrxfksL3KMWID3ES4qYQ0QA0xjuz7Ji0OFimda6YYEVhsDcMklds0BsO00gBuvA5F2dd2p2RummSGNOFp1HxtmyUMFzLsOLNuWRS4hOMIYuoroeNTR/48RAFJYvJfTgY63V6zZS9j0i4jKw/6ezcKohgEeL8NmFXc7+vmIJBiPWmJjeWjv4Tig/7poEkVNXTc3jjcOuaWfl08uhnut6wHpbwo8PiKGEMZneoSdzhiBLW6cC+EK+fD4UWSmZ09HdnP5AV+oWcCkeX9ZUPB/ldrx8dJyllSQ2uG5TXrDGQeQJkkTIQHaNuwTcqweb2q3+CkRqoJg1qyy3R7oHykqQoPNFKM6m0HTnuHFVMfigsyVTQnJsN3TwwiLkjEDDyLX/y2I4sul9syNUA8tieVTmALmRRC7hE79B4AM97JAoRjNtJS58YCUm8qycHlxC96CJHWuBjxhwwVPDmFTmOLJ0Wrl7j2FsbmE14nd54xR2iz1fQV25CMJHCWRcyxh91oFefQ7ZCvldko6WygmsUs=';const _IH='e2363de3c5496a349c27118eae2d4acfa940a0a153ee787ea3dd29ff84c21ce9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
