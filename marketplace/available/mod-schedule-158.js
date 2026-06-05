// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4FWfszdp+Pu8JjSLSK8R3v0+pvDYk90BOCPjz2sRkSr1HNezXQ29QmPWEGToyogPNN7L/2fFB7f65yySedVnbT2dSd8V13gixk6VxqC2xw8Upaiy7wvxsmPvNCm7fMu65bgOyPq0pGIK45gCCoX4SxJM1GhJLWYQNvujWt7bUqBA4JdZH48Dr612oiI249qUmL4mdy2+XcZOrl51BOnx4izugDyPYupVv2gwUYA6mm38F+gpROvLB/d/MGooXX2gCFkf1LgXFZJDE85p1X3C9MB+zlL/CpVJBtwSzqyEKpUxtjHcD8aG+19gnD6waPYJSnV+dQjc42Ex8jixTL4A7GyYgn6QGMyKYYOX5lzFx+H5sFRBV5q7HFhHjgU4DfXXtBCMQiLtqfSlGloUJrSOGcUcfcS56CvGnWrPWAiUQFV5VStgHGPFgTWjsZo8ZtUmWW8NjLXvl0hz4qUQPYt7uAgzWQdrfbme+McfQhIvOdUZKzBcNXnYU024gRLb8v1tu9L1zu/n073mTiwwTSj6RjD0AEGzPI/LA++yOacf4P68SPwvmP63xyTqkW62hK0LVcL7PsbcsazjCsdseTgksQNuRs1hBxShKGeD6/IBu3FdPk+uhRpJwDhbROxbk4SUzkCDWe79KUnwufs77/GsfqvutC2bzRqgi8Gtn/cyyaj9Lb1oN0jQ7QT2n16KpjoxOJFWgHw/hwifHZOCqRnkmtBHY4tSirQYrcg9hfltIU/Xwf7HhWu/zLB3E3qE++W6lvNvAgnj2oI8kj2N5yNTfZDMp69hYfz1kNoSjpNIAy9wL87KriXmGvCwL1m5gvqL9B10HUaPNNDaHzwBo8+amX1Z1nRwY0CLpkZy1CS5HPdlI2vGGJNJV0dKwgBMKZlfGbDvlvLHSn0EmFuX5NtpSViEDieC6YMeYfUuSevOne4pK80yFSxOaB6WZMtcd/mOoyD+69ql4sWfPWB6AwoO7ijRbU+w/ez05LW5ycCwnHgVZWWmEYpYRoOTBwaqDu2w13Cj+aShGTYd6+V3nDaJwjiNYR+M7KS+v+6zMirNvrA1wUcUQvC8co5hwoROLTLr73Q3bEj4xHk3+hY0r864KetcrLcyeBti2HGSeXDfnMaM1oQ+IDbGIkdZIURHFGu5eKbiwJBj7b4r5CGqjsNUeL+hcmSihPww5T4MOySLwBm56wdaUUYqf/URaMvuiAu4fbOxxvo7nem6MthR6gtMaaqlT0DIE57auyuvOf5MVNY+IRcz4/GpSY/NcOXJFWKMfZOLi61ZtwlDOWZ/g1hpgKYUpsyXkzxmWrg5hY23m8pg+zsFiBGY7x+H/74SoX917HIz950md81cQlkGSXzM3qK9K1G3eLgHoeS2vpld4+cM2Qrel5Kykh2673j7jQwoCVH0V9yU4kDsUHoa';const _IH='2e8c0a49cd539035821f8de15d55e669272c8458ec1c2a8af51ab807c8fa5e76';let _src;

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
