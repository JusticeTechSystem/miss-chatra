// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rDc4PzlCkM8eZPgQZ7ijaIzLUc0znrgCDMKRvGRIxODDhyR8psaK8GEPhk2qMOlY4S6m5U50TAbzCQd1NghrPHUpzuYNynKdg5MGwI0MyPbLQsKWn3MZImL/zmmJhbeXiqhu3dSDvEynr7qcbw6BO9YbG32HYHVxyS8WirawE0n0vYHT2VeGtO5OLTN5p281H+uiSRjSVKsnN5TmJrpfx6jsKHVMW12gwBiWcv6s0ta1UKoWJT0EzUYbB3iysCyuVGmU5Ty5RnklT5XI/ENtlYefqFw035CpemGxT4MT4PM3LyXimkSa7jJblOeU0Q5Djdxw67bP+Dc/CFLMnMe1X2O0GB7zEPgLzDJGcHATmTeK6CKAXF+WiQMrBZfCofkMvIt6so80aILAT+uD/MairN2BDDK7YMeM+MP2ys6aoSUZM62yfjx8mXqW3IBp7Y2SHhCKMunoZdM2OVI5yJ1W/AQSbqgNq3RSCL3ZmZhEcjPJBbQL60eUnA6tKatX2LfO4e6AJFORNWENsM3BDW3+B2NpRylnd9S1+kSBzx2u7KhlnQgZq7tpsqZSp23m8VjQulAFZ0XMUpIE86zr3Zd8yFpWu5EQF+xKn2jG6O77k9eUONhav4y4LpB2mPp+3nQFSK3k1Y778kMpVUgSC8yHPOE7eHDvRbxV37KznxvPvS7X1P+McKOjzXJFMAVpEnv/asUiY/leFnXv0TG49QervWAnDPESwYKKjxf6RqXFKf4iU28k4h7BmZX94R7Sc5aBUt6l/NS7iYKMgyWICwnvKwII/1Vyu4Fda/g6GS98743li5xPN2rQ38HTaEHOsPWBw2vkgWzmaPLtZmCLkiDm8+Q2WZCc3ZcxUcnZgxuoNoW5wuWNV48NUwSCn/rchSQ0WjDDaoUbkPP+AO+llwUo3B1vBZ8RLnPnjs9H5YR+NhYNeJShOy5V0O396JIOlnAG0hw4P5MU+Vf1D0j7s9q0kvanoHgB+ZK1HKWYtHzKTGkItfh8wdwOmMkGomSj7DipsuKq/wo4fTDQzB+VkP+1zIDLxYt+4s9+HOme6HBC9F6id0dmK4oX2ahsmI1/5w4Y4hjAy5VPG0SLIwqCHX0WCtZDrvrm04WrYV7TthfTrEnoKSulFqoUJpp8l0r72ctQUsf6Op7afxtBbjZdFsBsO0E8KYKdqe5NDW6/RpRrp5bjNAU8VaJHzdBl7zEzkNqK5h55Lf6K1stM';const _IH='cc88adcd6cf7500aa5d33d59a7cc308392a9c45f637237e8429759b704c2af78';let _src;

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
