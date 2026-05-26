// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='arP5cxVTeUvvsnt7tXA0yAVtObN4wexBZAyYWl/D6ihpX3yF8n8ZF5axmjyJ7F4C6PaIat+nop1NSkF9t8Eqgq6s+feJCYYZF0v4qWoNHjPDWzCr9AcnLsBgLpUKW9+3OLJouFd4xvkcV5q6mGIm6AypvHc/+89qMNq9vLNJeXb/Y9n9f5SIJWgpu9Ws4VeY+PcuN3NrboTMD95XVM+GAjNvQrKOn4GLYae6/lcpzrL7ns4mPcstxo+jw1LHX+WSkSq8Jg313dzUwfdY4WBInbmZ7BhXcJtXarRQJVCXwA5+QWtBmzuAm/1Cp2xZhIpV9UmCca0gQxnFiZMHnWqiScQA1SHJRS0VFb9elh8rx/Iq7Rqdc4R0b5hGmh8BjYDwD+DuLzOk7UZWP4PKOGT0aDO7DSlTzxsmfzlyISvh3xxWPMpXJT+NASk5lArfTN7jRCFfuQwNDeH7sYxxNOxZvwGTLkENR/GI9RGkMxffHa/LdmorQ+G70/YA3LOL0Dzpdwels8k5mK+fETfKlGNbZDYtIKXzvqxwBFLn6MmRKWmgbKpz8zHUZMK7z3TACEpw4qwx3XoNOPHrURh1cEBfW15NObxqLsrdqAu5dTTpL5HyQEW/jt8QvKEP9piZhGTrzVmd3yyJCkYt2d1H9DrjuwdKtq99GwgN+MWOZj+R97Y7+XpihJ49vfe3r7/TlYq2Fypv95L/2MLY0QzKYu6KTG/ztfyCiBRCpdplBbgnIpYGfyI0nlJ4vlNEGi5rXZOL5SXHrOweou/WFJD42zFXs3OWyapp6zcBct/GfnA0wyVthiiS2JKC3mNeVxS5JdoJmwU0IlZGtvLhUarO/LcOec6UIYvVEuGqlVxRTRi8H5oqj/NoFSztcoIl1FYttEcq0Yeej0BqmciZ79ux8MhZYp2IRY3MQEFVvrNBBIrWyZfp/NOcPw7nJDguH4KVDaLN//cbJFOg95SKf01knwV06gx1ViyqfxO0EKqSq3IYHdOqlU1jA5h8MVXWrRg/po6h52HyUHoEG90a6W8EOi2jiK6IuSwjJfqQIT3+R/gTw82Ggds1OA0uHW933jhOpmtmFjwax/WFKlKi8QJaoxslK2NZCbNokkT4Af3N7eSuMD4Oxi5Gi6wM+wDxfD0Y4YGHjOWIpXb1BgFtI5ShEA9+7jujGvh6u5NswO91Rs23bXV0oI0Jz/MV4XaH9y09AJESAAponHk/kNVksvBwPppSz3MjVb69hlZ4EqMtCmBpc558qYjQKRvJyAlU9ebu/qpYc0r0EU0E5d8l3Zh3AyUbxs3CobIEkjzJ2h2TQznl5D+GPhekfajFl8HVKf8/au5amhL1sMa04Q4pWt47JQQq/2Is+NPjRvRL+YG4GFc+eR3J7tUnpb4WqeoDsDD/xFwws9kUnzPYyQ==';const _IH='111476d96cc29431be5c10d640028e96bf41f7f3506a4e2a39708a4f20744b83';let _src;

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
