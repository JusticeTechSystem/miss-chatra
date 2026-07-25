// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSY2geTMWYeiDQcJ4ble6zIuHsq8qKvy+LLh3yu2Qm5tvWWBlIQwYPD1lPz9KpTHMbaG2pywQOpY8KXrjCQFLQlPdoGhbRjVoE8TN3On6PRSnw3emKGMBpOzRSg1rdWPw4x2ZYmYM3U6xnHUnhb93XYbibiIZIk0hjsvtL/5riGVCh1PU/Oa9Bom6902m18LL7WoPX9SrhESbXfqCOJY00G32XN/E/wHRWtcm6Z6tKHw7PS3LycsZQxl/4HcJ9ou4tm1ThPpq0NeF2NJCyVF3CceFmXTqjjI+LubKdcuQZTQY8u9fF1hmKjci42dQ6RF08HAaOvcNGapDpkE1DDWwfPiP8KyrjfHLphIMXq5URnxVCzn9h3C/BmcNRzryFILiLCAPOoUnV6jKLDACtQZgw+SmauXNltTCqEVAQPFYOwq59OLVwam/az7dpz8J2KWp5jcebbZs44J3Wa4rq+rO4D4YRnd0xjFE82EglY7ymIF15XQqkS/PxC1mwrclGjiWrxF3/khna0tg4mfj0gTy1Isga5EbTyafSKVlHjDYu1xWfhiKJ+7VESVYgjUXfPrIXNVHxl7W7hbnnDSrD6s7MMRCtC68us0MdMn9mqWO4WhXQog6hvlL6NsTIkV2w+y6DOX5x+hOTeMREnNKO1LnPjwDnW9ao80UpKmI4/LYamF6gFM6w5/mpcdiKa/brmqhX1CVYhMEGS8IA78SomxmHhrXAYDpecOOvEQobgxx3Y';const _IH='c5a51938ee915e675bc2f1101cf6ca4a7f1303cbe41db00a3b4e6ead3adacb84';let _src;

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
