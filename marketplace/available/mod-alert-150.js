// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOo/tLj0pMZKp/ndc8a0XcRzeH6zp1gPv9chXpA/uYK5Ow5seNZF02X2Kvz7H2u86poB1wSvbfX5LTbtTtE0sEpGbw7B2qZ5tvOMXNi3tBp+nuc7+qO2IW0+VK262NY72sN/A+GBjyUuwiKzFegYhn6EDDqcUsy1BhenrKbpvlkHk3uPyQ0jPspHLYtHyVlVd2YqHfn/l10HcnbwI6pFlLHd+6bfbnUP/A4JS0Fdbj8IbT//tUq6vs7uBa19scKGPZALerw0XB1IXKR+FvRZ8d8aZRbbTpxWEC+i+0MutbJ0a4/N3vkDwBCe0uZ7E49c2Y1GtYoDpfnLxvsVL94xIwgvn2d7jhU0YmCfCYUFX+lB7dnesYdJQyAHW1mMDgZw/PfaPaGDCC412IOMg/yWhxD1JwBiHrH3mjyoyn1mArHV9FS+Fsn14HeBPL3jbuopCNEpSRW0Rt6qcnPM9xzBm0013/RbehmEFKixw3aVSvacT5FfGMGS4qZJgf3vlDgpq1SQLLweUfHApMk+b59mcGBVY4pxZ2fayEqx8RcViqRSmatNs6QAiyvP2u73dOp+obdvgcWyudez5mNLJZ6WC3KsoX3iBui/wjkp17v8gIrXfpLYrYaO2femoIpWXmjCp/PT2TpLX4zSOu8TLJ8d6NtkbU6wW6ej0q6VdEN+uwzVYBnw2G7EckqmmZqFeUvVCagcaZRoMHLCsDV2lVOTPVNJhkScB9PFqkvG/oVbQ9viVxLU8cRciDKUOJW/IiVH2lbXLoRudOVNGLMoAbgqH4rPuFVtQUB8GF3/p9EMwEhakANqe/8bW6EFfk0gWvraSO4cOQQi7WmBD8h7jVpLX9JNYBCyd4wClnHZS5rQjed75F1LffhagbDTul+QqNPb9rEew51AehdHJWA+mlPeZcllfWZC/P5NHWsAsGDNWcjX3bmXUmoQGsChIuUfGCcr7d5+2vzPWfmb2jGUcYIOriimFoS+2URy209ltGA/SVb5pdUI3BP78wgFMu7Q68TVKBWUMLbvHUhOarOG0JJcLcskh25ajINpmKNorUldoUqsvXh6/tMeG8h+aJCsbnyxVy8tTx8jn5KYpE4yzGut3+cQVz3rs/zoj/StFXSdQ4Opkylr832ewoxjp3/BvQEoIGI62iWwk9LY9ksWoAFJE3mxi3e7ERKQH5UnmtxnrpwOm6zI+w1e/s3xRSdmYtr8S9OqwMh1ZuwmuM+ful4CgRUMVXwC4GXSFqxi7Df1nYPn7lOJiDGcVOGprCoU7DKwWlSgY536kF4aJQbz68c3MmcsHLFeAe6WDLUxamL/lMN6nLaW58ois5m7MOjE9CuJX1pHuU9WXEgNrUrcAMQ5tOGNq5xO4OW5iCGMsZ1m8=';const _IH='ab38fc49e6de7553031b62cf154f1f14a3b5432f956df491e20b742f17688dfb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
