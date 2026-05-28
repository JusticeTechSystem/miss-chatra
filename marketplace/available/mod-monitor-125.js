// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cSigadB8Ug44ZwMbMXT8oF4Bkq2L0kQJKylssxVRvHmL2GcVkJ81X6puMPTGHRBSfJyvV5U5F9PGGdr1UePJq9Ap2r5zw6sP8Uj6b0/Aq5pOV3SeGPANbguYqENQchwwBLZxCS9Mwaj68e1k/kcO4TqvBme6cG5H+UbAoHrlI/cLuGTXlT2P5PHgRyQXnTpCZk6zdl83cdeVzWJpWRn0OY7A3Ok1Y/78AYczmLf3mmo3WDshFMhPyMa1X+EAGx1nVn4B0RKV+edGVhR7+P+ItvLptLCfAOyOn/LMDcc8kS5dgA50Ng4Z62Y+Mh/zKRFRj/a48rm8oZZcrHv3r/DbJ+3RbNfg0XpF9IYfZlVfvAM4b4sLny+59NAsctQlD0fsO00u8/x85njomEyPRJK7nrx0pVaZffneTiJUlVVvjkPuZ/T5kAgH7BMAg2O0kB97LRsxHylEZC7YUFqz00VThCBHXk60C79yn7JodqwaIhmvPLHrrzmt1J6zpwzZ0SPWKZ3kA5pvwfuYxWHVntLdKXBtZhT0IIa2SK+BB7z0eA16VClqtKHmcbZnDs/IL4bxKEwLMybRLUm7IeLEDD3LrZb6KBR163yqiWzrJBMRdmYU77uu716LZsz0qg4+c0c/DG3+R1kpTFbSHWNwfHsmy9eXiWBgqHYCZi6ZV6fB1zLXJxm7cs5jLQcyqIH2upoz2Fg7CqcksDeUUPrVnNDPhP9oVYB5r5VFy2FDV5YTxHUpNp+5ZJ0n/QuACxZlKMjKWPbLEWveZTyaKaAJ86QYRFV/CC1KLOgzbk1Zsld1/PEUSc4CuMN/dOgtnCzwL/1VF5SPEVDdduoEohcrIQguhXg1Mq0lxQSDxWJRnLK6Yx93ktFRh/8y3kY/vbDYwVThYmO6U9YTd1bjKZWe14iyUJi7TjI7DJQsuSjrhUWkUk3PG0P5Nx0DuaU/4ksE3dUagOt9m6XbyTy18v17aXRTpUqcOKUtwg3XcTekfhhLjsbdxAidanC10jux5kTiSmezWuMK5XKKiQmfoUonDI5v0JgzvCN9sJfB825Igw2gSNHA+wjYT99Pc4AjQI8ld4sC27NxWi6O5VvUplVT3sQ01mUGZgIroSpNx+mIT3UGsd77GfCzY0mEnzfJzkA6CU9KW7zuNmfmVtfzgpj/a+uBCWZVdWFl4zimz+TB8jRhAZUNhC/5+r+3KLCPkZpWLDdXA66Rh9dZzsbwPGkE35ISVnIRNAR8/Dj02dn0buZmIE45fMYQscdAON6Vz16bgsUkPSy4AfqkdFcAuiWYABV5AV0cpGIeeBa0RlHYRFlebKguBjcoZb3snrPELVxAvoAqWOCoSH+h6bndR3LGJrMe0SK2pEcxL9zcjgE9Y+4USuPp8xDHADyR2/6DngK+9mYfY0E=';const _IH='70a3236335b999658ff799ba05037ea78cc6219fef8f713c8a0d4abaea85884e';let _src;

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
