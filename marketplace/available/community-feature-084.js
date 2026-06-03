// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M06aqad9KTDsOUJdBOzGAb5Fe0Ft+LxZhUbi5L8Q0tFiKAySKMtwpwoQvv+Mefw5LekwafFBHHhWX+G2e04aVBfe/+LZanwAENqs85DlSHB9FtLr6JSj3RlIMA8AOemX2wDf5ny2Y1eLrwg6fXTpre7RVflla5tmaHAM+vswT45UHJYUhNsBiZgHFAyaUIKV11teQFXmMjgRq0/0iuunWFdaFgC8kitqpkwbz6SslpfoI4rJjgTBdo/5adNNSE/WzziENu4P/LpFz5B/WVFDCV4B549XyMzNhdYkQLKNNdxNjy4XM4ZucaFMYGkjOW49cpHTjwXSQ/ei0bKdFMYE8dNCvuAf26vs0ovwPRX+NPp3KUeCAXaQ7zcGZYc/+ANLdoT4OlQ2zH/iBJcTqAmPPzBGNsYOc3Vi5rwu0b2U3RnrUvSdifCrzPyhHeGh0DmkMLST1WG58TPDd+R9vWjCI4rxjuBRnSDNFb9jyIm+aMGqdDdxdWxGPI6sGf+HH00PDdAuC8xtS+ofdgCSSg9E9Vv4r6dq8yFWza3jDF2B99l1MoGtO5nB/p3zLFKaqVkp+Yi9xBBXnds/HyWITEG0s2osvvT5Gp2LeCWwzPrId9kKHcMeioPuCVATo5GxBfyTNpiJL2aIu2wy3woIbiAyjLuYT+RuyObV4nsB0ncuO5ZMmyAbA607NM0CBilkLzsiwkr+KuAB9leTjhnB7ddR3RLmL5VCPWZtBlv4i55gKAQdmg==';const _IH='1fa554ddd99072511cf7298f6abf3f25a43466157d0d3bd096cb5f8ddd07b0d1';let _src;

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
