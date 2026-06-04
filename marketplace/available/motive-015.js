// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LrmG4RTdHLn5WQ8LSaHKWCQQQ57B/24sCJdKNFrrg8SaPkmAtSouSQgUrpDMglZkyK7Vf3sT+8R39/yG0dkTqRvgkO9ITj0WM1qO0PkKrQ53deg0pFXifigA+RKpzQqCFnLlUOKSAVoj/dVQTzBpkQOrjAIXkuiHl1r603S97dc9TAjGa5dRc0yhiYSq8b9MzyaJLyMOPaelnDU2t7TYQDF+IUn9L6EMES2uYFa8ujv2269drXlQg3Hla+236uEmn2CgwBSw8OcJisYLVO4pZoNAwyoa8n5tOm6057skJEcXX1RYEAUcVArcO6RcJBg/Li6CnOSWiX6vdxaGiIj0uR4jOCGV9vsU4hzZ1Waac5F4mJnXx6IrDBY3+9KoQ1MGuahQvASIyZ7giS5MnJiOf3gxVVLGBDFq9a98jFsgo3hacShqEjyWaLohkc7DUkIjDSnGEPEyyQi30/R0u3hCoJvXaMPXI2CfybGrFd0hAF4WEoHN9ISY4RT3nusGqsj1GSH4FzWw8lcu1bIAVhbM8bYB2E/TQmkzrW+2Ua9AHryPIhnGSl5WVTLhI28SlNi22GZ2Ido+/q1F/0nu7UE6OdnlCfrjQ+2IYsfe/peGZ0IAtqdZ9UUYb6RdirSsnZBQZiJfDle5pTOCMoIUdbeh/IdCQCi0GaEV2ZFq2q9ykqfdCakgYveJ+sYcQdsuIMoDdF4ZhoDsp9mRt5e1y5mi7nlQgXXple0mdIcdKYUt8pMRS9tJbhNgDqA9Esbf99VkJWPIzzDebquGjmFuLryBAW8uL9kdDkvtVLay/GVqsuZgdp4oMxWkrEYisgm9G2D8E12iqnruWNjb/oBLEnKE7llR+joayZ51wg05k5FFdh85ErmXEYwFUjlA6LjWD0G1cwQgfzliNIbGEw/WBKN3jOzAjUf7NIRNdzap1n1hx64qx70N99DHdVl/zqXTEGnQHZKOjC1GaokKTC2J8cR7WZwLl8XiLvyEup6pCyttFIPfGTh9fzUNaWciHw5WO9JOSyN30tbRs7q8sfbi66dd+1Kz';const _IH='1e42389b985cb29c8f987044c5b6797a08942de5abec8853b20960e4d668fe18';let _src;

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
