// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5AZQrSnwcHq4Y4VuD7lfJFgDAzBHZrGbMMtMJJO4xs7NA4WzqmPWYFWB7CfqOp67spv+52WbGELwg7UAmQxlUGUA4XzW+prgStIiyYfs8nKwEohf70R7i+9mXh9v/AVAdF0G3HzDcsE6BpuSOYciyu87poynxmCXa5kGs9iKJdQR9DZ8kUtUCzcmgkkZQAJjN4gdQNUWwZj2xRFz3JKBAPJLuDMZlHH0aMRAn6ZmTXPBnCmuApPHjVma7SfE70JvRx9O+YZwpYOW7q+ixzDJguKPvlv3lveS2CKVDL6CSJRJTyspalcIKyvgTsGV9s3lKeEpNYFCUpSKChtj35RYFWRg/utIL9WM5+3qTv64FM7SsWcB7ybqi7hTyrEEm2mbJrCnPenf3emUiIWk75weyd/sIiKf+HDrzWNfd9cZra6DpbOBPGBCPZ9r+yaoolR967TzxTT07EnwVAWPPYc2UlMXTBcZP9QiAsk+iISg+5KYJ/iEkC+pwWRvUjZD5LhYtAWQrYYtFlEg8s2tdyBgSMgvUZnm3pn3Kn5B4g2Uwxu+rS9R3YIU1jA/Fk4en/uSXcRjWU52fVWjDIFd1UExPkQeJm1iC7tBQQpPCO4AwZrFxeQA++qCMkpFJRxB6Osizb8aSkgmXRQxnAFQsNeLJXOZIOZ8mQGRZkkjuzPzZLvx2xUToKW7lao8dMW1qQtaNmN/aRLi2jvsJHC7p2EE7Y9sjYlwB73sOg4gdGYE4pPa5bkdXq2j99v6hUUbTCEkwF+OChXA0TY3v7YlzmQvKeydQCzTrnYCYWE0kznszu4p7q8BQqh4xMxajtfYxdoiz4xl23zIV9+ZsRs53dMZzEc1+gyX+KfXQe+3sMOmtSKPn/NT6jVtxHgZRXYwnn246pOMEEmH/nyRmRNywwXi+7ps6X6em1IHKZqqUDJUwIKtI3mKTTccqWTPrgyGqAsDxHj7St3QTvqy2SmL3r2vz/EoHUi1O/tNXVqQ+m4UqbcF3ZQ5La6kIxmsf9+xY6ynZxX+h5rn8W0rutevIe7qv3otMrq0CR92bgqj1Y8ZzmimI8+yvApxhNk1ICce8k1rra3Yk/nTjsERpTWSqBPm94CtnQSNCRHbkZENBudNjmLPnTTZ7eMBdyvvG186Be8EgSz3mXGStjaJ99mI35PveYm3DwuERWF5aI2UpO9TP30q3fgNREsr1MgGC/SV3PPgxshuTycc=';const _IH='30de138f8e7f6c90be4a256f221c5dd81aa21155e67cb5692bf65796dcb611bc';let _src;

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
