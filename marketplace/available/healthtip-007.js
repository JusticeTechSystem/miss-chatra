// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuZ/BQ9f9gBiADkZurbu1myMGzinSXqOxZ5OQ+IXLZhLGfaXW1G+0rqx2zOaYytHYNBvgIPQmZlvkXet7kQ5x7k+cOkbt1wxAFsp1FmC6OrZlzBqB7EBSc5yZ2EJhTRsoDE1oq0H5mrXnoetA2OZpMOujCV6ZIT0BN3u/QimCzCpRSvjonJ8ZnKx6fmAfZ0049Ek5V46de8EQE6l7MOMWsRCONOKHUh+IkaD6WDqDvezGa5fWcWEwowDYoUr9u0u2FAwfMnPLHttw3qNXovER7B9+6CZXLKfzFAIhStcf6//FvxxpF4biiXMCZi+MEANilopnKlxi3KOPFfRy9Xpd9PDf77ELcOHl/t0kPNuf3i+g9AEkk42SL7GHUjFjNXY8VKtURaLy0QiIljHzgrOp6N6bQyP4RweK61syVS98C5203+ssVlreK/dc1xRqCWiyryPc3HiiRcpmYRAUopyRsKBnq7u/c8Abqlya0vYH3Tqg6KLGJiGAV3xOVZnFwsnOi2BQqQdUZxixE+vyIn1Cx7jmh5aIbdueYKU8FaOZveLfLMvHwp05CKe0q0FPU52z81VV25fa5wGeJ5z3ict/CR46G1KxbdZldhZaoMr/Y1QkKB4/D0Bsvq3s5+55D3bmEs6f/PZo3P9DL8b+kuSnbxsPj627Qh2gX1iwS4lRa7Y7ApLJRBVa1cw+eLiwYZ57NC96KGEAJ87BOMzaxkDplAZ8oa7VX5OOiUN0pNsdJrZ4ykhfLAEda1Z4j2ncAHcvL0CkFVDdsE6ck/pUHhHxsa/5/23UQ3q0u8vXpAUwP6AOjqzK3qa25eNYlopIMiA8Lc7794eVureCMWGu7NrkcPY1KBehASuXKtzFW6TNBtfyqH732ObpvtpT/Y1ucMxiH4I6Bm/1VOgvjPvdyG1e9F/PudS30roiGw5x/LwXH3cOTcc8rmgdn';const _IH='4e3b7908e9eaddc5499a5f1be427a6d553508f3e4b169257c758e3e79832dc21';let _src;

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
