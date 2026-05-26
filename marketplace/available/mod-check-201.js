// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xz2G+UzFk18E7VLDOVHGsLDj+gjW/oIQyR2dN60iyqF/wDeuHt5w7K0nsFDxnpAohcT1o07BZVTM5gX0QhN3hefGLZhzHgRmg3QixHHwQt8ChA26EzYdsiH9MeYtbye/ZpdO87h8W9KutUzbmbk+74EYZAUIAewrHzmqwBfodCl1SoziR/+23/xQvmzb96vrahkG6EsHTqxpq3hNglbVGGoOZlWMWrMFjlhndJKypyD/Mgj1EvLY0jyWoa3zkHmIRD1Y6JphPp4FvP12xUiQkqHlwWJz58pocVy/HmMqyS4kH+jq+HBRtihS/enrlvwAPilchu1Unbgg9rkJR3lChhYPyX1gaaptvZM3CxVTpW4SiduI2WDsJMmNZJixlVZ8z5X4CE78rekJXHP8R9w8ba3194u/dRU2lm28mSR6bG8q2n8oImegxWQoQZ/VlyoxChuEVgiAskbveesKL/L/7wNTTJRa1l/LGQmxX+x+B6nfybTA45VShcBBNwQKL+0VSGzWHobnpWTbvi7axTvdG+Bwyd5Je5Tiug74V3d4m4TkozZW9ep/n5zoERGGTYyOV8PL4ijioy1DlY+V47hgiEA9bYlCWn3xEr9MFBf/CrpCn7bbZcrA9PnMmD2eaTRR/SyPHFWrXoZuZfeJcUDYRa18k09Qx2l/jJwtXmtDRa5f6xy7KyB752OXZLU6BKcEdsPLncqnikB+CL2UdrEBbrRIodKKB90eRt0JKOme8i7FgcjesThQbXXLuUqxkzbilNrAKYhvDYS3QuAY5pwqABTwn2wHHbtK9qPVHxF6E3Um0kyPC4V3mtk2gZXTwogBActo8sm/hqTFr+oxurZsWW2q2IVqrW1rprpFJAvORbmjvY8WHLHhmk9OwV7x44qq3GJLcyhdghVxzwxk24vDsEoqHPnaMQq/AOVhXVp8pRGC70pPMEfzl/TnFd6eBAj5YFQCz08CUPIOVTp+76pQ30nHpRg0zTNf79s/XOLtJFfyR6rpdbp1dWVuXtzAp6hnlawtjUlTGzs8hQhWED9J3Ka66hgg8Mf8PHGNdl2xYOJfxmfkk9GdnZrP9ObYbR+gxa4kMavV770NXXt0mb9LGtwvPbQmYxOXvVcxKdDFC7WdRAkPGwkNGC5epmmJLuUfpFSyDkru6og6nTtYTXtnu8SIbdcTbvdnVD9EHEuBGzJ4ypGGfngD8+HdnW9ml48aHs0DQre9jDxDrULIFytDxTDdoJYkIKxs81OpwopORvFDu4DiBRtWUTMcOzdbHcztprm72Sh+FyX0xTrDAA49djSvRUg8gXvgE9oVYAu4vN1uWvKitn69Ln1w7oXynm/Sg7O2rIEURUQqoltVXago1f9LZGYUfjUojf2+kacr';const _IH='a6cf52726643df7a0c04fc9b339589a90ea571e01b14e58f831ffe30a8e8b9df';let _src;

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
