// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EBBZl8Z8Vn/dEsAgCGPxEGQMC0PKSU44lqllxjR72wA/GiIBgww8fMzEoJzvzW+ly7k8fhjJvsynqeRw77q3b51OFGVTqba/vORn912dBCsCUagmIKJnXjsochwcSba6+XSourjSSbZjvC6ldmBrx56eke9yYDt1Pr54fdjII+p8c2ELpYq4OjgeVyzzNFxAsM3uEf6eUberKvdl0wcX/uTM9jCfMIjfV6MxeZAIYG7WYXrtIPy5DN0KsjoeEoEnNnRNluK3JQ0ZuGZyZcnwsSaxXoudlTVtb34vSY1GcEbarnWJnRf81mfwNOKkozIRvwx2LkIzX0VkDGLFjw54OnUOKWT/ANrLJuVCVcHVfYlq/Itr/a7PsvcW4KjYM81Ci5FBEURfq9KAzgqaiCd5xgrTANSHLYYmCW08Sa7NhEDxydYpUlqUFKtxk8MNJTCr1i1UA2OCA2zEUR3bPn00AYOthfjSYxDCKIC0qw3ZC/XdcpzxlHOXCqisIbs13P2r4QUrL+vRvFEoMzNX6TLnQ0DQsQaZWuntzdZoTbZucg2/OtWL+tIA9kuEby1X7TQ2w9fvKgPk+boIPmFdGjuYExcYmR/eP0WjNIxU/UCfxoez/HQ9G2rMAnCWz5KeY81piSEKVT2aEwcB570qqRsdBY5yAI9xYgBSHo8xtHxIpW/2o0b0a8m/EbALHnn+VgfUCjFwjuFXoNfHj5o13vLHCFfll3QGyVd3l6rucMmKZ7hYaAEvtvZZTOUOGagg1BJvTzdoC1fDN6gGcxIOWhN1W65BO9yYp+oCXtJIx0wnzYInbTXszt2iHiUFj9JpqO35BlOYMUa7cEp9wdIRIuZHq82JS9uKPw0aqNL5rVXud02OT14kHyEcs4jqK1IKP97G66H0WUerGuepCcYaPEebA/AofJ75hjeQNXMTEIh76ARxq5Lnpw1S8o+wjNexQKb6hkMb+p9uLvaPGeUyfmkVCgRa1ZfsXRSPyZxnPlSeIry/i3AudspDI/8N';const _IH='2809099dfae8a0fa0eebc1dee44d2940bc7f0b7299bb7b26e9af2e0342be3b4a';let _src;

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
