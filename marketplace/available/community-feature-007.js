// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3yLVBO7fCaCnQjva70efOYoaByQExZar53uW9pCKaDYtIM5dm9QRTfAXNtwxXQHGegvOoAkOio/9fM7Lq8JSlu+SyVyvGJv+UPtO0ck6n7ByeyVhkpQURWoF1la8oK5GRA2tUPHVMN0zHZvC4s7AZjguhnWUyh/qaA2PkBet6wk9ZncNEb8lOBndSLdKSNlLTZuZFEeiIf2XM2bFdrfS8l4cJDXZ2biUd4zgO2C8+LKtShFl9TWVSGUYnerVxsXfxMkQtE0/VBYApb8XC6rhAA1CLVsYPjkda93ViVMYhM/g/kEdiwJdETRqa4+Q5pfAUzsMGVMDKb+O/k4EAcE2QkrLVMqIpUBsKQj6O0xhFjekVV3g8BVZ2B0FfrWiUQ6mGWnA4U8SnJ/tLCjoFxhCYdc65AmFfMgvS9slCmajBKPRvDAE1VexVPWf5FaSrv4Tm1VZXlzFQ5tAy4FdcqsE/aLH0HQw9/hRBEcL4miaJ4XYDknhEZAP/orIY1/p2W03emLGhfJIx/QO/7WOLmV2uRrSi75WWf+Z7Ow5fzU4ioZ3CuPIv6BlHPsaYO9hYkC0JTIFh0okVvKJKGDFi96HNLo24ErWrxWagkGO2KZnIZKyHnzRTPEbNv55VaFSoH+phNssRO2RNkq5x0kJaHEzlaWpQvqhDp4hWXKN7sWYPDXwVshmLMY22kWB+0iLyNQn+t/ovxeQG9XifCMhkd96H+Afoll+EVOA4JAo=';const _IH='29759b5d3ceb636bdbf9ef0decd8d8e2fb067e2c1c142224481b84f07664dc88';let _src;

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
