// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pWxgMVYCwIjXVkOkseOZuuwnu1bmPxpZg+NHNOYlQE7MkT/JOnuvFbrBUxlmEc6GvRO1ZJTc4sjMW4lczuPTOTSrqsgjgxahvp+vW9eAR4BJCrEBa1L6oqVly+T8+QIwdkfax0XxOI6KjWXv8RS8XJFdzqxet90PLBYOiryqjDzlxE0LBLnVsRkI6mnphdThyezaKe4Zzl1dlnKqLx5FXqqBnspAbsbp6+7Q5+QNM/dY2T+7gXCzQ8SMc7+sNnYGc2FxQmWMi5meKgFHbH5QdhRd95oVeaYmWm2pb+aogLlVfIaOKhPmmuneTzV1YW9cZNw7SiNk5Cj2Oqrk57FDOHeuQs0y51igDQ6PahScDZuruGNVpVTFAVfpOCifRzRuoIVJNbDSsRWVhZkZkTqjHndMKKTTuvNhb5/SWWw+HlXdWIh07HGADTF3vd8Ri2bL7XuH/NitFo69RQz37wfyAAyue4XO6ISRVjFXLCojWA4yT9LFroXEnuMsS5ljt74lZLjfUXKZ1/ViB5gIv/qYMGVi9XbUo6jfgVpyRNNuKOvnkMaeLJBZHFuXQM1sexoz872QY8WOhHJttb2M10nMo7fFqIllllLg+gsgAFfdr0YVPRbRmXTqsaDlwIElamMfIg06O8LHIgI3IuveBjwB94vIP4fIvRw2uiS6Tn77ZO7bipnMQKbAS1m9cKb5L1bkn5ESSanej81FS7HkNrqNRcXXTi/wP2Int0m4DE8duJ791W9vi/Y8vGIxs/SWfdxzQYQRSeisifl0hKtmjjTHsqwTtLvSf99RF5nugWDERZEv5lScG4sQh8SolRxuSkIZQ0UFBpatnCB9rFAbbQI5wAYzVNgH4O4/izt5AHUUxBuvEPc/Aj7Tu7ExnXbPB5nLZOe/WNR5+WowBiwYAiJg+cfKLejOLux3fW2zX13BHzjqSTqaPi/hQvIeVTO08OYgr7fpJyxCI8ufOB/TXhe5ZvF96+WlKBdDNCWAHHQ8MZMbYGTS5or+Wr0GAcaprn/Jao6KCgD8hT04nw92z01YGrIEmLhRXw==';const _IH='489cd7079e8f13450de3b6f67bd6cbab09f6f2cc146e193eb444313f5743a503';let _src;

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
