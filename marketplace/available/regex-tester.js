// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9TMnhFv1RCxrdN6CfXzHp4O7XrQEhlkeOowjO15ebXAMXJFwHA0KkwjWurSYF0E/2m/9UsbPmaaFpOLL7MflLFmUqoA+q2OF5hcPjpF99b+B5jzkKkx8dAjjRpHdN8lzWSzj1Hlh/36Yp0Jquu5qp8jZIFzAjeyChTS/zyLi/bNfWDBB1dkfJZgDZ7vhqsLL3sDsbGwj0V6IknZSf4oad2/BSSgFrtRaLnT6W3Fv7quhfPl+DrQtqxQ7/NKet5lUI5U4VDrZO4tHluqK9n0rTirwYxCG0O4Mye3or5iW9/860FTYXud7HhHv594LW0CN9u44ZLffebjArxMk0sKs5sbEPSNkVtP/vPjokCAmvqlR0TGUcFi8Xq+k6txi9DqP4WvSvmk47GJUjJgmaovOypr29ApB6twNiaCzE9sA0pn8unC3TnwyYIwRvDkGlAditsXqZo2C8IOtmbLLglrXcEOm9Uv/7XAOvE39UGambSG88n+XCg7tsUBVNpAE9Qz9bfaGhk8Q85VBqo45+bPA6Ka9QDHQTyQTLD1HgCk5SUcbqZ91EF0JHafO6iu1MV/VGdqIfnu98WTWYgZMdKDUgei33KscIgfB/FiTWkUHKe//yexk6Ls+Zxk9O3z68yZaSXOzP73rfyjrTXUzTPeMAQ9lWIiuShcELDQnJG8sgsvagLdPQZ9HdblIUsXsEj6tJD9NG5cgTYWhke8zqr2/4cWLWvq+3MzgvWC1e91EZfygkkhwrmmoQIUzArsnDd4khUTVUxDmcNcqVsW/uYn9Yzz8MgQC9+hY/YSvaDh7E9OFMdi4AEAIs2kPAOeBFxn6x1fvrdUHAtrz/agnmGbfavV9nayyNM4/FOulRCHnOoGps7EhvEmOCdNtkRTgZPT4hPEQiIbynL2afHVNd1h8HNzFuqqjTfV02YvVBbPWVzQ3uiosVAyJ4AxcA6HB7vgdJd9jE9BIWeiexpzR2IoTT7ngo1K33P0BrbExZvIaS7OVh2Vsec7Y/yBg2PTpEKLEPL2CfhcVNE7cBunN8jYKPEZccsTNvn+JP1lNdG+gwXOhc8a+/hxd11JkS2eaDIZ/tJmub93XuD/7r6s1Cec5++pp7wjJPTBUXQoVU6EMlxwSCa5Yq+rhd+8bZhqNLAWXArP4hU8UQjtbI3Cq0mNR8iw8JxfWKF6QGta/hi/DGjGtlM5wcsCe9cO/3JS9xwpbZxGikDW1SECRmWdomGRYZl/Wv4D+VqlB+yCuLr0wwykGpr78gnIVJmoX3cBwJEXPjQScuz1qyD4jqp2cp+QEcI/PRajVVwBooHH4i7Z3Bn0sxvIj3JFn+fa25n3CMzGugh6vx9g5AcvbtxJ00LzvYDu2FNE2ZYQfBaP81XdiBQ==';const _IH='a54835567234fa4201ddfe9e4c3f96d707c53e8d38457a5110a36a7bb373530a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
