// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gA91ixGhDw1AZ4hFbe75X6CWoSU/DD2x82pXBqF6YJechGR4AZyK73VV2AvTL2H05/p3Z5qyc0AQ+OU/nuR+NqGoeqCUqNXW2nRsaq6QLTleqI9kHsmjBu2PL3oJFY8vNM6uYU05CSjlahXhuBNqnPMKDnhftmJ+Lm3Wz1FDb4+cx4SgYKSy/8+doNrccBlQHqQTqBA4q7qM5XfSt555H+RJUsD0PwZZsHMnDJb1MV5mNtd//EM4EpBIzeSsoxKPcCp9IrjC89ztVWSTp/Gi2OxPbrJvcJaS6TCi5nsZJvB5XiONyXkkw4qLU9qBkXwUtdZbNhSg+zlNNFhtM+HtG5IVLL3sjQGpuBOHPOi6iR6xE1mOSTkdqAEFox0fC6UNFA3RTLw5qwR5gxMoEXOWG2uieRTlpBw22iUJyTYtL75XsPMa0/fIHuS2aLGszZhgkIXeUFvCIqsXwEWpv7AVSYQ4y7qhOp7aGe4YYVPibO1kZV8DPmnVZlelFcmv3plH/WAcI9hzC51BNSLq3pklFRT3ABg6hNm6zCwMQepaqzhf80hs28ZaDyD1i0AI5OvdFXRGlnCr/hNn2xngjgJ163S5lU7vziYDSgExjHy8eMaaM7Nzif1fDzhiZeMVmNvfk/nwFZAqX1w2RWP5qfBxO0XUvmsNisTUQxSfd6uur5LbEqXs4lXEH8gF5ORN8CoWrxYHVsk3jGXziKwcl7Kjw8FGVVxFPSBZvIPtP7jch6Tdjmze0aL5otZXJs4svv2nrIantKZ/oJdoRpYrnEnTtvy8wILJiaiN+oc7z7FkSNZU2Vy6EDLy5jEC1P7K1cKGIlGkK1Wlp1HWcj8qwmHCfiPUxiz3X1YGmskaUW6wXV3EC2pj/19KUg/WqjVJfQV/C6JbXRjjR7BjrBHnNEj0wn+TUHu8JIAPVs8pSSBi3d4S2gdC/TYMsxBi/REIo6qEIfjCLSTyNUyap6QN/Dx4NvJzcdibgZ7+VCcRwC7QdI1e80FkwzI=';const _IH='93d342978380f2237c8fe34ebe68954c7014d5fbfbf0642aa5e65c26a7542280';let _src;

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
