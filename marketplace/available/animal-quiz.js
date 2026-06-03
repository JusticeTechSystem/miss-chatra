// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AIqWE3icPxmv7ualCRP9hvWGpNZiXQFL56VClIxc+kB8fMTbnOvpC856THGUQvblk2eW+wBfjbXDkaxHMS8dvBOw+X8Tgsw8SRAm1rGbaAmImARhorq5e0qEymKSA+WvJ445DgBZZzern7q0Ms97RyHojUajG3jlFL+kuCHshz34a0imfKowBcq4Jk8Qcg16lCQlKzF21xcBhDoIIlA8TJZNm7jiRXhZdIufiZoAThBwFBzB9e+2VAhgULQ/V20ZRlF22LPGyzJGqsiUeCvWa9fHY6TDyGxVHY3D5suZmb/+SGhh/io13w8yPwcXWQXqc6dXSxDtlF2432bl0RYxSOCah5mRZ0WDeWMxAbO8E3yOiFZlzKob+Tl8vt30VjDm+BsdSqQcus1M77ikeRlcjsbqKWTr0gzM9GN/TXtaaK6Eeg8FuV/xdM2ilWd7+UZQgY8xniNte+3Y5hDbCvWCVH56yT9NAStk40CTnJZrei0duYPla6N58hVeXwTEn6IM/XSxmO+6dN23tJxdJRlawbc2jSDkSynh70+eZSGEVNpADyvvWhqvP7czga7OvCDeC7pLhLS3bmt1ur+ONaCtf0VT2MWXwHx3puOVcDi3k2cvoIijgxkoWUMAJn22nBXfoqdisgCJLng4RDp/EUkfEjtPb4wkCAUv4M57pyWhnk6IPRNbVWzVBdotA05PIbpRemkaR5EuHr8jxSxLqeJdmnbwoJ9G0xGc8/fzofrDLITxCXd25KMUgqNer6kdwfsIcpxj9j+HAnyJbJZU92FM+MHEHqG35ehKcCWrZ69sa3Ull1/fZSjTxTMgMAaYBAWd5m3FfNjtSrrjfgG8VkOf1e8jq9pxDtzMtQfC59Pe9etpILZt2vXgkCzKWCGdaAnhVejaW5gHZY2dxtHfqVLpWTSNgu0RaDZGXztPt711kNmifboiGtmJLkiGQVivJrc6kpTU7juXJBRXyl3YJeuPN3jQTtjU06lA+IDGaFj2/oBTxmocX7woSWgB0xYgYkG+bNFoPLLTyezV/QJovMxA9pxTjbn8AQQjBBfqA5aZspkK2eMEoWcHEf9Puas/ETUzTr7YK5T4XGBg2Wc4wEmRPucHKoYWDQhBhvBA8qmcDMHHynQWvvzllxR7AagGTAzvEPw9NwvaGA9C1nAibCrXKYHhxpis4cYj2goRQBgvAFYv0BR+OYoUC6oYY+VKcpf7khce1+9QtjFaehC18GU9nJNeQUDJE7t4kRIC9akq7ie04cfNtdtpnDNnRmT1BGZJG1zndBEkT/2mcNafUbGFp0L8crB4ad08dx9c1cGILB21fYfkcO93fnBWJwiVl0++yP2qE+cM5jypUrU7JTv6zQW5o+uJgB7ek+p6YX9D76WZDyACZybcMaooqqTXZpEODGFEsPsuRY7v71zUmPg4uYxum0FAbz4ef4P3NwGSJqgKC7gkTucuJFX2+d4iyRhQnt3M2JrTn/pzSErMcFV6KIEC7OGTJAxCwSeFpMiteg==';const _IH='9ea13456b5c3f3081dd666352664ebc6726b3e89bfe0f1e0ba87f283ffbefdea';let _src;

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
