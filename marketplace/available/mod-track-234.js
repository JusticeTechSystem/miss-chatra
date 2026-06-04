// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6g+rpesauRPARBzyl45nXwpylSeZhYAYXjLC1uRlleHUlbduJQJKASsbcm2Gi+zOtMQoJhGItJoqANLTBhefxMhdA/7jSYDCDiMdDwkRSE4FEfVioAx/6LtK4bq5v3q6S6IejA9WTPZrAiR+RqAAaczCS9HVpKvBD09xCLXs5xf/sJsMM5Ql7aiLUjjCkKr40fXd0kry9hdj5Za1+08zFiicBtBcrzmnDPUQe/Xx2PIKGTCoKzpO51T3ywh+7fVxkd0HHNhB09+B6Bh1EVq2ERabD1o/LipD9CX4lTyzscgxcOTHVCQj/7C5o1hk8909WIKHEao1VfzRyIhWmol6OJRW4bP0vSSzp3dfhZLeLl0yr4+N8Ne39p/n7Wcxtk6u2fi/kgHqTx4jcQISXjfkAxf1mv0w1ebe0+BbeaRq8L3rISKd5NB4C01ulSyenB1UmY9+OoJI2lIeh4upzfSMisIpzVg1px7QpUU/qzqBmNapeITbcYcbA0OPrStbLw3U76cUlM9OpVTaFZRIp0atDzlV4FFnxSS7vogzKYrCKhYDAjPAQ1+3eSQboNR2wcCnFpl9by+s7ODaufNLY6O+genUJ/VSShw6deBXvlLkjpcVj3ZEQVooxl2CM/TwaUSJByn006VQZnNm47lMaTq+BneV7vff0TS63mAXsqe1hHj/ixddRHm+FSgJBwP152it0cZJndsXAb+uGhjgn46fSVXfY/FXXC0xtpeGO/g1DC+NlcNjv2CkEAgSnieQktwSS9rteWcFdwF8n+hrLKqSPLcr/MLXrG2i6iJWVh59TVoxMn2R93w/NjNhM+1blV4RYYE/hIqlU5FN6n1YhjWdKKrlwaeA/rbqfnu/QFC4FGGRQHsejQxbGdf3Z+mmAlAgccgBGHXsGt1rH/BiFZ23YLRUXiPNVjMdbos4mep99m0a6FYMdjFx/iDGHlKPHDzoDKPBt5XoqotrVgshl8X2p+tvdfZjHYl7Wo2gaUZpqvsRfGtcs46tj41KQHa0dX7L3GlzzissnQpRr+1AjGfDuXFsp5cYNTY9oXkCPSmvXPqaVt1oopOR23Acgjw6bsNPN7RPw++UFDZ5AvvY31ToGrPf/KXoh6zEsDJmblYhtAVKcM5YBdpwEkmh+zk7eYCwZeUNrP8CGB9yj/z+DW4BXOv52KqfXBU8wfqdWn6LgsJCh6DWShI9I+jdmpEIdeRNsUWDtaWJlTVEeQnNsCJOE1CxS7z9yisyJ1EgFP1nkOPPi963zyxKa/JcNbgFtYRKr3iqvYMhmXO9P7rfvLhxZWzshx/z0+JPMgAFbzi/HCMcLtp4sSDNbVfJVzVC7pPhTCy8MwGV7wH2Jba7xTSdQjn2ntJgAvBtNu1pmOmG';const _IH='e6e1a1c223933f5d2889879301eb374d98b2a32dc2fc005414fbec250dcbbc20';let _src;

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
