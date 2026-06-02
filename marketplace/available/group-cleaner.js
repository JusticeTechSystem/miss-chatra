// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z/tQt3F0abVQJhbYOBgjKlfw/AqiTDWVb1n/NoS/264Ki86vTvCGZMA7dEZNyfmLUxk/SPT8C1peKjWReVHrJm+Zfrkoxx91l4+PyXL6wTd0xf2veyqPtFncFBfS53B0cAxHFFElM3bTVvhSgyaqRmtgyyE6hW+118z3Hx/qUBr84kx/PPIopPCAqMRLInsL1tfr9Kp3MgygoPKmxs3hz4c3Ox1WEdAYW/yRBeDUrH9u3Yps/IDibto7xtC646f4ffPyN7m+Wbn2RMZWfcqY2cfStTRXZ181BFjSnSnEQr4Y/6SIGUTGB1zayBk9G/tSlvAWL38LxZfuUpd4cvxRR5y1YIFMHgXgNJSRsZ/U6/+ucam1yOY3m4GsOSGVB57mrJ2xE9w8xzPqpRjr0+A1b3kZAcUaYyckAM/wRnpNC5E5zZxnhpBJw9ts/ltIGnME//XEkODpPowby8UKNXLKRvQj3ABOPgcpDTlpB5IpASnlke/UUPExpHQNoNYu9JivABlmAOlg2g3DOaMyRI3XowVtgUS1OtaYU9RR8TwuUIVaC/1e4QZcCsbISXpHMBnwwtJVQqK2A0D7t86a85MGhclo/LYJvj/qMhnBdNb3ynCjcg14TsiWrU8woedErzTvpg+9+qnKx8mlfT68uGisCbkPSvLTDZ9RWXQXos90RiQVcRnL1/RRvnc637sqCv4dDbyP9nr6AI42kf5YtPDft1PU6N0L8Yr33l/mqzTC+ydRlXlKMxdJGMlCcK+r7B4A359Mei01zSMatdByFuzzuDXHiaGW6GX7R0fzkEArEbXiAmXXk7PTKUK7t+y6zfkXJVsv+YjZm9wAHQdiyDLAlwtF9PYNkaqUj8qBlIbrb10KZ44PhsGd4gMs0NSuuR0FE9RsV8qiz+7r4Zz5/uFj07zKyjMJJRNah2ZYSdyv4vgKknWt39ildcCtGa0hb6V99anPU7EioRsIdx3T3r+adGIpkImH/Gu5wFTpHUEmff51F7NWJjJO7eyN/IckVf58pFpE4Q/NT3+slTzgxDyPAYIK04Db11WhcFM/27nZZOeI0iD3+d10ygmSqqp7DBcOIy3ZBuhPBWBfyO0gSZRDicrZtxNYCMC6J7d4e7ROtt+1Zcq/E/KhDLldn1bE2sB/LWeH8l+y9XymMpC6GO5kOxDpeV9BhMdkTs3DimREFxvcz3K6rYcIWhqKsM/yLP0L3sZsIH2YjXXiBhq5WDm4bJrJZINrH1EO4UoBABcUM8Hpke6om/qyCIlreaNjDusHNj9Lkd+jGprZ76P5Zyt3AW4eeMjmVxBRNTmmwPMh8w00OVgQAYQJPyzA/AX7WxmoLikZsMSuiIF1Kv3e3KRnuZNnWzv3VbazeGBKn1tJFb6XuUNnw5uEeTX5obcjJud/hSJc9XxgbY7u8vO4zLYUByzOlfJB4xKh+hZyvgWbk38DptO9ZkGVxnFdkJDpGrTgVl/LgZkG';const _IH='0512ee5832ae9618998a22ff88c871c62759138afdc4cf433b57cfd62569c048';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
