// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HWvBnD53a/J50IE0vNkH6tSgdwX9vNc3+vzZyEvSgl51nyEj3HsEV9rrAs33san4Z+c/kkE5cTgRQ9NCH9Gs2qHuJ+fgwWIGWDPk5E79mOro/JQGwlTn+CGjv5Qh12H/UNOS7kfiukbTjqvW2QkUutS9zR/JrwoJ1W+CFf1x8NqTB8b04VANq3aAixAeArZCmqcP2flw263ej1d+77HLdZ91cE1HyjAXgyFsQn0XnlWoE2JtU8OJIWzzRuXGorCmz76SLxXBMJvPnRIqZmGi7bTaDCvLIJvs5fVqrLnCQJzkUOjp3ZhExPyLpCdABsBeUy9Ul4pxV87sJSkmyakdpQNvNw9hxG1i3taSoKGKVS3BrjTYoYm2N/CA6LO5fQHf9+n5yQU2ZSE/EzqBmNf/Zxw6CF+vsCKBoipe4eOuIFvoHZUa4T4FYj1OktlFSwV49jV4LykjuFbpn6+EVxjBj5IqbYkR9bSOMEI3cUgZOFc7hqXyFpLvyIumeDHqigzp/Tvf9fFdmfuWgHNa4bMQNRbCGuxde2lk+khGQrxN3FdGLf/TUKGjhOABN7queBs4yNMf4xLUTWpz0yQE5r8Kv9lb7FIt6AmWzSmmOWShl5vvgsjRH2+X6N9xC5mY0Lr1F8xtA6R5X38sd8lhcMrg6tt1iKoh9gv+LoKNMnPk9um6A9W2xaMkKJXGooqBecNv5x90dIgeGNEoR6Bi4jDUOi3xkS8cg/FlW9u69EMnnitWZpTv5yWyXqhXZlsR926bO5XMTUSL/Xw8mPOPgaiOaaNFQHsLflvmuW8DBBD2qDat03jxzczW2MZJoUsrVDQz6cSIJELBcFNceDRsb8qFF2gc2ys0mvNI2pj1Ee0UjTlZlJpYN4wTEpKj6PuD9WtuYHY3YncOERiVnWEBreR/5hrsBhQiGuu6b4qpjaqrXGFKicFy8lrrAu+2OO/mm8RdXhNJlbXLm2VjL8Xn8Hja2TGMRwZe+67aLiIN2gfAzA2LysTYVnfVzQACO5Iiu3yXfPS719/Lw8JxUaXeA92YGyyCBedRUmDdXOpKsA6sL5SV4z3BGyctTq+xmwklTQAwcFKL3wjVC7Cy5FRg54FsFP5UMLyux0dqz2PAPhlvZ9OY2VctVazs6RFGYRpuP9JW6JTXF361/rKHw716c7EnRD/Zqt3mt9t6dHR7WHjmhSI6aJxUeP3PUymwUvrjDEDFTFmI2Q0jd9OY4Mn3bAVV7Qv2WCKuDrKK2GXx64oY57cAc84iuEgNGLE+9JG470VCzhwst1dRP/8Fh36sCe+YbWXa/1LuUEgwvfci7nj3bvrmzvTyCO1S/ULpvXemJY8qUYzE2dAw+Ad9RJ1eKwHCXwzQRPAniofPAyF485MqPWMLZxgVbf1BvJO/78FABO4MbIWk/arzMkH89OxfEoMOy9mBhVFgEb3t9IZ/DfrsRcPN5xpxGAokvdFN3SW+Qrv3lK5XmeeseA4kyJSH2PhV4zYzuXZX';const _IH='59e9a0f491bc4051d9be303c7034605d0276936f26d923e227cb8b507c06ba84';let _src;

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
