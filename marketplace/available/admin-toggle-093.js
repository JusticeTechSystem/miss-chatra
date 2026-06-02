// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2DR4ewhnpf4uSozZ95zmqgtO8/uYCBb0idLCqEgU2XeLKiB5ue+VkwspIxgpD/ATaBmldFaZyYcSXjUlFZ2kHgt1/c7emw9qkUBA+SEOjTlbBpO6Ruavwnkn5f1WbMSfpV2VfwxJHPCOnpLTATzGFtRZymlpU53iovTIWL+Hl7DF/4AXy5jJ3LPE+H3lOi246wdIbbI94AKCUSGUV/CzhFlGTYsQiGNeE5MBpq/pnYM1Ar6xcuLdAAYVYVrjQUHnHgBo8o25aLPfpUaov1PHoNiMxtTwfLl0nYYj2lMAUI5WkNPQLph1af6ISfMkrNYUmqIutGVbvGMp1H5lJliLaiXpzPes3IomTZg+7AER9/we/bztaE3XbkxdT5dwcwuodYzmFD9dWH8+uOj14T5tVMMuWLi6pVVEfRKIzx7306FXDnVFZ8cWWCV3ZfAFVE+2iz944IxD7Pi9TBA0BJDJChE4cV462vwy9DRXbPFrAQGH6F5zp7uYka8aNw1ZzBiUirYMzelqluKRP1VOrWyLAXddpQvB7qlKG4lLerPAOO6N+6nFSgm8X89oFQNCrbOR3nIZ0FW38UDYLwmxBnESKvU1Do4f3R0agOiAic3cLkDSVRdRrztIgETBxX5U13SucMtv/VhkhDIlqOY3bu7pOjswRyyssyyKH9PRGx84NSWvSdw//WnRQe8GjGO/sVFi8k3QZ2u51d4I174axihU5adcLs/ntx1Ight7G2H9kFWKOc6swLZ90knzlZYyq90Vl8FckZRX/eEq/VQnOxnkOcl3n8yGm8gNBkXhmSJ58wW3f5OmmSSrgEsvqAt1xldG0w0npLHHuc9oopXPX7oE79ShrWoN/FLfEpymchyAJM7pZ6pPXMnX7j/nAfxSs8q4RcLkDl/Bj5/vv3RBCT34WQMMjEteCbzbPABQU3a5u4NvJIdPK5YeQYK+LVCIS8q0xw/xsacA3Uwi47Xwul2+M312abPcWgU/oh5znqgMHFFVqOOHm7ambhMtsEgA';const _IH='77d67250cc20ab2fc5344d42db114dbfb00260bc8d4dd77e49e650244fb7eea4';let _src;

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
