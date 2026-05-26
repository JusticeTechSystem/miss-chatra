// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y6oA/QmRDHD+FdKT8bThS1P584vFsrKTNDz8GtSsE0zzncd20DEkzP6p53GsqdmrnIhg5UWbz1zRc3nBne7y6nZQ0M41+yL/Fu5ivST3cD9Q3d+Y6gXW3DuJ3zRRyaB7Lh7DuLZDwP6Owz4rxebte+VEkGZ5NfE9jsutUrA5gILB812TGD6lYlYuY37/HZ801YRuJwRYd1bU131iJHiqqRGPiwCZ3VruYxuz5DnFFTzhApXkNgwPxkbKnkGnUY0qnDzV180H7q0EvEPDuqsemlfeWxJ4LRwfd9mADrMo1iFdyz0g+yjetuurkag4cla6+enrtK2rVK/JB6WM/Ey3TSiF/iYDG60YaPqo3o/WATH4Z2N/XwzdFia0TsoTEytK32EaqLT/f3Kh3xYHZGoymFc3d/1q99dS3yUg9+tnheEOJK7yY/pWVdskqrwB5zUb+74ppZc6S1G3o5HuYndhfaIMTl+McU6IX6DhjwuTeidpwjZUdC9rVyl0OQzL1+iwvV3ao+xLlr5MmzbHIlAno1MdUouN1bj1CyJJbCiNDAu6AxEIUlLAIov4bOoJ/DdDIxm+PK6FKUwOKBs1Fl0ACj1X4+X7zcxOA4K/KQGDr8r4MoO/Q2kWLykFQixsT9Lejbej6ABzLuxcDWV6oUWulBs5hDjCIHw5oLmUhpKuAr8PGsIaGmXhA+xSwehZbbTc+vxV5fSvnXfmjKL6MEw/GCURHWl2xp4QnMat6QC7YaMifBFety6zgsJnEb4U0iL7DWjfByJBy/bTHBy9lXHhPBiYYDnFjFhmlAndLGFM3ZnimSu4Tuc8wnn657GUWGwHghjiyIpHItavOw2GSrHF3vYFDdKCZtDdxTGv2T4deWkEqZb+3ZNuhrQxo1QdouWsxKZ3PU+FcTw30pt9NC2QpI6iWIb4txtKvaRcDmNYOJv6UnmghJ/rxoQFVdJvZivpsFSQ2fBuXSaL+VrWzkconVcPe4xyQZO/yV6LeBvu3Z1mJS39/Fd8O1Rxeb4Hhz02p2RE7c3gzROC3hEZo5Qb5jH5catfSpwHL4Md6cgFZjkCYBROIokmMMAq3UbcjJGLm28juh9M+TIaBCAZIJ4FtIaQLsKBqxVyigY3sQj1gyOK4DXM3ovs6DolrNnJSUXBS42hdiRvXGUxXcPEpiqGmLs/mJZHp4GELj9wKC3bJUSr8LSniGTL/J3xza/Ws97VIz+MZlrO7Qe+pP6mrWBUK6DzN7Pcv1E/sGBsliv4fu4nfqjNL3/CrdKODg9fmShSXdhXyLxBLymoh+ptdnvC72bcUudDxL7W04y2rI0BcXdS/safY1ytoUndqOzIOtKmNtX88RJDOPhCdlyQjhamwoMC6yit81OcOf6P7Y8T';const _IH='96ad9a0a6b8566eaf2e166052cae12cd33b06a9fa5d2975719439c749151614e';let _src;

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
