// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4C5VK1ujbVuIUu1W0e/GTI5lp6d8RKmMsHyAtUAaugM2QvlD04CTTKCbR0ISYE+BhBhbhT/fb/j15JrGaZbxSZ6LJWtYa2mDJEMUuKQjIcRhWLn6Teor7befFF2gS0O4MmU7tVCcCJWSvB9zk+iUMFrhDFB70j1YyhhXtrybufb/KDC3kiRx7vkf17d9x5AJbSNd3Sw8EKoXD3rk9ABiOjpfAGxzbvPA0i3plulG+gV+fW/1EAVEQRoWDYFnXjswskTj9db5tvWHxayczy89D5bsWQc3I5bjgDf/8gyuqrtiNFE1LqunQCWsR490maQbZVM6uWI+/iR5sq/MfETWNnxvH0flCiOhN0ydInr+zuBVEAjIL2HlZIrFOM6Jx8gIYubK6RTROHgoHxQf2AcgIGbD3x0FVvkTJ+t6d5wqobichQLZPiRNiQj7ynDvSahqACLCbxz01Yqyrunn9Q4XV4mOszoRkmb72FOnbWg17uaARw+ei5yvdETR0w3eCUAA658QbkP5fB+olJBG287Kln0M31VpzA4UdWg7/SfxR9VBzrbpPhE2aLAiObSDHi9jB+FGl7MArEDek7ZxU16mPY4wweVF4jn/ADyAu0GL0j4I5ANIRp4YuKGLN+TG5fgZvbiKgTMt+yw91Mo9u8BejHutAz//J6c17Y5VE3cFJwxQC8Yf0AKBAfhuQPaQFbz1yv2RPtNnTHfBq6I41gXG7vPqemk3gQexuypmv0NZL5gEb6qm8v+oKMPNLu06Dww6Qmq1xiNFDg4GjgfwzGX2BwiQsmMxYCsLYTqydzmDxIV7XnMuW3O+n83dUdMnmdo4iBbUkOXb+6mADOPnxFpSM+7Un9YwXZUWp0Z79FBL4ZHCRkblv3R0gtZTzs6sO5nqHdMNfVPozbS55e6B+yG0/zMPRyqQ6X75mdtIttz5LLH6KUGZ+YI/tlCYXGcAEr3ah45wuHmlDlFEM5pkF4mn1P8Bqni/XkYs0Bq3tvCwrS5rTYPcsy0qDu3QIpzcNeGLHqHVlTmNe0fww7pjN3TtSGmz5/Ombny1j//k1WJekvqdclB9Q+HpscQSXCjgvIk8P8anXASjocgGXEffQh/ya9Hw3NDr4/FE9RhtsP1fW4BrQu9O8ZAtsJ6QkEUa5Qet0i2wK1SgjsXJzauzvRg0cjLz+nEWQfcnTCnFLIIlJPFELHe8hHq0oMB8YTxNsL0Pr15nvSLfEigkRLpSqZ66Sio7yAc2Taov3Wh9IomaxvY2Bv502b6cz4tLCWXxR19lPjUxpaUqmeA9q8pFLDr8ct0+WtDI+gGT1TerQY4N8L8ZJ5jkrUxIW6YhWAWVT/STDVcM2QhxwBU6BNlz4a6uV6NnzC6TXOLJraNxtXQA=';const _IH='989e04f07204a6a54f9b91be761a157d1736c5b0b96b87e9112aa17d7aba6ca4';let _src;

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
