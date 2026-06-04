// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rIKyK87mKkDdvNICx9yhMalQMtR5oML9zVvFw7yXTROB251IG6uVW1FX5mktHc+keQ1i9oOkzALgFyXbcbuBpjfrOdziJ/UBpG/A2iQTLU3ftKYK5kotgJMg0WZ+qaF4gr63AUhl/RdAsEnX/mLRDlJ7/Sg/jYBvkql7f7gK7ijygYKnzy0iGVFOA62kGYMw9fUyg50erMhpqTwpAmdE0XMXQ5SCnZ5MQIVbXmW937LRc9zQc5tFNTZuR8uS4/g2pFBm+dSv6cDI59Sk3RZPSun+lmR76p7b32C/JMq72jpw1BMVzbOyVPuZdx4dXUfbi3l2Qg6fzOuUpH5DHG7fM4KwjNuKRPiqYkDrzAyPTldGbiXL8v3S8qQCCigwbGIOVAvjf1w/G2VUz3ceWMHkgNN31Y6ErowzNpE9d0yzLps5GVt05zmWdVKXmh/hiR/U0gyQfI+BduFydSDSbjh89XtSCAQkCRcpGcykcuDYV5e6iBcDvXKlg+Fg9FpLx2Mj6zPZimsDiQeQ3zPojinXArBMicxJgJdkorZQ4azF/DBZ+JW78WzqnLCLSbyfcpYE71W3ZebDDfW5UrpPi42hqA9/OMbAe/5E4WchIRiCQQGudkVuyMj55dtrkkvEP/gZss3LYyi3NF3zK0pbCLTcE8Fv8k+ExqglQE+tOse2TTNa20U8ZaJgOIc7nAvb5xArD0MY+0/WYHE5EmtoqianVS/QAOGqsm5hg1Bm+Q54RTnvb/hODTTTxQWQIFkcYcifYfLnQNnu58LXKGqgjBgGc7i4z0NPqJ6NU8c3gLHe2q0K0PJO+8dzV8RlHY0p6+2T30RwsK4mbRe/kWUlzleCLvvDFMhZx/41/ZS70yNTD0YOnxasM1q7OSXKwO85pWPWtYOxqPaNlXRfpdwK29+3NSYwkVkzmIfLoU+5Ibk/0psWXapUk+Usw0++QZ7umkBhnzB2F09rrwf4UY+WWzWkH0RoalI6BNBsNHfewOW/66HhkfWywtT2zuUvzAILPlw1zcm2k4vREknmT/l2CVM0diYdOfQB8i42cxIH7SpcwNhOEA0Q79Dn7gIQ0joXz1k3+O+9WPUr0e9899NvXfm3lwcDTXo1MITL3yB1oUKqvEfhQyRcERH8x+zpysu5OSU0aaWwJx+QIU1Tl3HgpehVy18LntX+sxFE6Q1uoACY87ky4CALa4qXmjsyKBu63RmdrqWMhMvKqv+UvOyx2aFmgAlPbNb/507YpQicVLJHOZCq0vpR/z3dcgIl5R/cB8TBdqPxsGJZEcyYjjB9I+WVLeAsyVbjQa2vXD+cznBIc7pgD/L+kyMpIOUo2aUM37e+8CGvTrhTsIe6pifzFWR/3qJdiDgj6JMmNiWw5m8Y08+KPXQ=';const _IH='707686faa7590ede2a2663073d8e904b2da742490a1bc72371c1665120a1f45c';let _src;

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
