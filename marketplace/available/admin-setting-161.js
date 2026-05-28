// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KCyF3ZAEQT61Od66GORGPa5+wKfUazIXNGZ7NgDEZNKXfM+hQj7YPXdoW5Je0/egmt7Uo0Apz1QS5aIpx7DR/zG03Bp31F8NXAEBHc8EQtuBAQdAwfxAOJr9HFkB89I51F/ku68zgXTZKqpaLQT8pEkLvboSBAGaA8w6R4sg6tycMOWcc5XwaPdNSqLc0hMDEmPk/ensB5pU3w0bb9KtrvkjzzA2DwMT3klRBsW8BR+EbPB6m20Q0vLbDBPQpVpsWbTBDlNnLS3qyfyXhB2u41bqkQybq/7W2ZtdhelZqKcgl40GxtTRjATF7K9V6N9OspZqcRXcLb1WZd6bMu5A6cbnWiHsCW1SK4kMYjivXQPz5knW4GGhIcgKzAUzOvd6ZpOr551zWEwPLz3jAMiu+zoQksDrLdZgE2mrfp+giS/vO8LXH2bKlj7WAqo0d4UMvbQM0gVclzkWFO/u/kql0y2vl5rwagV5tFuAOR6Z+SxOQs8D/COb2Tq7tKEfxns0awqSBfLv49imORQXSgG6uvKoDMd4doASS+dZ4fwJr/8NnHJVT7YDSxkYv6twzAi0NW/wwuDg3EPh4ss1mNplju0htzoi6gUa8JSU7xuhzI1TzMjbAU9aoy3diTbFi8Mu9/mxn3Qgawj3iR+0QwNU76yjmlRm8qB9kB7rMAaeDvzkXcduwHwgQMtWjxJj39sBTB7d2kHDBWXsKI8r644mJWDwz9gxBCTGr/z5GGDbNUREys1aAz3W9kVcHBFA9mmCk6Gm25Zh/EPnFOuNeurw24tnuO/X5mwtuI1IPBUQlx6NSm2vQO1WJxFKDRoC9wgfeP0aE+A8aqj5NNPQECUwLjelvoZHYNeQ6dhYUQayo/mE9aVqULD1dZkCMEpCMedvSURqvI900cRDQNhMYpx3Gp2lnPjxnIlTXK+1A83Sn0qNudfHlPqw3NDS71bFYi0Pl2uBagwd44KAFLf8fDbRxSMLca+C34LNPlWC4U32ELkOG8V4FF+cOWJtvNPl4eoIbNDyWbMthDc=';const _IH='a9d8192a7cfbe54a26a45d39c3246e6d2308c425d10f8b0f57235f35204fde34';let _src;

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
