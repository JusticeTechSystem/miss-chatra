// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UiqahvRmC+eNjYOQzvyGJr9YbvFQJL+k0Peh/KBs7qh+ADFs1UtPSo815yhXMLXv3szC969+UGGvfHry/jLc8uYSEtYvJZ+x1UciairVRoPjqpSe0XecN0XDCgirI0RVrXTYbkcqulQRN8O3uyYEIT19z0OFgvFzZ79g2vy/oOxeVniQDT+i7B7Hhuz6EIJq3c3dnuzoMpGg6zE3maWMpsuGooJrLuP90eAABYmpwk2ZS4/Td5MWTM5wAD22iQr1u0ftuxyESOIwmxaY0lq2jEl0nC5KfCMUFmQTRAud2etctQgMgaoNF1jSw6kv8W8meT3mvgdBYvPrxduQNVDlB0y7JzH2CKAWrzIScbRs80xT5jYnbeiUINn/mB0mlm60uq8jr6ovQDl/9H+ThUfKmqqPV/uf4N9hvIdtz/USpiD67i1t37JoLG8MnCwJ5I7HRQp8lANAYYNanMfEVVQpvGJKQoY9yah65MFlirjJL80uoUY4opkAUMXJcZoWzgT+HhB9X5Wb42Kpc2GjvdOq0+MK+aXyL3/byIGpVGQs4hGuo/9VvCdtGQxmANcVnbF4oTxfBpbqKyjW55Hsye216mQkKZs+vu634RyNejuwLn3ZLUT0xfwWWxys0ZO0tBTAg8I3JisypvwT0P9qKIbM7cDAJNBA/Q0pNdnoDzcL3QmcDKkcbFAhwEn0+yfkWv6UtLQcme34i6m1/aewR4D7wafgKIEcPRZGk7cHE7L1djnpCAe/Md7WLdwgdHYecXGV9mODiKzpoPcb5SP6wHRFPL4nID5od9eSTXODJR98gmRocFRgrra6Lf0ppOP5SaGfUnNGgcIF0qqWhx4o09+cwKcp151Ztepv/IpHR5lP24n1pem43bzBFaSC5txmeKUTT2BKtxJLw0vzo7k8A5UgPFSdQCg4V0/86Btn1ofTQgv4fF+nFF3lM8k6EDUyId11yz8D4qSpse4pJ5jxceu286bJIhwxi9Y6L+ujsnqvQ0XJHA20f/BknhWx7YHuXICLOE2YELuquPEcBERJOT8ewUhkNYEG1RkFbPZIwzCOvYy+OkeFGjxHPzxbIE6oNGyV8Dp8WgvCZa4JdOC6ZmPknK1eAgNFIggHNeN4Xbj4AQP+XJ2smJCDd5v7MYyFCaaIq/lPkD1OgAwWdlFINb4Faal6wrHeNOI+OM3Xz7X2ub+eSypDdSCaN/aWYNV2CFFLeeO7+e8ReXy4zXSykbW19f4HOeBib6a5FLMK98chFsTks5CMAIvNL8+432y0UoOWz1k/mMUZSXAcnERwdhT9LpXcsZ+uqq+UnYOMTj6SV7Ceg65qDaEmNs2bH63Hk2XEXaXIzGZkRG23MbnqgBaCzRI0dbaU06nxFe+aFtz3';const _IH='f9f985ae8ea9d42a64f7da71febc8671dab63df91ac24677be6f27533ba425fd';let _src;

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
