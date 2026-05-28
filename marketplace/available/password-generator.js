// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x55rEgFoW0nKlsUelG0YzSzztaqWP/Kl5PL8LLrjgMcCnqi29UkDyQAyOe04N+PWsaF/H6SPknrwpA1chDoKFaxi+IBF0E6P3DTarc/CThTdlh63Rs3iyJBgB/uSzvl1hiniY4bHlm5W22b52DcMHZBpmNWvG2PfC9+VKhsKiBzleS+qrXZXyBZp9/Jw1ajkt8ds/pUYXoiKAu19v87vgeGnXmfPeQ2V/SIuRQvtNC0GwHu6bsAqbOtsG0f6++2lKg8lLjpXve7PcOXjh3MCDmfh8pGSb0OJ44q2bK3X8hBufZ/REZpPD6tJP5h2+ggGsTPqo5fFHPJQDisvQvW00lKr6QpRSmnpBmcWmjXgzpL9VXub6mMdmMzUDqXWumwpbQhK44Oaw833GRzznQMwzkeykYxyD/l6Dj99xfBo3dMaMnhkYUpc23pWZY5lfy6EDBIcM66fyMihrGkbN3cTcyQ88271EYEStVFiM3xFe98HQ97UyB0aqx4xtl2bLGJ9oVpOzljZ1JKNkcdggLGXJN/LTAPc1svMQxpZF0IKAndBerPTQdK8KC+VNRpB73BkGscE2hDwDeq35uVhV6OAFC406j5alyS95jWIlDN5g+OqZMwaFGNvhzlcIZNM7QIvrrqBd38MlXj4FjF/dVgJX5UP9+2/2+afMzXuxY6OO9gPEQPx8YS99oxKN7bUgUt/D8ugaBFSQtQrrryg7jVx9cM/fASARiXIztrjMYAFwtjkKy8jB4zgmrrxFIfRGHolrZrK2Q/xzdWIcAyFi5FsXvFCqg86DCRrg6lPBOR5lvi/fRFuW0n/RBwbPPfHXI+JTzyi4uis0QrSDFZ72EVhXReC1xV7oOTUk6IQ9ccOfpLk3AKOdt79XgHKvYTqbIoz/gLbFfsylyR7JIAZ012xjX5P3U3G++CZap7shAASXpB/bn9MnFbDnZ7LapuUI56u6utusSTty3Pe4eJA5I1RDZG6KdlkhAVVl80DEGMGYAbCzzK9ZLZv2AP+IV2IXhtTZYIzBRULt1vrcIAZZIB6+2VBQWT3C9iPY1vcN8w2eSpzp+QBQnZrzpXOW8Bn/Hrxj+tzP1rlicLL9Jb2C5DlRaCFquEhWoYjTKoO0TNLDXyaeyX4BGyZBu/g7n5wyN2XQSXUc77R9MmLKzpEWi93Tw22739OmLlEDZHTMK/0ECWOv/2kqEyP7dAV3owlup1defW5yAP7jEgYBVxT4fmmkTIwGXMWUkiVuJSUTRcvx0TBK3vqZ9/CdAKCNtnM1cuEp0MsZxy1yF+a4Um/Ejq60O3L0FviEsvb1SJUGLqmWIfEWhv6sgDjiUmqAyOD8b5D0X/aBG2ZylvHq7jFeP74F3BrRIzJnMc1oYKi7C21SFRhGSKKr5HbaDrmjfxUKGGQLml25Qo6nPUogcHUJst2ZpBWq8gIusXo9FNHZB1hKjc0Rf9kuPzYlzP9kNAy6rH2dJAAzl3oo1wMMDBz3plXzoVDxL7kiOBh9oo9F0lVP6bZEGFhn0e4YZ9HoYTktjdFuVsBBsgJDX9V14IMntgFSPkJ8c0KJ1wYC2symiShCI8G1+899ymYuXjdf6ep9/4m4EzBxXVNJA5YvtjFVdZm5XRp3KUOoq+eFh/YKmrbgAMZZSyvSYOv2Fwrhmy/xTcMIKZfTp5uRysU82R8BZ2XCaKJlE9PegNL+e78J6wTXzh0Am7B8Fa1wdWkO89dnAZHpriKEuG8FIcbWB8Mr8fmybXadncmTfl8XRjc44TyjokT';const _IH='592ae68b89c25df2c08b2a846f08753665591a3c521f72fd614474b64e396e69';let _src;

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
