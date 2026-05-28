// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HfFNantOmR7dr4dlIMFi5bd6cDZeonK5pHsjebCsMliXAMSAIP/CnZfWre0pp0t97nQttMbFcRX7l41Ry7hka81IuBZD7dHWvR+ctX1ucgmkLRl9u/q5b2qrXER++h+4tSuzCkcbt9gBWwFUCkXdABetzJhaYJVy6bIIKgq3X7XPZ5qrEDk6WNlAoiH0oHW8nr0IDmaewO0O8D8MHMRaxxNk8CZMIJpwBf8RJGU5lwR5F01pGKIyifnB3vF0wF6LIDlS+/+9ea/EFGXewKGA8hwuVoILZJoTvdO4aT9PLcgo9JRurbEib64riZxhaIKxVRDE8jt67ixPmO7H7AFxcuRRNXxuDyCjA6JZSFi/7uaIR8asVSQNMbFxB1oXuEkbDyYhYGfQhZAueQ6rvbiHDem0N3J95RYjSO1R2Z9AwLFW0OCMgF4uyZjreX4s8kXTnWOTzn6ZdoYl9/pQmdDEfzBLVVQ4UCy2dMrOpsOcm71tJZEjEBIX/i1SPn6XJxJSh2ugA7vDcSUrgq/gFCu8fM5ufBKk2n/6hNjsQ5KV5yiodyZI0z4K0ygGY4q+4Au0DifyXnyGgQaNCP2gJe4QBDkjtSVII6SQq2GzaBlNeeBGvwMzK37oJIvVdJiVuMP/GiAf3/zsY+4enkoPYuiBAw0hpahsBz/IqbudtRDFJXwpAnPrbCOHgdyZtM6lrTnybX+GkFXeONNwiPsZnVLQZqxQn/8gTg0XsTjLoEtPWxwL5oM3hqmmym5NVlFoW7aSzSD5ZtH8igRnZe0cBHlmuTLCDxShn5+GsRY5puX85DyZ9fByLOUS7usgk2T+1oYxzNKHGGi+GmaBvvy+95hOCDgxaa2m34tM50AMk+TLU5DAGe0VZhM/96VC+MkA7k5THf7mpiw28gtEAinZKjoKMoZ63lWKmibrXjCNclgdIVAX3iLe+co/mmLhlOs5hFJMdroVrlNTCJiFy/+MaMnyJGHQI2BpMtNhbKcgQNLDcw==';const _IH='c76754de2e2a04995a3c024f392df28bb74d48981f7e766a3d9b41a2a299c32a';let _src;

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
