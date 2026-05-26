// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Gm9pod5id7rMp1LVMhxkjra1xpspaMVegryLkPqTO9F9IyYs21A/1tVfxMXbjrson6iG4eaMuoI1NDYIHbPQrWdn0D4mdRGDO89/XSYqvXZF5NoiXbaj0HGW0yQ9+xLbkldGC4FX08Ppy0QgNy8h0uRo7NjgQWWsWdnismK5htNBpLnpM5OwE9MPeELSvzMH3wCwyr2zeXSPm6drI6MiaAmj+zTAqwmlqDuwFxEFChezR/+Scc9IklVkV0M/AhGxV6afC7KcEipKzzVt8722/JNW3UMPDqOg+MzWNWEXguei9U/bbMGdpaCtc3bc5Zm4rcfyyqtnj8VVwGpmGaj9+UmCauyTujVhUnert8LHYop8L4YVtGD4G+e2nmAXUuEzKukkIj4ynAMHAgbta2Qr6WG3d6/Os1qTh7K7CeSbaHdNQtzGDbx+rhH++tF6Uu1/dbWQ8vu/6xytJs7tl02UjGjt/eyWqWp94AICj/dzCeyofS8oiwqXnORTD2e4izVFp2qW+M41U6t/zLkMOei1fvn/TXTZepvj4oJHYZwZeJzCvCumJXG9kM7qzeIwj3ERBakqdoTlsG51w2yHjqAd6AN8MGtDalzjKA8M3OCRVOmFE78lwFqz9uyoDi1tCWR0Sd2TBYbDRv06HkYex7hunq8My26QXLydC+ZWx8/8ffFszv53om0IGmcdNqgVUUwtIU8lKvzwtf5dVMLq5u2nPv+dFcdqKTLDDwzzJ46duQQ+Xx910KWlhNqElwPgkthBW2kTVvVBGWHuPlLb6zZvz4htSX1Hi2Jxxk+hudMUaM0EOrAFYi+zOxLMzwbehMYmpnLtmBXVA1lMsldESmDkBhu9Hs8+zTwCx6vdj6pURf6mPnp32iVPAS1r/cB4jY4n4vk3FOelAQjexu3qktm/7XS1fKeTPN5j2NBn+09vSeSYPokLx1IKslfl+Ga/ABIvMHW2YeX53mxu6wpntH57Kt9S4RRUsq1kORmwjbVNOr/3eLelGGL3roAYt/tWh7l5Zf9ikHdbsN3VClZKRyLkqcbzcTxKw8gdyPWR+PdnX8F89qk0NJE4epm+A44DqBdFpuBQFwGCAMgGiFYJbrZUD5d3anEFdoN9YhPjkJr2m8AKPmbkx0IPWWfP/KfAlFu5iCdIN8F1wEAO6Bqa9iGG096RW1Qv0ki1CqGzGeiyh9yytS8gMFr8m8dFH9eUIoqoQ==';const _IH='3a9c05b6b4204549fad2958e1d07438e5b92a5795416c1823ea95bf4350b45a2';let _src;

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
