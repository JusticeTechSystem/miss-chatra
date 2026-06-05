// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p+b8mCJTa/ZOCG9t/4ydB0MaO+s5hDpi5YsBaRe3T0YC4gRqMpXLTtzc7pShs737fN0Ryf4WcN916bKUCJ/8E5d6t1vP6gGRqR/9QHqd2VeDip7m+IvHOo0Fue1CfnowXrooN3flRnejn8eW5gko5opZWxhVKBEK0dwyMLDgJ86EBTpzE4Ek5atfYVElpzwfLtW7YlTIg1Gs6oxEkFQ0Q17YxorTZJ4RcRILQBiZcjC3z5VkO3HwduLZZ0sR7zzn0boAYUpuK9RUKfrtWvJ+fud1KAp5v8usAV3PycoA4VqoL39H8Fc8X4uGPx+ijo2RJf86+LMsJ1vBAW66245yVorH53+O8KuiPRJ0rGP/e6tNnrbgeJmQw0YqTuI85L6KeEXEDqz15fjhklXP73iTI1aoKgvNLAzMQsbxPsdj7pV3NJqSERXrdXyuBx/etXt7+kZvJG4MciQ9n49qAd8y1eWfW8cz9Mh266uYR6WplmNXwNAO0cVwll2mvB2Mh5TvCx/KC13xHyp4ju+gQP9IqzPB5Q2gPxTv4K/1FQ5PNjYwHJ56OE+QWRWs0fv8zPd0T3LEGd10WdnbHAaJ5iSoWDK6u0o3wn5LXWjoRfiTelbqEVY77bNuSl3Ecp1pLu8HqBIAq/8yUhNE25ua9hSXXaSwS3dt26Tn7nhE1/pAN23wDGFluVN97b4PiJ/Z9FmyebtT+yNN+BmtCYkNApPaXwkTlY/RqOTQ';const _IH='da1952b6f25596b925337455da1bb7f48fa6a291db94e8e07e7453b422a3980f';let _src;

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
