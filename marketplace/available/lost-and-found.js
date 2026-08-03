// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBoCmXSdZVT1kcuDEvyrH8fmlrLGL8ZBVjSmVhUyLR1AUvXSx3iRpSsIY44dOyjAgnBrc5UeSQPAGDB99KXzOy4f8+oPPW7qU1BBoIOXKxTWRwAK04EZ8UZAJi/n9Pd4AI2m2aZlJjodQJlPPIgkIOqdH6n8w09ZNBxOJTNQRqitUlZ8d5LMCLmonrMUsfYHFTFMplBp0BNZ2238o/xWg9T9rq1JX1X3jJs0oZMQ+pxyCoxHgNeBa3zFSoSAHxKmaaj0UrYScxmmYDj286GPmUBm5OaOZSDVuHMFQ6oaoCDEpjxSqkiSzNxRnwzgD+AUATaWXg6rF4KFNB8wH31WkUMBn16OkNiaXARf+lbm+CF1lbvbzf3phIROJrhZX4X8DUoRnNMohk2CwhTsMtVAZ9VUQpnBSDfzxDc9rIhLQnP7AL+OTCkjOged23LBW+EPo1yU2GitWHscEDtoX79f8Z0lGOdGnas8QbA3+A2run7wtlApcwKuMtrpPd32MaZowyFMOfZ4D3qFMnxS1JqPko8JsKlYCoc9CvycJQsBOCrrGWBH2E1hIcBtpo7q8WMiOBEoxWgKCAfFU=';const _IH='c6982862c74747bf87abbab05eb1a814f929111751edd6c2c30136c01e7a6f17';let _src;

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
