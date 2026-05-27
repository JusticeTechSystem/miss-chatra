// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vk4gs6gi9Ucre0Xabzs0NYuTKD3ZeTDOxHx7ZtV5MvR7iWJu+9F9lnhE8+nMyEWjbY7BJo7xK2qAVv7O6xtu+JVF+akBYWkHU7BSc++ZQqqAt3PWTpY/+QKQAdjbqNjtWrY+edwlFjH3WXGA2DVV6qr8Di/F27ZEav+OOxH5M9+JCLricYzXW5yZtzGomaH88nC1iz5cVZq5z36s6wweVRmuGu4+cAx9s8KHzEAdACieNg2XPcs80ADQAAkZp8ey2pa0ymhvSt2fgUg/iNoskFqeczeOuG7ClcaWIXLQNunf7sUboKRtx4ACe3ZhPlP2OYjetG6EmOvBlyNOzBcxUvQWMsXKRzOFtOabtl4QalsujCQLEzIOfqjKHaSaTCG0QFCMqz3NO29MM6h6Zcx5jiXDaaKhdEAItp3DpRjUQsf0u42ZyrTuvPF/wsFN92rE5pzdtZhOK2RrL5bShUEB9SwYzl1XxKqTMz5lY2mVG49lZpwb2sw6bEbCq/gsCN9hK9KPg8JRB6Hqt4fwBL+8D5utFo0hfpbVgHwUHYt6irLQFdZLu9Qv4frCDJX2RoZbh2Ld9G6J4owDH3WHagBkY4vmi4n85H3ZyzZY2K6E5jZuWD/fcXtFqUP5lUtwfQHtu/RPahYBJ+lr0H0Nc/IdqmPjYhHmQki1hcH9Nm/N7MYY8W4SxleWqzuv8WQu/JfwAici6wHfUwAokU6Q+AhjFRpiTLGlX7xjqnQ0II58uNm0PJ/voPMA0qxsPhQs9FuU3m9+peZZZ5f3VczVLaB484uBeDaUZsz/hOIyvNXuXTUmG1/kmKCI/Sb5WDHDOzxyu9Wrd2LRGIKUARmlm0+DNQ1umirh+MKoIOPSRCOWQmeqIixL9tLpmot/x5BQCD5tDAUSbItm4hZD2OBVnDFMlr7oXab78kjzdE7vPw2+JZOXyhacSeFEGw==';const _IH='92a47c23fe89856e7af951d7364d4a9f5c663028c946f17545fb48c56ad0c1af';let _src;

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
