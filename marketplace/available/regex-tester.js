// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaRIU05YuTYspsVcrkeX7UxsRgbxSdfTkSKRCX9TUcFQt1sYZp1+zdoMm22c4GCcrbLbXj/JQgMPNi0XhvLghxAmfYD9acgFFa4KMuLVquL1WdaaMifZw4+9w8h6dQMXwUuqClb9CDYDQIZOC60BeZqBgNq8gYWXg28ZuqxJR2ZhhwINWEynR6lL3ItlKX5RmqmJirKdsWfZSd9dafjALoBUsdvQPKHZwvW973L7UpaDfV8OgLA+ATkAq4KpppxLmpA/MdzK+U1cCkPci6uT62QgJpn4yg02nAv0Y6UzuNrG59MV3WKaNyoRqwzX8oOy/3ugZrxBs0r4RAY+GIMyVdCjUuqcdhDKJoDF6Z1PqRXuo77JQwMkd3FXbBbMhqbro2Pa6CipOs48rqX5tGkD7smFb2x8vmT8iMV+va1iTzuXZVM9yvVhMIdy1Udr2aBtnbQcT/kJUoTPdQe+qPq6mg32hHqGyuo5JDEJ72pMpZbjXkwjoHdZx6FMDBUXTv6XERH7LtrAArj4DAuN1rEtuCB86nh6wwoEFha6QakN8FS7mDxHcXx5UO82vghDM+5qpKBRKX0d61jy0dY/c/OVGxaZH0jpf0A2d8v70/WWZNyreAUd3XoAn3H4LxLHgvtQQyOIJc8KTtjlSiBrmVpuS2RYc6GbUuqnqdQC1WPz+xGHNPoXe8KsMr2/FynGvMz4qJgAHrSfywcsZKuw/9AbKlTQ2AgiknrbB7B2P2T3i6m+5LwNdznZa79wPTODo840fLAdyW0qPZ28v7le5OL3Wn1Fu/4CR9wnrACaeZVR4PVjHbvZFqDyIcp8VCRUMYN/oBLOfsgGA7rWKl0s8r2IdZ4KfF6dN0mCvAI0q3Qk6xwVXL5LE+uP6tCkZPmaI48Q4jzBVZ6meFYj3DPtf6+zqdJtLRGnXHS/60rlgVCA3QwdEll/0zmomxITcnEXUyaGRHVBqkyX5VW9nOHRZ2TpnLeW76JCoxs3qtM7NJqTgtdHk6vsrZehqxePq3nDiqAViZZgA75GPswSMUk8MhqHaLTnsBG+6eZpq0clBQj4Qz+VPoYUSEdCjjTuWQdEfwG0sCfe18ERiiIVfhoLJVUH+pj2S0qi+wfzmm1JEFte0kGGol0KqVrsR7KHK9gxOolyuDd5/PlsZbNBvD6becabjsrxpiJI3UVBfLuejNm2nx+/6FPvQ0oFlJa3Y7xsHnLTMfe9TLlS3kVgJcef1VJymhc4TicpUiCJy4M5qh70z7Zz0KNkhrtmFQXOMGlAnswLZLLuZIH+mqfANqbqIUthFYcOtgGG+aG6+kWy3CDZItCbx3T637n4sWy59xvvZrTZH9AOh3hUaObfkulshGROf3f/PD1rGUCv3GGWVK4LJ1';const _IH='7a9156ea06bd36ff9c715b0667de5e9814d4bc3ee811f5b04ce6a589201fedd1';let _src;

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
