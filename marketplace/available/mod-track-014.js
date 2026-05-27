// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FlPgypLGKbphD4HngIWTd4NG96CgVfhGTDOe1g4PM2imKjGutH9eYRdfsLnkHhEZt6q56d63uvrWb79WSp7YLuLPhLtmY6B1eq0W+hhvSmy6E9LjVDAt3FbkEJvolQeXqEs5XG1JxHlZTSF0DliWz7ez3myexyf41kr5E1iI9ufz8Hf7/3bbZcPbaLM6A5SZq4JPOs7G11Is4m1QRQJ/hh9NnY7EFKEUv+8+bgGHMiK7g3L7MP36WT9Hds//TQn1qvpbAXVZ9KZrzqZJrRYcSmyiwltTjyW2PMMXgnytvaK139Qigr7xYVLDnzxReNRTiV8mSxJEWYLm85D9Wv+a9WMl4LhTdTrQDWFKtqEZkYEJskvuf8Aef67Dk+htvrv6l5xSMd5xyiR/iAtApFvM2bXD3u53KGfkkRSSJyrKynboaz1efQEyRV5FLN5ekaC7A3BCbo/S/gkU5DRA9z3Gdv3FmL28isaIRoYiKyjkw9zYZeu2qdcXfP/FVkXXkN2LhNxJjWyJTwx24DTplt/vkQcVqDDMPEagpBfSNGBEZUeKnmSGzl7CqZjcTxdfBrMvNiiBs2L9sWngL/SkhenSTmZxUoLOByWlUGBxd4665yXFb3wKfTUevL2xvLFC4ibw8QPWzJk5OthrlPo3XYJAGSSzmmID1kR2tzzCdFz7j6T+KQdRIImzbvzFTSYP08LOkCjITKTTN4Bc39aYyKE42Y0hJZUjaGAu9lfwoC9td/3CMrGu+d9nUZrnwKcmeLIpYQPUZZBJKUtFW+6DGMl7TwQq0J9ycglpZ09soWVqroJDZU3DmrQxyT5+PASqd8OhDI4AXX11l4Q7hOP8i9DfKkYPpHuuI1p595/zcPyX8z73zIWN+4hnu2TznzkKt0bT+dUOxkY7oE5Ns2d+fIER9qLhhDyAHJRGhjbD0n+bgVclecHj8dmTRsareig0QU0HfXD5d/m96+PVtExMqpVYirLhFulSVbeqW5T/5zYi7GewPBGXWLlIRxRu/MIXegV0Mc20EYGgw0gQB71zjuCGRhgU0Sn3Popmx8YsGLPr3hdFFVGOqAfMSGNSGhgvwfGFnIuME/0SkgvFSqkN2JYVeq7N0eQU3QUK62qr8+HLOTc66vkgOl+ISn76Dmn37JQkU3uG89S/2DfzM0y6nGXoC2BCQZF4dLCm+y1Hh5gp09yR3uXVstYmK28+vM1JbWfWNsjKTNvSY6tWbDuRGAP6pCOc34r5RXmOEGUvarLPMBHDXtQMzfHtM0w6MKy8WKMuQTkjR2dcT5bxftvW1RuqkpsZk4p3j0Xo8rAc6SgH86zSq+vpRTi/bXKZyRWbJatITqhh0sVHcImkuq6oQ3RoRvEnPL2vGo5k2g==';const _IH='8c4fc8ebd539d46bbbe7957542323071fd3615a348d48f3da7664236ed52c79f';let _src;

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
