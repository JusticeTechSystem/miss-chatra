// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cDLfX1iHXfvVOCk9lxGgUoJeNJLBmE6q6+c3U2ixQl5AwBVW2UHab0bADy1KuE1Ju3/Vp0Bk4BiIeIlhK+apTMe+eewmIipk/l2eKVz5DxNNsR27yum+S6KRRSxKlgPzTz6DNSV2fxiYfTC7fSJ+WUVllIaoqPRFSkUz9ZYX5nR+mpBshe8svAdXuJZ3k62sWiVogLprB8X+QNZ1q3piOUTiaH2vkyhym86d78QCmdz0QkzLXRN9tlfr4sey3VFwvASrQjbNtzvImgWNcWildpoRDm/bkNvtYlczFYsmZ2wULEf3VRHTH9+vWPzJQGqhq1yJoYCfURw24M7Dr7t/QvTJnoOUwKNlRLAWTKitvKppeILwe2cJn/QOPEVAQtWGINhgx6lwX9bQdFaGYgvqpMQUSO+4raPcOEtesT3VpdqZ5HiVT+pMPqNmEPlZ2JnLL72o4kJ/Nc0fEruSTzhzwAgl1FLDfvtmphbnNFWBsa+fMCdZb8M9DXMCbiNaU8EbcxtzcdZtnupLYC5AxCpCDNtup1eNFRGTaxcJcgAJ1Er35gYrKV9ZRDlCmcsSAutEhdsKxHzXSdNW4YD+NROZVYx/dDbDwl1C91ibpSDLyNw2gPmtRo6nEO+wUmJQ7GFA+qiIK2cqxV/6mllFbXtIOUoXsHHiB2BwhZ2iPm1gtnpfX2N1LTpuVBT+h8HijGG7IYM8bucWAiPZW9rBF+w4AjYV15TcWqWsEZTbZwWp25JMnLrPPo/8+VfkSI5rcp9qQNjxyXU0b4+tDGb6bunVdQTTZFLjLBOAvjDZo7rTqmFljQqpCW0c0i9RWJtGeG1D+94gX8z8mSZxHmfBF19kYfzIjoZlpr9x79RBxjuyQcHOkCOrag0jxSVqYrKMaqSrB4uHJOsu2KpCpdg/2gz5ecQ86bBV3dJGuLviZjHQpPIMD6XZfx8Iw93kOSGKoeMid7d0/2DDhxyl3A/zT+xJ4FGn1WIOhv+VFJ1k5tY1UWmA76Uvx6+cszl/QOMdUhd6GkaNEqwmD34NxNoYp9ihu82xvdNFHgap7OExD9ayG+AtqeKE/KDDv9e7tm2CNxja+pM4Oyi/dx3y5cjdvi4YahmuMOE6bwNgQoqCk0HJkhbkiYa+19lKC0MJEX07MA5SFdZ5FWnypvpYCJU4SAhCzhZEo9JQaJEN+KQysLiGAws2nI0uxOlqgwxVWPaM8XJD+0HFuacRRn75dR42C6e04kG5UpVH0Kd+0JZymqxngyhkvw4lKHHmiTb3OIOdfo1gcTXLOnXmgLlW/jASyHo9TIJBBA9JC82Q/6lLTGLgRzrREwvmNHvvcWa0OFWQOb0kq3ISE5trbzi+grYFeStntZGLiIZhPd5vYQ==';const _IH='b5a58fb88faa28d50e7e9225b9c659b00a660ca78331befecbab262023cd63a7';let _src;

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
