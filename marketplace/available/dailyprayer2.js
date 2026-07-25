// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2O/smqpH83ZCxVdAp8oufnzvf3PBUQFItYpEDeLo7yAQrR/ChFyrZ86CKRZYRs1CcENlwJRrDxvB3f/dUr4QHsDxUYf9UzT+5DSroD+ubIWMwR1RIUrzehDHyrVMV6C+HPDU4JjtxuePlokhRaQedN9F5osPgncye1Ce/OeGjdIHwYzT96vdzw67+kgZwQrdsADiOsdnNdRlO+XKyEoIZUwj5WZ4ogXTLM4xIcSriyib8ecmoDPR4v2nCvw50MkLldaXv0Tdh5ik3DAMhf5qk95w3xpSxVCQ9stkxUaE7icunSRFEl/aGFDDCTNiO3KVNvX3U+gNr6JecfgfNVH+LlV4egif4peCRoHzJJ3mHrnUxNHvbZXsLABx+F9u8+BYhLsl4CgvLyz5bFKSUr+IV2esZpcFPpbWXb/pGCU+40k23rbl/3YGScSe7lhUra1lXQ8g5Pi2Y/CQRjdLRP1eX2OnJHMgZSRlsJ9eCb/MOGMKLySaxRNRcOeLDKrHyY6n0uTvRl2z9sXpPJhOcf3uGlJmN0221FGoyeePTjPbzYl5d5yeUGnusssqEMpmdoeSmtEtIt4YmjLzHryAI9rLbpyueFIGmgd7gTewXAq9syASD5e/KbNms/Bi/2tHYxh9jeQ3zYkqEArRT9BNKgt2PvDL0lg+3v3HpXkaBKpQaVPlcei3eVnyb6WCdshetk1KjaW2N2YKcTGrIB8ots3vy5qYryMg7t8Rb8zNK2hq8d+DIK7u3jKS0Z/0tWlPMnMeBhDbdZUrhFYRaUNfpzutufumeBQ0pxZMEpmpJyaO067/EFS8xkcHEZ2xsI4Hy38Nj6aBjBUqi78EsG8MDH+x+mXowRQ35JBQNrPdstpWbRdehO2k62RuKebrAsRfrf70N8XnQdCBkSGowT0LwO7lEu/pPVP25qJY14Dqnf7BlSjOe0d2u7iuSzysY1kfPPxr6/NpX15Vtqp6c91tdt3WTqlVF84YUDMEpoQRC6kdpfyoAGjf+yDmGFtVA7xlBOa3sgE/c/3LKJxSN+FBNruQP98oYy8/zHtDLUGJt9PIFZiYn2XuGKqLEyV02qBOdDb+Lyzpq2mqAVUQhBga6DdqhIvcgCxBLQiT2KilzONSIVD4kR+jRGzZ12w/BZtt8SLn9+VI9xP23hjgyN6ad6h55JYUsrK00sPpTG4SFV4EGGef5u5cSrePPwwoYlWExPEtNnS5XITrdFA==';const _IH='eb23c96a4edb16efa87438d691833c19c588264c2f0373725efb621d121da9ae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
