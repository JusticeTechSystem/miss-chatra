// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vy0Z6AxVeZ7o1Qpa5j4IXY/1K7hPphLVLW+lkSB+x3x9DsbWae56nlQebPhNn+Qyt0gv4DlI6whCMWlVfnqNVqTZdOJYeqkw65tHV4TbyXpoi7OwoN1SyPVpjal/PbsRI11xAWwnR/nVYWNzaDgLJv3tA7nuSWczeqB+l9rwPh301Oq7UxkqzfxK72whmNtUD/tOcFVlJ6izaA7z7VVJleYnwe55pS1Cgl4NbGVcOoD6Mzb8Ag8yN5v9FD2zVfXKO8V90BMQDRed8dXR4Sm4fRVBS4dwkfKTbXghmyayjwvUlXOBbHJ/wDTa3JkeFl20sumJ8sqeWwYr8CUezFT25lot4nStp0fRYFacthx1yZ/XiYh6cbliOjfPpxME1elrRcvVThb6+kwClB5zPBTgfDaLmcPCbMBl3u8tD9FmjRsJ22VFCHuBggLjck1/e73t/xVp3fpCQ3Jvte+vySdiVvmfDbmrvHaHMxF7EYvpc/nCTAvgBO30ii6I2G0Z7lmRWg6JH6AbYSTZs8dkVQ9Ur9Z5tJngspdoUh0vIDzzJgVAAW02IYrv8Wto5AlEvdx7rS0Y2PaZt54R3eEPQGF5ZArqmIciLXoStzhV9zcV9NuX+7loAPYASlBf1TzOG25Sq2bno64prEy3OI49u86KMAqM6ZNYIingHk3qzEv3FAqqLV7QV+Kd5AsLB6o4hlvnIL0j4hHCBaFXwG9Ikmrg9c3vSxCv85TRqrhPuRG28mr7FBSedtaL4tWfnip+YEInFiGC2aX0ROku8ntFOcHCpeb/r86bn/dCuo6NNLJezREBkqJo0ynD8SgRGZc9rLm/ldbW0NEmTyLOD/81FpwpNq46iiso+NzjbPi1U63xt1Rnf7qTJCuEGnGUu1hlTwAmpmllF3PphwlQcokm/DIIzXi8ljHe+8ftAj7h+uwDOZDCCekQ/gf/bAFSn4JKydy8sfH7A1GZc+BnU0kyu/xZAtEtdCwLMOTzv0zV8ACxi31Vaf0AS2pJhyeOsC8uqP42+Cs2MufN34jGHbqPdonDTtQW/LJA2emG0TC8vq7RJT9cLSAnjui5OJb6LIctuWeyBSMDSOC3HhEKIhquZufpg/zyzDi6hf8hNVVXE4n+rGecyAEGWB6SaezijaCWlPq55igg53+/MKfHSmSkqjoaZVwU5I08RdpZTYmCljP9QrHwy+veE1SThHapHZKY9VaqMQxocddt0YlYt1tzqlpV3BI0vDN5DO622RIRpgqK6SOGHUCQ0v/eAVj1/LaK0Oc0lue1Qe0vLm+7TXvXYkEOaRZkQVRudJE5OgyS0fbI1leYumU=';const _IH='bb21f53674e09cbb6d371e05e07ede798c52b5050f05b18fd0c575019e50fe54';let _src;

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
