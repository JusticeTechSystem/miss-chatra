// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/X1oUSWOVVJVH+Psaig+KKxvBcoOhMg1DQMMCZvze07xiF1nn8cya+BG/oRIOxiGyGnsWzCcXW+fcsEUCA/CJbbAkcwg2sOc9z2f5OV3SgCiZv+utvQVya/jj7nWg4Wj4u3YsFpLuVSLj3mRKEldikraHfyfpHTpqapeU1L3UJBNqIMkYRtlC6ciOzlKXo09i89daJWgCs961y3j3m2ueIjMuWy5BgXRsPtEQV6973NsjsHqGg3MZF+FTpIxop1FMs7I+yXp/YvT+UofZCBUZqmvibdNPCiKOK+8f/2Ob86tPpgruazscn0djD27R8nIZPcsa7IWV5JZOIByEfPo887okLnLQY6NpGZ23iBzHTrOxY3kARS7ETwrA5KaW0ZD3OHyLwgLM7G61cB364bl0TKzip0QAEMWCGKG4JZyg2qYxsocULi7fQVZ/S7HydyOHiaFjArpPsegnW4PEHuW1qm5ptVos6yOfLCEZKVjpMi6lmovDCR8UD+r79MjEhpZx2GnhQQ6qejrH5tVSEWQ8a584K0dlaqip78xqmSQQWhGhU4XT6yBPzLCKtCeEZrJEWdNtC7+PV4UzIhUpeTjDC/U4TxDamy80ODNnQVnKTJ8Wsr65WteKNxUvrOTYpuHtWNavHR/pYpfBzcDTWs3mdT/5PLgE4x9VQwVB2aSRMWAhOAi3CvYMD0dD4sE6d7sIi7BGUinRf0BzdafY2nfW1hnDrb1LIgtb1zueekZ2R3yxjKh3/OwpL2UoIOBGQClK0VzAfT7Cmr2mcT6O3himq/TTHaUT3RmEXnuiUv6NW8R0oHqwhTlmq4YUgPqEtlX5srUyCgFKNBIedxvWsOFSxReoqqNq7a877OY+KZW8qx2ObvO7VvvONWl4n0uItGeP7NmK7ffHJIIWhWFAlPnPCqSR1VWWSL7WMMi/VwKyR9dv4oNXUYTxLJoig1+36z/ZJaYMkwvKMVIS1UFFfkhl9iSfvQtwneYuSrLVuje2Tv6XOXromrTsC6XHGv83uXemX7ZCmLSGRE4Zf9XLtugnrO2h7FLZtYnvNxgaxmb4DDldrPutjgdqXcB+I45ePeGoVME95bX4rE5cCPpQwngMSLY8T0RdqslXbQ4/0sh0KX70eetkH5AsPOdARjUnva+XS/eHSvWi/USp6ogizPohHG1mCVtiMRgVcNr7pzhnxOX7dRczOs8qtHfNTbpUF2zM+z4DQzRYIOZDSK0pOYV2K6iMwXofXmZLP293RggvhCfdCjM3oiuaSrKh3TqM+GlvDtnyud8ja09fdXJCPL78HtH2g0G8QRnjvhO6UAZ9BJ44boYJ9Cmak6ei1eaZ7IQTyO+MhwaEgxNIE48CEthU/z0JgXhcA6VSYyxL521g==';const _IH='102ed50be349501c2acb91ef9281cbb81c71409e8e2e2a541bffbba6f1a047a9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
