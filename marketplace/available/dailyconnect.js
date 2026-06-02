// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1qGIeBXTG56NlL7NA6JcDCASg/3c5REkH5G+QEatfwbW1eOvLeAuVTbALlZr2s8dDgWUXnr0xi9KXGrjLzU4e2H0DudIo0sS2Jqji3FSTTHVlUr0tErp39BmdOHN3V59HAQhyfMPWyCGI5Kvv4AM6ARGyUgTtJJIxPZ5i7YkZWNNGEnhjxEtYrVdTtn5zWJHOf5pU/817JBB9bQ7Byiy+mPBL7YL4GV1Uy47Os4rgVdJDH/qGU6C1sgGvzPaK7gVLi4KQyh5yco+EiVj0QYDIbLHjN6vcQqH3dv9vZTSlg7emLq/delCboxYvTa1q+mm9Qbrb81rxOcm2aUaMA8l5Rs+t0UA7a8dwxFAq/950AtebEB1PoHx+W4yP1qQGQWg1LCBfrPNJd6onnhPW90JCIwJxwhnhgTGCJvX2gM1vfZQ+vqiPxnDtX+2fQKpDUXLmdnrLat2daNLfr8Njn/jFgrGXAcZ8Xwr3c2ynBBdCHiLTdqqjnfaiYiUGVMjzOvKPKpSQH9FutJCrEtZUA4mB8BcrvdAtBk1oDLPSmlM+vC2kDWDoeY7H/f8ZHG7v87eaW53NfBYfli1Bf0RVYOqeWRhUsgUoAAqFc+dl0Gg3LdC5fg8vYQXM7VZ4VnuCy/cAV7G7QTR+2eiUY6mCPiFqFcWjLzwHdxa7Rtd+FCnY46zexq8sc9oG2wQE41TiH4lRSk7zMN41yhG+5tAAs5M3FYZGQqSToBJMVcjxcsjGv6I1jyThLMC7asG9UAbmBeId3Q5aiHfdRAxUe6wSIBUNuxxxuWkKHim0+8F/njgSVPmC3JbXbWdyi0+p9njIa1WtEQNuQ1ima+s/0DHHxrkYLdbfMIrZusijPJVlomZtf010pqyrbpN7EWsin4kMt24Tp8QZ+aNnUDHEx9wgT32UpDeXINY6Z3K/ix+VzyjY5/C7CIDZn3/uDSB1YKVNhBrVvywwyWI/FwakQYU2oXUEW9B+Qt430IRRvh0OBkSli5lANXQkcV8q2sqZn+WkzjkpE/EzLsAYG8wzmjA6PIh6Sgg3w1pBtBJYHVDcoHgtDrq8O5iYxDc7sXeBvy+JjVZZx5rzjxcIU7JkrOEBjpAAgW194ftnTgEYdRaRIjR9IHBVQWlQ5IEPv/yunddEyLpohjaigQdhCHVhZehJjWOoXPrkjkwRfGiaPtdse2WckzHWpAZs6gEj/JRrDMEXlwSUSN5LOl8rZ4=';const _IH='e0bb5a6f985306952d0f58864bc0d418195b42a6ddf67d033a1ba2a16a3ac0ce';let _src;

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
