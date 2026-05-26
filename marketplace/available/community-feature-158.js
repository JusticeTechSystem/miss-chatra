// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dWIv8hFrlp2CwlcVwohWUylqJ5fdNSU1jXPq/+MZYNEUKV/He3RVqNjy1UEWufvcSvPzd4sEYtNvmvcY3aECpPPsyW9hD5Hy24iU3QkbpeaRJso5TGZLc1ElPTC4A7swosRZfMdTnaF+cK3s3kVZigQBYfdWDsUlpcW4UrRLSmrOWspbPmHTlGQEzhZuLVead5lmRVe92m5VoT4xItBEpwl4PkmMQBh+/u8NDB7VBi86BdTT5V2FkA3aNWRXfaGEYkjYmDuLLxE5UopDmt24Z2QVofR1/8vzpMKlW+BjHF7dbjs9SoaEoT5dldF2yljbgK118euXYX2pJzGTwBDY6IOtIiaNx+aY6cG+VAMfzDD8X77HvnLO9YC7573cH1TwRu1S4CRmFJHIaGYdseL4KEiBehTCJ/vWCUMg673FTAnexI/I7n4FCzwOxmLlXDe0pWyK6xEEFWUKT3Z2uJaxV5jmt0ACg25Q1tm6oeq9B2/FeUCy9+HQ5fPnv7qe+cQI/AX36v+WV16dWqVSAjdb1pxTYarhUj4A1WnYaTB9sad50gVndsYnzr+gacCzEFS0GBd3dXO1OhBDQlQcAo+T+ZUAUQOmECJdtnoalFMXMkWhvvFkq1gA9GypqbAGKEOrjcMTbduAscEqqeiWo9pudn6c0O/aonB8WcPWHmKZUt7ui5DTtWC8g+ooJzaBVG2bq5OCStPs3w7ny4KeDYdI/AaMTtX30dDJkBXqhlc=';const _IH='c40e377dd18e17c9f4d217e0ee3ee600517de7806c26e2459b013edc441468f6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
