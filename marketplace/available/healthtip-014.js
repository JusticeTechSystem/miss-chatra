// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStDPRE0PVkPVe1GoOGkUCjcIa/nHHmoo3gJCS2kkE3AvhGkHVVV9dV51N9huJahHQmId+55sd1qRcIQkBeW+Kb043UIh4qAqAE6Aa0gdEqMZtX2z6KVz0n3UWc7Oh39d3js25jCWRedY+E/KRmUAvNpBJvPtJC+xhGbGOERWlfaQE4dk+keUty/+o372Bh4dIdpsGy2/ldbzMlMlECTpJBEzkDUtp8GFjDXmmw1oHoMGTn+yLuBQ3k1HXQr7Xji5+yzBknMKuGITU7rqegvJRx4dRmR8RDjLM7aVNi9YcPMLg5XLeW2MKfohAZZhijiK7r5HLRXRQa3CT8NaT45KLmQhiA/9GbCU5DI6sNft7XFYNP9GxWM+r3RliCcZD3AYOB5DXy9EMDke50SyQ/8xyqlWEP3dnivqq+Blk7b2cgRvoS7WARWbLb7lD8oCzCqmS7h9xm/Vn7L/xST5jRuU16hfV8Bj2jWGlAuNbH8k7jknu1je48nbou71IYrgCybETcxd2BZerAOXwPBNr3xayzvkMjkFITYjBeCgUqW43yJMLDCTy3v33lFsU/4cdHGlM5OTliSjbyizPrTDzbxtGjKE7zZDUiKMDgBJGdwKS3Af2K7CIrM63AfVdG+3CrPdubLOYhTs2wPyVRi/umAQqSKGyX0tY/DXssgj8PwxwQ66ce5ZPb/UuceXBVteLbqaG1FJ0BvsPMIAaqJyhUmM28aT+RK1c8gv3nEV4fr4TLq54Sm4eT7GvHES+y/P32OYptvhQoofVY6eZQwLxXny2zmZrjia1QGsuujoLOA1drtgergHUor/PmvGgewj91xDhluuYONEnKVZgvz7Xz1hIk78ynO3Cm+wK8D3RIWZPanzpuiNbPE2ZvyJTLCLRHaqSh9GMApSQTMr1Esfq5iEG5yx+5IXbQwjAHdK60u/0qdQfzIzeJ9Awx1Ymveg==';const _IH='2e9aef77cd502563ea089248e5039cb3ee97ba82805994c3f7ba8ae2999a26dd';let _src;

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
