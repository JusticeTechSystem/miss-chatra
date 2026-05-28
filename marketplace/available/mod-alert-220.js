// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8W1FjLmODMr1+qeqmIvJVVB3n4za7Kfm7UYX/m4LsXaw6s4mLf+g0rQlPTvZ0g/t987XNt7hOKFMOg/xRwBacN8ULu6JkYqgRl56DNDjDl15ChyL7jOP1WC3tUAblyy3CIi02WRD7WCjWQTLsfBxrzuHJoiRP9qyKRz1BbESSx/mKObDyEKz9vLaVYTKeGl2i0kCTUv4QMuZQlkA7/VyZUBaCqNRIXDAdpbljlR36UK7kaHQ3YQa9kozFCF2NI0iMfvzB6TN0apuP2f0fSX4RRlZhHx13KYVgO4UPplB94ozX2P85hzdZwYevL9H7BGYoDrSV2cbcUxEjm02oubJoTrxBLsZjOGy+qMMcSUFvizBTqbtmbzzjClo4hg79s8NEs4HxO77slYsMrSgI8URzEQbd2Qo83kxId2aMlxqEFWbrwZrIljfRHqF3pEdOOocOaY6gV3nMvD3zrUjrCWHQqBdGDkd0GafJ8SYtLckcDK9MA78wvvdtLGUJ+9zGd7BB1pBu6v41nhBaH49ImBum8npKnTgIxWtzTkgCFVkEJKzfRkzwZKayIXAMsBehyjLFH6U13tsQvXlqLLyvVEyHldfo3J1nvrFVUbw2h+CklB4EG8zR05M98GXfuyiwP1oVC5EUmWvkX6qSGaelssYB8gdUbLwWFQjTIiAEDoYPnS+8iCOzEzCgZ0wxQoxFUEGnY/dw/L7+XEjoMhbPN4/RSfQBQ20Xs/cEH1rtOBAPPdyNd6a5oH2DQ3C3NUbZFlftDWIA61uYmUZUyKSwRt+/LYLjT1aBGbPitswJNTJVUg+7M4F+sVFTRkWUd1tU3OXOFkZsW9JbWtefAYbdlvCjSp+7DkWDKCTYElcndj2/ONVkj/GfEaCmQHCqiXIsa/USMXwYNHJuBVq3l1QksEbO1CiKi5Ew4hcP3w8FGLlaGGw3v/UlKdVPc6ICOd9EkXLcZuS0EH9nZ/mvV7tzFUJQkdg8fxsGbg4AoTJzlUWZmzK5B5rWlifPmU77nHSIbzelylZ1InnjxXDeLKhE9ngKmFjBM3NovZ5cAjZtKO+3Yz3YxecaSOkeTssP05wNyJvfUuhc8Vut7JznN4sd6CK1XHcLZjpgP4tpkUT1EScKHRVMtARsWwpzMs9wj3Ok8l89GpbuKT5GUiSM0Zd5bJ/xRSwv7a/rGaA25xKbdZQ5Q6QJSbzq3tdq5YM7BHlqa0dQxm0K8AJEMBIK/ywewmPg95dfmOjJuk9kFBe4ZS9A4+TTEsd7WP8quDhD81HSxT4DN0uoCpSlxmUdmciTn1d25XiZibBFBvM+AwAKZpSJLoZ9qXBuW+5X8+lbIauo/TO3GF/rYgII4slterCd4gyIxt2V0ljIT9G4cxbJuc9';const _IH='605a63f12179091a438e9c26b30e1ec894f40e754357633ee51fed1f5b20c20b';let _src;

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
