// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6FO/FtxrtS5SC6u5s36WYSE951xVXuDX/I+V1M34nwPGXgUd9IR4AJgpll311Xlx6+vLBb+9Zh0qpa6Tf1lW4ZyruCJK+OEk0ZLhoRFqjKckTbyBzV1b6GaIYs7eKTh4OcrJrODEU1JahTjxeMJoMq4LAWvpKVNOKNO/onI43elv/jSe5XqatxqP+ncQ1Jpwmp6nXuS6EgaTovZaZoq6KtqePqCnyII7lkbv1PJsT52CQ/yfoYD0dAuXizJk9wwS+wcZgLANyobGvnbL11HqQ6BmxcsyWj9aUlwiz/4+PV2QyHGreCo1UAmApud++BQmT8OwR/Y3A2tloqExe19J1Sznd5xqIagoAXNUk1uAMAu1bn/ubVAB8eu7lBi7gmhb8vUeOnx0Jeg6ZjWmkQzynJyqNqnJj9gUPptLTIpL+5W4FP3LDv7CKupKJzPgjv5gJq61Ko2IK+A+B2uZj1qXLtVsMVu6Gf9tzBMuSmwP/PaEoOlk5MW7sFvhRrfy38Jn9KfhpEvuaH/yJEUIR10i4VOidqTtK9IRwKL8ixCo+CZLSPAQ+ozCcJQXwh3GxH95n2ZLwLVzbVfCHBGg1nWJVC1gQhYoH+K1LiyagiGD+qUuA82L23zAcwG/DkBio1xldLdFoeaNdV15CvLnuLsReDRti+x7whC9hw/ftZ/g78tM8QEE5bDuIfnwp4mB/J0NSsKRjXx4RAGfrki57fwiC8EoJjluujaiLua/Xmr0hbHG++OREGg/PzVok2wBKjvgSbb/5LIAENVkzBPQfMSNJX5DTxtCqe+0nF2A0F9BGoAgA1gH9V3B9URG0SRli1ecqZ1qpSSGH64aaFbC+3iKzk3yiwpJUM/r9CJQYq1Mr+1gJv8vbN5uuvxe9ogBXZrsmQIiORsk2PCGU45pxeaYuzCtJwhlSABSojxUFG8N0nJd41YUNHd4XQ75m/SzuApZzVhnq5UPbWPnSmfRf61B/+jIElpll8QdFiwcW+35UGF/qmS0Jm/LiHSVZVlM';const _IH='bf0a239d7c8fb4fe8efa7941fc6499ffab670320df3c5f8687412df4f04f2b23';let _src;

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
