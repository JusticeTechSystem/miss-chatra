// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVcou3VdtEUiOrhrJoCNvXAR+lobOcexEBfLPZFCpWYTMMsc/wNbMKw5w/bs+XDfFvqdVgwpepy8ot65G/+rhzFB+88tQPOhPpRrxBOVRotqrdNTRPI6uUMmJ5C+JI87/lSkMCtR28RScQLvEjmdXfHQggI1bNYiLLvzFepYHUhwfRhqjRyC1MkxvdVodihPzEpFBye4481QbTgh8n9z+qXFMt/2xd33/o9nEnID3A9RluUl/HJJTf4F38M2Mnv8wYmeP3JOA9IDSKZ+8aI7NTcJw1gQEvN8/Kqt1yOHF4pGzP0eiD96fWZo9R/L9G1AJ06gNCYpO0eCVddwR67L81DRBAf9ZF7CzAGjO2NYrVniYLkl28JT0GxNfVQbGypuZsRsK/Jexehvjjkp5HlqDe1nFWPJUXl8w7iRdbTbSjqTkvXCabdksfOXKu8NvTF2KWUmEezXxk0d4WWONewL81MVo2EGS7w+xNsM4rpuEQJ7AcoAyIvNjfsMHBH9bPQiSdi765dijjv7k5Wj75sBb7IDdtMkHp+F0d3C5tBFCeq2sA2DGVgOKSPTRUDWRwe79Ko/Tmw2kPLesUUFs5j22QRLMyestX4rBx8D7+jS5Qj4PoQBDh/n3Z4vAgGZszjiqILLVYMmA9MtrvVKFK1wV4mf1/40xzb3Nu6+6tt0fcAgm+IHajiyU+/Ip32gPSwHlX/BfPp7wfAjuDC0x6wRmeTRZD63XUNzyunjqiF7fjQClmoS8v1V8a90n4pT08APCLaWmFrMrVln54Vf9LVeXAJ8AFm2vAHSO/6+FHwAfkPMHBEZrNSAco9OD9CZcmo0wkpNH75AOFb7COYAM83IjWJEnpWPAcZlWcznNPcQGfMK2zzLRZdAJqGPNG8NIpWft3KwQzZfv3T7QNIQjW1bZF42kvw8HZiR9fm/df5wemzkiGVMSIgjMxuzfAeLW0ZZHLkAe+wpnPc5tBf5Tat3KrcjnNalVq1DB5mhtb6rBcM4K43S1OUEBvDSAz2SDhXu7nKLSrkO1Sy9PhRrz8GupnfNuVpWrYi2Z2tYJeQ7q/sBp8TICxZTCbYZu4EBWJITOa5jaeriPXATVMeL6t06VCxXgaOuygDAi9xW3ntAx5RNqAtEHkq5grI8eKyLCJGLPql0eTLNojVp7CafvLsEDYGFit6ojVgUiGNFDqtzNTpU0hZMtUjcu6emvtM5jsWb68XTaLsELfN4r2rcXaPotDqlVzJZE7Z/zKQaMWovhYlaGwSWGGhOX9gqxajhaR3HNN28EYPbw+8CK+QsIFNyd0SYP/x+c3nMkQezlOxbE/R8Cbj/BID51FfRgMocmYfdk11swWfZqR/bbNfKnKUliLqlAK2tGK';const _IH='96e5c5c9c854d3f81e35a9e2ed8514db2cba90424073564335ca43e4ed10f9f5';let _src;

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
