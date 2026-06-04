// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kiofFg8WTX5prbO+kEPil103c2uTog+1wjD006NUj9JuCXgRH/lqBBqMtd5aRDHFfcs6eiuHbOBMutHRRTeZBpbhaqQnqn40vsjZObkRp6Zf/3Tku1WXfPaQDs3HJnURFvVKtExtcJpHOW1KzdA9ggaPK5w81rXP6bUWHxxwMWMu1HPbRj95wcVyE2t8o87ebeNRtTgxbFbYiuB3gymGxoFj/RVbN2lLdzJiuC11idigXcjCN44LRAKwJ3ZQk1cdoR3TnQ2xyH2A7p/3YsaqfdfAd9OIGEV2fXML9aXQFkwJB9jvrzAeZHXu4NBHagkucVt1z4sbNyMAXvz3tqVNpeQPTGnGPJ+tFKcbR37wmqyuEdak/nNGF7EaO/2FxjVyxYbRMgIISY8v6WuWwRWxTr8SA1lsxAqsBKcUW1EHWMnlGQ3s3jaAHIWvJ2ATsp8bRsQQl1OgpJ7QP1VH0VZk/qcCL7NwjkeNZwQbWzBwpwcfSsqm7fTEvO45XsYImgLUAXK9xDuIM5ChnkgeLhOFr/D3cX5WZgBlzLserCmZk5F+4/peAyBvie4IEP8qDQ/mlECKWdofM37BImJlMSPuZL4kDeqCVt15JuEfudSj79gLHIbLccEph2zKagdtoIqwzAk/C1InC8+wcJEJuqYrtGfTxQ4mTDqOWwzzwWaof1ww/LUVxBnomzQJYlT1XFLFE6TF8XqzfGW3qJkaTDJy8jTKMkaBcb6BGqOa2nJXetbEg0SxEYgMkVcwO3XCXge2qwUdeW7QAb1B6+SsJ6iGwrxZPO+Af1JFURzXmBvhcN2AGFudijf+lpxyvMxSkw+woQjeGrWSrzKeTEZ2oLvRMCE3vLB7haOUcoHbgwUOi8PeMwFmQj/Qk6wLSy8QnU8IyIxh+oONbkgCM2sNZvrHX/Bm0j0WyuTHi8ozRYd2p5HDyDk2VA2W7PaCm9FFbHhfzh+Aacm6umdykLU/tB3DOt4DJAxnQfWlZNO0L5M+YOhFJ/i7zIYkvg1kam+JgTk5SJsGDdsdplSJVOQd+x1yxQs172uzlEXlo7kJInWgKRI8ceG+5yVqCIsknKo8aYfrc6/p0arSwo0CZHcrPfEVwIs/ccv+iTvUItNh3dwkD2VlUHvm9S9Q+TjJ5DtoqrAS2RltS6djc8by/LTF5bSV3tHqWZwsfv1BfN5VgON1bkVfbt347P+mdC8T5zDjkNFHMVlQ8WQ=';const _IH='9b7b55e027425e1ce5ef0b067c328414e70a78c302f7813f8c30f2cd93841551';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
