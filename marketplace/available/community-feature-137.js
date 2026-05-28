// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4U0OwT3ofDIbK1uqEmTEgNO+o7vT8ko6i3YJv9eiBR0mSMnzpoi4doZbGrnG2WUYPTvNZVyLArvwFi25UP7CWKFaEYnO8kzHIbAkoz3fXI/M+VQo0eq847+P+4DrM+cpWububK+u5E5iEJg60jdV33gxXbfYI7iDcpZM14Nd8oZfpkFi5e8c6TCgvO4ObVx6bj+BwHpPHv7z279uCPxk0G6B7W6NouOWUm8fDGfDwCd7/7AlKuU/QhVXhzXWYeRc1VzfHkN8MrNni8P42TJqn9Z1i6AvtsfoCrqClhOi/MsGl3KVzAR0Cn+4SG4Lx/cvX5i1zZbE/ljYdH9GFO96/i4CZBzBUMEGV3G1YkQJo0USZRYv7frrF65WQo6TKRRu4FXjK9l6+pm4/lKWmkEDWo+JFggv9KalNgfUgFX+osy2WFZnXts5qPsuCUZCJDtwLyqs6giLMDF+hRFoVQeRi9+JYaepnciZvp6XUC3wpgqiGBJLv+toE9RXeByL/FUedZfSfeMKnQpj27B9gNpXGC7l0QD1i4Uk8SnBplBoUWseQz26qZFRlNdj2ncnfJSlivRkhdrvo2kRtz08WWPsNaBoteH87hU5iGxXsaUUybBzOf24u114YPcMJ6EaqmsqF+Ku/8NNY71OTKmGojDzS6ktIsmRrnj/OrMWRAmm0Y4yI8ge+O/68yfWhZXFukS96hU17lE3Xb8bWNg6nVSSVzDdnp2/50SEcwQiDg6ecW6uHgo=';const _IH='47fb9018ca4220064324e9290097aa937991e874c83349643331fd9abe39d0e9';let _src;

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
