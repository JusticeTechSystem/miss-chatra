// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hPkhj39s/A6lWcyvs2RIGuH5gIg0yy/wHYcs1ijHAfcrX9VCdJeC10jnXt173VAgqX2Iv1SE+ila18jTzHkeJ1f8bp1gST6TZ7vi53Y44AWFj4FXJtIMfudsFBhutRNau5IbqSClTWDvecxmbB8836HqjgurmdJ8tole979WFkQkfGIHQux7lpOcdc2R8u4zY+El1LldTm5KXq4YRFXTAuUFdnqGP9eSNYt730k8RdW1dHIqnB9uTDLQrKHp0iSHpdTf1G4Er/PiaglFszt2T3fGmzWNAzt5gBIrwM38Qe+V3t7tJxre5xof1SOJk/7xOHbwIJNe5fK2AkTjnhn4dFy6Xi+DpIzFNgrOPAmqsYiytg0KloQPuPuepV1zWmg2HmxKLIhFcFGV2aWrsR+7rEons9XWC5+nVzd12L80xKIylWWoNqbuThBFypENOV0NzLHm3Myc8AqqjRt/n2lza7ABPtErEWa0Mu3O48VJf9zAI+QsbOPTJwTCJGP/ylUMQcTwxMuJCg+sHNBcUtW53Y2ARY4uvPrzWeDck+XH2FosUuUXI2+AxoY9uYfATXdQTWpR+KTii+r1ALxoNpMv7h1wYoMjf3aVp5VYDKe+N2fxLqD1HscR/Y7doCztl7nY7zECGUNrE4sor74dsTb3rOhD2hQ0NboePAL148n1hksPKOFy3VRSeWtTEWYoMTTk6XmE2S9uFMyBWSN0aN2hIM01hovdC1n+d20r1ofzHxPk388SRSF4uWxdYns4uXTzHth8YFyhX4x0WwjI+Rdn5e7PdwY6sM0w18Pkm+GYCrjPevOIgBlMiEsPLyRV6BPPTOnep39I6OVp2pyv0eCVgD2DruVYRrjkIEIs0kdf5ec+xVIM5W/AdmkS3ck+6volEaivj6fJZEMyfkTm7F29TzJDkNFC503WWkQjUP2aBuXuj/4prJd2DxIhT9HlpD1CfU3UPmZ6W5Te+pCe2lcJNKKOQTUCfCDpho8OX2E4HYl4zZaikzkKS5qG';const _IH='2af95365f32c21c618367576e234f4f2abff13175755aca458a7367220de22b8';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
