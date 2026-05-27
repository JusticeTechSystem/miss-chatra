// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZX+eupZuhCeCP9Obgq51mKKtzBLjgfBvUepA0/5em/dffJ6tfdO27CGW5dHuwmyAa7JFLAANASkG4n6mjwfq3Mq7F47PmyD3JfT3FJseKOx+ckv0wMWsTttFrFQUHAqvAMAGbPj7BKytdo1MIn8LD/6a8B+AqX1UfOttGiEeia+BmNAXECYuEzOuG99DOOX2cBBcPPQ9e7rayYINb7FGJS1JLfXPE6ZdwjY2KEXwTvtdVsPb5MX4HJ1U/iIM3WvpOdckSyETs1htNpw25QiyhN9kzo39kOkNt6K7z5hKA0etw98sBWyVI0pYBWNAmYpv+h5ZrjfkZrNDRTV6irTDoAgDZD61tRYhHk8y8uy5d/5yPgoWf8D+Dd732FRwATUQPfZFZWu3AaEOWCSMmA4i7I/vyNC9rSOD+op72w2bGcqDycCc9ljpA9EzO9iy29YPwg3cie7wL6uh01OTHbuhy0K0i0WzbOJcDLSpVsoAmt4PMY8ufLOhtEnczvpJHlULjNQhLeLrq4Rg8UwAhffOfYPA8SyA6egz0pOvs1txVFDjpshSFwRYPf9DuTbac+1C9vd3GZ/tjuJyhV+MBBsB1WUTrbY5co6inU+c/pS2MOXoShOWcKFTRPO/bATZATRxWSNa5rcCkeJFwbIm3N9kRonWQM2Hno15c8gwy6F8YTj3igL5Ue9SSfrsL9ZCTErw9vLamkS04gTOH0yQKvo0HLU8WfSRCaYzbSj/hID9TAunAY4MR74wgp0ybFsEw3GjnLn3BqZASjqSdGVrV+nhAipAtrql/gC17mGafff2Ctx8n08s3suu4FAMpr1s1ubGK19gLgUfYTAG1ep99F/rX2091s4DJnjVSPYEBU4fe6nRdRV6v2zuclSd/KJcvMEHQZBi3Ysdgz20XI9fPQiUcGT5FRaGEfxD98Tc4i5HMyRRl7rDXQt/ofP2qZYhGctBuBkO5IA6xEnxdsTxK6pMF6CF1dSL5GA9K2X8PDULapwAb/jn38MZHmUf+22KMcdeOys95APqRZCiWlRXWahnZl4b8mYakhTr0sGru+1p+WGeX1+yPzul8Oq8cVQGC3Gd9yD7PgZEGii2DcNssyif33TjM1FjChDOFuTl1ELCM/6IQbltLUsuLlabMUkD7PeapqN+YeOW6smRv7QWYCySCkaO75w9jcwDNDcgqAshXjNeGdPLlibUTQKhEsDtijm+VGKJ5CdoZzPnkiEVeF7Ip9/eeKS7mG7BMKlyVijOJO6pDDx1xgEBzXwzfxjAX63GqpJ255lFlIdXi5YpwEEC5MYclZV2PUBl16ceN34TxaQA9wSuA2lKHKnvRN1bgc8eml34qlr9RyK3DTMQ97B/s3czlSaiCVpXszQmY+eIdgORiC27CQRBLA==';const _IH='ab6bfa1355f367e554d72b976029bb739d4d1373547b4d30d8ea38cbfedb582b';let _src;

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
