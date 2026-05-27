// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a9PKN8pFoejLzy9KMbMMB14dkUUf3RSqhwhw69qvTDsdrvDNGU8LOH3B3Yz+DJ8wscwEdkO010zMFTNRr6M4aUvjEnAWTAQ3Uj1EVvuXYZcAIy8zVwZKvu4sCc5FAZypGRd46upteHa06bSSmtCrb/tUEh14r7u44dypPPTajSwl2hNH7WqKgLUqJKXGS41+DbLlg0zTUd3ZtSKMLBTob+uEEgC4LimE7IZKhoHt56chlEv0RbNSSSUek9x6moKm8Bgu4sJnu8XZFaqhLwJzrwmzhnk6X9RiQCU2erRwLWhq1htdsWDVfpKGsZEFXAFEUep0HaX7fyOa25ruPcyagu5amh7+HDmMWERdJoXePxvew2HARB8rZVASuo7Vb+pF2bJv9lmrN1ke45V0jcaYxj7lwPaIvcEKSXOik1uuFtxuSJ4Hds/3pQWJThhCF0kTFfRyxPyUBSP3qWTO3xeHtS/ueacktmfen7B2q0b8KK4dXhCR5VALme4VHGQDVw0SLIz16BYEDHbL+bWAtFadVUroNnD33Sdl1GhZB5seqPOnvBUQvw+9g03MjTxgjBnNsFT7UquseaQp2P8KmaRzGplhzYP3K8h78uEunscmnWy34Pe/0CQ/uqPL+uANzN4YAvGHdCave76WqF1uNTOJeIOozKpopryLVn8raemwjMOBDu/++m3M45PvLFoo1OVUiwwgKXrDMO4iiaurZ6kHoPQUad2Kn/32Fw==';const _IH='c68b9e3311463d612d5268dec34b530a91e5a2fcfab52fd6c9775c56fba43fba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
