// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wPCAIlYA0E6T5yM5VJ6HVYDlX5eZWoBL5C6PFVwpOUx3mI8awqEsZSrViz+dMIC7uxorgyW1Iew/vnYBK76JlcRnVdMPkDC1pwbAdlQhyEh1t5d1XQRu9YoTgpdW8uJjoJMAlZQ9wX/H/hsa0grDRu7q64lkP3+l3cljwYJgOR1gAtRirmgN00/YLnv+iYZdhwNdpSembtYLRfn8ov6Op0df5Pw50jTo7Fgxg1LeX14OB+z5WD6asUJHKRWvTs5oJ/iEMAJ8/gYgrdXTFbvfZytyPBBs/r3OKxUcN4fMutXKB3vTYvv/P+F16m5PkjaechNbsfp5ovQMzZLEXnHI6TCKQCMYKncfK0sOWIKtAAaztXG3lqpIfEiTeeUtC25a+/ktkodlBwYA+Ohy/KNgNye4zFQAG2pvm+A/QQCjyD5GM8gNTnV+OtANfheEcDaXCxUkwTkJnxSCUvTMkXTvhYyoqThzBfX0ZsqAOUW/Vhdx6cwhMe8dXi7UihJkG3hdMw8o1xgSoIZIihaXGWysQh4p4ohfwBcCdCoirHprlBgWbCwLBhyqks3XvzDqg1AfL5AB7lFyO8MRKADpmL/1+ZqY10kXdLt2F7BgFOP10eSIgg/s5kvgUiLtuW4mJLRi+556BVM5fIANRFMCFg6QNhjGkig1LIN+YE45D1PIp5S9rRb77DVAFamvQX8SQcIkBSNVkLBw3uQzTk12rs0oRJoowbFUzOBH8ZRGmqtd4733HoYZ6n69ZmAb8pGmr1qV1kCzQj6XRdmuw2vDETdeEsQtG5K50hnljd8q4nYm7/xI9spSon0RdnXeQ8nSLPLk1bL4X+oKPeJoplNhO0za9PizZ4VO2gvkAgYumd9wj7tvJqGHsPphScI8Hl1QS6fVYSCJR7k+Sm55rbULDyvCe5rKf7mknYBl9vapokH/AY0qIVvsGCocls3Ou+6MAHu/X0viVglg4q3dA8hz6hyjFugt+tCI9Hod77k3QUa0/bmW5Uyrbax3gzcPEvq2WdEnSg==';const _IH='ea6bd1077dd3fade7e5ff1348ad1de0b98fabe6275791a049cd21f9e4256819e';let _src;

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
