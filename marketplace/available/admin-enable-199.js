// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Pw3lsIPtfJfTVFEocplSd48hcJBYERHcKymJhc46SdxdpcultKdYrUTFpltC7WG6eGrMa1O+VUK2HDA5C08KyKp1Hnelai3CkxkodG+4lNr/YYM2EkBqejhu/BHSHwQ93S3TirrXyKvv7xKo+WF3Bu/2ItRNVmdjpV4heNL2BDsHLgtn7fEfnTeDbUQWfKDjQt8sDtkum5ghHl7bnma/bGkiCbft7XQ0OljSt0V5+biUhMk71zXfJFKsWykeIcC4BV/K3rcyhtMgmtmXB/RtlqjPdr/BYHX4OQX6f9/u440UawAUdNBOI0K8EHsCbgofP0mvGDAH1oaWfJpV/SV8/MG4el7CY4wgWTMf0Sq/awiI6ZwEOaAUJridz35cKMldElxqfLLX5rwqosLfJKmaqyq6rH+IOO+r/tjaILrnWGkbxwFEVB8HuEA6tgmQSttRFLN1EFn/BkjTx/NNjqbFqtLmtbzF1SsY/l2QHrOGroZPTdiSTNBNXAD1vYKf8Q5fe/awfRMgb5yTz4DIhh3sGMzreDbld826RyfNec+SZVs04CIIZRggpOYYuXzkmfEs24b+RAkS1BSBzQTzAGI0LSblN4/6v968lP9HmEIzaijkCnne7TTJ327uC9nmJ4zhTiowff3lIVFEHzNY4rNYCvW0QdlXYytmA3t25JYDN4BKntT5ZeUNROKS+9wUuKBGz6uIA0/KGt7HLb7p6XACeoJaBsPuTYMJcnMhBZQiBLHW37JYdt0FTHhUofH7wih4h0RepuLZPfpahxcqr1g0c30fQB8eWH7jKHmsQAVSU095jBARgr9UAiaIAPPqrwWCNC8Uk/+rz7+6oJ5tF/YLHDsaw30POpvbyKnoTk4uIV2+Gu1WS65t1icceUOy4Vr2cbXChgzVK6FQG2wKCqn64rBVdu3qBKEVhM+QczJW4Aa9qbiwy8lLPAlKVBvAEgnT/+y+A5eu2kRfubBBb51EBmhteTJR8/HenvN6CPEYapAmCm7epE20yZL8cNMFCI4Og==';const _IH='1426c9d089cba8417a49ed43bc0ff3a0947f6082243702dab63ca53a03818128';let _src;

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
