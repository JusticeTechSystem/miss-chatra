// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZNu0NEREc01vNdHPBmMOo4YtaxfWM2afFsxo8de1iQPG2Nm6oewj8Hz/i13fuw6690s1MF41bXxMa62L6aTPwMznfKb1dlA+eZEAYKJc8uGme+akuQfBfoVo0+hUlUyjSeNaK66M3JC82Yt3gW7Qsen1hwgFTvpJqZTjh3/WcZcfURpdqioqhtxxTdBNj4Nuvhn/omZrmelQo9xQDyhklEMBduiGC9kwkEvyBZKUVMsYUaKHKwgXzDcz/CJ17kBFjh+fAOwPUcO94SyYZ3jl1KvwADZgZcb9+CfNJYmKPHCr8gEl42f/PA9E2OQhaqVWQc2Bc30+eUfmOls3sxr5RZ0cBTpO6ZSb7GyZsBA0O+nvo8gL5J6G91zRJWcFUKbpLXnQPkRagGS4m8B8++SRngGU2pC92C/k1EYQZrYtPoDrNeBo1me/oz6O1xHLb5akLU/qeHE+7we/Mt0zsyhz6/qFot62ITed2YrNugNxkcjqr1Fu/sIOC/ojUK2L8Ioensm+RNHov51uE63q6MpSFwBBlSmy4S7rz7NoYizPccimjIjL5/6UNFecUs3Wilcr+4zPmd8ed8xfv785/e5TSlXyMWUMsMOzWnCx0FvBiBCs+aSkSfBAn7SWyXtOzeFjl9l2cC/yqS0hYE3XKKL/Xam4ezxSEis255K4TrmOWDApGuBGXD1VSQiNSc0uDAeHtmsphEZjyzynVG78dMs1C7me1GcBfr2k/B6AKkO/jzDb6PAhMmOhgNZ9vX2Q7V6nH4JfGhxyT+SqOFs7L66ISapuYnDO3oftP5y6QB84GqsAVgu++lu+6HsUnamvz37Nvh/rk7Qa9bzsbyIEBKspqECRXSBGf8vFLz11xYL9XQhHaKtYBKeJzjGk8mY1k8wi8qvXy8SfJ2I/ZI++6pfuhPsYkCGMnlbRuRtyc+VzNAwDqRsc6BOv5LvGCNNETbmZ7eQYLv7dRuk6vIjpzB0XUNqNmntMqNJqwF4M8tZgnRQyAhx+9s5mVn45xkLBGywbVEEFmAZEwgbllHBa/cUMJ7HnhFj2FaVzeCXIkirjxwlJFwrtlNqKshnzq+W2UEjcNMBq2qZT6ef9ktp7KKy3AzHnxPoBXpl0N32e0G1Ev2nXXSre52xERkWPesn2TW5ekFvJS3X3HGkCwOpY7pKjaXyU2rI4a2RXBHhEVxidQg17VQRby2wV2DvyBLKOJZrCIeHyvnWCs0xOYIiKfzKRZVOXvjaVVxiNJIowg/BP4IiotEGUm2OTfX0HOiuNrp9TS09yA2AxAsyetPw3NGXIu53SdxG5kEZE/eVtSr2BL3EeujbD3BXD+54g6ZE6ayzPoT9mBl6oYpvHThoRIp8TU2nQQvfnFmg1UnLyR0ws';const _IH='45b476d8bb97d525b0b43a71dd5ba13fa3149a9bb4a73a9cd5982e464a666ad4';let _src;

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
