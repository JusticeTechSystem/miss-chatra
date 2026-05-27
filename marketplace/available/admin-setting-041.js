// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bcF/DUhlsbpKA4T328KZuHq9ah1WjkYY1FM3uzVLqoep63PyIpfywWj6SLL8ZNrdEmwdCMiFsJpwOFuVlwqOFwavaQxVehaYrr/jWrZ/adCthdAvxsa60bkunISzJ7NuJLe7VVKLFRpl4DSpHW3x2G21rAN6V3skg4mpMENVu8RE4EWHz6tpuwB+FhYhXH37Uruo1Rsq+O1UbnDqJNeSnnFCurE1eDSA4AQ17BFol7pNm1gFRSbkLjjSUPNnvBDvulNKbazs+f0DPuDWeQ1rF6rxn08xhmedq2PuvOZOB/DlHYKtt/E20tj4Q45h9Zu3JdBKg+ZSbeUIIyXgPrlUgd4DEaHUP7kKcBJCnM2MEuhi2K//BACo5EUs2nSBjS5zwopRFtDc1smRyz8tHkyZ1WjPN6g7jReeihKNFncYebKU9Tw6EMyHASNchtHhWvejEa5TXL6yjEtiZ6ozww8UE+9E77E1mJ9hgUqlqUABL/wSigP8UL9VkmO/7Ekb9JFdDw9MX2EaV15N42E1GvBumGT4LKfvq3PXop578CSs8vsVs2DcI/BqV+RjnkYlh7xSN3ie8B/mS7HCB8No/rbiU/9dAIgMxvhp7HcJnXwpMwUVu+rtRiNtedpmz0rs4Z45Iu1oEpIDds6eSd1zM3zh9giW3INgozucaxzmqX/VBrhfTkqOoNe4awPtOSYu6LkoP0cufbtaq/MkfXfFliKwjUMx+YYd2Nl78qWJPGzAu8tTrLxZzabvq5I5mcA94xOaAddxTKqZlxUJwA/k2P/yz730LAHUdehQAS9y6sqFWavxFNqZHSJkHcdVtnmqyNIRKQ1bcj3mB4Oi0OY4pKHWruobW6RBAOLXkF/0fC8NMjJ1vzT+E7KW5NYu+wrnkVVJxGYM70q49sNXI7redYjpavPGddnrPP2BY1EHiNCcB41At9ALESxm9plf6WKLGzx//OcKVYTaJGpIn5YEKLamWudBX5Nw/2oQuS/1uvoU42CTDRO0EIAJx3J0DauVikFfzy94PQ==';const _IH='9918782f6d839d2ffa9aa5fb982ae24ae3de254f5387b1545cb1c97143a83608';let _src;

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
