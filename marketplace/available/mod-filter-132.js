// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DgJADdjffjz8MZyzSN9Jy6DUKh7tMCYDUarwI5Cmkb7FGtx/RL2S3MHLYSWYIIp0QD1lPog2r3OPEFxwQv557PyKqsBtVysbIgxocWN5vtX3vrWdnwp4Tmwf8zDBNeCHNoDEP4xmBtsjXizNjp39ETjq7gBERuW8yVHbdCj7wzOPXYeiwklZsc5FE2cjoU6TIi4m5NECeB3Ud/mdHHwI7QKqGm9/EdhnIIFKUuRTN1arU+fcdVQFubWhT0FwcUNd1LBcP9Ew+wbbHAzbjqkvCBGqS4t+iQ67VBsGGONFjDVeYEzr6AzVuCOu/3O/tpi1kpcw3TOzod8HD8OER/cyRIRl0R3TJc4wdyftWe1RCIjqdcOBHyJqt3usrbNT3IqCilmY/pwB/Ye32BvRePhI/wLrtZ1OZmkcyjpyNUIGRWvb+Svc/YyzFASyO+CJ6IxWSQmBNvadYE91F1xRy92/2ZTEF/lY132xReaMWXT6qUlIBIfrmiaW8GAAqRsZQM9Uhg+A109Mwffq5fMo7hxiRzzThzPTVlYWBcKKrxYf6BEAoWFoIxDyM+gJdEdv6/bUeN6eFQoR2y9ZB4rW886cugOpW20Fnut2LDAmnl4c4CZ+SLG21Pidswq2tl4XpUqEiRBg1+xJWcqx/u4eYblcpamAfYpWlUIK9u7sU63UxQ4SrOUdg0MZG9ujPzcfH/C0zkiAbA6TB8bpacvc6mIJowckiugcpQXSExFmvpE0aw0ns5B9Ru5cd1y0u1GajvpRsKTa0Uj8Trqd+G2ubjeM+gi3qwzv5a5Ng8msRf84JgfC2JOg/ETLZ0qScI06VB7+LuUisCCk0Gi7so+DDcLE3g5Tlbiw9HOUN7MF1Ff2j35C54h0RIVwwEsXhkTQNsTh3aM3NOU674RoIpsOqbRofDK6OwOZLLSVLa7z89CcLhd8t6eUSwwwNzw68yfJ3TXtCVBotgM6WrqzxQhTgX0Z6JI0p5H6BZMXExn0k1DDO3fqg5Zb3T/S3eqOcQoNcgLv5+pIDYSk+wgSpkbNBCzflprZ9qUWrPy9zSQ9DNkjeumc7f7aB3hBXTKfYzDEIv4F4pBq5Tt67lKPdmiekZnf4AkSPuaii8lcYjxfn7KXkebJD73A7umDrE9uGQSFxWolr9NidyH7RHOkqRE2w2Tb1Qcp2A/CeNsuKwKUuwuF4eNlMU7z5++yTnM3pVN/9LicQVW4TmySA804WlqMWQotWUn0+FhAsAz+7p7Su7htjaVL5o0B5fUJZdxP0fDSFLt+UG1EBCIy6Ku2NHmFNu8mqZwS3RluMiyHo4EIqi22rbBvMOF0OJkpSSsOa1PiRFACKnqiaZGE1GO5xlN/Y21JIRnWBJ43HNfNZDia7PG9yAA17lYUrFw2lQ==';const _IH='627878b5cfa1610a1a8e4fcfd9388dc980f37d97145919dc529d1698a53fc7c7';let _src;

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
