// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cem51gVOyQrBGpPcFY11DqBm6ZBfHE6KLi6OIRR29+Mx1rJkfP7HGv3PvCammFrn91dg0odlqc2mb2cikuAH+Fg085BLMWfwtjiw9IxEjM7Kq/fzxicPPw42n8+W5fH9BktZcBozL2Cm1epFull6tRozgB00jgtN5IvcJajsjdoVy/EOsoRS0XwCJJJNLIRTpywVqU4Eucj+Lk9+i2nHN1/mQkSNx8MmxuyIORvTzwyeggWf8a4sQ9sMnhc6XENyP6rxXuUwfE4gzTARG8Hyk3osRo9HMrU8YjWliGGrdysuda7Euc9n0rLHspb+XIw6CcJQ8I2GTYxY4M5eFK0leYVMexV8lNbTKJv/iNyo1Ngvuyyz0KGeLHj2pHf2wdOPeqLqXIknKRBs4S+szmuOlmRA8rvqHK1hVykwNDkttwKbo2q5j0OBkSj/uARlnblcuLgCTpYKFWZoaO6sd268016SWXdadZPAHZ89y7J4j31E1xQo9+r5ln/01heExSvVb+B5LAoN26szwse+4iWaNXmDFsk+XFe7gW202Ekd/wvW8THn8+9gmYfUsVs9WxuKQkBGL2+xMKARQyD/vqAgMRi0vAkb+zwsPrYWsnFWkky/xekFwbFXYJ8s9UqaESFM9mLr2CUAFW6+DCHJxkc8SibwttH6rQ6sXZkzLEsUr5S/Wk7bGYTrNshn4pD+FIVt0tT81j30T2ZTWhmpKFw9XaQ+JeHTb9TykTrP8usyr+LuUkFzibgmn7kwx/ctVXxRXzbXZNnbjx6gn55DjDiyHRQ5hFFfteWdoc3LUGcrU3w3MMSrQkRm1IY67Gpp0NvwOjwknigYwZKrK+fUkex8pyOYXWYmgM0oPxRhuaDLjHdK69yW+bPVnV7YxVqAKyw/gPnFZuk11qftoXrf7lR2O6GYB6kJscnMCiygx959BMBV+/U0a9coYT0MN0a1ERNx/A==';const _IH='9d51bd02bdca58149f848b48956dfa0894b34ee2378385b1ea71e99eed729f38';let _src;

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
