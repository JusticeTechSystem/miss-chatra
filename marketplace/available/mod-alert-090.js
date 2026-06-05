// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UDvwrmhV5BWwCGsUkvTGvY7F2xxuIiXOFRE7UnRQTdI1H+BvWWfRCRUI87xmglGFPbF9CWXnQa2HbxGeTqakPKUbGaxsKVIVZpCroYmofI4Ql80JgZj1Tz/iLUEae86o7pBMjAwjokXsDiOT5GA33MT9duVbsWs5YGiMuovo666mf9pa7jpFFaIv1HWwCNkaejPw7S316VEdNmSTS6B0FWYjuqAA0swAKI7VN0sT6cSWb7JlVodC/12KDCC6ezQQNEDfNgDfTpTjaASx0UVOus0IpRiRrCyCRrHfkREs40HIX8v1W7sAJb9t+oTSh+EjHRWVnv4etbyhoWOe9pGQy0pTtPGKweBCI1Or2wTWolDIDkig1BnM333BwVgkIhSLHF3MzfSOMizvREO0HDgOaI0JPiUfW8/lmBYYl1zWv9Vpz9rGtttoYrgSvsBID+L3i/V0oc4iJ643MHQKCJeZq9yx8zt60PHIwSyBVlDzw72KUrmIYL5J43UxNzv9m03ovKRxhvhnbDVNrgOBGA+jIkBHfCb7VXi6GwcChCAMxvVUbtFzwsWKtw//EUOx1Dey1NJXtIVnEoW3+ISfoGd4tAJOFQyDtgIgRbwbIc8zSsQvl6ipDpkzxzm7Ov+4kspCRZp+SbOo7/9R9UPuc6SBEpck3WNzJsPa/rW/BL3ByB5UdzsgACudaoMCTwWTsGY8fs32NVphmOnMV5DVGtHBXCxOSF97oo9hTP4tFGICu9/x0RhPmWS9HNq1rhJ14SLZ8fvSKHNrnhl0WvBpQVmHOm9QVT2DWJQeduUoXIJwfz1Y7ACfBNib+YXXk5jXatf5pDf0YUg3A9NvPCVPSp1Ccer7lCOtlBK+TC4rjqy2RIY+AZ/0/jQFbWIJ8IEQvbOxvqRiEd1wuSlxLhcTNDQcFOMuH4llXZtQNbeVe49aceEuwzPciyziy6rSUqA7JQNtcycRwgVE/htiF1WT0nwAlKheoc+fXs99zOVw8GKn+LFUOs586GNewDCkNdgT9ridjywdTScQvXdhNmJRRsr0BRGE0ZkprqbYmiS0gHrhbhTrbgkqOZ5wzA0b4MAZ8f3kGZNCh34u6tpGFxeL+f8IohjdDiICekUo3PsxsWqLAZ5wcGx2px0qVLwX/JIJMhKMybGbp+c4sa1dAWsL/nXY+TrTK8qSs+60BsbcQ4vUvZ9h4avRK4Jm9Fy04Lo6ZkZu/Td188YFxA/oUeEmfpOBMc10xfAKmTKzNTcEQVe0PMWqIJQOtPs0MfdpoOAPLfM5gkhuuvVGF0N/aIzMbwgQNCz6poTvVLwRsTHcn2kmmDPkczfss7hzDILOIkeZLpxjrsj7ouzR31Fi6Khg4nLySCCcAZXf7gLy5w==';const _IH='d21d25210c4aeda1b1190b28e7f8942bc0be71556dc4a8fa8cf796eaf8ab82d2';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
