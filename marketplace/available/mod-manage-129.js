// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwQ6meIA09d9ow8H6FvFsH1kt+Rk1ZmJ9aThjhqOS4bMZChEJTMfioEepsCL7xhxDJ6A+gqzAOg0rAMu//TzrP2eKhNiSKtgzhWqa0sUCpsY8dmJNq8KnWQVHTXek38j4U7BHY1PV/ZU10Scdu5HA0g7S5pL/aU5ecSIl/O+WbouoEEaTKM5tLfW1ImH0L2kFiwfkKxl94Lgd11ulkRw8Xy/pTuV8opg5z8pDJW2i0pjO/zuAxqbaSiHpPFaqIpDBNeROmZSPFMkT//wOpjYTQLrQabGnbtWIvjczd79AC5f1D++Pbnp+4oMwJsztlcGjkjVApu+MKORZ5ByNMkiKj/UQsLtkbzGnLnootHGBAkZy4CGCd7Bn8txjk9CErPlWbyujlZg7kfv/BMOHiVOTq/TBQFBjpB4pF/xecrdHiJy041lO62rWUy1afYNuCgRWmK3sev2dgqsf0T6k70cwdHfGXWntcX5BaarLMSZb1SJq/+fEspHvbFVqtgVAE/5V3+c0btqtPOX/TgC8REdjlHvThNviLjCa0Op0Qra81dgKY4RjsscHNSGzdWW17UrZ0Go9zz9Qiwut6du575PQR5myPiQUt4vlJGuAOlswW5dbUEs0/KQHQIhkmCcGf33AZzTU3QPDUV6c4lRTXyStr+FoIx6dSxAx58O3L4FPxtHWyMREmmqJjw6tz/a3BiTpP9l8KcnEQ8z9sANVnE1JbIU3Jo2zRiyhfeYQ60hLl0xWTwB64aqlP1sBbZHTdS+GvC+p7Xe+S4YhqfIC7XAXG+4/8yuenLWf9o0u8IHTR9JoRb5uSth1o1Q2EhxBP35yS/66TjSMfxVrmg3gc4y8/9HOzQHVPtACWZuCYCQaMJ1QonGcWKbRgSijPlsBzUl2FzXaWc72xe21ogccnGN7F6nTr/CMR1/gF3YXXUSMe36GdbwNw+NoQAQEILCp/aPTjby4pf3G2/LM2pQFrMzwVKmvEBrRIPWS1vbC4+6ZWmgngYJXAEHgtBG38LQzlX2ojdPZhTf7P0auhVL50JY6M4OvglUvMI//5byKbj4ZXzG/YRE+qmQDK3DoJsVzBYhRZvYkFiPMQiEPsgv17Uc0sJ6nInGaMTNgZ/tGxoTHUJxsh3MlWRGOoEYNuQXssdMKx6Zq53RYVeSqONmYsBjfkxvJpVirBeJnt6oCCp3ScNCSaolLr+jpGzgPTCUo3pCHxLuwcjdUR9eimMgCA51z+D9CIxQAHOOrUqqsnYYD28aQ9YiOG36zfgOSSl0KVIXDA6nigsIQ4gd0lnbdA1n/ZZP8gJf7QOontCubO1mgB1+gxQ8DptbMsN4fTHp56OpcwSEkU2Yzd5h+kBEMYut1t0DZoSSOFpMJIgKUqAtlcD2jx1FpuRe+9s=';const _IH='1de37681de28b7a8db25f12afe8e60b2dc36b4d86222d5a1566407c8814a65a2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
