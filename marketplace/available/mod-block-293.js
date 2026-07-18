// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTyMSd/YGYkQ7ij9XjwaPKzg1GC9+gLFXpFy9tb/YM4k783m34Z5/apO9yCu6mBiVZNexUX5co7VmEJyOyD5gkoF72m4/JScAMTFIHTIrXydJqUXvOJqFAeeZ/hEQHlwZtFg7lg3pxuiQL1iaWZe0yWhPhmiXe9O4tyh3RNmBIO4zfrl4ewGJs8+7evAPU4dGkc3WciUCIAqI3dCH5v+IakK2olaRK95y1UZYA2YqQk1qX2CzD+aCHVeDJ8zBmTs0LMI3pG/GzDfSvcU5ZI7ZkHk0rO4dQFICr+joR1q1Gg5X6QNVTrThTZnjwVt+HuyEsr+tbO6fNWB6NnA5OTE0y0XVDd4x5yWEQO5wlBMPsXWb5bhtP/4v9szEkzzAWm272dSEz0s3W2Alb3iQJOhqmAQ7GN5HEP3HSzHpQXH7U4E1x6NSuLyK8J7aOeQO4RFIs/wPjGpxbaITsVqFjyaToiNkK/raHPUE3IzXWRBG+vg9s3u2DRGFjpMizqu8SRTCC7ap/IBpw+V59/IWJW4C7aCWTXGzmMhd4iXTin73WftCkPUSHFCUdNO50Yyv3ouwUouBAAI3FkxIFlCzlJM5qlJtaj8UNXYMnFlHi1ZB7U5x3cBXt+yX9BU2ROItEbDUOPzY55/bL0hLv+mtDV7UPATTOGzfv4LwaVDZjB7R3s7RpOQBs2A24H/GfneML6uOkO72r9EoZ8qvCoDQkMhOU3ihIkij5iTs5dbn9wDLCnjVR3+aIHc8Vl6+TukZWwIhtKRfs+Ew83XKsE9WcrPJ/dcYWratezeRhJAwaOMg2H+ZHpIsMdM+7HJmslaUSuc//TGLzgrn0kSFe0fS/D9UeOyxfDA5dK0u75UFB7iUUjEYQvTd3iv0n5t3pSHF/mPj2h1y7HvpE0IMiW0abZnL2o4/F8Yex7i6hSDOheqyu5JOcqIfO2GqKuldTCU7EvlDXmfTjflk+Ie+Dl71u0AOBLdamZhaFLQBYEFoc7VGzgh8Yt0wz2MNSvcIUjzUSKCBunhTV3F8pIQuf0uR8udXSqmnkw/uFMAcmhjEYL/rxIVhJgyF0n9m1A01urlWrIJGqplMPUpXh+B3sMX45RSgf+FZk1UDfMIAvzmpJunngoRlg3LDERgnkn+bgOyTcA/5qtUizCFpBtlOt6YZLveMyyRKzzoLnAALczcQ+p+Iba9K9SNaNjpQnfdPxsiml7HOxNKBMDLRuAITpmkzk+PZ8hgfrkdsLAFYNTrWF2VlDVfxIktMej1NTQ/XazQoi3LvjZzLEMsHDUSuLUtkti8wfsupqPc3WGM13YALdtMU6o3eWGjS2pFkIH27/gj3yv4KW7xIwFZz+NQ7pZRtbGZR1aCKsIU2oFXTubcyFT6n8=';const _IH='266eb85f8bc076609bfc60cee46a8509b4c6e4386e827b3c0ec456370dacf76c';let _src;

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
