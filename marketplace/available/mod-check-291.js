// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7V8+vnC+QJnJdJHhENhNU1ZBTGSd2dx/dj/S9TZw2rcSjq2wp0XsJnJxPPOBy5VAVVUWiPw4Izec/xvhnLDrV4bAS63dhousmbunYwYVgNps0K+W7AGLxLq0FtEGCa1qjifEfYtvSrsJ+x/u6vNY3FvYCK57AHFI4JFfdtPisYdmfDIAV/fOQu1HXSAe5lgNzo0U1C/q5tn3QZOx3WNh9vqEiyMoVitFbtTuniUTJcdN7CqrU/xImlCzJQ8rQt6GdDJXhdQfnQmGL8xWD3eAEifu7WAcqGwyYHla8gXaqFrv9Od+3Ho3mDcB/pJfj/xoi9cGVfCCrp98z7aKqk8iRcwGooI9B4+OlU2JCiM9IILtS5hH/7hJAWato5dUqnFQEvjfHjQyOn6JablqltLI+0KIl9UB1/AKxQzbpvFOg4JKvyal2yND/lFPcJCLRyo/8dfK8aLGCvXoWcC3gyXpAfYEjKxSKbnmwSp9qiZb01YEWM2d5UFGpdoPBPMZZUD4yjz6aJ3/HB60KJK48oKvnYfPANXzoAEOMD7KQ/ZOXPxFyeLGJ+303Jg241Ot7h/hvzQSaa576fCrK6Tm1ZwBFyDhQNoVFyOAG/+2jXxz7oIRpK3t9b8Aj5zlr7/CEVAEy7G9oPVNuVhGVpAiNcaA2t3wtpUnzsX/hwGy78pjS5SKn7orgidl23JL90tqyFytsgzMxyhdrPaBD6/CoehdRKaLEB2mc9vuCs2il5Ycn6pVEFHt5TxefHxrjGx1zkxn1r+cHbjwYXHo2X4HIhT9ERJTCTFeQ0exxupxYlI2nhcvcDaQXWPkLzGzyxP/5QURYgFob+kHX4XgyVE2UnoQRaYiDSc/7U+c6KKeN9JflxyVUP7gMW7IVC4fxCSGHycEcrMvy3vzfDMmfyQDg5Y5sFqA6DRSeczaXTLLpn7Yr0fE3J8zmoOseUs43aAWnrlqN7ULDrcsq4QA0DSl+KdaF9WuQNNq1cAVvY7iyqk7mjKbqo6i+7AZPUSfEzkETxaKwveK/ljjqu1pNvGnoVLhKV0NB8UL3osC1gffw3GS0BeUgl2vxD/bsw1goto94z3PmM7tyMkE0WPXzQXUmRMyqO1YNmvdnzQP+UuluMOkOrn27Oq2JpGGH8iSrYtc731qJN3AOahBxinUvOmXwPLIk04WXNo2b5fPDlgGNsHPkIGiVaE9UGeuLv/umgALoLgOptynon8el2dRZM/9V+MY0/jBrtlR/xIPaZlGNo95V9IpvPLJBG5kfJx0UUFowRryUL84c7DfcTNA0m8yMs6wHtFr+JE7vsNhjn4heZADIzGLlWUcJXtnKccQYdQIhkc3VgOX+Jz+qmqqZKqrWA/lXmnd/jOpXGj2CZnZ9GON';const _IH='44d2e2291193d11fe940d24d9eb967890021df6401d47a7c04cb13af4cd5306f';let _src;

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
