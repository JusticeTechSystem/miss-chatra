// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vc5Yb78AVdBfFkypZiUHpBkWF+0r5iiML5BblTPXCU9YpGe+FCWOrogJEej0/rTnMwD7Ui6KpLD5EEJYkrAHtcmxmb6iKP3yeTs96xkOPyOJt7n51ckYFIdEsQAUewG7auijYD0FfJDGMCrBQFfpvGyvGOhsAFkstmZwpeoCirvKrlj8uxPKYvK6xNe2Dn2yvDMFAsYxe6bowouiUu3mEvbLfHJHS9v8Sjdvtj3SBeTd/SlFl8fEOgMTgij2uT0CmDU8Lbk1E3qN+SCFYyroIV5jHcUq0sqdkq+RywzunSqKy4C498VRthQywsywzwyGGk4qoDpRqKegFQ0t/RRetykQilaFnf/sNhOaEdhbVhhMLkt8J8aYWLRiiWIz1+Uq/qmveYOQIbNsPmyVcmtNHHO8tlg2ou7af/5hBV0YOALozOJ01bYoAgHrqLovoso7xkM/OHjkn0bZn39LWRMa608Y/v3GEmyGRyHQYC5xNPj2rwnq5F1+7K9BG0zaHMuZZ/m8sPv8ijaIBPrV6lIUipZFnNFZ396u/RSDtVQ687XxqOuc+MzPzcuQSrU0AXq5tdoyJ1JQ1szkNm/6zeI4mTijPvfwYrIv8OnpIMQg0iQ5RR9QBQbMI5qn534eMGRAHWY9r+fcnsbkxo7u/Nnydfub9dOT7kR8istPaWHUSRUIO0bTKXeaVji8M3gPjc/fpsw/sDnKRm5KdsyiReU3v1qwYxTbQYLO+TNRBEaG607hXknj/iOmi6I85x3L2GAQmBKyWgR26ZKpA7dG8pbhlb0UzD+zeyemotvcphcrFfi+FwMKr9TbRULDkEYhbNrdl3cu40sv2E1PSC1GcM6ovkg+aLNgw5+uqy75qkWedKocF1fLku2WX25KdWDr7G345LTBSiEFBUxOEhCa6IrMhp7Nw9s3burqvPOBQoZW0IYgdJjdHP7xOTS1CqBlhqazuq5wRAvuVxsH+s3MVyqyI9aBSE9kie7u6cY7GDdTJTcbfj7rXKGZXbUBJNNBqgLai4HTr9Na2Y6MXcjz4w3HKw95ZZ+fDdLtG8qkoxwJZ5GgHps3KEFizKAJalWHdASawYvOQGIo1msPsSmwOVDY+PxJL01bvh6KDSNStJpXEJ+D0U4mSg/LI1+RvjZGdf9tpnrcPiMiJ2jn4vResZCarHwZftNtSyVkK82xN/WBX/JVIaUlgr6wpMfapodTilmsFiW8yWF7XD98obyaBNtgsbBWXJkJwLcJw0TpwrODhbjKMJTFKgZ39pc/M2hMzMM6WmGxFz27LJmQg86+MHiPHLY4hZ+J4MKmd5PSDti4jOD/zjfVtzz5aVAMoQmIN/4NP2Ox6w5atUgIytZsRKFay4KCgz7yRdhFZb+tbDrA';const _IH='34ec959d2750956e36fc38b696ab036e655b921ab7e77ea9c1aa9c80eb8ec963';let _src;

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
