// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TrziGtE6CLHAEVIpRNKEKMa9/VnjY1ciVF7Vu9fHhCqxPhI/lVPKZwubP9toFGZueH1i8cEI4Y9l/q8iDBWwt+WogigVUvO7GXq7XznT7Ly6GW+YtGZjnyhz644noJl5yLetHOtA8GL7UTEF0jWFmig+jMJELq4fIAVQffQDbfsTykyti+gNSW2zYVs17l7N/6Pw/X/lqcmgInumyv7qmoP3u0v/SuFFCfTpbWeCanJfrhA6BMgPE+qDMc4SpuGwWgq5rSzu9aPvgnE/b5Tb8q2/ENAVN5ouVUT7ZZRgPn3NAjnNi6o4ao2fK5QB3FC8RGeCUYP4nv4RgIyO56OA5U2Vdiottq6uSZ3y6x2GvtFrMEJXoJ74qpGh744pEON8UHhWc0Oc2/ODeCUiR3h0rYf8LzVLhRsmqnd2TxGo9RFQwRRUCNwL5XuAGkohK4qFkjbksZxQxRSdGEZMDLTcfP03Gnne+qzvKorgZZ1vJ35aC/fh7Wj7zsUihfBXO8P6gC5BmXGofT5GgT2Sx0Lqf5DxsIzIKWC0cFHUTAvgfyvauckytexn+3w/OZN3tCnLY9R4I9fs3umHuiHUW/wch1mmuw5889Ll306repoLI9KevuXDA+fmEpDcS+5pS8CMdafS2DV26GLhmXPC1jhH9iWb94/4rdd3H3KWySybthiiz6O1TCU1K8hsu1m/rvDPpGEUv4y1SQRivgMUqbLY/F8huNCFz9+i/dVFGITRjQGv4hZYUiTklXOczu+gNxGDkaA4hcm4vDyyEIb4fqF1SS4TI+Uj/j/7PRtU+zSU7qTMEVhCtGWBZhJwOXz1yu9kIqlhnKpUwFzFSWNf5K5qwont2oy4vJIvtNxj9FwoyRgsWjlLW2H4oHL8Ac7Jcjwby/cjzSqdYX0DI9oXOBnb2HC9Azscm/UzUPE9QLo+1qM+2ZoAOejMBufGlsBHE25lrymE23FeD0NG3EVuyzZGbLs1G2ZN3wsNxwVYt/OsUmdaxXdoFIc=';const _IH='34c1f205a17dc26f02110323bd38c2e4f603c2af12164e3017ff8d6148e49ec1';let _src;

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
