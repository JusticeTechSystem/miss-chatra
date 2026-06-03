// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LfZD5JTGrB1GqM6/o4WwjUbOOVJV3JBHGBgzoGVF8VH3ICzRy3fkxq9Cq2QmvViauMV58VGXK5lbZ5qguZ9p+fTXMLBetIcU+Jcia/MXvb6Hl7sH8KI53CCobJuaWzAERQ6HNO91AtJ21jhifWKlP8cec9i6oy8CKU+WpNCH45Ay7IKUh1qNfbiVs1vvZj7eWyQOcVuWuz7zeTcNgLBVoxlEoE78qHloESSj8DqrxzVjLVym8RA4DmeZuSc5d52/sLDwAg+m172Rx/dGgwQPP028UY4fhFwORd1vp4zwpMRsC9h8CdjjDtCvQnvoOQkWT1+gat1Z3GWf+ttO9T3xTyomLLq2EbZWZNMM9SE4Ycdb9yec8NlxLT3iS3ezduaOfvuIF/UVao8+hTiLIkaMc8NWxTYh7aZLGApCwgRm5LhkCygwSZmdAHFu2kSeyJ+muEByff29nE4lz5rfH8InWP6M5/2JJhSL4KlXwLRqbHDAIWFiSNUilDJVpffwDbXNPkCQekawfvxuJICwwu8sC9aaBihkb0HK3eUWHHIluKBH0ngwu3OsvUpAjrmWaqK3D8LAnOvmMguw4ziVb+N7K1D9/jiK57dNCz/hYaFiK2ZikrhLH36S7qAvYe4+5VLXFqfoetTP0nI7WIeOd6PpDJE1KWY2z/44bhiC5IJZf/F5xpEqlNw12oNkOgIE5/bFNeQk5jFZOpOXMlSQ4rQHKcdIt5ctfiwXcvufIcBZktoA2a0ydy/Ktpv5ktIoTPMdHt0Dg14ySTLPE7r0CQxfv00HXRm8OcggZiGa+LJgOh3FnUhZz5ix4aFwUyGUGdLOqvdzN+i1OGGeuBQgE9be9goUcRFAIU3Ah4eSrlhkrNAZvsuBybqEoy+ZtqTFsj4j5vJMaOonPDpFZl6MRuRZfJB6hkzLr7L/0Igjl2YROWaiG2gX8w/srScOu835LZWCmARQ3fgnRUHF3BmgIuOHTu1nvfuB51jTwKDPO/wQmpi69JALSZkEr5/RfS9e14FjOL16u7n0/LRqyOKivz1TNsyKvOCwqVQ93Qt6qlzxMneV529WtfiG2SNuHeOjAgOqMMKEQ1pLDIhpF1sBbc8TfQD1b85CMvGAxICopG1C9GTY9nRhMc7qPWDgTBuy/deeJtTdQRd3XYVR42vBqFEnRZM37ggN7d2k+ulrDJMLxRuQxvn6UvlJp7F2/Dox2dFsTtu815laBxBoC9RWtZzy2bQNjlComhSqq4/1EhPs79b/OfAn5cOxa9TXzrbUR+4tYRcx1lH9FmRj0SpFg1kzY+Q6+s91T7cdfFcg+kAX+FoyB2jouqP9838UuYF3GY221FfouSNzfEHBFw==';const _IH='c87f73537a32bd604532c24c2118782082ceaf7697a73679d8eef7112500a6db';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
