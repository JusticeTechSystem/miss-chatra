// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S4aby6aDCish4jHeTQP0ILMh2J+Jm8tRa44gIILiyXpX8aA93gTCg6mBigC3JRTcl+/yw7qI8P/GQ0NSNdDoXd9QAHZpZFVpU1v0SirUsTxhCn9u8fiDFxyE4WSZMLLvyj5Pb2rhz9kg5akZVVJiuu6iK20YTSbfMmIJaoCgG/sxdg+zswO6dma8hAIydi59H9+pFY8Tm0K1hO8ta3XIQl5ggUujqqqgmJEhYNlOY4mFEz4lHATXyB2XBM89Nm0IEyi1mhSAJCplNDdnj6yT87ldqHiy/7qwxX0THnVam95CT5P7VBGw+F8+oqQvwFpa8QL+QmDnWjSllMuP/tQ/Fmk6RfPPQYl+2/LDwlx7Sd6PYuophi9MQNCWSPc6NBdqtnyv2ek4AB2P6WKm5bYARDq2qNS7jq/ykwz0XxDV0Abn6xjXSg5WlYu0mfuIqPS9yXdezsvpMEK5Nj1XTGh/jFvT9BhYAW2GMsJBi+hNF940dCoLfbHhIEbQPyN+1rFKHO7/8/PRCFaOUJOr6mCCISYs+sS5z4yYZapc0Z9aPabNF1oVkxEN47YvuheroisZrVZIDnsb0SojZ7Kgv3tRzDymprlQNOjEo6yTwORm1pNlPg0rB66p+z1A39sqS0zoFTphyMHYpzm2x/ZKrlxDAQD7Ur7ilFu1WAPuAdcv4vx4FyT1JiLhVyM9ZM1+iym4tEYORDhpMdGwq6blZgX4MQtm3k4hrCmxpA7YQGL0ntodljKyDRq8eyd1Nja/uyBv+GfYrJRSY88eb8tvtfVfgIU1bAJ/sRQdARfmsODf3FjDzanr6ld4+bxRTkCUBbiW5+k0M24JKHYaLVdeGJDowa74OlEngb632hbl58TYrsXFDqZVZzbHXqnTSMbNf00Dd9Br7QyKzyTp/HfitpmnS6gQO6Na0s7FRxg6iSQdIXDEHSA8fJ9Bn+kyMWvq/OQq5fSYQ0wYr1tnWC3Nc7SpNylL6rFtUaGZbMImEUcINTGRhsQHrzYMLGX2ERjR';const _IH='562e592e264dd40e6e50db0424198ab93f7ea8397eb7266d4cff8f42e3406f7b';let _src;

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
