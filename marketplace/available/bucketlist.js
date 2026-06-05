// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3OwMi23ITWaW6y/u0P4xpcLEkYLfCunBQ52dmbny9Dfa4Bsybz0I2rCO1SK18nsJp8WshSiB4WHXtC1JufnkjQmbmwjWhhxzbj/WYv7yAPHC0qvOWuz+GfjPzWc5pHftftxMHEKaeC8iaOXvetJJGWFYf7U13CuOQjxCpBv3gC45Mfmeqxb6i+atpj4mL2UBCMjG/ORub/15E6J2UKmuzEDNUds0qFKpT76SabWvoj6B1R4E51Oq1gi2cPcavo29K5Y0/wpP7Tdyd0e89sIgP5t/1qXYCWbPMRA17CtznfOchdRK6iM9D4/Mtc1nhKwncq+sec/ni/HkrTxlRXP+Z82ZPQumxHkCYMQTh/xUP/930JOeO8YF/ZrrCxF2cqwmZQf8VzvNCALeILGmn+P+PvwlmZil34vcSRVzKl3JH0C7iW4d0fFE+R7KfliGUWthN1P3SVHFeq6LDYLVYgdjSzl7yJ835JdQZA/ZjhL6wqL8bC7W2LKqgCweObDpfC0gjUoXQOMKq9CIWrPyQrGObm9j9gQdSZB3yX0p4ts3Kam0YpKQxutfgsGaGorPASMz2pNwgEJhCdcpNXivo+pgnKxg4mhbglahbKClxou9ng26sIgTV+9giXErrRtdLgtSqyCIXDkYNIP/DXaSKBsWDRtqY9vMdZP5ke+X59+ShgjAJLOOnm9LSXXigAb5kP5+hu0260kia3zpVtqyPUCkvVBk80y37fBhy6AK9QGbi+Es9lPP7XLIY6642RtgQvMiGiPTti4GVvEOnKZFP38o68ufUiwAzB5P9M03mbXva1Cn4yQ9c120nUfhrpuCHP4otxFEHUEjBnuC7nlBGKjzHKDol9H3ZqTDcxLmfyhdXhl2rS/TcSZiH/hRW7YT6h6j3HJFSTUPkTYPJtfL/7qZgtutbFm/9mmen7RaAFnwAFYJ/+EylwklQ47DtPGtc382fgIxvgoKtn+lFfmzmQGmHGCpuBXQSm9xgx2k6jDdJkMbmoehkx4gvpNIiUqB3BCk1zvlGYKJLdHm8PYI0rnFTRDociusaxkv9OGrTNVh8Ulq1GVXcpZaH/lFPo3t1zs9eDrFIvasRUzsIb6LNKVlcwFKllyP2ahmKdoXOYVRjPCZUCgkEzi0ffY1em6PdebpONGiqu7wlQ7lR0sQyvJUaaftx+4O9uIpCETMRChx7MYiZ/Lg2Zlr0x+hasBlgCuo8l7C3kDtGw==';const _IH='1d856baf2a0d7182aba76c50dfa57b0beaacd0a27dc48d714ab1377e4976e94f';let _src;

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
