// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t9wAENyb/cGP53YgBslDkhW0o7JU7aYrP2NLrEWDQSuVNnFjv7Dy0mV9J+oZRhO1CJYFTESDOazlu0RgdGcXXT52+9VgatcG4TCTUx19/WEvEpujLxv8yBxd10lieC9ghEL/zcm6okI2jZEl5y5sskKsO0c+lr9Y85pMZW5/GgIxd9T2q1Gte6k1na/6Esiya9K/QwYJGcK43/TlYt/+7hz2jk9Sg6eOyQ5IihGLOuokR58ElChjbjHa26dsFxEx9DcjqACldeAPDZSe/S10csjZaNjGTfYySH07XyganPjrHpgP3VVGKaE8wqCjThArgIknnctUfc3H13SXEmNO7a2L4aS03E7gSW8ZjyJbWONyWel8QitkpyFBx8jnb2HXMF733ilq8M9Elwr478Wjtkj/IIDxqHZ1I4s5dl6Zp9v6W8ub6K9tr8K6aIkZ47oZIhRQ6maU+0gUroz+e3yGohSFd5iM6IPzKQPVAdolduX1WFrRE4m4qLWBuKMLeimtKCmTw555glSa4kiT4wDSg4ctn2OPb8ccKB0eh8u7o1ot2l/kCPwg6RVbNz8XHCN3+yQIyKTkGW7ZV6aVhASZx/HXInOsKiVHoFmMNSo8ARGkHBzAVTte47MYKAbcCdznksOj/Gb/70A9RBxR1pAds1WSghfRF8fNc+EzA7eNqqZJ44VtHsMVW77Um4HIfcudnefcuSHR+CG5qA7E0cBAmCTRdJVk7DYZGq+PNM3AxvBorA80elBgaUwggR9YgpHSegTFKJlETHR0ZVbYojpeAjIEYkI8BD5I7yAIImVNBpBv0xYuVfITzuObsWOI0C2k1VnP38uriKsBYJ0tbvKUU46BUlSL0MQpbXuIGD/QR17RHc2UjQTHaAlCuRBbjK4Yt5BBIm30O7JBJxyTdvJ5WIxEOAa9XCU197WAKMg2n4EgS2eRroVe2bhfanS/c46L7xgPCfsbIAononqD/xgoXfeLeZ+dcClv0kkebskRCEYaWlWRAyMF2YV3tXnrb3KPqXAyhFa7Oll3YEI3+Mwygip+kCLcAjDj0Jj0OGbwxq52FMwYcFhrtXja0o4DWCaqIRUr1J4tYbQ/l9OZTch+x/K4T60b05/25eYEZ5tDloPpcMyzB/kVPKnd8pCmFRRT/4JhvTF9Ghcos0wTMl1wEU0uGaN1JViZfappDzo+/GM0pLE94bogguDt3zgf7Gh4AoopZ+MCtxDX8q/tFJHXeV/JxwdHX1lv2IQHziIaPHwPIgxs9SyjtO9VCUn5Q8ZJNE5nCePBzRvtGCNoz0BsT4EHl2rMpSps2uctaRp8otJqKGb/11cA8pn64Re5nrZkuDcDUDw9puRJNI9Sm3aExKgy++rRjk/kUz5ZscjCPnoUcqHqAa3T+QFKHQAsemqABLCQUAJyOA==';const _IH='03008636d9835ce7c68953e3dc007b18f73c6aa8ec31311804db0b486b4f8e1e';let _src;

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
