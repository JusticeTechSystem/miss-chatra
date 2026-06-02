// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K14S+yAV5UDwAHBdqdyKb+8J6bKE4hqxI0kuMhanFhrrv8eWZ5jeXAG9Z0Si4P0TOY6H9MEFpWLgV4teBGbcLwRo7sAmt/OiLTQjIYDhjpeE/u8rZQ96BlYYsaLK3zk7FhFvGj+3UHZVOjExb4YQ+vT/DuelY85JDnKeZQxtlsGQvBpxl4HKuQCGbETyqOWVOePNxUERiUdswmTwmLEUC5d53tLhHkHiPyXL05tMNeFYV89zcIp+QkhWGfsvCbkrYMuHz+d/9NjMTVhXf8ya+uTgKgG+TKLZNcgwWEMtd9Lc0aR9B76/GmBL70VS5ZRQeC+sq2Tq7dVpzzBexhGxZCzrvxKye6ml/ULHSnTsfJtD5YTf2y3K5khOnQJXwSdgalQrRyjvpK0PtSTQ1STvxzb1/NSHroy5YMAIy/9EgRpAe7Xth9Zv0eElt7rOfcjq/wwNjs34zLVeBSJ82Myr54waIZTiSamUABZS1/KUBjbIXVnZ28xRdceu/37M8eQsNq6wyDPOaUtLpm7EsQeevVQA5jpLRaUoLd57hGkxdtPHFYETGmadVlI+nD7FzfVpJytWqf7ozbCHfuDh9zVkQOUZl9F+AWscDNHUOyLznEhwcawwwV0P6ymS8CwPA1EdgVWuN/s7h9XJP/6iQdc7XFKEaVR1gJaXag9XYRRXrG1uaDY9jcnXNusjS4IPQlDH/HYNEZJo2VvB11+Xpaw6Aci5zvM2AHZMbsHiwG0Aa2GiKuoiVT8=';const _IH='7106cd3ffcc0fd5dd8336caff5d46028aee91286a30d01cbae2b41e128a1e804';let _src;

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
