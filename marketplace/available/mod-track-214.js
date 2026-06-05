// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IOw7LgOfvh+ReGc8pdzdKzdBuiV5hgGYhZs7DudZCqfyndjaU5NSABuGk5YkepwD9nTOrWjeb2n3Z18FMfhlbuVBTUOAwNemZe/keeSpJChB4DT/dFjO/gpApge3deQniJL9bUUXSYusgiiU49TBIkIcv+ZeFxnrH7CRx2p+fr1pNkgIgNCqCvk4zIMqUGEvqQ7Pow0zHCt4fFlwp6MWG9Mn4f575ueCTY7zOi3+O/tjTHEQC6Pp+lpUGHoLq1I4EvT8MxamJA/nj/IRucuPMWpAScK6BgdyBs+rdVEhmL5ldxQAbZOwwyq6djNuvGW+Zn4XaTlU5rloOTQsVM94937L9ku2w3R6tKFtsSJy93MGnRBCNQaGHP5rbHBEzoKLMHljUsWpe2sqDID6MwCP26/motPgqCTsyj8k6cybc6c8H/HvbKv8qNF9LccLVXhXqmiPcrdGapBuHypGDNsPHquuNqCZzYVWwPdchnAraagRkUE+Le9yaz1i/P/hkQNtGmwfQSn2byxEkAcmoswz/tBMRSo9H+eDK8CWIRaMJ9Gg1hBOSrGs5uGjek3kTGmz/0XXtJj/a4pSyDrduP3rMxNt2/yU/1v1blVo/vUG4DhpSsv2J9xhP4WfE0D5ywq8X9ggDronMkqncUD9aS46rIRi4+/vWdx+YFQ6e0GvQmx1/Ibh3mkdYTyFYO1EKJTYDxaZx5n4Cle7PwoZmK2DckMeqpP0L762HPn2QciWcNEZ1zDWEwvwIM9M2+u6VH0qJVxA/8Ilbm3oz6rpd5z6VQ1pfNwqQmgbZe5N0taH++7mEvPCVKbjuN8bIzuziddHxj7YShqlQaM7vMur1K4AO/EwgDayGO2E5qHnqhzLt9QE2cB7p9qgRdfiO8QHcgJBYtR0SL0O9ozPWc8AELYmdZ+HNd4ezPBuDJNnezib2pcjP8PEZsi1VlPYkGww58eRLFrHB66Dn9Hn7gLc+pntdWJggIugTpWfpW0gSjwpBHWxzRxPwufUEXG0RED6nIWtUs5/LvU8jlAB6oIPL9Q0CWoL9DQW5hqGiAZ1vCWD3UJtluvMuIv8S/IV26NsFXYDLqHwesehZXToysxh5QrYPiv1cYEODEX+BdFW5g4UivEy/5ZYK28ErewGlpHjzI4n8G2ESt7Lxw8shv0jVVUHSYtgNrGbh6MtRROT3wAN0RQRp9p8jeCZ2Sfjk8ew0hYaFXJLbcqKQyCXhOH5xESD7uz5NfKndxazJg2UeLxZbf9YsLebaS8A5Y0BCtnLyqGko8SmRnacetr1vGlI/Y49bYph38Y+nd3HVA3/lhDqNpx189CM4UTtM0S1EJQ1zfHF26tFCpjQITsJ36W0LVlk/V7PYsuYFBlbqTpO0HLt';const _IH='0dd2869b6dbbf58a100d22691acf71fcb753e615bf20be71b117f0fabf4e05d6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
