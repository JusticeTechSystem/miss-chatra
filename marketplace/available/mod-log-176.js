// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S4Uy8KDlPy8H9SRvEucsjlDzhd2oECmp2Sef3MMhQ4uhsE+g24j+/WU2ooWk9ae9uqWKTmKqPXEqP31DvTJeMzgf1LZTGebayNjk8vDKTCMMQyJpTc17xZyJaxEUjtBRZdPfq9Sl27RuKZVPqrbJB23gs2RUksqiirtHVMbW6OdxdE+B2hu2xIOi6vulYsj/rShX9NuULT53C6p8RLzsXXnJY9mfb4OAskCu3rGLQY19+fAN/kEqu8VZxg852mOJ+m6K2Hsptf93mAH7Ua+wlHtjdZRHoo1pWd0N//IbfBUAPI1BvxP0r2E2/qsSk9WuXzxn9PziJmNRXDvpBM6AlUB3yUvKZEZMy4ego2z63L/k1BT734CP93zqNl7JBREaLmTu1acb4lJ7g6ScrKKB4L1hyjTv+DLLLSE2z38g2YmCwPF5ECq5z/UlhbXXtphPODzPyPjU4XsMsENiJ4MD+HIXRfhGBidOLnb76vQKBr4L6zO0UBTiSmSJ5YhazDQHRHfU7DkwPqlSFCpPo7jLx80+h32LkNF8iQi1uVVuJvu+hACS9/I1hjNMwqxh6755/QQIpn22aJFa44ZmyWZl0NApLcprrPBgvw6HHf/VkLyIWJoZXLkoug+6I+gTNVxhNpT7oGYtmqgu7vBN9kELQo0vXws8xiATXzsnhJnD/CSpFnL1WBij7elxNOjWzsJSzhFk3fPNLxLj1PMM0skBcTWPUgxKvtyTr1Cl5CmlHY/woF2heBqKeLY0K8e9d/XdWrKTWgRpjHmWzJXCwtL/Uq+CzO/8+GlRVAVJYazmzD8k5t5JZJiYoP9Y66xjCMuffPArBnc7E8j3ulHUD1LHJgbTX2T/9wJyNN7FcWBEf0hP9oV9op+jhXYeLMsbfR5k4Rmd/OU95MuaQctcNy0YoA6usv+ui4D3g+4sOfFVZiLmBxDLxrktZ0jzl4sILvCEjC+8YlauK4b7jSEe1jJ6j2bHNfhtmx8SH/wtDLzBZa5K8+3t39/wXrytgMgFxVsPKKM9X1Bf2tQ60uSkWB6cdX9bj+R5z39q3ERdh5dP0YhRDy8W69kRXeKufDtYP3GKqI2ccx3fQDj+5u/HC8U6c8dbAkvMT68RXruJtbqWmKuvoL56CgDJhjBS3wxSbWPTTfeUtgVv7GqC7I2dWzBlhuGx/K189mfFnJ5Knghsk9jsErn9uPLOjx9nFq/ayyr9mHwSKqp3sdJuKCpurpfyUjq2XQVa6ipafzzwomY4vNzj6S9bErZK4yF2RHn+SfD7a5dwOroceGOaD2g8MdDxPJwDMy0t7ZBubK/ioSsQXN8gDZ1JHVMOx8/GgO8/AUSY5iCyNUlF4ItScg==';const _IH='6fe2623c31e4ca8779398bb671fed572f076ad0c17fbaf3dab37335bce66991c';let _src;

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
