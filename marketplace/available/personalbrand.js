// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VG/vewrYfpMOjjNBlHcuft8N9IBAI4YoGCWVxQXGk0DmR44aS4BnWd39IGzTJDyhYCubKYOGV4YcebmzYUUGwXF5HbKbVewJaxR5bNX5/drC0hsRYr8kHVGHqtG6yYy1cn2EqHwpqt02KwAmTWobU4JgGK61fxfua3nJyXOrB+SmSTzeE7bMiBCpqg5xq4x2oe2+c1f9kmSu5jr3VHIdvoK6BF0bzFDW3uTaAtqk8N6r41G4pT4GSFLEXJKy4fcRnA6v1+xxzVEgWZ+/jUUDxfIgf4UBDBhjBB7UhQ1Zfy3vNgIG7ERWMIh89pVSxvYdNGUAbR+1Or/zDav0XZnvlY09H0z5n6TFuI/h0xIeAzi7712mhRsutDUr3ndpO67Yjq6V2AbZn/UVYWmFNPCepGCyY7nu/iVvF3xhbQ3O+3SUkFakwpU8MPPlyvF9t5TKxPpU/w2Roe4ZK3pNzmvOTv6UACxCth6NaSggLJyF9jfQBBs7q54UH78N64Cr2/WCBWUasgBqhwIlwRBX1teoKZA0Yg4UNfJ64Nn+uL6o0JGuIrZDtDv5+w4rhM6Z7a6L5vQ8itOpWktIXlCNIEDEXjWSVGumjYHeKGg1QPw7qdIrYz6ZQqt1B8+YdU8/e52kXf7njh0FK26Cuggfw234nMgI0johMKP76fwvDE7+GN4KBEJHpvs3f4fW3/vqtUW6R8LrhOJZm/daEPwi86fBfvtijpJGNt4+W51dOKuKV1oMknh5T/ovmP6odlxYFZ+aDRbvqWr3vNOx1/6I7at9L+gClHXUpIAkIHbe4DTZBRM84nffnlutfdwYOS7JGXplgLcpb2vuVdmt0qT3KgFZHoB3uIhi7l5zy3FV38cnulv+IoMmAEi+IMqwx+J97Y0N7Xs2RHR4S2jANYYnJM1FPiMkrWsacyrVECtehMBYDspOArNGCBbQ7xsHR8gLjqxC8x9w7JeGksnFn15e5ms4l9LRTERk/nSr7F1tl6GekGM38B1U9BXx/5LIxgQHKtv9taBPf3P41LjyXe5ssAuKSrp662VKDRccxzYQVpOcdbPNaZnoENqBeO9WgdSWxkS7YBKuKclvUdlv0wmieOuqvlsCgPgCMNUyaQy2ceI7uTIpgvf5jiVhPED+H1Qn5k6s7aMVG/ek5YC0VSWUXwYRmq+H1NkQzYtFlwbtjSBZ3I/rGYP8tbqrFMEhubSEckCikTyd790MhOI=';const _IH='b1e9e84d30849a990985fc60d4fb1b04de9ddf0ddae5c97bd03d896d3a467ab8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
