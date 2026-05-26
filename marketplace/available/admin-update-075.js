// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eSFFI+I7Mpjv7zGQPsGg2nRPvHfZN/j50ZzrvlF+aDr89RmGJIoXRkzoceTjfvr5+QLf6Rt/QHlw5mPPaX2YUILSuxHphrZSPfzvC2bjVaB3D0NOR8QioWvWuAdYlPtWIfZ7o2WGnH4G1W+CKUZce9CypZewqBjUIQSBwRyAqq5m9STvjj25L1b/FjePrNLzEPR7eL4I8iUK7nC8scz2d3McCBNao/euDRfZp/6XnLO4zeTIW3JkJqLqwnLBYHyte/pNCj5dBecM0yWBJgbuHqLuWjHh6/u1jQxTsk3YevaPHF880fK32WFk+L3t5Ib7oGLmn3A4SdqdJlFt749t3GvojBEIxDfThZwpRUk84wEuyZO60OjfQeJWf7G9FiW3pXVqDDGox7CdyHlYMVf9+To6LMSVffRkoRAzoPOPuXtXeY+ZX1Jlzz5KQCSeEQmiZOrDBLUefA08ZvOfQ9Ru8tzoBd0rzw5DR6Y2EB0+a0QfY2Jeyayb/r604+berShCIJxIREky+ScwRr52s7MYdXgOwdzJxGo/czB0gRfxV7qjUbLv9vNcVXhIX6+spLAi8dV9iJXVlMdC+tHqCmm5Vl5Skz6CKRhcoWkU/fBbiDwbfnJOMqC1yyDoKLGSDfk4qUIz8iZJeHBiu8xxOMVJGsBUSP1n2GdQ8mX8NEMqNj3x2RNfTlaYKY0eBS2RnGVeCbZGSHl+8x923Y7Fsz0b4rMN+oGFb+1hf0GNkUEPLh5fPCb8xDDAWNnqZOhTqtmRXiHMfI975RJCcK+XhxKLILx8g4S8EyGkD9Z1zNBzZRdDnRCEg7dPkU7jLZFXAzO/yGXS1/dOU9wuDRHo/T7YWonFXKVH5gxaZM6DuYuQfSPWVAly5UtLRXQTuvDrxQrSpuP0fafDuF2SQ0xIG/P1qQchUZzixbESoie4XrTFPJ2gEfR2Wiv71Sm9CzGx4L0CEVDsX95RX1ETGOrWi7r5SWy8VgJNB88pdVl5k25ulEBIXgWiJd5l0qLuhHIS';const _IH='906c4c20e6ff6efce4ad5d702506bc3ce264206ca5dd4d6b71edeb849eea3377';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
