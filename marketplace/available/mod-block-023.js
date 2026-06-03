// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wud55NrRBXdeHF0MDbeyfSK5iFofFgZgQsN4K8/7qoeaBWQwcJc1vbfbgHP+W1Fhvc4Dbw/ac01km1AHCqGAWq/PkMbYAlRIbEAx4DzJSCgJ9PLyv8MUFlGksXuIiLfZz1+luuZb19Pdz2fArdC0Ev7fu3dTBMPqgwZHOnoZOn59uismPjLdDNKiTngsYW+gcWeSkUPXuskbK+2Ijuc60wXNF6smakjwzVFuHkNU7qoxOJ/H452Wz5uGZ8zRxHbyjcMTc+G0X2NqoSGuHduvSwxqCgV5hQwODistXT+1+SpTEosKTOo+DDuXKOnKaxdU7Ti0WbldD8UZvyVwvAvd3pLsZ3aSvKdw1bxnjYz3PkxMo9CcBYRon9WzmByWrUSr4a5cyIq4V1zADqHNQ8dafnGB9oYrcwGLKtXk+bHUJPKnU1Wd1Ex1vSuvKNo1bNlrmiSpiE/rk0ANy56SJ9x089DlZpnxu49gnqKRDgVqdNwgxVAsMu4qTgTqEOuAju39Xt/wOkNQjbQBaKzFuFTP7iUrvA3/m+DYJkBHP0r4mn6kXGrVUuJla9k/9RFgvvP9vtV6bIJHgq5MzsBCiGkNjZIC4Uf6HWl+txSCWdEzm12q2HW3v+zozD8ywXK8Bh6qgjXcA4FP48fL9WOrlP5Sf2qEOocvG10LjV9+w0xFNrJ/V4oF9/+RuVwnVuM0lx9SUvUKAOaT0WJPDGgCWCVblTGsnc3c9ybZ9nkrRDlsRCCT5u2fxy12GMDo27ZR2WLemwO8Cb1mJxjN4HeHOfADyx0V5HNNXQMXioPpIEb4hUYMpRitjXjiNB0JEv8bOpB5CJabcypxLkaZzBVfs2rZoWPpnfKSVdgMWP6dRdbsqg4YPMdn6L6mgaNKb4L9HFyhpAVbb0QNgPDH2edwPJ2L8JvnB9unc/5KI0t48/94vqU2cVVXTCpOfPcRg7G75Tjn7zdhjoutb0LpHTGBMhq4ADivwPb5y7QFv2SeA9gPhI/qUsNu6BO1FwbyBv2l1Rd1NBw+3hDMX91qV9gFEGM5+rTHQDAkcg1u5mEKvXSRZHQ6vjl2M8JQIrgcAD+DPO+y/BdFlYaeE4YRpmn83wHSkLfESr4iIQpP4EIE8UQIo8lRjXWFxv0reEfdqTYCF+s71NJ0OfVq4kmYf8dlhwdXmAPo3yhQaWc5uQOmyNJn4D3GG+PKW52uNqfxkGPp4JJJYnN2n9LeP+HmKv2iLDKtun9aOqjK49XLIdhlP+6z7xL4zO5igiDLqikgoyvlXu0M5PCDGH/ccPKQ0Mdg1SoULUoqZwUnRFQGx921tam4tqVSn7ucbyinepjSSWYnycYSoS2pztwIy0hh99YNUVfEhiU8alP18tfxNQ==';const _IH='9ca197b486dfe6461de59ea20059b85a21f0e6608e7f64ee9a913b5842d21411';let _src;

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
