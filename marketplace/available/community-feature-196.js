// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l73TMRS7Mk5YpPCOP+yxbgeaBWmkP4FJJLwnwBECUoATySFZ+3gnSiWFIbPrYs5z9HXr0HdrFaHwxejimHFhPmlw0BvVpL44sFaM84yvXX3UoAKuDFBv5zzugquX/3pvJgqlriEoC/xu2ex64qust0JBTeGipKklyrv8pHl6UFliLFeei4Y6hORDcK85RH3l1FEWQuaGEvn+jFb8MBFATtJtxMtoBfRe6x8tvTU6bjNCU84G+XNEgjVz9g5NlxhK1azvuvoa0c44yamZBytHqz9oKwSpKMfRktQVgDRN3336XXLi7beSnErB62vVAop+MxM/CsSgr5wv6BbeE8HHPDIGB3GKAmFCYba7p/AtbMNbjeiT7cgznUjVMywX9qf12wdT7HcHLQAH0r5oWEEpxBmc5NIdmI6Ea1k6NXcO9uhP1TX3woTWcUpp+pkbO+TSKJkv7l309D7MibRbJH0ppLWovwNiT9sSjgW/flwQIbLN9Goj906HpRhzCnAZ8oc75LjN72eMr1czx95bQBf12yMn1OnPEAtadf14saPIPtz+DtrwAfLrQTMVFgpFfKEN0LeC7eHAB8cNs3YurxSf+uL6FVF1+BnWoAyK9FiXHQuc1a8Ty29QB+/4WSLBH16V4lKlAT+Xqbx5qsRpMwkslYMQQGl8PzcK6GJSynjE7N56mrW7I0pJgW7BbixodUcHPkV9VPTOVJ5IUD3IJ+nTpjnU/1CWZg0m';const _IH='3a79a003286f8515e37542b5f2dad0dc86d15c8ca614af2413aa11725e4b4680';let _src;

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
