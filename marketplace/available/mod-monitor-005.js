// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQN8MIuezlu8j/U+1DY345ZI1KitcnevBqdGm2QrqVMCE0gaUEOem2pQMe+d77qN5hssN7l1hK64333jO/o1jWKeZDk/OY9/MQdsnHXadfpPI0bZSAeAjXeFYZdBAhnvNpnRIMUP6EFf7LMu17yhl4Ecld2LRZggCPA0UE7JTcMc6VYT+R1UWsUP65EtgY0huTsQwjqz2RRROklUZOkqSlyds7VNgxEtOED7wSRHxjZY2EQuzVawOjyRU4OKeVugDISKlKOnB+DJynzp7bXspblw3dSD6IJRtjeAVGgFv7owPoAAxvKEkyRTT+i676KoqQ2UCAK08ryxnnEdHnGQxhcj1jUVQoYAyvganFvNN0ummnnXFrGE3p5qWucV1P9HR59INF/XLMMENDlVxJqsCIgHVXKEGyXlCkJHuZ3MzCD4bDB9cvgFxj88GFnYyUJyVbXTh1L7u/Dqs/OHNqFkY2D0EG9b9PwInHsz5nWvOPAdl0k+KCDTg7/VJCc8TfGdXvBwRNGfajCCE/BrXhq+ClQOFiLTcbwABKpurwz0kHS4LnfiemjjCItz1y69U6vRVxDRWaTuaGyaqSjAtvuEBgkfQ2YpYCcJLF/uotkOdZ/yhHOpQ3bCe4izyk7PcddnAqmuXq7OouHJOhygvtavluylJS38Ee85N8UMrS9mE1Xm3eTaSb/PmHcaPiosTm8YI/gXkIlQ8ikUBum61m415DD67jfe8I3uS8jIVJFUMY9Qr7YvYqAKrNC93nuU4CDmwLr2LTvQ6nAxhLf8aBtJKpx+6ZHUlySLbrdis/KpmMakSeogLeyG2/h+UfX+eo98wBzB9fI3/cigtKNihnYKdIjU82YycVr3iTJ8W4XOAFf81P8gy/8UMSALcFHyBMoV6MIi+cG2/aoCDMVsx66hBWXAWa7xSOjXfm72rw6YNMYcwiL25R9n0mSj4iXe2SL1VRoSYWVhE6GjWmT6QmBMX3OCsw8/hzrEO8vbCHYuNFZDrKaHSvCMYP/HuEw5YweKV0YNhTf4UwTo6noZy+ONwpUry7Y+/U/kQNQPVUF9vpxLgQXrammkYyMqSGUiK850TBW03/H8bWaMxNO1gDw/5Dv//wj7nB0fMOU9HIgBJM4WqvlsT7nuvUwDX1i4LpAGHk9hV6waGKAQ3XNxxY9jNWRURkcANcxmCegNT2HGDPmtTEFIste59CTZvIstS+MC1Nx/GKP3rMVnr2yKRe8eZLC3oGzQZI5/2vKtxMS8UJpjnhHo4eedQPREssySAb0OvAuSh3w4pFuPxOUamWSMB8Nhep0gwu+vcPvpGJ6HCtOAL6aCCHHaRQXnbr0sCeLUEmSh71OQfId5nx3YefAaAc9rdKh9ChrShmwHr70zunlxXsUEv+YMKVR';const _IH='df70ec50ebef098fc5dc75b0ebf91616cd8b3ef828df2ee96584869f2d3a6da7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
