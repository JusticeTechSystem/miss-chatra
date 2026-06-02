// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RXui9nwUfTmviHmLplueYJaKvA4h796atRSyoOApsKTfUI8f0mnjsmrsx7YcXgUlDRKHp0yGWw63a6ZDgw4Zx2jyd1lvG/VCpH38+oWN0jalea3qN9IP9oJ7n+Clw4BpSOe1TJ0yl4TVITiNNFZhhAJiLikJv7b/BtSBF6Uq8qT7C8L0hg1ZF0jsgDuLCDYryo8Q3rvpQSNHL7c0nB1ETSde1kB850tOy8zWxuMuBxScrf6lB+pFx6Burx0VodyYfx09ZELf7lQFO5ixySTEffhSIUCl6hfkLyXrNzw57nXP07fRcPA/60W+NCRHMomtMzQt+nFgtd3tE7W/KhFa+p723GsvT2MPZy5eDICflKwNXS4VTjs+L1hilimsGVgLVxQgEWuInUpUxDtBo0qs6/tCeoogobqFgdpkCILe3o5CbEKIWSWON70y3vlEC5txMRrxKqKlC9W7zod9yFU9Lj90YKxmVkMAOgRqW/Nvd4SXDWGp2ghmFWOeht9wQTnwX5wL7keojGCgCdow/RmMaHgYhap4MxrYRQ6QdgSyJnsMy7nvPhCaMe/9384eoiK0JgNknLu2v04qXLcHEgqY3d2ec7k3Ean3vTWjfMzZGgPg716iib/87eQVLrL+NAb9vf/7SZ2QTSy8vayxlsUIWZrNMsF3ApUw+GWZmYss8HlWyYKSUCIDZ+kKG5wG+SSZa3jh1YlEPv5G9VxbWCpFIDtf2BNOV7exzVoF4wp8pnUMgAw6pRbgUPRnDFji2y/jB4tBnexMcw9H3dvQV87G+Rc4ZLDKkrofnCyPr3HyUyxVEpeS3h2VbhA4xTsD9knevNVv3eTg6vkd4RaPoWXJP3JXpYiJ4hlwAAxJw9zPu0LWi9hsoS8ssYoSrOlZ9F/GW/x7aZMvb51x8kSft+qZ0YwSD7ZCScrYs5zZ63hxJTxovLPHSIi0gIj4XMkYlyPbWO5Lt7NvglTkYsl5NYnA+cxMlgIzy/q5kxALpgnAZfMW68kzKAwAtQjDBeGU8LLLvAOBfUainfnLpliXlKOawrMgJLVkI4U3QtJTYny/DgY+mORPYwzLDu+C2U7lQWjTlljOQLOesHVAvK8xGFMy8ebTmTpIYUuDGDtIo/n9ZjxEMVarWouPWerIU4hHfRjo/ztLNahRXGQwEQXFDFNOZ1oSc5z+m9q1/b8N4Os3jwJC3vUt3j90P4p8AmlreQwVsew=';const _IH='c21ce4c5a27ad1d7ab56bd4430820530926f6af1c441f387a0cc7ef70f79d277';let _src;

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
