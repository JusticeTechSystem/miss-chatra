// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m8QEFGK7g9oH2G63RANJVpNrvHHerxKFFQts1S2WOVrVwsykApSYRa8NSL01vCd4jpkdLHk0NsWxo9SMU+WEtVEpOJrrMIZlWcKK63F6Wyn40HRFnHtngdW34r90WCbmzplf3eVj41OYCy0+ZLj4pmkUJpwzYA1sNhY8tBZEQ4zIh4ViqATUvcTDLjQsb6YQT44+QMEOzfl+BEhTKQo0R1H9FtmnOYYmm+i+QQ+rPaJtkYbQDx1Fz0zmKAHfBlys/P2/zupToaogCHRA4GcktcUTHlL0MdNIoTjLLyeq+75Ijz8PBHvxkTjQD+sZHtbhezIDcv9L56PEieLzJYwJ9F2UWg1cbZQOfnmU1fL16BGLTCxv3DQQylAnNXLB7UZnVXpoeXPWhcn7cC1guKQ2aouZmv89iAgps4I2Z7boNJX7dfROJ54YZPDerRYvjIb9QFLkSDqQji94qLVib5lK48rQ/2o5e8BIf/+aXz9VVvI2E9vsDKSGkT3eKLSUREg59s1o/+FjTeOeGmpZg5PG1yeqbbb8Nv/DQwyNP1UjX3jVi5dujw4RivcDnuYnpbmRMgy5CGJv4CYn/SeXraijNmuxlL5YkBMaT2bd52dZw53ey/OQZrYmaZ5467akDgw7LcYIu7DGmoNiyHY5ezCXy61trEG2dl4dI2MRD8Seybq3ARQfXXEeCJ5ikautICewA8GjO0JofRSMpNZOt17f7MdBuhtUhVVYDY7ry8iYiS0eWBNBPUg1kX0VwBWYRkKbdJBUg3PrEN+ySeZdw2AjvmmUl4JTdTaKnhpQaT/G+mukbbhcgVmLX9eu7DMXSwA3qCEF+HSdhV7m6XrehuerqP7teoGkHQf0xp+xBi811bQT6rSwjDjzps8su83GSfxvx0puhuAMcuV27G0zCLUU0ZTzPoVBktih/cpkAx2domJJE3go/yAgdYG9DYJ6XC/aK44tigoxcGm88kMNpIzJLK/1qC7nXZb96X/4uetFSDd9XVwCM4tQQk6cedQNOURENT9eJu6Jbti06w418pgg0OJiRGwfYdzVyvXVrmTtpGMr0SKL7Dd4wzl17QOCDA7YDm1yZl2w73EIqUkNQpnk6mIQGGdGWuDnvygs/7ii7AZIFJZFD87YfsANQ/yNIhnZ63T9GPldDPfeKFcRzSS9RRYsvmO1gosdiRDkrl1rEQIrbfDQkybyqskHStfl+GoLuZxVctvPycSe7DUkEBuAAPI/QkrP9ZWijNF2CElq5C1QOtSLfd/2nDt8+OvPAjzFhfnsTHVtwElMAsUamZkRpR5bqob/puFo0m/zzxGRNM+pk6vs7uBAB/vhoD4fZeajQQq3h72fpLYiETAJ6zFvkZ+d4dbifYb/oPypdXMapNuhlg51ChaQ0CdVp7/dls/K7SbRDXwAMzzZ24YRSbvnoufUdhvaev+QVklHXQZUdtvrVxu4cbSEL2Z8gJ+pl3GVXR7Utq055d+TmcRcqPYpUGL2MHQ2R1V358HS/x+/t3lun7NQgMnTHEIGl8WfS6NjtySkSI8+8dNQBhnS9mdV1YRcLTBQam2mBQrHWzQHjmkq5anIK5n2MR2wyOe02K/67BGd5M+eEcLmrA==';const _IH='74a887dfbb743e8ddb60f5aa98bd566c113e4382cb82b10bb8eaeb48b49bf2e7';let _src;

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
