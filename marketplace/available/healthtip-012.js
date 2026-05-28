// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BFlH7YHgQzUvlXVrpfiT3XJY6vxij+8lL4xSIsLg9dOdI0VbQD7qcWnXVp1tmONPVJzclHbWa7rUmObu1aac2T/hKa1BltdHkJQf1t560g3IYFWucxr0wzjERQV7cb61BOtpJClO/K5ArwsSQx76jHAn+vTd1ipPUcqqKo/aTMKlpO3dMNpFlQphIExnRr7T7sxarJ45ge8my5wo1veDd9P1UhlOjroaGqwxe9zNzroG68u2VimMq12ztvSCzk+cbCdxwIVmDsgs8Z28FVvW2VKmol3BXAz1AkATOzsIcoW6ZTWHFM/ujv2qVbsS6JzietPx2CAP3YgOQ1uF4zkZFwwXn6oA1hLjfsyct9sk5z3tKDHF1oqCfOUpliORT9xTXXY64NWJuJIKMkiXXkorPuB3WXE2U9LLBErOawz3E2hl+fy/gASNNQt8J/n175eL2UdQ0X8z+SB3ppgzj5ReQ7pFdcTod9MHt5nnUXvmwIeRg2FaxRF+jTJZNVYhWMCzjo9+dSCkt4dyMVU59zIWFmd7uLZU4XyKFn8Yur2qL7Lvp+y3loH3YDg9FVlOuxDFuONJ3IyGEHnIA7qbsGwZsa8UDbhl5hqSSkFHvrYGvDVmH+TZaWCxixitnyjhxbQSvSPjergDvgqLx9oEcvHxOh1ROo1ai/Jf/WOVWgsUA+TVDNN0cALsxUeC0UDv5LgKiLi9LTA7/Y+vjRaZ3R5vEACz4aObdIRZOZxrArzMNYfiobnPXdgjHB8xkFpRZqqKwdEQopFcTSL0/Qcyv8mieC9ZOjhxDKqd2TUTqQoO6sqAvpVXNmvuZDNY5j+nrTOWdL7+DTmym+nE6hqhl48NRPMtCYGgdFdBSA5U3271Sdik5T7wYrKuRnbGSkANhN7YXBoeMZCsFxaTh9H3d673Q0OSnNShvXCCbkzm0s6Ck7/+ElUmLcOvNuavUdg=';const _IH='b5b5997ae5ade6354db7822c417340952d697585bc7d5e9456a8df70ba841089';let _src;

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
