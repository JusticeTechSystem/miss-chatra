// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzGNIYO1bo3yP74wengzlWjNJHz6cSwOAMYsVxLcd+4/9JmB4bmLt5wPpWBs7J1Kw2n7QCIwS/7U0DWBjcJ0v/26zfWuFlsWkOxSjifF//Hb5wAz7CPyaVfW2GOKJPFwvdWFT9qA5M5RtGTCqSueo/BuyX7I+HOx8rCpItqOcm5S4abNUxAV0b93R3VlqtNYY25FEDMyARACg1dfl1wsQh29nlMn8aKsrIY5X3FGe+nT8aQTR80c2h9F/ic617+RSjX9B0uSeX1/CVFlSiBokxoDHzszFqnyYNP4vAKs5ZHmLs+47erYNVLVWb+IBmlXURy3YQ9EQi9tlVLCzvvB7jgQFrXVWr/yYnl1ZmvYdZtUvqgt1qez4yI3qe6gr5z3lxMRzsSGM4j7FT0AJOby6h7OdkVMXe5XNCEyjA5IKurQHgAx2W1Tk7PxaGs+mHnrBu60RfmssTnZvJFnWKBCcqukSXBtBJCuTOYxzvE638P6evG1Fr7vS9KMY5G7cRcyIF+uynVX5szH9kWk2KtcaVnhAxZpOo5yacYZf6I2qvAmMGZX5mcabW2kzbj7+m2M2v+5JFrcQq9w5azjrAekAi72txjoi6TWw8gGeOh0FWm+0Xk8XH25920fggXhVtP7BO5H1BvwCuBaoaJw48YA5BNmUuoKkoGK8tgObL4r4DdENBnPyWHkZQc7KnyybTepI9rYrZw92hpem9nVlwHy5MVGuxk2sEp3Isah5ciG+gUEIVes2NlFQipZRpju+JDfGQ5v1kbz7qa0IodRaFDlLWCSERjOzj1WsAMqa1NZm3Up1KaTuq1KsmnEF+LkvqaCun/xVJUq4DiubAZsOUMFBTQM3hJXIjpl4CtCJK3jNkLmfqxRBzmMM+OF8sVnjKag3WA0VzwEyeXwHSVVXRm49tcitWiZEBPVV/frZBnKwCBomY+mCX43iG/lE02IoxastA7V2iu3joQwwKPJj0s8BDKW38p+3BcJfgifNP+kMVXRxErpFI0zkN66D3AeJulLw1x2ouS/aCULKXDp8uV2K+Ge3tNKEphZFgrbyk4JEKn+XGLl1BFJrB3sWQPqkyR/vDGinAA1jSTtHVRl8fF+Cd4MS9TMalfjRRU/HTaHAT1f7SMKuUCJ8YblO0BvgCD2ZZvIxT2NGHiqP3SJSWPonbSWnDqG+MDHiDst8QUUUwwHoO+TMsTYHPxvekhBAKFQcF/npNLoDPUGEhPc7h7mGCHtrNCCgaujeB8Gtf3BdSVB/2c2aEHXEWezFTZo1vRIwAUzTluKdnfKsL5I05TQOMsxZjx8nSGVVkZfncynQ/NoJm4Zkc2til/R9Z+CaxlrXo6y2FFNxqu115NiGp7nE6/Lx497n/v0CqK/wHYaUvQ2vELycD5k/xXHlCK2v4LYqkJgVJmd81nbEtxOVK2kCNWXmk6+gemRBuh57J0VTMHGKixVJIL/qaeRYpvOHl78UZch7CtQPYTIPaYMjzLuw53KMSAmiYLeckhmdEVGTzRPi6SGRIoMTS/HDntAK9PCDAAsMe5drjZLXAZ3Jf/iKsZbFfosujfFaheh4mdPvVLBGLypyLujoyC8IKgiimyZvagsR9jfEN3DeGRdpGYM/gHEsCGS4s7k0opyrBSoWJGIy5rkjXyTFBqJyzDYClXFB7MyBGXznZZQNK8+GiulQuyRP4OoYiEyyaSjHtsIYywB+qzHsWz67ltnLzy93QRNW5OooOdaoeiX1n2/XT2DpiXAncdsYtprcg6/vtTTnho3Il7RB3mDeMYKHBXfZ8QCGovxNBjVtfMfM4A8KOJTh3Gt43V6CLwgRq/kYyx1MNQoVx3ywZeSxJioGQHN2P+Z+MsqbjoLjHtsvmEmzWWv8zaozek1Q=';const _IH='117a6a5313379366e6cf15b8e04a8287ac6ef9e5cf621607c1bb24ef7612a412';let _src;

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
