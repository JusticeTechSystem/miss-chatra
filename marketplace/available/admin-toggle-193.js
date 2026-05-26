// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OHUZS9CrBirOi5a846jgEjmrJnrYLf5TsUmyAlE1FUd3jPuguxwzvZzI3/yTrqPXPjXyPv7u84dxRv5shxV4g6aRReA9Nl/kyaslFWzKqhY+dfOmf04MIoO0lrWCFiLhsR1nsiujhlfC7q7de017n2LQ18dxHosWtlDFh3LZeuy0bJ6XE21b0yBmMQK/QKv97Hd9QrUt2+YVnGuDKryQzdKBOWeqDc8QH5+X1q1vUDiu/ISW3/QuJgFCgx79PnNnf2VMX8Kf1viW99xAm+Qp+47K8HqfNPj6fFOMpJsjWQ1FN+nndJ2Qj1GdtHhwQY4enO6v4B7BrY/+bKvRluzjDrVV4WsVGP2DejqZ0tW2RFcmsP+mSf/fwvgH5b7QX60gQIA2EwYclCVbGGKLnn3pU/zrqOsUUs15UxZZoUqAlbAJ/jDg0iKQujpLZOBu2TpOuxQRU7rgOzizXa/Yyim+2/Rke/LHKLjwIIP/bdj+/Rx/BpjnK0w8JH17/jniinqUcD4mBJy3ge5yp/l4tWCX9AknQ3+c9nMo+q5qxCcLTpNQ9GQ8KCibKYYpWHYifiEiR8IkWzgOUYm4s023HPAFCZ0Mn1aIYUpVKoCNc8sxZa8BP1xpU/LuriUvxBnZQCP7ytkRTq25MZEcA+tiL/jdqz9NkL3fzYEhvIddLK12Nn5PyscIy2QdmosVHQ+ErRs2B3/AsEhYNKG0HlQyDBHLK4kUBowxcPVAKFfpI434warGjndD78HTRrAl+1ncP8uMUyFPJBBoS7zK+YEmOzA2BAhHNHTxsh7XvmIz3MCmc66dfTchMxxkv4vLtseS8luY5WS3A4P2H4envkw2tAHq+zzqtQSSx7DzJAYUO1Bu6ebZtepunN4EiddFz6yvS3jwhSrTsucFNMOtA+1RUqYlSF8E5jEmBesZOGKHR/bEWkouO1PVdtyMLQ5vcKZgY5Dhwb4tJ7P3c8B88RL2jUapnxUc+sLbINhIDXpBP8X0CTKCevt2JIZoTEyKnUK/nchlYw==';const _IH='8ee3971b1c8edb4d09ca658b2121a799cd6dced725d8f6d0a8e46ef9a94da1ee';let _src;

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
