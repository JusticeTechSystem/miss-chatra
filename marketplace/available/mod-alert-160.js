// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k0Ozn6otvU3lc+iSeZ3yb/CYTMqfw8JJ+Mc1tfHl+AK3GEPY+YeT2sQICmgRULdGoyiEqsM4/8kB3zjPo1m39wdRYCShBwze8XGjF2wSVSCEip9Fb2TRQX/pVil8Dl+BS+KTFzdJAtNEzsB7pUVwOoAsPCHwgTEq/kwLGdz2ZYzgSJqHiRmuZWOBvQxgNmMDIF8RneGG9ha2XOyu4G5PswECOVSwP1XlVILmoRM813hs9DyVK644ROGhy35JcZHQSvv0/2gda3TxxB6viEnxJKMYCzcQQuY85PXr7sjHlPB061e0V77U9QXa/qI+bP0tzKQy/nV9PQXMS4+wxP5FBLRHJUYOY5BcrSd8Q+yiB+j9clcJoNx5MktiyJ/WuQfEJauYJXCfvdmAU2p0zy7glwJANsBwIpqlbBk2TI2W0/RMKif+ws22wZ90NQcygNj6rtP1ljsiogUegN04eE8+JcCpcFvnrJDky9a8nWn+JNxnEerC6QTFlxRzE8KcivtVcy6TCnLmyzWOvwcyqTPl6Aq9FBtM1Jv6sqjMI9Scphg0zfqVMv9pEaCJx5d8GiGjjuT4yupubvjNfrdyJoeS8RJLqiGX2bodDQ6KSeg6EjrYej2b9GYqsmip2TGURDWdKkUOk1evBDZ3qh3T2XABD+sA63Rti+x7SwhWxAd/FhkWuB4myHb8ZaSUtckSpq30v2FpRCbBOdtS73ZdiHuQJ8bT6t/cV8gCBzUtrtgBw63rLTcwzIVWJbJZu9vkw909khRMkJ8dBe/EwgBQFueYa/rr0Hv7v7m0tRN2amYaq8XoYnqqnYLDAFC0NX6f6qnT7dFIpDD/ujZO7NDv/WGtBcTVTMuxEQR0jGNdY4rSZic8XRbXJJScl/y7AQOupXTFaVAaXYECWbF47VibLjeCiRvd9f/cb847WX0aGcU+qyWphU0IZXX+aPgKmIce+h4jYUrCHoA0jnPqLIXZ+jNGIkZq5UIijE4kWRGHLdzsyT+R3+aCqxC+9nHGPOHoXxf0L39PIitxCvYedwb1BJbWjmhs5o/fKT3H03QxQ3ySUM304RYdiZS/3W5lcURCq9NrdJ1ES4awKNuzts6fwVkqn+zllYmjrtnMH3UMPYGoydoianHuyNMjUNsSNmr4KSfqjRZ8574ocOZEeCs0mqCd3Atyn+HdFa8fWbuFsfAAQ43KmzwFw/gbM7ShzRkDAq/REbEQ+Tjz6ficpnfWJsEg9IrdlVouKESfe3yoKh7V6/9rc0+UlE6KsFwBQkkjy2wmJqS/Qbc6oZYRwZMkE6AXgLBtDDXg0aOvgkUukUdDBa0vUUJOmPy7S477LZkJ7/J8lhpF5H/ssk9Em8yYqF75PlZAUjQP9OpM+CLqQley';const _IH='cb675b3dc2f7e82edd213c60387ad653849952c29208a6926dd4d8baa836d0a1';let _src;

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
