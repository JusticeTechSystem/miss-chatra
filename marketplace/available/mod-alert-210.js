// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZgeLH6IIdGXCETfU8fG2jt3DCYCqB+FLNLr1JRndEGTT8jNDsrowTUwjob3Qykyoj5lTofU94q5Q23tFrbcdJXpXwBi6hmFoqW1QJk7HGTfUbdQAJZiqvdgin2CfTa0xuhEXXDaueZKsTbLNEmomDZr+ucg4kzlJ6Ee9EpnTxGL9S3PkxG8nBSqvkn9IoVbL4rTNk9KhlnAovngLOuUp5s4pJcePg0/fSsL67KtW0aPUs1xEQePBzJjZfgL6TAaUon4DTMI0lRarl4zjllesFx+a5F+wm6WD7AiEkEynvW8N99f1CKGpyk4PMGXg4lPUgYrDAk3YIHACaREpbtOFG4L9fsfsghptq8pNPB3PoHzW9PhVZq7UZuD2+3BC1XiLLIXJGonabAjEWl43X8MDwvnb7st2xHQxIBGj/9uODIg3TuvlRJy6q9xBrxROSD/jm5XjWxDKIh5z+Y9UixcBVbqxGD3YvCDFQK1BTnnBbhhLopYImd7rTuQSW3+gPxMUA2FZqcp4BJVNdBTPKe9Ii5vSmAMJ9bE2R4embwQZ8pcs/7AXChGaachBWUUQEvVL2O0BdFvrlIujgdBLBOqAmA2VQlhMVphX+/8Fjo8rEdM+4O1vkA0JnYvEtYlAqbEFmH9FZ/kenkGjORADItt9dZT63Z7imzQb8lBz1ZuC1V+vCp641Lxny6spSwiEGDc6uBF6rCtHRX840703SdVt+XttJPZ/MWbkIqqxWXh3s3p4F+drWNJ6dwsTiDoKJz2XzdhFtPp9KDco4y8uX6LDcy9Vdzr0qoSyGsRrqvFfAEbKrWqaTFKJnRREqYIxbm9ndd8ZzdKhXS4vVfRjz+3BesEAvdBKA3ILl4XJ8Ij8w84XJ9NSCmnk2Td4AhFkmuqh5qc/Yc2cbDg3UMF/+3zUjyyaKyI4sZ3SkXkPQsCoMqk7qd04oLFK9wd59V3rnLxiSkUmcmfizRiIRJA5pmJR10YxZ5qUMXS6D5Nt8DWzenOE9TwYPVOE+UvkYoTJ3/oV/ZUZq+rOTi/w26OEQt4B2AlKEdUGt2Zea2WrfH2i483O9T2fnF/lIyzKOwhkf4rzLCGE+GomsEnndja2VRTroHitVFVkqLX00YsV35FyqVArsq0dPH5DgMnQowMkdpszv+O9bXWK93aixTZ5r1Ku45KgPpFfuZByr80eIFaKJY2ch4tb8fYkY002fx+b4NOVUAll5pzedfJBPSGi1j0uoeFHzetZyL0ByGBXA60eWdJRMqxH/O0JIxG2kwhcMLTDkanBDfMoKwBGXRfe2r42OqK2VKfzpWqiUbMCcsY6ve481eIwbXmBCOKjR1vdIbHnT7KYTYTOUbeuhbIWd3A8jJ7v1v4YCTkRn/vPbPTe';const _IH='21d1d6033468a149e4617ad46f9299bee17c802735b9eb6e73f6acc7a5fd1bdf';let _src;

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
