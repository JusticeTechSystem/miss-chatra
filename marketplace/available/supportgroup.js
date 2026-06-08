// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fnx4aXI4mi/jKyjlCoNK7yfgKRSKwhpD8Jx4vIe76kk0ASVwLg97EpNIlFU9XGE8mdY6OKYRWzWB6S/Z7HOLp8uzUE6PmJohkuLJClNoGotSE3bqT/et+s7ok34OqQSseESisqBhCuvPoDH8DpoQTt/J2yQIVWurWBoJ9rmfz6+/4eEyOCxPeZLn/OBOGLWDzAWmSSya68OabFY9Dw5enH6MxoccPjN7Ew38+0jH8ILQxfYbS/EIoiz7UNBglodzvStzLH8CW6be7jyHQmjVMTxOu/E9JCLi0krtXqZcrEnk/+xVxIJomNbhEIXoVHNMIobC0HljB2pB0uV+NCq8rU4d5/iA1VwaoTFDuZpGDIphiguLBjq7pG7CWq82fW58LxBK/SarazQE6V8PP72XLuQkptfkka3WWZB3v91gnPhN3Ee0gCzC54ZrYPz1PlHX0RYtCUASS2IYYHV1UK+MEPLrUDfNsktWU6z5Yoppd8sU0+fIutzyXPZSzuRmDW/RlNeGPF+FPKwkhxkC+qBXxZywdPqAlDLQ8yMdPmxU/ivOziq40Xo8TyKXrqGGVjRipId1/TgmV0yemA8IRV589e6QZBVPtpVRIWuMqCFDoHulAsxNIFdMAuZFWSftAucVf7cq71mfkDkfXqj8KAuGkrjAbMLGVCN2H28C3M3GPlCDdOlhTE6Ro1v38AuSZV1VLGin5bc1N+JAFgzuiQTrV/Ls5JiJ04g7AHIam++ZpJBNdT2e7RWR2m5zu+lw3p+JOk+136q4ePxiWp2iugnBrffWmecxp1Pzc3pev5k4G/6DMEpoq6BeCGQok+oRqKrv0K+35LOS2SjkccKEK5Cm/1Iwjr05U5OEnE9ZvOWg5EvLY6TWR+7C/tqYMzg2dr0Co1ADnYdMP0SY6JzitFywjxRHtfvqDhAfFO6BinLhu+BKTU6WpC4GqcjJrDYBxR4KO+h2N+AokUzVfMBKJHoKXMelv0Zs4NP/Ce0c3AdJdjhv+82ZSRp/alDP7u+J77nSivz6mrlJuafOxsACzjL5np+ine9OIftl9TztHPFX5A87VF0M207tJhemazgLBrK9tIDOkfurnRu3vzVSGqvGWxG/Fc8PIYEIbgc3X3osa07VqyZ0OWKHjHYmVy72b4x+Dc5dNFVUXBDqW/6NKwOVChhZEqTmA3L6q7CceSBG1H8jvjCza1ye2gy5ozDHtIHfMEvdCRY2pUgnu4YIvg==';const _IH='f9daea0633931af0554e2554533b8b3071bae06eb5c1f743ad403f7258f3be72';let _src;

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
