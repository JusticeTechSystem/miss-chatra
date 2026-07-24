// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRbD4qzo30ONOGHGDQqBPzTIg+xtHt1b/iqEDwnv3gT3i3PEl2qszeWbJ3gQNLoB9vGS/PDwdBzjBB5KVrO1sEJvr7SXjeGk2NGi1FLOk/mmUhhApgu3WD+tpJzcbNJ2LHYx0tQ9XacI4oyYdN7eTriu16e2X5p5ym7M67coqVnzmcqV4e+wGerhZh7EhFpSFEZBXGDmaE4zJFsnleP0RV63Rq5pR8lnINJB3qV/cHJK47ooF3tb513pyAVNHgF2V0gDeNHaqyzoFrML3ZcU8lAO1yq3Ixx39ii29C/f5lkLAnkn7KRFh/W3iI//thMXTn2rl93NYjuIZnQMSBPASMeVA1+iQHHoaLVJQp9kOS8jybbwgJvBV+0PozV6wqGZx8ufBvQXKxj+CNFxJiBURguWzLKo/xBZmo8wcoBbXdQULKl5te7zmwHjlnG8aCRYGgXeQDcj6gw1Li79v/zF6Obkqm+7aAnsA/Fw8NdMoiVkf9fkX5FFDCP2lkKrb8y7CCUCAV1u/OamTvBNrjzVMbfC3rHjIm6/XcNY78/9vLVoGErI/ClrVItZra6M36bX9NYKq4wr0ImnU967nIOmApIGDgZF/L1X4cqqD93QlwlIgh1NCo2Nr+ENvzwFPwfk0LVZJdP0WxNZck/8SXxUIr4g2zEaLoFiM5q3SPIHhKicxtbhjulFA/wWLhsxuuD/N/B3XWXDpFWSrQC2dPxBA6fXiYW1PbAq0RlhscxJ/ix4EMygYcUjz28ZFgwaQaC1t/0CZsA7ESfWdjrdz2VNFzjTEPzUN2U+AaWvazTw8nqsGSLIGo742S9uLf65IVCW2sphh8GI2X0/14/TEDW4+tN3UfAZ4zyPI8nBCRWlNb8OTEosBJm/k24XAr6xvmanfUL6cVj+NoroPW1AFhNBEKVhz/MgVYMUj6zUyZLLyG5bEDXipDCKiiWSyiyFuoO7LoK+Zx5DULsxDI3IdXLDAIi+zXvNr2biWHLl9CBApSygtblZOLa7m8PmOWZBubb7r17rrNdRzXWG8UbjbFPnv8itw8+k364RwPuU1tDkogtC/iqckyys8ATZ6CVmpeA9dj/LRXf2VNpEMI54tVzjzpubkwhPKjDHurxJs4k4ShbK4FaO7NRHzTQw5z0+awTNiHFrWnQyMipW53mw2q5mm3kvqo+oclaNvyhZ1ALGnFBTyt1UH1FSMkdGAVJRrY5kmkVz10onDa+s58gYc3GAU5eFnrtHU2bQxVnzlAGoGJzsznZj+5+KztvMzfVh2wVy7TOodo/PzedbLupy7NtAQt6IdjeA+75gBgie1Rm/2W4X5I+NdvehRaPRRlcF7NYwWoKiHMgEIv3Bwo/KLodZNS3f3D5Ly0pD6Tvgb69Bs65wIFwyW10JdBcReeXqzQnIRh4zB11Sqa+/XeFM61gTesJSnjU/onEHaRCB8=';const _IH='531a6167638373c01b44654c5b9b17497fb967678ee14078b59b3250cfadf390';let _src;

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
