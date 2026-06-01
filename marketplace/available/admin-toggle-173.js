// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5ihlV9EDSzAmjnTDNFxq//1XQVTvMCBRL9Vl1zJQhVs8CM9kksT30jIMN6A6i1xXxZ0tyePeVhJCoa9qB6PSlUNkrwG7rqQSIuD07YUwS/qf2jzeZdD695DP7kd5hC/CB3vNB+Nu59M4PiuJVNjzYpNCCXxEG5uAp/sN198AeAbqpgFhXImyckqUG1GQlCW5jRWHCDLXhGIlgC0m46YhGfgArbZ8OnvjN7cW0jWxWolggNr8Z69R/Joa5Qa56uxJf9PUjMppfu44pJQUrlsl9EgNJa1hqBsk9D9YyGmas2OoS3X0xht7AcUKhzRt3UroqnOkt2owiOhPl2tYxn0O/KaKY0nE65EdFprf0hsozN89iuMorlRty5i6022gg9/aYlAOSLHg/sf1YVqHfCwg5lzNdCP+Au95ulBLsMgCtJ+5OaKXbpm7M11HgEhzIMtnXse+543vTzVORK3UdJRu1FS3wkM0Rn16USmSMr7sYhB5Oi2qS090sz9cH8edjaVhuzphldW5HjtDQfFHwIbBMkp9vI6EkuM6Q/eWoSlmveQWqkZCjS9zXjjd0e0M32kL3h1ExBKHAN1VgF6B0F0w0yuWUIpmfbz3z5Nzx9ov0ec3Vl/jGwaJ9nLyjdonaO9BbKd4VFxm3yVQIKUVkzzakSq1WJvomvjHIC4Q37xaujyfIMTMhhEyJXy2noraRE0jwIrAVAuiraYXZbBoLYAR4ZnOozxGUW/CANUo4CSS2n046kbTgeEbW3hoH5nwBA8oYncxO8ttiPYCJvIYi528vI/MVX143IvAje5ZDzPmLNZmk+X50aq/GyM+V2wvpWQb6T81DOTY9Dm28y/EgrVo/jlvcS03XbdEi4Ep1UNaDTZjnlAmtGuh0Sa85q/zaILGVKGdjqN1FR3CL/WzQVTsZdL6nEMiN15ZuxHF3sWhN8W3WbSRs76TDR9VQPWYV3Ar7vkEBepTENxLa9DVhb6wryHceiyep0XCB28kNYUZE7OCOSl+Ez3N5gyjhQoyhjDPBc=';const _IH='bbf54e17298bef0e39cba8ed8d20a371f92b9f4447b29866c63e49d1a104cc9f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
