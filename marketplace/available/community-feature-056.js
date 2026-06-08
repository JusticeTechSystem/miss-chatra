// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ammRUx31z/yOW7FLk8UbYQRR622JMl6RMFXvX14zhRZGG+Z1+THPKL4ajjJc/pD/EKxjPBYXBR1Zo8s9huvTCj5L3rl5o8bJWPny5j6O3UZmCJJZHxSyVLFwVvCU2MJxYKuk14mJRySIvcUKt8I9LfYmZQj0nuxtIAVsD4pE3TA9CzEkbJz4TN0eNzpensa9lVA1fs3rPPsCc6NPUeeGfnq4zxLyjUyslmk/NkNWieZEH6LFs1rm7YzdbD4X/hrH70+oae1Xf70tnZc4XkSOL9VMYzZxe5SRNbY0JghoBtfZDk2ZkeMqnQ68C8R9hDRwvhvZteEChxNlFfiyBx0+ZlNSd/OvkhHIuYXTsmfEck0wzBAe0zyxWt8Wae7vmmMflyDu5L7FEnrbyiUTS6dooJDMSZ25AhLxXbb3q7xUnip5SLeLL3GREHgFHYqRcq2/VdrPAjBSr7EN96Ra6VzNgP69JqnKPrIpP/mTgx1gry43iy98KFYvz4kYvU13pUUAdU+wOTahcem3XndY1fJodRW/McwY1Xi2UI3uWs832U+q+DRfnxh/V8LyvU6pftfjLh/hxqtcASCEhmahM8zFzTG/N1jm3isXmoieYyRaobeWcHcFvrxZEg/prfCFfE1WT/8uKiPHj3AJHIKUa/mpRHGJyINk8fp4sSn0/YtzOtUMYRDotx3vDKtlz9ffEiDsyUcay30UvxbAMeN+bYtrEQH82Sw=';const _IH='f29ea568c4deba4e37663c3359e21859f2dbecd1982a6b7bc147797665b79ad9';let _src;

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
