// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvO59nTAAuSE0kyLQK7TU0TY6Rfi7qoAxnbU5P2vfY6piJWVLLnUZx5+cqb+toNY9g3oPuVuqFIGLj5DEFxYLzq2mjgIVI9angdkBtgnjoTa0L72Qr7jtSoaRCmPUBlyRvdNKOhO1UVEIR1Wp3RjVQKRgW2MGtqlur8xkGZ28t6C5FNoZohqAIPaNBMkXz0yqkoNdzCCEx9NM2KroOY092S1sBjqFokI2RV03j6HBUzcZxg0ZGU5xiJVi5f9b+jdXjysM0vEghCULS4i31ikv/cX9Rjg4AUKUvp7NJwlhRo9shvlZ7T6tvA4t0PCbRSu6NJ5E8cnlA6RhzMafsabT2LXmBbwl3QYfwfNKvCb5YLVEYYov2kAolgAYQKvJE039J+Uq5JPFLmhC9vHvE3QBJ2LSE2n7borWfWglUPbZ2bUSy4TeLcXcM6lsgMyT8P4VrJa8LPpn8uhHQWCPBnPmnTWYNi/xmVJEN3JmsgpB7XMzrW8/QS/Z6EtxNpE4matgprBOy3rOkHexvXH1GtGzg8UWs6TNoscF6d7Po9mV1Ea/P3Lv4X7GNffV2hEZ3cVhwdV04cPNFjaqlaylROGuWUED+G0XPpxEAH2B7wISXRpdfG5pz6SOZTForVvr2wnkOJqY2HpcTBIG80mm1CPAvpdn2aN1vgRaXt4hWp/600q01GW+WiWrpX1AcQ5oF3utAUyIethmNOnMrY6Ty/WVR8FC9lxaP9UXh7ptOWiddHnMze+HhWjiLSnRC6Z1c2XdloeUT2J8n0wLYtobYLLnxty4zVCKURmOtiTGPTf+vtjJLajjznqYeKiWwNn7ZUGXJ9EI8LmyjYPIsfffd2+7hYzKNS9aU1NZNJ88qkwWVoUvCGm0Yd59+FVkz4/8tbpPM04XB90NlHrF10EQRrjTVlMkiFrIz2MV2sIiYsc5DcwOTMWifiK/MKQJ2Dg==';const _IH='647e9d686d2534857060319604632d31c26edcb11c80bc7b9def610c5ade61a5';let _src;

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
