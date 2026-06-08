// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7d+UNNu8Hwrbe/4MRolaahWMYcmtCZEtTbi6M1aHDCTRWcsA8Kkt/gSJUcfLIr4qzsIHpe8u+2pBDr0rT9uqWdHsEpjfImaa+joq9bImCxzk66hv0G5IzpWSFazpmDKY35WgkvKe6T7jHSxFZA2jvgoT0bo24+kl/HNnlRItqJ/KNdF1UJslUsh/+aHKtA+zzQ3roWVhoX84NWktDM/iu8H/80O3LI/gYXtNJHizjH4a+oLAEmqGbMeeJwl48Pp3PqzhgT0v+/zyPmq9/Ff06srZwy5gl/09xZJv9SXGnPIHiqQTsDmBAcB3x7SEo9kW0GHCV51JVUIsoS86Kunq4HJIpucMFapcTnt+psN8051mLq7wJYjgFiSq5wSJVg2IfFlHKWee5DWI4HuninudeaP+mAh4Kq0IpJAba0+dq0wxYiT2thq98HhWEGmWFhuJfudIesVwLI9gMoP8K6vjZdsuG2HffIkKFlfjMrWgMKc659U2dPlY1GX1G7plg+0eayFYdCeT794zcx5lVPnolTP/svqSvqYRCHYR9E3YWlX2k39puvfPuVKNUYoEnSu+rt2knJQovJx5P6Y4+p6jh0qRrKcw+HKtb11nn4Vpo5bme8XCrB+3QPsbBA3cRMxQLYKeJV5RnzmSxknW9Oi12V/BHelzXcfz1FyVVXDAsIEmFzK7v8koO2nWkxSTXW/XV9Kf8s/caVRfK/2I2RW5vDjwc8/hfjXyOe6CUfmJnzetyx6rSjkkI6nh';const _IH='9b7adcf36e82acf151199a2424ad3ab31134d54e93feec962d4a250db4384009';let _src;

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
