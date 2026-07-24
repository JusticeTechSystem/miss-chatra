// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSoUzAL54v5OqOBxGg/aF6DC3gyaiOxFDHPpXJqZhaJstkEmT53T+B688XVIDhxv36MQhI7N6+2dbhNtrIcni73lhM2trRTpy9Azpy5e+QpAX+jCzUVsh61DEQBvWDejApW8acMW+72Abc0UNGl5R+5bRW944LOSNFPN7gFZXat9M3OCsZ/jbitGkqfeN0CwfkeE0ZzoEhJYXdAV104bst4Qyjxh0tPbmgWKpeZd35xRCXwl1fwr2LHBZL2QYoo9Xw2DjCZafMptoctBVgoN35HuTxfvHAmqzebCB35h/sAutJWYxIViSfzOEOtI7BPnAp5X4Zam8gUuI4vfvg/tVs4Bk0hoOghDX7CoFfMiBKT5e2wo4dzzwk4UyFaNlSXTWxLgmAfVDlLWBcCBWXM3qTQG5GJdg3eUXJQTtDR37qPuz2XsalaO0QD3qLwH/O3VFDeQgSj+b2SUk5ZnUxX8I/qLA7n6qhiSr0A6cCuMyE5+cZBisw5kLL7jKO3xQAfHkwVG4xPJnvlxz2lY/fClmGJwOYG3EvUcijzsX+i9dTx5aIeyfDpyDb4jEaiHLXzmw29FS4N0fa6lApwz5Fda52oFX6Z5akYLZ2Jh6f8H3AX/rDcz4ngDb+BPbSvUePc8dhfANoICIFxrYH7T8KF85TN2sP+19SXMnerE4DqNaXWe/bvJaOUCOe4ruo5HJw+Joo/vhDSJhwkKCDyca+Prx/wpbSQEaqKaW7dKh03mEfnQf4YqmipJxzQ0m8gLZd93PrVjLz9nVOxK3Yl2mVIEUzWdmrXr5T4dGMtoilfkFZTXx+E73lR9TN459CJKrPTqzL/3PsSR5HRilwxdI1kmiTpdNuurd/jjnS2NL25SJdgPuqBt8SnTe48SBPYTgjrhpss1fyjmFxOVzHsCAxTziB/NUahbl1zg8T1WSNoYMK4euUodh4Wtq5xLJveKLVJn5gtWo18pglbdzPOj0+7K8eW4xWouQ9WLCBzMY4fmyQlarSb+o1R62JUq5Tj1ZW0u1eOIZ/5x3Y2tp8gR/e6WuBIUMwlGWL6e+cpKf0p/Dhzp1Ch8o5X6bWoW5OZy5KxkdioynUXSaR8MyQHFTkRPhYyzQJXf0GhJI/187abn72QFFrA/JiIrBXsIZI00dTSoyulgTLFamxfU7C6qcnjoPfrDE3TiVpRNCKfB0iPTh8VNXnFdTurXJdk7kWm3VEfuJyQ7LUiAhLXjzWA9DD68+wEtAu1TtgeL+/18O/xcWtBWhXhNSOOZbE79bBnyHe6+aUoLy5ACyeGzANV0oRTY3f8JZQz5GCBNxcPeiwsalrbxzq2Rq/psEg2zbImUod9Ks3SYFbLfXAuwFQllKfcGaN7PoBHqNIoMXVtE9AYSHP7QZk+Sw==';const _IH='8d9086c36a839660b6aa602b13fe17302b88a6992ab777a6efb97e7f853228ca';let _src;

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
