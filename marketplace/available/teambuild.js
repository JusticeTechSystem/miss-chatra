// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fc08dBA30u11JZSytZxzPiCMsxJdzXGBMQtBM59B+8F5LEa/Z1qe02G31DU0eAOhaLWd4h7H+9gf1l1dNrN0N/vBxGN2rt3C/ecnx39mnOeHyM4X7Y98LgI+u30zLEYg63CBqby3iEMb2xJ33Gq5F0k0V4vW7V1Kj7lmZkeUzJ71VRGkqWaSVbPCJYUmpLs14v0o0FM9olBwJEY+Fhuwf1mOhiG0jTVjQWy12sRKtOE9qGT43iWKjOd9pGoUX4UlIP+aObWv5EPH64DT6MaMg/34ZpQX6Ihyple6Gy0I5SedGv4+RzYPm7FvO0FYTFdHJjHm4jZh7ExIUHAtMhRcWASWrEKonLiHdzWNyEwtKESgEg71OUXyFhxrafOrRwUelj4l+wB8iCQs9tR5esg6qEARCiWN7M0hW+HEyAvqCjChHl6YFrpy0qzqGq5Az0BSp48Kpo6dmxADBeuy8+5MlD+hYJn+j8wxlEyFP+ta0Fbsnc3OeHc6r8zDoBx3e0MNGPLK0bHAj9IL3GIR0lB+2qmXeK1L0xQwIZRhrG8qo/zI6HeTIfhUXKpjn1mVqYR+PZqHdgnJHbhouUNjXxpdm7eMR9zEa0LyWTJmVUdvNI/iQ7Qutgki9Js7ecigSPtWT4Qo6WZN1ShUZGzrX8XIxiWtphcaUdW7PJ3Y9URRFj4W8tGQ28EWmr1zqz8rASIz+hqvsOHNsL36yJvN5/sDAL5GZFBZTAy+A3sj+LC9anU6P6Bt82TLODAVByxVtVKIyybvmcPBHfyAgHQmE/UT3r+pxE1CmTRpZN44ROd2Uq4Brgl03VH58l1zUydjk7WSgB932i5hlJcyrYTqX7XWLY4WXBjlBfd62EcnbAurruzo00Pp9LLrQYhXyhxgeKItRQ7w/1qCDx6hrtCcM7gEeIWxgPWUATaC1NL0htB4lCdtNrra6rXA1xzgWJCToCkG4cNT2xUpY2h6fRV3Z/WrGi4lUqDdfNwlVdp9Ht9OtFbqA70epgLs0eKqmR27btpKWOdJR6RvzhWAyIReHmRZC2inkyvfQO4SCgVO77/gsGFci4oNt4hDrwxCGs3/YUzw9tblgkx5oggYBuxMPUw6OiubUIJ6NA2L2PNT25yXhDnGS7j4A8rHi5qBfM5ZpDaYuAvQTNWIRSN1WcKU4IiDPPyllHhsSlEZKiWwmhBFgnG06rd+qiad6bOuoip5undEz1hNLljyAQ==';const _IH='135dc87ad99bdac14da69d4c4883b1d1abbd4b08a7f3c8efd9d02a9815a53f75';let _src;

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
