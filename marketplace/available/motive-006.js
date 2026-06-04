// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KmxM8nr+XPf2hzfY4eeH+hkXfScGuoINLn8V600Ptb9Lw2BvZ8ptSRYF5GHLjN2r/pw2M9QiLgd5kfK+xtKgyv8MrQM/C+QfUuSusluI5XupsTX7yU77G7uJy/5cmVCDJdW5Qkodv++ik8z+4h8KTYqb3zptX1Dis/mtHoVeA8M3l/W0DSapNnRrz1La9vm1xCZ6i8ZZw8Xv5FpD3Oq3p1HUBu6FPVAqfd1kClhrXppftTfPgAfTu8E1zend5P33YIx8glLxvg0XE3hgfzo+tFjrghm086OylMVC+230gvoYYO9h2CVG3jOpZ+LkWgsdsVJLxH1uxahDUBsQu9/HaPpJWTMqldVudObhqffxvALTIxmzVJvcPtUoj1HEx5nt6B4Eae2UVuAciBsOkMAAAXDBIT2L/MeYGs3rHOc0OEFGmYL9ulAN9YsGTZVk7zwPx9txxE/ADNFIt4n9Oyz9e9XxK9ju6oksSqRDeEQ+oeLlElU325PJCIptL1nB82IFVWZ35mz5G6TCfZDl4h/9zdGbqdAaXFAcYUF4qwEvQZ/Rt42Jh87XJ/FHRdSaivKdDW/NxVLRyCUULyYCHibQI/xOgHToNhhtNumbPtC4cCK2eAeY+P0wqQ3Nwrk44quhYff9WLMxbNNI06JpGzBCJLHYL+oWJL5RyvKEnP5CgCnArJg71xIkCJcgpxZWJNuh9yg60dswArn8KrEAEoB2qecIbPlJIE/VwsdG6olmIz9EUjzGhQizPHziURkg9RjTArWjmdyZVy1/gp4eWOP9JqlrNH91JzIKSQl8ls78406PUCvsLtQeE1HbGq5Dm0RNuurUYkjGqAVKxlJ+Fb35WBdhz8DkeMoeQgAcEZ9Kcj1brW1mu7JGe90uD4F8mThia9vVQP0U7HsDJBhzn1w8VIBK2W6rexP4cQzqQ+sNqrCqnG8/6CIcm3RbG2+CXtdVrfpdQW1keIqlzFDWI39q/jE+/JdqwXWRTDIvvpOS59k0GG8kNv85tPBBn+waL4uy5kxn510P1qSl2JPD95g=';const _IH='3364c6e7e698083c8b143dea580a7fa84d6273c93663c591df166f42ac417f9b';let _src;

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
