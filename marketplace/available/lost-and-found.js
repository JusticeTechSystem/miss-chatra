// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AucFznp6lXI1qBD83iTUvcbMIiwVoH11ImxNS3jZ5X18yHtdCYDQursy3/Tbry2ZuRFNZT+dsMOAb+eNfb6TTLAn3ZNynUrpPBCSoq5t5BSRgXSYhLv2zEQhgFUiBXovBPnEkaz+izCyeS1oW0m0GAkANVpfgdcdeOS0/RHJ2g0P/bYq/4c74bR+6bEv4tl1JC4TMJeOpx2Y84ybUvZfSl8iYZBzVssJrvGwMiz5sz+xmp0KiefB3V1yHdEMzxFLnhb2JibcZ/VL9Xa+Deg6gb0gOFZBsvbNfLli47jnun9MtNFQJX5ZWFsSAdqFB7F4qdT8/YEGnvMRwWGeBLol2AKD5FrLT40SXYd7pLDi05vhG9REqskmysm/LMUmbJKCMTzKvoAldsTR0a/uGj+T8V+EPHdMxZYwx7JE9ImIvMhF7NxMS8mYqyL850o69DoA8fQdsry1v3WNH5riK0x7csBTDBrMtZl/jv5FysgbiAUp+JC828NvWHpjFhHXBGtX+2S+g2AydZvrK2yngIvlEWFijFETbc32R7mzm3mpMA4t66LRdo5+gUmW4DHi7uDmfE9zoTyLL8lK';const _IH='31ac424831e51cd6b4f944176aeb18808828da1449811e23fa7658ee3e683da5';let _src;

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
