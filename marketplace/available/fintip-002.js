// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MMPtxP+ghymuclzT743eFTMdkcimqX8Od5EfRU5Z7y2fNjv/DRb4d7oaqlEojTADY6PqK/5YyFo/IMpaGJzJvdRoyE1bcranROBQsbBGcfuagd16oHa0Up9uVQ2WlEKsMZe98h2IElb/4unsZGUnKRUDUPzmCz4/L1zSRA5FK+haTNzL1EfSkrAmU/8pRWsZal8k1dRyBoZoLJewoYnV9vmm0y8RNE62DNl5DGCFHMoiRX/74jU37kAlHlv1I9pImUx8WwVMCGkBED9TMaAsd+ZOFuq74PIQkdZ0B63OKMoWEcd8spyloVkr5gz7zhoY1mY4KhM0k8306EHT1d/lpdhZwUyMone1e/4OPHI+KylMbtCFGv+il15NvIaTVT82+wigunUcF/4/2W/vYFJ9G72BcCVhKK3U/i0r1SB7YydQOhIQiE5RR4SenvSbGfpOkEaoe+vxxnmBZGucvRDVMbN6C7Y0P0qPrHaRVKzRTMEmuu01T9M521kaMHGxH+a9rwo7ViUIYe+Z/114DBJeI2lzG6zVBg4Ii7UjXKnaCCTwGht9FBmomLkE/eIrzmI5a1PduaBupMfXfQs+B5Zs8OJ3gjCnabkPYLuoeMheNmrne6UoxOXjWpmEYnmr0kaC0x1+sLvlC7ZayT21P2OVW3hvn5cqkdtTMPV+6f8Gi5hqIIrksjfxtPuFDAqWsfyvaaHH0xslLL9ccskeCo3n9o4Yn74s502Q56ejwzFVq3+Bk6Mv10w3zbJLH06zeFja2LNsxvECJbck1w+umEDimI/8m0B9rLd6a3XrCIu1ob8mL9w/KBED/lU0w2adYYp+hsyC5VCeIWv3ce+zGBUDiM2NHqlbXPfBgUSmvCIcSR0E2bNYdKUUCrpaHIyvD0ZCm2uRs/j0BYNDzk3vBO1qt69S3xxnadVLFyXVKIl0slE8KggdKskqryrhH6rPbDqrhzKyDovLBSEkQYAUmxgBciFL/cnsTzNue3q1H8I84wOA0SiW4/AqildWTzIdx6UYaZM5Nvm44ZpOM8XfiWoNFqeSkBOGrnz87UU32IKL';const _IH='0a854bfd287c33c85d1b73d639046b4673319c151a50a044f2c5c30942e23617';let _src;

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
