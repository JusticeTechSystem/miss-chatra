// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpWas9pwl4UdZz6RKt4DHF5JyvVzpxwAE9g9wWUeimwkmyN7X+CnEOj8gS1/Ry+OWUqg4AgmowQbCuchf4qDu1aJ1rToql2BsWBr6TKwLEWN1iHDYY24aLMph7iY3jIrpfRrCmhlfgBGtFhNCXid0c1DkpQy+klm4THE7iBkFadsX/hKLVJdMYWfh4Bh5uWukT6i9TAErn/GVS2aih9J0fDBDuVwm3ry+ZCKRk2NLsPZ2/W71e5JJSGbi4oQThaQwBCbktzreNDWPJBOQ1iSbvpnbMeG6jtrMjZLbtcVup+xL61Zyn1XOACD41uiGvzWE1pUB3alIaYhRUP4ndsLhMkKFzB4caIIDoCXbbBIVGlz6/GWXnO5iHgbc6MrC3KVCrl8oUEVfk0MGpc/Ai8mYA5Mtc0g/kyNkluEftDXwZt7r0U/ksn14lG91Z+K7axDRPzZ0AgQ1+iadCkb/jWslGhkQ4McC9kra9eMTXGtPDBLXUnqX3TxY3t/O2W+zuodeFYVflXfmiRY7YP9GhsCI4scYeOQ97VeaizqNMbLJnZJJg8wC1mBwrF3NgooJfi5o4dHhfRa4jwbzK5UoBOGuvGh7Afw4dpvzpMUOX+fsvAOSc2WnFslQtFWNKnYjO1Y0EnTPlp2mAgNge8kFpH1yCC3jVjv6/acMeYvQK8prn6CjN8CAieFYGeb2XqFiHV7wxGRuc9nwYJ2Jpnsi/rUFbunaWZ1OkoUPx';const _IH='50b3ab2438f58d4f29ee41ad4156d2e076e0522ea24bb70e41dbf637e4d85f68';let _src;

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
