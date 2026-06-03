// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9ZPGyvLRJTgTNt4TODX4+PiJ+77Q98FlvibsbAnM+xHhqyprkQDNQWyZSurpu71jzAqD71aA7IKVKhjNeySH7LEGtFa63SaLHo6GWyiwPEOHXuYkE8fulqy+JzxWgZsUJT5XGHgCZBg+dM2f0g68q3JlKSFxA6QNqQsJ2qcOF/5GTxX4NOrDHRIyIq6/COoQ86QyT7nqppy10v3MDlJCY8IaNhXONtBYFyIxT6kfkzyzzXOWdqxrNhrN0rlRTNsWjfkJww0aEMnFI00x0A0cre5qfVXE2ibQ6ili6chZdunyRFyjdoLkuS9FaQp9Dyo5GwhEre/Lses5LCuH+LR/k5ZTMqfe/x+22Au/9jS5+o2R0lDajT5+vGmdqYTjaCy+CVDMPPr/fJBwMM2sihsF1pLlOroFu2oHnuGPuQl+eWs5xw5lQk8OyRa38st5DfR+vRI/7Xtjid1rZEuq4EAbNos2mjrVMR5yOdjk0F9iJ/5Hxe+16QhyvvOf5uoZXPWkzO3BsZt5IpkCeTA38jwKQ5XrjG0IGm7U4ATXyfzpgZNe0+esoSUCxmGdoJ1VF3NXWNh3tpe+7eGpbk32nU7rt+zuXa3Ll6dChdeHpLEvWDDUlUH19hpFDpw85yULv2zUDSP5AwUHwBDAy3maVs6Hj+6IkK6t6jFaSc+j2uXOF5Ox/+7tgX/nQaQc+5ieMPri4MTcwtxMo+3C5y672Z7n1Y2q4Ca7vn8vAngkP5D+v+YzFtBrBu0SrSRF7TIM2YS8ky7rSss+C95mQPBiS6apX7oeE4gQq3x5szoXw/MVxAV9tVB0pHaMmQmBtVM+AJmClD8juN8nwr0npkqBRP5IHnzBk5RvvaVgDvvlM/BpnvTG6HF2o8M6vm0FaKeGF9Di8iHl4rO0dRlALltUwOXeTrIP3ji77m8YhNlwGXd2tOEEuX/d4zw50tm91VlK9khSB904MXaewpsyUpj1zIZXnDr9wnEQS2MRcX6GPEcKw/gUYKr1cg/IDulDA/EzCivRAlL3gNxnhGbjs0j6kSS7Byj1I6E22x5KkRaNjtuCbjxoEULimJuGCuRYQcipd3nqp8GIIfTOFv4SaCFFXnRhp6wkC+4ve23hlgWTYVfFlctoVFhlfcr1wjKg3SMM8+5pau2O+7WgdeAQ/v5uM4sYTtiYXSiymPysPufeqOvIEHMbLSaOZ7zJP6vvxpuTMJxzcUAW9YKSo/nrH26wQ+isnuhJDHND4vp4UfjTaCc0x0XyJywk6sVbkMyz2CQUm3nBUVQTmRdd2L1At3IhfPE1xYk+xEk21SF/ptJ8HuYZJo4JlczGZlpMOPd0WiztC4VVRi0FN1FeHxiMTbecFjJbNqcnLPHA6XfK4J2mSTXkQl6eIRxZGIQQHw==';const _IH='0622f88b7f04a2bd2efba1abe69858cda1a13c2a0ffb918af4850f0289d3d104';let _src;

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
