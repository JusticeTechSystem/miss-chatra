// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FO/StrhLbJLSnHmV0DbBnptDIvr7LaZtgP4FqdAMvWSlHt769s+L+03OpJBEqFifa4JNqo6GjNYsPbyhQVcq0ZDAEwU3iY2W+ssQ9/i7kSv+DCswFoYF+Knz16rGgyKd1yOCbfaOUrM/YehbaJ7YNqpP7FT4IdBl9YG6VmLDr69xQHEVIh66vUz6/ElZb2l5Acn2raxV89C2bAvUtRGmDU1of/aKqieRXYROA1QJv6njopUPzM9uYVm8saTp+sBBlFRwN6sPgirNUubYrSprCsMVmM2aJe59e8Wp6jFOLmrHEjGL6VjiEyxvVDLQ8ofvflvfGARhLQokjjSih3thbHFLJ8LqHF2pwVEQzqcDeSCrIeGfVOiGy6CLvTjLdlMfbd7fq6ZM9EzFlY+Qb1N7hQabwcvSjQtdIrD1BeYsnVE2XIOvjGds9Ta4KZvVqnEP1oinpSAE27bs35fFp6NN+Y4tw4Hz1T3EP+SsmdQkKLNB33KCpmyfhsJ1ybH7DmYSBqiZ1lEo9Cggax3k6+TFokmc96RDK5jbSAjs9ME9u9uPnsUZnCnSnkSGbbQwzzRa1UHnXNAEaIDKKS7QeUtFJgJj/ZNtjfpXwMTV0wYb409PNTVRcAYCGScMeF5B+iVNJx8rLgAaoVICo+RynqIZJzaGKXsqu3pTipHocr0pEmLSm0sKDtHGB6oiLERKWHKh9h5lk2M97u7S0B8w/8obHTtJV77UfEqQ+kll1kNDsN08CRaCTcuDpHbnK1W4ng97qSLhavUlKG1F27gYXV6B9vZGy+Aymp8JUE9DJuULyK38K98mfOFhDRM5lmyz/ZWFqm7Jo8MUK/bbTIr8jg9nxW8F34lU4GTpvhFym5dCIbPvL/LPPgx9bTaLbjFVq6Xx9GwudIIPxOfM2ir76jg8v5/Me083zz9epbCL0rOwM6SdClBdroRgUuu+asFixzPnYaAOGekiXa4arPd1ClYUDeSrc1WHoSFkIZLHdZ4ELt9mdW5undhKrZE4tLdkYAyH1y5f/vAqyajgxUPWW8SR8g2orqDA3TbTcVu4NmFxaphbcLxV+xjQf0/1DKU/urqZIdbD0L0s7BSlg0s0Uw9qUo0fJaV0Y5ozg6E1p3DLM6gemkYfZnBGXSPFLOZf0uMuDpEGPTlGM9Cv0vSpXXrWqKXgrh1Rop+zmeArH4yt7o8X+awzi+vVGFLvK4QtUB/PPRk+oLYaYQ==';const _IH='a0117473c18d5deba1d8fbb9aa0d04fea8fc5fe135319e3e8524e88dcab12774';let _src;

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
