// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1NQrL+BNI35xSrA0VwKL0wA8vyV0TExkk8gBXocA6faEfB6lpenGHVvR+So53e0tg/5UrrvvbDixz6GFFxSVgs7SfgtlhtFuMDN7LbboK6exRdt2QAWglsOZ2rBt07/jtuZnarQ4BByW66NPEr117xb5mNW+5FvTrzXzjCLfuuIuKSyzNBNwU2uWXlP5H3ooDz01JJ0EpqezhIWNnGeYO19djGF71eIjUwTcSif0cFc23a3jedXjkhheaoHYNFtEe/YABuMOsXN8f2SNvZGDHR28/Vry1VjI+QpgUnkrPsI8g8CFbZmFttTO/REb21KQ1tpbPeoDuY7E5EBeOrWEHOQw1xlu50erG5RPb6Sr5n14CJNKTErsq7pP2x5+c2p52iSpOcxlXXV5pi3ggpAVyabtjwRSHvPrNpypuF1l4pK2BvNFjvnIlExFN74iuOR0Al39LBJzzZzx5haIyHmJyPfQPUordlittWRphnZRpvFUFePSuOhPNeJUQUzmqfCVE7xEKitvCGHiRqkeX/L3+TGXqW6c8clBmLAQ6iy6CATrPS2d5xpljwMNPpyw/qdr99+AXP1Ny7pCdf90RZl/kdhnHuegzRbN/e0ZAJbcczcQ2/Am7PHXxI3+HutyXk8A8NT8o1Z19i9e9bR0ZFi7zTKgJEbHpogQ5D407xCNT7jwwqiGOzePx/4cBo9Av2V4mNLqqLi5LaOswTvJgAewg0MBNUlp3uJpZxq2KfdSSpjUwpz4kqrQ4UOaeldJP5eiMgjNiXBWD+tbrO1bhTjPsmwNg8Q6odXH5awOoa3nMtSzidusXJoPi6ujnlOBniq58AgXkK5apj3igh4/FCbRU05ImTUmACI1M16uU57s8WXpsA/lHvAoYU+5x1/rgwX/KsjnLynyGtIsBcDgaZqyzObpTwOMrQfA8bMsfKYnYfZkOXDhcc69XQi4qoht1llmmEMeIfm0NjifsZmw1tuzKFKgnsqWBVBSLTiGo26D3+7MiRO+0zx6XLaU3tHMtVCVmTedR3XWV5wrawPOhCVFsHH9WUaUBsnh+9ra1kpOju2AkEOVy/vbhieiZelrHtTG7FKaSZq69TbzyWJuZEv4Lx6z5ssDbsD4BVneq3nvBN8iYoi9qf/nw2ye791MZEy+8W8JzgJNEZ0uaZ7XXNYBk2DBzEUzSUOydRlyrAFsQPGZhll1ioSjyH9JZ2cZ+jaa71v9YfmTxNqeLRE/BytfIqrNwN2pZLtlgR1H21SNkExdr+U6rlgRiVcLGOpPgijqva/tD5quWenWpTDbLs2MogXTFOIqq8CdwqEs5pV4X3xZ462nJxuhLffC+2s2JW7D';const _IH='d5c69d59131b2a49ae4e56bdf4804ae654a524d56a46559cac82e0d93af30609';let _src;

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
