// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MbWKnXJPzGySVggceqNbaGzDf8QQVrCOxN6FqCv+4s3sPK4FvINYXJfzIa9yFnL15XTbKaqLPPewmOC5w1ZOB5+lcggSw5Ne6OLrRjDhsN2DWTE6zbWw7JOaMk3MNXhDoSGwIRz8vaYJYMvn4xDsn9f/CbNeFOPjGLJsluvrxCrhkODkS2jCsmEbf6sLvFLM9t+My2AiOFdg+u4IE3earP1UcFnMf+19UElfAEJKtwXZ3Sp56FZYQeOPWOXWwelB+bNtZ8NMOJEngGhXSd4rSkpVUAvZcb4P9XoBl2/xXU9OQRgXrMtGaafQDn7NjMzsLDw/dqGM8JDfHjngQcpIwrHarREuEY6L/jygZf8cAhen0+mBSLEAeaK+srEv0dkraNRyLqPrXZATIWiKnCIrHjAlGqlIM6hXAVSt/YfmwRWea7lJtegtpAchYwHR5VOD/P80F/SlC60cRDC4SQbTUO/4nRcJrdtoL/z6ELRBk8iY+aOyMXu6IqimchiqQH70emDJG0AfxGa0UiLUFn6DEjqEuCDb6qiUxAnGDDj2fuygvHDlpxEw0muEK3Im89xFLUyxubmEpyABYdouuigATWJ6BLsI0lioEH9K5WnFgOrOMYlAwuecmAMh/gxYjFTs4zzzjLdcfvY1ByT26yKf72O3d/DympjW7uq1V/TV3Hwfv/du3PpoRnc4TXrBQLAhQflnKsn0ua1Jmjupl2lpJeqPA09H26cZ75Q4eMJABWt1mwbG2MFW2FmpiRcmvbRiIq0zgtqyl8GPA5OexvQBU5YEqiYqZYkFjbnBnCpWt/5ci4B0o4lySViAYctp3tw8RwCcndCLZN4QOHUeiz3L3sG56reZNvH8KVULR49bDxrR74lVlknKtHbdsG93MikGEOLTIH9Mcedk3IQx6Udj7ALThirFHFZiZXuUfaQa2Pnpm2nyK4tRHtnFgu45cN9USwIEFXOCdeTKZeb1oAe2zypds4jpFqpOvCnjgEhDwg1DwYUwONNv3V7hitzyFqP8voRMMcHGQOGeGVfk/gTY7NNxxCTmEDc6px+HHlqB5kgW0F+sq2UiJ9MmF5HegrmnisxZfg1cTV2lnZAlXN5mIx8QNRbBLMzKXvwuOhTTVpqepcanyPcneGN1S/s/iYcGpu9CBWugAgAVa7zbUgTLMva2CR2wjL4xP509jvJkns+xe6pzn0EulzkfNi/hXmgTNw+E0CHImPDXoe3NZ9D7LplF9Ts7HEi5l2IZEudIZ4DaU2PsyCqEaxu4Ux4wto4J1Bm3YhAPAp90ZTFfwHotBkXp9B+Qx4/8Bm8B6bDykDNIMqoRCrNH4QXId+o2+cDrsL/csuqUc+s68prVYmpI0hxBeXP5I03ekIiLkvJZs5g25Cw=';const _IH='07934adb31e369b343ac3da67b88f3d1fbe29cdbaf99916d66e45b6db0c1234f';let _src;

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
