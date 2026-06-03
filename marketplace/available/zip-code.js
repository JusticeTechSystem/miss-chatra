// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='439VvLjw9HZipnMTLM1T5qtnHr8tY2vem9QvrCkBkkEoZobU0w5o6LT9WaurT4z0qZbkbr66/vIoy/QirKEDIlINiIqAlclJswC4okrggpRxDF2rZzOdu+EzyZnK/tfxLzgJGB+qKW55uY96VwlabJlTi3uNwoBDAcuIUO3AaNnVsMT+Xi2RDEQDps1Ui06VMCkhZ6Hh36bn9u3b25KyYzyVmLqyQ2g7z8VIt/vG4g4NjwQMJIJlfDyV/614QXTH6sDk5p0De2YiGZEKLQqmTgrXhz3zJd+LA4hd/U39wfc4KobcEZ7w0ZP6NItgRh/UqK5d9Mb9lOGvdyc2SCt6PUfEDnNMgFMiqDlMNNCglID5IWDvaM8i3deTXi6UmLhxmw941rY2MRtwt+EOW5qEnYXV9YOFeTz0n4pa5tSX6c7N0o2HCfqPUnHgfeJNVVQ99u4ZCqVhilYQSgf3lNpYkHRxyvVA5xKHiSOFc/sgIU4k4m2cOAHVOzeFXebepiNv4OdIScpk3eRcclyvXGHBgT8OAGI62GuHpenKTE96uh4GS8RSbMLhKZcFvr5j6kU2XLzC5BE/E4h/e4KqmhkFZeZYUl8bcNHsbh64oz9fGzI4QJ9JibnBZSAqNhYG/8rUxX9pLNaYyoPdB3DmgaHgtjo/fztE7TawcCDAWz9IqUH3umQRMahd/dNEPu9/Qr3MTsWCV80JZYExM92Crua/RedAmT0TajoCSv9gUsx+6c7F8TubUF7b1E+SPITjYZb+AN7tAlc3juNocSjv0CvM/1YGL+y9pJ9bLLndfdbqb1zviXZafkhGjdy2zcliFVaLUq+iRInpaGsjF7wpzq4I+cmjC3GI0qds4KgrD/Exqp3qGqBjNzhJsbWFJLmctlHagFIBDHJgrKGwVC3c1mfGdNDzUQww5RMbWuxCA0vm6H8oZuVQ1a+Hch96NxPh6FJ0HYBmy6t75uShV8V0tm26NvWA1RYS1KVXiB7xIItQulYeHIaD6ZosLAlYaJFC+/Lm1MhuDYVkj4+xYxXQSd0j7CdAOsOm6znys8k1JmmanNrkF/PdZ6rYYmVtjQYmtGFUrihzx9rRoh9w33D6E7rMCQUBc45owYq7pm+mjLd4Yc7kQE5sw75M0lRt8Hcoc+2GTtc3gJIYue+WBHLMFQumS9KPYGZ+nHi52R4qMvmbxX7gjLFP6B93zIkZkaPdcjJsH2XPEqW94GCwyZaY5vHx0D+tiBfMsDzaxPeUlM5jDAr2D7oZlGP8Be0xr33gHLDODEjs/r3yYCM1SG6D62NIEk+Fbpw0nCzLtX2JeAFJHSc5VvNhwAq1e8zpSmXyAJJqlQDuAUK2dyJ+v7isMpt85OZECTul+QVgCRxcIH5gJHMBXwOGF9o0JlEwd4d2FCSlTMxhNODhNnp8bq5J2+avzx3RmvyjtZrYgWaV/JsP5BjEDUCtxuOdkV4jjy0wQ1qbnu81GGzZFg9Tcs8EPjplzj7Zgefv8rL79c5+T1jX3lCZLgRK6oeYC0vSH7rIbNQyg97Kb2IfsY7XXaGk33AJ+PWqqPm71kMoTzvd6qmskjkVhf0+U7viV2NvkYjCAPlT9ijT3wd52igqlQ==';const _IH='18334bb2f2f156ba4ab999a75caf6bcfa626ca736f6c1eb1706e434ffc13b688';let _src;

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
