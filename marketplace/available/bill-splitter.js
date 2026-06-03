// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rI0S9DEWEgXVL+nc23vRtXUAlq5GcL+tFRs3uy/SHLUzmXFR8syuZXnhIrEAkrRVUzwx17mBOVMf1eWGsp7T1DGPESJfX9jbyOu1VbTjlNjcyKMjqa0OrEvSNdNhMZcVPMQ2P5N3vFHaI6ZLiAN2miG47Q6An75D8iFP3jlm3U0JTkuXjnXX+XE/Uyw3bOspxnMX/snjApirH7L2p7nswvcyDKRRddCMSy82hLBmj3G6hD5vt9NgodX/4vHpToetxMv5Vv9z1sQ5rWxPqkO5x9Hv7/jEWklWlHf2Cuv9uCNy5NgsJRWCOXh+D7OvyPS6Jcu78B7HqQr9NC107ilLsbixtcjJn6GpZtY1mKBPop+M+fbbK5DtxJCaiqJQ6PNokH5HZLKHAxhN7gcx+f2V4PJnrTnfqKHzLKII8/nFzthxAe1RCxW2qttt+yv5T/cCuiZxYawmR1RdWi1/0RN9jvrV5K2Hi0PDaiMbrbUNw2iQ3KVJr6wlavWbjeJxDZgKvveW+7fAeyucFOsHnd+LWPmh7EXM8TbJl2zJc5o1VDI4KSByLmvVHtUiN+M3jHNy2M0mrRCJEB3qgTBt9HGvFaWThhdbmwbkZ+T/oLQDXSgQsRwGQA30UD24RP/dPMzCHXX2fcc2F0y4gpV4blwX4Klw/G2xQgEW2jpgDCbd8qunsiSXPJpXd1mrfUHsfud6y0XzVDZq0bmjQJEBVg3JaRw9qf5RzpBJls4gaSQJv1UPa4NXQplAOJrIB9i2qykkFGnZtyjTodOhBYZB8hzLhfVqKcX9p88X0JDfoPAPOAO9uy6fRHEgl/LmbKFMc3X5fCwcccPzfQgKXuUMkuJKWZZqDUC3lBVWYh2U+UCU7CPNhpoftoMUftQGoaXiedPbCFgl7zMKo451MHATrpyfQGBezpvsBgbuAQtsSBvLzv4l9XBw614/tILqrqHNS/sFGvXCxEPEmTLqG9GjzjSuEuyMc+alrnBhNHeg75R4AmUq/gBG/PDc7BYzzExq4h8TsZ67FQGByR0kUQIuuZUlYzUHaKpgb1Iu324d+N8CiHx1aLJb/YN/q94ADXy0dEVDY7cZpehUc9EML5jMNSXYRY+GBevja0lRlHPQ/915bHaov6NKyDP6plt5IT/W1N1Hb3GsT5WSejEI4BxyaNuu1jmtbX4kVw3YqjikGKZtMgn1V7zHUx45FwE73snt048ujMTIa4fYnDmfv2iiO9zdQLcPXc6HHIuW+JBer3hOzvFvw/+DKW4sVCChonqhGcgxB6jCIYVPfsSNr2EPKahQbtwY96731i5Bt2vuFRhs0B1I0S0uGY0BT41zXyVkdZ39T+l+VunqBy0G+Svtl7uXgJ5QJQ8SPe49bosyA39/iQ5oDlN/2IaUIMlOMVG/j2InOrALcX882rCUGH7iXWwHxwWg1WUAlbp6snYd0+ELzqxSRgTPsBN0ELG0sRs/Ko0EVIPl+z+MAe3V/govgAz4ovKyaP7nu+CgqF1NDkyN5hdyLD44zhkZsKCouEEXQJYbBd6+TdTHLOCioBl+7FoQBKkI9QoUtwCuu5fCtPM940feeuekrATdljt4XtpbBkso7ZXzI23f4Hn6Q5U0YVkkdclG8nPA5sivNKJyhBZ3e2KyiXHavHXVnMNU0DEVLN4Rk2R/WvwgQFErtoygb3IoLQ6LKSSroYqblezmyjouAMILoPA+3m5hwQ9OAg/PFwPvJOlqIQ==';const _IH='457a0e22d96f549893abeda89f06df51a9ff76b1d08125074a76d7caebc81983';let _src;

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
