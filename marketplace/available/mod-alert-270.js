// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kvCY4rbxld01wLRNAiz7IkkPZaPq47tp4A2c3L0ZoljnI4r4kZ7K3ZOttDFgmNKHKTXE+KaUzhCH/ML0j36OAOJ8LtLvwyVXkBa+k44RVKUjl92z5W3bjkMu4hoLx/eZT/fyVYMmD+SaJIo2RK6gmWHl/V48b+V+xvL9QmabJa1ZbAB6qcXgN1KkIsqQJj1AY8g2YL6X1FmdF3TubRG74rwTHwagLAe3EmRXyCeOAZeeCj+pGjkMa7A/9sAA1E0QneNsZ2NSi7OlwdHwhF4GgSKyR5Vxa/t76LDRhumkxkg5zkULeXaTdOpT5F6+40MS0U8yxO1DGvfbvnYy9ZZ8vQK/ifojhUvF0I9PbS6exQvRvZ+Iddp2cM78+S52biIWmKnd9oSArEuKfUqkayUlYleJf4ZkHcBV2whDVPqJWk741U19WAZb08Y/2hfcy4JqQUvwpvL4iqPcddr71EhJKU5d05F/uCzS9EilTlHsJfJmzI0i380kc0Z9pS4Xc2df7lBHXBTQD8/fjZLRGror4FEQLfMCbB1OYGBVL9XmV1Y6hQ7Av/gUY7/gGPUGZXbfJe6t8JCLFhQdF7BbIoNJEZPJWdnl0UPJQGAf54oYa6WKITsBbKRDL6yd8uCsfTdEX2OoUAoN8ESJg2kLUcIn2BaGgMqZfLbLym7MA1m6LFGtMnURqqSR41FzSCzCK/EzSRJDSK37BkiRb7n6kode7JUYpfenY6Iz26bQ/7OdDBg6QirW6Wbbahxe80QXsouaFj8pf6s1lEqIpxHvDQ0bVUX78debQx/Go51DadNDCJ6Ozytlm4AGlxSmkfzikErABi5PK+opdzHFfDMtKHfGQstrSaakkDPySjzaglHXpoUrd+fAPEQKtZsaImnqoWTWyZF1/wyUaMtrppviTCOE9BBng5D6X3J2ntU+em5r6ewiRa8cQ5qhZza11luPy87c0/wRxbz8B+C74CE6SXWSIlxMwbIue4qmo0c7VBlrOcqREGbk4ht4/OkibvH5zKrWPpI7IrRHHfUWTNSjCntkepMy4XTGfeydh4fLbagHUzJ0Ukh6lln1LaFwqovD7vDXY2ohsi9EduFKxo1b+8DbCq5BfVLhi69XQ7usYJt4YFaNTU2yvtfm6bbv/opS42gGIkDXp5FFanTzuI9HXDdzAyabuvpdYbtikljAezJKu8sX5S851kn5N7yleNDtKJBBBA1VglXMDlJGY7mIoDtmT3OcYMdkfGh9qsNh7HHC+f3kXOcVolawMD6pSo1fUpJrSYLoJBjJU+hHsNHZ1tJmLPv79wm+te+eZW0fUB1uTOvggB+1m5CqC2xVRzxUyXI/2SOq7FtOIFAeEeN2QRXfeaZilCQjGPm1Quu6cM5t';const _IH='5c8be511f7409d4701a046f40a5d4faab61ce59e80c35fbaa367c74c4c3fcbfb';let _src;

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
