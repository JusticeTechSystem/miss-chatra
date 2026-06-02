// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CmLDn/VdesdAK3Wz4PSEVWDGdIDsU2huUkFOPDEnrilaLVyfnahy+T+FfNV7/9PBlxqBzng+3OFJHqZ2C95djV9Yh6s0CjwNYIF1ug4XB5qEuA3HydyGqdvY7AExqB8Ou+1CHaEtkEp8Zx43cvDy0NaEn6ZUV2BINdxFqw4rFHmmEXml78oBDfvOYoUndL5n6+vtMqb1d1dESBltOAlldcI0n8AidD5FXhvCC1spu87HFJomfApIu0+CR1M+eIzV7Z6FGG+/l421IdyqwQEkw/yf23NdGQNecpTovJoYAHE7CEtW86ngJGXqqg3imsjkfIzJaZX3qo3+vS3TtIS5w6oQXC6X/hcNaoRSwzCBvezCibnQZQzJ00Bu6K+RFgwhhiWCJtparIAzuXFKjOYQcm4rAbociM8jbEdl292o1ENOaN9jfqJesH4rV5fzNHHUhbjKwj+KoA7irjlXRGOz6bAP875ZbJxgQzvh4H9l5MogzgpESz+t3b+8bvw9u0eP/UxmhY0CdrfFg5f2HdxC7wpQZ5SQmitrq9fVpPoAAqZZwCvBmxuUzszXiHL/XKN9lNTMkS4zEAgQXNmQLEXQRvJbVj4W5lwi826uLQPZA+DzbsrqqOGLdBZl/j7WBN6INvxhXIbxy56z/krw7Td36aFotpovTtseE2PASd9YhwKywe8pdIBl0csq9R4lu0ih3WnMSkRjV++zQf3AlBoq9+9yM7VUk5VjRtLxHcYX8Dvwz+SM/CKdrfRlQKJt77AzJKUUpRb3H0lbHpF6s+FEHCBmBbqmV/bxj1xj7FanAVdzAqgVR7rlan0VtGtq31kDD0ewi2i0fFfFI2eaWlo/v18V5D/Fjam3G9FpP5yTAOAJplCEucZ3QftZKg4c0W/PW8dEAXqIpbSrfWqcaQuT6sO5+2/9g8l83BaSI+RkiSJPcNKj2mmM/WG7bS3lwfE8Xtszlu4P67FdQ9azTr+zweiL0DYmJXSxk0f8LTWUqt1/6yobvl3YrMhXT2ibcg0wmfEu/74/wcqYnUUaWu+Vl5dhj1TIEsWWEG7FlHKZszddAY6MKSULV/MuiCMryc9SRR8gVBTp0bR8ceNGAYw+MnFofPYpK3Y+/W73uBaJ8ccrxZ/VbIP8Z5esZtKguIhEkWeEGpAtAL5Lm7vMq4VpP2uj+lK/l3utD2RpSRFkc61WUz7JYsPEWN6Gm2g9vRcmq7nxK3o+wNWbwcI8zTNt6IWUC2liNN85aM6Uv4Eoc1OuBD5rL9GYaeU69L7U0jXHEuog5yTmfki8zJliqEqPuGhuDxINVIkhyF4/0Ig11fTivk/r+brp8Gq0NDz3NaknNmmOx/47Nlf2q09PtRpmZEWBtH6hVJxc39QL6bjI';const _IH='f6fa836902c683f24b8981281567e71768d3e1de0081d521ff37841f80600fc9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
