// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bVPsesw3T/Df14bJVSvP1jrUS5zW6mfQQtcLbV7eRmM8yNoEcmjzXRh08w8xRtKJbBW9D8IcEkzRPPdr2Jpgt9mGlY20cOR+rR3gKjTbSPvyX38xV926+/dPUQNKLaGZ98I2HJlTq1eJUvVnOYPApl2Lhyjf2fW112MRjQNxQT+8VkYxhYNFLcECpIIp3T6AoZym5pvDnveoiXWe9xOdPm4x/xtSgOxVKAYEpwQEaWZaCYEww89DY05NY9Koa+jBhQu7310/QCsYUFVzum3TTCxdwrXCdCGK9miBeyP9kX6ul7FUoFfqLuwI22WO8iDKWW3tG+PZWd8W188Goe/4JBd33gBz5vVGPyj3AEzZvPDSeudLhBggAkxedHPrmwtQuNc/CPr7QeMiHNnOTjBohHzBEkbRgxAHfeCs+f6j8R8WzZgpMxbUdd0yM2kZO3i0j9vf1zM6QMux1fG4wKGuaOtLvb7tBRTo0G9k9MayEVN/kXtTx5s1XnBX9miOjPdA7/2fsVDnVMTeb8PbKc7U3izXrzPNXlMW1XfHwFW3w/hfiaBBDEiNIR5Vt8z4Y+sTLE37qJAGQWiE+MZfyjBpwPMf0YVLyUw0VeGAd1kHOpCnXVdqugLTj7oiQoEwbHPE8d/L028/QxNnmmQuEiKRE8oWZd6mhJMbm6Vstu0K1eC8LZYliEoengb3R1wOLvn7AvL7mherbLlhkHbFbqMS1GGj3y3CpOCAdlDSDecDmJhAfo3eJRAEch6al/ilR7IUBdYhgSxodxJoCfjUq2kRekz0CrJhbo57VvZyELDtFyh1JQnTdyhYJfKvoOTmr+vAPzL8cI9CpJK05wIZ5vBDOkQ+1F/KuL88ippYK5niv2LqM1GIpLd8kaYd2OoeIx5JZCT8RmS0tvL841NyObHYGIVT3KtqhtoNC2UXBORAKlYzH5DT8qKrqswhDYPsrW94scX3oSF91wdz+vkd6bKsO4f09olmXW/Zobbm4RDIOJoxa6OV0UXHyQGQRzFfXizeJGk6sQze5eRYVVdObqyE6ruSjS71Gcw6YtXFIQxAGSWWfFuvctmPR2HVAuWG9p5ngDDXa6rabyyARiKskGrTl6PziaSLgYVoY7XE6d6twRU+3ygoD/09OuhFRzzwAvpkQt/GESjtRYZVUZ3WEk/zPHIxmHn5XXn2l912KVmqAvLbJ0+XEng0sP7DJJ0RDWzRYgCrHp2MJ+wRikdYfHrFz33P/zAb1cjYzpHufWjCrFIoAw2p9IM70256nqQbbCIlhi9+S6C/ywXTb2RO1XcyyJcfEWRDk+IPJGvXnVhd0gxb1yhln2B8NnxxCRRiqK7FI9NMS77oABXROGaKmEtLHMjuiDuP6FBIebOLyWZEfVle3crO0MfZ75e5xsAEYbunamA=';const _IH='99c6b7c0069c7e836886cb8c08493cec4e27118ebb167eafdb38f5666ab2c6ea';let _src;

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
