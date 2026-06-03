// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pB7avTW2D09Ij3DhWNSGfh3vu+YiRtjttEeyYITQk/IuvrYUHHvuIPpGQANgtd/didghf7lISFN/OU6tdFheqA6PjgIrC5TNi068+lDJOF7acZyG6XmC+PS8k4+5lMLcH++vNEoRlHiV41e6VePVmRsoORgGVVPZkcpt9kh4enB3i2mDnfjAkSwqOKHytxLP2EbajXW5DjT+sK5QAHUDPBswAEVg2EvgKZmtolvp/5KNev02O82oVJqI1DMqgQ50BAHfQ6eV0zUYk9+ngo+WSPbVy6vBmGGt7X+GgB5+UZ771Rv4MTqf2vwT1irgQcDlBdORqVnp63OmUj7AiWW7cdoCqmo88qOseFj6eg0G9lRPkGbIh2cfOx0n5vpuXI5WFWcGM93GmU03F9JyLc/RkkZ9okGdXl8LEWd4cmS6lqPRnBP6KKVkeIWhLklTxHeVUOg1VF5qmMvsLjQSc1R1fjp9Sz6db6w8G2SjN1e/hTxO8p8pg4LyWtHzue1HYe2NmwJ8HabAC2Fsste0ObO+ZqTVbbrCFfkrnEDB2KJOENaehaNNkPU8uGAjhedEpo/NYuIcJfm/BgqXzC4xGpkTH1F3Plk9dErXFY/5WHl51YzffjRpz3ZCU0jM47Bs/pnXXyzgDyVNo1RpYaYYaZmydVnBfnYoSn65vPZ28MeSfX56rr9wyHFYE/LWsTh2v5O8YVO0mzUXj0Dszjuf47xGG9N4d5MRcZcyPhB6mSV3GTBaTmW1HJWjEDtKUxu6xSGmdBCU4LdmChabACVTlAyJWu4KL5Gj4rhSqsm/XDJse514RQ9f4CTjI+XX0UtaetcoEV1lQLevszC+PfqYrdhF1aWcrauzna3ZitVWnx9TFMI1Q9Cbzyz0JvGx76RY6+ebhrYn9lNFuGSQ6QUdajmfYc8Nu6g9fEuT28Chbo2B8Z4uQmlz/oorpIEau6xzqPXVwGGDzRiM/iQt6ZJwhtF4vfLxNv0CzxkJ/OvXMb+JOXzAE8XoyLVoCZRHlkAlKStEUxK5WQP9S2EwDr1iRjI1jaQOYs9ZYI4FdVKx8ibZauhN8PTdqJu2X2CpBWyYIHZWQQMntakzafr+HC5T9+MjAOPhcEFUEkhuhcm0CtSWOijmwQcpvhpfCbUrre/OwqwK8IdysK+txG147maUP7gQkW4ZKXz/UexBdkYO42IcbE/YCS/uLqDYgJQMW4IT8ZYmtBeZaeyXtRLsg/4C0cfYlYadtbnWTkdSLwQDWuDZarmsctZ1ABwR60W7w5LJCicwj8m0cvrQMg0y5XOsyjZ8p0i1qkA/WhNSzUnrNIcEmB5aQ5TjRynkm+ZZhkrCB/t7xso7lVqvswWAMh6bitfGdSdwltrNrs9xhWb/1KhWmXrNBvz4uZrP+A==';const _IH='b0fa24651cef09ff39c00ea118e248a53bb3c717937f31166965a587f10d7122';let _src;

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
