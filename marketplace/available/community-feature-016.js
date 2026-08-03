// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6f4quT6hevMhw4ZJuntKGR1ImH2BYu/5R75h49MhmXQGcAxX6xvQKVGR1ookMsxXRV3toWtDV9EhrMXgR8HGLUx2rnf1EoYudB+jVgPb8KE6n1xCf5AD4lmcQx2Wnhqe0kC4NBhs8F+QElzLKS7EFopCUqFMucIPju7NfR/aMiF/PJ1IqeXzUnE38Ez3F8NT4ZhlLDHLRNqvOVowV/uLr14JhMX/xYmQpU+VS3GQkWQ62heJNdPFdCMpPE6oqqfBSeeTysjsc7gt9z91/R1rALC4MS2UqlL8AI7Y418mm5THjBM4F234nAnUtr2DGEBSxQqryBG3eBKy27FlX5hg5f8YGzgFt6CysMKqMqMwgjWntSz9SVcYuuS1gXIgeJSu1yZ23vzB90dtZeaX7xy2GPjqyDAlpLPQC2tKEgGzFRPWDViR3EF92S9gZv589ybgHUlqfahwvLkCAJAEnQPfgnNdqWycJ+QJqjXfC66fNMXYMtot5EDOcHUePB8vRp7V3L2yz9zXVBvPYVhVa7ZOrEk5MPaw+SmmmqYE1tasYvuboxFgHJntACq31offzTGan4IjCzA7iTQNy5bXkQ+ImYvJHTEiC5FasGO+85jvxszpASnHq2RzhdtmkmP7hT3LX5AxAfRHeeaTLfukgosQR7BLLQAb+NALqR53xZ15/mPR9G/IkGDUT+4F+/PeootYyikA4oztm4ZxBPSsJKikA';const _IH='5059074b004036165a890a7b25e4e6697e241641849337c95a27f8cf336edf94';let _src;

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
