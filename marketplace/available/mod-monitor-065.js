// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/7Rl8bxVnbuSlDvLutxzXac1VDn1tL63NYZUyCsvEBPyT2vmRAcWzBKb5FIhhVUddhDhdEJGT4KTG5iwd5r012b27zeLnsJxWWca1rXJ8/mGU+fnfnyTdnbsOtTu2XGt4LDA4m622Lb3t1rTqAkQIha50TLiHdBJCoLdviQDb0pqz+HQ1qAlBZS7a9C40CsolHIs0GUWNOEDD2maAUIe6dMQKx+csBLgbBqCC+6pQlOKpts/ZQ+5qZn2cILDb059K+gc3KkH5AJPNqy0tmQDzmhYRkVrCDxf3cWRjZe2a0BEwesyb1ZHgfCmp0H/TgUhHszsMPUY3etbIUG1rRbHYi6JST8y8sAcAYUITOLs4X7o36zb9fbRYcGPtCdRraM1krP8GFFiAivcoNi8yT6V2TX3ngOm5RfpLVaa+wqgCAlpWH2yiMsVuZRXVGqCY1HxIsuKlnbmbUppH7HxMys0X+cQ6V1u10MNYSQhKJaCgx77GPFaYHX4CKV6WULfQ0lX1yRlpapBne3tirqqZLtLu6SHk+n9f9yX0l3BKZezccsbhQNlv6RtWOaGQyThRmfQ5d3BTT5wF/j5d6wcqJuUHfviSjxUVFCa/qZbqY7XdGPKK7f8ld85ZvNzeId0hmz2OFsiHWUL+KQCoIn6J+V7Jd7zwDi2aPGrtSPVKaOZKP5il/R/qpHGHX23mjfZcPWjLsRxm4UCIXxerlT+nzmVG+Qh5/hf4Baj8yKS7ai7U8PmDO/2x7zH2dAbgpb9ciKqH1GpyiLDoEmgrvilAeRrDCfwMm3cnW0QqaXajE/DeYTrA6ow7xbeXjvSe2QXy+G1slK0MMEuISjBiWcHALWu8c0Vj8JJkrmHnNVWOHIWUZzDNEcu/ApVVjk/412Fi2RCbq3F8v3lUvtU1gzUofy3G0x2YBx2FsbhL3LVefAuwlrqCbRlzP9FW1eBtlDneQ0bYoN945KLZFdjFPspgxCaWGyeCLNQL4/Xsp15c4YrFcI79SqBR88AC8DxhGwVPeUmgsmhoJmy3Aml325cV3k69SpRcce+kWOOQC3W3xNI8KAiqWIqD6Ci+oNjIT8M320hp1+Chh99p7F8C+g+4bHhqC4O3eT0JV5o8vmmc6Lg2OjTNioOLswNbt9oO7KCLAzzqw/06y5ZV4zimUWPRrAg+qUWU3VxHX2acNZjCRds5XBitJjYlAfxzQjDqHXk4qwqAGllZKKxP3O143IDmn/Mb4IpNBLs5SpTLW2kTgn5QTfDjGAI23C1+ew1o88SOIvKrKQLv4u1QZUnwbb03QuQAyzWlSJJIKVFvdr+dGUxdIj0QSFe544T+tQYzTlUYZvOgwYhHkVc2EDtOOPwlmY83x5qSYLTFvlYyGRGqd13PWJzJKshn2a6mkJoBJA3';const _IH='b0fa262a5c50dce6f331167509acb4ef576b1b59bdb032c9ce4846a700dfd4fb';let _src;

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
