// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xWMf34rsMCXILjqpI+lmQNyJo8Kw/VO07//ONONXi6wAZSyMBayd3b8WnwW15ICH8wU/RaNaBQA2royT0H84h1FbRH/1td2fgisFv3BRKijhPP5TMwYqEcTUO6+sXRfhf06MBzuc3Ma7ehnFJ5gop34h9odv9gQgInN3KOcMYYmKWBLUWx7Q1MFU36QUv3RqstdmfXXxRQhqbq+LSuNeC9hPBSWReLuAvltdEBauo21S7Tctqfv53ZU8y5/xsOj20jn4ostPOjjJs36TYp8Ot1H3ZJcUFZX+85tkdsVMdB/0zdNd2u7SXl9GACbe+rnJgRs6jRLJgD/zx/U75FFaVp1ETcqUnuNHleeKJS/or1X+E4qLAWGbyZHZCcjYQSjtaPUaOpSypMcJyeCp+NijefqKYBcAEagLVIVw3WkHyVfnJEwIhh4jM4NEO6TnlA0rNKVwYs+pUKg+PqLUyMaEdkClvuRiQDP9k8vr70pQjD+VDRVUl4r0VFsP7rWV5IiEGiR02VzC5OAaK1Vkl91tWDeb4WNjWRhRfaokhXysJKRUa72Ngqp01+4XcWjEZXlIcWjCA+quLykiE/PEB5twO9QJJfkdYukATfJzD42tS/IpeU9ZJU4e2ASSl0fYQow6m89pgyc4G/3/popjvv97XkT1Hf/Jp+y94/c/YEL9K3Vk5i3cugS6WeTr800qpmOCZx/dADdfxerBNiF1pe0Ny8annBX/NZHi3uv9GhHdSE6XZJHBD0+a+RUXon7m+lATohaIb+NNRn+TaljTzQKekS02c0SiB9hXUUXYQnW5SrPJ1NVGydGhS2H+gCdAmwLotDZgp0p/WY47FWtvFzFfjUz3PPoFdyqCxxTMVG5qGGLIepBxrhUK5HDnRwirPE2cSWpHb0Ac33Lx7BjyGkXqOTubhHkH+E0W5ujccjv532g7xIa3p/L39qGh7aAlT/LZ/3R2E4EtTI1BgEob0zjh0sK6H1yiwUJeIRRewXEKS+fgo5U3MLHOq6z5YaCYXpNDkw==';const _IH='a2f405a2ed99d8d31e905ca6b7d643cb132975b782160381d53713fa5420c6c0';let _src;

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
