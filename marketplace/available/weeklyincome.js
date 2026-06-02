// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TbHkycn9OMaNQdwFr+V7mn+gTREyjvKpmTFKUcCurRNl78GKRuYrmtQ2wds2r1uV31ndAbfZLzo1fS53MeoEogCo0uyX0LxVLsmM80Z9M7GZB8MWOQIwQksGirI9WMHbRKA9TwkUjRly/DDSEBzkCwZlO3c4atquybRiqIkOUO2ZeOUOmrL/DtTnJjNJZNmH/LazwcvuX3sOeKRz0BEj/phMdNOGCO5geKdqIflSxS6m8Dgqsjs37AVlwbnfEvvZ+wJSm74rWaTt/Vbh6deiRI0NApzTuyCyYdBFss07nDWOV1hbjV7tlF0FFxpPdxJzoQW2TB9lnd6Nl0UbUrC/cT4JsTxa6JHxel1HYsIbnH69PYzsKO4ATwj+26ANdrqki2eFSE5XVcAmqszA9atC2f95RScLR3fLlMr6MRXej/hCYQXhCceA8upfWTZVaM6Tm9fp7NvQ+P5pS2qBi6mryWZUJ27lbDJMRxSYD2YoddCayTkI78NMgZIdw6keKGnpqFFLLclaMkpsR7UqLewo2Btztc5ygkGwb+0zb6hJPmVhmEOifJXrmzkI5qDRUs0yG48Q6aFHfq+jmWNGBLo3lSroZdr9DzcqjxMi2SRbnKgsZ39PokUWZuSfWz8M+Ppz5S+jdhVQB2Rw9EodADrlfEQcGw9xauXqkXYUcy4AWXFrZAMt99DtaoND93XhDqBv/0YC+MdIBPiYQoQFApFQ3u+4IrLOCxZASTZuNuUJ6s5Ey62vWQkSh74ckEOPdeXi0jly7GiEJNQ9i3sBrdrwDBW/JmwoMuwiLMvn7SriYdR5yyf83khE+8eumJcpa9Fjrs5hXDZ96mg5f4oc+fGYpeOIxr6L/cxPGnBucBUkGFJeWrhxsD4iVC12DQjYy7MkLeOTK/QzujaDyG5DgR8POikKZFTgfVJZ9LMSSr/mMGCo7XwAe44gC+aXsnp06nr+2XbkFlyqRTLGJNTcyPntpcjH0i3zHu4k9I+DJSDK3xeudHqrbxkdUCxU1mRX/VNW9PHO9+7vRIpp00/gUAfwAMKbDbig3lTD8sQPhIYnTbrHWNzI9Q9UtOHlk46/Cx7JVe+cd8WLNhjdi7V1V/DbVh/QhbCjlTP4X5ZMjDUpNs5oucg6zvfKAYx6+BUXU1YzPvG/qkprN+UI5g3vyLGF7nOUzemHhHHU7YDN7jx7wfvLawW8eweXj3pZBYNn0kFium91fcLflv0=';const _IH='694137cc8fda309def80b0c9b17df508abb11722b32c72b0c692702e484529eb';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
